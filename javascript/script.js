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
	addBookForm.classList.replace("show", "hidden");
	form.classList.replace("form-active", "form-inactive");
}

// ARRAY HANDLING

const myLibrary = [];

function Book(title, author, page, status) {
	this.title = title;
	this.author = author;
	this.page = page;
	this.status = status;
}

function addBookToLibrary() {
	myLibrary.push();
}

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
	return pageText.value.trim();
}
function getStatus() {
	return statusText.checked ? true : false;
}
