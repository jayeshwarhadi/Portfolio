window.alert("This website is under devolopment! May have unintentional errors.")

const home = document.getElementById('home');
const about = document.getElementById('about');
const exp = document.getElementById('exp');
const contact = document.getElementById('contact');
const div = document.getElementById('ContentBox');

function changeHome() {
    div.innerHTML = '<div class="intro"><h1>Hi! I\'m <span>Jayesh Warhadi.</span></h1><h2>I\'m a CSE student interested in <a href="">Coding</a> ,<br> <a href="">Video Editing</a> , <a href="">Photo Editing</a> and <a href="">3D Modeling</a>. <br> I love creative works , using analytical mind and out of the box solutions.</h2></div>';
}
function changeAbout() {
    div.innerHTML = '<p>aaaNew HTML content!</p>';
}
function changeExp() {
    div.innerHTML = '<p>bnbbbNew HTML content!</p>';
}
function changeContact() {
    div.innerHTML = '<p>cccNew HTML content!</p>';
}

home.addEventListener('click', changeHome);
about.addEventListener('click', changeAbout);
exp.addEventListener('click', changeExp);
contact.addEventListener('click', changeContact);