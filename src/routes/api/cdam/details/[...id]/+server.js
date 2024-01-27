import { json } from '@sveltejs/kit';
import { MOVIES } from '@consumet/extensions'

export async function GET({ params }) {
    const {id} = params;
    const trendingMovies = await getTrendingMovies(id);
    return json(trendingMovies);
}

async function getTrendingMovies(id) {
    const flixhq = new MOVIES.FlixHQ();
    const trendingMovies = await flixhq.fetchMediaInfo(id);
    return trendingMovies;
}
