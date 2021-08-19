function sliderValue() {
    const sliderValue = Number(document.querySelector('#range').value);
    const toggle = document.querySelector('.checkbox');

    let pageNumber = document.querySelector('.page-numbers');
    let pricingAmount = Number(document.querySelector('.pricing-amount'));

    switch (sliderValue) {
        case 0 : {
            pageNumber.innerText = "10k";
            pricingAmount.innerText = "8";
            if(toggle.checked) console.log('test');
        }
            break;
        case 1 : {
            pageNumber.innerText = "50k";
            pricingAmount.innerText = "12";
        }
            break;
    }
}

