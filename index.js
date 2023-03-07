'use strict';

const numberOfFIlms = +prompt('Сколько фильмов вы уже посмотрели?','');
const personalMovieDB = {
	count: numberOfFIlms,
	movies: {},
	actors: {},
	genres:[],
	privat: true
};

const a = prompt('Один из последних посмотренных фильмов','');
const b = prompt('На сколько оцените его?','');
const c = prompt('Один из последних посмотренных фильмов','');
const d = prompt('На сколько оцените его?','');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);