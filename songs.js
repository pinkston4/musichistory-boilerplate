var songs = [];

songs[songs.length] = "What its like - by Everlast on the album Whitey Ford Sings the Blues";
songs[songs.length] = "Legs - by ZZTop on the album Eliminator";
songs[songs.length] = "The Logical Song - by Supertramp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall - by Pink Floyd on the album The Wall";
songs[songs.length] = "Welcome to the Jungle - by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironic - by Alanis Moris*ette on the album Jagged Little Pill";
songs[songs.length] = "C.R.E.A.M. - by Wu-Tang Clan on the album Enter the Wu-Tang (36 Chambers)";

for (var i = 0; i < songs.length; i++) {
	document.getElementById("song1").innerHTML = "<div>" + songs[0] + "</div>";
	document.getElementById("song2").innerHTML = "<div>" + songs[1] + "</div>";
	document.getElementById("song3").innerHTML = "<div>" + songs[2] + "</div>";
	document.getElementById("song4").innerHTML = "<div>" + songs[3] + "</div>";
	document.getElementById("song5").innerHTML = "<div>" + songs[4] + "</div>";
	document.getElementById("song6").innerHTML = "<div>" + songs[5] + "</div>";
	document.getElementById("song7").innerHTML = "<div>" + songs[6] + "</div>";

}