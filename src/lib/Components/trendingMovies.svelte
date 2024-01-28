<script>
	import { onMount } from 'svelte';
	import Icon from '@iconify/svelte';
	import Card from './utils/Card.svelte';
	export let movies;
	let trendingMovieCardContainer;
	let scrollAmount = 300;
	onMount(() => {
		trendingMovieCardContainer.scrollTo({ letf: 0, behavior: 'smooth' });
	});
	function scrollCards(direction) {
		if (direction === 'left') {
			trendingMovieCardContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
		} else if (direction === 'right') {
			trendingMovieCardContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
		}
	}
</script>

<section class="flex flex-col gap-4 p-4">
	<h1 class="text-lg font-medium">Trending Movies</h1>
	<div class="relative">
		<div
			class="poster flex flex-nowrap gap-4 overflow-x-scroll"
			bind:this={trendingMovieCardContainer}
		>
			{#each movies as movie}
				<Card {movie} />
			{/each}
		</div>
		<button
			on:click={() => scrollCards('left')}
			class="absolute top-1/2 -translate-y-1/2 -left-4 group"
		>
			<Icon
				icon="heroicons:chevron-left-solid"
				class="w-9 h-9 bg-slate-200 text-slate-600 group-hover:text-slate-300 group-hover:bg-slate-600 rounded-xl shadow-sm p-2 transition-all duration-150 ease-in-out"
			/>
		</button>

		<button
			on:click={() => scrollCards('right')}
			class="absolute top-1/2 -translate-y-1/2 -right-4 group"
		>
			<Icon
				icon="heroicons:chevron-right-solid"
				class="w-9 h-9 bg-slate-200 text-slate-600 group-hover:text-slate-300 group-hover:bg-slate-600 rounded-xl shadow-sm p-2 transition-all duration-150 ease-in-out"
			/>
		</button>
	</div>
</section>

<style>
	.poster::-webkit-scrollbar {
		width: 0;
		display: none; /* width of the entire scrollbar */
	}
</style>
