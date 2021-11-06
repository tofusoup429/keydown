"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useKeydown = function (nodeEnv) {
    var _a = react_1.useState('NN'), subKey = _a[0], handleSubKey = _a[1];
    var _b = react_1.useState(''), mainKey = _b[0], handleMainKey = _b[1];
    react_1.useEffect(function () {
        window.addEventListener('keydown', handleKeydown);
        return function () { return removeEventListener('keydown', handleKeydown); };
    }, []);
    var handleKeydown = function (e) {
        if (nodeEnv === 'production')
            e.preventDefault();
        var key = e.key;
        switch (key) {
            case 'Control' || 'Alt' || 'Tab':
                handleSubKey(key);
                break;
            default:
                handleMainKey(key);
        }
        handleMainKey(e.key);
    };
    if (nodeEnv === 'development')
        console.log('subKey', subKey, 'mainKey', mainKey);
    return { subKey: subKey, mainKey: mainKey };
};
exports.default = useKeydown;
