let myformatter = function () {
  let name = "             functionup         ";
  name = name.trim();
  let upper = name.toUpperCase();
  let lower = name.toLowerCase();
  console.log(upper, lower, name);
};
module.exports = { myformatter };
