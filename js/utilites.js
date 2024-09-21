function getInputByValue(id) {
    const value = document.getElementById(id).value;
    const valueNumber = parseFloat(value);
    return valueNumber;
}

function showItems (id){
    document.getElementById('expense-form').classList.add('hidden');
    document.getElementById('calculate').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('results').classList.add('hidden');
    // show section
    document.getElementById(id).classList.remove('hidden');
}

// function innerText to number

function getTextByNumber (id){
    const text = document.getElementById(id).innerText;
    // const textNumber = parseFloat(text);
    return text;
}