import os

# --- CONFIGURATION ---
# The name of your Obsidian vault folder.
VAULT_DIRECTORY = 'Obsidian Vault'


# --- END CONFIGURATION ---

def process_markdown_file(filepath):
    """
    Reads a markdown file, replaces all '---' horizontal rules in the body
    with '***', while preserving the YAML frontmatter block.
    """
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            lines = f.readlines()
    except Exception as e:
        print(f"  - Could not read file {filepath}: {e}")
        return False

    if not lines or lines[0].strip() != '---':
        # This file doesn't have a frontmatter block, so we can't safely process it.
        # It's better to skip it than to risk breaking it.
        return False

    # Find the end of the frontmatter block
    try:
        # Find the index of the second '---' line, starting from the second line.
        end_of_frontmatter_index = lines[1:].index('---' + os.linesep) + 1
    except ValueError:
        # No closing '---' found. File is malformed.
        print(f"  - Warning: Skipping malformed file (no closing '---'): {filepath}")
        return False

    changes_made = False
    # Only process lines *after* the frontmatter block
    for i in range(end_of_frontmatter_index + 1, len(lines)):
        # Check if a line is exactly '---' (with potential whitespace)
        if lines[i].strip() == '---':
            # Replace it with '***' while preserving the original newline character
            lines[i] = '***' + os.linesep
            changes_made = True

    if changes_made:
        print(f"  - Found and replaced '---' in: {filepath}")
        try:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.writelines(lines)
            return True
        except Exception as e:
            print(f"  - ERROR: Could not write changes to {filepath}: {e}")
            return False

    return False


def main():
    """
    Main function to walk through the vault and process all markdown files.
    """
    if not os.path.isdir(VAULT_DIRECTORY):
        print(f"Error: Directory '{VAULT_DIRECTORY}' not found.")
        print("Please make sure this script is in the same folder as your Obsidian Vault.")
        return

    print(f"Scanning '{VAULT_DIRECTORY}' for markdown files...")
    files_modified_count = 0

    for root, _, files in os.walk(VAULT_DIRECTORY):
        for filename in files:
            if filename.lower().endswith('.md'):
                filepath = os.path.join(root, filename)
                if process_markdown_file(filepath):
                    files_modified_count += 1

    print("\n--------------------")
    print("Scan complete.")
    if files_modified_count > 0:
        print(f"Successfully modified {files_modified_count} file(s).")
    else:
        print("No files needed modification.")
    print("--------------------")


if __name__ == '__main__':
    main()