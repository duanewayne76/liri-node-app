require("dotenv").config();
var fs = require("fs");
var moment = require("moment");

var axios = require('axios');
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

// Write code here to parse command line arguments and store them into variables
// Add code to print whether the user is searching for an actor or tv show, along with the name of the actor or tv show they are searching for
let search = process.argv[2];
let input = process.argv.slice(3).join(" ");


switch (search) {
    case "concert-this":
        searchConcert();
        break;

    case "spotify-this-song":
        searchSong();
        break;

    case "movie-this":
        searchMovie();
        break;

    case "do-what-it-says":
        searchDo();
        break;


}

function searchConcert() {
    console.log(`${input} concert`);
    var axios = require("axios");
    axios
        .get(`https://rest.bandsintown.com/artists/${input}/events?app_id=codingbootcamp`)
        .then(function (response) {
            for (let i = 0; i < response.data.length; i++) {

                console.log(`Venue: ${response.data[i].venue.name}`);
                console.log(`Location: ${response.data[i].venue.city}`);
                console.log(`Date: ${moment(response.data[i].datetime).format("MM/DD/YYYY")}`);
                console.log("-----------------------------------------------");

            };

        })
}




function runSpotifyQuery(song) {
    spotify.search({ type: 'track', query: song }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        // console.log(JSON.stringify(data.tracks.items));
        console.log("Artist(s):", data.tracks.items[0].album.artists[0].name);
        console.log("Song Name:", data.tracks.items[0].name);
        console.log("Album Name:", data.tracks.items[0].album.name);
        console.log("Preview URL:", data.tracks.items[0].preview_url);

    });
}


function searchSong() {
    console.log(`${input} song`);
    console.log("type of input", input.length);
    if (input.length == 0) {
        console.log("That didn't work");
        input = "Ace of Base";
        // change here
        runSpotifyQuery(input);
    } else {
        runSpotifyQuery(input);
        //Needs to default to Ace of Base "The Sign" if nothing is entered


    }
}




function searchMovie() {
    // console.log(`${input} movie`);
    if (input.length == 0) {
        console.log("That didn't work");
        input = "Mr.Nobody";
        axios
        .get(`http://www.omdbapi.com/?t=${input}&apikey=19cce332`)
        .then(function (response) {
            // console.log(response);
            console.log(`Title: ${response.data.Title}`);
            console.log(`Year: ${response.data.Year}`);
            console.log(`IMDB Rating: ${response.data.imdbRating}`);
            console.log(`Rotten Tomatoes: ${response.data.Ratings[1].Value}`);
            console.log(`Country: ${response.data.Country}`);
            console.log(`Language: ${response.data.Language}`);
            console.log(`Plot: ${response.data.Plot}`);
            console.log(`Actors: ${response.data.Actors}`);

        })
    }
    else {
        
        axios
            .get(`http://www.omdbapi.com/?t=${input}&apikey=19cce332`)
            .then(function (response) {
                // console.log(response);
                console.log(`Title: ${response.data.Title}`);
                console.log(`Year: ${response.data.Year}`);
                console.log(`IMDB Rating: ${response.data.imdbRating}`);
                console.log(`Rotten Tomatoes: ${response.data.Ratings[1].Value}`);
                console.log(`Country: ${response.data.Country}`);
                console.log(`Language: ${response.data.Language}`);
                console.log(`Plot: ${response.data.Plot}`);
                console.log(`Actors: ${response.data.Actors}`);

            })
    }
    //Needs to default to Mr. Nobody if nothing is entered

}




function searchDo() {

    fs.readFile("./random.txt", "utf8", function (err, data) {
        console.log(data);
        data = data.split(",");
        var action = data[0];
        var query = data[1];
        switch (action) {
            case "concert-this":
                searchConcert(query);
                break;

            case "spotify-this-song":
                searchSong(query);
                break;

            case "movie-this":
                searchMovie(query);
                break;

            case "do-what-it-says":
                searchDo(query);
                break;



        }
    });




}



