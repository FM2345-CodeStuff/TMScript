function updateOutput(output) {
    const outputFrame = document.getElementById('outputFrame');
    const outputDocument = outputFrame.contentWindow.document;
    outputDocument.body.innerHTML = output;
}

console.log("Welcome to TMScript Compiler.");
console.log(" ");
const input_command = prompt('Write a command (write_text for example): ');
const variables = {};
if (input_command === "write_text") {
    const text_to_write = prompt('Insert the text you want to write: ');
    console.log(" ");
    console.log(text_to_write);
} else if (input_command === "create_var") {
    const var_name = prompt('Insert the variable name: ');
    const var_value = prompt('Insert the variable value (in numbers): ');
    if (isNaN(var_value) || typeof var_value !== 'string') {
        console.log("Error 002: Invalid variable value. Only numbers are allowed.");
    } else {
        variables[var_name] = Number(var_value);
        console.log(" ");
        console.log("Variable created:", var_name, "=", variables[var_name]);
    }
} else {
    console.log("Error 001: Not a valid command.");
}
