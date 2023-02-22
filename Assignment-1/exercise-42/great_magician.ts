const magician =['Brown Darren','John Carter','Charles Joseph','John Henry'];
function show_magician(magician)
{

     for (let i = 0; i<magician.length; i++)
     {
            
         console.log(magician[i]);
     }
}

function make_great(magician)
{
    var great_magician=magician;

    for(let i = 0 ; i < magician.length; i++)
    {
       great_magician[i] = "The great " + magician[i];
    }
    return great_magician;
}
 
show_magician(magician);
var great_magician = make_great(magician);
show_magician(great_magician);
