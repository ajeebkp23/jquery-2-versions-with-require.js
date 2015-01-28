var reqOne = require.config({
    context: "version1",
    baseUrl: 'scripts/',
    paths: {
        jquery: 'lib/jquery.min',
    }
});

var reqTwo = require.config({
    context: "version2",
    baseUrl: 'scripts/',
    paths: {
        jquery: 'lib/jquery.modern',
    }
});

reqOne(["helper/util"], function(require,util) {
        //This function is called when scripts/helper/util.js is loaded.
            //If util.js calls define(), then this function is not fired until
                //util's dependencies have loaded, and the util argument will hold
                    //the module value for "helper/util".
//                    intheutil(); //This was done
                    console.log('util loaded');
});


reqOne(['require','jquery'],function(require,$){
    console.log( $().jquery );
});

reqOne(['require','jquery'],function(require,jq){
    console.log( jq().jquery );
});


reqOne(['require','jquery'],function(require,$){
    console.log( $().jquery);
});

reqTwo(['require','jquery'],function(require,$){
    console.log( $().jquery );
});

console.log('If no errors mean success!');
