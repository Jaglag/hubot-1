"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _AbstractHandler2 = require('./AbstractHandler');

var _AbstractHandler3 = _interopRequireDefault(_AbstractHandler2);

var HelpHandler = (function (_AbstractHandler) {
    _inherits(HelpHandler, _AbstractHandler);

    function HelpHandler(robot) {
        _classCallCheck(this, HelpHandler);

        _get(Object.getPrototypeOf(HelpHandler.prototype), "constructor", this).call(this, robot);

        this.scripts = {};
        this.addScript(this);
    }

    _createClass(HelpHandler, [{
        key: "addScript",
        value: function addScript(cls) {
            this.scripts[cls.getName()] = cls;
        }
    }, {
        key: "bindRespond",
        value: function bindRespond() {
            var _this = this;

            this.robot.respond(/lfg ?(help)? ?(.+)?/i, function (res) {
                //console.log(res, res.match[2]);
                if (res.match[2] !== undefined) {
                    var script = _this.scripts[res.match[2]];

                    return res.send(script.getName() + ": " + script.getDescription() + "\n```" + script.getHelp() + "```");
                }

                var response = "Select a script to get help for by running `!lfg help \<script>`\n\n```";
                for (var _name in _this.scripts) {
                    if (!_this.scripts.hasOwnProperty(_name)) {
                        continue;
                    }

                    var script = _this.scripts[_name];
                    response += _name + ": " + script.getDescription() + "\n";
                }

                res.send(response + "```");
            });
        }
    }, {
        key: "getName",
        value: function getName() {
            return 'help';
        }
    }, {
        key: "getDescription",
        value: function getDescription() {
            return 'LFG Help Script';
        }
    }, {
        key: "getHelp",
        value: function getHelp() {
            return "Commands:\nlfg - Returns a list of scripts with help\nlfg help - Returns a list of scripts with help\nlfg help <script> - Returns the help information for the given script\n        ";
        }
    }]);

    return HelpHandler;
})(_AbstractHandler3["default"]);

exports["default"] = HelpHandler;
module.exports = exports["default"];
