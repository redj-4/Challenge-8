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

  //Task 3: Arrow Functions
// Arrow function to calculate the service fee based on the amount and service type.
const calculateServiceFee = (amount, serviceType) => {
    let feeRate = 0; // Initialize the fee rate
  
    // Set fee rate based on the provided service type
    if (serviceType === "Premium") {
      feeRate = 0.15;
    } else if (serviceType === "Standard") {
      feeRate = 0.10;
    } else if (serviceType === "Basic") {
      feeRate = 0.05;
    }
  
    // Calculate the fee by multiplying the amount by the fee rate.
    const fee = amount * feeRate;
    
    // Return the service fee formatted to two decimal places.
    return `Service Fee: $${fee.toFixed(2)}`;
  };
  
  // Test cases
  console.log(calculateServiceFee(200, "Premium"));  // Expected output: "Service Fee: $30.00"
  console.log(calculateServiceFee(500, "Standard")); // Expected output: "Service Fee: $50.00"

  //Task 4: Parameters and Arguments 

// Function to calculate the total rental cost for a car rental.
function calculateRentalCost(days, carType, insurance = false) {
    let dailyRate = 0; // Initialize daily rate based on car type
  
    // Determine the daily rate based on the provided car type.
    if (carType === "Economy") {
      dailyRate = 40;
    } else if (carType === "Standard") {
      dailyRate = 60;
    } else if (carType === "Luxury") {
      dailyRate = 100;
    }
  
    // Calculate the base cost for the rental period.
    let totalCost = dailyRate * days;
  
    // If insurance is opted, add $20 per day.
    if (insurance) {
      totalCost += 20 * days;
    }
  
    // Return the formatted total rental cost.
    return `Total Rental Cost: $${totalCost}`;
  }
  
  // Test cases
  console.log(calculateRentalCost(3, "Economy", true));  // Expected output: "Total Rental Cost: $180"
  console.log(calculateRentalCost(5, "Luxury", false));  // Expected output: "Total Rental Cost: $500"