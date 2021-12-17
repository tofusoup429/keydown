"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
//type ENV = 'production'|'development'|'test'
var useKeydown = function (domID) {
    if (domID === void 0) { domID = ""; }
    var _a = react_1.useState(false), controlKeyDown = _a[0], handleControlKeyDown = _a[1];
    var _b = react_1.useState(false), shiftKeyDown = _b[0], handleShiftKeyDown = _b[1];
    var _c = react_1.useState(false), altKeyDown = _c[0], handleAltKeyDown = _c[1];
    var _d = react_1.useState(false), tabKeyDown = _d[0], handleTabKeyDown = _d[1];
    var _e = react_1.useState(''), mainKey = _e[0], handleMainKey = _e[1];
    var _f = react_1.useState(false), disabled = _f[0], handleDisabled = _f[1];
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
        if (!disabled) {
            switch (key) {
                case 'Control':
                    handleControlKeyDown(true);
                    break;
                case 'Alt':
                    handleAltKeyDown(true);
                    break;
                case 'Tab':
                    handleTabKeyDown(true);
                    break;
                case 'Shift':
                    handleShiftKeyDown(true);
                    break;
                default:
                    handleMainKey(key);
            }
        }
    };
    var initKeys = function () {
        handleMainKey('');
        handleControlKeyDown(false);
        handleAltKeyDown(false);
        handleShiftKeyDown(false);
        handleTabKeyDown(false);
    };
    var switchDisable = function () {
        initKeys();
        handleDisabled(function (old) { return !old; });
    };
    return { controlKeyDown: controlKeyDown, altKeyDown: altKeyDown, shiftKeyDown: shiftKeyDown, tabKeyDown: tabKeyDown, mainKey: mainKey, initKeys: initKeys, switchDisable: switchDisable };
};
exports.default = useKeydown;
