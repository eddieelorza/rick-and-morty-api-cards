import {getData} from "../api/api.js"
import {createCard} from "../js/card.js"


const getCard = async()=>{
    let wrapper = document.getElementById('list-characters')
    let test = await getData()
    let chartArray = test.results
    console.log(chartArray)
    chartArray.forEach(item =>{
        let{id, name, species,location, status, image, origin} = item
        console.log(id, name, species,location, status, image, origin)
        let divCol = document.createElement('div')
        divCol.classList.add(..."col-6 col-md-6 col-lg-4 pb-4".split(" "))
        let info = createCard(id, name, species,location, status, image, origin)
        divCol.append(info)
        wrapper.append(divCol)

    })
}

getCard()