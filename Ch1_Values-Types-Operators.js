// Numbers
// Values of the number type are numeric values and are written like - 7

// Javascript uses a fixed number of bits, 64. Which means you can use about 9 quadrillion different numbers when accounting for decimals and negative numebrs

// Calculations with whole numbers (also called integers) smaller than the aforementioned 9 quadrillion are guaranteed to always be precise. Unfortunately, calculations with fractional numbers are generally not. Just as π (pi) cannot be precisely expressed by a finite number of decimal digits, many numbers lose some precision when only 64 bits are available to store them. This is a shame, but it causes practical problems only in specific situations. The important thing is to be aware of it and treat fractional digital numbers as approximations, not as precise values.

// Arithmetic
// The main thing to do with numbers is arithmetic.

// The + (addition), * (multiplication), - (subtraction), / (division) symbols are called operators.

// When operators appear together without parantheses, the order in which they are applied is determined by the precedence of the operators (PEMDAS). When in doubt of the rules, just add parantheses to what you want to run first

// Another operator is the %, it is used to represent the remainder. Example: 144 % 12 gives 0, 314 % 100 produces 14. The precedence is the same as multiplication and division, and sometimes its refered to as modulo

// Special Numbers
// There are three special values that are considered number, but don't behave like normal numbers

// Inifinity, represents positive infinity
// -Infinity, represents negative infinity
// NaN, stands for "not a number", even though it's a value of the number type
// Don't put to much trust in infinity-based computation since it isn't mathematically sound and can lead to NaN


//  Strings
// Strings are used to represent text
// You can use single quotes, double quotes, or backticks to mark strings as long as the quotes at the start and the end of the string match

// There are a couple of difficult characters to put in a string like putting quotes might be hard or newlines (the character you get when you press Enter) can be invluced without escaping only when the string is quoted ith backticks

// To make it possible to include special characters in a string a backslach is used (\) and indicated that the character after it has a special meaning. The character is called the escaping character, a quote that is preceded by a backslash will not end the string, but be part of it. When you put n after the backslash it gets interpreted as a new line
// Example: "This is the first line\nAnd this is the second" - this string will look like: 
// This is the first line
// And this is the second

// If you want a backslash in your string to be just a backslash in a string then you would use two backslashes (\\)

// Strings also have to be modeled as a series of bits, and JavaScript does this based on the Unicode standard. This standard assigns a number to every character you would ever need (this includes characters in other languages)

// While strings can't be divided, multipled, or subracted, you are able to use the '+' operator. It doesn't add necessarily, but it does conctaenate (puts them together) the strings together. 
// Exmaple: "con" + "cat" + "e" + "nate" = "concatenate"

// String written with single (') or double (") quotes behave the same, the ony difference is which type of quote you need to escape in them
// Backtick-quoted (`) strings, also called template literals, have a bit more functionality. the can embed other values with ${value}


// Unary Operators
// Not all operators are sumbols. Some are words. 
// typeof operator produces a string value naming the type of the value you give it
console.log(typeof 4.5)
// results in number
console.log(typeof "x")
// results in string
// The operators that have been shown (+,-,/,-,%) use two values. These are called binary operators. Operators like "typeof" use one value. These are called binary operators.


// Boolean Values
// Boolean type only has two values, true or false

// Comparison
// One way to produce Boolean values
console.log(3 > 2);
// produces true
console.log(3 < 2);
// produces false
console.log("Aardvark" < "Zoroaster")
// produces true
// The way strings are ordered is roughly alphabetical, but not really - uppercase letters are always "less" than lowercase ("Z" < "a"), and nonalphabetic characters (!, -, etc.) are also included in the ordering. Comparing strings, JavaScript goes over characters from left to right, comparing the Unicodes one by one.
console.log(NaN == NaN)
// produces false
// This is the only value in JavaScript that isn't equal to itself. NaN represents nonsesical computation and so therefore it's not equal to any other nonsesical computation

// Logical Operators
// Some operations can be applied to Boolean values. The three logical operators JavaScript supports are - and (&&), or (||), and not (!). They can be used to "reason" about Booleans

// The && (and) operator represents logical and. It's a binary operator, and results in true if both values given to it are true
console.log(true && false);
// produces false
console.log(true && true);
// produces true

// The || (or) operator represents logical or. It will produce true if either value is given. This is a binary operator
console.log(false || true)
// produces true
console.log(false || false)
// produces false

// Not is written as an exclamation mark (!). It is a unary operator that flips the value given to it - !true produces false, and !false produces true
// Usually when mixing these operators with arithmetic it's not really obvious when parantheses are needed. In practice || has the lowest precedence, then comes &&, then the comparison operators (>, <, ==, etc) and then the rest. this order has been choses so as few parantheses as possible are necessary.

// the last logical operator is a ternary operator, operating on three values. It's written with a question mark (?) and a colon (:). It's called the conditional operator the the ternary (since it's the only one in JavaScript)
console.log(true ? 1 : 2)
// produces 1
console.log(false ? 1: 2)
// produces 2
// The value on the left of the question mark "picks" whioch of the other two values will come out. If true, it'll choose the value on the left of the colon, if false it chooes the value to the right of the colon

// Empty Values
// Two special values (null and undefined) are used to denote the absence of a meaningful value. They are values, but carry no info
// The difference in meaning between undefined and null is an accident of JavaScript's design, and it doesn't matter most of the time. Unless you have to concern yourself with the specific value, you can treat them interchangeably. 

// Automatic Type Conversion
// JavaScript goes out of its way to accept almost any program you give it, even if they do odd things. Examples: 
console.log(8 * null);
// produces 0
console.log("5" - 1);
// produces 4
console.log("5" + 1);
// produces 51
console.log("five" * 2);
// produces NaN
console.log(false == 0);
// produces true

// JavaScript uses type coercion (when an operator is appled the "wrong" type of value, JavaScript will convert that value to the type that's needed using a set of rules that aren't what you want or expect).
// When comparing values of the same type using ==, the outcome should be true when both values are the same, except with NaN. When types differ JavaScript uses a complicated and confusing set of rules to determine what to do. Most cases it just tries to convert one of the values to the other values type. However, when null or undefined occurs on either side of the operator, it produces true only is both sides are null or undefined.
console.log(null == undefined);
// produces true
console.log(null == 0)
// produces false
// The behavior is useful when you wanna test if a value has a real value instead of null or undefined - you can compare it to null with the either == or != operators.
// When you don't want type cercion to happen use === and !== the first one tests whether a value is precisely equal to the other, and the second tests whether it is not precisely equal.

// Short-Circuiting of Logical Operators
// The logical operators && and || handle values of different tpyes in a peculiar way. They will convert the value on their left side to Boolean type in order to decide whayt to do, but depending on the result of that converstion, they will return either the original left-hand value or the right-hand value. We can use this functionality as a way to fall back on a default value. The rules for converting strings and numbers to Boolean values state that 0, NaN, and the empty string ("") count as false, while all the other values count as true. So 0 || -1 produces -1, and "" || "!?" yields "!?"
// Another important piece of information for the two operators is that the value to the right is evaluated only when necessary. This is called short-circuit evaluation