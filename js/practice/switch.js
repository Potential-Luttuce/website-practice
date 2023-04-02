// Set the current day of the week to a variable, with 0 being Sunday and 6 being Saturday
// const day = new Date().getDay();

// switch (day) {
// 	case 0:
// 		console.log("It's Sunday, time to relax!");
// 		break;
// 	case 1:
// 		console.log("Happy Monday!");
// 		break;
// 	case 2:
// 		console.log("It's Tuesday. You got this!");
// 		break;
// 	case 3:
// 		console.log("Hump day already!");
// 		break;
// 	case 4:
// 		console.log("Just one more day 'til the weekend!");
// 		break;
// 	case 5:
// 		console.log("Happy Friday!");
// 		break;
// 	case 6:
// 		console.log("Have a wonderful Saturday!");
// 		break;
// 	default:
// 		console.log("Something went horribly wrong...");
// }

// // Set the student's grade
// const grade = 87;

// switch (true) {
// 	// If score is 90 or greater
// 	case grade >= 90:
// 		console.log("A");
// 		break;
// 	// If score is 80 or greater
// 	case grade >= 80:
// 		console.log("B");
// 		break;
// 	// If score is 70 or greater
// 	case grade >= 70:
// 		console.log("C");
// 		break;
// 	// If score is 60 or greater
// 	case grade >= 60:
// 		console.log("D");
// 		break;
// 	// Anything 59 or below is failing
// 	default:
// 		console.log("F");
// }

// Get number corresponding to the current month, with 0 being January and 11 being December
const month = new Date().getMonth();

switch (month) {
    // dec jan feb 
    case 11:
    case 0:
    case 1:
        console.log("Winter");
        break;
    // mar apr may
    case 2:
    case 3:
    case 4:
        console.log("spring");
        break;
    // jun jul aug
    case 5:
    case 6:
    case 7:
        console.log("Summer");
        break;
    // sep oct nov
    case 8:
    case 9:
    case 10:
        console.log("Fall");
        break;
}
