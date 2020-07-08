// Write your solution in this file!
const driver = {};
function updateDriverWithKeyAndValue(driver, key, value) {
    const driver2 = Object.assign({}, driver)
    driver2[key] = value;
    return driver2
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver
}

function deleteFromDriverByKey(driver, key) {
    const driver2 = Object.assign({}, driver)
    delete driver2[key];
    return driver2
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver
}
