/**
 * @author Michael George
 * @version 8.17.2017
 */
// SimpleTest object wrapper
var SimpleTest = {};

// Determines whether the SimpleTest framework will throw an error or just output to console.
SimpleTest.throwErrors = true;

/**
 * Throw an error in regards to the Unit Testing
 * @param {string} msg Message to output to console, and/or to throw as an error
 */
SimpleTest.error = function (msg) {
    console.log(msg);
    if (SimpleTest.throwErrors !== false) {
        throw (msg);
    }
    console.log("[SimpleTest] TEST FAILED");
};

/**
 * Check if the expected is exactly equal to the actual
 * @param {object} expected Can be an object, or any other variable type, thanks to JS dynamic typing
 * @param {object} actual The actual output or variable to be tested
 * @returns {boolean} Whether or not the two variables are equal
 */
SimpleTest.assertEquals = function (expected, actual) {
    var equal = expected === actual;
    if (!equal) {
        SimpleTest.error("[SimpleTest] Expected Does Not Equal Actual. Expected: " + expected + ", Actual: " + actual);
    }
    return equal;
};

/**
 * Check if the condition provided evaluates to false
 * @param {boolean} condition Condition to be tested
 * @returns {boolean} If the condition is false or not
 */
SimpleTest.assertFalse = function (condition) {
    if (condition !== false) {
        SimpleTest.error("[SimpleTest] Condition Does Not Equal False. Condition: " + condition);
    }
    return !condition;
};

/**
 * Check if the condition provided evaluates to true
 * @param {boolean} condition Condition to be tested
 * @returns {boolean} If the condition is true or not
 */
SimpleTest.assertTrue = function (condition) {
    if (condition !== true) {
        SimpleTest.error("[SimpleTest] Condition Does Not Equal True. Condition: " + condition);
    }
    return !condition;
};

/**
 * Check if the object provided is undefined (NULL) 
 * @param {object} object Object to be tested
 * @returns {boolean} True if object is not null
 */
SimpleTest.assertNotNull = function (object) {
    if (object === undefined) {
        SimpleTest.error("[SimpleTest] Object is undefined.");
    }
    return (object !== undefined);
};

/**
 * Check if the object provided is undefined (NULL) 
 * @param {object} object Object to be tested
 * @returns {boolean} True if object is null
 */
SimpleTest.assertNull = function (object) {
    if (object !== undefined) {
        SimpleTest.error("[SimpleTest] Object is not undefined. Object: " + object);
    }
};

/**
 * Force SimpleTest to throw an error
 */
SimpleTest.fail = function () {
    SimpleTest.error("[SimpleTest] Failed test.");
}