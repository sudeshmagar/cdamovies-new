<script>
	import 'vidstack/player/styles/default/theme.css';
	import 'vidstack/player/styles/default/layouts/video.css';
	import 'vidstack/player';
	import 'vidstack/player/ui';
	import 'vidstack/player/layouts';

	import { onMount } from 'svelte';
	import {
		isHLSProvider
	} from 'vidstack';

	export let episodeDetails, url;
	export let player ;
	// let src = url;
	let src = episodeDetails?.sources?.find((item) => item.quality === '1080').url;
	let viewType  = 'video';
	console.log(src);
	const textTracks = episodeDetails.subtitles;
	

	onMount(() => {
		//     const src = episodeDetails.sources.find((item) => item.quality === '1080').url;
		// const textTracks = episodeDetails.subtitles;
		for (const track of textTracks) player.textTracks.add(track);

		return player.subscribe((state) => {
			viewType = state.viewType;
		});
	});

	function onProviderChange(event) {
		const provider = event.detail;
		// We can configure provider's here.
		if (isHLSProvider(provider)) {
			provider.config = {};
		}
	}

	// We can listen for the `can-play` event to be notified when the player is ready.
	function onCanPlay(event) {
		// ...
	}
</script>

<media-player
	class="player"
	title="title"
	{src}
	crossorigin
	playsinline
	on:provider-change={onProviderChange}
	on:can-play={onCanPlay}
	stream-type="on-demand"
	bind:this={player}
>
	<media-provider></media-provider>
	<media-audio-layout />
	<media-video-layout thumbnails=""></media-video-layout>
</media-player>
