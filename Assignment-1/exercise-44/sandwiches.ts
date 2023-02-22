function sandwiches(...ingredients)
{
    console.log("\nThe ingredients are: ");
    for(let i = 0; i < ingredients.length;i++)
    {
        console.log("- "+ingredients[i]);
    }
    console.log("Your sandwich is ready!!!");
}

sandwiches('tomatoes','onions','cheese','lettuce','chicken pattie',);
sandwiches('tomatoes','onions','lettuce','cheese','mayo',);
sandwiches('tomatoes','onions','cabbage','cheese','ketchup',);
