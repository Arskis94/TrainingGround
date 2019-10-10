const totalBill = document.querySelector(".totalinput"),
    theBill = document.querySelector(".theBill"),
    split = document.querySelector(".splitinput"),
    tip = document.querySelector(".tipinput");


function updateAll (e) {
    e.preventDefault();
    let total = (totalBill.value / Math.round(split.value)).toFixed(2);
    let totaltip = (total * parseFloat(`1.${tip.value}`)).toFixed(2);
    document.querySelector(".totalamount").innerHTML = total + " €";
    document.querySelector(".tipamount").innerHTML = totaltip + " €";
    console.log(totaltip,split.value)
}

function showTip (e) {
    if (e.mouseup) return;
    console.log("hello", tip.value);
    document.querySelector(".tiplabel").innerHTML = "Tip: " + tip.value;
}

theBill.addEventListener("submit", updateAll);
tip.addEventListener("scroll", showTip);