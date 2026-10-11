// ADD BOOK FORM

const openFormBtn = document.querySelector(".add-user");
const closeFormBtn = document.querySelector(".close-form");
const form = document.querySelector(".book-form");
const addBookForm = document.querySelector(".add-book-form");

openFormBtn.addEventListener("click", openForm);

closeFormBtn.addEventListener("click", (e) => {
	e.preventDefault();
	closeForm();
});

addBookForm.addEventListener("click", closeForm);

function openForm() {
	addBookForm.classList.replace("hidden", "show");
	form.classList.replace("form-inactive", "form-active");
}

function closeForm() {
	resetInputs();
	addBookForm.classList.replace("show", "hidden");
	form.classList.replace("form-active", "form-inactive");
}

// ADD BOOK EVENT HANDLING

form.addEventListener("click", (e) => {
	e.stopPropagation();
});

form.addEventListener("submit", (e) => {
	e.preventDefault();

	addBookToLibrary();
	closeForm();

	reset();
});

// OBJECT CONSTRUCTOR

const myLibrary = [
	new Book("The Hobbit", "J.R.R. Tolkien", 310, true),
	new Book("1984", "George Orwell", 328, false),
	new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, true),
	new Book("To Kill a Mockingbird", "Harper Lee", 281, true),
];

function Book(title, author, page, status) {
	this.title = title;
	this.author = author;
	this.page = page;
	this.status = status;
}

Book.prototype.changeStatus = function () {
	this.status = !this.status;
};

// RETRIEVING INPUT

const titleText = document.querySelector("#title");
const authorText = document.querySelector("#author");
const pageText = document.querySelector("#page");
const statusText = document.querySelector("#read-status");

function getTitle() {
	return titleText.value.trim();
}
function getAuthor() {
	return authorText.value.trim();
}
function getPage() {
	return Number(pageText.value.trim());
}
function getStatus() {
	return statusText.checked ? true : false;
}

// PUSH BOOK TO ARRAY

function addBookToLibrary() {
	myLibrary.push(new Book(getTitle(), getAuthor(), getPage(), getStatus()));
}

// RENDER LIBRARY LOGS

function totalBooksCount() {
	const totalBooks = document.querySelector(".total-books");
	const total = myLibrary.length;

	totalBooks.textContent = `Total Books: ${total}`;
}

function totalReadCount() {
	const readBooks = document.querySelector(".read-total");
	const readTotal = myLibrary.filter((book) => book.status).length;
	readBooks.textContent = `Read: ${readTotal}`;
}

function totalUnreadCount() {
	const unreadBooks = document.querySelector(".unread-total");
	const unreadTotal = myLibrary.filter((book) => !book.status).length;
	unreadBooks.textContent = `Unread: ${unreadTotal}`;
}

// RENDER CARDS

function renderCard() {
	for (let [index, books] of myLibrary.entries()) {
		createCard(index, books.title, books.author, books.page, books.status);
	}
}

// CREATE CARD

const result = document.querySelector(".result");

function createCard(index, title, author, page, status) {
	const card = document.createElement("div");
	card.classList.add("card");

	createCardTitle(title, card);
	createCardAuthor(author, card);
	createCardPage(page, card);
	createCardStatus(status, card);
	createButton(index, card);

	result.appendChild(card);
}

function createCardTitle(title, card) {
	const cardTitle = document.createElement("h2");
	cardTitle.textContent = title;

	card.appendChild(cardTitle);
}

function createCardAuthor(author, card) {
	const cardAuthor = document.createElement("h4");
	cardAuthor.textContent = `by: ${author}`;

	card.appendChild(cardAuthor);
}

function createCardPage(page, card) {
	const cardPage = document.createElement("p");
	cardPage.classList.add("pages");
	cardPage.textContent = `${page} pages`;

	card.appendChild(cardPage);
}

function createCardStatus(status, card) {
	const statusContainer = document.createElement("status-container");
	const statusTitle = document.createElement("span");

	const cardStatus = document.createElement("span");
	cardStatus.classList.add("status-span");

	statusTitle.textContent = "Status: ";

	if (status) {
		cardStatus.textContent = "Read";
		cardStatus.classList.add("read");
	} else {
		cardStatus.textContent = "Unread";
		cardStatus.classList.add("unread");
	}

	statusContainer.appendChild(statusTitle);
	statusContainer.appendChild(cardStatus);
	card.appendChild(statusContainer);
}

function createButton(index, card) {
	const btnContainer = document.createElement("div");
	btnContainer.classList.add("button-container");

	const deleteButton = document.createElement("button");
	deleteButton.classList.add("delete-btn");

	const changeStatusButton = document.createElement("button");
	changeStatusButton.classList.add("update-btn");

	deleteButton.textContent = "Delete";
	changeStatusButton.textContent = "Change Status";

	doChangeStatus(index, changeStatusButton);
	deleteBook(index, deleteButton);

	btnContainer.appendChild(changeStatusButton);
	btnContainer.appendChild(deleteButton);
	card.appendChild(btnContainer);
}

// CARD BUTTONS EVENT HANDLING

function doChangeStatus(index, btn) {
	btn.addEventListener("click", () => {
		myLibrary[index].changeStatus();
		reset();
	});
}

function deleteBook(index, btn) {
	btn.addEventListener("click", () => {
		myLibrary.splice(index, 1);
		reset();
	});
}

//RESETS

function resetResult() {
	result.textContent = "";
}

function resetInputs() {
	titleText.value = "";
	authorText.value = "";
	pageText.value = "";
	statusText.checked = false;
}

function reset() {
	totalUnreadCount();
	totalReadCount();
	totalBooksCount();

	resetResult();
	renderCard();
}

// PAGE LOADS

reset();
