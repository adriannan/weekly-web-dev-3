var navHome = document.getElementById('navHome');
var navAbout = document.getElementById('navAbout');
var navBlog = document.getElementById('navBlog');
var navPortfolio = document.getElementById('navPortfolio');
var navContact = document.getElementById('navContact');

var sectionHome = document.getElementById('home');
var sectionAbout = document.getElementById('about');
var sectionBlog = document.getElementById('blog');
var sectionPortfolio = document.getElementById('portfolio');
var sectionContact = document.getElementById('contact');

// NAVIGATION

navHome.addEventListener('click', function scrollIt(){sectionHome.scrollIntoView({
  behavior: 'smooth', block: 'start'
})});
navAbout.addEventListener('click', function scrollIt(){sectionAbout.scrollIntoView({
  behavior: 'smooth', block: 'start'
})});
navBlog.addEventListener('click', function scrollIt(){sectionBlog.scrollIntoView({
  behavior: 'smooth', block: 'start'
})});
navPortfolio.addEventListener('click', function scrollIt(){sectionPortfolio.scrollIntoView({
  behavior: 'smooth', block: 'start'
})});
navContact.addEventListener('click', function scrollIt(){sectionContact.scrollIntoView({
  behavior: 'smooth', block: 'start'
})});



// STICKY NAV EFFECT

var navbar = document.getElementById('navbar');
var sticky = sectionHome.offsetTop;
var bottomPage = sectionContact.offsetTop;
var toTopButton = document.getElementById('back-top');

function fixedNav(){
	if (window.pageYOffset >= sticky){
		navbar.classList.add('fixed-nav1');
		setTimeout(function() {
			navbar.classList.add('fixed-nav');}
			, 10);
		sectionHome.classList.add('baner-margin');
	} else {
		navbar.classList.remove('fixed-nav1');
		navbar.classList.remove('fixed-nav');
		sectionHome.classList.remove('baner-margin')
	}
}


// BACK TO THE TOP BUTTON

function toTop(){
	if (window.pageYOffset >= bottomPage){
		toTopButton.style.display = 'inline';
	} else {
		toTopButton.style.display = 'none';
	}
}

toTopButton.addEventListener('click', function scrollIt(){sectionHome.scrollIntoView({
  behavior: 'smooth', block: 'start'
})});


// HAMBURGER MENU

var hamNav = document.getElementById('nav'),
	hamBut = document.getElementById('hamburger');


// open hamburger menu

hamBut.addEventListener('click', function openHam(){
	if (hamBut.classList.contains('focus') == false && navbar.classList.contains('fixed-nav') == false){
		hamBut.classList.add('focus');
		hamNav.style.display = 'flex';
		} else if(hamBut.classList.contains('focus') == false && navbar.classList.contains('fixed-nav') == true){
			hamNav.classList.add('expanded');
			hamBut.classList.add('focus');
			hamNav.style.display = 'flex';
		} else{
			hamBut.classList.remove('focus');
			hamNav.classList.remove('expanded');
			hamNav.style.display = 'none';
		};
});










