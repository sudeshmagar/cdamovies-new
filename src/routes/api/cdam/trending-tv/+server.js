import { json } from '@sveltejs/kit';
import { MOVIES } from '@consumet/extensions'

export async function GET() {
    const trendingTv = await getTrendingMovies();
    return json(trendingTv);
}

async function getTrendingMovies() {
    const flixhq = new MOVIES.FlixHQ();
    const trendingTv = await flixhq.fetchTrendingTvShows();
    return trendingTv;
}