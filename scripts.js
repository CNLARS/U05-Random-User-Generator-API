/* 
jQuery Snippet from "https://randomuser.me/"

$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
  });

  */


//Global Variables
const form = document.createElement("form");
const gallery = document.getElementById("gallery");
const card = document.getElementsByClassName("card");
const searchContainer = document.querySelector(".search-container");

//Appending a Search Bar to `search-container` div:
    function searchBar(){

    const htmlMarkup = `
        <form action="#" method="get">
            <input type="search" id="search-input" class="search-input" placeholder="Search...">
            <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
        </form>
    `;
        searchContainer.innerHTML = htmlMarkup;

/*EE Code: Employees can be filtered by name.*/

    }
//Calls the function-RELOCATION UPON REFACTORING
searchBar();  //Testing123


//Appending Gallery to `gallery` div:
function galleryMode(){
    //Loops to randomly select 12 "Awesome Inc." employees
    for(let i = 0; i < 12; i++){
        const htmlMarkup = `
        <div class="card">
            <div class="card-img-container">
                <img class="card-img" src="https://placehold.it/90x90" alt="profile picture">
            </div>
            <div class="card-info-container">
                <h3 id="name" class="card-name cap">first last</h3>
                <p class="card-text">email</p>
                <p class="card-text cap">city, state, country, postcode</p>
            </div>
        </div>
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
      .catch(error => console.log(`Looks like ${error} is causing a problem fetching the requested information from ${url} at this time. ${response.statusText}`) )
  
  }

  Promise.all([
    fetchData("https://randomuser.me/api/")
  ])
  
    .then(data => {
        console.log(data); //Testing123 for reference
        const fullName = `${data[0].results[0].name.first} ${data[0].results[0].name.last}`;
        const email = `${data[0].results[0].email}`;
        const city = `${data[0].results[0].location.city}`;
        const state = `${data[0].results[0].location.state}`;
        const country = `${data[0].results[0].location.country}`;
        const postalCode = `${data[0].results[0].location.postcode}`;
        const profilePicture = `${data[0].results[0].picture.large}`;

        findEmployee(fullName, email, city, state, country, postalCode, profilePicture);

    })

  
function findEmployee(nameData, emailData, cityData, stateData, countryData, postalData, pictureData){
    //Where in the World is Carmen Sandiego?

    const employeeName = document.getElementById("name");
        employeeName.innerHTML = nameData;

    const employeeEmail = document.getElementsByClassName("card-text")[0];
        employeeEmail.innerHTML = emailData;

    const employeePhoto = document.getElementsByClassName("card-img")[0];
        employeePhoto.src = pictureData;

    const employeeLocation = document.getElementsByClassName("card-text")[1];
        employeeLocation.innerHTML = `${cityData}, ${stateData}<br> ${countryData}<br>${postalData}`;

    }


//Sidekick Function(s):
function checkStatus(response){
    if(response.ok){
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(`${response.statusText} occurred.`));
    }
  
  }

  //To Be Continued:  Displaying data to each card

//   for(let i = 0; i < card.length; i++){
//     console.log(i);
//  //findEmployee(fullName, email, city, state, country, postalCode);
// }