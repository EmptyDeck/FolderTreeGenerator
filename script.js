const selectFolderBtn = document.getElementById("selectFolder");
const resetOutputBtn = document.getElementById("resetOutput");
const copyOutputBtn = document.getElementById("copyOutput");
const includeSubfolders = document.getElementById("includeSubfolders");
const ignoreDotFiles = document.getElementById("ignoreDotFiles");
const ignoreExtensions = document.getElementById("ignoreExtensions");
const selectedFolder = document.getElementById("selectedFolder");
const output = document.getElementById("output");
const loadingSpinner = document.getElementById("loadingSpinner");

// Reset Copy button color
function resetCopyButtonColor() {
    copyOutputBtn.classList.remove("copied");
    console.log("Copy button color reverted to original");
}

// Loading spinner control
function showLoadingSpinner() {
    loadingSpinner.style.display = "block";
    console.log("Loading spinner displayed");
}

function hideLoadingSpinner() {
    loadingSpinner.style.display = "none";
    console.log("Loading spinner hidden");
}

// Build tree structure from files
function buildTree(files) {
    console.time("buildTree");
    const tree = { name: "", children: [], files: [] };
    for (const file of files) {
        if (!file.webkitRelativePath || !file.name) {
            console.log("Skipping invalid file:", file);
            continue;
        }
        const parts = file.webkitRelativePath.split("/").filter((part) => part);
        if (parts.length === 0) continue;

        let current = tree;
        for (let i = 0; i < parts.length - 1; i++) {
            const folder = parts[i];
            let node = current.children.find((c) => c.name === folder);
            if (!node) {
                node = { name: folder, children: [], files: [] };
                current.children.push(node);
            }
            current = node;
        }
        current.files.push(file.name);
    }
    console.timeEnd("buildTree");
    return tree;
}

selectFolderBtn.addEventListener("click", () => {
    console.time("selectFolder");
    console.log("Starting folder selection");
    resetCopyButtonColor();
    showLoadingSpinner();

    const input = document.createElement("input");
    input.type = "file";
    input.webkitdirectory = true;
    input.multiple = true;

    input.addEventListener("change", () => {
        console.log("Folder selection dialog opened, awaiting user input");
        const files = Array.from(input.files);
        console.log(`Selected files: ${files.length}`);

        if (files.length === 0) {
            console.log("No files selected");
            output.textContent = "No folder or files selected.";
            hideLoadingSpinner();
            console.timeEnd("selectFolder");
            return;
        }

        // Infer base folder
        const basePath = files[0].webkitRelativePath?.split("/")[0] || "Unknown";
        selectedFolder.textContent = `Selected folder: ${basePath}`;

        // Apply filters
        console.time("filtering");
        const ignoreExts = new Set(
            ignoreExtensions.value
                .split(",")
                .map((ext) => ext.trim().replace(/^\.+/, "").toLowerCase())
                .filter((ext) => ext)
        );
        console.log("Ignore extensions:", Array.from(ignoreExts));

        const filteredFiles = files.filter((file) => {
            const name = file.name;
            if (!name) {
                console.log("Skipping file with undefined name:", file);
                return false;
            }
            if (ignoreDotFiles.checked && name.startsWith(".")) {
                console.log(`Ignoring hidden file: ${name}`);
                return false;
            }
            if (
                ignoreExts.size > 0 &&
                Array.from(ignoreExts).some((ext) => {
                    const match = name.toLowerCase().endsWith(`.${ext}`);
                    if (match) console.log(`Ignoring file with extension: ${name}`);
                    return match;
                })
            ) {
                return false;
            }
            return true;
        });
        console.timeEnd("filtering");

        let tree;
        if (!includeSubfolders.checked) {
            console.time("topLevel");
            const topLevelFiles = filteredFiles
                .filter(
                    (file) =>
                        !file.webkitRelativePath.includes(
                            "/",
                            file.webkitRelativePath.indexOf("/") + 1
                        )
                )
                .map((file) => file.name)
                .filter((name) => name)
                .sort((a, b) => a.localeCompare(b));
            tree = {
                name: basePath,
                children: [],
                files: topLevelFiles
            };
            console.timeEnd("topLevel");
        } else {
            tree = buildTree(filteredFiles);
            tree.name = basePath;
        }

        const result = JSON.stringify(tree, null, 2);
        console.log(`List generation completed, text length: ${result.length}`);
        output.textContent = result || "No files found.";
        hideLoadingSpinner();
        console.timeEnd("selectFolder");
    });

    input.click();
    console.log("Input element clicked, expecting Chrome dialog");
});

resetOutputBtn.addEventListener("click", () => {
    console.log("Resetting output");
    resetCopyButtonColor();
    output.textContent = "No list generated.";
    selectedFolder.textContent = "Select a folder";
    hideLoadingSpinner();
});

copyOutputBtn.addEventListener("click", () => {
    console.log("Copy button clicked");
    const text = output.textContent;
    if (text === "No list generated.") {
        console.log("No text to copy");
        return;
    }

    copyOutputBtn.classList.add("copied");
    console.log("Copy button color changed to dark green");

    navigator.clipboard
        .writeText(text)
        .then(() => {
            console.log("Text copied successfully via clipboard API");
        })
        .catch((err) => {
            console.log("Clipboard API failed, attempting fallback:", err);
            const textarea = document.createElement("textarea");
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            try {
                document.execCommand("copy");
                console.log("Text copied successfully via execCommand");
            } catch (fallbackErr) {
                console.error("Failed to copy text:", fallbackErr);
            }
            document.body.removeChild(textarea);
        });
});