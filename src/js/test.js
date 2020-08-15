// var num = [1,2,3,10]
// num.forEach(function(cur){
// console.log(cur)
// })
// var newArray = new Array(10)
// var n = 45
// //var domElements = uIController.getDomstrings()

//Future reference
// let myArray = ['I', 'love', 'chocolate', 'frogs'];
// let madeAString = myArray.join(' ');
// console.log(madeAString)
// let splitArr = madeAString.split(' ')
// console.log(splitArr)

// var rangeTest = function (start, end ) {
//     rangeArr = []
//     for (var i = start; i <= end; i++){
//        parseFloat(rangeArr.push(i))

//     }
//   var getEL = rangeArr.find((el) => {
//     var num = 5
//     el === num
//   })
//   console.log(getEL)
//     for (var i = 0; i <= rangeArr.length; i++) {
//         console.log(rangeArr[i])

//         if( rangeArr[i] === 10) {
//             console.log('True')
//             console.log(i)
//         }else {
//        // console.log('not true')
//     }
// }
// }
// rangeTest(1,10)
// console.log('1')
// console.log('2')
// const arr2 = [1,2,3,4,5]
// for (var i = 0; i <= arr2.length; i++){
// const testie = arr2.filter(arr => arr == arr2[i])
// console.log(testie)
// if (testie) {
//     console.log('true')
// } else if (testie === false) {
//     console.log('not true')
// }
// }
function range22(start, end) {
  var secondClass = [];
  // console.log(secondClass)
  for (var j = start; j <= end; j += 0.01) {
    secondClass.push(j.toFixed(2));
  }
  // console.log(secondClass[j])
  var check = secondClass.includes("3.20");
  if (check) {
    //  console.log('it is true')
  } else {
    // console.log('not true')
  }
}

range22(3.0, 3.49);

//1.Needle in an haystack
//   function inArray(needle, haystack) {
//         var count = haystack.length;
//         for (var i = 0; i < haystack.length; i++) {
//             if (haystack[i] === needle){
//                 return true
//             }
//             return false
//         }
//   }

//3.
//  var fruits = ['Apple', 'Banana', 'Mango, Orange', 'Papaya'];
//  /// check if a  values exist in the friuts array
//  if (fruits.indexOf('Mango')) {
//      //Do something here
//  } else {
//      //Do another here
//  }

// Delete elements from an array
const btnTest = document.getElementById("button_test");
btnTest.addEventListener("click", () => {
  removeEleFromArr(array, 2);
  console.log(array);
  console.log("button is working");
});
function removeEleFromArr(array, n) {
  var index = array.indexOf(n);
  if (index > -1) {
    var spliceArr = array.splice(index, 1);
    if (spliceArr) {
      array.slice(-1)[0];
      // Or
      array.slice(-1).pop();
      var lastArr = array[array.length - 1];
    }
  }
  return array;
}
var reducedArr = array.reduce(function (cur, acc) {
  return cur + acc;
}, 0);

console.log(array.slice(-1)[0]);
console.log(array);

//console.log(array, reducedArr)
// fetch('https://crossorigin.me/https://www.metaweather.com/api/location/2487956/')
// .then(result => {
// console.log(result)
// })
// .catch(error => console.log(error))
// var gPHeader = document.querySelectorAll()
// document.addEventListener('mousemove', () =>{
//   document.classList.add('mouse_effect')

// })

// fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=e937b8378a93389dd45e3b8ab42a7aa8')
// .then(result => {
// console.log(result)
// return result.json()
// })
// .then(data => {
// console.log(data)
// console.log(data.main)
// console.log(`the weather of ${data.name} is ${data.weather[0].main}`)
// })
// .catch(error => console.log(error))
// app.listen(3005, () => {
//     console.log('Server is up on port 3005')
// })
