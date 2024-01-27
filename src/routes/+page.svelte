<script>
	import { page } from '$app/stores';
	import TrendingMovies from '$lib/Components/TrendingMovies.svelte';
	import Aside from '../lib/Components/Aside.svelte';
	import Header from '../lib/Components/Header.svelte';
	import Main from '../lib/Components/Main.svelte';
	export let data;
	const movies = data.nowPlaying;
</script>
<div class="leading-normal tracking-normal mt-12">
    <Header />
    <main>
        <div class="flex flex-col md:flex-row">
            {#if $page.url.pathname === '/'}
            <Aside />
            {/if}
        
        <section class="overflow-hidden">
            <div id="main" class="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">
                <!-- content -->
<TrendingMovies {movies} />

            </div>
        </section>
        
    </div>
    </main>
    
    
</div>






<!-- {#each movies as movie}
	<a href="/movies?id={movie.id}">
		<h1>{movie.title}</h1>
		<img src={movie.image} alt={movie.title} />
	</a>
{/each} -->
