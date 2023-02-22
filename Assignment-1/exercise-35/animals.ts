const animals = ['cat','dog','goat'];
for (let i = 0; i < animals.length; i++ )
{
    if(animals[i] === "cat")
    {
        console.log(animals[i] +':\n'+ 'The cat is a domestic species of small carnivorous mammal.' );
    
    }  
    else if(animals[i] === "dog")
    {
      console.log(animals[i] + ':\n'+'Golden Retrievers are always eager to please and have a calm temperament.' );
    
    }
    else if(animals[i] === "goat")
    {
      console.log(animals[i] + ':\n'+'The goat is a member of the animal family Bovidae and the tribe Caprini.' );
    
    }
    
}
console.log('All these animals need love and care.');