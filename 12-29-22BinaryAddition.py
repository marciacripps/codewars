# Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

# The binary number returned should be a string.

# Examples:(Input1, Input2 --> Output (explanation)))

# 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
# 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

def add_binary(a,b):
    #convert to binary 
    binary_a = bin(a)
    binary_b = bin(b)
    #add two binary together 
    sum_binary = int(binary_a, 2) + int(binary_b, 2)
    return bin(sum_binary)[2:]

#shorter answer below
def add_binary(a,b):
    return f"{a + b:b}"