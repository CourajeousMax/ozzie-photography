import os
import subprocess
import pyperclip

# Path to the file
file_path = "all_code.txt"

# Delete the content of the file
with open(file_path, "w") as file:
    pass

# Function to get multi-line input with a special end keyword
def get_multiline_input(prompt):
    print(prompt)
    print("Type 'END' on a new line to finish.")
    lines = []
    while True:
        line = input()
        if line.strip().upper() == 'END':
            break
        lines.append(line)
    return "\n".join(lines)

# Get user input for the problem with the code
problem_message = get_multiline_input("Enter the problem with the code:")

# Write the problem message and introductory text to the top of the file
with open(file_path, "a") as file:
    file.write(f"{problem_message}\n\n")
    file.write("This is a website I am working on. Please analyze the project structure, errors, and code carefully:\n\n")

# Append the output of the tree command to the file
tree_output = subprocess.run(["tree", "-I", ".next|node_modules|env"], capture_output=True, text=True)
with open(file_path, "a") as file:
    file.write(tree_output.stdout)
    file.write("\n")

# Define the Bash script content
bash_script_content = """#!/bin/bash

# Find and append relevant files to all_code.txt
find . -type f \\( -name "*.md" -o -name "*.json" -o -name "*.mjs" -o -name "*.js" -o -name "*.css" -o -name "*.module.css" -o -name "*.scss" \\) \\
    -not -path "./node_modules/*" \\
    -not -path "./.next/*" \\
    -not -path "./env/*" \\
    -not -name "package-lock.json" \\
    -exec sh -c 'echo "### {} ###" >> all_code.txt && cat "{}" >> all_code.txt' \\;

echo "All code/text has been appended to all_code.txt."
"""

# Write the Bash script content to a temporary file
with open("append_code.sh", "w") as bash_script:
    bash_script.write(bash_script_content)

# Run the Bash script
subprocess.run(["bash", "append_code.sh"])

# Clean up the temporary Bash script
os.remove("append_code.sh")

# Read the contents of the file
with open(file_path, "r") as file:
    file_content = file.read()

# Copy the contents to the clipboard
pyperclip.copy(file_content)

print("All steps completed, all_code.txt has been updated, and its contents have been copied to the clipboard.")
