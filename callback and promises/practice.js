
console.log("get user with callback\n");

function get_user(id,name,callback) {
    let user = {id:id,name:name};
    callback(user);
}

get_user(22,"zein",function (user) {
    console.log(user.name, user.id)
})


console.log("get user with promise\n")

function get_p_user(id,name) {
        let user = {id:id,name:name};
        let myuser_promise = new Promise((resolve, reject) => {
            if (user.id==22 && user.name =="zein") {
            //   remember this resolve only take one argument
                resolve(user)
            }
            else{
                reject("enter correct user id and name");
            }
        })

        myuser_promise
        .then((u)=>{
            console.log(u.id,u.name)
        }).catch((e)=>{
             console.log(e)
        })
}

get_p_user(22,"zein");