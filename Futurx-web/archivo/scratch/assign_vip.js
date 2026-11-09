import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore, collection, query, where, getDocs, doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

// REEMPLAZAR CON TU CONFIGURACIÓN DE FIREBASE SI ES NECESARIO
// Nota: Este script es para ser ejecutado en el navegador o un entorno con acceso a tu config.
// Como soy una IA, te proporciono el código para que lo pegues en la consola de desarrollador (F12) 
// de tu página de administración para una ejecución segura y rápida.

async function assignVIP(email) {
    const db = getFirestore();
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("email", "==", email));
    
    try {
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
            console.error("No se encontró ningún usuario con ese correo.");
            return;
        }
        
        const userDoc = querySnapshot.docs[0];
        const userRef = doc(db, "users", userDoc.id);
        
        await updateDoc(userRef, {
            planActual: "Acceso Total (VIP)",
            bomberazosMax: 99,
            bomberazosUsed: 0,
            billingCycleStart: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            status: "activo"
        });
        
        console.log(`¡Éxito! El usuario ${email} ahora tiene Acceso Total (VIP).`);
        alert(`¡Éxito! El usuario ${email} ahora tiene Acceso Total (VIP).`);
    } catch (e) {
        console.error("Error al asignar VIP:", e);
    }
}

// Ejecutar
// assignVIP("erik.enriquegg@gmail.com");
