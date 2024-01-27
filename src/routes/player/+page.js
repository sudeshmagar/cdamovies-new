export async function load({ fetch, url }) {
    const episodeId = url.searchParams.get('episodeId');
    const id = url.searchParams.get('id');
    const server = url.searchParams.get('server');

    const episodeResponse = await fetch(`../api/cdam/source?id=${id}&episodeId=${episodeId}&server=${server}`);
    const episodeDetails = await episodeResponse.json();
	const path = episodeDetails.sources.find((item) => item.quality === '1080').url;


    const proxyURL = await fetch(`../api/cdam/player/${path}`)
    return { episodeDetails, proxyURL };
}

