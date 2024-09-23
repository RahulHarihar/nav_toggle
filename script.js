const w = document.querySelector(".line").clientWidth;
const h = document.querySelector(".line").clientHeight;
gsap.registerPlugin(gsap);
const tl = gsap.timeline();

let count = 1; //Initially set to 1
const nav = document.getElementById("nav"); //reference to nav

nav.onclick = () => {
	if (count) {
		tl.to(".line", {
			width: 0,
			duration: 0.3,
		})
			.set(".line", { rotate: 45, top: 0 })
			.set(".line:nth-child(2)", { rotate: -45, top: 0, bottom: "auto" })
			.to(".line", {
				width: "100%",
				y: "-50%",
				top: "50%",
				duration: 0.3,
				stagger: 0.3,
			})
			.to(".line:nth-child(2)", {
				y: "-50%",
				bottom: "50%",
				duration: 0.3,
			});
		count = 0; //Sets count to 0 for the cross state
	} else {
		tl.to(".line", {
			rotate: 0,
			duration: 0.3,
		})
			.to(".line", {
				y: 0,
				top: "32%",
				duration: 0.3,
			})
			.to(".line:nth-child(2)", {
				rotate: 0,
				top: "68%",
				y: 0, //Resets the y position
				duration: 0.3,
			});
		count = 1; //Resets count to 1 i.e initial state
	}
};
