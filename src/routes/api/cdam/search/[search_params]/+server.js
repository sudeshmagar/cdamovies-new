import { json } from '@sveltejs/kit';
import { MOVIES } from '@consumet/extensions'

export async function GET({ params, url }) {
    const { search_params } = params;
    const page = url.searchParams.get('page');
    const trendingMovies = await getSource(search_params, page);
    return json(trendingMovies);
}

async function getSource(search_params, page) {
    const flixhq = new MOVIES.FlixHQ();
    const trendingMovies = await flixhq.search(search_params, page);
    return trendingMovies;
}
