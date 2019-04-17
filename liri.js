//Set any environment variables with the dotenv package
require("dotenv").config();
//Import keys.js
var keys = require("./keys.js");
var Spotify = require("node-spotify-api")
var moment = require("moment");
var keys = require("./keys");
var request = require("request");
var axios = require("axios");
var fs = require("fs");
var search = process.argv.slice(3).join(" ");
var spotify = new Spotify(keys.spotify);


//Incorporate "axios" npm package
var axios = require("axios");

//Concert-this
// if (process.argv[2] === "concert-this") {
//     //Bands in Town
//     var artist = process.argv[3];
//     // We then run the request with axios module on a URL with a JSON
//     axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
//         function (response) {
//             // Then we print out the imdbRating
//             console.log(response);
//         }
//     );
// }
// else if (process.argv[2] === "spotify-this-song") {
//     var song = process.argv[3];
//     spotify.search({ type: 'track', query: "" + song + "" }, function (err, data) {
//         if (err) {
//             return console.log('Error occurred: ' + err);
//         }

//         console.log(data);
//     });
// }


// //functions
// var choose = function (caseData, functionData) {
//     switch (caseData) {
//         case 'concert-this':
//             artistSearch(artist);
//             break;
//         case "spotify-this-song":
//             getSpotify(functionData);
//             break;
//         case "movie-this":
//             getMovie(functionData);
//             break;
//         case "do-what-it-says":
//             doWhatItSays();
//             break;
//         default:
//             console.log("LIRI doesn't know");
//     }
// };

// var runThis = function (argOne, argTwo) {
//     choose(argOne, argTwo);
// };
// runThis(process.argv[2], process.argv[3]);


//Concert-this
var artistSearch = (artist) => {
	axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
		.then(function (response) {
			for (var i = 0; i < 5; i++) {
				let concertResults = "--------------------------------------------------------------------" +
					"\nVenue Name: " + response.data[i].venue.name +
					"\nVenue Location: " + response.data[i].venue.city +
					"\nDate of the Event: " + moment(response.data[i].datetime).format("MM/DD/YYYY") +
					"\n--------------------------------------------------------------------";
				console.log(concertResults);
			}
		})
		.catch(function (error) {
			console.log(error);
		});
}

//Spotifiy 
var getArtistNames = function (artist) {
    return artist.name;
};

//spotify api

var getSpotify = function (songName) {
    if (songName === undefined) {
        songName = "Yellow";
    }

    spotify.search(
        {
            type: "track",
            query: songName
        },
        function (err, data) {
            if (err) {
                console.log("Error occurred: " + err);
                return;
            }

            var songs = data.tracks.items;

            for (var i = 0; i < songs.length; i++) {
                console.log(i);
                console.log("artist(s): " + songs[i].artists.map(getArtistNames));
                console.log("song name: " + songs[i].name);
                console.log("preview song: " + songs[i].preview_url);
                console.log("album: " + songs[i].album.name);
                console.log("-----------------------------------");
            }
        }
    );
};

//OMDB
var getMovie = function (movieName) {
    if (movieName === undefined) {
        movieName = "Mr Nobody";
    }

    var urlHit = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=full&tomatoes=true&apikey=trilogy";

    request(urlHit, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var jsonData = JSON.parse(body);

            console.log("Title: " + jsonData.Title);
            console.log("Year: " + jsonData.Year);
            console.log("Rated: " + jsonData.Rated);
            console.log("IMDB Rating: " + jsonData.imdbRating);
            console.log("Country: " + jsonData.Country);
            console.log("Language: " + jsonData.Language);
            console.log("Plot: " + jsonData.Plot);
            console.log("Actors: " + jsonData.Actors);
            console.log("Rotton Tomatoes Rating: " + jsonData.Ratings[1].Value);
        }
    });
};

//do-what-it-says
var doWhatItSays = function () {
    fs.readFile("random.txt", "utf8", function (error, data) {
        console.log(data);

        var dataArr = data.split(",");

        if (dataArr.length === 2) {
            choose(dataArr[0], dataArr[1]);
        }
        else if (dataArr.length === 1) {
            choose(dataArr[0]);
        }
    });
};

//functions
var choose = function (caseData, functionData) {
    switch (caseData) {
        case 'concert-this':
            artistSearch(artist);
            break;
        case "spotify-this-song":
            getSpotify(functionData);
            break;
        case "movie-this":
            getMovie(functionData);
            break;
        case "do-what-it-says":
            doWhatItSays();
            break;
        default:
            console.log("LIRI doesn't know");
    }
};

var runThis = function (argOne, argTwo) {
    choose(argOne, argTwo);
};
runThis(process.argv[2], process.argv[3]);

