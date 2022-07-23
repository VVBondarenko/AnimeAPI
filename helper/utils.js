import axios from 'axios';
const USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36";
const headerOption = { headers: { "User-Agent": USER_AGENT } };

export const decodeString = (string) => {
    return Buffer.from(string, 'base64').toString();
}

export const encodeString = (string) => {
    return Buffer.from(string).toString('base64');
};

export const decodeStreamingLinkAnimix = async (animixLiveApiLink) => {
    const animixLiveApiRegex = new RegExp(/(aHR0[^#]+)/)
    const res = await axios.get(animixLiveApiLink, headerOption);

    const plyrLink = await res.request.res.responseUrl;
    const sourceLink = atob(animixLiveApiRegex.exec(plyrLink)[0]);

    return sourceLink;
};  