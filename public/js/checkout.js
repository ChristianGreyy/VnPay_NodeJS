if (location.href.search("checkout") != -1) {
  document.querySelector(".submit__checkout").onclick = async (e) => {
    let amount = document
      .querySelectorAll(".font-weight-bold")[3]
      .innerText.split("$")[1];
    amount = +amount;
    amount *= 100;
    console.log(amount);
    const res = await fetch("/transaction/create_payment_url", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: amount * 23,
      }),
    });
    const data = await res.json();
    console.log(data);
    window.location.href = data.url;
  };
}
