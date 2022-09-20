# HUNDO: A Coding Project
 Live life one loop at a time. A JavaScript coding exercise using loops. Write a program that displays the numbers from 0 to 100. Display the even numbers in BOLD. 

- CSS and Bootstrap Layout
- JavaScript Fundamentals
- JavaScript Loops
- JavaScript Functions
- CSS and Bootstrap Layout
- JavaScript DOM Manipulation
- JavaScript If/Then/Else
- JavaScript Boolean Logic 

# Functions


## getValues()
Gets two values from the input boxes, performs input validation and parses the input into integers. If valid, app will move to the generateNumbers() and displayNumbers() functions.

## generateNumbers()
Takes a start and end value, then runs a loop with those values and stores the numbers in an array, which it returns to getValues().

## displayNumbers()
Loops through the numbers array and, using a modulus operator, assigns each number an even or odd class. The function then creates a table row, which it passes to HTML.