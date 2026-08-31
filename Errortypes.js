// 1. ReferenceError

try {
    console.log(username);
} catch (error) {
    console.log("ReferenceError:", error.message);
}

// 2. TypeError

try {
    let name = "Ashwath";
    name.toFixed(2);
} catch (error) {
    console.log("TypeError:", error.message);
}

// 3. RangeError

try {
    let number = (10).toFixed(200);
} catch (error) {
    console.log("RangeError:", error.message);
}