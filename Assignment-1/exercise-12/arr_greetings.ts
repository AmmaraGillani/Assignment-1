/*
    Syeda Ammara Afzal
    14 February, 2023
    Store names in array and show greeting message on each person in a array.
 */
const names = ["Mishal", "Sadaf", "Ayesha", "Ghina", "Hira", "Rida", "Faiza"];
const msg="Best wishes to you on this happy moment of your life.";
 for (let i = 0; i < names.length ; i ++ ){
     console.log( names[i] +':'+'\t'+ msg );
 }