<script>
	export let movie;
	
</script>

<div class="card shrink-0 w-48 relative group overflow-hidden rounded-2xl">
	<span class="absolute top-2 left-2 text-xs px-1 rounded-md bg-orange-500">{movie.type}</span>
	<span class="absolute top-2 right-2 text-xs px-1 rounded-md bg-orange-500">{movie.releaseDate}</span>
	<a href="/{movie.id}">
		<div class="img h-72 w-full overflow-hidden rounded-2xl shadow-xl">
			<img
				src={movie.image}
				alt={movie.title}
				class="object-cover rounded-2xl group-hover:scale-110 transition-all"
			/>
		</div>
		<div
			class="absolute w-full bg-gradient-to-t from-gray-900 to-transparent rounded-b-2xl bottom-0 transition-all duration-200"
		>
			<p class="font-semibold p-2 text-white">
				{movie.title}
			</p>
		</div>
	</a>
</div>
