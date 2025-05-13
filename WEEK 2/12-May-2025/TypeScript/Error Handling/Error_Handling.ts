function divide(a:number, b:number){
    if(b===0){
        throw new Error("Cannot divide by zero")
    }
    return a/b;
}

function Division(){
    try {
        const result = divide(10,0)
        console.log("Result : ", result);
    } catch (error) {
        console.log("Error caught : ", (error as Error).message);      
    }finally{
        console.log("Process complete");
    }
}


Division()