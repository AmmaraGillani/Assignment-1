const arr_name = ['Ammara','Omer','Admin','Shahzain','Mustafa'];
if (arr_name.length === 0)
{
    console.log('Empty array');
    console.log('We need to find some users');
}
else 
console.log(arr_name);
// remove all users
for (let i=arr_name.length; i > 0 ; i--)
{
    arr_name.pop();
    if (arr_name.length == 0)
    {
        console.log('We need to find some users');
    }
}