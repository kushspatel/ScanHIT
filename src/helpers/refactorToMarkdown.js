// refactoring for markdown

const refactorToMarkdown = (text) => {
    let newText = text;
    newText = newText.replace(/\\n\\n(\d+\.)/g, '\n$1');
    newText = newText.replace(/\\n/g, '\n');
    return newText;
};

export const refactorToMarkdownFromPlainText = (text) => {
    return text.replace(/\\n/g, '  \n');
};

export default refactorToMarkdown;


