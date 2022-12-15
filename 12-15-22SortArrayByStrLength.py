# Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

# For example, if this array were passed as an argument:

# ["Telescopes", "Glasses", "Eyes", "Monocles"]

# Your function would return the following array:

# ["Eyes", "Glasses", "Monocles", "Telescopes"]

# All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

def sort_by_length(arr):
    return sorted(arr, key=lambda e: len(e))

def sort_by_length(arr):
  arr.sort(key = len) # key sorts them by parameter of choosing
  return arr


def sort_by_length(arr):
    newlist = []
    newlist.append(arr[0])
    for i in arr[1:]:
        for x in range(len(newlist)):
            if len(i) < len(newlist[0]):
                newlist.insert(0,i)
                break
            elif len(i) < len(newlist[x]):
                newlist.insert(x,i)
                break
            elif len(i) > len(newlist[-1]):
                newlist.append(i)
                break
    return newlist