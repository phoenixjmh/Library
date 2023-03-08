/* eslint-disable func-names */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable linebreak-style */
const container = document.querySelector(".container");
let library = [];
let bookIndex = 0;

function Book(title, author, bookID) {
  this.author = author;
  this.title = title;
  this.bookID = bookID;
}

Book.prototype.get = function () {
  const tmp = [];
  tmp.push(this.title);
  tmp.push(this.author);
};
function deleteBook(buttonList) {
  buttonList.forEach( i=> {
    i.addEventListener("click", () => {
      library = library.filter(
        (item) =>
          item.bookID != i.parentElement.id.slice(i.parentElement.id.length - 1)
      );
      i.parentElement.remove();
    });
  });
}
function drawBook(book) {
  const cover = document.createElement("div");
  const bookTitle = document.createElement("h4");
  const bookAuthor = document.createElement("h4");
  const deleteButton = document.createElement("button");
  const readButtonLabel = document.createElement("label");
  readButtonLabel.textContent = "Read?";
  readButtonLabel.setAttribute("for", "read-button");
  const readButton = document.createElement("input");

  readButton.setAttribute("type", "checkbox");
  readButton.id = "read-button";
  readButton.textContent = "Read?";
  deleteButton.textContent = "Remove";
  deleteButton.id = "delete-button";
  bookTitle.className = "book-title";
  bookAuthor.className = "book-title";
  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;

  cover.className = "card";
  cover.id = "book" + book.bookID;
  cover.appendChild(bookTitle);
  cover.appendChild(bookAuthor);
  cover.appendChild(deleteButton);
  cover.appendChild(readButtonLabel);
  cover.appendChild(readButton);
  container.appendChild(cover);

  console.log(book.bookID);

  const allDeleteButtons = document.querySelectorAll("#delete-button");
  deleteBook(allDeleteButtons);
}
function addBookToLibrary(title, author, bookID) {
  const temp = new Book(title, author, bookID);
  library.push(temp);
  drawBook(temp);
}
function createNewBookForm() {
  const formContainer = document.createElement("div");
  formContainer.className = "form-container";

  const formElement = document.createElement("form");
  formElement.setAttribute("action", "post");

  const formList = document.createElement("ul");

  const listItem1 = document.createElement("li");

  const authorLabel = document.createElement("label");
  authorLabel.setAttribute("for", "author-field");
  authorLabel.textContent = "Author";

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

  const addButton = document.createElement("button");
  addButton.id = "add";
  addButton.textContent = "Add Book To Library";

  document.body.insertBefore(formContainer, container);
  formContainer.appendChild(formElement);
  formElement.appendChild(formList);
  formList.appendChild(listItem1);
  formList.appendChild(listItem2);
  listItem1.appendChild(authorLabel);
  listItem1.appendChild(authorInput);
  listItem2.appendChild(titleLabel);
  listItem2.appendChild(titleInput);

  formContainer.appendChild(addButton);

  addButton.onclick = (event) => {
    const newAuthor = authorInput.value;
    const newName = titleInput.value;
    event.preventDefault();

    addBookToLibrary(newName, newAuthor, (bookIndex += 1));
    authorInput.value = "";
    titleInput.value = "";
  };
}



createNewBookForm();




