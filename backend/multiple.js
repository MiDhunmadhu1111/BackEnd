function multiasynch(name, callback) {
    console.log("Hello,"+ name);
   
    setTimeout(function() 
    {
        callback(3,3)
    } , 3000);
    
    console.log("Before callback")
}

function mul(a,b){
    let c = a*b;
    console.log("Result is:",c);
}

multiasynch("Multiplication",mul);
