import { json } from '@sveltejs/kit';
import { MOVIES } from '@consumet/extensions'

export async function GET({ url }) {
    console.log(url);
    const id = url.searchParams.get('id');
    const episodeId = url.searchParams.get('episodeId');
    const server = url.searchParams.get('server');
    const trendingMovies = await getSource(episodeId, id, server);
    return json(trendingMovies);
}

async function getSource(episodeId, id, server) {
    const flixhq = new MOVIES.FlixHQ();
    const trendingMovies = await flixhq.fetchEpisodeSources(episodeId, id, server);
    return trendingMovies;
}
