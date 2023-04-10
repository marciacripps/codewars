# Given 2 strings, a and b, return a string of the form short+long+short, 
#with the shorter string on the outside and the longer string on the inside. 
#The strings will not be the same length, but they may be empty ( zero length ).


#p - a and b
# r - concatenated together short length string on outside and long on inside
# e - ("22", "1") --> "1221"
#p - check length of a and b, then concatenate short on front and end 
# conditional where if its a>b then return b+a+b else a+b+a 

def solution(a, b):
    if len(a)>len(b):
        return b+a+b
    else:
        return a+b+a
    
def solution(a, b):
    return a+b+a if len(a)<len(b) else b+a+b