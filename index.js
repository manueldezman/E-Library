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

const AddNewBookBtn = document.querySelector(".addNewBook");
const AddBookBtn = document.querySelector(".addBook");

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const table = document.querySelector(".tbody");


const Book1 = new Book("give and take", "Hill", "250", "not read");
myLibrary.push(Book1);
displayBook();

console.log(myLibrary);

function addBookToLibrary() {
    const bookName = new Book(title.value, author.value, pages.value, "not read");
    myLibrary.push(bookName);
    console.log(myLibrary);
    displayBook();
}


AddBookBtn.addEventListener("click", addBookToLibrary);

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
        row.appendChild(pagesData);

        const ReadData = document.createElement("td");
        ReadData.textContent = "No";
        row.appendChild(ReadData);

        const ActionsData = document.createElement("td");
        
        const ReadBtn = document.createElement("button");
        ReadBtn.textContent = "Not Read";
        ReadBtn.setAttribute("id", "Readbtn")
        ActionsData.appendChild(ReadBtn);

        const DeleteBtn = document.createElement("button");
        DeleteBtn.textContent = "Delete";
        DeleteBtn.setAttribute("id", book.title);
        ActionsData.appendChild(DeleteBtn);
        
        row.appendChild(ActionsData);

        table.appendChild(row);

    }
}


table.addEventListener("click", function(event) {

    if (event.target.id === "Readbtn") {
        console.log(event.target.textContent);
        if (event.target.textContent === "Not Read") {
            event.target.textContent = "Read";
        }
        else {
            event.target.textContent = "Not Read";
        }
    }

    console.log(event.target.id);

    for (book of myLibrary) {
        if (event.target.id === book.title) {
            let index = myLibrary.indexOf(book);

            myLibrary.splice(index, 1);

            displayBook();
        }
    }
});