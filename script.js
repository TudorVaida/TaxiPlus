"use strict";

const navBar = document.querySelector(".nav--bar");
const btnInfoJob = document.querySelector(".section2--btn1");
const btnWorker2 = document.querySelector(".section2--btn2");
const btnWorker3 = document.querySelector(".section2--btn3");
const sectInfo1 = document.querySelector(".text1");
const sectInfo2 = document.querySelector(".text2");
const sectInfo3 = document.querySelector(".text3");
const toggleBtn = document.querySelector(".toggle--button");
const nav = document.querySelector(".nav");
const homePage = document.querySelector(".home--page");
// Event Handlers
//Scroll
navBar.addEventListener("click", function (e) {
	e.preventDefault();
	if (e.target.classList.contains("nav--bar--link")) {
		const id = e.target.getAttribute("href");
		document.querySelector(id).scrollIntoView({ behavior: "smooth" });
		navBar.classList.remove("show");
	}
});
//Sticky NavBar
// const header = document.querySelector("");
const navHeight = navBar.getBoundingClientRect().height;
const stickyNav = function (entries) {
	const [entry] = entries;
	if (!entry.isIntersecting) nav.classList.add("sticky");
	else nav.classList.remove("sticky");
};
const navObserver = new IntersectionObserver(stickyNav, {
	root: null,
	threshold: 0,
	rootMargin: `-${navHeight}px`,
});
navObserver.observe(homePage);

toggleBtn.addEventListener("click", function () {
	navBar.classList.toggle("show");
});
btnInfoJob.addEventListener("click", function (e) {
	e.preventDefault();
	btnInfoJob.classList.add("active");
	btnWorker2.classList.remove("active");
	btnWorker3.classList.remove("active");
	sectInfo1.classList.remove("hidden");
	sectInfo2.classList.add("hidden");
	sectInfo3.classList.add("hidden");
});
btnWorker2.addEventListener("click", function (e) {
	e.preventDefault();
	btnInfoJob.classList.remove("active");
	btnWorker2.classList.add("active");
	btnWorker3.classList.remove("active");
	sectInfo1.classList.add("hidden");
	sectInfo2.classList.remove("hidden");
	sectInfo3.classList.add("hidden");
});
btnWorker3.addEventListener("click", function (e) {
	e.preventDefault();
	btnInfoJob.classList.remove("active");
	btnWorker2.classList.remove("active");
	btnWorker3.classList.add("active");
	sectInfo1.classList.add("hidden");
	sectInfo2.classList.add("hidden");
	sectInfo3.classList.remove("hidden");
});
