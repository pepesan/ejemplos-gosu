
var lstOfStrings = {"This", "is", "a", "list"}
var longStrings = lstOfStrings.where( \ s -> s.length > 2 )
print( longStrings.join(", ") )  // prints "This, list"


lstOfStrings = {"This", "is", "a", "list"}
longStrings = lstOfStrings.where( \ s -> s.length > 2 )
                               .map( \ s -> s.toUpperCase() )  // converts each string to upper case
                               .orderBy( \ s -> s )            // there is a .order() method that could be used here instead
print( longStrings.join(", ") ) // prints "LIST, THIS"




