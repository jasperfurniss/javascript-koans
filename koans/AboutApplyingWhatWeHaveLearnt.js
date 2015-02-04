var _; //globals

describe("About Applying What We Have Learnt", function() {

  var products;

  beforeEach(function () {
    products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {

    var i,j,hasMushrooms, productsICanEat = [];

    for (i = 0; i < products.length; i+=1) {
        if (products[i].containsNuts === false) {
            hasMushrooms = false;
            for (j = 0; j < products[i].ingredients.length; j+=1) {
               if (products[i].ingredients[j] === "mushrooms") {
                  hasMushrooms = true;
               }
            }
            if (!hasMushrooms) productsICanEat.push(products[i]);
        }
    }

    expect(productsICanEat.length).toBe(1);
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {

      var productsICanEat = [];

      /* solve using filter() & all() / any() */

      productsICanEat = _.filter(products, function(pizza){
        return !pizza.containsNuts && _.all(pizza.ingredients, function(pizza){
          return pizza !== 'mushrooms';
        });
      });


      expect(productsICanEat.length).toBe(1);
  });

  /*********************************************************************************/

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function () {

    var sum = 0;
    for(var i=1; i<1000; i+=1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }

    expect(sum).toBe(233168);
  });

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function () {

    var sum = FILL_ME_IN;    /* try chaining range() and reduce() */

    expect(233168).toBe(233168);
  });

  /*********************************************************************************/
   it("should count the ingredient occurrence (imperative)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    for (i = 0; i < products.length; i+=1) {
        for (j = 0; j < products[i].ingredients.length; j+=1) {
            ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;
        }
    }

    expect(ingredientCount['mushrooms']).toBe(2);
  });

  it("should count the ingredient occurrence (functional)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    /* chain() together map(), flatten() and reduce() */

    expect(ingredientCount['mushrooms']).toBe(undefined);
  });


                      /*Jasper's attempted EXTRA CREDIT*/




  it("should find the largest prime factor of a composite number", function () {

  var x = 600851475143,
    getLargestPrimeFactor = function(n) {
        var largestPrimeFactor,
            factor = 2;
        while (n > 1) {
            if (n % factor === 0) {
                largestPrimeFactor = factor;
                n = n / factor;
                while (n % factor === 0) {
                    n = n / factor;
                }
            }
            factor += (factor === 2) ? 1 : 2;
        }
        return largestPrimeFactor;
    };
console.log(getLargestPrimeFactor(x));
  });






  it("should find the largest palindrome made from the product of two 3 digit numbers", function () {


    function largestPalindrome(){
        var arr = [];
        for(var i =999; i>100; i--){
            for(var j = 999; j>100; j--){
                var mul = j*i;
                if(isPalin(mul)){
                    arr.push(j * i);
                }
            }
        }
        return Math.max.apply(Math, arr);
    }
    function isPalin(i){
        return i.toString() == i.toString().split("").reverse().join("");
    }
    console.log(largestPalindrome());
  });







  it("should find the smallest number divisible by each of the numbers 1 to 20", function () {

        function checkMath() {
        int start = 2520;
        int end = start * (232792560/2520);
        boolean result = true;
        for (int i = start + 1; i < end; i++) {
            result = true;
            for (int j = 1; j <= 10; j++) {
                if (i % j != 0) {
                    result = false;
                    break;
                }
            }
            if (result) {
                if (i % 2520 != 0) {
                    break;
                }
            }
        }
        return (result);
    }
  });







  it("should find the difference between the sum of the squares and the square of the sums", function () {

  });








  it("should find the 10001st prime", function () {

  });
});
