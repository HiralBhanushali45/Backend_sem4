const urlObj=new URL("https://example.com/pages?Name=Hiral&age=19")
urlObj.searchParams.append("name","hiral")
urlObj.searchParams.append("age","56")
console.log(urlObj.toString())
console.log(urlObj)

