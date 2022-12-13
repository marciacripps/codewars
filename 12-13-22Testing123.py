# Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

# Write a function which takes a list of strings and returns each line prepended by the correct number.

# The numbering starts at 1. The format is n: string. Notice the colon and space in between.

# Examples: (Input --> Output)

# [] --> []
# ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

def number(lines):
    formatted=[]
    for i in range(len(lines)):
        formatted.append(str(i+1)+": "+lines[i])
    return formatted

#p strings 
#r formatted "1: n" dont forget the sapce 
#e 
#p set formatted to empty [] then do a for loop that loops thru lines until the end 
#appends a str of index posiiton +1 then a space and then lines[i]which is the letter 


def number(lines):
    return ["{}: {}".format(str(i+1), c) for i,c in enumerate(lines)]

    #dryer answer ^^^ 