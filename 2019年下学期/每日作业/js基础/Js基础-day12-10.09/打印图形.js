for (var i=5; i>=0; i--) 
{
    var str = ""
    for (var j = 0; j <= i; j++) 
    {
        str +="*"
    }
    var str1 =""
    for (var j = 0; j <= i; j++) 
    {
        str1 +=" "
    }
    console.log(str1+str)
}
