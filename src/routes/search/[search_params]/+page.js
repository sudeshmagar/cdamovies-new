export async function load({ fetch, params, url }) {
    const { search_params } = params;
    const page = url.searchParams.get('page') || 1;
    const response = await fetch(`../api/cdam/search/${search_params}?page=${page}`);
    const searchResults = await response.json();

    return { searchResults, search_params, page };

}