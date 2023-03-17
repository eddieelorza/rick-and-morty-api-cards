import {getCharacter} from "../api/api.js"


let urlParams = new URLSearchParams(window.location.search)
let characterId = urlParams.get("characterId")
console.log(characterId)

const getSelectedCharacter = async() => {
    let characterData = await getCharacter(characterId)
    let {name, image, status} = characterData
    document.getElementById("detail-image").setAttribute("src", image);
    document.getElementById("detail-title").innerText = name;
    document.getElementById("detail-description").textContent = status;
}

getSelectedCharacter()