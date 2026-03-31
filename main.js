let myLibrary = [
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        pages: 366,
        read: true,
        id: crypto.randomUUID(),
    },

    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        pages: 180,
        read: false,
        id: crypto.randomUUID(),
    },

    {
        title: "The Picture of Dorian Gray",
        author: "Oscar Wilde",
        pages: 253,
        read: true,
        id: crypto.randomUUID(),
    },
];

const dialog = document.querySelector(".add-book");
const form = dialog.querySelector("form");

const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pageInput = document.querySelector("#page-number");
const checkBox = document.querySelector("#check-box");

// containers
const libraryContainer = document.querySelector(".library-display");

// Buttons
const addBookButton = document.querySelector(".add-button");
const submitBookButton = document.querySelector(".submit-button")

// Event listenters
addBookButton.addEventListener("click", addBook);

// book constructor
function Book(title, author, pages, read, id) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    id = crypto.randomUUID();
    this.info = function () {
        console.log(this.title + this.author + this.pages + this.read + this.id);
    };
};

function addBook() {
    form.reset;
    dialog.showModal();
}

function removeBookById(id) {
    myLibrary = myLibrary.filter(book => book.id !== id);
    
    displayLibrary();
}

form.addEventListener("click", (e) => {
    e.preventDefault();

    title = titleInput.value;
    author = authorInput.value;
    pages = pageInput.value;
    read = checkBox.checked;

    let newBook = new Book(title, author, pages, read, crypto.randomUUID);

    myLibrary.push(newBook);

    displayLibrary();
})


function displayLibrary() {
    libraryContainer.innerHTML = ""
    myLibrary.forEach(item => {
        const bookCard = document.createElement("div");
        bookCard.className = "book-card";
        bookCard.dataset.id = item.id;

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
                            
        const removeBookButton = bookCard.querySelector(".remove-button");
        removeBookButton.addEventListener("click", () => {
            removeBookById(bookCard.dataset.id);
        });
        libraryContainer.appendChild(bookCard);
    });
};

displayLibrary();