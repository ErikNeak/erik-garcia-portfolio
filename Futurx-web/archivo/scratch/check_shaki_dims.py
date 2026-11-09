import os
import struct

def get_image_size(file_path):
    with open(file_path, 'rb') as f:
        head = f.read(30)
        if head.startswith(b'\x89PNG\r\n\x1a\n'):
            # PNG width, height are 4-byte integers starting at offset 16
            width, height = struct.unpack('>II', head[16:24])
            return width, height
        elif head.startswith(b'\xff\xd8'):
            # JPEG file
            f.seek(0)
            data = f.read()
            size = len(data)
            i = 2
            while i < size:
                # Find next marker
                while i < size and data[i] != 0xff:
                    i += 1
                if i >= size:
                    break
                # Skip 0xff padding
                while i < size and data[i] == 0xff:
                    i += 1
                if i >= size:
                    break
                marker = data[i]
                i += 1
                # If it's a SOF marker (0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7, 0xc9, 0xca, 0xcb, 0xcd, 0xce, 0xcf)
                if marker in [0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7, 0xc9, 0xca, 0xcb, 0xcd, 0xce, 0xcf]:
                    # SOF chunk structure:
                    # length: 2 bytes
                    # precision: 1 byte
                    # height: 2 bytes
                    # width: 2 bytes
                    # Read segment length
                    chunk_len = struct.unpack('>H', data[i:i+2])[0]
                    # height is at i + 3
                    h, w = struct.unpack('>HH', data[i+3:i+7])
                    return w, h
                else:
                    # Skip chunk
                    chunk_len = struct.unpack('>H', data[i:i+2])[0]
                    i += chunk_len
    return None

dir_path = '/Users/erikgarcia/Library/CloudStorage/GoogleDrive-futurx.estudio@gmail.com/Mi unidad/00_Futurx/Futurx-Web/imag/portafolio/Shaki RS'
for f in sorted(os.listdir(dir_path)):
    if f.lower().endswith(('.png', '.jpeg', '.jpg', '.mp4')):
        p = os.path.join(dir_path, f)
        if f.lower().endswith('.mp4'):
            print(f, "is a video file")
        else:
            try:
                print(f, get_image_size(p))
            except Exception as e:
                print(f, "Error:", e)
