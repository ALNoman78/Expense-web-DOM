document.getElementById("calculate").addEventListener("click", function () {
    // showItems('expense-form')
    showItems('calculate')
    // showItems("results");
    document.getElementById('results').classList.remove('hidden')
    document.getElementById('expense-form').classList.remove('hidden')
});

document.getElementById("history-tab").addEventListener('click', function(){
    const styleVariable = document.getElementById('history-tab')
    styleVariable.style.background = 'linear-gradient(to right, #3b82f6, #9333ea)';
    styleVariable.style.color = "#fff"
    const assistantTab =  document.getElementById('assistant-tab');
    assistantTab.style.background = "transparent"
    assistantTab.style.color = "black"
    showItems('history-section');
    document.getElementById('results').classList.remove('hidden')
});

document.getElementById('assistant-tab').addEventListener('click', function (){
    const assistantTab = document.getElementById('assistant-tab');
    assistantTab.style.background = 'linear-gradient(to right, #3b82f6, #9333ea)';
    assistantTab.style.color = "white"

    const historyTab = document.getElementById('history-tab');
    historyTab.style.background = "transparent";
    historyTab.style.color = "black";
    showItems('expense-form');
    document.getElementById('calculate').classList.remove('hidden')
})




