

let next = document.getElementById('next');


next.addEventListener("click",function(e){

e.preventDefault();

let email = document.getElementById('email').value;
let password = document.getElementById('password').value;

console.log(email)

if (email=='') {
		swal({
  title: "Email warning!",
  text: "please enter your email !",
  icon: "warning", //note you can write here error or warning or info 
  button: "ok",
})
}else if(password==""){
			swal({
  title: "Password warning!",
  text: "please enter your password  !",
  icon: "warning", //note you can write here error or warning or info 
  button: "ok",
})
}else if(password=="12345678"){
		swal({
  title: "normal password!",
  text: "please provide a strong password !",
  icon: "warning", //note you can write here error or warning or info 
  button: "ok",
})
}else if(password.length<8){
		swal({
  title: "password issue!",
  text: "password should be at last 8 charckter!",
  icon: "warning", //note you can write here error or warning or info 
  button: "ok",
})	
}else{
		swal({
  title: "Good job!",
  text: "congratulation!",
  icon: "success", //note you can write here error or warning or info 
  button: "ok",
})	
}



})



