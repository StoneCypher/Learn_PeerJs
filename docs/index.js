var learn_peerjs = (function (exports) {
    'use strict';

    var ts = {};

    Object.defineProperty(ts, "__esModule", { value: true });
    exports.hello = ts.hello = void 0;
    var hello = function () {
        return console.log("Hello, world!");
    };
    exports.hello = ts.hello = hello;
    window.onload = function () { return hello(); };

    exports.default = ts;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}));
