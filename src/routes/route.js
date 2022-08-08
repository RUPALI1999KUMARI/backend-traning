const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();
const lodash= require("lodash")
const logger = require("../logger/logger.js");
const assignment = require("../util/helper.js");
const formatter = require("../validator/formatter.js");
// <<<<<<< Updated upstream

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

   
    res.send('My second ever api!')})

router.get("/test-me", function (req, res) {
  console.log("My batch is", abc.name);

  // 8th aug assignment

  let months =['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 
  'October', 'November', 'December'];
  let result=lodash.chunk(months, [size=4]);
  console.log("lodash example is" ,result);


  let oddno=[1,3,5,7,9,11,13,15,17,19]
  let result2=lodash.tail(oddno)
  console.log("tail example is",result2)


  let arrays= [1,2,3];
  let array2=[4,5,6];
  let array3=[7,8];
  let array4=[9,10,11]
  let array5=[12,13,14,15]
   let result3=lodash.union(arrays,array2,array3,array4,array5);
  console.log("union example is",result3)


  let pairs= [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]];
   let result4=lodash.fromPairs(pairs)
   console.log("from paris example is",result4)

  abc.printName();

  logger.logger();

  assignment.assignment();

  formatter.myformatter();

  res.send("My second ever api!");
});


router.get("/test-you", function (req, res) {
  res.send("This is the second routes implementation");
});
// >>>>>>> Stashed changes


router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})

module.exports = router;