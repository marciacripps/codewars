#create a function that takes in an array 
#sum the SECOND lowest and SECOND highest number

def sum_second_low(arr):
    arr.sort()
    return arr[1] + arr[-2]
sum_second_low([0,4,8,6,5])