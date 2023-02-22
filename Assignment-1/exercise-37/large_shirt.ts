function make_shirt(size,text)
{
    if (size=="large"||size=="medium")
    {
        console.log('Text on shirt is '+'"I love TypeScript"');    
    }
    else
    {
        console.log('The size of the shirt is '+ size);
        console.log('Text on shirt is '+text);
    }
}
make_shirt('small','Little green Monster!');