const income1 = document.getElementById('income');
const income2 = document.getElementById('income-2');
const incomeTotal = document.querySelector('.income-total');
const incomeSum = document.querySelector('.incomeSum');
const rent = document.getElementById('rent');
const electricity = document.getElementById('electricity');
const water = document.getElementById('water'); 
const gas = document.getElementById('gas');
const groceries = document.getElementById('groceries');
const eatingOut = document.getElementById('eating-out');
const carPayment = document.getElementById('car-payment');
const carInsurance = document.getElementById('insurance'); 
const carGas = document.getElementById('car-gas'); 
const creditCard = document.getElementById('credit-card');
const studentLoan = document.getElementById('student-loan');
const personalLoan = document.getElementById('personal-loan');
const expenseTotal = document.querySelector('.expenses-total');
const expenseSum = document.querySelector('.expenseSum');
let housingTotal = 0;
let foodTotal = 0;
let transportationTotal = 0;
let debtTotal = 0;
let expensesTotal = 0;

const updateIncome = () => {
  getIncomeTotal();
};
const updateExpense = () => { 
  getExpenseTotal();
};

income1.addEventListener('input', updateIncome);
income2.addEventListener('input', updateIncome);
rent.addEventListener('input', updateExpense);
electricity.addEventListener('input', updateExpense);
water.addEventListener('input', updateExpense);
gas.addEventListener('input', updateExpense);
groceries.addEventListener('input', updateExpense);
eatingOut.addEventListener('input', updateExpense);
carPayment.addEventListener('input', updateExpense);
carInsurance.addEventListener('input', updateExpense);
carGas.addEventListener('input', updateExpense);
creditCard.addEventListener('input', updateExpense);
studentLoan.addEventListener('input', updateExpense);
personalLoan.addEventListener('input', updateExpense);


const getIncomeTotal = () => {
  const income1Value = parseFloat(income1.value) || 0;
  const income2Value = parseFloat(income2.value) || 0; 
  const total = income1Value + income2Value; 

  incomeTotal.innerText = `$${total.toFixed(2)}`;
  incomeSum.innerText = incomeTotal.innerText;
};
const getHousingTotal = () => {
  const rentValue = parseFloat(rent.value) || 0;
  const electricityValue = parseFloat(electricity.value) || 0;
  const waterValue = parseFloat(water.value) || 0;
  const gasValue = parseFloat(gas.value) || 0;
  housingTotal = rentValue + electricityValue + waterValue + gasValue;
};
const getFoodTotal = () => {
  const groceriesValue = parseFloat(groceries.value) || 0;
  const eatingOutValue = parseFloat(eatingOut.value) || 0;
  foodTotal = groceriesValue + eatingOutValue;
};
const getTransportationTotal = () => {
  const carPaymentValue = parseFloat(carPayment.value) || 0;
  const carInsuranceValue = parseFloat(carInsurance.value) || 0;
  const carGasValue = parseFloat(carGas.value) || 0;
  transportationTotal = carPaymentValue + carInsuranceValue + carGasValue;
};
const getDebtTotal = () => {
  const creditCardValue = parseFloat(creditCard.value) || 0;
  const studentLoanValue = parseFloat(studentLoan.value) || 0;
  const personalLoanValue = parseFloat(personalLoan.value) || 0;
  debtTotal = creditCardValue + studentLoanValue + personalLoanValue;
};

const getExpenseTotal = () => {
  getHousingTotal();
  getFoodTotal();
  getTransportationTotal();
  getDebtTotal();
  expensesTotal = housingTotal + foodTotal + transportationTotal + debtTotal;
  expensesTotal = expensesTotal.toFixed(2);

  expenseTotal.textContent = `$${expensesTotal}`;
  // expenseSum.textContent = expenseTotal.textContent;
};