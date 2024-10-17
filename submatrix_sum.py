# Write a function in your favorite programming language that takes a two-dimensional integer array (matrix), and two indices in the array, and use those to compute the sum of the submatrix bounded by the two indices. In other words, Imagine they represent corners of a box and you’re summing the values inside the box.  

# Example matrix -
# [[2 1 4 5 2],
#  [2 2 1 5 3],
#  [2 5 2 1 7],
#  [7 5 4 3 2]]

#one matrix and 2 indices 
# just the sum is returned
# [2 1 4 5 2] result would be 2 +1 + 5 + 5 +2 +1 

def submatrix_sum(matrix, point1, point2):
    #get points 
    row1, col1 = point1
    row2, col2 = point2

    #find boundaries 
    top_row = min(row1, row2)
    #i had this as min for bottom_row instead of max but i corrected it now 
    bottom_row = max(row1, row2)
    left_col = min(col1, col2)
    right_col = max(col1, col2)

    total_sum = 0

    for i in range(top_row, bottom_row + 1):
        for j in range(left_col, right_col + 1):
            total_sum += matrix[i][j]

    return total_sum

matrix = [
    [2, 1, 4, 5, 2],
    [2, 2, 1, 5, 3],
    [2, 5, 2, 1, 7],
    [7, 5, 4, 3, 2]
]

point1 = (0, 0)  
point2 = (2, 2)  

result = submatrix_sum(matrix, point1, point2)
print(result)
