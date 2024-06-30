function make_album(artist, title, noOfTracks) {
    return { artist: artist, title: title, noOfTracks: noOfTracks };
}
var album1 = make_album("Ali", "dil", 30);
var album2 = make_album("zafar", "hawa", 20);
var album3 = make_album("kim", "dance", 10);
console.log(album1);
console.log(album2);
console.log(album3);
