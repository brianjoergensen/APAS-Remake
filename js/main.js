	// Page loader
	// Display .apas-page-load on load, hide when all is loaded, then remove it with display none
	window.onload = function() {
		setTimeout(function () {
			document.querySelector(".apas-page-load").setAttribute(
				"style", "opacity: 0;"
			);
			document.querySelector(".apas-page-load > svg").setAttribute(
				"style", "display: none;"
			);

			setTimeout(function () {
				document.querySelector(".apas-page-load").setAttribute(
				"style", "display: none;"
			);
			}, 500);
		}, 2000);
	}