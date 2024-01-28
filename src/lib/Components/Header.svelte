<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { darkMode } from '$lib/store.js';
	import Icon from '@iconify/svelte';

	let searchTerm = '';

	function toggleDarkMode() {
		darkMode.update((state) => !state);
	}
	function searchHandler() {
		goto(`/search/${encodeURIComponent(searchTerm)}`);
	}
</script>

<header class=" w-full sticky top-0 z-50">
	<!--Nav-->
	<nav aria-label="menu nav" class="bg-gray-800 h-auto p-2 w-full">
		<div class="flex items-center justify-between">
			<div class="flex gap-4 items-center justify-center text-white px-2">
				{#if $page.url.pathname != '/'}
					<a href="/">
						<Icon icon="heroicons:chevron-left-16-solid" class="w-8 h-8" />
					</a>
				{/if}

				<form on:submit|preventDefault={searchHandler} class="w-full">
					<span class="relative w-full">
						<input
							aria-label="search"
							type="text"
							id="search"
							placeholder="Search"
							class="w-full bg-gray-900 text-white transition border border-transparent focus:outline-none focus:border-gray-400 rounded-xl py-2 px-3 pl-10 appearance-none leading-normal"
							bind:value={searchTerm}
						/>
						<div class="absolute search-icon top-1/2 -translate-y-1/2 left-2">
							<Icon icon="heroicons:magnifying-glass-solid" class="w-6 h-6" />
						</div>
					</span>
				</form>
			</div>

			<button class="bg-slate-200 p-2 rounded-xl group hover:bg-slate-500"
				><Icon
					icon="heroicons:moon-solid"
					class="text-orange-400 group-hover:text-white transition-colors duration-150 ease-in-out"
				/></button
			>
		</div>
	</nav>
</header>
