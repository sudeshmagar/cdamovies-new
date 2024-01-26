<script>
	export let data;
	const { movieDetails, episodeDetails, serverDetails } = data;
	console.log('movieDetails ', movieDetails, 'server', serverDetails);
</script>

<img src={movieDetails.cover} alt={movieDetails.title} />
<h1>{movieDetails.title}</h1>
<p>{movieDetails.description}</p>
{#each serverDetails as server}
	<a
		href="/player?episodeId={movieDetails.episodes[0].id}&id={movieDetails.id}&server={server.name}"
		>{server.name}</a
	>
{/each}
