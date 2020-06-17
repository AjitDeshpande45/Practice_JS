let count=0;
function one_Ten()
{
    setTimeout(()=>{
      console.log(count);
      count=count+1;
      if(count < 10)
      {
          one_Ten();
      }
    },1000)
}
one_Ten();