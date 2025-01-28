const income1 = document.getElementById('income');
const income2 = document.getElementById('income-2');
const incomeTotal = document.querySelector('.income-total');
const incomeSum = document.querySelector('.incomeSum');

const updateIncome = () => {
  getIncomeTotal();
};
const updateIncomeSum = () => {
  getIncomeSum();
};

income1.addEventListener('input', updateIncome);
income2.addEventListener('input', updateIncome);

const getIncomeTotal = () => {
  const income1Value = parseFloat(income1.value) || 0;
  const income2Value = parseFloat(income2.value) || 0; 
  const total = income1Value + income2Value; 

  incomeTotal.innerText = `$${total.toFixed(2)}`;
  incomeSum.innerText = incomeTotal.innerText;
};
