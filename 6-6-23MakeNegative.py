# In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

# Examples
# make_negative(1);  # return -1
# make_negative(-5); # return -5
# make_negative(0);  # return 0
# Notes
# The number can be negative already, in which case no change is required.
# Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.


def make_negative( number ):
    if number <=0: 
        return number
    else: 
        return number * -1 

#a nested ternery below 
    
def make_negative( number ):
    return (number if number <=0 else number * -1)
    

#parameters - number
#returns - make it negative if its positive 
#return itself if its negative or 0 
#example: make_negative(1);  # return -1
#psuedo code - if its 0 or - return number else return number*-1