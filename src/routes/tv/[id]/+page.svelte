<script>
	import Icon from '@iconify/svelte';
	import Header from '../../../lib/Components/Header.svelte';
	import Aside from '../../../lib/Components/Aside.svelte';
	export let data;
	const { movieDetails, episodeDetails, serverDetails } = data;
	// console.log('movieDetails ', movieDetails, 'server', serverDetails);
</script>

<Header />
<div class="lg:hidden">
	<Aside />
</div>

<div class="detail-page w-full">
	<div class="banner relative h-[60vh]">
		<img src={movieDetails.cover} alt={movieDetails.title} class="h-full object-cover w-full" />
		<div class="gradient absolute inset-0" />
		<div class="curve-edge absolute rounded-t-3xl h-10 inset-x-0 z-1 bg-white -bottom-[10px]" />
	</div>
	<div
		class="detail-title container relative flex flex-col md:flex-row w-100 items-center gap-4 md:items-start"
	>
		<img
			src={movieDetails.image}
			alt={movieDetails.title}
			class="w-48 -mt-36 rounded-3xl bg-transparent"
		/>
		<div class="detail-disc flex flex-col items-center md:items-start gap-2">
			<h1 class="text-2xl text-center font-bold">{movieDetails.title}</h1>
			<div class="genres flex gap-2 flex-wrap items-center justify-between">
				{#if movieDetails.length != 0}
					{#each movieDetails.genres as genre}
						<a href="/" class="px-2 py-1 shadow-md bg-slate-100 rounded-md text-xs font-medium"
							>{genre}</a
						>
					{/each}
				{/if}
			</div>
			<div class="info mb-5 flex flex-row items-center text-xs space-x-2.5 > * + *">
				<p>
					<span class="inline-block mr-2"
						><Icon icon="heroicons:clock-solid" />
					</span>{movieDetails?.duration} min
				</p>
				<p>
					<span class="inline-block mr-2"
						><Icon icon="heroicons:calendar-days-solid" />
					</span>{movieDetails?.releaseDate?.slice(0, 4)}
				</p>
				<p>
					<span class="inline-block mr-2"
						><Icon icon="heroicons:star-solid" />
					</span>{movieDetails?.rating}
				</p>
			</div>

			<!-- <Overlay {isOpen} {movieID} on:close={() => (isOpen = false)} /> -->

			<div class="bottom flex gap-4">
				{#each serverDetails as server}
					<a
						href="/player?episodeId={movieDetails.episodes[0]
							.id}&id={movieDetails.id}&server={server.name}"
						class="bg-slate-600 py-2 px-5 rounded-full shadow-lg text-slate-100 flex items-center justify-between hover:bg-slate-400"
						><Icon icon="heroicons:play-solid" class="mr-2" /> <span>{server.name}</span></a
					>
				{/each}

				<!-- <button
					class="bg-slate-600 py-2 px-5 rounded-full shadow-lg text-slate-100 flex items-center justify-between hover:bg-slate-400"
				>
					<Icon icon="heroicons:play-solid" class="mr-2" /><span>Play </span>
				</button> -->
			</div>
		</div>
	</div>
	<section class="more-details px-6">
		<h1 class="text-xl font-bold my-2">Sypnosis</h1>
		<p class="text-sm text-slate-600 my-5">{movieDetails.description}</p>
	</section>
	<!-- <section class="videos px-6">
		<h1 class="text-xl font-bold my-2">Trailers</h1>
		<div class="slider relative my-5">
			<div
				class="trailers snap-x snap-mandatory flex flex-nowrap overflow-x-scroll"
				bind:this={trailerContainer}
			>
				{#each trailers as trailer}
					<TrailorCard {trailer} />
				{/each}
			</div>
			<button on:click={() => snapCards('prev')} class="absolute top-1/2 -translate-y-1/2 -left-4">
				<Icon
					icon="mingcute:left-fill"
					class="w-9 h-9 bg-slate-200 text-slate-600 group-hover:text-slate-300 group-hover:bg-slate-600 rounded-xl shadow-sm p-2"
				/>
			</button>

			<button on:click={() => snapCards('next')} class="absolute top-1/2 -translate-y-1/2 -right-4">
				<Icon
					icon="mingcute:right-fill"
					class="w-9 h-9 bg-slate-200 text-slate-600 group-hover:text-slate-300 group-hover:bg-slate-600 rounded-xl shadow-sm p-2"
				/>
			</button>
		</div>
	</section> -->
	<!-- <section class="px-6">
		<h1 class="text-xl font-bold my-2">Casts</h1>
		<div class="now-playing relative">
			<div class="poster gap-4 flex flex-nowrap overflow-x-scroll" bind:this={cardContainer}>
				{#each casts as cast}
					<CastCard {cast} />
				{/each}
			</div>

			<button
				on:click={() => scrollCards('left')}
				class="absolute top-1/2 -translate-y-1/2 -left-4"
			>
				<Icon
					icon="mingcute:left-fill"
					class="w-9 h-9 bg-slate-200 text-slate-600 group-hover:text-slate-300 group-hover:bg-slate-600 rounded-xl shadow-sm p-2"
				/>
			</button>

			<button on:click={() => scrollCards('right')} class="absolute top-1/3 -right-4">
				<Icon
					icon="mingcute:right-fill"
					class="w-9 h-9 bg-slate-200 text-slate-600 group-hover:text-slate-300 group-hover:bg-slate-600 rounded-xl shadow-sm p-2"
				/>
			</button>
		</div>
	</section>
	<section class="px-6">
		<h1 class="text-xl font-bold my-2">You may also like</h1>
		<div class="now-playing relative">
			<div class="poster gap-4 flex flex-nowrap overflow-x-scroll" bind:this={cardContainer}>
				{#each similars as similar}
					<SimilarCard {similar} />
				{/each}
			</div>

			<button
				on:click={() => scrollCards('left')}
				class="absolute top-1/2 -translate-y-1/2 -left-4"
			>
				<Icon
					icon="mingcute:left-fill"
					class="w-9 h-9 bg-slate-200 text-slate-600 group-hover:text-slate-300 group-hover:bg-slate-600 rounded-xl shadow-sm p-2"
				/>
			</button>

			<button on:click={() => scrollCards('right')} class="absolute top-1/3 -right-4">
				<Icon
					icon="mingcute:right-fill"
					class="w-9 h-9 bg-slate-200 text-slate-600 group-hover:text-slate-300 group-hover:bg-slate-600 rounded-xl shadow-sm p-2"
				/>
			</button>
		</div>
	</section> -->
</div>

<style>
	.gradient {
		background: linear-gradient(180deg, rgba(125, 185, 232, 0) 0, #0a1016);
	}
</style>
