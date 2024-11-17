import { serviceNames, getApiBase } from '@/helpers/getApiBase';
import store  from '@/store/store';

// API call for chatting
const chatStream = async (chatRequest, setResp, setSessionId, setErrorObj, abortController) => {
    setErrorObj({});

    const {
        token = '',
    } = store?.getState()?.user?.data;

    const extractText = (inputString) => {
        const pattern = /data: (.*)/g;
        let matches = [];
        let match;

        while ((match = pattern.exec(inputString)) !== null) {
            matches.push(match[1]);
        }

        if (matches.length > 0) {
            return matches.join('');
        } else {
            return '';
        }
    };

    try {

        let resp = '';
        let sessionIdExtracted = false;

        function fetchWithTimeout(url, options, timeout = 7000) {
            return Promise.race([
                fetch(url, options),
                new Promise((_, reject) =>
                    setTimeout(() => reject(new Error('Request timed out')), timeout)
                ),
            ]);
        }

        const response = await fetchWithTimeout(getApiBase(serviceNames['chat'])+'/chat/stream', {
            method: 'POST',
            signal: abortController.signal,
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${token}`,
            },
            body: JSON.stringify(chatRequest),
        }, 60000);

        const reader = response.body.pipeThrough(new TextDecoderStream()).getReader();


        while (true) {

            const {value, done} = await reader.read();
            if (done) break;
            let extracted_original = extractText(value);
            let extracted = extracted_original;

            // Extract Session ID
            if (!sessionIdExtracted && extracted_original.includes('SESSION_ID:')) {
                const parts = extracted_original.split('SESSION_ID:');
                const sessionIdPart = parts[1].trim();
                setSessionId(sessionIdPart);
                sessionIdExtracted = true;
                extracted = parts[0]; // Update extracted to exclude the session ID part
            }

            if (extracted_original.includes('error') && extracted_original.includes('error_code')) {
            // error starts from "error: " and then there is a json object i want to extract the json object
                const parts = extracted_original.split('error: ');
                const jsonStr = parts[1];
                const errorObj = JSON.parse(jsonStr);
                setErrorObj(errorObj);
            }
            else {
                // update resp
                extracted = extracted.replace(/\\n\\n/g, '\n\n');
                resp += extracted; // Append the remaining part of the extracted text
                setResp(resp);
            }
        }
    } catch (error) {
        if (error.name === 'AbortError') {
            // request aborted by user
        } else {
            throw error;
        }
    }


};

export default chatStream;
