export async function load({ fetch }) {
    const response = await fetch('api/cdam/trending-movies');
    const nowPlaying = await response.json();
    return { nowPlaying };

}