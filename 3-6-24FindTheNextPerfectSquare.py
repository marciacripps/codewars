# You might know some pretty large perfect squares. But what about the NEXT one?

# Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

# If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

# Examples:(Input --> Output)

# 121 --> 144
# 625 --> 676
# 114 --> -1 since 114 is not a perfect square


# import math 
# y = 11
# x = y **2
# print(x)
# y = 11
# x = math.sqrt(x)
# print(x)

import math 
def find_next_square(sq):
    if math.sqrt(sq) % 1 == 0:
        return (math.sqrt(sq) + 1) **2
    else:
        return -1
    
import math

def find_next_square(sq):
    return (math.sqrt(sq) + 1) ** 2 if math.sqrt(sq) % 1 == 0 else -1


# js version
# function findNextSquare(sq) {
#   if (Math.sqrt(sq)%1==0){
#     return Math.pow(Math.sqrt(sq)+1, 2) 
#   }
#   else{
#     return -1
#   }
# }