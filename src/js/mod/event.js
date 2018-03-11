var EventCent = (function () {
    var events = {};
    function on(evt, handler) {
        events[evt] = events[evt] || [];
        events[evt].push({
            handler: handler
        });
        function fire(evt, args) {
            if(!events[evt]){
                return;
            }
            for(var i=0; i<events[evt].length; i++){
                events[evt][i].handler(args);
            }
        }
    }
    return {
        on: on,
        fire: fire
    }
})();

module.exports = EventCent;

//用法：
// EventCent.on('text-change', function (data) {
//     console.log(data);
// })

// EventCent.on('text-change', function (data) {
//     alert(1);
// })

// EventCent.fire('text-change', 100);