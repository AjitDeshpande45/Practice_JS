function find_Number(a,b)
{


    if(b=="" || b==0)
    {
        console.log(a[0]);
    }
    else
    {
        console.log(a.slice(0,b));
    }
}



find_Number([7,9,0,-2],3);