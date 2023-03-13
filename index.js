'use strict';

const numberOfFIlms = +prompt('Сколько фильмов вы уже посмотрели?','');
const personalMovieDB = {
	count: numberOfFIlms,
	movies: {},
	actors: {},
	genres:[],
	privat: true
};
for (let i = 0; i < 2; i++) {
	const a = prompt('Один из последних посмотренных фильмов','');
	const b = prompt('На сколько оцените его?','');

	// Первый цикл
	// 	if (a == null || b == null) {
	// 		console.log('null cant be correct');
	// 		i--;
	// 	} else {
	// 		if (a.length === 0 || a.length > 50 || b.length === 0 || b.length > 50) {
	// 			console.log('error');
	// 			i--;
	// 		} else {
	// 			personalMovieDB.movies[a] = b;
	// 		}
	// 	}
	// }
	// Второй цикл
	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
		personalMovieDB.movies[a] = b;
		console.log('done');
	} else {
		console.log('error');
		i--;
	}
}
if (personalMovieDB.count < 10) {
	console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
	console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
	console.log('Вы киноман');
} else {
	console.log('Произошла ошибка');
}
console.log(personalMovieDB);


// function getMathResult(a, b) {
// 	let emptyString = '';
// 	if(b <= 0 || typeof(b) != 'number') {
// 		return a; 
// 	} else {
// 		for (let i = 1; i < b; i++ ) {
// 			emptyString += a * i + '---' ;
// 		}
// 		emptyString += a * b;
// 		return emptyString;
// 	}
// }

console.log(getMathResult(5, 3));

function getMathResult (a, b) {
	let outputString = '';
	if (b <= 0 || typeof(b) !== 'number') {
		console.log('error');
		return a;
	} else {
		for (let i = 1; i < b; i++) {
			outputString += a * i + '---';
		}
	}
	outputString += a * b;
	return outputString;
}

console.log(getMathResult(3, 15));