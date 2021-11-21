async function fetchService(header, api) {
    if (header !== undefined) {
        const response = await fetch(api, header);
        return await response.json();
    } else {
        const response = await fetch(api);
        return await response.json();
    }

}

export default fetchService;