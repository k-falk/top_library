
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


function addBookToLibrary(title, author, pagesRead, isRead) {

    const newBook = new Book(title, author, pagesRead, isRead);
    myLibrary.push(newBook);
}

function displayBooks(){
    const library = document.querySelector(".library")

    myLibrary.forEach((book) => {
        const bookDisplay = addBookContent(book);
        bookDisplay.classList.add("book");
        library.appendChild(bookDisplay);
    });
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


    return bookContent;
}



addBookToLibrary("The Hobbit", "J.R.R. Tolkien",295, false);
addBookToLibrary("Cool Beans", "J.R.R. Tolkien",295, false);
addBookToLibrary("Cool Runnings", "J.R.R. Tolkien",295, false);

displayBooks();
