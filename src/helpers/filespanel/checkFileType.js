/**
 * return file subtype used to show icon and backend file type enum
 * @param {File} file
 * @returns {string}
 */
const checkFileType = (file) => {
    // Check based on file type mapping
    const fileTypeMapping = {
        'application/pdf': 'pdf',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'docx',
        'application/msword': 'doc',
        'application/vnd.ms-powerpoint': 'ppt',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'xlsx',
        'application/vnd.ms-excel': 'xls',
        'application/vnd.oasis.opendocument.text': 'odt',
        'application/vnd.oasis.opendocument.spreadsheet': 'ods',
        'application/vnd.oasis.opendocument.presentation': 'odp',
        'application/json': 'json',
        'application/vnd.openxmlformats-officedocument.presentationml.presentation': 'pptx',
        'application/vnd.ms-powerpoint': 'ppt',
        'application/yaml': 'yaml',
        'application/x-yaml': 'yaml',
        'text/csv': 'csv',
        'text/xml': 'xml',
        'text/rtf': 'rtf',
        'text/ymal': 'yaml',
        'text/x-ymal': 'yaml',
    };

    // Check based on file extension mapping
    const extensionTypeMapping = {
        'java': 'java',
        'py': 'python',
        'js': 'javascript',
        'html': 'html',
        'htm': 'html',
        'css': 'css',
        'cpp': 'cpp',
        'c': 'c',
        'cs': 'cs',
        'php': 'php',
        'rb': 'ruby',
        'swift': 'swift',
        'kt': 'kotlin',
        'kts': 'kotlin',
        'go': 'go',
        'rs': 'rust',
        'scala': 'scala',
        'ts': 'typescript',
        'sql': 'sql',
        'rtf': 'rtf',
        'yml': 'yaml',
    };

    const fileExtensionArray = file.name.split('.');
    const fileExtension = fileExtensionArray[fileExtensionArray.length - 1];


    if (fileTypeMapping[file.type]) {
        return fileTypeMapping[file.type];
    } else if (extensionTypeMapping[fileExtension]) {
        return extensionTypeMapping[fileExtension];
    } else if (file.type.startsWith('text')) {
        // ***** covers the following file types: *****
        // text/xml
        // text/plain
        // text/csv
        // text/html
        // text/javascript
        // text/rtf
        // text/css
        // text/yaml
        // text/x-yaml
        return 'text';
    } else if (file.type.startsWith('image')) {
        return 'image';
    } else {
        return 'unknown';
    }
};

export default checkFileType;
