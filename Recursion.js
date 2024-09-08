function countDownToZero(n) {
    if (n < 0) {
      return;
    } else {
      console.log(n);
      countDownToZero(n - 1);
    }
  }
  countDownToZero(12);
  