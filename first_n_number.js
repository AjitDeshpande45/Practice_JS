function find_Number(array_value,count)
{


    if(count=="" || count==0)
    {
        console.log(array_value[0]);
    }
    else
    {
        console.log(array_value.slice(0,count));
    }
}



find_Number([7,9,0,-2],3);