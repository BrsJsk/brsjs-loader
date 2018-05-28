'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('./style.min.css');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Loader = function () {
    function Loader(placeToDisplay, type) {
        _classCallCheck(this, Loader);

        this.uniqueClassName = '-brsjsloader';
        this.type = type ? type : 'standard';
        this.element = document.getElementById(placeToDisplay);
        this.loader = document.createElement("div");
        this.loader.className = this.type + this.uniqueClassName;
    }

    _createClass(Loader, [{
        key: 'hide',
        value: function hide() {
            this.loader.remove();
        }
    }, {
        key: 'show',
        value: function show() {
            this.element.appendChild(this.loader);
        }
    }]);

    return Loader;
}();

exports.default = Loader;