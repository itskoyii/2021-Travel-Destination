const sectionCenter = document.querySelector(".section-center");
const btns = document.querySelectorAll(".btn");

// load places
window.addEventListener("DOMContentLoaded", function() {
    displayDestinationItems(destination);

    // filter places
    btns.forEach(function(btn) {
        btn.addEventListener("click", function(e) {
            const country = e.currentTarget.dataset.id;   //looking for the dataset name id (country)
            const destinationCountry = destination.filter((destItem) => {  
                    if (destItem.country === country) {     // if destination item matches the country variable then return the destination item
                        return destItem;
                    }
                });
                    if(country === "all") {     // if country button equal to all then call the displayDestinationItems with the destination array
                        return displayDestinationItems(destination);     
                    } else {                    // otherwise, display the specific country items
                        return displayDestinationItems(destinationCountry);
                    }
        });
    });
});

function displayDestinationItems(destItems) {
    let displayDestination = destItems.map((place) => {
        return `<article class="destination">
        <img src=${place.img} class="photo" alt=${place.title}/>
        <div class="destination-info">
        <header>
        <h4>${place.title}</h4>
        <h4 class="city">${place.city}</h4>
        </header>
        <p class="destination-text">${place.desc}</p>
        </div>    
        </article>`;
    });
    displayDestination = displayDestination.join("");   // join all in one string without commas in between articles
    sectionCenter.innerHTML = displayDestination;  
}