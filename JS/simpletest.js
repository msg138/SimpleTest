var SimpleTest = {};

SimpleTest.throwErrors = true;

SimpleTest.error = function (msg) {
    console.log(msg);
    if (SimpleTest.throwErrors !== false) {
        throw (msg);
    }
    console.log("[SimpleTest] TEST FAILED");
};

SimpleTest.assertEquals = function (expected, actual) {
    var equal = expected === actual;
    if (!equal) {
        SimpleTest.error("[SimpleTest] Expected Does Not Equal Actual. Expected: " + expected + ", Actual: " + actual);
    }
    return equal;
};

SimpleTest.assertFalse = function (condition) {
    if (condition !== false) {
        SimpleTest.error("[SimpleTest] Condition Does Not Equal False. Condition: " + condition);
    }
    return !condition;
};

SimpleTest.assertTrue = function (condition) {
    if (condition !== true) {
        SimpleTest.error("[SimpleTest] Condition Does Not Equal True. Condition: " + condition);
    }
    return !condition;
};

SimpleTest.assertNotNull = function (object) {
    if (object === undefined) {
        SimpleTest.error("[SimpleTest] Object is undefined.");
    }
};

SimpleTest.assertNull = function (object) {
    if (object !== undefined) {
        SimpleTest.error("[SimpleTest] Object is not undefined. Object: " + object);
    }
};

SimpleTest.fail = function () {
    SimpleTest.error("[SimpleTest] Failed test.");
}