# Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

# Examples (Input -> Output)
# * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
# * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
# * [42, 54, 65, 87, 0]             -> min = 0, max = 87
# * [5]                             -> min = 5, max = 5
# Notes
# You may consider that there will not be any empty arrays/vectors.


#using baked in stuff and easiest answer 
def minimum(arr):
    return min(arr)

def maximum(arr):
    return max(arr) 

#list comprehension answer 
def max_value(lst):
    return max([i for i in lst])

def min_value(lst):
    return min([i for i in lst])
numbers = [4,6,2,1,9,63,-134,566]
print(max_value(numbers))  # Output: 566
print(min_value(numbers))  # Output: -134

#for loop answer 
def min(arr):
    low = arr[0]
    for i in arr[1:]:
        if i < low:
            low = i
    return low

def max(arr):
    high = arr[0]
    for i in arr[1:]:
        if i > high:
            high = i
    return high