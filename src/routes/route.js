const express = require("express");
const router = express.Router();
const lodash = require("lodash");

// -------------------------- 8th aug assignment part 1-----------------------------//

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let result = lodash.chunk(months, [(size = 4)]);
console.log("lodash example is", result);

let oddno = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
let result2 = lodash.tail(oddno);
console.log("tail example is", result2);

let arrays = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [7, 8];
let array4 = [9, 10, 11];
let array5 = [12, 13, 14, 15];
let result3 = lodash.union(arrays, array2, array3, array4, array5);
console.log("union example is", result3);

let pairs = [
  ["horror", "The Shining"],
  ["drama", "Titanic"],
  ["thriller", "Shutter Island"],
  ["fantasy", "Pans Labyrinth"],
];
let result4 = lodash.fromPairs(pairs);
console.log("from paris example is", result4);

// --------------------------- assignment 8 aug part 2-----------------------------//

let movie = [
  {
    id: 1,
    name: "The Shining",
  },
  {
    id: 2,
    name: "Incendies",
  },
  {
    id: 3,
    name: "Rang de Basanti",
  },
  {
    id: 4,
    name: "Finding Nemo",
  },
];
let movie2 = [
  "Rang de basanti",
  "The shining",
  "Lord of the rings",
  "Batman begin",
];

// question - 1st
router.get("/movies", function (req, res) {
  res.send(movie2);
});

// question - 2nd and 3rd
router.get("/movies/:index", function (req, res) {
  let index = req.params.index;
  if (index > movie2.length - 1) {
    return res.send("plzz provide a valid index");
  }
  return res.send(movie2[index]);
});

// question - 4th
router.get("/films", function (req, res) {
  res.send(movie);
});

// question - 5th
router.get("/films/:filmId", function (req, res) {
  let filmid = req.params.filmId;
  for (let i = 0; i < movie.length; i++) {
    if (movie[i].id == filmid) {
      return res.send(movie[i]);
    }
  }
  return res.send(" No movie exists with this id");
});

module.exports = router;
