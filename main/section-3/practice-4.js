'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  var collectionType = []
  var collectionC = []
  for(var i=0; i<collectionA.length; i++){
            var pattern = /(\w+)-(\d)/g.exec(collectionA[i])
            if(pattern){
                      if(collectionType.indexOf(pattern[1]) == -1){
                               collectionType.push(pattern[1]);
                              var object = {key:pattern[1],count:parseInt(pattern[2],10)}
                              collectionC.push(object); 
                      }
                      
            }
            else if(collectionType.indexOf(collectionA[i]) == -1){
                      collectionType.push(collectionA[i]);
                      var object = {key:collectionA[i],count:1}
                      collectionC.push(object);
            }
            else{
                      for(var j=0; j<collectionC.length; j++){
                                if(collectionC[j].key == collectionA[i]){
                                          collectionC[j].count++
                                          break
                                }
                      }
            }
  }
  for(var k=0; k<collectionC.length; k++){
            for(var p=0; p<objectB.value.length; p++){
                      if(collectionC[k].key == objectB.value[p]){
                                var des = Math.floor(collectionC[k].count/3)
                                collectionC[k].count -= des
                      }
            }
  }
  return collectionC;
}
