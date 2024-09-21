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


  // append history transaction history using append child function
  
  // const appendElement = document.getElementById('results')
  // console.log(appendElement);
  // document.getElementById('history-list').append(appendElement)
