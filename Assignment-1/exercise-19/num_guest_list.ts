const arr = ["Hira", "Rida", "Aishah"];
         
        const temp_arr= [...arr];
  
        arr[0]= "Faiza";
  
        for (let i = 0; i < temp_arr.length; i++)
        {
            arr[i+1]=temp_arr[i];
        }    
        arr.splice((arr.length+1)/2,0,'Ghina');
        arr.push('Sadaf');
        console.log(arr);
console.log('Total numbers of people who invite for dinner is '+ arr.length);
