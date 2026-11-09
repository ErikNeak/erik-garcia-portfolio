import struct
import os

dir_path = '/Users/erikgarcia/Library/CloudStorage/GoogleDrive-futurx.estudio@gmail.com/Mi unidad/00_Futurx/Futurx-Web/imag/portafolio/Multiples proyectos-Mala morra'

def parse_mp4(file_path):
    print(f"\nParsing {os.path.basename(file_path)}:")
    with open(file_path, 'rb') as f:
        data = f.read(1024 * 1024 * 10) # read first 10MB
    
    tkhd_idx = data.find(b'tkhd')
    if tkhd_idx == -1:
        print("  tkhd not found")
        return
    
    version = data[tkhd_idx+4]
    if version == 1:
        w_idx = tkhd_idx + 88
        h_idx = tkhd_idx + 92
    else:
        w_idx = tkhd_idx + 76
        h_idx = tkhd_idx + 80
        
    w_bytes = data[w_idx:w_idx+4]
    h_bytes = data[h_idx:h_idx+4]
    
    try:
        width_val = struct.unpack('>I', w_bytes)[0] / 65536.0
        height_val = struct.unpack('>I', h_bytes)[0] / 65536.0
        print(f"  Width: {width_val}, Height: {height_val}")
    except Exception as e:
        print("  Error unpacking:", e)

parse_mp4(os.path.join(dir_path, '01-mala morra.mp4'))
parse_mp4(os.path.join(dir_path, '05-Mala morra.mp4'))
