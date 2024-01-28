<script>
	import { page } from '$app/stores';
	import TrendingMovies from '$lib/Components/TrendingMovies.svelte';
	import Aside from '../lib/Components/Aside.svelte';
	import Header from '../lib/Components/Header.svelte';
	import RecentMovies from '../lib/Components/recentMovies.svelte';
	import RecentTvs from '../lib/Components/recentTvs.svelte';
	import TrendingTv from '../lib/Components/trendingTV.svelte';
	export let data;
	const movies = data.nowPlaying;
	const tvs = data.trendingTv;
	const recentMovies = data.recentMovies;
	const recentTvs = data.recentTvs;
</script>

<!-- <div class="leading-normal tracking-normal mt-12">
	<Header />
	<main>
		<div class="flex flex-col md:flex-row">
			{#if $page.url.pathname === '/'}
				<Aside />
			{/if}

			<section class="overflow-hidden">
				<div id="main" class="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">
					
					<TrendingMovies {movies} />
					<RecentMovies {recentMovies} />
					<TrendingTv {tvs} />
					<RecentTvs {recentTvs} />
					
				</div>
			</section>
		</div>
	</main>
</div> -->

<div class="wrapper w-full h-full">
	<aside class="fixed left-0 top-0 w-48 h-screen z-50">
		<Aside />
	</aside>
	<div class="main mb-20">
		<Header />
		<div class="content">
			<TrendingMovies {movies} />
			<RecentMovies {recentMovies} />
			<TrendingTv {tvs} />
			<RecentTvs {recentTvs} />
		</div>
	</div>
</div>

<!-- {#each movies as movie}
	<a href="/movies?id={movie.id}">
		<h1>{movie.title}</h1>
		<img src={movie.image} alt={movie.title} />
	</a>
{/each} -->

<style>
	.main {
		width: 100%;
		margin-left: 0;
	}
	@media screen and (min-width: 1024px) {
		.main {
			width: calc(100% - 12rem);
			margin-left: 12rem;
		}
	}
</style>
