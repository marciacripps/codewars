# I have four positive integers, A, B, C and D, where A < B < C < D. 
# The input is a list of the integers A, B, C, D, AxB, BxC, CxD, DxA in some order. 
# Your task is to return the value of D.

ns = [2, 3, 4, 1, 12, 6, 2, 4]

def alphabet(ns):
    ns = sorted(ns)
    ns.remove(ns[0] * ns[1])
    return ns[-1] / ns[2]

print(alphabet(ns))