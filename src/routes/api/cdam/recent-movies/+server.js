import { json } from '@sveltejs/kit';
import { MOVIES } from '@consumet/extensions'

export async function GET() {
    const recentMovies = await getRecentMovies();
    return json(recentMovies);
}

async function getRecentMovies() {
    const flixhq = new MOVIES.FlixHQ();
    const recentMovies = await flixhq.fetchRecentMovies();
    return recentMovies;
}