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
    console.log("[SimpleTest] TEST FAILED");
    console.log(msg);
    if (SimpleTest.throwErrors !== false) {
        throw (msg);
    }
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
 * Check if variable is of type 'type'.
 * @param {string} type Type of variable to check against
 * @param {object} variable Variable to compare to type 'type'
 * @returns {boolean} Whether the variable is of type 'type'
 */
SimpleTest.assertType = function (type, variable) {
    if (typeof variable !== type) {
        SimpleTest.error("[SimpleTest] Variable is not a(n) " + type + ". Variable: " + variable + ", Type: " + typeof variable);
    }
    return typeof variable === type;
};

/**
 * Check if variable is of type 'number'
 * @param {object} variable Variable to compare to type 'number'
 * @returns {boolean} Whether the variable is of type 'number'
 */
SimpleTest.assertNumber = function (variable) {
    if (typeof variable !== "number" || isNaN(variable)) {
        SimpleTest.error("[SimpleTest] Variable is not a number. Variable: " + variable + ", Type: " + typeof variable);
    }
    return typeof variable === "number";
};

/**
 * Check if variable is of type 'object'
 * @param {object} variable Variable to compare to type 'object'
 * @returns {boolean} Whether the variable is of type 'object'
 */
SimpleTest.assertObject = function (variable) {
    if (typeof variable !== "object") {
        SimpleTest.error("[SimpleTest] Variable is not an object. Variable: " + variable + ", Type: " + typeof variable);
    }
    return typeof variable === "object";
};

/**
 * Check if variable is of type 'string'
 * @param {object} variable Variable to compare to type 'string'
 * @returns {boolean} Whether the variable is of type 'string'
 */
SimpleTest.assertString = function (variable) {
    if (typeof variable !== "string") {
        SimpleTest.error("[SimpleTest] Variable is not a string. Variable: " + variable + ", Type: " + typeof variable);
    }
    return typeof variable === "string";
};

/**
 * Check if variable is of type 'boolean'
 * @param {object} variable Variable to compare to type 'boolean'
 * @returns {boolean} Whether the variable is of type 'boolean'
 */
SimpleTest.assertBoolean = function (variable) {
    if (typeof variable !== "boolean") {
        SimpleTest.error("[SimpleTest] Variable is not a boolean. Variable: " + variable + ", Type: " + typeof variable);
    }
    return typeof variable === "boolean";
};

/**
 * Check if variable is of type 'function'
 * @param {object} variable Variable to compare to type 'function'
 * @returns {boolean} Whether the variable is of type 'function'
 */
SimpleTest.assertFunction = function (variable) {
    if (typeof variable !== 'function') {
	SimpleTest.error("[SimpleTest] Variable is not a function. Variable: " + variable + ", Type: " + typeof variable);
    }
    return typeof variable === 'function';
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
};

/**
 * Get the amount of time it takes to run a function, returns in milliseconds
 * @param {function} func Function to run and time
 * @returns {number} Time it took to run function, in milliseconds
 */
SimpleTest.timeToRun = function(func){
    var d = new Date();
    var n = d.getTime();
    SimpleTest.assertFunction(func);
    func();
    return d.getTime() - n;
};

// Export functions to nodeJS if using NodeJS
if(module !== undefined){
    module.exports = {
        assertEquals: SimpleTest.assertEquals,
        assertType: SimpleTest.assertType,
        assertNumber: SimpleTest.assertNumber,
        assertObject: SimpleTest.assertObject,
        assertString: SimpleTest.assertString,
        assertBoolean: SimpleTest.assertBoolean,
        assertFalse: SimpleTest.assertFalse,
        assertTrue: SimpleTest.assertTrue,
        assertNotNull: SimpleTest.assertNotNull,
        assertNull: SimpleTest.assertNull,
        fail: SimpleTest.fail,
        timeToRun: SimpleTest.timeToRun
    };
}
