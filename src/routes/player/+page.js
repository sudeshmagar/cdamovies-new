export async function load({ fetch, url }) {
    const id = url.searchParams.get('id');
    const server = url.searchParams.get('server');
    const detailsResponse = await fetch('api/flixhq/movies?id=' + id);
    const movieDetails = await detailsResponse.json();

    const episodeResponse = await fetch(`api/flixhq/source?id=${id}&episodeId=${movieDetails.episodes[0].id}&server=${server}`);
    const episodeDetails = await episodeResponse.json();
    return { episodeDetails };

}