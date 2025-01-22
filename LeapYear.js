function LeapYear(year){
    let a = "Yes";
    let b = "No";
    if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
        return a;
    }
    else{
        return b;
    }
}
console.log(LeapYear(2024));