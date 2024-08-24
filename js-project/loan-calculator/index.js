function calculatorLoan() {
    loanAmountValue = document.getElementById("loan-amount").value;
    interestRataValue = document.getElementById("interest-rate").value;
    monthsToPayValue = document.getElementById("months-to-pay").value;

    interest = (loanAmountValue * (interestRataValue * .01)) / monthsToPayValue;

    monthlyPayment = (loanAmountValue / monthsToPayValue + interest).toFixed(2);

    document.getElementById("payment").innerHTML = `Monthly Payment: ${monthlyPayment}`;
}