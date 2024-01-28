<script>
	import Hls from 'hls.js';
	import { onMount } from 'svelte';
	import Header from '../../lib/Components/Header.svelte';

	export let data;
	let player;
	const { episodeDetails } = data;
	const url = episodeDetails.sources.find((item) => item.quality === '1080').url;
	let video;
	onMount(() => {
		const url = episodeDetails.sources.find((item) => item.quality === '1080').url;

		if (Hls.isSupported()) {
			const hls = new Hls();
			hls.loadSource(`/api/cdam/player/${url}`);
			// hls.loadSource(`/api/flixhq/player?video=${url}&referer=${episodeDetails.headers.Referer}`);
			hls.attachMedia(video);
			hls.on(Hls.Events.MEDIA_ATTACHED, function () {
				video.muted = false;
				video.play();
			});
		} else if (video.canPlayType('application/vnd.apple.mpegurl')) {
			video.src = url;
			video.addEventListener('loadedmetadata', function () {
				video.muted = false;
				video.play();
			});
		}
	});
</script>

<Header />
<video id="video" bind:this={video} controls class="w-full aspect-video"></video>
