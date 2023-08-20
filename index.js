function priceCalculator(price, productName) {

    const selectedItemContainer = document.getElementById("selected-items");
    const count = selectedItemContainer.childElementCount;
    const itemName = document.getElementById(productName).innerText;
    const p = document.createElement("p");
    p.innerHTML = `${count + 1}. ${itemName}`;
    selectedItemContainer.appendChild(p);



    const productPrice = document.getElementById(price);
    const productPriceText = productPrice.innerText;
    const productPriceNumber = parseFloat(productPriceText);
    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const totalPriceNumber = parseFloat(totalPriceText);
    totalPrice.innerText = totalPriceNumber + productPriceNumber;



    const priceAfterDiscount = document.getElementById('final-total');
    const priceAfterDiscountText = priceAfterDiscount.innerText;
    const priceAfterDiscountNumber = parseFloat(priceAfterDiscountText);
    priceAfterDiscount.innerText = totalPrice.innerText;




    document.getElementById("purchase-btn").disabled = false;
    document.getElementById("purchase-btn").classList.remove('bg-gray-300');
    document.getElementById("purchase-btn").classList.add('bg-[#E527B2]');



    if (totalPrice.innerText >= 200) {
        document.getElementById('cupon-btn').disabled = false;
        document.getElementById("cupon-btn").classList.remove('bg-gray-300');
        document.getElementById("cupon-btn").classList.add('bg-[#E527B2]');


    }

    document.getElementById('cupon-btn').addEventListener('click', function () {

        const couponCode = document.getElementById('cupon-input');
        const couponCodeText = couponCode.value;

        const discount = document.getElementById('discount');
        const discountText = discount.innerText;
        const discountNumber = parseFloat(discountText);


        if (couponCode.value == 'SELL200') {

            const percentage = (totalPrice.innerText * 20) / 100;
            discount.innerText = percentage;
            priceAfterDiscount.innerText = totalPrice.innerText - percentage;
        }
        else {
            alert('Wrong Coupon');
        }

    })

}




