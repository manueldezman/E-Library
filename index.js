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

const Book1 = new Book("give and take", "Hill", "250", "not read");
myLibrary.push(Book1);

console.log(myLibrary);

function addBookToLibrary() {
    const Book2 = new Book(title.value, author.value, pages.value, "not read");
    myLibrary.push(Book2);
    console.log(myLibrary);
}

AddBookBtn.addEventListener("click", addBookToLibrary);