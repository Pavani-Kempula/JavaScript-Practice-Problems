console.log("Program to find a date with in March 20 and June 20");
let date=Math.floor(Math.random() * 100)%30+1;
let month=Math.floor(Math.random() * 100)%12+1;
console.log("Given Date: "+date+"/"+month+"/2021");
let combine_date=month*100+date;
const march_20=320;
const june_20=620;
if(combine_date>march_20 && combine_date<june_20){
    console.log(date+"/"+month+"/2021 is within range of 20th March and 20th June");
} else {
    console.log(date+"/"+month+"/2021 is not in range of 20th March and 20th June");
}