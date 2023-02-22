/*
    Syeda Ammara Afzal
    14 Feb,2023
    modify a guest list whose are not coming and change invitation for a dinner.
 */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var arr = ["Hira", "Rida", "Aishah"];
var msg = "I send this invitation for the dinner party at my residence tomorrow";
for (var i = 0; i < arr.length; i++) {
    console.log("Dear " + arr[i] + "," + " " + msg);
}
//someone is not coming for a dinner
console.log(arr[0] + ' is not coming for a dinner');
//replace the person and modify the guest list 
arr[0] = "Mishal";
for (var i = 0; i < arr.length; i++) {
    console.log("Dear " + arr[i] + "," + " " + msg);
}
console.log(" *I found a bigger dinner table. so I will invite more people*");
//add new guest at beginning of list 
var temp_arr = __spreadArray([], arr, true);
arr[0] = "Faiza";
for (var i = 0; i < temp_arr.length; i++) {
    arr[i + 1] = temp_arr[i];
}
console.log(arr);
//add new guest at middle of list
arr.splice((arr.length + 1) / 2, 0, 'Ghina');
console.log(arr);
// add new guest at the end of an array
arr.push('Sadaf');
console.log(arr);
// invitation for people in an array
for (var i = 0; i < arr.length; i++) {
    console.log("Dear " + arr[i] + "," + " " + msg);
}
