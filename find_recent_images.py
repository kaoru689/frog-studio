
import os
import time

search_root = r"c:\Users\yokoy\OneDrive\デスクトップ\AG\FLOG Studio"
extensions = {".jpg", ".jpeg", ".png", ".webp"}
ignore_dirs = {"node_modules", ".next", ".git"}

files_found = []

for root, dirs, files in os.walk(search_root):
    # Modify dirs in-place to limit recursion
    dirs[:] = [d for d in dirs if d not in ignore_dirs]
    
    for file in files:
        if os.path.splitext(file)[1].lower() in extensions:
            full_path = os.path.join(root, file)
            mtime = os.path.getmtime(full_path)
            files_found.append((full_path, mtime))

# Sort by mtime descending
files_found.sort(key=lambda x: x[1], reverse=True)

print(f"Found {len(files_found)} images. Top 10 newest:")
for path, mtime in files_found[:10]:
    print(f"{path} | {time.ctime(mtime)}")
