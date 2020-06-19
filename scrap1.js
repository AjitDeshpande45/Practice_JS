function one_Ten(){
    return new Promise((resolve,reject)=>{

        setTimeout(() => {
            
            
            if(i<2)
            {
                console.log(i)
                i =i+1
                resolve(i)
            }
            else
            {
                reject(new Error("Failure"));
            }
            
            
        }, 1000);

    });
    
}

i = 0
one_Ten().then((i)=> one_Ten()).catch(err=>console.log(err))
.then(()=>one_Ten()).catch(err=>console.log(err))
.then(()=>one_Ten()).catch(err=>console.log(err))

/*one_ten((i)=>{
    one_ten((i) => {
        one_ten((i)=> {
            
        })
    })
})*/

/*async function call()
{
        let f1=await one_ten();
        //console.log(f1);
        let f2=await one_ten();
        let f=await one_ten();
}

call();*/