# Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

# Examples (input -> output)
# 6, "I"     -> "IIIIII"
# 5, "Hello" -> "HelloHelloHelloHelloHello"

#easy solution 
def repeat_str(repeat, string):
    return repeat * string
repeat_str(21, 'twentyonesavage')

#using a for loop 
def repeat_str(repeat, string):
    str = ''
    for i in range(repeat):
        str += string
    return str
repeat_str(22, 'idk_about_you')

#using a list comprehension 
def repeat_str(repeat, string):
    return ''.join([string for i in range(repeat)])
repeat_str(23, 'jordan_year')