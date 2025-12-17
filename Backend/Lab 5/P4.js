const urlObj=new URL("https://example.com/pages?Name=Hiral&age=19")


urlObj.searchParams.forEach((Value,key)=>{
    console.log(`/t${key}:${Value}`)
})