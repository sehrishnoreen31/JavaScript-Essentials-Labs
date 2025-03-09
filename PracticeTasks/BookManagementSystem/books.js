                                /* variables*/
// empty array to store books data
let books = [];

                                /*functions*/

// add books
function addBooks(){
    // get input values
    const bookName = document.getElementById('book-name').value;
    const authorName = document.getElementById('author-name').value;
    const bookDescription = document.getElementById('book-description').value;
    const numberOfPages = parseFloat(document.getElementById('pages-number').value);

    // validation
    if(bookName && authorName && bookDescription && !isNaN(numberOfPages)){
        // store book data in an object
        const book = {
            name: bookName,
            author: authorName,
            description: bookDescription,
            pages: numberOfPages
        }
        // push new book to array: books
        books.push(book);
        // display
        showBooks();
        // clear all inputs
        clearInputs();
    } else {
        alert('Please Fill all Book Information!')
    }
}

// show books
function showBooks(){
    const booksData = books.map((book, index) => `<b>${index+1}. ${book.name}</b><br> ${book.author}<br>${book.description}<br>${book.pages}<br><br>`);

    document.getElementById('books').innerHTML = booksData.join('');
}

// clear inputs
function clearInputs(){
    document.getElementById('book-name').value ='';
    document.getElementById('author-name').value ='';
    document.getElementById('book-description').value ='';
    document.getElementById('pages-number').value ='';
}
