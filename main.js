const myLibrary = [
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        pages: 366,
        read: true,
    },

    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        pages: 180,
        read: false,
    },

    {
        title: "The Picture of Dorian Gray",
        author: "Oscar Wilde",
        pages: 253,
        read: true,
    },
];

// containers
const libraryContainer = document.querySelector(".library-display");

// Buttons
const addBookButton = document.querySelector(".add-button");
const removeBookButton = document.querySelector(".remove-button");

// Event listenters
// addBookButton.addEventListener("click", addBook);
// removeBookButton.addEventListener("click", removeBook)


// ID number generator
idNumber = crypto.randomUUID();

// book constructor
function Book(title, author, pages, read, id) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
    this.info = function() {
        console.log(this.title + this.author + this.pages + this.read + this.id);
    };
};

function addBook() {

}

function displayBook() {

}

function removeBook() {

}

function displayLibrary() {
    libraryContainer.innerHTML = ""
    myLibrary.forEach(item => {
        const bookCard = document.createElement("div");
        bookCard.className = "book-card";
        bookCard.innerHTML =
                            `
                            <div class='title'>${item.title}</div >
                            <div class='author'>${item.author}</div>
                            <div class='pages'>${item.pages}</div>
                            <button class='remove-button'>Remove Book</button>
                            <button class='read-button'>
                                ${item.read ? "Read" : "Not read yet"}
                            </button>
                            `;
        libraryContainer.appendChild(bookCard);
    });
};

displayLibrary();