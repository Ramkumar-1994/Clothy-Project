let products=document.getElementById("products")
let search=document.getElementById("search")
let productlist=products.querySelectorAll("div")

search.addEventListener("keyup",function()
{
  let enteredValue=event.target.value.toUpperCase( )

  for(count=0;count<productlist.length;count+=1)
  {
    let productName=productlist[count].querySelector("p").textContent

    if(productName.toUpperCase().indexOf(enteredValue)===-1)
    {
      productlist[count].style.display="none"
    }

    else
    {
      productlist[count].style.display="block"
    }
  }
})



