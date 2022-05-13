if (window.location.href.search("cart") != -1) {
  const getParent = (element) => {
    const par = element.parentNode.parentNode.parentNode;
    return par;
  };

  const getPrice = (element) => {
    const price = element
      .querySelectorAll(".align-middle")[1]
      .innerText.split("$")[1];
    return price;
  };

  const getNubmer = (element) => {
    return element.parentNode.querySelector(".form-control").value;
  };

  const getSummAll = (element) => {
    let sum = 0;
    element.parentNode.querySelectorAll("tr").forEach((item) => {
      const price = +item
        .querySelectorAll(".align-middle")[3]
        .innerText.split("$")[1];
      sum += price;
    });
    return sum;
  };

  document.querySelectorAll(".btn-sm").forEach((btn) => {
    btn.onclick = (e) => {
      const element = getParent(e.currentTarget);
      const price = +getPrice(element);
      const number = +getNubmer(e.currentTarget);
      const total = price * number;
      element.querySelectorAll(".align-middle")[3].innerText = "$".concat(
        total
      );
      const sumTotal = getSummAll(element);
      console.log(sumTotal);
      document.querySelectorAll(".font-weight-medium")[1].innerText =
        "$".concat(sumTotal);
      document.querySelectorAll(".font-weight-bold")[3].innerText = "$".concat(
        sumTotal + 10
      );
    };
  });

  document.querySelector(".submit__cart").onclick = (e) => {
    const total = document
      .querySelectorAll(".font-weight-bold")[3]
      .innerText.split("$")[1];
    window.location.href = `/checkout?money=${total}`;
  };
}
