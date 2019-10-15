const totalBill = document.querySelector(".totalinput"),
    theBill = document.querySelector(".theBill"),
    split = document.querySelector(".splitinput"),
    tip = document.querySelector(".tipinput");

let isDown = false;


function updateAll(e) {
    if (e) e.preventDefault();
    updateSplit();
    if (!totalBill.value) return;

    let total = (totalBill.value / Math.round(split.value)).toFixed(2);
    let totaltip;

    if(tip.value < 10){
        totaltip = (total * parseFloat(`0.0${tip.value}`)).toFixed(2);
    } else if (tip.value > 99) {
        totaltip = (total * parseFloat(`${tip.value / 100}`)).toFixed(2);
    } else {
        totaltip = (total * parseFloat(`0.${tip.value}`)).toFixed(2);
    }

    document.querySelector(".totalamount").innerHTML = total + " €";

    document.querySelector(".tiplabel").innerHTML = "Tip: " + tip.value + "%";
    document.querySelector(".tipamount").innerHTML = totaltip + " €";
}

function updateSplit () {
    document.querySelector(".splitlabel").innerHTML = "Split (" + split.value +  " of people):";
}


totalBill.addEventListener("input", updateAll);

tip.addEventListener("mousemove", () => {if (!isDown) return;updateAll();});
tip.addEventListener("mousedown", () => {isDown = true;});
tip.addEventListener("mouseup", () => {isDown = false;});
tip.addEventListener("mouseleave", () => {isDown = false;});

split.addEventListener("mousemove", () => {if (!isDown) return;updateAll();});
split.addEventListener("mousedown", () => {isDown = true;});
split.addEventListener("mouseup", () => {isDown = false;});
split.addEventListener("mouseleave", () => {isDown = false;});

