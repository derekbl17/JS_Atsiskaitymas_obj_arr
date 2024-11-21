"use strict";

// Naudojant for...in cikla atspausdinti objekto savybes.

const myObject = {
    firstName: "Derek",
    lastName: "Adda",
    age: 44,
    pets: "Parrot",
    job: "Taxi driver"
}

for (let i in myObject)console.log(i);





// Sukurkite masyva su zodziais ir parasykite funkcija 
// kuri grazina skaiciu masyva sudaryta is pirmojo masyvo zodziu iligo.

const myArray = ["Jolly","Merry","Holly","Honey","Parrot","Cannon","Orange","Antic","Me","A","Yesterday"]

const arrayMake = arr => arr.map(word => word.length);

console.log(arrayMake(myArray))





// Sukurkite objekta kuris apibudina muzikos albuma (PAVADINIMAS,ATLIKEJAS,DAINOS,DAINOS TRUKME)
// ir metoda kuris grazina visu dainu trunkanciu ilgiau nei 2,5min pavadinimus

const musicalObject = {
    albumName: "Chirp chirp",
    artistName: "Parrot G",
    songs: [
        { title: "Angry chirps!", duration: 3},
        { title: "Meow meows", duration: 2.3},
        { title: "Snowfalls now", duration: 4.3},
        { title: "Oranges n stuff", duration: 2.1}
    ]
}

const songPick = obj => obj.songs.filter(song => song.duration > 2.5).map(song => song.title)

console.log(songPick(musicalObject))

