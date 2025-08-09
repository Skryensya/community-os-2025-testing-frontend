// importa la función calculateDiscount usando ESM Modules
import { calculateDiscount } from "../src/calculateDiscount.js";

// Caso donde la diferencia es más de 15 días
function testCase1() {
  // ARRANGE: Declara variables daysDiff y expectedResult
  const daysDiff = 20;
  const expectedResult = 30;

  // ACT: Ejecuta la función calculateDiscount con la variable daysDiff. guarda el resultado en result
  const result = calculateDiscount(daysDiff);

  // ASSERT
  if (result === expectedResult) {
    console.log("✅ Test Case 1 passed");
  } else {
    console.error(
      `❌ Test Case 1 failed: expected ${expectedResult}, got ${result}`
    );
  }
}

// Caso donde la diferencia es entre 3 y 15 días
function testCase2() {
  //Implementa igual que en test case 1
  const daysDiff = 8;
  const expectedResult = 15;

  const result = calculateDiscount(daysDiff);

  if (result === expectedResult) {
    console.log("✅ Test Case 2 passed");
  } else {
    console.error(
      `❌ Test Case 2 failed: expected ${expectedResult}, got ${result}`
    );
  }
}

//Ejecución de casos
testCase1();
testCase2();
