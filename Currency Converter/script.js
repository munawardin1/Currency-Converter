// https://latest.currency-api.pages.dev/v1/currencies/usd.json




let amount = document.querySelector(".amount input");
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const BASE_URL = "https://latest.currency-api.pages.dev/v1/currencies/";
  let fromCurr = document.querySelector(".from select");
  let toCurr = document.querySelector(".to select");
  let msg = document.querySelector(".msg")

for(let select of dropdowns){
    for(let code in countryList){
        
    let newOption = document.createElement("option")
    newOption.innerText = code;
    newOption.value=code;
    if(select.id==="from" && code ==="USD"){
        newOption.selected = "selected";
    }
    else if(select.id==="to" && code === "PKR"){
        newOption.selected = "selected"
     
    }
     
    select.append(newOption); 
     
}

const updateFlag=((element)=>{
let currCode =  element.value;
let countryCode =countryList[currCode]
let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
let img= element.parentElement.querySelector("img");
img.src =newSrc;

})
select.addEventListener("change",(evt)=>{
    updateFlag(evt.target);
    amount.value = 1;
    convert();
})

 updateFlag(select);
 
    
}

async function convert() {
  
  const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;

  let response = await fetch(URL);
  let data = await response.json();
  // console.log(" URL response :",data);

let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
  console.log(rate);
  let amountVal = amount.value;
  let finalVal = amount.value*rate;
  let finalResult = finalVal.toFixed(2);
  msg.innerText = `${amountVal} ${fromCurr.value} = ${finalResult} ${toCurr.value}`
}

amount.addEventListener("input",(evt)=>{
  // evt.preventDefault();
  convert();

});
btn.addEventListener("click",(evt)=>{
  evt.preventDefault();
  convert();
})
 window.addEventListener("load", () => {
      amount.value = 1;
      convert();
    });

