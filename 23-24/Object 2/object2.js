let user =
{
    name:"John"
}

let user2=
{
    name:""
}

function isEmpty(users)
{
    let bool;
    if(users.name!="")
    {
        bool=false;
        return bool;
    }else{
        bool=true
        return bool;
    }
}
console.log(isEmpty(user));
console.log(isEmpty(user2));