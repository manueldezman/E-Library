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

console.log(myLibrary);

function addBookToLibrary() {
    const Book2 = new Book(title.value, author.value, pages.value, "not read");
    myLibrary.push(Book2);
    console.log(myLibrary);
    displayBook();
}


AddBookBtn.addEventListener("click", addBookToLibrary);

function displayBook() {

    for (book of myLibrary) {
        const row = document.createElement("tr");
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
        ReadBtn.classList.add("Readbtn")
        ActionsData.appendChild(ReadBtn);

        const DeleteBtn = document.createElement("button");
        DeleteBtn.textContent = "Delete";
        DeleteBtn.classList.add("Deletebtn")
        ActionsData.appendChild(DeleteBtn);
        
        row.appendChild(ActionsData);

        table.appendChild(row);


    }
}

function deleteBook() {
    
}