/*
    Syeda Ammara Afzal
    14 Feb,2023
    modify a guest list whose are not coming and change invitation for a dinner.
 */

    var arr = ["Hira", "Rida", "Aisha"];
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