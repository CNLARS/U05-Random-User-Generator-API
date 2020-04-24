
//Global Variables
const form = document.createElement("form");
const gallery = document.getElementById("gallery");
const card = document.getElementsByClassName("card");
const searchContainer = document.querySelector(".search-container");

//++EE, Appending a Search Bar to `search-container` div:
    function searchBar(){
        //Where in the world is Carmen Sandiego?
    const htmlMarkup = `
        <form action="#" method="get">
            <input type="search" id="search-input" class="search-input" placeholder="Search...">
            <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
        </form>
    `;
        searchContainer.innerHTML = htmlMarkup;
        
        //Employees are searchable by any information inside contact card:
            document.querySelector(".search-container input").addEventListener("keyup", (e) => {
                //console.log(e.target.value);
                const searchMatch = [];

                for(let i = 0; i < card.length; i++){
                    const contactInfo = document.querySelectorAll(".card")[i].innerText;
                        card[i].style.display = "none";

                    if( contactInfo.includes(e.target.value) ){
                        //Search value includes contacts to push to new array for display:
                        searchMatch.push(contactInfo);
                        card[i].style.display = "inherit";
                        //console.log(); Testing123?
                    } else {
                        //console.log("Who?"); //Testing123, understanding functionality  
                    //Meta Error Message:
                        const secretTelegraph = `<p>Where in the world is Carmen Sandiego?</p>`;
                        gallery.innerHTML = secretTelegraph;
                    }

                }

            });

    }

//Calls the function-RELOCATION UPON REFACTORING
searchBar();  //Testing123


//Appending Gallery of contact cards to `gallery` div:
function galleryMode(){

    //++EE: Updated CSS [Honeybee Employee Theme]
        document.body.style.backgroundColor = "gold";
        document.querySelector("div").style.backgroundColor = "goldenrod";
        document.querySelector("div").style.textShadow = "2px 3px 4px floralwhite";

//Create 12 "Awesome Inc." employee cards with HTML markup
    for(let i = 0; i < 12; i++){
        const htmlMarkup = `
        <div class="card">💡🐝💡🐝💡🐝💡🐝💡🐝💡🐝💡🐝</div>
        `;
    
        gallery.innerHTML += htmlMarkup;

    }
    
}
//Calls the function-RELOCATION UPON REFACTORING
galleryMode();  //Testing123


//Fetch Function: Retrieves Info from Requested url:
function fetchData(url){
    return fetch(url)
      .then(checkStatus)
      .then(res => res.json() )
      .then(data => {
        console.log(data.results); //Reference to compare data
        
            for(let i = 0; i < card.length; i++){ 
            //OG Success Test: console.log(`${data.results[i].name.first} ${data.results[i].name.last}`);
            
            const fullName = `${data.results[i].name.first} ${data.results[i].name.last}`;
            const email = `${data.results[i].email}`;
            const city = `${data.results[i].location.city}`;
            const state = `${data.results[i].location.state}`;
            const country = `${data.results[i].location.country}`;
            const postalCode = `${data.results[i].location.postcode}`;
            const profilePicture = `${data.results[i].picture.large}`;

            //Where in the World is Carmen Sandiego?
                card[i].innerHTML = `
                    <div class="card-img-container">
                    <img class="card-img" src="${profilePicture}" alt="profile picture">
                    💡<br>
                    🐝<br>
                    </div>
                    <div class="card-info-container">
                    <h3 id="name" class="card-name cap">${fullName} 🌻</h3>
                    <p class="card-text">${email}</p>
                    <p class="card-text cap">${city}, ${state}<br> ${country}<br>${postalCode}</p>
                    </div>`
        
             console.log(fullName); //Testing123 Visibility

            }
        
        })
      .catch(error => console.log(`Error occurred: Looks like "${error}" 
        is causing a problem fetching the requested information from ${url} at this time.`) )
  
  }

  Promise.all([
    fetchData(`https://randomuser.me/api/?results=${card.length}`)
  ])
  
    .then(data => {
        //Study up on .then() after Promise.all()!
             
    })

//Sidekick Function(s):
function checkStatus(response){
    if(response.ok){
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(`${response.statusText} occurred.`));
    }
  
  }

/*
  To Code List:  
  Adding event listener to each card to view additional contact information on individual employee.

  ++EE: 
  Navigational elements for Modal Window

 */