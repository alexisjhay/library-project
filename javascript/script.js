const openFormBtn = document.querySelector(".add-user");
const closeFormBtn = document.querySelector(".close-form");

openFormBtn.addEventListener("click", openForm);
closeFormBtn.addEventListener("click", closeForm);

function openForm() {
	const userForm = document.querySelector(".user-form");
	userForm.style.transform = "translate(-50%, -50%) scale(1)";
}

function closeForm() {
	const userForm = document.querySelector(".user-form");
	userForm.style.transform = "translate(-50%, -50%) scale(0)";
}
