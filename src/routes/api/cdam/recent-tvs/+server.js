import { json } from '@sveltejs/kit';
import { MOVIES } from '@consumet/extensions'

export async function GET() {
    const recentTvs = await getRecentTvs();
    return json(recentTvs);
}

async function getRecentTvs() {
    const flixhq = new MOVIES.FlixHQ();
    const recentTvs = await flixhq.fetchRecentTvShows();
    return recentTvs;
}