let isModalOpen = false;
let contrastToggle = false;

function toggleContrast() {
	contrastToggle = !contrastToggle;
	if (contrastToggle) {
		document.body.classList.add("dark-theme");
	} 
	else {
		document.body.classList.remove("dark-theme");
	}
}

function contact(event) {
	event.preventDefault();
	const loading = document.querySelector(".modal__overlay--loading");
	const success = document.querySelector(".modal__overlay--success");
	loading.classList.add("modal__overlay--visible");

	emailjs
		.sendForm(
			"service_mtod6t3",
			"template_erzfcfb",
			event.target
		).then(() => {
			loading.classList.remove("modal__overlay--visible");
			success.classList.add("modal__overlay--visible");
		}).catch((error) => {
			loading.classList.remove("modal__overlay--visible");
			console.error("EmailJS error:", error);
			alert(
				"The email service is currently unavailable. Please contact me directly at Kim.Jones5939@gmail.com."
			);
		});
}

document.querySelectorAll(".modal__exit").forEach((btn) => {
	btn.addEventListener("click", () => {
		document.querySelector(".modal__overlay--loading").classList.remove("modal__overlay--visible");
		document.querySelector(".modal__overlay--success").classList.remove("modal__overlay--visible");
		isModalOpen = false;
		document.body.classList.remove("modal--open");
	});
});

function toggleModal() {
	if (isModalOpen) {
		isModalOpen = false;
		return document.body.classList.remove("modal--open");
	}
	isModalOpen = true;
	document.body.classList.add("modal--open");

}	




