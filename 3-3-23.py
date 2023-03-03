def delete_nth(order,max_e):
    counts = {}
    result = []
    for num in order: 
        if num not in counts:
            counts[num]=0
        if counts[num]<max_e:
            result.append(num)
            counts[num]+=1
    return result
    
#p - order has a array of number and max_e has one single number
#r - new list with each number of list at most N times without reordering
#e - [20,37,20,21], 1), [20,37,21]
#p - create an empty dictionary { }
#create an empty list [] 
# loop through the input list order and for each element:
# conditional: if the count of the element in the dictionary is less than max_e, 
#append it to the result list and add to its count in the dictionary.
# return results - make sure ur outside the loop 

###BETTER ANSWER BELOW####

def delete_nth(order,max_e):
    ans = []
    for o in order:
        if ans.count(o) < max_e: ans.append(o)
    return ans