// total ashon
const ashon = document.getElementById("total-seat");
let totalSeat = parseInt(ashon.innerText);
// total tk
const totalTk = document.getElementById("total-price");
let totalprice = parseInt(totalTk.innerText);
// all btn
const seat = document.getElementsByClassName("btn-seat");
console.log(seat);
// seat amount
const seatAmout = document.getElementById("seat-amount");

// dynamic div
const dynamicSeatdetails = document.querySelector(".dynamic");
// cupon-btn
const disableBtn = document.getElementById("cupon-btn");

// input value
const inputField = document.getElementById("int");
// grant total
const grantTotal = document.getElementById("grand-total");
// discount tk
const discountTk = document.getElementById("discount-tk");
// cupon-field
const cuponField = document.getElementById("cupon-field");
// next btn
const nextBtn = document.getElementById("nx");
// phn nmbr
const phnBtn = document.getElementById("nmbr");


let counter = 0;
let counterArr = [];


for (let item of seat) {
    item.addEventListener("click", function (e) {


        counter = counter + 1;
        



        if (counter <= 4) {

            
            if(!counterArr.includes(item.innerText)){
                counterArr.push(item.innerText);
                item.style.backgroundColor = "#1DD100";

                console.log(counterArr);


            totalSeat = totalSeat - 1;
            // total ashon
            ashon.innerText = totalSeat;
            // total seat kotogulo
            seatAmout.innerText = 40 - totalSeat;
            // total price without cupon
            totalprice = totalprice + 550;
            totalTk.innerText = totalprice;
            console.log(totalprice);

            let totalRemain = 40;
            totalRemain = totalRemain - totalSeat;

            const div = document.createElement("div");
            div.className = "flex justify-between";
            div.innerHTML = `
            <p>${e.target.innerText}</p>
            <p>Economy</p>
            <p>550</p>
            `;
            dynamicSeatdetails.appendChild(div);


            // Discount function
            if (totalRemain === 4) {
                disableBtn.removeAttribute("disabled");
                
            }
            }else{
                alert("Already Selected");
                counter -=1;

            }


        } else {
            alert("No More Seat");
            
        }

        nextBtn.removeAttribute("disabled");
    });
}

// cupon function

function cupon() {
    let totalnum = 2200;

    if (inputField.value === "NEW15") {
        const discountPrice = (totalnum * 15) / 100;
        grantTotal.innerText = 2200 - discountPrice;

        discountTk.innerHTML = `
        <h1>Discount Price</h1>
        <h1>BDT ${discountPrice}</h1>
        `;
        cuponField.remove();
    } else if (inputField.value === "Couple20") {
        const discountPrice = (totalnum * 20) / 100;
        grantTotal.innerText = 2200 - discountPrice;

        discountTk.innerHTML = `
        <h1>Discount Price</h1>
        <h1>BDT ${discountPrice}</h1>
        `;
        cuponField.remove();
    }

    inputField.value = "";
}

// contact function
console.log(phnBtn.value.trim());