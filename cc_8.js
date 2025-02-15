//Task 1: Function Declaration 
// Function to calculate an employee's net salary.
// It takes the base salary, bonus, and tax rate as parameters.
function calculateSalary(baseSalary, bonus, taxRate) {
    // Calculate the net salary by adding bonus to base salary,
    // then subtracting the tax calculated on the base salary.
    const netSalary = (baseSalary + bonus) - (baseSalary * taxRate);
    
    // Return the result formatted to two decimal places.
    return `Net Salary: $${netSalary.toFixed(2)}`;
  }
  
  // Test cases
  console.log(calculateSalary(5000, 500, 0.1));  // Expected output: "Net Salary: $5000.00"
  console.log(calculateSalary(7000, 1000, 0.15)); // Expected output: "Net Salary: $6950.00"
  
  //Task 2: Function Expression 
// Declare a function expression to calculate the final price after applying a discount.
const calculateDiscount = function(price, discountRate) {
    // Calculate the discount amount and subtract it from the original price.
    const finalPrice = price - (price * discountRate);
    
    // Return the final price formatted to two decimal places.
    return `Final Price: $${finalPrice.toFixed(2)}`;
  };
  
  // Test cases
  console.log(calculateDiscount(100, 0.2));  // Expected output: "Final Price: $80.00"
  console.log(calculateDiscount(250, 0.15)); // Expected output: "Final Price: $212.50"