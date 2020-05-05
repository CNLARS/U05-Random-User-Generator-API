
//Global Variables
const form = document.createElement("form");
const gallery = document.getElementById("gallery");
const card = document.getElementsByClassName("card");
const searchContainer = document.querySelector(".search-container");
const modalDiv = document.createElement('div');

const people = [];

(async () => {
    const rawData = await fetch('https://randomuser.me/api/?results=12');
    const jsonData = await rawData.json();
    const employees = jsonData.results;
        searchBar();
        await employeeGallery(employees);
        await galleryMode(employees);
        //console.log(employees);

          }) ();

          //Create 12 "Awesome Inc." employee cards and HTML markup:
function employeeGallery(employees){
       
        employees.map(employee => { 
        
        let cardHTML = `
            <div class="card">
                <div class="card-img-container">
                💡<br>
                <img class="card-img" src="${employee.picture.large}" alt="profile picture">
                </div>
                <div class="card-info-container">
                <h3 id="name" class="card-name cap">${employee.name.first} ${employee.name.last}</h3>
                <p class="card-text"><strong>${employee.email}</strong></p>
                <p class="card-text cap">${employee.location.city}, ${employee.location.country}<br> GMT: ${employee.location.timezone.offset}</p>
                </div>
            </div>
                `;
                gallery.innerHTML += cardHTML;
            
        });

    //++EE Updated CSS:
        for(let i = 0; i < 12; i++){ 
            card[i].style.backgroundColor = "darkseagreen";
            card[i].style.border = "1px solid seagreen";
            document.getElementsByClassName("card-img")[i].style.border = "1px solid seagreen";
        }

}

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


// //Appending Gallery of contact cards to `gallery` div:
function galleryMode(employees){

    //++EE: Updated CSS:
        document.body.style.backgroundColor = "mediumseagreen";
        document.querySelector("div").style.backgroundColor = "mediumseagreen";
        document.querySelector("div").style.textShadow = "1px 2px 3px floralwhite";

        //For Empty Modal Window:
            modalDiv.className = "modal-container";
            document.body.appendChild(modalDiv);
            employees.map(employee => {
                
                const birthday =  `${employee.dob.date}`;
                //console.log(new Date(birthday).toUTCString()); //Testing123 Reference Point    
                const year = new Date(birthday).getFullYear();
                const month = new Date(birthday).getMonth() + 1;
                const date = new Date(birthday).getDate();

                let modalHTML =`
            <div class="modal">
                <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                <div class="modal-info-container">
                <img class="modal-img" src="${employee.picture.large}" alt="profile picture">
                <h3 id="name" class="modal-name cap">${employee.name.first} ${employee.name.last}</h3>
                <p class="modal-text">${employee.email}</p>
                <p class="modal-text cap">📍 ${employee.location.city}</p>
                <hr>
                <p class="modal-text">☎️: ${employee.phone}</p>
                <p class="modal-text">📬 ${employee.location.street.number} ${employee.location.street.name}<br>${employee.location.city}, ${employee.location.state}<br>${employee.location.country}<br>${employee.location.postcode}</p>
                <p class="modal-text">🎁 Birthday: ${month}/${date}/${year}</p>
            </div>
            
                <div class="modal-btn-container">
                    <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
                    <button type="button" id="modal-next" class="modal-next btn">Next</button>
                </div>
            
            `;
                modalDiv.innerHTML += modalHTML;
                modalDiv.style.display = "none";

                people.push(employees); //Creates separate Array for PREV/NEXT

            });
            //console.log(employees);
            
            employees.map(employee => console.log(employee.name.first)); //Testing123
                

        //++EE Updated CSS:
            // document.getElementsByClassName("modal-img")[0].style.border = "1px solid black";
            // document.getElementsByClassName("modal-prev btn")[0].style.backgroundColor = "black";
            // document.getElementsByClassName("modal-next btn")[0].style.backgroundColor = "black";


        //Closes Modal Window by setting  display to none
            document.querySelector(".modal-close-btn").addEventListener("click", (e) => {

                for(let i = 0; i < card.length; i ++){
                    modalDiv.style.display = "none";
                    document.getElementsByClassName("modal")[i].style.display = "none";
                }
                
            
                });

    //    //Creates separate Array to cycle with future PREV/NEXT btn:
    //         employees.map(employee => { 
    //             people.push(employees); 
    //             //console.log(employees); //Testing123
    //         }); 

            for(let i = 0; i < card.length; i ++){
                Array.from(card)[i].addEventListener("click", (e) => {
                    //let modalText = document.getElementsByClassName("modal-text");
                    console.log("💡"); //Testing123
                   
                        modalDiv.style.display = "block";
                        if(card[i] = e.target){
                            console.log(i); 
                         document.getElementsByClassName("modal")[i].style.display = "block";
                     }

                     
                        // //++EE Updated CSS:
                        // document.getElementsByClassName("modal")[0].style.color = "seagreen";
                
                        // modalText[0].style.color = "black";
                        // modalText[1].style.color = "lightseagreen";
                        // modalText[2].style.color = "black";
                        // modalText[3].style.color = "black";
                        // modalText[4].style.color = "mediumseagreen";
                 
                });
                }
                                
    
} //end of function


/******** Remnants of Code:

                    //++EE Updated CSS:
                    document.getElementsByClassName("modal")[0].style.color = "seagreen";

                    modalText[0].style.color = "black";
                    modalText[1].style.color = "lightseagreen";
                    modalText[2].style.color = "black";
                    modalText[3].style.color = "black";
                    modalText[4].style.color = "mediumseagreen";

                    document.getElementsByClassName("modal-img")[0].style.border = "1px solid black";
                    
         

 //Future Prev/Next BTN:
                document.querySelector("#modal-prev").addEventListener("click", (e) => {
                                //console.log("Phase 7 Refactor");
                             

                     //Toggles Disable on PREV btn:
                        if(people[i - 2] === undefined){
                            document.getElementsByClassName("modal-prev btn")[0].disabled = true;
                            document.getElementsByClassName("modal-prev btn")[0].style.backgroundColor = "silver";
                        } 
    
                        if(e.target === document.getElementsByClassName("modal-prev btn")[0]){
                            document.getElementsByClassName("modal-next btn")[0].disabled = false;
                            document.getElementsByClassName("modal-next btn")[0].style.backgroundColor = "black";
                        } 
                    
            
                    
                    }); //Event

                document.querySelector("#modal-next").addEventListener("click", (e) => {
                                //console.log("Phase 7 Refactoring");
                                

                     //Toggles Disable on NEXT btn:
                        if(people[i + 2] === undefined){
                            document.getElementsByClassName("modal-next btn")[0].disabled = true;
                            document.getElementsByClassName("modal-next btn")[0].style.backgroundColor = "silver";
                        } 

                        if(e.target === document.getElementsByClassName("modal-next btn")[0]){
                            document.getElementsByClassName("modal-prev btn")[0].disabled = false;
                            document.getElementsByClassName("modal-prev btn")[0].style.backgroundColor = "black";
                        } 
                    

            }); //Event
*******/


/******
     //Sidekick Function(s):

function checkStatus(response){
    if(response.ok){
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(`${response.statusText} occurred.`));
    }
  
  }
******/

/******
    For Recommended Refactoring:

    (async () => {
  const rawData = await fetch('https://randomuser.me/api/?results=12&lego');
  const jsonData = await rawData.json();
  const employees = jsonData.results;
  console.log(employees);
        }) ();

******/