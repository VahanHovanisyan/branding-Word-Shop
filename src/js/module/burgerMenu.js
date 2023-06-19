const burger = document.querySelectorAll(".burger");

burger.forEach(burgerElement => {
	burgerElement.addEventListener("click", (event) => {
		burgerElement.classList.toggle("burger_open");
		if (!burgerElement.classList.contains("burger_open")) {
			burgerElement.classList.remove("burger_open");
		}
	});
});