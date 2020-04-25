
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
                const searchMatch = [];

                for(let i = 0; i < card.length; i++){

                        const contactInfo = document.querySelectorAll(".card")[i].innerText;
                        card[i].style.display = "none";

                    if( contactInfo.includes(e.target.value) ){
                        //Search value includes contacts to push to new array for display:
                        searchMatch.push(contactInfo);
                        card[i].style.display = "inherit";
                        }

                        //Meta Error Message:
                     if(searchMatch.length === 0){
                        //console.log("Where's Waldo?"); Testing123
                        const secretTelegraph = `
                        <h2>Where in the world is Carmen Sandiego?<br>🌎 💃🏾 🔍<br></h2>
                        `;
                        gallery.innerHTML = secretTelegraph;
                    } //Does not update when backspace/delete input!
                    
                }                 
                    
            });

    }


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
        card[i].style.backgroundColor = "goldenrod";

    }
    
}


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
            const timeZone = `${data.results[i].location.timezone.offset}`;
            const profilePicture = `${data.results[i].picture.large}`;

            const phoneNum = `${data.results[i].phone}`;
            const streetName = `${data.results[i].location.street.name}`;
            const addressNum = `${data.results[i].location.street.number}`;
            
            const birthday =  `${data.results[i].dob.date}`;
            //console.log(new Date(birthday).toUTCString()); //Testing123 Reference Point
            
            const year = new Date(birthday).getFullYear();
            const month = new Date(birthday).getMonth() + 1;
            const date = new Date(birthday).getDate();
            
            

            //Where in the World is Carmen Sandiego?
                card[i].innerHTML = `
                    <div class="card-img-container">
                    <img class="card-img" src="${profilePicture}" alt="profile picture">
                    <br>💡<br>🐝
                    </div>
                    <div class="card-info-container">
                    <h3 id="name" class="card-name cap">${fullName} 🌻</h3>
                    <p class="card-text"><strong>${email}</strong></p>
                    <p class="card-text cap">${city}, ${country}<br><br> GMT: ${timeZone}</p>
                    </div>`
        
             console.log(fullName); //Testing123 Visibility
            
             //Sets event listener to all cards:
             card[i].addEventListener("click", (e) => {
                console.log("bzzz"); //Testing123

                document.body.innerHTML = `
                <div class="modal-container">
                <div class="modal">
                    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                    <div class="modal-info-container">
                        <img class="modal-img" src="${profilePicture}" alt="profile picture">
                        <h3 id="name" class="modal-name cap">${fullName}</h3>
                        <p class="modal-text">📧 ${email}</p>
                        <p class="modal-text cap">📍 ${city}</p>
                        <hr>
                        <p class="modal-text">☎️ ${phoneNum}</p>
                        <p class="modal-text">📬 ${addressNum} ${streetName}<br>${city}, ${state}<br>${country}<br>${postalCode}</p>
                        <p class="modal-text">🎁 Birthday: ${month}/${date}/${year}</p>
                    </div>
                
                    <div class="modal-btn-container">
                        <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
                        <button type="button" id="modal-next" class="modal-next btn">Next</button>
                    </div>
                </div>
                `
                //console.log(document.body.innerHTML); //Testing123 Still needs ++EE Criteria

                //add event listener and if conditional 
                //with i + 1 for right and i - 1 for left and modal-close-btn!
                document.getElementsByClassName("modal-container").addEventListener("click", (e) => {
                    console.log("Where's Waldo?");
                });

            });

            }
   
        })
        

      .catch(error => 
        console.log(`ERROR: "${error}" and is unable to provide the requested information from ${url} at this time.`) )
  
  }

//Calling Functions:
searchBar();
    galleryMode();
        fetchData(`https://randomuser.me/api/?results=${card.length}`);


//Sidekick Function(s):
function checkStatus(response){
    if(response.ok){
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(`${response.statusText} occurred.`));
    }
  
  }

/******
    For Future Use:

        Promise.all([

        ])
            .then(data => {
            
            })
******/



/*
  To Code List:  
  Switching contact card on individual employee when "click" event occurs on navigation.
  X to close Modal Window.

  ++EE: 
  Navigational event listeners.
  X to Close Window.

 */