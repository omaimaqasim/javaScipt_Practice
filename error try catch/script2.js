let base = prompt("Enter base number:");
let exponent = prompt("Enter exponent number:");

base = parseInt(base);
exponent = parseInt(exponent);

try {

  // Validate numbers
  if (isNaN(base) || isNaN(exponent)) {
    throw new Error("❌ Please enter valid numbers!");
  }

  // Validate exponent
  if (exponent < 0) {
    throw new Error("❌ Negative exponents are not allowed!");
  }

  // Calculate power
  let result = base ** exponent;

  console.log("✅ Result is:", result);

} catch (error) {

  console.log(error.message);

} finally {

  console.log("🔚 Calculation complete.");

}