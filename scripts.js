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

    }
//Calls the function-RELOCATION UPON REFACTORING
searchBar();


//Appending Gallery to `gallery` div:
function galleryMode(){
    
    const htmlMarkup = `
        <div class="card">
            <div class="card-img-container">
                <img class="card-img" src="https://placehold.it/90x90" alt="profile picture">
            </div>
            <div class="card-info-container">
                <h3 id="name" class="card-name cap">first last</h3>
                <p class="card-text">email</p>
                <p class="card-text cap">city, state</p>
            </div>
        </div>
        `;

        gallery.innerHTML = htmlMarkup;
}
//Calls the function-RELOCATION UPON REFACTORING
galleryMode();


//Fetch Function: Retrieves Info from Requested url:
function fetchData(url){
    return fetch(url)
      .then(checkStatus)
      .then(res => res.json() )
      .catch(error => console.log(`Looks like ${error} is causing a problem fetching the requested information from ${url} at this time. ${response.statusText}`) )
  
  }
//Calls the function-RELOCATION UPON REFACTORING?
fetchData("https://randomuser.me/api/");

//Sidekick Function(s):
function checkStatus(response){
    if(response.ok){
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText));
    }
  
  }