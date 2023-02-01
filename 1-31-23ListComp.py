# Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.
def include(arr,item):
    return bool([True for i in arr if i == item])

#p - an array of numbers and a single number
#r - True or False so boolean 
#e - include([1,2,3,4], 3), True 
#p - list comprehension return a bool 
#true for i in arr if i == item 

def include(arr,item):
    return item in arr #The in keyword checks if item exists in arr or not. If exists returns True else False 

def include(arr,item):
    for i in arr:
        if i == item:
            return True
    return False