### GitHub Page 🚀
Click [HERE](https://devcodepush.github.io/Improved-Lifetime-Supply-Calculator/) to see the page!

#### Improved Lifetime Supply Calculator 🚀
Create a better lifetime supply calculator from what we were doing yesterday (Monday 1st February) in class, and test it in 3 different user cases. You should use variables, objects and a function.

#### Instructions 🚀
First of all, you need to read the exercise if you haven’t yet:
The Lifetime Supply Calculator

###### How many potatoes will a person eat until the end of his life? Discover yourself!

1. Store the persons current age into a variable.
2. Store an estimated maximum age into a variable.
3. Store an estimated amount per week (as a number).
4. Calculate how many weeks will happen until the end of this person life.
5. Calculate how many potatoes would eat total for the rest of his life.
6. Output the result to the screen by console like so: "NAME has NN years and will eat NN potatoes until age of X".

#### New challenge 🚀
You need to create a function that is able to calculate that and return 3 different messages for 3 different user cases. So we want to be able to reuse our code in a more clever way. 

#### Some tips 🚀
1. For defining your 3 users, objects are best choices. So start creating 3 different objects with the following properties: their name, current age, maximum age and estimated amount of potatoes they eat per week ;) Some documentation here (https://www.w3schools.com/js/js_objects.asp)

2. If you want to reuse a code you have done again and again for different situations/inputs, then you need a function. Review this documentation about the functions syntax (https://www.w3schools.com/js/js_functions.asp)
Define your function with a comprehensive name of what you are doing.
Think of what the function needs as inputs. On this case, it will need 4 parameters (name, current age, max age and amount per week).
Inside the function, place the code to calculate the total amount of potatoes in the lifetime. Make sure it uses all the parameters of the function to perform the calculations.
We want the function to console log the message. Remember that you can use template literals with modern ES6 JavaScript (the back ticks phrases we were using with the dollar and curly braces thing). Some documentation here (https://www.w3schools.com/js/js_string_templates.asp)

3. Test your function for the 3 users. So you need to you have created, each time using as parameters the information of your 3 users.


#### ...And some final extra balls here, for the most intrepid 😉🚀
###### Bonus (1): Imagine you want to store the 3 messages into 3 variables for reusing them later in your code. How you would do that?
###### Bonus (2): Read about arrow functions. Are you able to transform your function into an arrow one? Some extra documentation here (https://www.w3schools.com/js/js_arrow_function.asp).


#### Solution

```javascript
const rick = {
  name: "Rick",
  currentAge: 40,
  maximumAge: 80,
  quantityPerWeek: 10,
};

const alison = {
  name: "Alison",
  currentAge: 50,
  maximumAge: 80,
  quantityPerWeek: 20,
};

const nick = {
  name: "Nick",
  currentAge: 60,
  maximumAge: 80,
  quantityPerWeek: 30,
};

function calculatePotatoes(user) {
  const numberOfWeeks = ((user.maximumAge - user.currentAge) * 365) / 7;
  const totalPotatos = numberOfWeeks * user.quantityPerWeek;
  const phrase = `${user.name} has ${user.currentAge} years and will eat ${totalPotatos} potatos until age of ${user.maximumAge}`;

  console.log("Result:", phrase);
  return phrase;
}

calculatePotatoes(rick);
calculatePotatoes(alison);
calculatePotatoes(nick);
```
