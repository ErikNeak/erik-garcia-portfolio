/**
 * GOOGLE APPS SCRIPT PARA FUTURX STUDIO
 * 
 * INSTRUCCIONES DE USO:
 * 1. Ve a sheet.new para crear una nueva hoja de cálculo.
 * 2. En la hoja de cálculo, ve a Extensiones -> Apps Script.
 * 3. Borra el código existente y pega este código.
 * 4. Cambia el 'EMAIL_PROPIETARIO' por tu correo.
 * 5. Haz clic en "Implementar" -> "Nueva implementación".
 * 6. Selecciona "Aplicación web".
 * 7. En "Quién tiene acceso", selecciona "Cualquier persona" (importante).
 * 8. Copia la URL de la aplicación web y pégala en ../portal/dashboard.html (variable SCRIPT_URL).
 */

const EMAIL_PROPIETARIO = 'TU_CORREO_AQUI@gmail.com'; // <--- CAMBIA ESTO

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    
    // Si la hoja está vacía, añadir encabezados
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Fecha', 'Email Cliente', 'Nombre Tarea', 'Prioridad', 'Formato', 'Dimensiones', 'Descripción', 'Referencias', 'Estado', 'URL Entrega']);
    }
    
    // Añadir la fila con la nueva solicitud
    sheet.appendRow([
      data.date,
      data.client_email,
      data.task_name,
      data.priority,
      data.format,
      data.dimensions,
      data.description,
      data.references,
      'Solicitado',
      '' // URL Entrega vacía inicialmente
    ]);
    
    // LOGICA DE CARPETAS (Simulada para Drive)
    // En una implementación real, aquí usarías DriveApp.getFolderById().createFolder()
    // para organizar archivos si el cliente subiera assets directamente.
    
    // Enviar correos de notificación
    enviarNotificaciones(data);
    
    return ContentService.createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function enviarNotificaciones(data) {
  // Notificación para el dueño de Futurx
  const asuntoOwner = `🚀 Nueva Solicitud de Diseño: ${data.task_name}`;
  const cuerpoOwner = `
    Hola Futurx,
    
    Has recibido una nueva solicitud de diseño de ${data.client_email}.
    
    DETALLES:
    - Tarea: ${data.task_name}
    - Descripción: ${data.description}
    - Referencias: ${data.references}
    - Fecha: ${data.date}
    
    Revisa la hoja de cálculo para gestionarla.
  `;
  
  GmailApp.sendEmail(EMAIL_PROPIETARIO, asuntoOwner, cuerpoOwner);
  
  // Notificación de confirmación para el Cliente
  const asuntoCliente = `✅ Confirmación de Solicitud: ${data.task_name}`;
  const cuerpoCliente = `
    Hola,
    
    Hemos recibido tu solicitud "${data.task_name}" correctamente. Nuestro equipo de diseño comenzará a trabajar en ella pronto.
    
    Podrás ver el progreso directamente en tu Portal de Cliente.
    
    Gracias por confiar en Futurx Studio.
  `;
  
  GmailApp.sendEmail(data.client_email, asuntoCliente, cuerpoCliente);
}
