
// TASK #A1

let weight = parseFloat(prompt("Enter your weight in kilograms."));

let height = parseFloat(prompt("Enter your height in meters."));

let BWI = weight / height ** 2;

if(isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    console.log("Incorrect data");
    alert("Incorrect data");
} else if(BWI <= 16) {
    console.log(`${BWI.toFixed(1)} - Severe underweight`);
    alert(`${BWI.toFixed(1)} - Severe underweight`);
} else if(BWI > 16 && BWI <= 18.5) {
    console.log(`${BWI.toFixed(1)} - Underweight (deficit)`);
    alert(`${BWI.toFixed(1)} - Underweight (deficit)`);
} else if(BWI > 18.5 && BWI <= 25) {
    console.log(`${BWI.toFixed(1)} - Normal`);
    alert(`${BWI.toFixed(1)} - Normal`); 
} else if(BWI > 25 && BWI <= 30){
    console.log(`${BWI.toFixed(1)} - Overweight (pre-obesity)`);
    alert(`${BWI.toFixed(1)} - Overweight (pre-obesity)`); 
} else if(BWI > 30 && BWI <= 35){
    console.log(`${BWI.toFixed(1)} - Obesity grade 1`);
    alert(`${BWI.toFixed(1)} - Obesity grade 1`); 
} else if(BWI > 35 && BWI <= 40){
    console.log(`${BWI.toFixed(1)} - Obesity grade 2`);
    alert(`${BWI.toFixed(1)} - Obesity grade 2`); 
} else if(BWI > 40){
    console.log(`${BWI.toFixed(1)} - Obesity grade 3`);
    alert(`${BWI.toFixed(1)} - Obesity grade 3`); 
}


// TASK #A2
