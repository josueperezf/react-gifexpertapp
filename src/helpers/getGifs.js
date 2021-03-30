export const getGifs = async (categoria, )=>{
    const url =`https://api.giphy.com/v1/gifs/search?limit=10&api_key=SmbnVrmJ8IATXwlRg6mrG7kRHuEC6Bko&q=${encodeURI(categoria)}`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(img=>{
        return {
            id      :img.id,
            title   :img.title,
            url     :img.images?.downsized_medium.url
        }
    });
    return gifs;
};