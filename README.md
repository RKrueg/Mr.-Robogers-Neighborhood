```Describe: numInput()

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: numInput(7);
Expected Output: [0,1,2,3,4,5,6,7]

Describe: containesA1

Test: "Check to see if a number contains a 1."
Code: numInput(10)
Expected Output: True

Test: "If a number contains a 1, all digits are replaced with "Beep!"
Code: numInput(10)
Expected Output: [0, "Beep!",3,4,5,6,7,8,9,"Beep!"]