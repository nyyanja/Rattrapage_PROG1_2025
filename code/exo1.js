
export function capitalizeNames(input= []) {
  const expected = [];
  for (let i = 0; i < input.length; i++) {
    expected.push(input[i][0].toUpperCase() + input[i].slice(1).toLowerCase());
  }
  return expected;
}
capitalizeNames(["jo", "nelson", "jurie"]);
capitalizeNames(["KARLY", "DANIEL", "KELSEY"]);