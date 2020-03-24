const DOG_URL = "https://dog.ceo/api/breeds/image/random";

// returns a Promise that won't reject on HTTP error status even if 404 or 500; won't receive cross-site cookies and won't send cookies
// const promise = fetch(DOG_URL); //fetch() method provides an easy, logical way to fetch ressources asynchronously across the network
const doggos = document.querySelector(".doggos");
const spinner = document.querySelector("#spinner");


function addNewDoggo(){
    const promise = fetch(DOG_URL);
    showSpinner();
    promise
    .then(function(response){
        const processingPromise = response.json();
        return processingPromise;
    })
    .then(function(processedResponse){
        console.log(processedResponse.status);
        const img = document.createElement("img");
        img.src = processedResponse.message;
        img.alt = "Cute doggo";
        doggos.appendChild(img);
        hideSpinner();
    });

    console.log("this will log first");
};
// fetching a JSON file across the network and printing it to the console

function showSpinner() {
    spinner.classList.add("show");
}

function hideSpinner() {
    spinner.classList.remove('show');
}

document.querySelector(".add-doggo").addEventListener("click", addNewDoggo);