print("Welcome to TMScript Compiler.")
print(" ")
input_command = input('Write a command (write_text for example): ')

variables = {}

if input_command == "write_text":
    text_to_write = input('Insert the text you want to write: ')
    print(" ")
    print(text_to_write)
    
elif input_command == "create_var":
    var_name = input('Insert the variable name: ')
    var_value = input('Insert the variable value (in numbers): ')
    if isinstance(var_value, str):
        print("Error 002: Invalid variable value. Only numbers are allowed.")
    else:
        variables[var_name] = var_value
        print (" ")
        print("Variable created:", var_name, "=", variables[var_name])

else:
    print("Error 001: Not a valid command.")
