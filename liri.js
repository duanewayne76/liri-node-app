require("dotenv").config();

var axios = require('axios');
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

// Write code here to parse command line arguments and store them into variables
// Add code to print whether the user is searching for an actor or tv show, along with the name of the actor or tv show they are searching for
let search = process.argv[2];
let input = process.argv.slice(3).join(" ");


switch (search) {
    case "actor":
        searchActor();
        break;

    case "show":
        searchShow();
        break;
}

function searchActor() {
    console.log(`${input} actor`);
    var axios = require("axios");
    axios
    .get(`http://api.tvmaze.com/search/people?q=${input}`)
        .then(function (response) {

            console.log(`Name: ${response.data[0].person.name}`);
            console.log(`Birthday: ${response.data[0].person.birthday}`);
            console.log(`Gender: ${response.data[0].person.gender}`);
            console.log(`Country: ${response.data[0].person.country}`);
            console.log(`URL: ${response.data[0].person.url}`);
           
})
}

function searchShow() {
    console.log(`${input} show`);


    var axios = require("axios");
    axios
    .get(`http://api.tvmaze.com/singlesearch/shows?q=${input}`)
        .then(function (response) {

            console.log(response.data);
        })

}








// var commands = process.argv[2];
// var value = process.argv[3];
// main();

// function main() {
//     switch (commands) {
//         // case "concert-this":
//         //     concertThis();
//         //     break;
//         case "spotify-this-song":
//             console.log("I'm in Spotify this song");
//             spotifySong();
//             break;
//         // case "movie-this":
//         //     break;
//         // case "do-what-it-says":
//         //     break;
//     }
// }
// function spotifySong() {
//     console.log("i'm in spotify song");
//     spotify.search({ type: 'track', query: 'All the Small Things' }, function (err, data) {
//         console.log(data);

//         if (err) {
//             console.log('Error occurred: ' + err);
//             return;

//         }
//         console.log(data.tracks.items[0]);
//     })
// }


// var getArtistNames = function (artist) {
//         return artist.name;
//     }
//     var getMeSpotify = function (songName) {


//         function spotifySong() {
//             spotify.search({ type: 'track', query: 'All the Small Things' }, function (err, data) {
//                 if (err) {
//                     console.log('Error occurred: ' + err);
//                     return;
//                 }

//                 var songs = data.tracks.items;
//                 for (var i = 0; i < songs.length; i++) {
//                     console.log(i);
//                     console.log('artist(s): ' + songs[i].artists.map(
//                         getArtistNames));
//                     console.log('song name: ' + songs[i].name);
//                     console.log('preview song: ' + songs[i].preview_url);
//                     console.log('album: ' + songs[i].album.name);
//                     console.log('-------------------------------------');

//                 }
//             });
//         }
//     }
//     var pick = function (caseData, functionData) {
//         switch (caseData) {
//             case 'spotify-this-song':
//                 getMeSpotify(functionData);
//                 break;
//             default:
//                 console.log('Liri does not know that');
//         }
//     }
