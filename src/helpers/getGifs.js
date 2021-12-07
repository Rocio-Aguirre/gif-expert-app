export const getGifts = async(category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=AVwX9RSdYj6ssWpggbKqLGgDkwTo7ZUR`
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img =>{
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized.url
        }
    })
    //console.log(gifs)
    return gifs;
    //setImages(gifs);
}