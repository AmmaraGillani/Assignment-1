/*
    Syeda Ammara Afzal
    15 Feb,2023
    Modify the list of an array Only two guests are invites because a big table for dinner is cancelled. */

        const arr = ["Hira", "Rida", "Aishah"];
        const msg = "I send this invitation for the dinner party at my residence tomorrow";
        for (let i = 0; i < arr.length; i++)
        {
            console.log("Dear " + arr[i] +","+ " " + msg);
        }


   //someone is not coming for a dinner
    
        console.log(arr[0] + ' is not coming for a dinner');
   
    //replace the person and modify the guest list 
   
        arr[0]="Mishal";

        for (let i = 0; i < arr.length; i++)
        {
            console.log("Dear " + arr[i] +","+ " " + msg);
        }
        console.log(" *I found a bigger dinner table. so I will invite more people*");
   
    //add new guest at beginning of list 
    
        const temp_arr= [...arr];
  
        arr[0]= "Faiza";
  
        for (let i = 0; i < temp_arr.length; i++)
        {
            arr[i+1]=temp_arr[i];
        }
    
        console.log(arr);
  
    //add new guest at middle of list
    
        arr.splice((arr.length+1)/2,0,'Ghina');
        console.log(arr);

    // add new guest at the end of an array
        arr.push('Sadaf');
        console.log(arr);
    
    // invitation for people in an array
        for (let i = 0; i < arr.length; i++)
        {
            console.log("Dear " + arr[i] +","+ " " + msg);
        }
    // Only two people invite
        console.log(' I can invite only two people for a dinner.');
    
    // Pop a list 
    
        for (let i = arr.length; i > 2; i--)
        {
            console.log('Dear '+arr.pop()+',');
            console.log(' I am sorry I can’t invite you to dinner');
            
        }
    // Invited People
            console.log('\n');
        for(let i=0; i<arr.length;i++)
        {
            console.log(arr[i] +',' +'You are still invited' );
        }
    // Empty List   
        console.log('\n');
        for(let i = arr.length; i>=0;i--)
        {
            arr.pop();
        }
        console.log(arr);
        console.log('Empty List');
        