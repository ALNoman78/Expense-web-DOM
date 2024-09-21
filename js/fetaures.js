document.getElementById("calculate").addEventListener("click", function () {
    // showItems('expense-form')
    showItems('calculate')
    // showItems("results");
    document.getElementById('results').classList.remove('hidden')
    document.getElementById('expense-form').classList.remove('hidden')
});

document.getElementById("history-tab").addEventListener('click', function(){
    showItems('history-section')
});

document.getElementById('assistant-tab').addEventListener('click', function (){
    showItems('expense-form');
    document.getElementById('calculate').classList.remove('hidden')
})