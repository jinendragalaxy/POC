function demo() {
    let person = {
      name: "Amit"
    };
  
    // Abhi person reachable hai
  
    person = null;
    // Ab 'Amit' wala object kisi variable se linked nahi hai garbage collector usse hata dega
  }
  