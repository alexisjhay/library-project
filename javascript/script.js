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

const myLibrary = [];

function Book(title, author, page, status) {
	this.title = title;
	this.author = author;
	this.page = page;
	this.status = status;
}
