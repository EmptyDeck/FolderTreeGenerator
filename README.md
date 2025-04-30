# File List Generator

A web-based tool to generate a tree-like list of files and directories from a selected folder. Built with HTML, JavaScript, and Tailwind CSS, it offers filtering, copying, and resetting capabilities.

<div style="text-align: center; margin: 1em 0;">
    <a href="https://rawcdn.githack.com/EmptyDeck/FileTreeGenerator/refs/heads/main/web.html?token=GHSAT0AAAAAAC7UTPUJJ5UWHFKZZAOTTWR62ARRVDQ" style="background-color: #10B981; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Try File List Generator</a>
</div>

## Features

<table>
    <tr>
        <th>Feature</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>Folder Selection</td>
        <td>Select a folder to display its file and directory structure.</td>
    </tr>
    <tr>
        <td>Tree Structure</td>
        <td>Visualize files and folders in a hierarchical tree format.</td>
    </tr>
    <tr>
        <td>Filtering</td>
        <td>
            <ul>
                <li>Include/exclude subfolders.</li>
                <li>Ignore hidden files (starting with <code>.</code>).</li>
                <li>Ignore specific extensions (e.g., <code>txt,jpg</code>).</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>Copy Output</td>
        <td>Copy the tree to the clipboard; button turns <span style="color: #166534;">dark green</span> when clicked.</td>
    </tr>
    <tr>
        <td>Reset Output</td>
        <td>Clear the output and reset the interface.</td>
    </tr>
</table>

## Installation

1. **Clone the Repository** (or download files):
   ```bash
   git clone https://github.com/EmptyDeck/FileTreeGenerator.git
   cd FileTreeGenerator
   ```

2. **Serve the Application**:
   ```bash
   python3 -m http.server 8000
   ```

3. **Open in Browser**:
   Navigate to `http://localhost:8000` in Chrome.

## Usage

1. **Access the Tool**:
   - Live demo: [File List Generator](https://rawcdn.githack.com/EmptyDeck/FileTreeGenerator/refs/heads/main/web.html?token=GHSAT0AAAAAAC7UTPUJJ5UWHFKZZAOTTWR62ARRVDQ)
   - Or locally: `http://localhost:8000`.

2. **Select a Folder**:
   - Click "Select Folder & Generate List".
   - Confirm Chrome's security prompt.

3. **Configure Filters**:
   - Toggle "Include subfolders".
   - Check "Ignore files starting with .".
   - Enter extensions (e.g., `txt,jpg`) to ignore.

4. **View and Manage Output**:
   - View the tree structure.
   - Click "Copy" to copy output (button turns dark green).
   - Click "Reset" to clear output.

## Example Output

```
Portfolio/
│
├── docs/                   # Documentation files
│   ├── index.md
│   └── setup_guide.md
├── src/                    # Source code
│   ├── main.py
│   └── utils/
│       └── helpers.py
├── README.md
└── LICENSE
```

## Notes

- **Chrome Security**: A file access prompt appears when selecting folders (standard, no data uploaded).
- **Clipboard**: Use `http://localhost` for reliable clipboard functionality.
- **Browser**: Tested on Chrome; other browsers may vary in File System API support.

## License

MIT License. See [LICENSE](LICENSE) for details.

## Contributing

Submit issues or pull requests to [GitHub](https://github.com/EmptyDeck/FileTreeGenerator).
