let assignment = function () {
  let date = new Date().getMonth() + 1;
  let month = new Date().getDate();
  let year = new Date().getFullYear();
  console.log("plutonium, W3D5, the topic for today is Nodejs module system");
  console.log(`today date is ${date}/${month}/${year}`);
};

module.exports = { assignment };
