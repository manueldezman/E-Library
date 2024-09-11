const myLibrary = [];

function Book(title, author, pages, read) {
  
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        return `${this.title} by ${this.author}, has ${this.pages} pages.`
    }
}

function showModal() {
    modal.classList.toggle("active");
}

function addBookToLibrary() {
    if (title.value != "" && author.value != "" && pages.value != "") {
        let ReadData;
    
        if (checkBox.checked) {
            ReadData = "Yes";
        }
        else {
            ReadData = "No";
        }
        const bookName = new Book(title.value, author.value, pages.value, ReadData);
        myLibrary.push(bookName);
        console.log(myLibrary);
        displayBook();
        title.value = "";
        author.value = "";
        pages.value = "";
        checkBox.checked = false;
    
        modal.classList.remove("active");
    }
    }
function displayBook() {
    table.textContent = "";

    for (book of myLibrary) {
        const row = document.createElement("tr");
        row.setAttribute("id", book.title);
        const titleData = document.createElement("td");
        titleData.textContent = book.title;
        row.appendChild(titleData);
        
        const authorData = document.createElement("td");
        authorData.textContent = book.author;
        row.appendChild(authorData);

        const pagesData = document.createElement("td");
        pagesData.textContent = book.pages;
        pagesData.classList.add("pages");
        row.appendChild(pagesData);

        
        const ReadBtn = document.createElement("td");
        let index = myLibrary.indexOf(book);

        ReadBtn.innerHTML = `<button id="${index}" onclick="toggleRead(${index})" class="ReadBtn"> ${book.read}</button>`;
        row.appendChild(ReadBtn);


        const ActionsData = document.createElement("td");
        const DeleteBtn = document.createElement("button");
        DeleteBtn.textContent = "Delete";
        DeleteBtn.setAttribute("id", book.title);
        ActionsData.appendChild(DeleteBtn);
        
        row.appendChild(ActionsData);

        table.appendChild(row);

    }
}   

function toggleRead(id) {
    if (myLibrary[id].read === "Yes") {
        myLibrary[id].read = "No";
    } 
    else if (myLibrary[id].read === "No") {
        myLibrary[id].read = "Yes";
    }

    displayBook();
}

const AddNewBookBtn = document.querySelector(".addNewBook");
const AddBookBtn = document.querySelector(".addBook");
const modal = document.querySelector(".modal");
const cancelBtn = document.querySelector(".cancel");

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const table = document.querySelector(".tbody");
const checkBox = document.querySelector("#read");


const Book1 = new Book("Think and grow Rich", "Napoleon Hill", "250", "Yes");
const Book2 = new Book("Atomic Habits", "James Clear", "260", "Yes");
const Book3 = new Book("Richest Man in Babylon", "George Carson", "144", "Yes");
const Book4 = new Book("Permission Marketing", "Seth Godin", "224", "Yes");

myLibrary.push(Book1);
myLibrary.push(Book2);
myLibrary.push(Book3);
myLibrary.push(Book4);

modal.classList.remove("active");
displayBook();



AddBookBtn.addEventListener("click", addBookToLibrary);

cancelBtn.addEventListener("click", showModal);

AddNewBookBtn.addEventListener("click", showModal);

table.addEventListener("click", function(event) {
    
    for (book of myLibrary) {
        if (event.target.id === book.title) {
            let index = myLibrary.indexOf(book);

            myLibrary.splice(index, 1);

            displayBook();
        }
    }
});