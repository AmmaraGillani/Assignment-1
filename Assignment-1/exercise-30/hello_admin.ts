const arr_name = ['Ammara','Omer','Admin','Shahzain','Mustafa'];
for(let i = 0; i < arr_name.length; i++)
{
    if (arr_name[i] == 'Admin')
    {
        console.log('Hello '+ arr_name[i] +','+' would you like to see a status report?');
    }
    else
    console.log('Hello '+ arr_name[i] +','+' thank you for logging in again.');
}