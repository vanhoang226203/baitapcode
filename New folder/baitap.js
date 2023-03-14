function login(){
    let username= document.getElementById("admin").value;
    let password= document.getElementById("user").value;
    if (username=== "admin" && password=== "123"){
        alert("đăng nhập tài khoản admin");

    } if (username==="user"&&password==="123"){
        alert("đăng nhập tài khoản user")
    }
    else alert("đăng nhập không thành công");

}
