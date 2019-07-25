require("dotenv").config();

var axios = require('axios');
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
 
var spotify = new Spotify(keys.spotify);

var commands = process.argv[2];
var value = process.argv[3];

switch (commands) {
    case "concert-this":
        concertThis();
        break;

    case "spotify-this-song":
        spotifySong();
        break;

    case "movie-this":

        break;

    case "do-what-it-says":

        break;
}

var getArtistNames = function(artist) {
    return artist.name;
}
var getMeSpotify = function(songName) {


function spotifySong(){
    spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
        if (err) {
            console.log('Error occurred: ' + err);
            return;
        }
       
      var songs = data.tracks.items;
      for(var i=0; i<songs.length; i++) {
          console.log(i);
          console.log('artist(s): ' + songs[i].artists.map(
              getArtistNames));
              console.log('song name: ' + songs[i].name);
              console.log('preview song: ' + songs[i].preview_url);
              console.log('album: ' + songs[i].album.name);
              console.log('-------------------------------------');
          
      } 
      });
}
}
var pick = function(caseData, functionData) {
    switch(caseData) {
        case 'spotify-this-song':
            getMeSpotify(functionData);
            break;
            default:
                console.log('Liri does not know that');
    }
}
