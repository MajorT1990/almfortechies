'use strict';

exports.sum = function(a,b) {
   if(!isNaN(a) && !isNaN(b)){
      return a + b;
   }else {
      return 0;
   }

};
