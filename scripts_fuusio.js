/* Uuden Mediaplayerin funktiot  
   14.09.2020 / ruottis   
*/

var songList = document.getElementById("dynamicList");
var songs = new Array;
songs[0] = "Blue Öyster Cult - Imaginos";
songs.push("Blue Öyster Cult - Les Invisibile");
songs.push("Blue Öyster Cult - Blue Öyster Cult");
songs.push("Blue Öyster Cult - I'm the one you warned me of");
songs.push("Blue Öyster Cult - Astronomy");
songs.push("Blue Öyster Cult - Don't fear the reaper");
songs.push("Blue Öyster Cult - Red and black flag");
songs.push("Blue Öyster Cult - Career of evil");

var playlistLength = songs.length - 1;
var j = 0; /* i vertaa j */
var songTitle = songs[0].split("-")[0];

var youtubeLink = new Array;
youtubeLink.push("eTreqYGKKQo");
youtubeLink.push("53HZ7LoqhSQ");
youtubeLink.push("l5uqatdNu1I");
youtubeLink.push("zaEe5qpb9b0");
youtubeLink.push("U0t_wb0lUW0");
youtubeLink.push("Dy4HA3vUv2c");
youtubeLink.push("zIawk-9PApw");
youtubeLink.push("HY3NQUoT89k");

var youtubePrefix = "https://www.youtube.com/embed/";
var youtubeIframe = document.getElementById("youtube");

function generatePlaylist(){
	var i = 0;
	songList.innerHTML = ""; /* tyhjennetään isäntäelementin sisältö */
	
	/* Artistin nimi listan ensimmäiseksi, omalla tyylillään */
	songList.innerHTML += '<li class="title">' + songTitle + '</li>';
	
	while(i <= playlistLength){
		if(i == j){
			songList.innerHTML += '<li class="nowPlaying">' + songs[i] + '</li>';
		}
		else{
			songList.innerHTML += '<li>' + songs[i] + '</li>';
		}
		i++;
	}
}

function next(){
	/* Niin kauan, kuin j:n arvo on pienempi kuin 
	   playlistLength-muuttujan arvo, 
	   voidaan lisätä j:n arvoa 
	*/
	if(j < playlistLength){ 
		j++;
	}
	else{
		j = playlistLength;
	}	
	updateYoutube();
}

function previous(){
	/* Niin kauan kuin j:n arvo on suurempi, kuin 0, 
	   voidaan vähentää j:n arvoa 
	*/
	if(j > 0){
		j--;
	}
	else{
		j = 0;
	}
	updateYoutube();
}

function updateYoutube(){
	youtubeIframe.src = youtubePrefix + youtubeLink[j];	
}

function shuffle(){
	j = Math.floor(Math.random() * playlistLength);
	updateYoutube();
}

function changeStyle(optionValue){
	console.log(optionValue);
	document.getElementsByTagName("link")[0].href = optionValue;
}

function testi(){
  console.log("Generating playlist"); 
  generatePlaylist();
}

/* vanhan MediaPlayerin scripts.js :n sisällöt alla */

var biisilista = document.getElementById("biisilista");
var levykansi = document.getElementById("levykansi");
var video = document.getElementById("video");

function nayta(tila){
  /* oletuksena pistetään kaikkien näkymien järjestys alimmaiseksi */
  biisilista.setAttribute("class", "alla");
  levykansi.setAttribute("class", "alla");
  video.setAttribute("class", "alla");

  var biisilista_btn = document.getElementById("biisilista_btn");
  var levykansi_btn = document.getElementById("levykansi_btn");
  var video_btn = document.getElementById("video_btn");

  /* käyttäjän valinnan mukaan näytetään haluttu näkymä päällimmäisenä */
  if(tila.value == "biisilista"){
	biisilista.setAttribute("class", "paalla");
        biisilista_btn.setAttribute("class", "on");
        levykansi_btn.setAttribute("class", "off");
        video_btn.setAttribute("class", "off");
  }
  if(tila.value == "levykansi"){
	levykansi.setAttribute("class", "paalla");
        biisilista_btn.setAttribute("class", "off");
        levykansi_btn.setAttribute("class", "on");
        video_btn.setAttribute("class", "off");
  }
  if(tila.value == "video"){
	video.setAttribute("class", "paalla");
        biisilista_btn.setAttribute("class", "off");
        levykansi_btn.setAttribute("class", "off");
        video_btn.setAttribute("class", "on");
  }  

}

var audio = document.getElementById("audio");

function soita(){
  audio.play();
}

function pause(){
  audio.pause();
}

function stop(){
  audio.stop();
}