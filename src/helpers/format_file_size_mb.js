
export const format_file_size_mb = (size) => {
    if (!size) return null;
    return `${size.toFixed(2)} MB`;
};
