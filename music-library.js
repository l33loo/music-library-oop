// Create a music library containing playlists that contain tracks,
// using Constructor function, Prototype and new.


function Library(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}
Library.prototype.playlists = [];

function Playlist(name) {
  this.name = name;
  this.tracks = [];
}

Playlist.prototype.overallRating = function() {
  return this.tracks.reduce((acc, currentTrack) => {
    return acc + currentTrack.rating / this.tracks.length;
  }, 0);
};

Playlist.prototype.totalDuration = function() {
  return this.tracks.reduce((acc, currentTrack) => {
    return acc + currentTrack.length;
  }, 0);
};

function Track(title, rating, length) {
  this.title = title;
  this.rating = rating; // integer from 1 to 5
  this.length = length; // integer in seconds
}

const lib1 = new Library("Oldies", "Lila");
const lib2 = new Library("2000", "Lila");


const play1 = new Playlist("Beatles");
lib1.playlists.push(play1);

const track1 = new Track("Yellow Submarine", 4, 159);
lib1.playlists[0].tracks.push(track1);

const track2 = new Track("The Walrus", 5, 156);
lib1.playlists[0].tracks.push(track2);

const track3 = new Track("Hey Jude", 3, 160);
lib1.playlists[0].tracks.push(track3);

const track4 = new Track("Across the Universe", 4, 155);
lib1.playlists[0].tracks.push(track4);

lib1.playlists[0].tracks.pop();

const play2 = new Playlist("Paul Anka");
lib1.playlists.push(play2);

const track5 = new Track("Put Your Head on my Shoulder", 5, 155);
lib1.playlists[1].tracks.push(track5);

const track6 = new Track("Puppy Love", 4, 168);
lib1.playlists[1].tracks.push(track6);

console.log(lib1.playlists[0].overallRating());

