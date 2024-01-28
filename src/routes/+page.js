export async function load({ fetch }) {
    const response = await fetch('api/cdam/trending-movies');
    const nowPlaying = await response.json();

    const trendingTvShows = await fetch('api/cdam/trending-tv');
    const trendingTv = await trendingTvShows.json();

    const recentMoviesResult = await fetch('api/cdam/recent-movies');
    const recentMovies = await recentMoviesResult.json();

    const recentTvResult = await fetch('api/cdam/recent-tvs');
    const recentTvs = await recentTvResult.json();
    return { nowPlaying, trendingTv, recentMovies, recentTvs };

}