"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
//type ENV = 'production'|'development'|'test'
var useKeydown = function (domID) {
    if (domID === void 0) { domID = ""; }
    var _a = react_1.useState('NN'), subKey = _a[0], handleSubKey = _a[1];
    var _b = react_1.useState(''), mainKey = _b[0], handleMainKey = _b[1];
    react_1.useEffect(function () {
        try {
            if (domID === "")
                document.addEventListener('keydown', handleKeydown);
            else {
                var dom = document.getElementById(domID);
                dom === null || dom === void 0 ? void 0 : dom.addEventListener('keydown', handleKeydown);
            }
        }
        catch (e) {
            console.error('error in useKeydown', e);
        }
        return function () { return removeEventListener('keydown', handleKeydown); };
    }, []);
    var handleKeydown = function (e) {
        var key = e.key;
        switch (key) {
            case 'Control':
            case 'Alt':
            case 'Tab':
            case 'Shift':
                (subKey === key) ? handleSubKey('NN') : handleSubKey(key);
                //when the same subKey pressed, it turns "NN"
                break;
            default:
                handleMainKey(key);
        }
    };
    var initKeys = function () {
        handleSubKey('NN');
        handleMainKey('');
    };
    return { subKey: subKey, mainKey: mainKey, initKeys: initKeys };
};
exports.default = useKeydown;
