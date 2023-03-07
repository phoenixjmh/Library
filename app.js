/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable linebreak-style */
const container = document.querySelector(".container");
const library = [];
function Book(title, author) {
  this.author = author;
  this.title = title;
}

Book.prototype.get = function () {
  const tmp = [];
  tmp.push(this.title);
  tmp.push(this.author);
};
function createNewBookForm() {
  const formContainer = document.createElement("div");
  formContainer.className = "form-container";

  const formElement = document.createElement('form')
  formElement.setAttribute('action','post');
  
  const formList = document.createElement("ul");
 
  const listItem1 = document.createElement("li");
  
  const authorLabel = document.createElement("label");
  authorLabel.setAttribute("for", "author-field");
  authorLabel.textContent="Author";
  
  const authorInput = document.createElement("input");
  authorInput.setAttribute("type", "text");
  authorInput.id = "author-field";
 
  const listItem2 = document.createElement("li");
 
  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "title-label");
  titleLabel.textContent = "Title";

 
  const titleInput = document.createElement("input");
  titleInput.setAttribute("type", "text");
  titleInput.id = "title-field";
 
  const button = document.createElement("button");
  button.id = "add";

  
  
  document.body.insertBefore(formContainer,container);
  formContainer.appendChild(formElement);
  formElement.appendChild(formList);
  formList.appendChild(listItem1);
  formList.appendChild(listItem2);
  listItem1.appendChild(authorLabel);
  listItem1.appendChild(authorInput);
  listItem2.appendChild(titleLabel);
  listItem2.appendChild(titleInput);

}
function addBookToLibrary(title, author) {
  const temp = new Book(title, author);
  library.push(temp);
  drawBooks();
}
function drawBooks() {
  for (const b in library) {
    const cover = document.createElement("div");
    const bookTitle = document.createElement("h4");
    const bookAuthor = document.createElement("h4");
    bookTitle.className = "book-title";
    bookAuthor.className = "book-title";
    bookTitle.textContent = library[b].title;
    bookAuthor.textContent = library[b].author;

    cover.className = "card";
    cover.appendChild(bookTitle);
    cover.appendChild(bookAuthor);
    container.appendChild(cover);
  }
}

const addBookButton = document.querySelector("#add");
const titleField = document.querySelector("#title-field");
const authorField = document.querySelector("#author-field");

addBookButton.onclick = (event) => {
  const newName = titleField.value;
  const newAuthor = authorField.value;
  event.preventDefault();

  addBookToLibrary(newName, newAuthor);
  titleField.value = "";
  authorField.value = "";
};
