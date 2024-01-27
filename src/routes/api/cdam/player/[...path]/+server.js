import axios from 'axios';

export async function GET({ params, url }) {
    // const video = url.searchParams.get('video');
    const referer = url.searchParams.get('referer');
    try {
        const videoUrl = params.path;

        const response = await axios.get(videoUrl, {
            headers: {
                'Referer': referer
            },
            responseType: 'stream'
        });
        const data = await response.data;
        return new Response(response.data, {
            status: response.status,
            headers: {
                'Content-Type': 'application/vnd.apple.mpegurl'
            }
        });
    } catch (error) {
        console.error('Error fetching video:', error);
        return new Response('Error fetching video', { status: 500 });
    }
}

