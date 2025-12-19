 
const BASE_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const msg=document.querySelector(".msg")
const dropdowns=document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form button")
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");

for(let select of dropdowns){
    for(currCode in countryList){
        let newOption=document.createElement("option");
        newOption.innerText=currCode;
        newOption.value=currCode;
        if(select.name=="from" && currCode=="USD")
            newOption.selected="selected";
        else if(select.name=="to" && currCode=="INR")
            newOption.selected="selected";
        select.append(newOption);
    }
select.addEventListener("change",(evt)=>{
    updateFlag(evt.target);
});
}
const updateFlag=(element)=>{
    // console.log(element.value);
    currCode=element.value; // whole country code
    let countryCode=countryList[currCode];//required country code i.e, 2 code
    // console.log(countryCode);
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newSrc;

}

// btn.addEventListener("click",async (evt)=>{

//     evt.preventDefault();
//     let amount=document.querySelector(".amount input");
//     let amtVal=amount.value;
//     if(amtVal==="" || amtVal<1){
//         amtVal=1;
//         amount.value="1";
//     }

//     // const URL=`${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
// const URL=`${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;


//     let response= await fetch(URL);
//     let data=await response.json();
//     let rate = data[toCurr.value.toLowerCase()];
//     console.log(rate);
// });

btn.addEventListener("click", async (evt) => {
    evt.preventDefault();

    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;

    if (amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amount.value = "1";
    }

    const from = fromCurr.value.toLowerCase();
    const to = toCurr.value.toLowerCase();
    const URL = `${BASE_URL}/${from}.json`;
    const response = await fetch(URL);
    const data = await response.json();
    const rate = data[from][to];
    const result = amtVal * rate;
    msg.innerText=`${amtVal} ${fromCurr.value}=${result}${toCurr.value}`;
    // console.log(`Rate: ${rate}`);
    // console.log(`Converted Amount: ${result}`);
});
