
let fruits=['Banana','Orange','Mango','Cherry','Kiwi'];
//Make a array of your three favorite fruits and call it favorite_fruits.

const fav_fruits=['Orange','Mango','Cherry'];
if ( fav_fruits.includes('Orange') )
{
    
    console.log('My fav fruit is '+ fav_fruits[0] );
}
if ( fav_fruits.includes('Mango') )
{
    
    console.log('My fav fruit is '+ fav_fruits[1] );
}
if ( fav_fruits.includes('Cherry') )
{
    
    console.log('My fav fruit is '+ fav_fruits[2] );
}

//• Write five if statements. Each should check whether a certain kind of fruit is in your array.
// If the fruit is in your array,the if block should print a statement.

if(fruits.includes('Banana'))
{
    console.log(' I really like Banana!');
}
if(fruits.includes('Orange'))
{
    console.log(' I really like Orange!');
}
if(fruits.includes('Mango'))
{
    console.log(' I really like Mango!');
}
if(fruits.includes('Cherry'))
{
    console.log(' I really like cherry!');
}
if(fruits.includes('Kiwi'))
{
    console.log(' I really like kiwi!');
}