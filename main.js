const myLibrary = [
    {
        title = "The Hobbit",
        author = "J.R.R. Tolkien",
        pages = 366,
        read = true,
        id = idNumber
    },

    {
        title = "The Great Gatsby",
        author = "F. Scott Fitzgerald",
        pages = 180,
        read = false,
        id = idNumber
    },

    {
        title = "The Picture of Dorian Gray",
        author = "Oscar Wilde",
        pages = 253,
        read = true,
        id = idNumber
    },
]

// containers
const library = document.getElementsByClassName("library-display");

// Buttons
const addBook = document.getElementsByClassName("add-button");
const removeBook = document.getElementsByClassName("remove-button");

// Event listenters
addBook.addEventListner("click", addBook());
removeBook.addEventListner("click", removeBook())


// ID number generator
idNumber= crypto.randomUUID();

// book constructor
function Book (title, author, pages, read, id) {
      if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = id;
  this.info = fuction() {
    console.log(this.title + this.author + this.pages + this.read + this.id);
  };
};

function addBook() {

}

function displayBook() {

}

function removeBook() {

}

function dislplayLibrary() {

}