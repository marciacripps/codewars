# Given a number n, return the number of positive odd numbers below n, EASY!

# Examples (Input -> Output)
# 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
# 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])

def odd_count(n):
    count = 0
    for i in range(n):
        if i % 2 != 0:
            count +=1
    return count

def odd_count(n):
    count = 0
    i = 0
    while i < n:
        if i & 1:
            count += 1
        i += 1
    return count
