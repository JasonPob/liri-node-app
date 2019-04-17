# liri-node-app

  

LIRI - Language Interpretation and Recognition Interface

  

The goal of this project is to allow the user to implement command line inputs to receive data from Spotifiy, Bands in Town, and OMDB API's.

  

This particular application is useful because it is multi-functional. Through the use of switch statements, users are capable of choosing which API's they would like to use and return new data without refreshing the app.

  

Users can get started by determining which function they would like to use.

Acceptable inputs are as follows:

* node liri.js concert-this <artist/band  name  here>

* node liri.js spotify-this-song '<song  name  here>'

* node liri.js movie-this '<movie  name  here>'

* node liri.js do-what-it-says

We set up the app by installing the various npm packages:
![packages](images/Screenshot%20(5).png)
  
node liri.js concert-this <artist/band  name  here>: 
  * This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:
    * Name of the venue
    * Venue location 
    * Date of the Event (use moment to format this as "MM/DD/YYYY")
 ![concertthis](images/Screenshot%20(6).png)
   
 node liri.js spotify-this-song '<song  name  here>':
 * This will show the following information about the song in your terminal/bash window


   * Artist(s)
   * The song's name
   *  A preview link of the song from Spotify
    * The album that the song is from
    
    ![spotify](images/Screenshot%20(7).png)

node liri.js movie-this '<movie name here>':

This will output the following information to your terminal/bash window:

   * Title of the movie.
   * Year the movie came out.
   * IMDB Rating of the movie.
   * Rotten Tomatoes Rating of the movie.
   * Country where the movie was produced.
   * Language of the movie.
   * Plot of the movie.
   * Actors in the movie.


If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

 ![OMDB](images/Screenshot%20(8).png)

node liri.js do-what-it-says:
* Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.


* It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
* Edit the text in random.txt to test out the feature for movie-this and concert-this.

![OMDB](images/Screenshot%20(9).png)