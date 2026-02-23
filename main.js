const myLibrary = [
    {
        title = "The Hobbit",
        author = "J.R.R. Tolkien",
        pages = 366,
        read = true
    },

    {
        title = "The Great Gatsby",
        author = "F. Scott Fitzgerald",
        pages = 180,
        read = false
    },

    {
        title = "The Picture of Dorian Gray",
        author = "Oscar Wilde",
        pages = 253,
        read = true
    },
];

// book constructor
function Book (title, author, pages, read) {
      if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = fuction() {
    console.log(this.title + this.author + this.pages + this.read);
  };
};

function addBook() {

}

function displayBook() {

}