//cretaed a fake login api
function loginuser(username){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(username === "Jinendra"){
                resolve({userId : 101})
            }else{
                reject(new Error("Invalid username"))
            }
        }, 1000)
    })
}

//now fetching the user profile wiht user id\
function getUserProfile(userId){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({
                id: userId,
                name:"Jinendra Dodiya",
                city:"Indore"
            })
        },1000)
    })
}

//async function to handle login and fetch profile

async function showUserProfile(username) {
    try {
        console.log("Logging in.....");
        const loginData = await loginuser(username)
        console.log("Logged in! USer ID:",loginData.userId);

        console.log("Fetching user profile.....");
        const profile = await getUserProfile(loginData.userId)

        console.log("User Profile :", profile);
    } catch (error) {
        console.log("Error : ", error.message);
    }finally{
        console.log("Process Complete");
    }
    
}

showUserProfile("Jinendra")

// showUserProfile("abc")

