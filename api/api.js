const API_URL = 'https://rickandmortyapi.com/api/character'


const getData = async()=>{
   let response = await fetch(API_URL)
   let data = await response.json()
   return data
   
}

const getCharacter = async(characterId)=>{
    let response = await fetch(`${API_URL}/${characterId}`)
    let data = await response.json()
    return data

}

export{getData, getCharacter}