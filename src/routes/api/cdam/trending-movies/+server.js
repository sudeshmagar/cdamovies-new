import { json } from '@sveltejs/kit';
import { MOVIES } from '@consumet/extensions'

export async function GET() {
    const trendingMovies = await getTrendingMovies();
    return json(trendingMovies);
}

async function getTrendingMovies() {
    const flixhq = new MOVIES.FlixHQ();
    const trendingMovies = await flixhq.fetchTrendingMovies();
    return trendingMovies;
}