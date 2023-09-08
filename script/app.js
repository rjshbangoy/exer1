function displaySum() {
  let firstNum = Number(document.getElementById('num1').value);
  let secondNum = Number(document.getElementById('num2').value);
  
  let total = firstNum + secondNum;
  let sum = document.getElementById("sum");
  sum.innerHTML = ` ${firstNum} + ${secondNum}, equals to ${total}`;
  let res1 = document.getElementById("res1");
  res1.style.display = "block";
}

function displayProduct() {
  let firstNum = Number(document.getElementById('num1').value);
  let secondNum = Number(document.getElementById('num2').value);

  let total = firstNum * secondNum;
  let product = document.getElementById("product");
  product.innerHTML = ` ${firstNum} + ${secondNum}, equals to ${total}`;
  let res2 = document.getElementById("res2");
  res2.style.display = "block";
}
