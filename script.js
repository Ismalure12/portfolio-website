const navigation=document.querySelector(".nav")
const menu=document.querySelector(".menu")
const nav=document.querySelector(".nav")
const menuitems=document.querySelectorAll(".nav-item")

menu.addEventListener("click",()=>{
  navigation.classList.toggle("open")
})
navigation.addEventListener("click",()=>{
  navigation.classList.remove('open')
}
)

nav.addEventListener("click",(e)=>{
 for(let i=0;i<menuitems.length;i++){
  menuitems[i].classList.remove('active')
 }
 e.target.classList.add("active")
//  if(e.target===menu){
//   e.target.classList.add("active")
//  }
})
const sendEmail=()=>{
  Email.send({
    Host : "smtp.gmail.com",
    Username : "bysalman5@gmail.com",
    Password : "salman123",
    To : 'bysalman5@gmail.com',
    From : document.getElementById("email"),
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert("message sent successfully")
);

}