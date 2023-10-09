// Collection Functions (Arrays or Objects)
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else {
      for (let key in collection) {
        callback(collection[key]);
      }
    }
    return collection;
  }
  
  function myMap(collection, callback) {
    const result = [];
    myEach(collection, function (item) {
      result.push(callback(item));
    });
    return result;
  }
  
  function myReduce(collection, callback, acc) {
    let accumulator = acc !== undefined ? acc : collection[0];
    let startIndex = acc !== undefined ? 0 : 1;
    for (let i = startIndex; i < collection.length; i++) {
      accumulator = callback(accumulator, collection[i], collection);
    }
    return accumulator;
  }
  
  function myFind(collection, predicate) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        return collection[i];
      }
    }
  }
  
  function myFilter(collection, predicate) {
    const result = [];
    myEach(collection, function (item) {
      if (predicate(item)) {
        result.push(item);
      }
    });
    return result;
  }
  
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }
  
  // Array Functions
  function myFirst(array, n) {
    if (n === undefined) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  }
  
  function myLast(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    } else {
      return array.slice(-n);
    }
  }
  function myKeys(object) {
    return Object.keys(object);
  }
  
  function myValues(object) {
    return Object.values(object);
  }  