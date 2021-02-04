//slice
const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
var modifiedFood=foods.slice(1,4);
console.log(modifiedFood);
console.log(foods);
//splice
var food = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
food.splice(2,0,"noodles", "icecream");
console.log(food);
//filter
function isEven(numberArray)
{
    return numberArray.filter(item => (item%2)==0);
}
function testPrime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}
function isPrime(numberArray)
{
    return numberArray.filter(item => testPrime(item)==true);
}
const numberArray = [12,324,213,4,2,3,45,4234];
console.log(isEven(numberArray));
console.log(isPrime(numberArray));
//Reject
function nonPrime(numberArray)
{
    return numberArray.filter(item => testPrime(item)==false);
}
console.log(nonPrime(numberArray));

//Map
function findSquareOfNumbers(myArray)
{
var doubledArray=myArray.map(item=> item*2);
return doubledArray;
}
const myArray = [11, 34, 20, 5, 53, 16];
console.log(findSquareOfNumbers(myArray));
//Reduce
function multiply(array)
{
    var prev=1;
    return array.reduce((prev,item)=> item*prev,prev);
}
array=[2, 3, 5, 10]
console.log(multiply(array));