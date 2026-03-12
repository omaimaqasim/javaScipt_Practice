
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
    
}