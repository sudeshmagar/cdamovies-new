<script>
	export let data;
	const movies = data.nowPlaying;
	console.log('movies', movies);
</script>

{#each movies as movie}
	<a href="/movies?id={movie.id}">
		<h1>{movie.title}</h1>
		<img src={movie.image} alt={movie.title} />
	</a>
{/each}
