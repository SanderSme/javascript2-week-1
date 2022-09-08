// 1: making descriptions for functions(hoover the function-call)
/**
 * Adding two numbers together
 */

function addNumbers(a, b) {
  return a + b;
}
addNumbers();

/**
 * Display a message to the user
 */

function sayHello() {
  return `<span>Hellohellohello</span>`;
}

sayHello();

//2: @params, @return and @example
/**
 * Adding three numbers together
 * @param {number} a First value
 * @param {number} b Second value
 * @param {number} c Third value
 * @returns {number} Sum of params
 * @example
 * ```js
 * //add three numbers together
 * const a = 1
 * const b = 2
 * const c = 3
 * //expect sum to be 6
 * ```
 */
function addThreeNumbers(a, b, c) {
  return a + b + c;
}

addThreeNumbers();

/**
 * Show list of cat names
 * @param {string} cat1 first value
 * @param {string} cat2 second value
 * @param {string} cat3 third value
 * @param {string} cat4 fourth value
 * @returns {string} list of cat names
 * @example
 * ```js
 * //showing cat names
 * const cat1 = Per
 * const cat2 = Emil
 * const cat3 = Mike
 * const cat4 = Sandra
 * ///expect list of cat names
 * ```
 */
function catNames(cat1, cat2, cat3, cat4) {
  return `<ul>
            <li>${cat1}</li>
            <li>${cat2}</li>
            <li>${cat3}</li>
            <li>${cat4}</li>
        </ul>`;
}

catNames();

//3: Optional parameters []
// /**
//  * @param {datatype} [optionalParamName] optionalParamNameDescription
//  */

/**
 * Multiply two numbers together
 * @param {number} a first value
 * @param {number} [b] first value
 * @returns {number} multiplied numbers(sum)
 * @example
 * ```js
 * //multiply numbers
 * const a = 2
 * const b = 10
 * //expect sum to be 20
 * ```
 */
function multiplyNumbers(a, b = 10) {
  return a * b;
}
multiplyNumbers(1);

//4: @typeof

/**
 * Adds two numbers
 * @typeof {(number|string)} NumberLike
 */
function addTwoDigits(a, b) {
  return a + b;
}

addTwoDigits();

//5: complex objects

/**
 *
 * @param {{name: string, role: string}} my LoggedIn User Object
 */
function handleUserLogin({ name, role }) {
  loginUserWothToken();
}

function loginUserWothToken() {}

handleUserLogin();
