# _Mr Robogers Neighborhood_

#### By _**Ryan Krueger**_

#### _A simple page that lets users input a number and recieve a fun result._

## Technologies Used

* HTML
* CSS
* JavaScript

## Description

_The application allows users to input a number of their choice, hit submit, and receive a wacky result. The result will return all digits starting from 0 up until it reaches the number the user inputted. Additionally, if a number begins with a 1, it will change to 'Beep!', if it begins with a 2, 'Boop!', and if it begins with a 3, 'Won't you be my neighbor?'. There are a few more rules in place. For instance, if a number begins with 1, 'Beep!' should be displayed unless there is a 2 present in the number. THen, the 'Boop!' should display unless there is a 3 present._

## Setup/Installation Requirements

* _Clone this repository to your desktop._
* _Navigate to the top level of the directory._
* _Open index.html in your browser._

## Known Bugs

* _Currently, the site does not follow the rules in the description._
* _When you hit submit, numbers that are not changed do not display on the page._


## License

_[MIT](https://choosealicense.com/licenses/mit/)_

Copyright (c) _October 28, 2022_ _Ryan Krueger_

```Describe: numInput()

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: numInput(7);
Expected Output: [0,1,2,3,4,5,6,7]

Describe: containesA1()

Test: "Check to see if a number contains a 1."
Code: numInput(10)
Expected Output: True

Test: "If a number contains a 1, all digits are replaced with "Beep!"
Code: numInput(10)
Expected Output: [0, "Beep!",2,3,4,5,6,7,8,9,"Beep!"]

Describe: containesA2()

Test: "If a number contains a 2, all digits are replaced with "Boop!"
Code: numInput(2)
Expected Output: [0,1,"Boop!"]

Describe: containesA3()

Test: "If a number contains a 3, all digits are replaced with "Won't you be my neighbor?"
Code: numInput(3)
Expected Output: [0,1,2,"Won't you be my neighbor?"]
```
