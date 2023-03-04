/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable linebreak-style */
const library =[];
function Book(title,author) {
  this.author = author;
  this.title = title;
}

Book.prototype.get = function () {
  const tmp =[];
  tmp.push(this.title);
  tmp.push(this.author);
};
function addBookToLibrary(title, author) {
  const temp = new Book(title,author);
  library.push(temp);
}
function drawBooks()
{
  for(const b in library)
  {
    const container = document.querySelector('.container');
    const cover = document.createElement('div');
    const bookTitle = document.createElement('h4');
    const bookAuthor = document.createElement("h4");
    bookTitle.className='book-title';
    bookAuthor.className = "book-title";
    bookTitle.textContent=library[b].title;
    bookAuthor.textContent = library[b].author;

    cover.className='card';
    cover.appendChild(bookTitle);
    cover.appendChild(bookAuthor);
    container.appendChild(cover);
  }
}
const tempBook = new Book('1' ,'1');
const tempBook2 = new Book("2", "2");
library.push(tempBook);
library.push(tempBook2);
