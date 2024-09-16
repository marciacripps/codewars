def sum_of_differences(arr):
    arr.sort()
    arr.reverse()
    sum = 0
    for i in range(len(arr)-1):
        sum += arr[i] - arr[i+1]
        
    return sum
sum_of_differences([2, 1, 10])


def points(games):
    score = 0
    for i in games:
        x = i.split(':')
        if x[0]>x[1]:
            score += 3
        elif x[0]==x[1]:
            score +=1
        else:
            score +=0
    return score
points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3'])

def distinct(seq):
    return list(dict.fromkeys(seq))

def distinct(seq):
    return list(dict.fromkeys(seq))

import pandas as pd
def distinct(seq):
    df = pd.Series(seq)
    return df.drop_duplicates(keep='first').tolist()

def distinct(seq):
    df = pd.Series(seq)
    return df.drop_duplicates(keep='first').tolist()

class Dog ():
    def __init__(self, breed):
        self.breed = breed
    def bark(self):
        return 'woof'
    

snoopy = Dog("Beagle")
print(snoopy.bark())  

scoobydoo = Dog("Great Dane")
print(scoobydoo.bark())  

class Python():
    def __init__(self,name):
        self.name = name

bubba = Python('Bubba')
bubba.name
