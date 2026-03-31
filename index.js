const form = document.getElementById("contact__form");
const loadingOverlay = document.querySelector(".modal__overlay--loading");
const successOverlay = document.querySelector(".modal__overlay--success");
const closeButtons = document.querySelectorAll(".modal__overlay .modal__exit");

function hideOverlays() {
	loadingOverlay?.classList.remove("modal__overlay--visible");
	successOverlay?.classList.remove("modal__overlay--visible");
}

if (form && loadingOverlay && successOverlay) {
	form.addEventListener("submit", (event) => {
		event.preventDefault();

		hideOverlays();
		loadingOverlay.classList.add("modal__overlay--visible");

		// Simulate async submit then show success state.
		window.setTimeout(() => {
			loadingOverlay.classList.remove("modal__overlay--visible");
			successOverlay.classList.add("modal__overlay--visible");
			form.reset();
		}, 900);
	});
}

closeButtons.forEach((button) => {
	button.addEventListener("click", hideOverlays);
});
