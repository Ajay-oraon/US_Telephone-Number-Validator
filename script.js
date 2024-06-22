const input=document.getElementById("user-input");
const check=document.getElementById("check-btn");
const clear=document.getElementById("clear-btn");
const result=document.getElementById("results-div");


check.onclick=()=>{
  const regExp= /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  if(input.value==""){
      return alert("Please provide a phone number")
  }
  let item=document.createElement("li");
  result.appendChild(item);

   if(regExp.test(input.value)){
    item.innerHTML=`Valid US number: ${input.value}`
    item.classList.add("valid");
    input.value = "";
  }
  else {
    item.innerHTML=`Invalid US number: ${input.value}`
    item.classList.add("invalid");
    input.value = "";
  }
}

clear.onclick=()=>{
  result.innerHTML=""
}