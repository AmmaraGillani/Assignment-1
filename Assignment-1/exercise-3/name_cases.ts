/*
    Syeda Ammara Afzal
    14 Feb,2023
    The code is store the person_name and display name with lowerCase,upperCase and titleCase. 
*/

var person_name ="syeda ammara afzal";

//using loop method for title case 
function titleCase(person_name) {
    person_name = person_name.toLowerCase().split(' ');
    for (var i = 0; i < person_name.length; i++) {
        person_name[i] = person_name[i].charAt(0).toUpperCase() + person_name[i].slice(1);
    }
    return person_name.join(' ');
    }
  
    console.log(person_name.toLowerCase());
    console.log(person_name.toUpperCase());
    console.log(titleCase(person_name));