// Unit Conversion
{
    let length = 60;
    let width = 40;
    let oneMeterInFeet = 3.28084;
    
    console.log("Plot Length " + length + " Feet");
    console.log("Plot width " + width + " Feet");
    
    //given 1ft = 12 in 42 in = ? ft
    let areaInFeet = length * width;
    console.log("Total Rectangular plot area in feet is : " + areaInFeet);
    
    // Rectangular Plot of 60 feet x 40 feet in meters
    let areaInMeters = (areaInFeet / oneMeterInFeet);
    console.log("Total Rectangular plot area in meters is : " + areaInMeters);
    
    let acrearea = 25 * areaInMeters;
    console.log("Area of 25 plots in meters is : " + acrearea);
    
    // Calculate area of 25 such plots in acres
    // 1 acre = 4046.86 sq meters
    let area = (acrearea / 4046.86);
    console.log("Area of 25 plots in acers is : " + area);
}