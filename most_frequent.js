function mostFrequent(array_values) {
    array_values=array_values.sort();
    let count = 0;
    let flag=1;
    let final_var=0;
    for(let i=0;i<array_values.length-1;i++)
    {
        for(let j=i+1;j<array_values.length;j++)
        {
            if(array_values[i]==array_values[j])
            {
                count++;
            }
        
        if(count>flag)
        {
            flag=count+1;
            final_var=array_values[i];
        }
    }
        count=0;
    }
  
    console.log(final_var+" "+flag);

}


mostFrequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]);