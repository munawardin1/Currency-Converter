const BASE_URL = "https://latest.currency-api.pages.dev/v1/currencies/";

const dropdowns = document.querySelectorAll(".dropdown select")
let fromCurrency = document.querySelector(".from select")
let toCurrency = document.querySelector(".to select")
let amountVal = document.querySelector(".amount input")
let msg = document.querySelector(".msg")
let btn = document.querySelector("form button")




  const convert=async()=>{
    let amount = amountVal.value;
    const  URL = `${BASE_URL}${fromCurrency.value.toLowerCase()}.json`
     console.log(URL)
    let apiResponse = await fetch(URL);
    let data = await apiResponse.json();
    let rate = data[fromCurrency.value.toLowerCase()][toCurrency.value.toLowerCase()]
    console.log(rate);
    let result = amount*rate;
    let finalResult = result.toFixed(2);
    msg.innerText= `${amount} ${fromCurrency.value} = ${finalResult} ${toCurrency.value}`
  }




for (let select of dropdowns){
     for (let code in countryList){
      
      let newOption = document.createElement("option")
      newOption.innerText= code;
      newOption.value=code;
      if(select.id==="from" && code === "USD"){
        newOption.selected="selected"
      }
      else if(select.id==="to" && code === "PKR"){
        newOption.selected="selected"
      }
        select.append(newOption);
     }
     select.addEventListener("change",(evt)=>{
      evt.preventDefault();
      updateFlag(select)
      convert();

     })
   convert();
}



 const  updateFlag=(element)=>{
    let currVal = element.value
    let countryCode = countryList[currVal]
      let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
      let img = element.parentElement.querySelector("img")
      img.src = newSrc;
  }

  
  btn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    convert();
  })