const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function () {
       for (elem in library.playlists) { //can't use for of loop bc library. playlist is not iterable?! i dont get it...
         let playlistNumber = elem;
         let name = library.playlists[elem].name;
         let numberTracks = library.playlists[elem].tracks.length;  
         console.log(`${playlistNumber}: ${name} - ${numberTracks} tracks`); //template string :) 
       }  
   };
 
 printPlaylists();


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {
       for (elem in library.tracks) {
           let trackNumber = elem;
           let artist = library.tracks[elem].artist;
           let name = library.tracks[elem].name;
           let album = library.tracks[elem].album;
           console.log(`${trackNumber}: ${name} by ${artist} (${album})` );
       }
     };
    printTracks();






// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
       let objectKeys = Object.keys(library.playlists);
       for (elem of objectKeys) {
         if (elem === playlistId) {
           let playlistTracks = Object.values(library.playlists[elem].tracks);
           console.log(`${elem}: ${library.playlists[elem].name} - ${library.playlists[elem].tracks.length} tracks`);
           for (track of playlistTracks) {
               console.log(`${track}: ${library.tracks[track].name} by ${library.tracks[track].artist} (${library.tracks[track].album})`);
           }
         }
       }
     };
   printPlaylist("p01");
   //help from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
   //https://www.programmerinterview.com/javascript/how-to-print-a-javascript-object/
   


// adds an existing track to an existing playlist
const addTrackToPlaylist = function (trackId, playlistId) {
       library.playlists[playlistId].tracks.push(trackId);
       console.log(`${trackId} was added to playlist ${playlistId}`);
     }
     
   addTrackToPlaylist("t03", "p02");
     //refactored using vs code + right click + refactor


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
       return Math.floor((1 + Math.random()) * 0x10000).toString (16).substring(1); //0x10000 does not mean multiplication, because in JS the * represents mult. (you gotta also use math.floor so you dont get a ton of decimal points...I think?)
     };
     console.log(generateUid());
   
     // help from https://www.c-sharpcorner.com/blogs/generate-guid-using-javascript1 


// adds a track to the library
const addTrack = function(name, artist, album) {
       const newTrack = generateUid();
       library.tracks[newTrack] = {
         name: name,
         artist: artist,
         album: album
       };
     };
     //this code is not running or showing up in node, seek assistance from mentors ASAP
   addTrack("Dancing Nanices", "DMB", "ABC");

//check to see if its added
//console.log(library);

// adds a playlist to the library
const addPlaylist = function(name) {
       const newPlaylist = generateUid();
       library.playlists[newPlaylist] = {
         name: name
       };
        console.log(library.playlists);
     };
     
     addPlaylist("hello"); //general question, would I be able to use .push for this? no bc its not an array???
   


// STRETCH: no time :(((
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}