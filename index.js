'use strict';

let numberOfFIlms;

function start() {
	numberOfFIlms = +prompt('Сколько фильмов вы уже посмотрели?','');

	while (numberOfFIlms == '' || numberOfFIlms == null || isNaN(numberOfFIlms)) {
		numberOfFIlms = +prompt('Сколько фильмов вы уже посмотрели?','');
	}
}

start();

const personalMovieDB = {
	count: numberOfFIlms,
	movies: {},
	actors: {},
	genres:[],
	privat: false
};

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt('Один из последних посмотренных фильмов','');
		const b = prompt('На сколько оцените его?','');
		if (a != null && b != null && a != '' && b != '' && a.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log('done');
		} else {
			console.log('error');
			i--;
		}
	}
}

rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log('Просмотрено довольно мало фильмов');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
		console.log('Вы классический зритель');
	} else if (personalMovieDB.count > 30) {
		console.log('Вы киноман');
	} else {
		console.log('Произошла ошибка');
	}
}

detectPersonalLevel();

function showMyDB(hidden) {
	if(!hidden) {
		console.log(personalMovieDB);
	}
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
	for(let i = 1; i <= 3; i++) {
		personalMovieDB.genres[i - 1] = prompt (`Ваш любимы жанр под номером ${i}`);
	}
}

writeYourGenres();