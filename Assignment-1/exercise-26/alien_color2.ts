var alien_color = 
{
    color1: "green",
    color2: "yellow",
    color3: "red"
};
if (alien_color.color2=='green')
{
    console.log('Player just earned 5 points for shooting the alien');
}
 else 
     console.log('Player just earned 10 points');
if (alien_color.color1 =='red')
{
    console.log('just earned 5 points');
}
else if (alien_color.color3 == 'red')
{
    console.log('player is out! ');
}
else 
console.log('wrong color!');