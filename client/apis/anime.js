import request from 'superagent'

const baseURL = 'https://api.jikan.moe/v3/search/anime?q=Naruto&limit=16'

export function getAnime(){
    return request.get(baseURL).then(res => res.body)
}