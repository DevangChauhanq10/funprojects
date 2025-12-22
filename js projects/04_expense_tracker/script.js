document.addEventListener("DOMContentLoaded", () => {
  const expenseForm = document.getElementById("expense-form");
  const expenseNameInput = document.getElementById("expense-name");
  const expenseAmountInput = document.getElementById("expense-amount");
  const expenseList = document.getElementById("expense-list");
  const totalAmountDisplay = document.getElementById("total-amount");

  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  let totalAmount = calculateTotal();

  renderExpenses();

  expenseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = expenseNameInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value.trim());

    if (name !== "" && !isNaN(amount) && amount > 0) {
      //“!isNan=Amount should be a number”
      const newExpense = {
        id: Date.now(),
        name: name,
        amount: amount,
      };
      expenses.push(newExpense);
      saveExpensesTolocal();
      renderExpenses();
      updateTotal();

      //clear input
      expenseNameInput.value = "";
      expenseAmountInput.value = "";
    }
  });

  function renderExpenses() {
    expenseList.innerHTML = "";
    expenses.forEach((expense) => {
      const li = document.createElement("li");
      li.innerHTML = `
        ${expense.name} - $${expense.amount}
        <button data-id="${expense.id}">Delete</button>
        `;
      expenseList.appendChild(li);
    });
  }

  function calculateTotal() {
    return expenses.reduce((sum, expense) => sum + expense.amount, 0);
  }
  //reduce ((accumulator, currentvalue) => accumulator + currentvalue, initial value
  function saveExpensesTolocal() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }

  function updateTotal() {
    totalAmount = calculateTotal();
    totalAmountDisplay.textContent = totalAmount.toFixed(2);
  }

  expenseList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const expenseId = parseInt(e.target.getAttribute("data-id"));
      expenses = expenses.filter((expense) => expense.id !== expenseId);

      saveExpensesTolocal();
      renderExpenses();
      updateTotal();
    }
  });
});

//Explanation
// Wait until the entire HTML document is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Grab the expense form element
  const expenseForm = document.getElementById("expense-form");

  // Grab input field for expense name
  const expenseNameInput = document.getElementById("expense-name");

  // Grab input field for expense amount
  const expenseAmountInput = document.getElementById("expense-amount");

  // Grab the list where expenses will be displayed
  const expenseList = document.getElementById("expense-list");

  // Grab the element where total amount will be shown
  const totalAmountDisplay = document.getElementById("total-amount");

  // Get saved expenses from localStorage
  // JSON.parse converts string → array
  // If nothing exists, default to empty array
  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

  // Calculate initial total amount from saved expenses
  let totalAmount = calculateTotal();

  // Render expenses on page load
  renderExpenses();

  // Listen for form submission
  expenseForm.addEventListener("submit", (e) => {
    // Prevents page refresh on form submit, page does NOT refresh JS continues running

    e.preventDefault();

    // Get expense name and remove extra spaces
    const name = expenseNameInput.value.trim();

    // Convert input string to number
    const amount = parseFloat(expenseAmountInput.value.trim());

    // Validation checks
    if (name !== "" && !isNaN(amount) && amount > 0) {
      // “!isNan = Amount should be a number”

      // Create a new expense object
      const newExpense = {
        id: Date.now(), // unique ID using timestamp
        name: name,
        amount: amount,
      };

      // Add new expense to array
      expenses.push(newExpense);

      // Save updated expenses array to localStorage
      saveExpensesTolocal();

      // Re-render expense list
      renderExpenses();

      // Update total amount display
      updateTotal();

      // clear input
      expenseNameInput.value = "";
      expenseAmountInput.value = "";
    }
  });

  // Function to render all expenses in the list
  function renderExpenses() {
    // Clear existing list to avoid duplicates
    expenseList.innerHTML = "";

    // Loop through each expense
    expenses.forEach((expense) => {
      // Create a list item
      const li = document.createElement("li");

      // Insert expense data and delete button
      li.innerHTML = `
        ${expense.name} - $${expense.amount}
        <button data-id="${expense.id}">Delete</button>
        `;

      // Add list item to the expense list
      expenseList.appendChild(li);
    });
  }

  // Function to calculate total expense amount
  function calculateTotal() {
    // reduce loops through expenses and accumulates sum
    return expenses.reduce((sum, expense) => sum + expense.amount, 0);
  }

  // reduce ((accumulator, currentvalue) => accumulator + currentvalue, initial value

  // Save expenses array to localStorage
  function saveExpensesTolocal() {
    // Convert array to string before saving
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }

  // Update total amount displayed on UI
  function updateTotal() {
    // Recalculate total
    totalAmount = calculateTotal();

    // Display total with 2 decimal places
    totalAmountDisplay.textContent = totalAmount.toFixed(2);
  }

  // Event delegation for delete button clicks
  expenseList.addEventListener("click", (e) => {
    // Check if clicked element is a button
    if (e.target.tagName === "BUTTON") {
      // Get expense ID from data attribute
      const expenseId = parseInt(e.target.getAttribute("data-id"));

      // Remove the selected expense from array
      expenses = expenses.filter((expense) => expense.id !== expenseId);

      // Save updated array to localStorage
      saveExpensesTolocal();

      // Re-render expense list
      renderExpenses();

      // Update total amount
      updateTotal();
    }
  });
});
