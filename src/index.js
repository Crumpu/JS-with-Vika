'use strict';

// Exercise 1
//
//

// function gradusAB(a, b) {
//   return a ** b;
// }

// const gradus = gradusAB(2, 0);
// console.log(gradus);

// Exercise 2
//
//

// debugger

// let result = 0;

// function sumNM(n, m) {
// 	for (let i = n; i <= m; i++){
//   result += i;
// 	};
// 	return result;
// }
// let sum = sumNM(4, 100);
// console.log(sum);

//
//
//  Age verification

//
// function ageVerification(a) {
//   return a > 18;
// }

// console.log(ageVerification(20));

//
//
// Initials

// let userFullName = '';
// function getInitials(userFullName) {
//   const firstInitial = userFullName.substring(0, 1);
//   const indexSecondInitial = userFullName.indexOf(' ');
//   const secondInitial = userFullName.substring(
//     indexSecondInitial + 1,
//     indexSecondInitial + 2
//   );
//   return firstInitial + secondInitial;
// }

// console.log(getInitials(userFullName));

// 
// 
// произведение последовательных чисел от n1 до n2 


let result = 1;
function productNumbers(n2, n1 = 1) {
	for (let i = n1; i <= n2; i++) {
		result *= i;

	}
	return result;
}

console.log(productNumbers(10));