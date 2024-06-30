function make_album(artist:string, title: string, noOfTracks: number){
    return{artist, title, noOfTracks}

}
let album1 = make_album("Ali", "dil",30);
let album2= make_album("zafar","hawa",20);
let album3 = make_album("kim","dance",10);


console.log(album1);
console.log(album2);
console.log(album3);