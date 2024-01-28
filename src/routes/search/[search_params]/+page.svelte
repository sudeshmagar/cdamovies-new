<script>
	import Header from '$lib/Components/Header.svelte';
	import Card from '$lib/Components/utils/Card.svelte';
	import Icon from '@iconify/svelte';

	export let data;
	$: page = data.page;
	$: console.log('page', page);
	const { search_params } = data;
	console.log(search_params);
	$: hasNextPage = data.searchResults.hasNextPage;
	$: searchResults = data.searchResults.results;
</script>

<Header />
<section class="p-4">
	<h1 class="text-3xl font-semibold mb-2">Search results for "{search_params}"</h1>
	<div class="flex flex-wrap gap-4 justify-center items-center">
		{#each searchResults as movie}
			<Card {movie} />
		{/each}
	</div>
	<div class="pagination my-4 flex gap-4">
		<a
			href={page != 1 ? `./${search_params}?page=${parseInt(page) - 1}` : 'javascript:void(0)'}
			class={`${page == 1 ? 'cursor-not-allowed' : 'cursor-pointer'} group relative`}
		>
			<Icon
				icon="heroicons:chevron-left-solid"
				class="w-9 h-9 bg-slate-200 text-slate-600 group-hover:text-slate-300 group-hover:bg-slate-600 rounded-xl shadow-sm p-2 transition-all duration-150 ease-in-out"
			/>
			<span
				class="absolute -bottom-1/2 group-hover:bottom-full left-0 w-fit py-1 px-2 rounded-md h-fit bg-slate-800 hidden group-hover:block text-white"
				>Previous</span
			>
		</a>

		<a
			href={hasNextPage ? `./${search_params}?page=${parseInt(page) + 1}` : 'javascript:void(0)'}
			class={`${!hasNextPage ? 'cursor-not-allowed' : 'cursor-pointer'} group relative`}
		>
			<Icon
				icon="heroicons:chevron-right-solid"
				class={`w-9 h-9 bg-slate-200 text-slate-600 group-hover:text-slate-300 group-hover:bg-slate-600 rounded-xl shadow-sm p-2 transition-all duration-150 ease-in-out`}
			/>
			<span
				class:hidden={!hasNextPage}
				class="absolute -bottom-1/2 group-hover:bottom-full left-0 w-fit py-1 px-2 rounded-md h-fit bg-slate-800 hidden group-hover:block text-white"
				>Next</span
			>
		</a>
	</div>
</section>
