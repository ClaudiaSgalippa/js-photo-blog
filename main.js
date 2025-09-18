//-- GENERIAMO LA COSTANTE CHE COLLEGA IL JS ALL'HTML --//
const containerCards = document.getElementById("container-main");

//-- GENERIAMO UNA CHIAMATA AJAX ALL'API INDICATO --//
axios.get("https://lanciweb.github.io/demo/api/pictures/")

    .then((responseCard) => {
        const cards = responseCard.data; 

        let fakePolaroid = ""; //Variabile vuota per l'inserimento della card completa

        cards.forEach(card => { //Cycle per la generazione di tutte le cards

            fakePolaroid += `<div class="card"> 
                        <img src="img/pin.svg" alt="pin" class="pin">
                        <div class="img">
                            <img src="${card.url}" alt="photo">
                        </div>
                        <div>
                            <span class="date">${card.date}</span>
                            <h4 class="title">${card.title}</h4>
                        </div>
                    </div>`
        }) //Recuperiamo il <div> dall'HTML e inseriamo i collegamenti per gli oggetti 
        containerCards.innerHTML = fakePolaroid;
    })

