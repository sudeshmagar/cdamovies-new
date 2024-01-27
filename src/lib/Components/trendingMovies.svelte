<script>
	import Card from './utils/Card.svelte';
	export let movies;
</script>

<section class="flex flex-col gap-4 p-4">
	<h1 class="text-lg font-medium">Trending Movies</h1>
	<div class="flex gap-4 overflow-x-auto">
		{#each movies as movie}
			<Card {movie} />
		{/each}
	</div>
</section>
