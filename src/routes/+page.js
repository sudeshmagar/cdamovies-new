export async function load({ fetch }) {
    const response = await fetch('api/flixhq/trending-movies');
    const nowPlaying = await response.json();
    return { nowPlaying };

}