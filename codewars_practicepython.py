def number_to_pwr(x,n):
    pwr = 1
    for i in range(n):
        pwr *= x
    return pwr

def distinct(seq):
    return list(dict.fromkeys(seq))

def distinct(seq):
    return list(dict.fromkeys(seq))

def lovefunc( flower1, flower2 ):
    return flower1 % 2 != flower2 % 2 
lovefunc(0,1)

def greet(language):
    hello= {"english":"Welcome",
               "czech":"Vitejte"}
    return hello.get(language,'Welcome')

greet('czech')

def greet(language):
    hello = {'english':'Welcome',
             'czech':'Vitejte'}
    return hello.get(language, 'Welcome')

def odds (arr):
    odd = []
    for i in arr:
        if i % 2 != 0:
            odd.append(i)
    return odd 

def odds(arr):
    return [i for i in arr if i % 2 != 0]

odds([1, 2, 3, 4, 5])



def smash(words):
    return ' '.join(words)

smash(['hello', 'world', 'this', 'is', 'great'])


def get_middle(s):
    length = len(s)
    middle = length//2

    if length % 2 == 0:
        return s[middle-1:middle+1]
    else:
        return s[middle]
    
get_middle('test')
        