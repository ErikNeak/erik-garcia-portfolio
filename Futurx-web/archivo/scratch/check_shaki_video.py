import os
import struct

def get_video_dimensions(file_path):
    with open(file_path, 'rb') as f:
        data = f.read(10 * 1024 * 1024) # check first 10MB
        idx = 0
        while True:
            idx = data.find(b'tkhd', idx)
            if idx == -1:
                break
            version = data[idx + 4]
            width_offset = idx + 76
            height_offset = idx + 80
            width_bytes = data[width_offset:width_offset+4]
            height_bytes = data[height_offset:height_offset+4]
            if len(width_bytes) == 4 and len(height_bytes) == 4:
                width = struct.unpack('>I', width_bytes)[0] >> 16
                height = struct.unpack('>I', height_bytes)[0] >> 16
                if width > 0 and height > 0:
                    return width, height
            idx += 4
    return None

p = '/Users/erikgarcia/Library/CloudStorage/GoogleDrive-futurx.estudio@gmail.com/Mi unidad/00_Futurx/Futurx-Web/imag/portafolio/Shaki RS/06-Shaki RS.mp4'
print("06-Shaki RS.mp4:", get_video_dimensions(p))
