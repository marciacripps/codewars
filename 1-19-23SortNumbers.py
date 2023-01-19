# Finish the solution so that it sorts the passed in array of numbers. 
# If the function passes in an empty array or null/nil value then it should return an empty array.

# For example:

# solution([1,2,3,10,5]) # should return [1,2,3,5,10]
# solution(None) # should return []

def solution(nums):
    if nums is None: 
        return []
    else:
        return sorted(nums)
    
    
#p - random numbers or an empty array or null/nil value
#r - same random numbers but in order and if its null return an empty array
#e - solution([1,2,3,10,5]) # should return [1,2,3,5,10]
#p - conditional whtere if nums is None we want an [] 
# then other condition is nums.sort()
#then return nums or just do sorted(nums)