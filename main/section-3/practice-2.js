'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  if(!collectionA || !objectB){
            return;
  }
  for(var i=0; i<collectionA.length; i++){
            for(var j=0; j<objectB.value.length; j++){
                      if(collectionA[i].key == objectB.value[j]){
                                var des = Math.floor(collectionA[i].count/3)
                                collectionA[i].count -= des
                      }
            }
  }
  return collectionA;
}
