# Given a string indicating a range of letters, return a string which includes all the letters in that range, including the last letter.
# Note that if the range is given in capital letters, return the string in capitals also!


def gimme_the_letters(rng):
    a,b = map(ord, rng.split('-'))
    return ''.join(map(chr, range(a,b+1)))