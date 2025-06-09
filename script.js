//TODO 🔰  Module 4 - Lesson 10.03: Recap Week 23

//? 🔁 Module 4 – Recap Lesson

//  Topics:
//  1. Nested Scope
//  2. Function Declaration vs. Expression
//  3. Arrow Functions
//  4. Immediately Invoked Function Expressions (IIFE)
//  5. Callbacks & Higher-Order Functions

//* 🟩 1. Explore the Topic (Compressed Overview with Practice)

//TODO 🔹 Nested Scope
//  • Functions can be defined inside other functions
//  • Inner functions have access to outer variables

//  ✅ Example:

//  Function Declaration named outer. It does not take any parameters.
function outer() {
    
    // A variable outerVar inside the outer function. The variable is block-scoped (due to let), but here, since it is at the top of the function, it is accessible anywhere inside outer function.
    let outerVar = "Visible";
    
    //  Defines a function named inner inside the outer function. inner is a closure—it has access to the variables of its parent function (outerVar).
    function inner() {
        console.log(outerVar);
    }
    
    //  Calls the inner function from within outer function. When inner runs, it logs the value of outerVar to the console.
    inner();
}

// Output: Visible
outer();

//!  Key Concepts
//  • Scope:      outerVar is only accessible inside outer (and any nested functions, like inner).
//  • Closure:    inner can access outerVar even though it is defined in the parent function.
//  • Execution:  When we call outer(), it will initialize outerVar, define inner, call inner, and output "Visible" to the console.


//TODO 🔹 Function Declaration vs. Expression
//  • Declaration: hoisted, can be called before they're written
//  • Expression: assigned to variables, not hoisted

//  ✅ Example:

//  Function declaration
greet();
function greet() { console.log("Hi!") };

//  Function expression
const bye = function() { console.log("Bye") };


//TODO  🔹 Arrow Functions
//  • Shorter syntax
//  • Inherit this from outer scope
//  • Can return implicitly - means the function automatically returns the result of its expression body, without needing the "return" keyword, making the code shorter and cleaner.

//  ✅ Example:

//  This is an arrow function that takes one argument (n) and returns n * 2.
const double = n => n * 2;

//  We can call the function like this:
console.log(double(2));                             //  Output: 4
console.log(double(3));                             //  Output: 6
console.log(double(4));                             //  Output: 8

//! Key Points
//  • Arrow Function Syntax:
//      > Shorter than traditional function syntax.
//      > No return keyword needed if the function body is a single expression.
//  • Constant Assignment:
//      > The function is assigned to a constant, so you cannot reassign double later.
//  • Single Parameter:
//      > The parentheses around n can be omitted if there is only one parameter.

//  ✅ Example:

// Implicit return (no curly braces, no 'return' keyword)
const doubleImplicit = n => n * 2;

// Equivalent explicit return (with curly braces and 'return' keyword)
const doubleExplicit = n => { return n * 2; };


//TODO  🔹 IIFE
//  • Runs immediately
//  • Encapsulates private scope

//  ✅ Example:

(() => {
    
    //  The secret variable is not necessary and does not play a functional role since it is not used. Its inclusion is likely for demonstration purposes, to show that variables declared inside an IIFE are private and not accessible from outside the function.
    const secret = "🔒";
    console.log("Running");
})();

//! Explanation

//  1. This is an Immediately Invoked Function Expression (IIFE) using an arrow function in JavaScript.

//  2. Structure
//  ( () => { ... } )   - This is an arrow function wrapped in parentheses.
//  () at the end       - Immediately calls (executes) the function right after it’s defined.

//  3. Function Body
//  • const secret = "🔒";
//      > Declares a constant secret inside the function.
//      > This variable is private to the function and not accessible from outside.
//  • console.log("Running");
//      > Logs the string "Running" to the console.

//  4. Code Runs
//  • The function is defined and called immediately.
//  • It declares secret and logs "Running" to the console.
//  • Nothing outside the function can access the secret variable.

//  5. Using this pattern
//  • Encapsulation:
//      > Keeps variables like secret private and prevents them from polluting the global scope.
//  • Immediate Execution:
//      Useful for running code right away, such as initializing something when the script loads.

//  6. Output
//  Running


//TODO 🔹 Callbacks & Higher-Order Functions
//  • Callback: function passed to another function
//  • Higher-Order Functions: takes or returns a function

//  ✅ Example:

[1, 2, 3].forEach(num => console.log(num));

//! Explanation

//  The code [1,2, 3].forEach(num => console.log(num)); uses the JavaScript Array.prototype.forEach() method to iterate over each element in the array [1, 2, 3] and execute a provided function for each element.

//  Code breakdown:
//  • [1, 2, 3]:
//      > This is an array containing the numbers 1, 2, and 3.
//  • .forEach(num => console.log(num)):
//      > The forEach() method takes a callback function as its argument.
//      > For each element in the array, it calls the callback function, passing the current element as num.
//      > The arrow function num => console.log(num) logs each num (each array element) to the console.

//  Running this code it will print the following to the console:
//  1
//  2
//  3

//?  Summary:
//  This code is a concise way to loop over an array and perform an action (in this case, logging each value) for each element, without using traditional for or while loops.


//TODO  🌍 2. Real-World Examples

//TODO 🧱 Nested Scope: a function accessing private data inside a larger module
//  • Nested scope occurs when we define a function inside another function. The inner function has access to variables declared in its outer function, but the outer function cannot access variables declared inside the inner function. This is fundamental to JavaScript’s lexical scoping and closures.

//?  1. Accessing Outer Variables in Inner Functions
// • In many applications, inner functions use variables from their outer scope to perform tasks without needing to pass them as parameters explicitly.

function greetUser() {
    const username = "Alice";

    function greet() {
        console.log(`Hello, ${username}!`);
    }

    greet();
}

greetUser();

//! • The inner function greet accesses the username variable from its outer function greetUser.

//? 2. Encapsulation and Data Privacy
// • Nested functions help encapsulate variables, making them private and inaccessible from outside, which is useful for data privacy and avoiding global variable pollution.

function counter() {
    let count = 0;                                  //  private variable

    return function increment() {
        count++;
        console.log(count);
    };
}

const myCounter = counter();
myCounter();                                        //  1
myCounter();                                        //  2
myCounter();                                        //  3

//! • The inner function increment has access to count and can modify it, but count is not accessible from outside the counter function. This is a classic closure example.

//? 3. Conditional Nested Scopes
//  • Block scopes within conditionals also demonstrate nested scope behavior, where inner blocks can access outer block variables but not vice versa.

if (true) {
    const outerVar = "Outer";

    if (true) {
        const innerVar = "Inner";
        console.log(outerVar); // Output: Outer
    }

    // console.log(innerVar); // Error: innerVar is not defined
}

//! • Inner blocks access outer variables, but outer blocks cannot access variables declared inside inner blocks.

//? 4. Hoisting and Nested Scopes
//  • Nested scopes interact with hoisting, where function declarations are hoisted but variables declared with let or const are not accessible before declaration, even in nested scopes.

//! Summary:    Why Nested Scope Matters in Real-World Code
//  1. Modularity: Functions inside functions allow breaking down complex logic into smaller, manageable pieces.
//  2. Closures: Enable powerful patterns like private state, memoization, and function factories.
//  3. Avoiding Global Pollution: Keeps variables local and prevents naming conflicts.
//  4. Control Access: Inner functions can access and manipulate outer variables, but the outer functions remain unaware of inner details.

//! In essence, nested scopes are a core feature of JavaScript that enable powerful programming patterns like closures, encapsulation, and modular code design, which are widely used in real-world applications.


//TODO  🧱 Function Declaration versus Function Expression: using declared functions for utility, expressions for dynamic behavior

//? Function Declaration
//  • A function declaration defines a named function using the function keyword at the statement level. It is hoisted, meaning you can call it before it appears in your code.

function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Output: Hello, Alice!

//!  Real-World Use Case:

//  • Reusable Utility Functions:
//      > Use declarations for functions we want to call anywhere in the script, even before they are defined (due to hoisting).
//  • Recursive Functions:
//      > Easier to write recursive logic because the function has a name you can reference inside itself.
//  • Clear, Readable Code:
//      > Named functions make code easier to read and debug

//? Function Expression
//  • A function expression assigns a function (usually anonymous) to a variable or property. It is not hoisted, so you must define it before you call it.

const greet2 = function(name) {
    return `Hello, ${name}!`;
};

console.log(greet("Alice"));                        //  Output: Hello, Alice!

//! Real-World Use Cases:

//  • Callbacks:
//      > Often used as arguments to other functions, such as event listeners or array methods.

//! button.addEventListener("click", function(even) {
//     console.log("Button clicked!");
// });

//  • Immediately Invoked Function Expressions (IIFE):
//      > Used to create private scopes and execute code immediately.

(function() {
    const secret = "🔒";
    console.log("Running");
})();

//  • Cleaner Code for One-Time Use:
//      > Useful for functions that are only used in one place or passed as arguments

//  • Arrow Functions:
//      > Modern JavaScript often uses arrow functions for concise expressions.

const double3 = n => n * 2;

//! Summary
//  • Function Declarations:
//      > Use for reusable, named functions you want to call anywhere, especially if you need recursion or hoisting.
//  • Function Expressions:
//      > Use for callbacks, IIFEs, and when you want to assign functions to variables or pass them as arguments. Modern code often uses arrow function expressions for brevity


//TODO  🧱 Arrow Functions: used in .map(), .filter(), event handlers

//? 1. Arrow Functions with .map()

//  • Use Case:
//  Transforming arrays by extracting or modifying data.

//  ✅ Example:
//  Extract the ages from an array of user objects

const users = [
    { name: 'Jack', age: 21 },
    { name: 'Ben', age: 23 },
    { name: 'Adam', age: 22 },
];

const ages = users.map(user => user.age);
console.log(ages);

//  Or, transform a list of winners into objects with more details:

const race = '100m Dash';
const winners = ['Hunter Gath', 'Sing Song', 'Ida Bos'];

const win = winners.map((winner, i) => ({
    name: winner,
    race: race,
    place: i + 1
}));                                                //  Result: Array of objects with name, race, and place

//? 2. Arrow Functions with .filter()

//  Use Case:
//  Selecting specific elements from an array based on a condition.

//  ✅ Example:
//  Filter an array to get only even numbers

const arr = [5, 6, 13, 0, 1, 18, 23];
const even = arr.filter(v => v % 2 === 0);
console.log(even);                                  // Result: [6, 0, 18]

//? 3. Arrow Functions as Event Handlers

//  Use Case:
//  Handling DOM events while preserving the context of this from the surrounding code.

//  ✅ Example:
//  Using an arrow function in a setTimeout inside a method to maintain the correct this context

const obj = {
    count: 10,
    doSomethingLater() {
        setTimeout(() => {
            this.count++;
            console.log(this.count);
        }, 300);
    }
};

obj.doSomethingLater();

//  Or, using arrow functions with event listeners (note: arrow functions are less common here unless you specifically want to inherit this from the outer scope):

//! button.addEventListener('click', () => {
//     console.log('Button clicked!');
// });

//  If we need to access the event object or this as the target element, traditional functions are usually preferred for event handlers.

//!  Summary
//  Arrow functions are widely used with .map() and .filter() for concise array transformations, and with event handlers to maintain the correct this context, especially in nested or method contexts.


//TODO  🧱 IIFE: setup code for a module or config

//? 1. Module Setup and Encapsulation

//  IIFEs are often used to create modules with private variables and methods, exposing only what is needed.

//  ✅ Example: Module Pattern

const MyModule = (function() {

    // Private variable
    let privateCounter = 0;

    // Private function
    function privateIncrement() {
        privateCounter++;
    }

    // Public API
    return {
        increment: function() {
            privateIncrement();
            console.log(privateCounter);
        },
        
        reset: function() {
            privateCounter = 0;
            console.log('Counter reset');
        }
    };
})();

MyModule.increment(); // 1
MyModule.increment(); // 2
MyModule.reset();     // Counter reset

//! Only the increment and reset methods are exposed. The internal state (privateCounter) is hidden and protected from outside access.

//? 2. Config Initialization

//  IIFEs can be used to initialize configuration objects, especially when you want to compute properties or keep setup logic private.

//  ✅ Example: Computed Config Object

const config = (function() {
    const secretKey = 'abc123';
    const apiUrl = 'https://api.example.com';

    // Some setup logic
const environment = 'development'; // or 'production'
    const isProduction = environment === 'production';
    const debugMode = !isProduction;

    return {
        apiUrl,
        debugMode,
        // Note: secretKey is not exposed
    };
})();

console.log(config.apiUrl);    // https://api.example.com
console.log(config.debugMode); // true or false, depending on environment


//! This pattern keeps sensitive data (like secretKey) private and allows for dynamic configuration based on environment or other logic.

//? 3. Inline Property Initialization in Modules

//  IIFEs can be used inside object or module exports to compute properties at initialization time, making code more readable and encapsulated.

//  ✅ Example: Inline IIFE for Object Property

const appConfig = {
    version: '1.0.0',
    settings: (function() {

        // Complex setup logic here
        const defaultSettings = { theme: 'light', debug: false };

        //  Potentially override based on environment or other logic
        const environment = 'development';
        if (environment === 'development') {
            defaultSettings.debug = true;
        }
        return defaultSettings;
    })()
};

console.log(appConfig.settings);                    //  { theme: 'light', debug: true } in development

//! This keeps the setup logic for settings contained and avoids polluting the outer scope.

//! Summary
//  IIFEs are widely used in real-world JavaScript for module setup, configuration initialization, and inline property computation, helping to keep code organized, encapsulated, and secure


//TODo  🧱 Callbacks and Higher-Order Functions: setTimeout, event listeners, .forEach

//TODO 🚀 Callbacks: Real-World Examples

//* 🏁 Definition:
//  A callback is a function passed as an argument to another function and executed after some asynchronous or synchronous operation completes.

//? 🔹 API Data Fetching
//      • When fetching data from a server, you use a callback to handle the response once it arrives.


function fetchData(url, callback) {
    fetch(url)
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.log(error));
}

fetchData('https://jsonplaceholder.typicode.com/todos/1', function(data) {
    console.log(data);
});

//! The callback processes the fetched data.

//? 🔹 Event Handling
//      • Callbacks are commonly used to define what happens when an event (like a button click) occurs.

/* 
!document.getElementById('myButton').addEventListener('click', function() {
    console.log('Button clicked!');
});

const { count } = require('console');
*/

//! The function inside addEventListener is a callback.

//? 🔹 File Operations (Node.js)
//      • In Node.js, file reading is asynchronous, and we can provide a callback to handle the result or error.

/*
!const fs = require ('fs');
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.log('Error reading file:', err);
    } else {
        console.log('File content:', data);
    }
});
*/

//! The callback processes the file content or error.

//? 🔹 Array Methods
//      • Methods like .forEach(), .map(), and .filter() take callbacks to perform operations on each element.

[1, 2, 3].forEach(num => console.log(num));

//! The arrow function is a callback.


//TODO 🚀 Higher-Order Functions: Real-World Examples

//* 🏁 Definition:
//  A higher-order function is a function that takes one or more functions as arguments or returns a function as its result.

//? 🔹 Array Methods
//      • .map(), .filter(), .reduce() are higher-order functions because they accept callbacks.

const doubled = [1, 2, 3].map(num => num * 2);      //  [2, 4, 6]

//! Here, map is the higher-order function and the arrow function is the callback.

//? 🔹 Custom Higher-Order Functions
//  • We can create a higher-order functions to abstract logic.

function processNumbers(numbers, operation) {
    return numbers.map(num => operation(num));
}

const result = processNumbers([1, 2, 3], x => x * x); // [1, 4, 9]

//! processNumbers is a higher-order function; it takes an operation function as an argument.

//? 🔹 Event Listener Registration
//  • Functions that register event listeners (like addEventListener) are higher-order functions because they accept callback functions.

function addListener(element, event, callback) {
    element.addEventListener(event, callback);
}

//! Here, addListener is a higher-order function.

//! Summary
//  Callbacks and higher-order functions are fundamental in JavaScript for handling asynchronous tasks, event handling, and abstracting logic, making code more modular and reusable.


//TODO  🧪 3. Quiz Questions

//  • Just answer in your head or jot notes — fast review.
//  1. What type of scope allows inner functions to access outer variables?
//  ✅ Answer: Nested;

//  2. Which is hoisted: function declaration or expression?
//  ✅ Answer: Declaration;

//  3. What’s a key trait of arrow functions related to this?
//  ✅ Answer: Inherits this;

//  4. What does an IIFE do immediately after it's defined?
//  ✅ Answer: Executes;

//  5. Which array method is a higher-order function?
//  ✅ Answer: .map/.forEach;


//TODO  🧪 4. Mini Project Challenge

//* 📦 Build: "Mini Task Module" with All Concepts

//? Features:
//  • Use an IIFE to encapsulate logic
//  • Store a private tasks array
//  • Include a nested function to log formatted tasks
//  • Add an arrow function for rendering DOM output
//  • Expose a public method that accepts a callback
//  • Use a function expression for one internal helper

//! Solution

(() => {
    const privateTasks = ["Task 1", "Task 2", "Task 3"];

    function processData(data, callback) {
        for (let task of privateTasks) {
            callback(task);
        }
        
        const processed = data.toUpperCase();
        callback(processed);
    }

    const renderMessage = (message, callback) => {

        // Call processData, passing the message and callback
        processData(message, (processedMessage) => {
            const outputDiv = document.getElementById("output");
            if (outputDiv) {
                outputDiv.textContent = processedMessage;
            }

            // Invoke the callback after rendering
            if (callback) callback(processedMessage);
        });
    };

    const helper = function() {
        helper++;
    };

    const renderBtn = document.getElementById("renderBtn");

    if (renderBtn) {
        renderBtn.addEventListener("click", () => {
            renderMessage("Clicked task", msg => console.log("Done:", msg));
        });
    }

})();
