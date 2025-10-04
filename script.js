alert("Not a big Problem")
//arrays and objects

var arr = [1, 2, 3, 4];

// foreach map filter and indexOf
arr.forEach(function(val){
    console.log(val + '2');
}) 


// use map

var array = [1, 2, 3, 4];

var newarr = array.map(function(val){
    return val*3;
})
console.log(newarr);

// add other logics