# A non-empty array a of length n is called an array of all possibilities if it contains all numbers between [0,a.length-1].
#Write a method named isAllPossibilities that accepts an integer array and returns true if the array is an array of all possibilities, else false.

# Example:

# a=[1,2,0,3]
# a.length-1=3 
# a includes [0,3] ,hence the function should return true

arr = [0,1,2,3,4]

def is_all_possibilities(arr):
    if not arr:  # Check if arr is empty
        return False

    for i in range(len(arr)):
        if i not in arr:
            return False
    return True

print(is_all_possibilities(arr))

#p - array 
#r - True or False 
#e - [3,2,1,0]),True
#p check for empty
#loop thru the arr length and range if i 
# is not in the arr return false 