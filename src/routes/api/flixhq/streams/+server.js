import { json } from '@sveltejs/kit';
import { MOVIES } from '@consumet/extensions'

export async function GET({ url }) {
    const id = url.searchParams.get('id');
    const episodeId = url.searchParams.get('episodeId');
    const streamingServers = await getServers(episodeId, id);
    return json(streamingServers);
}

async function getServers(episodeId, id) {
    const flixhq = new MOVIES.FlixHQ();
    const streamingServers = await flixhq.fetchEpisodeServers(episodeId, id);
    return streamingServers;
}
