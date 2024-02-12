async function floatingRepeat() {
	setInterval(function () {
		const show = document.querySelector(
			".floating-subtitle[floating-show]"
		);
		const next =
			show.nextElementSibling ||
			document.querySelector(".floating-subtitle:first-child");
		const up = document.querySelector(".floating-subtitle[floating-up]");

		if (up) {
			up.removeAttribute("floating-up");
		}

		show.removeAttribute("floating-show");
		show.setAttribute("floating-up", "");

		next.setAttribute("floating-show", "");
	}, 2000);
}
if (ntui_enableFloating == true) {
	floatingRepeat();
}
console.log("n");
