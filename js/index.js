setInterval(updateClock, 1000);
function updateClock() {
  const clock = document.querySelector(".time");
  clock.innerText = new Date().toLocaleTimeString();
}

document
  .querySelector(".header_burger")
  .addEventListener("click", function (e) {
    e.preventDefault();
    if (this.classList.contains("is-active")) {
      this.classList.remove("is-active");
      document.querySelector(".js_menu").classList.remove("active");
    } else {
      this.classList.add("is-active");
      document.querySelector(".js_menu").classList.add("active");
    }
  });

  const currencyEl_one = document.getElementById("currency-one");
  const amountEl_one = document.getElementById("amount-one");
  const currencyEl_two = document.getElementById("currency-two");
  const amountEl_two = document.getElementById("amount-two");
  const rateEl = document.getElementById("rate");
  const swap = document.getElementById("swap");
  
  function calculate() {
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;
  
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
      .then((res) => res.json())
      .then((data) => {
        const rate = data.rates[currency_two];
        rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
        amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
      });
  }
  
  currencyEl_one.addEventListener("change", calculate);
  amountEl_one.addEventListener("input", calculate);
  currencyEl_two.addEventListener("change", calculate);
  amountEl_two.addEventListener("input", calculate);
  
  swap.addEventListener("click", () => {
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate();
  });
  