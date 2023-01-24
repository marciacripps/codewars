# There are two lists, possibly of different lengths. The first one consists of keys, the second one consists of values. Write a function createDict(keys, values) that returns a dictionary created from keys and values. If there are not enough values, the rest of keys should have a None (JS null)value. If there not enough keys, just ignore the rest of values.

# Example 1:

# keys = ['a', 'b', 'c', 'd']
# values = [1, 2, 3]
# createDict(keys, values) # returns {'a': 1, 'b': 2, 'c': 3, 'd': None}
# Example 2:

# keys = ['a', 'b', 'c']
# values = [1, 2, 3, 4]
# createDict(keys, values) # returns {'a': 1, 'b': 2, 'c': 3}

def create_dict(keys, values):
    result = {keys[i]: values[i] if i < len(values) else None for i in range(len(keys))}

    return result

    
    
#p - keys, and values
#r - dictionary from keys and values and a None value if theres not enough and ignore the rest
#e - keys = ['a', 'b', 'c', 'd']
#values = [1, 2, 3]
#createDict(keys, values) # returns {'a': 1, 'b': 2, 'c': 3, 'd': None}
#p - they want a dictionary so i'm going to set result = {}
# iterate through the keys list and uses the i variable as the index to access the corresponding key 
#and value in the keys and values lists
# comprehension checks if i is less than the length of the values list, If i is less than the length of 
#the values list, it adds the key and value to the dictionary. If i is greater than or equal to the length 
#of the values list, it adds the key and None as value.

#see below for using for loops
def createDict(keys, values):
    # Create a dictionary using a list comprehension
    result = {keys[i]: values[i] if i < len(values) else None for i in range(len(keys))}

    return result

    
keys = ["key1", "key2", "key3"]
values = [1, 2]
print(createDict(keys, values))  # Output: {'key1': 1, 'key2': 2, 'key3': None}
