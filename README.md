# File List Generator

A web-based tool to generate a tree-like list of files and directories from a selected folder. Built with HTML, JavaScript, and Tailwind CSS, it offers filtering, copying, and resetting capabilities.

<div style="text-align: center; margin: 1em 0;">
    <a href="https://rawcdn.githack.com/EmptyDeck/FileTreeGenerator/refs/heads/main/web.html?token=GHSAT0AAAAAAC7UTPUJJ5UWHFKZZAOTTWR62ARRVDQ" style="background-color: #10B981; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Try File List Generator</a>
</div>

## Preview

Below is a simplified preview of the tool's interface and output, rendered using HTML within Markdown. The actual tool includes interactive features like folder selection and clipboard copying.

<div style="background-color: #F3F4F6; padding: 20px; border-radius: 8px; max-width: 600px; margin: 1em auto; font-family: monospace;">
    <h2 style="font-size: 1.5em; margin-bottom: 1em;">File List Generator</h2>
    <div style="margin-bottom: 1em;">
        <label style="display: flex; align-items: center;">
            <input type="checkbox" checked disabled style="margin-right: 0.5em;">
            <span>Include subfolders</span>
        </label>
    </div>
    <div style="margin-bottom: 1em;">
        <label style="display: flex; align-items: center;">
            <input type="checkbox" disabled style="margin-right: 0.5em;">
            <span>Ignore files starting with .</span>
        </label>
    </div>
    <div style="margin-bottom: 1em;">
        <label style="display: block; font-size: 0.875em; color: #4B5563;">Ignore extensions (e.g., txt,jpg)</label>
        <input type="text" value="txt,jpg" disabled style="width: 100%; padding: 0.5em; border: 1px solid #D1D5DB; border-radius: 4px;">
    </div>
    <div style="display: flex; gap: 0.5em; margin-bottom: 1em;">
        <button style="background-color: #3B82F6; color: white; padding: 0.5em 1em; border-radius: 4px; border: none; cursor: not-allowed;">Select Folder</button>
        <button style="background-color: #6B7280; color: white; padding: 0.5em 1em; border-radius: 4px; border: none; cursor: not-allowed;">Reset</button>
        <button style="background-color: #166534; color: white; padding: 0.5em 1em; border-radius: 4px; border: none; cursor: not-allowed;">Copy</button>
    </div>
    <div style="margin-bottom: 1em;">
        <p style="font-weight: bold;">Selected folder: Portfolio</p>
    </div>
    <pre style="background-color: #F9FAFB; padding: 1em; border-radius: 4px; max-height: 200px; overflow: auto; white-space: pre-wrap;">
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
    </pre>
</div>

## Features

<table>
    <tr>
        <th>Feature</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>Folder Selection</td>
        <td>Select a folder to display its structure.</td>
    </tr>
    <tr>
        <td>Tree Structure</td>
        <td>View files and folders in a hierarchical tree.</td>
    </tr>
    <tr>
        <td>Filtering</td>
        <td>
            <ul>
                <li>Include/exclude subfolders.</li>
                <li>Ignore hidden files (e.g., <code>.gitignore</code>).</li>
                <li>Ignore extensions (e.g., <code>txt,jpg</code>).</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>Copy Output</td>
        <td>Copy the tree to clipboard; button turns <span style="color: #166534;">dark green</span>.</td>
    </tr>
    <tr>
        <td>Reset Output</td>
        <td>Clear output and reset interface.</td>
    </tr>
</table>

## Installation

1. **Clone the Repository**:
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
   - Enter extensions (e.g., `txt,jpg`).

4. **Manage Output**:
   - View the tree structure.
   - Click "Copy" (button turns dark green).
   - Click "Reset" to clear.

## Notes

- **Chrome Security**: Folder selection triggers a file access prompt (local processing, no uploads).
- **Clipboard**: Use `http://localhost` for reliable clipboard functionality.
- **Browser**: Tested on Chrome; other browsers may vary.

## License

MIT License. See [LICENSE](LICENSE).

## Contributing

Submit issues or pull requests to [GitHub](https://github.com/EmptyDeck/FileTreeGenerator).
