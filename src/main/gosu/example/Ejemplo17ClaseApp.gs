package example


public class Ejemplo17ClaseApp {


  static function main(args: String[]) : void {
    var map = { "isOverlyVerbose" -> false }
    var list = { map }
    /*
    Enhancements

    Gosu adds a whole slew of enhancements to collections classes. Here are some of the most useful ones for java.lang.Iterable<T>:

    Enhancement	Description
    allMatch( cond(elt1 : T):boolean ) : boolean	Returns true if all elements in this collection match the given condition and false otherwise
    average( select:block(elt:T):java.lang.Number ) : BigDecimal	Return the average of the mapped value
    concat( that : Collection<T> ) : Collection<T>	Return a new list that is the concatenation of the two lists
    Count() : int	Return the number of elements in this Iterable object
    countWhere( cond(elt:T):boolean ) : int	Return the count of elements in this collection that match the given condition
    disjunction( that : Collection<T> ) : Set<T>	Returns a the set disjunction of this collection and the other collection, that is, all elements that are in one collection not and not the other
    each( operation(elt : T) )	This method will invoke the operation on each element in the Collection
    eachWithIndex( operation(elt : T, index : int ) )	This method will invoke the operation on each element in the Collection, passing in the index as well as the element
    first() : T	Returns the first element in this collection. If the collection is empty, null is returned
    firstWhere( cond(elt:T):boolean ) : T	Returns the first element in this collection that matches the given condition. If no element matches the criteria, null is returned
    fold( aggregator(elt1 : T, elt2 : T):T ) : T	Returns all the values of this collection folded into a single value
    hasMatch( cond(elt1 : T):boolean ) : boolean	Returns true if any elements in this collection match the given condition and false otherwise
    intersect( that : Collection<T> ) : Set<T>	Return the set intersection of these two collections
    join( delimiter : String ) : String	Coerces each element in the collecion to a string and joins them together with the given delimiter
    last() : T	Returns the last element in this collection. If the collection is empty, null is returned
    lastWhere( cond(elt:T):boolean ) : T	Returns the last element in this collection that matches the given condition. If the collection is empty, null is returned
    map<Q>( mapper(elt : T):Q ) : List<Q>	Maps the values of the collection to a list of values by calling the mapper block on each element
    maxBy( comparison(elt : T):Comparable ) : T	Returns the maximum value of this collection with respect to the Comparable attribute calculated by the given block. If more than one element has the maximum value, the first element encountered is returned
    max<R extends Comparable>( transform(elt:T):R ) : R	Returns the maximum value of the transformed elements
    minBy( comparison(elt : T):Comparable ) : T	Returns the minimum value of this collection with respect to the Comparable attribute calculated by the given block. If more than one element has the minimum value, the first element encountered is returned
    min<R extends Comparable>( transform(elt:T):R ) : R	Returns the minimum value of the transformed elements
    partitionUniquely<Q>( mapper(elt : T):Q ) : Map<Q, T>	Partitions each element into a Map where the keys are the value produce by the mapper block and the values are the elements of the Collection. If two elements map to the same key an IllegalStateException is thrown
    orderBy<R extends Comparable>( value(elt:T):R ) : IOrderedList<T>	Returns a lazily-computed List that consists of the elements of this Collection, ordered by the value mapped to by the given block
    orderByDescending<R extends Comparable>( value(elt:T):R ) : IOrderedList<T>	Returns a lazily-computed List that consists of the elements of this Collection, descendingly ordered by the value mapped to by the given block
    reduce<V>( init : V, aggregator(val : V, elt2 : T):V ) : V	Returns all the values of this collection down to a single value
    removeWhere( cond(elt:T):boolean )	Removes all elements that match the given condition in this collection
    retainWhere( cond(elt:T):boolean )	Retains all elements that match the given condition in this collection
    reverse() : List<T>	Returns a new list of the elements in the collection, in their reverse iteration order
    single() : T	Returns a single element from this iterable, if only one exists. It no elements are in this iterable, or if there are more than one elements in it, an IllegalStateException is thrown
    singleWhere( cond(elt:T):boolean ) : T	Returns a single item matching the given condition. If there is no such element or if multiple elements match the condition, and IllegalStateException is thrown
    subtract( that : Collection<T> ) : Set<T>	Returns the Set subtraction of that Collection from this Collection
    toCollection() : Collection<T>	If this Iterable is already a Collection, return this Itearble cast to a Collection. Otherwise create a new Collection and copy this Iterable into it
    toList() : List<T>	If this Iterable is already a List, return this Iterable cast to a List. Otherwise create a new List and copy this Iterable into it
    toSet() : Set<T>	If this Iterable is already a Set, return this Iterable cast to a Set. Otherwise create a new Set based on this Iterable
    toTypedArray() : T[]	Returns a strongly-typed array of this Iterable, as opposed to the argumentless Iterable#toArray(), which returns an Object array. This method takes advantage of static reification and, therefore, does not necessarily return an array that matches the theoretical runtime type of the Iterable, if actual reification were supported
    union( that : Collection<T> ) : Set<T>	Returns the set union of the two collections
    where( cond(elt:T): boolean ) : List<T>	Returns all the elements of this collection for which the given condition is true
    whereTypeIs<R>( type : Type<R> ) : List<R>	Returns all the elements of this collection that are assignable to the given type
    zip<R>( other : Iterable<R>) : List<Pair<T,R>>	Returns a list of gw.util.Pairs of elements from matching indices of this and the other Iterables. If one Iterable contains more elements than the other then only return a list of the same length as the shortest of the two Iterables.
     */
  }

}