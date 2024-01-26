import { json } from '@sveltejs/kit';
import { MOVIES } from '@consumet/extensions'

export async function GET({ url }) {
    const id = url.searchParams.get('id');
    const trendingMovies = await getTrendingMovies(id);
    return json(trendingMovies);
}

async function getTrendingMovies(id) {
    const flixhq = new MOVIES.FlixHQ();
    const trendingMovies = await flixhq.fetchMediaInfo(id);
    return trendingMovies;
}
