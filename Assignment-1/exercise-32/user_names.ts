const current_users = ['Ammara','Shahzain','Mustafa','Saima','Omer'];

const new_users =['Hassan','Irtaza','Mustafa','Ali','Shahzain'];
let temp;
for(let i=0;i < new_users.length; i++)
{
    for(let j=0; j < current_users.length; j++)
    {
        if (new_users[i]==current_users[j])
        {
            console.log('-you need to enter a new username\n ' + new_users[i]+' already exist');
            temp=j;
        }                 
    }
    if(new_users[i]!=current_users[temp])
    { 
      console.log('-'+new_users[i] + ': this username is available');
    }
    
} 