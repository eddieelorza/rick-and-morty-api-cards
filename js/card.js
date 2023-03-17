const createCard = (id, name, species,location, status, image, origin) => {
 
        // Create card
        let divCard = document.createElement("div");
        divCard.classList.add(..."card mb-3".split(' '));
        let divRow = document.createElement("div");
        divRow.classList.add(..."row".split(' '));
        let divColImage = document.createElement("div");
        divColImage.classList.add("col-md-4");
        let imgCard = document.createElement("img");
        imgCard.classList.add(..."img-fluid rounded-start".split(' '))
        imgCard.setAttribute("src", image)
        // card body
        let divColData = document.createElement("div");
        divColData.classList.add(..."col-12 col-md-8 my-0".split(' '));
        let divCardBody = document.createElement("div")
        divCardBody.classList.add(..."card-body py-0".split(' '))
        let cardName = document.createElement("a")
        cardName.classList.add(..."card-link card-name".split(' '));
        cardName.setAttribute("href",`./views/character.html?characterId=${id}` );
        let divStatusSpecies = document.createElement("div")
        divStatusSpecies.classList.add(..."card-text d-flex".split(' '))
        let pStatus = document.createElement("p")
        pStatus.classList.add(..."card-text px-3".split(' '))
        let pSpecies = document.createElement("p")
        pSpecies.classList.add("card-text")
        let divLocation = document.createElement("div")
        divLocation.classList.add(..."card-text mb-3".split(' '))
        let pLastLocation = document.createElement("p")
        pLastLocation.classList.add(..."card-text mb-0".split(' '))
        let linkLastLocation = document.createElement("a")
        linkLastLocation.classList.add(..."card-link card-location".split(' '))
        let divOrigin = document.createElement("div")
        divOrigin.classList.add("card-text")
        let pOrigin = document.createElement("p")
        pOrigin.classList.add(..."card-text mb-0".split(' '))
        let linkOrigin = document.createElement("a")
        linkOrigin.classList.add(..."card-link card-origin".split(' '))
        // Create content
        cardName.innerText = name 
        pStatus.innerText = status
        pSpecies.innerText = species
        pLastLocation.innerText = `Last known location:`
        linkLastLocation.innerText = location.name
        pOrigin.innerText = `First seen in:`
        linkOrigin.innerText = origin.name
        // cardName.addEventListener("click", () =>
        // {
        //    let character = {
        //     image: image,
        //     name: name,
        //     status: status,
        //     species: species,
        //     location: location.name,
        //     origin: origin.name,
        //     };
         

        // })
       
        // Insert content
        divOrigin.append(pOrigin, linkOrigin)
        divLocation.append(pLastLocation, linkLastLocation)
        divStatusSpecies.append(pStatus, pSpecies)
        divCardBody.append(cardName, divStatusSpecies, divLocation, divOrigin )
        divColData.append(divCardBody)
        divColImage.append(imgCard)
        divRow.append(divColImage, divColData)
        divCard.append(divRow)
        return divCard
    }

    export {createCard}