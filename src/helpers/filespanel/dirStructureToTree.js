import { asset_processing_failed_error_code_messages } from '@/constants/asset_processing_error_details';

const default_error_message = 'Failed to process this file. Delete this file and re-upload, or contact support if issue persists.';

const dirStructureToTree = (dirStructure, assets, search, contextAssets) => {
    let id = 0;
    const treeData = [];
    if (!dirStructure || !assets) {
        return treeData;
    }
    const allAssets = assets.reduce((r, a) => {
        r[a._id] = a;
        return r;
    }, {});
    const processedAssets = new Set();

    const allErrors = asset_processing_failed_error_code_messages.reduce((r, a) => {
        r[a.error_code] = a.display_message;
        return r;
    }, {});

    const extractAssetProcessingError = (asset) => {
        if (asset?.processing_error_details?.error_code) {
            return {
                errorStatus: true,
                errorMessage: allErrors[asset.processing_error_details.error_code] || default_error_message,
            };
        }
        return {
            errorStatus: false,
            errorMessage: '',
        };
    };

    const flattenDirStructure = (structure, parentId, assets) => {
        let hidden = Boolean(search);
        let selected = 0; // number of selected nodes on this level
        let processedStatus = false;
        structure.forEach((s) => {
            // skip deleted assets
            if (s.type !== 'folder' && !(s.id in allAssets)) {
                return;
            }
            const nodeId = ++id;
            const [childrenHidden, childrenSelected] = flattenDirStructure(s.dir_structure, nodeId, assets);
            const nodeText = s.type === 'folder'
                ? s.id
                : allAssets[s.id].asset_name;
            const nodeHidden = s.type === 'folder'
                ? childrenHidden
                : (Boolean(search) && !nodeText.toLowerCase().includes(search.toLowerCase()));
            // set status processedStatus = true, by finding s.id in assets and then check the processed status of that asset if it is true then set the processedStatus as true else false
            if(s.type === 'file'){
                const assetInfo = assets.find((a) => a._id === s.id);
                if (assetInfo?.processing_status === 'READY') {
                    processedStatus = true;
                }
                else {
                    processedStatus = false;
                }
            }
            const nodeSelected = s.type !== 'folder'
                ? contextAssets.includes(s.id)
                : s.dir_structure?.length > 0 && childrenSelected === s.dir_structure?.length;
            const nodeType = s.type === 'folder' ? s.type : (allAssets[s.id].asset_type ?? s.type);

            hidden = hidden && nodeHidden;
            selected += nodeSelected;
            const node = {
                id: nodeId,
                text: nodeText,
                droppable: s.type === 'folder',
                processedStatus: s.type === 'folder' ? 'NA' : processedStatus,
                parent: parentId,
                data: {
                    type: nodeType,
                    asset_id: s.type === 'folder' ? null : s.id,
                    hidden: nodeHidden,
                    selected: Boolean(nodeSelected),
                    indeterminate: s.type !== 'folder'
                        ? false :
                        (childrenSelected && childrenSelected < s.dir_structure?.length),
                    url: allAssets[s.id]?.asset_metadata?.video_url ?? allAssets[s.id]?.asset_metadata?.web_url ?? '',
                    tags: allAssets[s.id]?.asset_tags ?? [],
                    asset_size_MB: allAssets[s.id]?.asset_size_MB,
                },
                ...extractAssetProcessingError(allAssets[s?.id]),
            };
            if (s.type !== 'folder') {
                processedAssets.add(s.id);
            }
            treeData.push(node);
        });
        return [hidden, selected];
    };

    flattenDirStructure(dirStructure, 0, assets);

    assets.forEach((a) => {
        if (processedAssets.has(a._id)) {
            return;
        }

        const nodeHidden = Boolean(search) && !a.asset_name.toLowerCase().includes(search.toLowerCase());

        let processedStatus1 = false;

        if (a.processing_status === 'READY') {
            processedStatus1 = true;
        }

        treeData.push({
            id: ++id,
            text: a.asset_name,
            droppable: false,
            parent: 0,
            processedStatus: processedStatus1,
            data: {
                type: a.asset_type ?? 'file',
                asset_id: a._id,
                hidden: nodeHidden,
                selected: contextAssets.includes(a._id),
                indeterminate: false,
                url: a.asset_metadata?.video_url ?? a.asset_metadata?.web_url ?? '',
                tags: a.asset_tags ?? [],
                asset_size_MB: a?.asset_size_MB,
            },
            ...extractAssetProcessingError(allAssets[a._id]),
        });
    });

    return treeData;
};

export default dirStructureToTree;
