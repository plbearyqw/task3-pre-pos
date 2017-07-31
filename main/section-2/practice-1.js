'use strict';

module.exports = function countSameElements(collection) {
  var collectionType = []
  var result = []
  for(var i=0; i<collection.length; i++){
            if(collectionType.indexOf(collection[i]) == -1){
                      collectionType.push(collection[i]);
                      var object = {key:collection[i],count:1}
                      result.push(object);
            }
            else{
                      for(var j=0; j<result.length; j++){
                                if(result[j].key == collection[i]){
                                          result[j].count++
                                          break
                                }
                      }
            }
  }
  return result;
}
