//Set any environment variables with the dotenv package
require("dotenv").config();
//Import keys.js
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var Spotify = require("node-spotify-api")
var moment = require("moment");
var keys = require("./keys");
var request = require("request");
var axios = require("axios");
var fs = require("fs");
var search = process.argv.slice(3).join(" ");


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


//functions
var choose = function (caseData, functionData) {
    switch (caseData) {
        case 'concert-this':
            bandSearch(search);
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

