let menu=document.getElementById("menu-bar")

let close=document.getElementById("close")

let sidenavbar=document.getElementById("sidenavbar")

menu.addEventListener("click",function()
{
  sidenavbar.style.left="0"
})

close.addEventListener("click",function()
{
  sidenavbar.style.left="-60%"
})





