/*
    Syeda Ammara Afzal
    14 Feb,2023
    make a guest list on an array and invite them for a dinner.
 */

    var arr = ["Hira", "Rida", "Aisha"];
    const msg = "I send this invitation for the dinner party at my residence tomorrow";
    for (let i = 0; i < arr.length; i++)
    {
        console.log("Dear " + arr[i] + " " + msg);
    }