var appModule = require("../common/appModule");

appModule.service("appDispatcher", function() {
    
    var events = {};
    
    function raise(eventName, args) {
        var callbacks = events[eventName];
        if(callbacks) {
            callbacks.forEach(function(callback) {
                callback.method.call(callback.obj, args);
            });
        }
    }

    function subscribe(eventName, obj, method) {
        var callbacks = events[eventName];
        if(!callbacks) {
            callbacks = events[eventName] = [];
        }
        
        callbacks.push({obj:obj, method: method});
    }

    function unsubscribe(eventName, obj, method) {
        var callbacks = events[eventName];
        if(!callbacks) {
            return;
        }

        for(var i=0; i<callbacks.length; i++) {
            var callback = callbacks[i];

            if(callback.obj==obj && callback.method==method) {
                callbacks.splice(i, 1);

                return;
            }
        }
    }

    return {
        subscribe: subscribe,
        unsubscribe: unsubscribe,
        raise: raise,
    };
});
