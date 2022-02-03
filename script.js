
let myLibrary = [];


function Book(title, author, pagesRead, isRead){

    this.title = title;
    this.author = author;
    this.pagesRead = pagesRead;
    this.isRead = isRead;


   


}
   // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
    Book.prototype.info = function(){
    let returnInfo = `${this.title} by ${this.author}, ${this.pagesRead} pages`;
    if(this.isRead == true){
        returnInfo+= ", read";
    }else{
        returnInfo+= ", not read yet.";
    }
    return returnInfo;
    }


function addBookContent(book){
    const bookContent = document.createElement("div");
    const title = document.createElement("h3");
    title.innerText = book.title;
    bookContent.appendChild(title);

    const author = document.createElement("h3");
    author.innerText = book.author;
    bookContent.appendChild(author);

    const pagesRead = document.createElement("h3");
    pagesRead.innerText = book.pagesRead;
    bookContent.appendChild(pagesRead);

    const isRead = document.createElement("h3");
    isRead.innerText = book.isRead ? "Read":"Not Read";
    bookContent.appendChild(isRead);


    return bookContent;
}

const addBookButton = document.querySelector(".add-book-button");
addBookButton.addEventListener("click", () => {
    const modal = document.querySelector("#modal");
    modal.classList= "open"

});


const getBookFromInput = () => {
    const title = document.getElementById('title').value
    document.getElementById('title').value = "";
    const author = document.getElementById('author').value
    document.getElementById('author').value = "";
    const pages = document.getElementById('pages').value
    document.getElementById('pages').value = "";
    const isRead = document.getElementById('isRead').checked
    document.getElementById('isRead').checked = false;
    return new Book(title, author, pages, isRead)
}


const addBookForm = document.getElementById("addBookForm");
addBookForm.onsubmit = addBookToLibrary;


function addBookToLibrary(e) {
    e.preventDefault();
    const modal = document.querySelector("#modal");
    modal.classList = "close"

    const newBook = getBookFromInput();
    myLibrary.push(newBook);
    displayBooks();
}



function displayBooks(){
    const library = document.querySelector(".library")

    while (library.firstChild) {
        library.removeChild(library.firstChild);
    }
    myLibrary.forEach((book) => {
    const bookDisplay = addBookContent(book);
    bookDisplay.classList.add("book");
    library.appendChild(bookDisplay);

    });
}





// TODO
// Add button for adding books
// Add popup for entering book info
// Add button for toggling is read

// Tweak book display
// Add button for removing