const getFolderNames = (dirStructure) => {
    return dirStructure
        .filter(node => node.type === 'folder')
        .flatMap(node => [node.id, ...getFolderNames(node.dir_structure)]);
};

const NEW_FOLDER_NAME = 'new folder';

const getNewFolderName = (dirStructure) => {
    const folderNames = getFolderNames(dirStructure);
    let count = 0;
    let newFolderName = NEW_FOLDER_NAME;
    while (folderNames.find(folder => folder.toLowerCase() === newFolderName.toLowerCase())) {
        count += 1;
        newFolderName = `${NEW_FOLDER_NAME} (${count})`;
    }

    return newFolderName;
};

export default getNewFolderName;
