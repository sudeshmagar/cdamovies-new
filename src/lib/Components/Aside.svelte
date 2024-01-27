<script>
import {page} from '$app/stores';
import Icon from '@iconify/svelte';
	const links = [
		{
			id: 1,
			name: 'Explore',
			src: '/',
			icon: 'heroicons:squares-2x2-solid'
		},
		{
			id: 2,
			name: 'Movies',
			src: '/about',
			icon: 'heroicons:play-solid'
		},
		{
			id: 3,
			name: 'TV',
			src: '/contact',
			icon: 'heroicons:tv-solid'
		},
		{
			id: 4,
			name: 'Anime',
			src: '/projects',
			icon: 'heroicons:fire-solid'
		}
	];
</script>

<nav aria-label="alternative nav">
	<div
		class="bg-gray-800 shadow-xl h-20 fixed bottom-0 lg:relative lg:h-screen z-10 w-full lg:w-48 content-center"
	>
		<div
			class="lg:mt-12 lg:w-48 lg:fixed lg:left-0 lg:top-0 content-center lg:content-start text-left justify-between"
		>
			<ul
				class="list-reset flex flex-row lg:flex-col pt-3 lg:py-3 px-1 lg:px-2 text-center lg:text-left"
			>
				{#each links as link}
					<li class="mr-3 flex-1">
						<a
							href={link.src}
							class="flex flex-col lg:flex-row gap-2 lg:gap-4 items-center py-1 lg:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500 " class:active="{$page.url.pathname == link.src}"
						>
							<Icon icon={link.icon} class="w-6 h-6" />
							<span
								class="pb-1 lg:pb-0 text-xs lg:text-base text-gray-400 lg:text-gray-200 block lg:inline-block"
								>{link.name}</span
							>
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</nav>

<style>
    a.active{
        @apply border-pink-500;
    }
</style>