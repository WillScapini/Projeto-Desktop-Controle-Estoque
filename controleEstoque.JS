
let ul = document.querySelector('ul');

let listSales = [];

let quantityTotal = 0;
let quantityTotalFanta = 0;
let quantityTotalDolly = 0;

let costTotalFanta = 0;
let costTotalDolly = 0;

document.querySelector('#send').addEventListener('click', () => {

    let product = document.querySelector('#product').value;
    let quantity = document.querySelector('#quantity').value;
    quantity = Number(quantity);
    let unitaryValue = document.querySelector('#unitary-value').value;
    unitaryValue = Number(unitaryValue)
      
    if (product == 'Dolly' || product == 'Fanta') {
        
        let amount = quantity * unitaryValue;
        let ListAmount = quantity * unitaryValue;

        quantityTotal += quantity;

        let liSales = document.createElement('li');
        let liProduct = document.createElement('p');
        let liQuantity = document.createElement('p');
        let liunitaryValue = document.createElement('p')
        let liAmount = document.createElement('p');

        liProduct.innerHTML = ` &#128073; ${product}`;
        liQuantity.innerHTML = ` &#128073; ${quantity}`;
        liunitaryValue.innerHTML = `&#128073; ${unitaryValue}$`
        liAmount.innerHTML = `&#128073; ${amount.toFixed(2)}$`;

        liSales.appendChild(liProduct);
        liSales.appendChild(liunitaryValue);
        liSales.appendChild(liQuantity);
        liSales.appendChild(liAmount);

        ul.appendChild(liSales);

        document.querySelector('#product').value = '';
        document.querySelector('#quantity').value = '';
        document.querySelector('#unitary-value').value = '';

        listSales.push(ListAmount);

        let salesTottaly = listSales.reduce((accum, sale) => {
            return accum + sale;
        })

        let totally = document.querySelector('#totaly');

        totally.innerHTML = `Custo Total: ${salesTottaly}$ <br> <br> Quantidade Total: ${quantityTotal} `

        if (product == 'Fanta') {

            let balanceFanta = document.querySelector('#fanta-balance');
            quantityTotalFanta += quantity;
            costTotalFanta += (unitaryValue * quantity);
            balanceFanta.innerHTML = `Fanta <br> <br>&#128722;: ${quantityTotalFanta} <br>  <br> &#128176;: ${costTotalFanta.toFixed(2)}$ `

        } else if (product == 'Dolly') {

            let dollyBalance = document.querySelector('#dolly-balance');
            quantityTotalDolly += quantity;
            costTotalDolly += (unitaryValue * quantity);
            dollyBalance.innerHTML = `Dolly <br> <br>&#128722;: ${quantityTotalDolly} <br> <br> &#128176;: ${costTotalDolly.toFixed(2)}$`;
        }

    } else if(product != 'Fanta' || product != 'Dolly') {
        alert('por gentileza faça escolha correta')
    }

})
















