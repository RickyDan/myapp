//单例模式
var mySingle = (function(){
    var instance;
    function init(){
        var privateMethod = function(){
            console.log("I am a private method");
        };
        var privateProperty = 'I am a private property';
        return {
            publicMethod: privateMethod,
            publicProperty: 'public property'
        };
    }
    return {
        getInstance: function(){
            if(!instance){
                return instance = init();
            }else{
                return instance;
            }
        }
    }
}());
console.log('陆遥，我好想你');