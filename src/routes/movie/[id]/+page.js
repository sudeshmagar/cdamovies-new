export async function load({ fetch, params }) {
    const {id} = params;  
    const detailsResponse = await fetch(`../api/cdam/details/movie/${id}`);
    const movieDetails = await detailsResponse.json();

    // const episodeResponse = await fetch(`api/flixhq/source?id=${id}&episodeId=${movieDetails.episodes[0].id}`);
    // const episodeDetails = await episodeResponse.json();

    const streamingServers = await fetch(`../api/cdam/streams/movie/${id}?episodeId=${movieDetails.episodes[0].id}`);
    const serverDetails = await streamingServers.json();
    return { movieDetails, serverDetails };

}