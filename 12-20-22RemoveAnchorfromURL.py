# Complete the function/method so that it returns the url with anything after the anchor (#) removed.
def remove_url_anchor(url):
    anchor = url.find('#')
    if anchor == -1: 
        return url 
    else:
        return url[:anchor]
    
#p - random string thats a url that may or may not have a # in it
#r - same string w no # 
#e - "www.codewars.com#about" --> "www.codewars.com"
#p - use the find() method and have it find # then make a conditional where
# if the # is NOT present to return the url the other conditional is to return the url up to the # 