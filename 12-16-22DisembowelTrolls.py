# Trolls are attacking your comment section!

# A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

# Your task is to write a function that takes a string and return a new string with all vowels removed.

# For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

# Note: for this kata y isn't considered a vowel.

def disemvowel(string):
    vowels = 'aeiouAEIOU'
    new_string = ''
    for i in string:
    	if i not in vowels:
        	new_string+= i 
    return new_string

#p set vowels = 'aeiouAEIOU' and a new_string = ' ' empty 
#r same string without vowels 
#e 
#p run it thru a for loop and say if the letters ARE NOT in what i called vowels return it 