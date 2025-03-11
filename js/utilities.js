
function getInputFieldValuedById(id){
    const inputValue = document.getElementById(id).value 
    return parseFloat(inputValue)
}

function getTextFiledValueById(id){
    const textvalue = document.getElementById(id).innerText
    return parseFloat(textvalue)
}

function showSectionByID(id){
    document.getElementById('donate-section').classList.add('hidden')
    document.getElementById('history-container').classList.add('hidden')

    document.getElementById(id).classList.remove('hidden')
}

function changeBgOfBtn(id){
    document.getElementById('btn-donate').classList.remove('bg-none')
    document.getElementById('btn-history').classList.remove('bg-none')
    document.getElementById(id).classList.add('bg-lime-400')
}

function donate(btnId, cardBalanceId, donateBalanceId, locationId){
    document.getElementById(btnId)
    .addEventListener('click',function(event){
        event.preventDefault()

        let currentBalance = getTextFiledValueById('main-balance')
        
        let noakhaliCurrentBalance = getTextFiledValueById(cardBalanceId)
        let donateAmount = getInputFieldValuedById(donateBalanceId)

        if(currentBalance>= donateAmount && donateAmount>0){

            currentBalance -= donateAmount
            noakhaliCurrentBalance += donateAmount

            document.getElementById('main-balance').innerText = currentBalance
            document.getElementById(cardBalanceId).innerText = noakhaliCurrentBalance
            

            // modal showing 
            const modalCheckbox = document.getElementById("my_modal_6");
            modalCheckbox.checked = true; // Show modal

            // add history
            const location = document.getElementById(locationId).innerText
            const d = new Date();
            console.log(location, d);
            
            const div = document.createElement('div')
            div.classList.add('p-6', 'shadow-lg', 'rounded-lg', 'bg-gray-100');
                div.innerHTML = `
                    <h4 class = 'text-2xl font-bold'>${donateAmount} TK is ${location} </h4>
                    <p>Date: ${d}</p>
                `
                document.getElementById("history-container").appendChild(div)
        }
        else if(donateAmount<1){
            alert('Negetive number not allow')
        }
        else{
            alert('Sorry not enough money')
        }
    })
}
