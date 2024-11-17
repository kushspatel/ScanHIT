import getAxiosInstance from '@/apis/getAxiosInstance';
import { serviceNames, getApiBase } from '@/helpers/getApiBase';

const postLatexInstruction = async (projectId, instruction, contextIds) => {
    if (!projectId || !instruction) {
        return Promise.reject({
            error: true,
            message: 'projectId and instruction are mandatory in postLatexInstruction function',
        });
    }

    const instance = getAxiosInstance(getApiBase(serviceNames['chat']));
    return instance.post('/project/latex', {
        project_id: projectId,
        instruction: instruction,
        context_ids: contextIds?.assetIds ?? [],
    });
};

export default postLatexInstruction;
