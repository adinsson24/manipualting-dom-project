let pButton = document.getElementById("p-button");
let imgButton = document.getElementById("img-button");
let imgDiv = document.getElementById("img-div");
let pDiv = document.getElementById("p-div");

imgDiv.style.display = "none"; // Start as hidden

function addParagraph() {
    // Clear imgDiv content and show pDiv
    imgDiv.style.display = "none";
    pDiv.style.display = "block";
 

    let newParagraph = document.createElement("p");
    newParagraph.innerText = "Hot chocolate is bad today";
    newParagraph.style.backgroundColor = "black";
    newParagraph.style.color = "white";
    pDiv.appendChild(newParagraph);
}

pButton.addEventListener("click", addParagraph);

function addImg() {
    // Clear pDiv content and show imgDiv
    pDiv.style.display = "none";
    imgDiv.style.display = "flex";
    imgDiv.style.flexWrap = "wrap";
    

    let newImg = document.createElement("img");
    newImg.src = "pikachu.png";
    newImg.style.width = "150px";
    newImg.style.height = "100px";
    newImg.style.objectFit = "contain";
   
    imgDiv.appendChild(newImg);
}

imgButton.addEventListener("click", addImg);
