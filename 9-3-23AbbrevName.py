# Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

# The output should be two capital letters with a dot separating them.

# It should look like this:

# Sam Harris => S.H

# patrick feeney => P.F

def abbrev_name(name):
    #split everything 
    words = name.split()

    # Extract the first letter of each word and convert to uppercase
    first_initial = words[0][0].upper()
    second_initial = words[1][0].upper()

    # join w dot
    result = first_initial + '.' + second_initial
    return result