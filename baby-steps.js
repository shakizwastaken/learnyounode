console.log(
  process.argv.filter((el, i) => i > 1).reduce((a, b) => Number(a) + Number(b))
);
