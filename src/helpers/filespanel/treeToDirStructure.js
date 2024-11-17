const treeToDirStructure = (tree) => {
    const nodeToDirectoryMap = {
        0: {
            dir_structure: [],
        },
    };


    for (const node of tree) {
        if (node.data.type === 'folder') {
            nodeToDirectoryMap[node.id] = {
                type: 'folder',
                id: node.text,
                dir_structure: [],
            };
        }
    }

    for (const node of tree) {
        if (node.data.type !== 'folder') {
            nodeToDirectoryMap[node.parent].dir_structure.push({
                type: 'file',
                id: node.data.asset_id,
                dir_structure: [],
            });
        } else if (node.data.type === 'folder') {
            nodeToDirectoryMap[node.parent].dir_structure.push(nodeToDirectoryMap[node.id]);
        }
    }

    return nodeToDirectoryMap[0].dir_structure;
};

export default treeToDirStructure;
