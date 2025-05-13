export function Substract (a,b){
    try {
        if(!a || !b){
            throw new Error("At least two variable required");            
        }
        console.log(`The substraction ${a} and ${b} is : `,a-b);

    } catch (error) {
        console.log("Error : ", error.message);
        
    }finally{
        console.log("Calculation completed");
    }

}