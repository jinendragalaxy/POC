
function add(a: number, b: number): number {
    return a + b;
  }
  

  const addArrow = (a: number, b: number): number => a + b;
  
  console.log("Traditional:", add(2, 3)); 
  console.log("Arrow:", addArrow(2, 3));  
  

  const getUser = (): { name: string; age: number } => ({
    name: "Jinendra",
    age: 24
  });
  
  console.log(getUser());
  
  