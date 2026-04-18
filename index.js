
const myLibrary = [];


class Book {
    constructor (title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.id = crypto.randomUUID();
    }    

    info() {
        return `${this.title} by ${this.author}, has ${this.pages} pages.`
    }
}


const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const checkBox = document.querySelector("#read");
const table = document.querySelector(".tbody");
const tableRow = document.querySelector("tbody");
const form = document.querySelector(".modal-container");
const AddBookBtn = document.querySelector(".addBook");

const errorMessages = {
    titleErrorMsg: document.querySelector(".name"),
    authorErrorMsg: document.querySelector(".author"),
    pagesErrorMsg: document.querySelector(".pages"),
}





function handleValidation(event) {

    const errorName = event.target.id;
    const inputVar = event.target;
    const key = `${errorName}ErrorMsg`;

    const targetDiv = errorMessages[key];

    if (inputVar.validity.valid) {
        targetDiv.textContent = "";
        targetDiv.classList.remove("error");
    }
    else {
         targetDiv.classList.add("error");
        showError(errorName, inputVar);
    }
}



function showError(errorName, inputVar) {

    const key = `${errorName}ErrorMsg`;
    const targetDiv = errorMessages[key];
    if (inputVar.validity.valueMissing) {

        targetDiv.textContent = `The ${errorName} field is required and cannot be left blank.`;
        targetDiv.classList.remove("hidden");
    }
     else if (inputVar.validity.rangeOverflow) {
        targetDiv.textContent = `The value must be below 1000 pages`;
        targetDiv.classList.remove("hidden");
    }
    else if (inputVar.validity.rangeUnderflow) {
        targetDiv.textContent = "The value must be above 20 pages";
        targetDiv.classList.remove("hidden");
    }
    else if (inputVar.validity.patternMismatch) {
        targetDiv.textContent = `The format entered is invalid, this field only accept text.`;
        targetDiv.classList.remove("hidden");
    }
    else if (inputVar.validity.tooShort) {
        targetDiv.textContent = "This input is too short, it must be at least 5 characters.";
        targetDiv.classList.remove("hidden");
    }
   
}


function createBook(event) {

 if (title.value != "" && author.value != "" && pages.value != "") {
    let name = title.value;
    let authorVal = author.value;
    let pagesVal = pages.value;
    let readStatus = (checkBox.checked) ? "Yes" : "No";

    let book = new Book(name, authorVal, pagesVal, readStatus);

    storeBook(book);

    displayBooks();

    title.value = "";
    author.value = "";
    pages.value = "";
    checkBox.checked = false;
 }
  
    
}

function storeBook(book) {
    myLibrary.push(book);
}

function deleteBooks(event) {

    let toBeRemoved = event.target;

    for (let item of myLibrary) {
        if (toBeRemoved.dataset.id === item.id) {

            let index = myLibrary.indexOf(item);
            myLibrary.splice(index, 1);

            displayBooks();
        }
    }
}

function displayBooks() {

    tableRow.textContent = "";

    for (let item of myLibrary) {

        let bookRow = document.createElement("tr");
        let bookName = document.createElement("td");
        let bookAuthor = document.createElement("td");
        let pagesNumber = document.createElement("td");
        let readStatusCell = document.createElement("td");
        let action = document.createElement("td");
        let deleteBtn = document.createElement("button");
        let readBtn = document.createElement("button");

        bookRow.dataset.id = item.id;
        deleteBtn.dataset.id = item.id;
        readBtn.dataset.id = item.id;

        bookName.textContent = item.title;
        bookAuthor.textContent = item.author;
        pagesNumber.textContent = item.pages;
        readBtn.textContent = item.read;
        deleteBtn.textContent = "Delete";

        readStatusCell.appendChild(readBtn);
        action.appendChild(deleteBtn);
        bookRow.appendChild(bookName);
        bookRow.appendChild(bookAuthor);
        bookRow.appendChild(pagesNumber);
        bookRow.appendChild(readStatusCell);
        bookRow.appendChild(action);

        tableRow.appendChild(bookRow);

        deleteBtn.addEventListener("click", deleteBooks);
        readBtn.addEventListener("click", changeReadStatusOnCLick);
    }
}

function changeReadStatusOnCLick(event) {

    for (let item of myLibrary) {
        if (event.target.dataset.id === item.id) {
            item.toggleReadStatus();
            displayBooks();
        }
    }
}



Book.prototype.toggleReadStatus = function() {
   this.read = (this.read === "Yes") ? "No" : "Yes";
}



const Book1 = new Book("Think and grow Rich", "Napoleon Hill", "250", "Yes");
const Book2 = new Book("Atomic Habits", "James Clear", "260", "Yes");
const Book3 = new Book("Richest Man in Babylon", "George Carson", "144", "Yes");
const Book4 = new Book("Permission Marketing", "Seth Godin", "224", "Yes");

myLibrary.push(Book1, Book2, Book3, Book4);

form.addEventListener("submit", () => {

    if (!title.validity.valid || !author.validity.valid || !pages.validity.valid) {

        event.preventDefault();

        return;
    }
    else {
        createBook(event);
    }

});

title.addEventListener("input", handleValidation)
author.addEventListener("input", handleValidation)
pages.addEventListener("input", handleValidation);

displayBooks();



