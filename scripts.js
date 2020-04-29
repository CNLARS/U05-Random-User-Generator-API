
//Global Variables
const form = document.createElement("form");
const gallery = document.getElementById("gallery");
const card = document.getElementsByClassName("card");
const searchContainer = document.querySelector(".search-container");
const modalDiv = document.createElement('div');

const people = [];

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
                }    

                  //Meta Error Message:
                  if(searchMatch.length === 0){
                    const secretTelegraph = 
                        "Where in the world is Carmen Sandiego? 🌎 💃🏾 🔍";
                    window.alert(secretTelegraph);
                }            
                    
            });

    }


//Appending Gallery of contact cards to `gallery` div:
function galleryMode(){

    //++EE: Updated CSS:
        document.body.style.backgroundColor = "mediumseagreen";
        document.querySelector("div").style.backgroundColor = "mediumseagreen";
        document.querySelector("div").style.textShadow = "1px 2px 3px floralwhite";

        //For Modal Window:
            modalDiv.className = "modal-container";
            document.body.appendChild(modalDiv);
            modalDiv.style.display = "none";

//Create 12 "Awesome Inc." employee cards with HTML markup
    for(let i = 0; i < 12; i++){
        const htmlMarkup = `
        <div class="card">💡🌎💡🌎💡🌎💡🌎💡🌎💡🌎💡🌎💡</div>
        `;
    
        gallery.innerHTML += htmlMarkup;

    //++EE Updated CSS:
        card[i].style.backgroundColor = "darkseagreen";
        card[i].style.border = "1px solid seagreen"

    }
    
}


//Fetch Function: Retrieves Info from Requested url:
function fetchData(url){
    return fetch(url)
      .then(checkStatus)
      .then(res => res.json() )
      .then(data => {
        //console.log(data.results); //Reference to compare data
        
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
                
                let cardHTML = `
                <div class="card-img-container">
                💡<br>
                <img class="card-img" src="${profilePicture}" alt="profile picture">
                </div>
                <div class="card-info-container">
                <h3 id="name" class="card-name cap">${fullName}</h3>
                <p class="card-text"><strong>${email}</strong></p>
                <p class="card-text cap">${city}, ${country}<br> GMT: ${timeZone}</p>
                </div>`;

                let employeeInfo =`
                    
                    <div class="modal">
                        <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                        <div class="modal-info-container">
                            <img class="modal-img" src="${profilePicture}" alt="profile picture">
                            <h3 id="name" class="modal-name cap">${fullName}</h3>
                            <p class="modal-text">${email}</p>
                            <p class="modal-text cap">📍 ${city}</p>
                            <hr>
                            <p class="modal-text">☎️: ${phoneNum}</p>
                            <p class="modal-text">📬 ${addressNum} ${streetName}<br>${city}, ${state}<br>${country}<br>${postalCode}</p>
                            <p class="modal-text">🎁 Birthday: ${month}/${date}/${year}</p>
                        </div>
                    
                        <div class="modal-btn-container">
                            <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
                            <button type="button" id="modal-next" class="modal-next btn">Next</button>
                        </div>
                    
                    `;

                card[i].innerHTML = cardHTML;
                    //++EE Updated CSS added after `card` has HTML to style:
                    document.getElementsByClassName("card-img")[i].style.border = "1px solid seagreen";
                
                //Creates an array to cycle with PREV/NEXT btn
                people.push(data.results[i]) //Code Advised by @Emma W to create separate Array for PREV/NEXT
                
                //console.log(fullName);
        
             //Sets event listener to all cards:
             Array.from(card)[i].addEventListener("click", () => {
                let modalText = document.getElementsByClassName("modal-text");
                console.log("💡"); //Testing123
               
                    modalDiv.innerHTML = employeeInfo; //innerHTML with initial data
                    modalDiv.style.display = "block";

                    //++EE Updated CSS:
                    document.getElementsByClassName("modal")[0].style.color = "seagreen";

                    modalText[0].style.color = "black";
                    modalText[1].style.color = "lightseagreen";
                    modalText[2].style.color = "black";
                    modalText[3].style.color = "black";
                    modalText[4].style.color = "mediumseagreen";

                    document.getElementsByClassName("modal-img")[0].style.border = "1px solid black";
                    document.getElementsByClassName("modal-prev btn")[0].style.backgroundColor = "black";
                    document.getElementsByClassName("modal-next btn")[0].style.backgroundColor = "black"

                    
                
                //Closes Modal Window by emptying innerHTML and sets display to none
                document.querySelector(".modal-close-btn").addEventListener("click", (e) => {

                    modalDiv.innerHTML = "";
                    modalDiv.style.display = "none";
                    
                    });

 //++EE Prev/Next BTN:
                document.querySelector("#modal-prev").addEventListener("click", (e) => {
                                //console.log("Phase 6 Functional");
                                console.log(`${people[i -= 1].name.first}`);

                        //Toggles Disable on PREV btn:
                        if(people[i - 2] === undefined){
                            document.getElementsByClassName("modal-prev btn")[0].disabled = true;
                            document.getElementsByClassName("modal-prev btn")[0].style.backgroundColor = "silver";
                        } 
    
                        if(e.target === document.getElementsByClassName("modal-prev btn")[0]){
                            document.getElementsByClassName("modal-next btn")[0].disabled = false;
                            document.getElementsByClassName("modal-next btn")[0].style.backgroundColor = "black";
                        } 
                    
                    //Cycles the Array of people displayed:
                    let prevProfilePicture = document.getElementsByClassName("modal-img")[0];
                            prevProfilePicture.src = `${people[i - 1].picture.large}`;

                    let prevFullName = document.getElementsByClassName("modal-name cap")[0];
                            prevFullName.innerText = `${people[i - 1].name.first} ${people[i - 1].name.last}`;

                    let prevEmail = modalText[0];
                            prevEmail.innerText = `${people[i - 1].email}`;

                    let prevCity = modalText[1];
                            prevCity.innerText = `📍${people[i - 1].location.city}`;

                    let prevPhone = modalText[2];
                            prevPhone.innerText = `☎️: ${people[i - 1].phone}`;

                    let prevAddress = modalText[3];
                            prevAddress.innerText = 
                        `📬 ${people[i - 1].location.street.number} ${people[i - 1].location.street.name}
                            ${people[i - 1].location.city}, ${people[i - 1].location.state}
                            ${people[i - 1].location.country}
                            ${people[i - 1].location.postcode}`;
                            
                    
                    let prevBirthday = modalText[4];
                            let prevDOB = `${people[i - 1].dob.date}`;
                            
                            let prevYear = new Date(prevDOB).getFullYear();
                            let prevMonth = new Date(prevDOB).getMonth() + 1;
                            let prevDate = new Date(prevDOB).getDate();

                            prevBirthday.innerText = `🎁 Birthday: ${prevMonth}/${prevDate}/${prevYear}`;
                
                    
                    });

                document.querySelector("#modal-next").addEventListener("click", (e) => {
                                //console.log("Phase 6 Functional");
                                console.log(`${people[i += 1].name.first}`);

                        //Toggles Disable on NEXT btn:
                        if(people[i + 2] === undefined){
                            document.getElementsByClassName("modal-next btn")[0].disabled = true;
                            document.getElementsByClassName("modal-next btn")[0].style.backgroundColor = "silver";
                        } 

                        if(e.target === document.getElementsByClassName("modal-next btn")[0]){
                            document.getElementsByClassName("modal-prev btn")[0].disabled = false;
                            document.getElementsByClassName("modal-prev btn")[0].style.backgroundColor = "black";
                        } 
                    
                    //Cycles the Array of people displayed:
                    let nextProfilePicture = document.getElementsByClassName("modal-img")[0];
                            nextProfilePicture.src = `${people[i + 1].picture.large}`;

                    let nextFullName = document.getElementsByClassName("modal-name cap")[0];
                            nextFullName.innerText = `${people[i + 1].name.first} ${people[i + 1].name.last}`;
                            //console.log(nextFullName);

                    let nextEmail = modalText[0];
                            nextEmail.innerText = `${people[i + 1].email}`;

                    let nextCity = modalText[1];
                            nextCity.innerText = `📍${people[i + 1].location.city}`;

                    let nextPhone = modalText[2];
                            nextPhone.innerText = `☎️: ${people[i + 1].phone}`;

                    let nextAddress = modalText[3];
                            nextAddress.innerText = 
                        `📬 ${people[i + 1].location.street.number} ${people[i + 1].location.street.name}
                            ${people[i + 1].location.city}, ${people[i + 1].location.state}
                            ${people[i + 1].location.country}
                            ${people[i + 1].location.postcode}`;
                            
                    
                    let nextBirthday = modalText[4];
                            let nextDOB = `${people[i + 1].dob.date}`;
                            
                            let nextYear = new Date(nextDOB).getFullYear();
                            let nextMonth = new Date(nextDOB).getMonth() + 1;
                            let nextDate = new Date(nextDOB).getDate();

                            nextBirthday.innerText = `🎁 Birthday: ${nextMonth}/${nextDate}/${nextYear}`;

                    });

            }); //Event


            }//For
            
        })//then
        

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
            Riddle:
                Why only functional at 100% with lines 187, and 238?
                    Commented out results in error.
 */