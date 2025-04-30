# File List Generator

A simple web-based tool to select a folder and generate a tree-like list of its files and directories. Built with HTML, JavaScript, and Tailwind CSS, it allows filtering by file extensions and hidden files, with options to copy or reset the output.

Try it live: [File List Generator](https://rawcdn.githack.com/EmptyDeck/FileTreeGenerator/refs/heads/main/web.html?token=GHSAT0AAAAAAC7UTPUJJ5UWHFKZZAOTTWR62ARRVDQ)

## Features

- **Folder Selection**: Choose a folder to display its file and directory structure.
- **Tree Structure Output**: Visualize files and folders in a hierarchical tree format.
- **Filtering Options**:
  - Include or exclude subfolders.
  - Ignore hidden files (starting with `.`).
  - Ignore specific file extensions (e.g., `txt,jpg`).
- **Copy Output**: Copy the generated tree to the clipboard with a single click.
- **Reset Output**: Clear the output and reset the interface.
- **Visual Feedback**: Copy button changes to dark green when clicked, reverting on reset or new folder selection.

## Installation

1. **Clone the Repository** (or download the files):
   ```bash
   git clone https://github.com/EmptyDeck/FileTreeGenerator.git
   cd FileTreeGenerator
