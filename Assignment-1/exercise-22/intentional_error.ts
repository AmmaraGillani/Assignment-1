// ****Error in a program****
const arr = ["Hira", "Rida", "Aishah","Faiza"];       
console.log(arr);

//add person name in the middle of an array
// undefined last index in a array

const arr2=arr;
var temp_name = arr[arr.length/2];
var temp = arr.length/2;
var arr_len = arr.length + 1;
let j = 0;
for (let i=0; i < arr_len; i++)
{  
    arr[i]=arr2[j];
    j++;
    if(i == temp)
    {
        arr[temp]='Ghina';
        arr[temp+1] =temp_name;
        i++;
        j++;    
    }
}
console.log(arr);

// ***So solution is using splice method to insert in a middle index of an array.***

const arr1 = ["Hira", "Rida", "Aishah","Faiza"];
arr1.splice(arr1.length/2,0,'Ghina');
console.log(arr1); 

