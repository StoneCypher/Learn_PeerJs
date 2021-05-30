var learn_peerjs = (function (exports) {
    'use strict';

    var ts = {};

    Object.defineProperty(ts, "__esModule", { value: true });
    exports.message = ts.message = exports.hello = ts.hello = void 0;
    var message = "Hello, world!";
    exports.message = ts.message = message;
    var hello = function () {
        return console.log();
    };
    exports.hello = ts.hello = hello;
    window.onload = function () { return hello(); };

    exports.default = ts;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}));
