document.getElementById("calculate").addEventListener("click", function () {
  // total income
    const income = getInputByValue("income");
    // total expense
    const software = getInputByValue("software");
    const courseFee = getInputByValue("courses");
    const internetFee = getInputByValue("internet");

    const totalExpense = software + courseFee + internetFee;

    const totalExpenseValue = document.getElementById("total-expenses");
    totalExpenseValue.innerText = totalExpense.toFixed(2);
    //  use calculate button
    const availableBalance = income - totalExpense;
    const balance = document.getElementById("balance");
    balance.innerText = availableBalance.toFixed(2);

    // history section

    const historySection = document.getElementById('history-list');

    const newHistory = document.createElement('div')
    newHistory.className = 'bg-white p-3 rounded-xl border-l-2 border-solid border-indigo-500'
    newHistory.innerHTML = `
        <div>
          <p class="text-xs text-gray-500 font-medium">${new Date().toLocaleDateString()}</p>
          <p class = "text-sm font-light">Income ${income} :</p>
          <p>Expense ${totalExpense} :</p>
          <p> Balance ${availableBalance} :</p>
        </div>
    `
    historySection.appendChild(newHistory)

    document
        .getElementById("calculate-savings")
        .addEventListener("click", function () {

      const saving = getInputByValue("savings");

      const afterSavingBalance = (availableBalance * saving) / 100 ;

      const savingBalance = document.getElementById('savings-amount');
      savingBalance.innerText = afterSavingBalance.toFixed(2)
      
      const remainingBalance = availableBalance - afterSavingBalance;

      const remainingAmount = document.getElementById('remaining-balance');
      remainingAmount.innerText = remainingBalance.toFixed(2)
    });

});


