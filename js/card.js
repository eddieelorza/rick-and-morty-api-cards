const createCard = (id, name, species,location, status, image, origin) => {
 
        // Create card
        let divCard = document.createElement("div");
        divCard.classList.add(..."card mb-3".split(' '));
        let divRow = document.createElement("div");
        divRow.classList.add(..."row g-0".split(' '));
        let divColImage = document.createElement("div");
        divColImage.classList.add("col-md-4");
        let imgCard = document.createElement("img");
        imgCard.classList.add(..."img-fluid rounded-start".split(' '))
        imgCard.setAttribute("src", image)
        // card body
        let divColData = document.createElement("div");
        divColData.classList.add(..."col-12 col-md-8".split(' '));
        let divCardBody = document.createElement("div")
        divCardBody.classList.add("card-body")
        let cardName = document.createElement("a")
        cardName.classList.add("card-link")
        cardName.setAttribute("href",`./views/character.html?characterId=${id}` );
        let pStatus = document.createElement("p")
        pStatus.classList.add("card-text")
        let pSpecies = document.createElement("p")
        pSpecies.classList.add("card-text")
        let pLastLocation = document.createElement("p")
        pLastLocation.classList.add("card-text")
        let linkLastLocation = document.createElement("a")
        linkLastLocation.classList.add("card-link")
        let pOrigin = document.createElement("p")
        pOrigin.classList.add("card-text")
        let linkOrigin = document.createElement("a")
        linkOrigin.classList.add("card-link")
        // Create content
        cardName.innerText = name 
        pStatus.innerText = status
        // pSpecies.innerText = species
        // pLastLocation.innerText = `Last known location:`
        // linkLastLocation.innerText = location.name
        // pOrigin.innerText = `First seen in:`
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
        divCardBody.append(divColData, cardName, pStatus, pSpecies, pLastLocation, linkLastLocation, pOrigin, linkOrigin)
        divCard.append(divRow, divColImage, imgCard, divCardBody)
        return divCard
    }

    export {createCard}