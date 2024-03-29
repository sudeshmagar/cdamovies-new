export async function load({ fetch, url }) {
    const id = url.searchParams.get('id');
    const detailsResponse = await fetch('api/cdam/movies?id=' + id);
    const movieDetails = await detailsResponse.json();

    // const episodeResponse = await fetch(`api/flixhq/source?id=${id}&episodeId=${movieDetails.episodes[0].id}`);
    // const episodeDetails = await episodeResponse.json();

    const streamingServers = await fetch(`api/cdam/streams?id=${id}&episodeId=${movieDetails.episodes[0].id}`);
    const serverDetails = await streamingServers.json();
    return { movieDetails, serverDetails };

}