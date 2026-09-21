import os
from PIL import Image

files = {
    r"D:\Freelance_works\Quadaid\images\hero.png": r"D:\Freelance_works\Quadaid\quadaid-inc\public\hero.webp",
    r"D:\Freelance_works\Quadaid\images\peoples.png": r"D:\Freelance_works\Quadaid\quadaid-inc\public\peoples.webp",
    r"D:\Freelance_works\Quadaid\images\seond image.png": r"D:\Freelance_works\Quadaid\quadaid-inc\public\second-image.webp"
}

for src, dst in files.items():
    try:
        img = Image.open(src)
        img.save(dst, "webp")
        print(f"Saved {dst}")
    except Exception as e:
        print(f"Error saving {dst}: {e}")
