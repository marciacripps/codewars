
# Given an array of integers, find the one that appears an odd number of times.

# There will always be only one integer that appears an odd number of times.
def find_it(seq):
    counts = {}
    for val in seq:
        if val in counts:
            counts[val] += 1
        else:
            counts[val] = 1

    for key in counts:
        if counts[key] % 2 == 1:
            return key


    
#p - array of numbers 
#r - one number that appears an odd number of times
#e - [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd)
#p - empty dictionary, loop and count, if count is odd return 