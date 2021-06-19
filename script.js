//menu toggle
const menu = document.querySelector(".menu");

function menuToggle(){
	menu.classList.toggle("test");
}


//declaring the arrays
tracks = ["./music/theperfectembodiment.mp3" ,"./music/My Witness, Your Victim.mp3", "./music/A Necessary Evil.mp3", "./music/Architects Hallucinate.mp3", "./music/Disconnect Me.mp3", "./music/dansemacabre.mp3", "./music/Gates of Horn and Ivory.mp3", "./music/Faceless Messenger.mp3", "./music/asabovesobelow.mp3", "./music/agentledisease.mp3"];
artists = ["The Agonist", "The Agonist", "The Agonist", "The Agonist", "The Agonist", "The Agonist", "The Agonist", "The Agonist", "The Agonist", "The Agonist", "The Agonist"];
titles = ["The Perfect Embodiment", "My Witness, Your Victim", "A Necessary Evil", "Architects Hallucinate", "Disconnect Me", "Danse Macabre", "Gates of Horn & Ivory", "Faceless Messenger", "As Above, So Below", "A Gentle Disease"];
thumbnails = ["./images/agonist.jpg", "./images/agonist.jpg", "./images/agonist.jpg", "./images/agonist.jpg", "./images/agonist.jpg", "./images/agonist.jpg", "./images/agonist.jpg","./images/agonist.jpg","./images/agonist.jpg","./images/agonist.jpg"];
backgrounds = ["./images/agonist.jpg", "./images/agonist.jpg", "./images/agonist.jpg", "./images/agonist.jpg", "./images/agonist.jpg", "./images/agonist.jpg", "./images/agonist.jpg", "./images/agonist.jpg", "./images/agonist.jpg", "./images/agonist.jpg",];


//variables
const track = document.querySelector("#track");
const thumbnail = document.querySelector("#thumbnail");
const background = document.querySelector("#background");
const artist = document.querySelector(".song_artist");
const title = document.querySelector(".song_title");
const progressBar = document.querySelector("#progressBar");


//click changes play.png to pause.png and calls song.play()
//other click changes back to play.png and calls song.pause()
let playing = true;

function playPause(){
	if(playing){
		play_pause.src = "./images/pause.png";
		thumbnail.style.transform = "scale(1.25)";
		track.play();
		playing = false;
	}
	else{
		play_pause.src = "./images/play.png";
		thumbnail.style.transform = "scale(1.0)";
		track.pause();
		playing = true;
	}
}


//automatically play next song
track.addEventListener("ended", function() {
	nextSong();
});


//increments the index, cycles through array
trackIndex = 0;

function nextSong(){
	trackIndex++;

	if(trackIndex > 10){
		trackIndex = 0;
	}
	track.src = tracks[trackIndex];
	thumbnail.src = thumbnails[trackIndex];
	background.src = backgrounds[trackIndex];

	artist.innerHTML = artists[trackIndex];
	title.innerHTML = titles[trackIndex];

	playing = true;
	playPause();
}

function previousSong(){
	trackIndex--;

	if(trackIndex < 0){
		trackIndex = 10;
	}
	track.src = tracks[trackIndex];
	thumbnail.src = thumbnails[trackIndex];
	background.src = backgrounds[trackIndex];

	artist.innerHTML = artists[trackIndex];
	title.innerHTML = titles[trackIndex];

	playing = true;
	playPause();
}


//progress bar
function updateProgressValue(){
	progressBar.max = track.duration;
	progressBar.value = track.currentTime;
	document.querySelector(".currentTime").innerHTML = (formatTime(Math.floor(track.currentTime)));
	if( document.querySelector(".durationTime").innerHTML == "NaN:NaN" ){
		document.querySelector(".durationTime").innerHTML = "0:00";
	}
	else{
		document.querySelector(".durationTime").innerHTML = (formatTime(Math.floor(track.duration)));
	}
}

function formatTime(seconds){
	let min = Math.floor((seconds/60));
	let sec = Math.floor(seconds - (min*60));
	if(sec < 10){
		sec = `0${sec}`;
	};
	return `${min}:${sec}`
}


//runs updateProgressValue every .5 secs
setInterval(updateProgressValue, 500);


//change bar by dragging it
function changeProgressBar(){
	track.currentTime = progressBar.value;
}


/*slick carousel*/
$(document).ready(function(){
	$('.slider').slick({
	slidesToShow: 10,
	dots: false,
	draggable: true,
	prevArrow: $('.prev'),
	nextArrow: $('.next'),
	responsive: [
		{
			breakpoint: 768,
			settings:{ slidesToShow: 1}
		}
	]
	});
});


/*gallery*/
const current = document.querySelector('#current');
const picture = document.querySelectorAll('.images img');
const opacity = 0.9;

//set first image opacity
picture[0].style.opacity = opacity;
picture.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e){
	//reset opacity
	picture.forEach(img => (img.style.opacity = 1));

	//change current image to src of clicked image
	current.src = e.target.src;

	//add the fade-in class
	current.classList.add("fade-in");

	//remove fade-in class after .5 seconds
	setTimeout( () => current.classList.remove("fade-in"), 500 );

	//change the opacity
	e.target.style.opacity = opacity;
}

/*innerHTML*/
const festivals = [["Download Festival"], ["Grammys"], ["Coachella"]];
const paragraphs = [["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, repellat iste earum ullam delectus."],
					["Officia, suscipit, quasi nobis porro non necessitatibus. Blanditiis, tempore, dignissimos eligendi quod?"],
					["Praesentium, ut architecto necessitatibus odio autem quibusdam nesciunt ad id possimus repellat facere!"]];

function Msg(num){
	document.getElementById("text").innerHTML = festivals[num];
	document.getElementById("paragraph").innerHTML = paragraphs[num];
}
