<script>
	import Hls from 'hls.js';
	import { onMount } from 'svelte';

	export let data;
	let video;
	const { episodeDetails } = data;
	onMount(() => {
		const url = episodeDetails.sources.find((item) => item.quality === '1080').url;
		if (Hls.isSupported()) {
			const hls = new Hls();
			hls.loadSource(`/api/flixhq/player/${url}`);
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

<video id="video" bind:this={video} controls></video>
