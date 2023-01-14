var decartes;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/decartes.ts":
/*!*************************!*\
  !*** ./src/decartes.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.LineSegment = exports.DrawObject = exports.LineMaterial = exports.LineSegmentGeometry = exports.Scene = exports.Camera = exports.Color = exports.Vector = void 0;
var Vector_1 = __importDefault(__webpack_require__(/*! ./lib/Vector */ "./src/lib/Vector.ts"));
exports.Vector = Vector_1["default"];
var Color_1 = __importDefault(__webpack_require__(/*! ./lib/Color */ "./src/lib/Color.ts"));
exports.Color = Color_1["default"];
var Camera_1 = __importDefault(__webpack_require__(/*! ./lib/Camera */ "./src/lib/Camera.ts"));
exports.Camera = Camera_1["default"];
var Scene_1 = __importDefault(__webpack_require__(/*! ./lib/Scene */ "./src/lib/Scene.ts"));
exports.Scene = Scene_1["default"];
var Geometries_1 = __webpack_require__(/*! ./lib/Geometries */ "./src/lib/Geometries.ts");
Object.defineProperty(exports, "LineSegmentGeometry", ({
  enumerable: true,
  get: function get() {
    return Geometries_1.LineSegmentGeometry;
  }
}));
var Materials_1 = __webpack_require__(/*! ./lib/Materials */ "./src/lib/Materials.ts");
Object.defineProperty(exports, "LineMaterial", ({
  enumerable: true,
  get: function get() {
    return Materials_1.LineMaterial;
  }
}));
var DrawObjects_1 = __webpack_require__(/*! ./lib/DrawObjects */ "./src/lib/DrawObjects.ts");
Object.defineProperty(exports, "LineSegment", ({
  enumerable: true,
  get: function get() {
    return DrawObjects_1.LineSegment;
  }
}));
Object.defineProperty(exports, "DrawObject", ({
  enumerable: true,
  get: function get() {
    return DrawObjects_1.DrawObject;
  }
}));
exports["default"] = {
  Vector: Vector_1["default"],
  Color: Color_1["default"],
  Camera: Camera_1["default"],
  Scene: Scene_1["default"],
  LineSegmentGeometry: Geometries_1.LineSegmentGeometry,
  LineMaterial: Materials_1.LineMaterial,
  DrawObject: DrawObjects_1.DrawObject,
  LineSegment: DrawObjects_1.LineSegment
};

/***/ }),

/***/ "./src/lib/Camera.ts":
/*!***************************!*\
  !*** ./src/lib/Camera.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var Vector_1 = __importDefault(__webpack_require__(/*! ./Vector */ "./src/lib/Vector.ts"));
var Camera = /*#__PURE__*/function () {
  function Camera() {
    _classCallCheck(this, Camera);
    _defineProperty(this, "default", {
      center: [0, 0],
      scale: 1,
      screen: [100, 100]
    });
    _defineProperty(this, "center", void 0);
    _defineProperty(this, "scale", void 0);
    _defineProperty(this, "screen", void 0);
    this.center = new Vector_1["default"](this["default"].center);
    this.screen = new Vector_1["default"](this["default"].screen);
    this.scale = this["default"].scale;
  }
  _createClass(Camera, [{
    key: "drawCenter",
    get: function get() {
      return this.center.times(this.drawScale).sub(this.screen.times(0.5));
    }
  }, {
    key: "drawScale",
    get: function get() {
      return this.scale * Math.min(this.screen.x, this.screen.y) / 2;
    }
  }, {
    key: "loc",
    value: function loc(pointer) {
      pointer = new Vector_1["default"](pointer);
      return pointer.plus(this.drawCenter).times(1 / this.drawScale);
    }
  }, {
    key: "pointer",
    value: function pointer(loc) {
      loc = new Vector_1["default"](loc);
      return loc.times(this.drawScale).minus(this.drawCenter);
    }
  }, {
    key: "wheel",
    value: function wheel(cursor, factor) {
      var fixed = this.loc(cursor);
      this.center.mul(factor).sub(fixed.times(factor - 1));
      this.scale /= factor;
    }
  }, {
    key: "move",
    value: function move(movement) {
      movement = new Vector_1["default"](movement);
      this.center.sub(movement.times(1 / this.drawScale));
    }
  }]);
  return Camera;
}();
exports["default"] = Camera;

/***/ }),

/***/ "./src/lib/Color.ts":
/*!**************************!*\
  !*** ./src/lib/Color.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {



function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var Color = /*#__PURE__*/function () {
  function Color(data) {
    _classCallCheck(this, Color);
    _defineProperty(this, "r", 0);
    _defineProperty(this, "g", 0);
    _defineProperty(this, "b", 0);
    if (Color.isColor(data)) {
      this.set(data.r, data.g, data.b);
    }
    if (typeof data === 'string') {
      this.hex = data;
    }
    if (Color.isTriple(data)) {
      this.rgb = data;
    }
  }
  _createClass(Color, [{
    key: "set",
    value: function set(r, g, b) {
      var to_color_value = function to_color_value(x) {
        return x < 0 ? 0 : x > 255 ? 255 : Math.round(x);
      };
      this.r = to_color_value(r);
      this.g = to_color_value(g);
      this.b = to_color_value(b);
      return this;
    }
  }, {
    key: "rgb",
    get: function get() {
      return [this.r, this.g, this.b];
    },
    set: function set(data) {
      this.set.apply(this, _toConsumableArray(data));
    }
  }, {
    key: "hex",
    get: function get() {
      return '#' + this.rgb.map(function (x) {
        return x.toString(16).padStart(2, '0');
      }).join('');
    },
    set: function set(data) {
      var hex = data in _colorKeywords ? _colorKeywords[data] : data;
      var hexReg = hex.replace(/^#([a-f\d])([a-f\d])([a-f\d])$/i, function (_, r, g, b) {
        return '#' + r + r + g + g + b + b;
      }).substring(1).match(/.{2}/g);
      var rgb = hexReg === null ? [0, 0, 0] : hexReg.map(function (x) {
        return parseInt(x, 16);
      });
      this.set(rgb[0], rgb[1], rgb[2]);
    }
  }, {
    key: "clone",
    value: function clone() {
      return new Color(this);
    }
  }, {
    key: "mix",
    value: function mix(other) {
      var proportion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;
      var mix_channel = function mix_channel(a, b) {
        return a * (1 - proportion) + b * proportion;
      };
      var c = [mix_channel(this.r, other.r), mix_channel(this.g, other.g), mix_channel(this.b, other.b)];
      return new Color(c);
    }
  }], [{
    key: "isColor",
    value: function isColor(obj) {
      return obj instanceof Color;
    }
  }, {
    key: "isTriple",
    value: function isTriple(obj) {
      return Array.isArray(obj) && obj.length == 3;
    }
  }]);
  return Color;
}();
exports["default"] = Color;
var _colorKeywords = {
  'aliceblue': "#F0F8FF",
  'antiquewhite': "#FAEBD7",
  'aqua': "#00FFFF",
  'aquamarine': "#7FFFD4",
  'azure': "#F0FFFF",
  'beige': "#F5F5DC",
  'bisque': "#FFE4C4",
  'black': "#000000",
  'blanchedalmond': "#FFEBCD",
  'blue': "#0000FF",
  'blueviolet': "#8A2BE2",
  'brown': "#A52A2A",
  'burlywood': "#DEB887",
  'cadetblue': "#5F9EA0",
  'chartreuse': "#7FFF00",
  'chocolate': "#D2691E",
  'coral': "#FF7F50",
  'cornflowerblue': "#6495ED",
  'cornsilk': "#FFF8DC",
  'crimson': "#DC143C",
  'cyan': "#00FFFF",
  'darkblue': "#00008B",
  'darkcyan': "#008B8B",
  'darkgoldenrod': "#B8860B",
  'darkgray': "#A9A9A9",
  'darkgreen': "#006400",
  'darkgrey': "#A9A9A9",
  'darkkhaki': "#BDB76B",
  'darkmagenta': "#8B008B",
  'darkolivegreen': "#556B2F",
  'darkorange': "#FF8C00",
  'darkorchid': "#9932CC",
  'darkred': "#8B0000",
  'darksalmon': "#E9967A",
  'darkseagreen': "#8FBC8F",
  'darkslateblue': "#483D8B",
  'darkslategray': "#2F4F4F",
  'darkslategrey': "#2F4F4F",
  'darkturquoise': "#00CED1",
  'darkviolet': "#9400D3",
  'deeppink': "#FF1493",
  'deepskyblue': "#00BFFF",
  'dimgray': "#696969",
  'dimgrey': "#696969",
  'dodgerblue': "#1E90FF",
  'firebrick': "#B22222",
  'floralwhite': "#FFFAF0",
  'forestgreen': "#228B22",
  'fuchsia': "#FF00FF",
  'gainsboro': "#DCDCDC",
  'ghostwhite': "#F8F8FF",
  'gold': "#FFD700",
  'goldenrod': "#DAA520",
  'gray': "#808080",
  'green': "#008000",
  'greenyellow': "#ADFF2F",
  'grey': "#808080",
  'honeydew': "#F0FFF0",
  'hotpink': "#FF69B4",
  'indianred': "#CD5C5C",
  'indigo': "#4B0082",
  'ivory': "#FFFFF0",
  'khaki': "#F0E68C",
  'lavender': "#E6E6FA",
  'lavenderblush': "#FFF0F5",
  'lawngreen': "#7CFC00",
  'lemonchiffon': "#FFFACD",
  'lightblue': "#ADD8E6",
  'lightcoral': "#F08080",
  'lightcyan': "#E0FFFF",
  'lightgoldenrodyellow': "#FAFAD2",
  'lightgray': "#D3D3D3",
  'lightgreen': "#90EE90",
  'lightgrey': "#D3D3D3",
  'lightpink': "#FFB6C1",
  'lightsalmon': "#FFA07A",
  'lightseagreen': "#20B2AA",
  'lightskyblue': "#87CEFA",
  'lightslategray': "#778899",
  'lightslategrey': "#778899",
  'lightsteelblue': "#B0C4DE",
  'lightyellow': "#FFFFE0",
  'lime': "#00FF00",
  'limegreen': "#32CD32",
  'linen': "#FAF0E6",
  'magenta': "#FF00FF",
  'maroon': "#800000",
  'mediumaquamarine': "#66CDAA",
  'mediumblue': "#0000CD",
  'mediumorchid': "#BA55D3",
  'mediumpurple': "#9370DB",
  'mediumseagreen': "#3CB371",
  'mediumslateblue': "#7B68EE",
  'mediumspringgreen': "#00FA9A",
  'mediumturquoise': "#48D1CC",
  'mediumvioletred': "#C71585",
  'midnightblue': "#191970",
  'mintcream': "#F5FFFA",
  'mistyrose': "#FFE4E1",
  'moccasin': "#FFE4B5",
  'navajowhite': "#FFDEAD",
  'navy': "#000080",
  'oldlace': "#FDF5E6",
  'olive': "#808000",
  'olivedrab': "#6B8E23",
  'orange': "#FFA500",
  'orangered': "#FF4500",
  'orchid': "#DA70D6",
  'palegoldenrod': "#EEE8AA",
  'palegreen': "#98FB98",
  'paleturquoise': "#AFEEEE",
  'palevioletred': "#DB7093",
  'papayawhip': "#FFEFD5",
  'peachpuff': "#FFDAB9",
  'peru': "#CD853F",
  'pink': "#FFC0CB",
  'plum': "#DDA0DD",
  'powderblue': "#B0E0E6",
  'purple': "#800080",
  'rebeccapurple': "#663399",
  'red': "#FF0000",
  'rosybrown': "#BC8F8F",
  'royalblue': "#4169E1",
  'saddlebrown': "#8B4513",
  'salmon': "#FA8072",
  'sandybrown': "#F4A460",
  'seagreen': "#2E8B57",
  'seashell': "#FFF5EE",
  'sienna': "#A0522D",
  'silver': "#C0C0C0",
  'skyblue': "#87CEEB",
  'slateblue': "#6A5ACD",
  'slategray': "#708090",
  'slategrey': "#708090",
  'snow': "#FFFAFA",
  'springgreen': "#00FF7F",
  'steelblue': "#4682B4",
  'tan': "#D2B48C",
  'teal': "#008080",
  'thistle': "#D8BFD8",
  'tomato': "#FF6347",
  'turquoise': "#40E0D0",
  'violet': "#EE82EE",
  'wheat': "#F5DEB3",
  'white': "#FFFFFF",
  'whitesmoke': "#F5F5F5",
  'yellow': "#FFFF00",
  'yellowgreen': "#9ACD32"
};

/***/ }),

/***/ "./src/lib/DrawObjects.ts":
/*!********************************!*\
  !*** ./src/lib/DrawObjects.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.LineSegment = exports.DrawObject = void 0;
var Geometries_1 = __webpack_require__(/*! ./Geometries */ "./src/lib/Geometries.ts");
var Materials_1 = __webpack_require__(/*! ./Materials */ "./src/lib/Materials.ts");
var Vector_1 = __importDefault(__webpack_require__(/*! ./Vector */ "./src/lib/Vector.ts"));
var DrawObject = /*#__PURE__*/function () {
  function DrawObject(type, geometry, material) {
    _classCallCheck(this, DrawObject);
    _defineProperty(this, "geometry", void 0);
    _defineProperty(this, "material", void 0);
    _defineProperty(this, "type", void 0);
    this.type = type;
    this.geometry = geometry;
    this.material = material;
  }
  _createClass(DrawObject, [{
    key: "draw",
    value: function draw(scene) {
      if (scene.ctx) {
        var camera = scene.camera;
        this.material.draw(scene.ctx);
        this.geometry.set_view_points(camera);
        this.geometry.draw(scene.ctx);
      }
    }
  }]);
  return DrawObject;
}();
exports.DrawObject = DrawObject;
var LineSegment = /*#__PURE__*/function (_DrawObject) {
  _inherits(LineSegment, _DrawObject);
  var _super = _createSuper(LineSegment);
  function LineSegment(_ref, materialConfig) {
    var a = _ref.a,
      b = _ref.b;
    _classCallCheck(this, LineSegment);
    return _super.call(this, 'line', new Geometries_1.LineSegmentGeometry({
      a: new Vector_1["default"](a),
      b: new Vector_1["default"](b)
    }), new Materials_1.LineMaterial(materialConfig));
  }
  return _createClass(LineSegment);
}(DrawObject);
exports.LineSegment = LineSegment;

/***/ }),

/***/ "./src/lib/Geometries.ts":
/*!*******************************!*\
  !*** ./src/lib/Geometries.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.LineSegmentGeometry = void 0;
var Vector_1 = __importDefault(__webpack_require__(/*! ./Vector */ "./src/lib/Vector.ts"));
var LineSegmentGeometry = /*#__PURE__*/function () {
  function LineSegmentGeometry(points) {
    _classCallCheck(this, LineSegmentGeometry);
    _defineProperty(this, "points", void 0);
    _defineProperty(this, "view_points", void 0);
    this.points = {
      a: new Vector_1["default"](points.a),
      b: new Vector_1["default"](points.b)
    };
    this.view_points = {
      a: new Vector_1["default"](),
      b: new Vector_1["default"]()
    };
  }
  _createClass(LineSegmentGeometry, [{
    key: "draw",
    value: function draw(ctx) {
      var _this$view_points = this.view_points,
        a = _this$view_points.a,
        b = _this$view_points.b;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
    }
  }, {
    key: "set_view_points",
    value: function set_view_points(camera) {
      this.view_points.a = camera.pointer(this.points.a);
      this.view_points.b = camera.pointer(this.points.b);
    }
  }]);
  return LineSegmentGeometry;
}();
exports.LineSegmentGeometry = LineSegmentGeometry;

/***/ }),

/***/ "./src/lib/Materials.ts":
/*!******************************!*\
  !*** ./src/lib/Materials.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.LineMaterial = void 0;
var Color_1 = __importDefault(__webpack_require__(/*! ./Color */ "./src/lib/Color.ts"));
var LineMaterial = /*#__PURE__*/function () {
  function LineMaterial(_ref) {
    var lineColor = _ref.lineColor,
      lineWidth = _ref.lineWidth;
    _classCallCheck(this, LineMaterial);
    _defineProperty(this, "default", {
      lineColor: '#000',
      lineWidth: 1
    });
    _defineProperty(this, "lineColor", void 0);
    _defineProperty(this, "lineWidth", void 0);
    this.lineColor = new Color_1["default"](lineColor ? lineColor : this["default"].lineColor);
    this.lineWidth = lineWidth ? lineWidth : this["default"].lineWidth;
  }
  _createClass(LineMaterial, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.lineWidth = this.lineWidth;
      ctx.strokeStyle = this.lineColor.hex;
    }
  }]);
  return LineMaterial;
}();
exports.LineMaterial = LineMaterial;

/***/ }),

/***/ "./src/lib/Scene.ts":
/*!**************************!*\
  !*** ./src/lib/Scene.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var Camera_1 = __importDefault(__webpack_require__(/*! ./Camera */ "./src/lib/Camera.ts"));
var Scene = /*#__PURE__*/function () {
  function Scene() {
    _classCallCheck(this, Scene);
    _defineProperty(this, "camera", void 0);
    _defineProperty(this, "canvas", void 0);
    _defineProperty(this, "viewObjects", void 0);
    _defineProperty(this, "ctx", void 0);
    this.camera = new Camera_1["default"]();
    this.canvas = document.createElement('canvas');
    this.viewObjects = [];
    this.ctx = null;
  }
  _createClass(Scene, [{
    key: "add",
    value: function add(obj) {
      this.viewObjects.push(obj);
    }
  }, {
    key: "setCanvas",
    value: function setCanvas(canvasContainer) {
      canvasContainer.appendChild(this.canvas);
      this.ctx = this.canvas.getContext('2d');
      var width = canvasContainer.clientWidth;
      var height = canvasContainer.clientHeight;
      this.canvas.width = width;
      this.canvas.height = height;
      this.camera.screen.set(width, height);
    }
  }, {
    key: "draw",
    value: function draw() {
      var _this = this;
      if (this.ctx) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.viewObjects.forEach(function (obj) {
          return obj.draw(_this);
        });
      }
    }
  }]);
  return Scene;
}();
exports["default"] = Scene;

/***/ }),

/***/ "./src/lib/Vector.ts":
/*!***************************!*\
  !*** ./src/lib/Vector.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {



function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _Symbol$iterator;
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
_Symbol$iterator = Symbol.iterator;
var Vector = /*#__PURE__*/function () {
  function Vector(point) {
    _classCallCheck(this, Vector);
    _defineProperty(this, "x", 0);
    _defineProperty(this, "y", 0);
    _defineProperty(this, "isVector", true);
    if (Vector.isVector(point)) {
      this.set(point.x, point.y);
    } else if (Vector.isPair(point)) {
      this.set.apply(this, _toConsumableArray(point));
    }
  }
  _createClass(Vector, [{
    key: "set",
    value: function set(x, y) {
      this.x = x;
      this.y = y;
      return this;
    }
  }, {
    key: "setScalar",
    value: function setScalar(s) {
      this.x = s;
      this.y = s;
      return this;
    }
  }, {
    key: "clone",
    value: function clone() {
      return new Vector(this);
    }
  }, {
    key: "addScaledVector",
    value: function addScaledVector(other, s) {
      var v = new Vector(other);
      this.x += v.x * s;
      this.y += v.y * s;
    }
  }, {
    key: "add",
    value: function add(other) {
      var v = new Vector(other);
      this.x += v.x;
      this.y += v.y;
      return this;
    }
  }, {
    key: "addScalar",
    value: function addScalar(s) {
      this.x += s;
      this.y += s;
      return this;
    }
  }, {
    key: "sub",
    value: function sub(other) {
      var v = new Vector(other);
      this.x -= v.x;
      this.y -= v.y;
      return this;
    }
  }, {
    key: "subScalar",
    value: function subScalar(s) {
      this.x -= s;
      this.y -= s;
      return this;
    }
  }, {
    key: "mul",
    value: function mul(s) {
      this.x *= s;
      this.y *= s;
      return this;
    }
  }, {
    key: "transform",
    value: function transform(matrix) {
      var x = this.x,
        y = this.y;
      this.x = x * matrix[0][0] + y * matrix[0][1];
      this.y = x * matrix[1][0] + y * matrix[1][1];
      return this;
    }
  }, {
    key: "floor",
    value: function floor() {
      this.x = Math.floor(this.x);
      this.y = Math.floor(this.y);
      return this;
    }
  }, {
    key: "ceil",
    value: function ceil() {
      this.x = Math.ceil(this.x);
      this.y = Math.ceil(this.y);
      return this;
    }
  }, {
    key: "round",
    value: function round() {
      this.x = Math.round(this.x);
      this.y = Math.round(this.y);
      return this;
    }
  }, {
    key: "negate",
    value: function negate() {
      this.x = -this.x;
      this.y = -this.y;
      return this;
    }
  }, {
    key: "dot",
    value: function dot(other) {
      var v = new Vector(other);
      return this.x * v.x + this.y * v.y;
    }
  }, {
    key: "cross",
    value: function cross(other) {
      var v = new Vector(other);
      return this.x * v.y - this.y * v.x;
    }
  }, {
    key: "length",
    get: function get() {
      return Math.sqrt(this.dot(this));
    },
    set: function set(length) {
      this.normalize().mul(length);
    }
  }, {
    key: "pair",
    get: function get() {
      return [this.x, this.y];
    }
  }, {
    key: "distance",
    value: function distance(other) {
      return this.minus(other).length;
    }
  }, {
    key: "plus",
    value: function plus(other) {
      return this.clone().add(other);
    }
  }, {
    key: "minus",
    value: function minus(other) {
      return this.clone().sub(other);
    }
  }, {
    key: "times",
    value: function times(num) {
      return this.clone().mul(num);
    }
  }, {
    key: "normalize",
    value: function normalize() {
      return this.mul(this.length ? 1 / this.length : 1);
    }
  }, {
    key: "lerp",
    value: function lerp(other, alpha) {
      var v = new Vector(other);
      this.x += (v.x - this.x) * alpha;
      this.y += (v.y - this.y) * alpha;
      return this;
    }
  }, {
    key: "equals",
    value: function equals(other) {
      var v = new Vector(other);
      return v.x === this.x && v.y === this.y;
    }
  }, {
    key: "rotate",
    value: function rotate(angle) {
      var other = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [0, 0];
      var v = new Vector(other);
      var c = Math.cos(angle),
        s = Math.sin(angle);
      var x = this.x - v.x;
      var y = this.y - v.y;
      this.x = x * c - y * s + v.x;
      this.y = x * s + y * c + v.y;
      return this;
    }
  }, {
    key: "random",
    value: function random() {
      this.x = Math.random();
      this.y = Math.random();
      return this;
    }
  }, {
    key: _Symbol$iterator,
    value: /*#__PURE__*/_regeneratorRuntime().mark(function value() {
      return _regeneratorRuntime().wrap(function value$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return this.x;
          case 2:
            _context.next = 4;
            return this.y;
          case 4:
          case "end":
            return _context.stop();
        }
      }, value, this);
    })
  }], [{
    key: "isVector",
    value: function isVector(obj) {
      return obj instanceof Vector;
    }
  }, {
    key: "isPair",
    value: function isPair(obj) {
      return Array.isArray(obj) && obj.length == 2;
    }
  }, {
    key: "isPoint",
    value: function isPoint(obj) {
      return Vector.isVector(obj) || Vector.isPair(obj);
    }
  }]);
  return Vector;
}();
exports["default"] = Vector;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/decartes.ts");
/******/ 	decartes = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0JBQWMwRCxHQUFHLEVBQUU7TUFDZixPQUFPQyxLQUFLLENBQUNDLE9BQU8sQ0FBQ0YsR0FBRyxDQUFDLElBQUlBLEdBQUcsQ0FBQ0csTUFBTSxJQUFJLENBQUM7SUFDaEQ7RUFBQztJQUFBO0lBQUEsT0FDRCxpQkFBZUgsR0FBRyxFQUFFO01BQ2hCLE9BQU8xRCxNQUFNLENBQUNpRyxRQUFRLENBQUN2QyxHQUFHLENBQUMsSUFBSTFELE1BQU0sQ0FBQ2tHLE1BQU0sQ0FBQ3hDLEdBQUcsQ0FBQztJQUNyRDtFQUFDO0VBQUE7QUFBQTtBQXFJTG5FLGtCQUFlLEdBQUdTLE1BQU07Ozs7OztVQzNKeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RlY2FydGVzLy4vc3JjL2RlY2FydGVzLnRzIiwid2VicGFjazovL2RlY2FydGVzLy4vc3JjL2xpYi9DYW1lcmEudHMiLCJ3ZWJwYWNrOi8vZGVjYXJ0ZXMvLi9zcmMvbGliL0NvbG9yLnRzIiwid2VicGFjazovL2RlY2FydGVzLy4vc3JjL2xpYi9EcmF3T2JqZWN0cy50cyIsIndlYnBhY2s6Ly9kZWNhcnRlcy8uL3NyYy9saWIvR2VvbWV0cmllcy50cyIsIndlYnBhY2s6Ly9kZWNhcnRlcy8uL3NyYy9saWIvTWF0ZXJpYWxzLnRzIiwid2VicGFjazovL2RlY2FydGVzLy4vc3JjL2xpYi9TY2VuZS50cyIsIndlYnBhY2s6Ly9kZWNhcnRlcy8uL3NyYy9saWIvVmVjdG9yLnRzIiwid2VicGFjazovL2RlY2FydGVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RlY2FydGVzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZGVjYXJ0ZXMvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2RlY2FydGVzL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTGluZVNlZ21lbnQgPSBleHBvcnRzLkRyYXdPYmplY3QgPSBleHBvcnRzLkxpbmVNYXRlcmlhbCA9IGV4cG9ydHMuTGluZVNlZ21lbnRHZW9tZXRyeSA9IGV4cG9ydHMuU2NlbmUgPSBleHBvcnRzLkNhbWVyYSA9IGV4cG9ydHMuQ29sb3IgPSBleHBvcnRzLlZlY3RvciA9IHZvaWQgMDtcbmNvbnN0IFZlY3Rvcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9WZWN0b3JcIikpO1xuZXhwb3J0cy5WZWN0b3IgPSBWZWN0b3JfMS5kZWZhdWx0O1xuY29uc3QgQ29sb3JfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9saWIvQ29sb3JcIikpO1xuZXhwb3J0cy5Db2xvciA9IENvbG9yXzEuZGVmYXVsdDtcbmNvbnN0IENhbWVyYV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9DYW1lcmFcIikpO1xuZXhwb3J0cy5DYW1lcmEgPSBDYW1lcmFfMS5kZWZhdWx0O1xuY29uc3QgU2NlbmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9saWIvU2NlbmVcIikpO1xuZXhwb3J0cy5TY2VuZSA9IFNjZW5lXzEuZGVmYXVsdDtcbmNvbnN0IEdlb21ldHJpZXNfMSA9IHJlcXVpcmUoXCIuL2xpYi9HZW9tZXRyaWVzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTGluZVNlZ21lbnRHZW9tZXRyeVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gR2VvbWV0cmllc18xLkxpbmVTZWdtZW50R2VvbWV0cnk7IH0gfSk7XG5jb25zdCBNYXRlcmlhbHNfMSA9IHJlcXVpcmUoXCIuL2xpYi9NYXRlcmlhbHNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJMaW5lTWF0ZXJpYWxcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIE1hdGVyaWFsc18xLkxpbmVNYXRlcmlhbDsgfSB9KTtcbmNvbnN0IERyYXdPYmplY3RzXzEgPSByZXF1aXJlKFwiLi9saWIvRHJhd09iamVjdHNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJMaW5lU2VnbWVudFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gRHJhd09iamVjdHNfMS5MaW5lU2VnbWVudDsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkRyYXdPYmplY3RcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIERyYXdPYmplY3RzXzEuRHJhd09iamVjdDsgfSB9KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBWZWN0b3I6IFZlY3Rvcl8xLmRlZmF1bHQsXG4gICAgQ29sb3I6IENvbG9yXzEuZGVmYXVsdCxcbiAgICBDYW1lcmE6IENhbWVyYV8xLmRlZmF1bHQsXG4gICAgU2NlbmU6IFNjZW5lXzEuZGVmYXVsdCxcbiAgICBMaW5lU2VnbWVudEdlb21ldHJ5OiBHZW9tZXRyaWVzXzEuTGluZVNlZ21lbnRHZW9tZXRyeSxcbiAgICBMaW5lTWF0ZXJpYWw6IE1hdGVyaWFsc18xLkxpbmVNYXRlcmlhbCxcbiAgICBEcmF3T2JqZWN0OiBEcmF3T2JqZWN0c18xLkRyYXdPYmplY3QsIExpbmVTZWdtZW50OiBEcmF3T2JqZWN0c18xLkxpbmVTZWdtZW50XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBWZWN0b3JfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9WZWN0b3JcIikpO1xuY2xhc3MgQ2FtZXJhIHtcbiAgICBkZWZhdWx0ID0ge1xuICAgICAgICBjZW50ZXI6IFswLCAwXSxcbiAgICAgICAgc2NhbGU6IDEsXG4gICAgICAgIHNjcmVlbjogWzEwMCwgMTAwXVxuICAgIH07XG4gICAgY2VudGVyO1xuICAgIHNjYWxlO1xuICAgIHNjcmVlbjtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jZW50ZXIgPSBuZXcgVmVjdG9yXzEuZGVmYXVsdCh0aGlzLmRlZmF1bHQuY2VudGVyKTtcbiAgICAgICAgdGhpcy5zY3JlZW4gPSBuZXcgVmVjdG9yXzEuZGVmYXVsdCh0aGlzLmRlZmF1bHQuc2NyZWVuKTtcbiAgICAgICAgdGhpcy5zY2FsZSA9IHRoaXMuZGVmYXVsdC5zY2FsZTtcbiAgICB9XG4gICAgZ2V0IGRyYXdDZW50ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNlbnRlci50aW1lcyh0aGlzLmRyYXdTY2FsZSkuc3ViKHRoaXMuc2NyZWVuLnRpbWVzKDAuNSkpO1xuICAgIH1cbiAgICBnZXQgZHJhd1NjYWxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY2FsZSAqIE1hdGgubWluKHRoaXMuc2NyZWVuLngsIHRoaXMuc2NyZWVuLnkpIC8gMjtcbiAgICB9XG4gICAgbG9jKHBvaW50ZXIpIHtcbiAgICAgICAgcG9pbnRlciA9IG5ldyBWZWN0b3JfMS5kZWZhdWx0KHBvaW50ZXIpO1xuICAgICAgICByZXR1cm4gcG9pbnRlci5wbHVzKHRoaXMuZHJhd0NlbnRlcikudGltZXMoMSAvIHRoaXMuZHJhd1NjYWxlKTtcbiAgICB9XG4gICAgcG9pbnRlcihsb2MpIHtcbiAgICAgICAgbG9jID0gbmV3IFZlY3Rvcl8xLmRlZmF1bHQobG9jKTtcbiAgICAgICAgcmV0dXJuIGxvYy50aW1lcyh0aGlzLmRyYXdTY2FsZSkubWludXModGhpcy5kcmF3Q2VudGVyKTtcbiAgICB9XG4gICAgd2hlZWwoY3Vyc29yLCBmYWN0b3IpIHtcbiAgICAgICAgY29uc3QgZml4ZWQgPSB0aGlzLmxvYyhjdXJzb3IpO1xuICAgICAgICB0aGlzLmNlbnRlci5tdWwoZmFjdG9yKS5zdWIoZml4ZWQudGltZXMoZmFjdG9yIC0gMSkpO1xuICAgICAgICB0aGlzLnNjYWxlIC89IGZhY3RvcjtcbiAgICB9XG4gICAgbW92ZShtb3ZlbWVudCkge1xuICAgICAgICBtb3ZlbWVudCA9IG5ldyBWZWN0b3JfMS5kZWZhdWx0KG1vdmVtZW50KTtcbiAgICAgICAgdGhpcy5jZW50ZXIuc3ViKG1vdmVtZW50LnRpbWVzKDEgLyB0aGlzLmRyYXdTY2FsZSkpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IENhbWVyYTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgQ29sb3Ige1xuICAgIHIgPSAwO1xuICAgIGcgPSAwO1xuICAgIGIgPSAwO1xuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgaWYgKENvbG9yLmlzQ29sb3IoZGF0YSkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KGRhdGEuciwgZGF0YS5nLCBkYXRhLmIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgKGRhdGEpID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhpcy5oZXggPSBkYXRhO1xuICAgICAgICB9XG4gICAgICAgIGlmIChDb2xvci5pc1RyaXBsZShkYXRhKSkge1xuICAgICAgICAgICAgdGhpcy5yZ2IgPSBkYXRhO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldChyLCBnLCBiKSB7XG4gICAgICAgIGNvbnN0IHRvX2NvbG9yX3ZhbHVlID0gKHgpID0+IHggPCAwID8gMCA6IHggPiAyNTUgPyAyNTUgOiBNYXRoLnJvdW5kKHgpO1xuICAgICAgICB0aGlzLnIgPSB0b19jb2xvcl92YWx1ZShyKTtcbiAgICAgICAgdGhpcy5nID0gdG9fY29sb3JfdmFsdWUoZyk7XG4gICAgICAgIHRoaXMuYiA9IHRvX2NvbG9yX3ZhbHVlKGIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZ2V0IHJnYigpIHtcbiAgICAgICAgcmV0dXJuIFt0aGlzLnIsIHRoaXMuZywgdGhpcy5iXTtcbiAgICB9XG4gICAgc2V0IHJnYihkYXRhKSB7XG4gICAgICAgIHRoaXMuc2V0KC4uLmRhdGEpO1xuICAgIH1cbiAgICBnZXQgaGV4KCkge1xuICAgICAgICByZXR1cm4gJyMnICsgdGhpcy5yZ2IubWFwKHggPT4geC50b1N0cmluZygxNikucGFkU3RhcnQoMiwgJzAnKSkuam9pbignJyk7XG4gICAgfVxuICAgIHNldCBoZXgoZGF0YSkge1xuICAgICAgICBjb25zdCBoZXggPSBkYXRhIGluIF9jb2xvcktleXdvcmRzID8gX2NvbG9yS2V5d29yZHNbZGF0YV0gOiBkYXRhO1xuICAgICAgICBjb25zdCBoZXhSZWcgPSBoZXgucmVwbGFjZSgvXiMoW2EtZlxcZF0pKFthLWZcXGRdKShbYS1mXFxkXSkkL2ksIChfLCByLCBnLCBiKSA9PiAnIycgKyByICsgciArIGcgKyBnICsgYiArIGIpLnN1YnN0cmluZygxKS5tYXRjaCgvLnsyfS9nKTtcbiAgICAgICAgY29uc3QgcmdiID0gaGV4UmVnID09PSBudWxsID9cbiAgICAgICAgICAgIFswLCAwLCAwXSA6XG4gICAgICAgICAgICBoZXhSZWcubWFwKHggPT4gcGFyc2VJbnQoeCwgMTYpKTtcbiAgICAgICAgdGhpcy5zZXQocmdiWzBdLCByZ2JbMV0sIHJnYlsyXSk7XG4gICAgfVxuICAgIHN0YXRpYyBpc0NvbG9yKG9iaikge1xuICAgICAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgQ29sb3I7XG4gICAgfVxuICAgIHN0YXRpYyBpc1RyaXBsZShvYmopIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkob2JqKSAmJiBvYmoubGVuZ3RoID09IDM7XG4gICAgfVxuICAgIGNsb25lKCkge1xuICAgICAgICByZXR1cm4gbmV3IENvbG9yKHRoaXMpO1xuICAgIH1cbiAgICBtaXgob3RoZXIsIHByb3BvcnRpb24gPSAwLjUpIHtcbiAgICAgICAgY29uc3QgbWl4X2NoYW5uZWwgPSAoYSwgYikgPT4gYSAqICgxIC0gcHJvcG9ydGlvbikgKyBiICogcHJvcG9ydGlvbjtcbiAgICAgICAgY29uc3QgYyA9IFtcbiAgICAgICAgICAgIG1peF9jaGFubmVsKHRoaXMuciwgb3RoZXIuciksXG4gICAgICAgICAgICBtaXhfY2hhbm5lbCh0aGlzLmcsIG90aGVyLmcpLFxuICAgICAgICAgICAgbWl4X2NoYW5uZWwodGhpcy5iLCBvdGhlci5iKSxcbiAgICAgICAgXTtcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihjKTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBDb2xvcjtcbmNvbnN0IF9jb2xvcktleXdvcmRzID0ge1xuICAgICdhbGljZWJsdWUnOiBcIiNGMEY4RkZcIixcbiAgICAnYW50aXF1ZXdoaXRlJzogXCIjRkFFQkQ3XCIsXG4gICAgJ2FxdWEnOiBcIiMwMEZGRkZcIixcbiAgICAnYXF1YW1hcmluZSc6IFwiIzdGRkZENFwiLFxuICAgICdhenVyZSc6IFwiI0YwRkZGRlwiLFxuICAgICdiZWlnZSc6IFwiI0Y1RjVEQ1wiLFxuICAgICdiaXNxdWUnOiBcIiNGRkU0QzRcIixcbiAgICAnYmxhY2snOiBcIiMwMDAwMDBcIixcbiAgICAnYmxhbmNoZWRhbG1vbmQnOiBcIiNGRkVCQ0RcIixcbiAgICAnYmx1ZSc6IFwiIzAwMDBGRlwiLFxuICAgICdibHVldmlvbGV0JzogXCIjOEEyQkUyXCIsXG4gICAgJ2Jyb3duJzogXCIjQTUyQTJBXCIsXG4gICAgJ2J1cmx5d29vZCc6IFwiI0RFQjg4N1wiLFxuICAgICdjYWRldGJsdWUnOiBcIiM1RjlFQTBcIixcbiAgICAnY2hhcnRyZXVzZSc6IFwiIzdGRkYwMFwiLFxuICAgICdjaG9jb2xhdGUnOiBcIiNEMjY5MUVcIixcbiAgICAnY29yYWwnOiBcIiNGRjdGNTBcIixcbiAgICAnY29ybmZsb3dlcmJsdWUnOiBcIiM2NDk1RURcIixcbiAgICAnY29ybnNpbGsnOiBcIiNGRkY4RENcIixcbiAgICAnY3JpbXNvbic6IFwiI0RDMTQzQ1wiLFxuICAgICdjeWFuJzogXCIjMDBGRkZGXCIsXG4gICAgJ2RhcmtibHVlJzogXCIjMDAwMDhCXCIsXG4gICAgJ2RhcmtjeWFuJzogXCIjMDA4QjhCXCIsXG4gICAgJ2Rhcmtnb2xkZW5yb2QnOiBcIiNCODg2MEJcIixcbiAgICAnZGFya2dyYXknOiBcIiNBOUE5QTlcIixcbiAgICAnZGFya2dyZWVuJzogXCIjMDA2NDAwXCIsXG4gICAgJ2RhcmtncmV5JzogXCIjQTlBOUE5XCIsXG4gICAgJ2RhcmtraGFraSc6IFwiI0JEQjc2QlwiLFxuICAgICdkYXJrbWFnZW50YSc6IFwiIzhCMDA4QlwiLFxuICAgICdkYXJrb2xpdmVncmVlbic6IFwiIzU1NkIyRlwiLFxuICAgICdkYXJrb3JhbmdlJzogXCIjRkY4QzAwXCIsXG4gICAgJ2RhcmtvcmNoaWQnOiBcIiM5OTMyQ0NcIixcbiAgICAnZGFya3JlZCc6IFwiIzhCMDAwMFwiLFxuICAgICdkYXJrc2FsbW9uJzogXCIjRTk5NjdBXCIsXG4gICAgJ2RhcmtzZWFncmVlbic6IFwiIzhGQkM4RlwiLFxuICAgICdkYXJrc2xhdGVibHVlJzogXCIjNDgzRDhCXCIsXG4gICAgJ2RhcmtzbGF0ZWdyYXknOiBcIiMyRjRGNEZcIixcbiAgICAnZGFya3NsYXRlZ3JleSc6IFwiIzJGNEY0RlwiLFxuICAgICdkYXJrdHVycXVvaXNlJzogXCIjMDBDRUQxXCIsXG4gICAgJ2Rhcmt2aW9sZXQnOiBcIiM5NDAwRDNcIixcbiAgICAnZGVlcHBpbmsnOiBcIiNGRjE0OTNcIixcbiAgICAnZGVlcHNreWJsdWUnOiBcIiMwMEJGRkZcIixcbiAgICAnZGltZ3JheSc6IFwiIzY5Njk2OVwiLFxuICAgICdkaW1ncmV5JzogXCIjNjk2OTY5XCIsXG4gICAgJ2RvZGdlcmJsdWUnOiBcIiMxRTkwRkZcIixcbiAgICAnZmlyZWJyaWNrJzogXCIjQjIyMjIyXCIsXG4gICAgJ2Zsb3JhbHdoaXRlJzogXCIjRkZGQUYwXCIsXG4gICAgJ2ZvcmVzdGdyZWVuJzogXCIjMjI4QjIyXCIsXG4gICAgJ2Z1Y2hzaWEnOiBcIiNGRjAwRkZcIixcbiAgICAnZ2FpbnNib3JvJzogXCIjRENEQ0RDXCIsXG4gICAgJ2dob3N0d2hpdGUnOiBcIiNGOEY4RkZcIixcbiAgICAnZ29sZCc6IFwiI0ZGRDcwMFwiLFxuICAgICdnb2xkZW5yb2QnOiBcIiNEQUE1MjBcIixcbiAgICAnZ3JheSc6IFwiIzgwODA4MFwiLFxuICAgICdncmVlbic6IFwiIzAwODAwMFwiLFxuICAgICdncmVlbnllbGxvdyc6IFwiI0FERkYyRlwiLFxuICAgICdncmV5JzogXCIjODA4MDgwXCIsXG4gICAgJ2hvbmV5ZGV3JzogXCIjRjBGRkYwXCIsXG4gICAgJ2hvdHBpbmsnOiBcIiNGRjY5QjRcIixcbiAgICAnaW5kaWFucmVkJzogXCIjQ0Q1QzVDXCIsXG4gICAgJ2luZGlnbyc6IFwiIzRCMDA4MlwiLFxuICAgICdpdm9yeSc6IFwiI0ZGRkZGMFwiLFxuICAgICdraGFraSc6IFwiI0YwRTY4Q1wiLFxuICAgICdsYXZlbmRlcic6IFwiI0U2RTZGQVwiLFxuICAgICdsYXZlbmRlcmJsdXNoJzogXCIjRkZGMEY1XCIsXG4gICAgJ2xhd25ncmVlbic6IFwiIzdDRkMwMFwiLFxuICAgICdsZW1vbmNoaWZmb24nOiBcIiNGRkZBQ0RcIixcbiAgICAnbGlnaHRibHVlJzogXCIjQUREOEU2XCIsXG4gICAgJ2xpZ2h0Y29yYWwnOiBcIiNGMDgwODBcIixcbiAgICAnbGlnaHRjeWFuJzogXCIjRTBGRkZGXCIsXG4gICAgJ2xpZ2h0Z29sZGVucm9keWVsbG93JzogXCIjRkFGQUQyXCIsXG4gICAgJ2xpZ2h0Z3JheSc6IFwiI0QzRDNEM1wiLFxuICAgICdsaWdodGdyZWVuJzogXCIjOTBFRTkwXCIsXG4gICAgJ2xpZ2h0Z3JleSc6IFwiI0QzRDNEM1wiLFxuICAgICdsaWdodHBpbmsnOiBcIiNGRkI2QzFcIixcbiAgICAnbGlnaHRzYWxtb24nOiBcIiNGRkEwN0FcIixcbiAgICAnbGlnaHRzZWFncmVlbic6IFwiIzIwQjJBQVwiLFxuICAgICdsaWdodHNreWJsdWUnOiBcIiM4N0NFRkFcIixcbiAgICAnbGlnaHRzbGF0ZWdyYXknOiBcIiM3Nzg4OTlcIixcbiAgICAnbGlnaHRzbGF0ZWdyZXknOiBcIiM3Nzg4OTlcIixcbiAgICAnbGlnaHRzdGVlbGJsdWUnOiBcIiNCMEM0REVcIixcbiAgICAnbGlnaHR5ZWxsb3cnOiBcIiNGRkZGRTBcIixcbiAgICAnbGltZSc6IFwiIzAwRkYwMFwiLFxuICAgICdsaW1lZ3JlZW4nOiBcIiMzMkNEMzJcIixcbiAgICAnbGluZW4nOiBcIiNGQUYwRTZcIixcbiAgICAnbWFnZW50YSc6IFwiI0ZGMDBGRlwiLFxuICAgICdtYXJvb24nOiBcIiM4MDAwMDBcIixcbiAgICAnbWVkaXVtYXF1YW1hcmluZSc6IFwiIzY2Q0RBQVwiLFxuICAgICdtZWRpdW1ibHVlJzogXCIjMDAwMENEXCIsXG4gICAgJ21lZGl1bW9yY2hpZCc6IFwiI0JBNTVEM1wiLFxuICAgICdtZWRpdW1wdXJwbGUnOiBcIiM5MzcwREJcIixcbiAgICAnbWVkaXVtc2VhZ3JlZW4nOiBcIiMzQ0IzNzFcIixcbiAgICAnbWVkaXVtc2xhdGVibHVlJzogXCIjN0I2OEVFXCIsXG4gICAgJ21lZGl1bXNwcmluZ2dyZWVuJzogXCIjMDBGQTlBXCIsXG4gICAgJ21lZGl1bXR1cnF1b2lzZSc6IFwiIzQ4RDFDQ1wiLFxuICAgICdtZWRpdW12aW9sZXRyZWQnOiBcIiNDNzE1ODVcIixcbiAgICAnbWlkbmlnaHRibHVlJzogXCIjMTkxOTcwXCIsXG4gICAgJ21pbnRjcmVhbSc6IFwiI0Y1RkZGQVwiLFxuICAgICdtaXN0eXJvc2UnOiBcIiNGRkU0RTFcIixcbiAgICAnbW9jY2FzaW4nOiBcIiNGRkU0QjVcIixcbiAgICAnbmF2YWpvd2hpdGUnOiBcIiNGRkRFQURcIixcbiAgICAnbmF2eSc6IFwiIzAwMDA4MFwiLFxuICAgICdvbGRsYWNlJzogXCIjRkRGNUU2XCIsXG4gICAgJ29saXZlJzogXCIjODA4MDAwXCIsXG4gICAgJ29saXZlZHJhYic6IFwiIzZCOEUyM1wiLFxuICAgICdvcmFuZ2UnOiBcIiNGRkE1MDBcIixcbiAgICAnb3JhbmdlcmVkJzogXCIjRkY0NTAwXCIsXG4gICAgJ29yY2hpZCc6IFwiI0RBNzBENlwiLFxuICAgICdwYWxlZ29sZGVucm9kJzogXCIjRUVFOEFBXCIsXG4gICAgJ3BhbGVncmVlbic6IFwiIzk4RkI5OFwiLFxuICAgICdwYWxldHVycXVvaXNlJzogXCIjQUZFRUVFXCIsXG4gICAgJ3BhbGV2aW9sZXRyZWQnOiBcIiNEQjcwOTNcIixcbiAgICAncGFwYXlhd2hpcCc6IFwiI0ZGRUZENVwiLFxuICAgICdwZWFjaHB1ZmYnOiBcIiNGRkRBQjlcIixcbiAgICAncGVydSc6IFwiI0NEODUzRlwiLFxuICAgICdwaW5rJzogXCIjRkZDMENCXCIsXG4gICAgJ3BsdW0nOiBcIiNEREEwRERcIixcbiAgICAncG93ZGVyYmx1ZSc6IFwiI0IwRTBFNlwiLFxuICAgICdwdXJwbGUnOiBcIiM4MDAwODBcIixcbiAgICAncmViZWNjYXB1cnBsZSc6IFwiIzY2MzM5OVwiLFxuICAgICdyZWQnOiBcIiNGRjAwMDBcIixcbiAgICAncm9zeWJyb3duJzogXCIjQkM4RjhGXCIsXG4gICAgJ3JveWFsYmx1ZSc6IFwiIzQxNjlFMVwiLFxuICAgICdzYWRkbGVicm93bic6IFwiIzhCNDUxM1wiLFxuICAgICdzYWxtb24nOiBcIiNGQTgwNzJcIixcbiAgICAnc2FuZHlicm93bic6IFwiI0Y0QTQ2MFwiLFxuICAgICdzZWFncmVlbic6IFwiIzJFOEI1N1wiLFxuICAgICdzZWFzaGVsbCc6IFwiI0ZGRjVFRVwiLFxuICAgICdzaWVubmEnOiBcIiNBMDUyMkRcIixcbiAgICAnc2lsdmVyJzogXCIjQzBDMEMwXCIsXG4gICAgJ3NreWJsdWUnOiBcIiM4N0NFRUJcIixcbiAgICAnc2xhdGVibHVlJzogXCIjNkE1QUNEXCIsXG4gICAgJ3NsYXRlZ3JheSc6IFwiIzcwODA5MFwiLFxuICAgICdzbGF0ZWdyZXknOiBcIiM3MDgwOTBcIixcbiAgICAnc25vdyc6IFwiI0ZGRkFGQVwiLFxuICAgICdzcHJpbmdncmVlbic6IFwiIzAwRkY3RlwiLFxuICAgICdzdGVlbGJsdWUnOiBcIiM0NjgyQjRcIixcbiAgICAndGFuJzogXCIjRDJCNDhDXCIsXG4gICAgJ3RlYWwnOiBcIiMwMDgwODBcIixcbiAgICAndGhpc3RsZSc6IFwiI0Q4QkZEOFwiLFxuICAgICd0b21hdG8nOiBcIiNGRjYzNDdcIixcbiAgICAndHVycXVvaXNlJzogXCIjNDBFMEQwXCIsXG4gICAgJ3Zpb2xldCc6IFwiI0VFODJFRVwiLFxuICAgICd3aGVhdCc6IFwiI0Y1REVCM1wiLFxuICAgICd3aGl0ZSc6IFwiI0ZGRkZGRlwiLFxuICAgICd3aGl0ZXNtb2tlJzogXCIjRjVGNUY1XCIsXG4gICAgJ3llbGxvdyc6IFwiI0ZGRkYwMFwiLFxuICAgICd5ZWxsb3dncmVlbic6IFwiIzlBQ0QzMlwiXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkxpbmVTZWdtZW50ID0gZXhwb3J0cy5EcmF3T2JqZWN0ID0gdm9pZCAwO1xuY29uc3QgR2VvbWV0cmllc18xID0gcmVxdWlyZShcIi4vR2VvbWV0cmllc1wiKTtcbmNvbnN0IE1hdGVyaWFsc18xID0gcmVxdWlyZShcIi4vTWF0ZXJpYWxzXCIpO1xuY29uc3QgVmVjdG9yXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vVmVjdG9yXCIpKTtcbmNsYXNzIERyYXdPYmplY3Qge1xuICAgIGdlb21ldHJ5O1xuICAgIG1hdGVyaWFsO1xuICAgIHR5cGU7XG4gICAgY29uc3RydWN0b3IodHlwZSwgZ2VvbWV0cnksIG1hdGVyaWFsKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuZ2VvbWV0cnkgPSBnZW9tZXRyeTtcbiAgICAgICAgdGhpcy5tYXRlcmlhbCA9IG1hdGVyaWFsO1xuICAgIH1cbiAgICBkcmF3KHNjZW5lKSB7XG4gICAgICAgIGlmIChzY2VuZS5jdHgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhbWVyYSA9IHNjZW5lLmNhbWVyYTtcbiAgICAgICAgICAgIHRoaXMubWF0ZXJpYWwuZHJhdyhzY2VuZS5jdHgpO1xuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5zZXRfdmlld19wb2ludHMoY2FtZXJhKTtcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuZHJhdyhzY2VuZS5jdHgpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5EcmF3T2JqZWN0ID0gRHJhd09iamVjdDtcbmNsYXNzIExpbmVTZWdtZW50IGV4dGVuZHMgRHJhd09iamVjdCB7XG4gICAgY29uc3RydWN0b3IoeyBhLCBiIH0sIG1hdGVyaWFsQ29uZmlnKSB7XG4gICAgICAgIHN1cGVyKCdsaW5lJywgbmV3IEdlb21ldHJpZXNfMS5MaW5lU2VnbWVudEdlb21ldHJ5KHtcbiAgICAgICAgICAgIGE6IG5ldyBWZWN0b3JfMS5kZWZhdWx0KGEpLFxuICAgICAgICAgICAgYjogbmV3IFZlY3Rvcl8xLmRlZmF1bHQoYilcbiAgICAgICAgfSksIG5ldyBNYXRlcmlhbHNfMS5MaW5lTWF0ZXJpYWwobWF0ZXJpYWxDb25maWcpKTtcbiAgICB9XG59XG5leHBvcnRzLkxpbmVTZWdtZW50ID0gTGluZVNlZ21lbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTGluZVNlZ21lbnRHZW9tZXRyeSA9IHZvaWQgMDtcbmNvbnN0IFZlY3Rvcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1ZlY3RvclwiKSk7XG5jbGFzcyBMaW5lU2VnbWVudEdlb21ldHJ5IHtcbiAgICBwb2ludHM7XG4gICAgdmlld19wb2ludHM7XG4gICAgY29uc3RydWN0b3IocG9pbnRzKSB7XG4gICAgICAgIHRoaXMucG9pbnRzID0ge1xuICAgICAgICAgICAgYTogbmV3IFZlY3Rvcl8xLmRlZmF1bHQocG9pbnRzLmEpLFxuICAgICAgICAgICAgYjogbmV3IFZlY3Rvcl8xLmRlZmF1bHQocG9pbnRzLmIpXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudmlld19wb2ludHMgPSB7XG4gICAgICAgICAgICBhOiBuZXcgVmVjdG9yXzEuZGVmYXVsdCgpLFxuICAgICAgICAgICAgYjogbmV3IFZlY3Rvcl8xLmRlZmF1bHQoKVxuICAgICAgICB9O1xuICAgIH1cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjb25zdCB7IGEsIGIgfSA9IHRoaXMudmlld19wb2ludHM7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lm1vdmVUbyhhLngsIGEueSk7XG4gICAgICAgIGN0eC5saW5lVG8oYi54LCBiLnkpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfVxuICAgIHNldF92aWV3X3BvaW50cyhjYW1lcmEpIHtcbiAgICAgICAgdGhpcy52aWV3X3BvaW50cy5hID0gY2FtZXJhLnBvaW50ZXIodGhpcy5wb2ludHMuYSk7XG4gICAgICAgIHRoaXMudmlld19wb2ludHMuYiA9IGNhbWVyYS5wb2ludGVyKHRoaXMucG9pbnRzLmIpO1xuICAgIH1cbn1cbmV4cG9ydHMuTGluZVNlZ21lbnRHZW9tZXRyeSA9IExpbmVTZWdtZW50R2VvbWV0cnk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTGluZU1hdGVyaWFsID0gdm9pZCAwO1xuY29uc3QgQ29sb3JfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Db2xvclwiKSk7XG5jbGFzcyBMaW5lTWF0ZXJpYWwge1xuICAgIGRlZmF1bHQgPSB7XG4gICAgICAgIGxpbmVDb2xvcjogJyMwMDAnLFxuICAgICAgICBsaW5lV2lkdGg6IDFcbiAgICB9O1xuICAgIGxpbmVDb2xvcjtcbiAgICBsaW5lV2lkdGg7XG4gICAgY29uc3RydWN0b3IoeyBsaW5lQ29sb3IsIGxpbmVXaWR0aCB9KSB7XG4gICAgICAgIHRoaXMubGluZUNvbG9yID0gbmV3IENvbG9yXzEuZGVmYXVsdChsaW5lQ29sb3IgPyBsaW5lQ29sb3IgOiB0aGlzLmRlZmF1bHQubGluZUNvbG9yKTtcbiAgICAgICAgdGhpcy5saW5lV2lkdGggPSBsaW5lV2lkdGggPyBsaW5lV2lkdGggOiB0aGlzLmRlZmF1bHQubGluZVdpZHRoO1xuICAgIH1cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHgubGluZVdpZHRoID0gdGhpcy5saW5lV2lkdGg7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMubGluZUNvbG9yLmhleDtcbiAgICB9XG59XG5leHBvcnRzLkxpbmVNYXRlcmlhbCA9IExpbmVNYXRlcmlhbDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQ2FtZXJhXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vQ2FtZXJhXCIpKTtcbmNsYXNzIFNjZW5lIHtcbiAgICBjYW1lcmE7XG4gICAgY2FudmFzO1xuICAgIHZpZXdPYmplY3RzO1xuICAgIGN0eDtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jYW1lcmEgPSBuZXcgQ2FtZXJhXzEuZGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICB0aGlzLnZpZXdPYmplY3RzID0gW107XG4gICAgICAgIHRoaXMuY3R4ID0gbnVsbDtcbiAgICB9XG4gICAgYWRkKG9iaikge1xuICAgICAgICB0aGlzLnZpZXdPYmplY3RzLnB1c2gob2JqKTtcbiAgICB9XG4gICAgc2V0Q2FudmFzKGNhbnZhc0NvbnRhaW5lcikge1xuICAgICAgICBjYW52YXNDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gY2FudmFzQ29udGFpbmVyLmNsaWVudFdpZHRoO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBjYW52YXNDb250YWluZXIuY2xpZW50SGVpZ2h0O1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMuY2FtZXJhLnNjcmVlbi5zZXQod2lkdGgsIGhlaWdodCk7XG4gICAgfVxuICAgIGRyYXcoKSB7XG4gICAgICAgIGlmICh0aGlzLmN0eCkge1xuICAgICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgdGhpcy52aWV3T2JqZWN0cy5mb3JFYWNoKG9iaiA9PiBvYmouZHJhdyh0aGlzKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBTY2VuZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgVmVjdG9yIHtcbiAgICB4ID0gMDtcbiAgICB5ID0gMDtcbiAgICBpc1ZlY3RvciA9IHRydWU7XG4gICAgY29uc3RydWN0b3IocG9pbnQpIHtcbiAgICAgICAgaWYgKFZlY3Rvci5pc1ZlY3Rvcihwb2ludCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KHBvaW50LngsIHBvaW50LnkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKFZlY3Rvci5pc1BhaXIocG9pbnQpKSB7XG4gICAgICAgICAgICB0aGlzLnNldCguLi5wb2ludCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGlzVmVjdG9yKG9iaikge1xuICAgICAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgVmVjdG9yO1xuICAgIH1cbiAgICBzdGF0aWMgaXNQYWlyKG9iaikge1xuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShvYmopICYmIG9iai5sZW5ndGggPT0gMjtcbiAgICB9XG4gICAgc3RhdGljIGlzUG9pbnQob2JqKSB7XG4gICAgICAgIHJldHVybiBWZWN0b3IuaXNWZWN0b3Iob2JqKSB8fCBWZWN0b3IuaXNQYWlyKG9iaik7XG4gICAgfVxuICAgIHNldCh4LCB5KSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBzZXRTY2FsYXIocykge1xuICAgICAgICB0aGlzLnggPSBzO1xuICAgICAgICB0aGlzLnkgPSBzO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY2xvbmUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHRoaXMpO1xuICAgIH1cbiAgICBhZGRTY2FsZWRWZWN0b3Iob3RoZXIsIHMpIHtcbiAgICAgICAgY29uc3QgdiA9IG5ldyBWZWN0b3Iob3RoZXIpO1xuICAgICAgICB0aGlzLnggKz0gdi54ICogcztcbiAgICAgICAgdGhpcy55ICs9IHYueSAqIHM7XG4gICAgfVxuICAgIGFkZChvdGhlcikge1xuICAgICAgICBjb25zdCB2ID0gbmV3IFZlY3RvcihvdGhlcik7XG4gICAgICAgIHRoaXMueCArPSB2Lng7XG4gICAgICAgIHRoaXMueSArPSB2Lnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBhZGRTY2FsYXIocykge1xuICAgICAgICB0aGlzLnggKz0gcztcbiAgICAgICAgdGhpcy55ICs9IHM7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBzdWIob3RoZXIpIHtcbiAgICAgICAgY29uc3QgdiA9IG5ldyBWZWN0b3Iob3RoZXIpO1xuICAgICAgICB0aGlzLnggLT0gdi54O1xuICAgICAgICB0aGlzLnkgLT0gdi55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc3ViU2NhbGFyKHMpIHtcbiAgICAgICAgdGhpcy54IC09IHM7XG4gICAgICAgIHRoaXMueSAtPSBzO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgbXVsKHMpIHtcbiAgICAgICAgdGhpcy54ICo9IHM7XG4gICAgICAgIHRoaXMueSAqPSBzO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdHJhbnNmb3JtKG1hdHJpeCkge1xuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHRoaXM7XG4gICAgICAgIHRoaXMueCA9IHggKiBtYXRyaXhbMF1bMF0gKyB5ICogbWF0cml4WzBdWzFdO1xuICAgICAgICB0aGlzLnkgPSB4ICogbWF0cml4WzFdWzBdICsgeSAqIG1hdHJpeFsxXVsxXTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGZsb29yKCkge1xuICAgICAgICB0aGlzLnggPSBNYXRoLmZsb29yKHRoaXMueCk7XG4gICAgICAgIHRoaXMueSA9IE1hdGguZmxvb3IodGhpcy55KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGNlaWwoKSB7XG4gICAgICAgIHRoaXMueCA9IE1hdGguY2VpbCh0aGlzLngpO1xuICAgICAgICB0aGlzLnkgPSBNYXRoLmNlaWwodGhpcy55KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJvdW5kKCkge1xuICAgICAgICB0aGlzLnggPSBNYXRoLnJvdW5kKHRoaXMueCk7XG4gICAgICAgIHRoaXMueSA9IE1hdGgucm91bmQodGhpcy55KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIG5lZ2F0ZSgpIHtcbiAgICAgICAgdGhpcy54ID0gLXRoaXMueDtcbiAgICAgICAgdGhpcy55ID0gLXRoaXMueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGRvdChvdGhlcikge1xuICAgICAgICBjb25zdCB2ID0gbmV3IFZlY3RvcihvdGhlcik7XG4gICAgICAgIHJldHVybiB0aGlzLnggKiB2LnggKyB0aGlzLnkgKiB2Lnk7XG4gICAgfVxuICAgIGNyb3NzKG90aGVyKSB7XG4gICAgICAgIGNvbnN0IHYgPSBuZXcgVmVjdG9yKG90aGVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXMueCAqIHYueSAtIHRoaXMueSAqIHYueDtcbiAgICB9XG4gICAgZ2V0IGxlbmd0aCgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLmRvdCh0aGlzKSk7XG4gICAgfVxuICAgIHNldCBsZW5ndGgobGVuZ3RoKSB7XG4gICAgICAgIHRoaXMubm9ybWFsaXplKCkubXVsKGxlbmd0aCk7XG4gICAgfVxuICAgIGdldCBwYWlyKCkge1xuICAgICAgICByZXR1cm4gW3RoaXMueCwgdGhpcy55XTtcbiAgICB9XG4gICAgZGlzdGFuY2Uob3RoZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWludXMob3RoZXIpLmxlbmd0aDtcbiAgICB9XG4gICAgcGx1cyhvdGhlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5jbG9uZSgpLmFkZChvdGhlcik7XG4gICAgfVxuICAgIG1pbnVzKG90aGVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsb25lKCkuc3ViKG90aGVyKTtcbiAgICB9XG4gICAgdGltZXMobnVtKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsb25lKCkubXVsKG51bSk7XG4gICAgfVxuICAgIG5vcm1hbGl6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubXVsKHRoaXMubGVuZ3RoID8gMSAvIHRoaXMubGVuZ3RoIDogMSk7XG4gICAgfVxuICAgIGxlcnAob3RoZXIsIGFscGhhKSB7XG4gICAgICAgIGNvbnN0IHYgPSBuZXcgVmVjdG9yKG90aGVyKTtcbiAgICAgICAgdGhpcy54ICs9ICh2LnggLSB0aGlzLngpICogYWxwaGE7XG4gICAgICAgIHRoaXMueSArPSAodi55IC0gdGhpcy55KSAqIGFscGhhO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZXF1YWxzKG90aGVyKSB7XG4gICAgICAgIGNvbnN0IHYgPSBuZXcgVmVjdG9yKG90aGVyKTtcbiAgICAgICAgcmV0dXJuICgodi54ID09PSB0aGlzLngpICYmICh2LnkgPT09IHRoaXMueSkpO1xuICAgIH1cbiAgICByb3RhdGUoYW5nbGUsIG90aGVyID0gWzAsIDBdKSB7XG4gICAgICAgIGNvbnN0IHYgPSBuZXcgVmVjdG9yKG90aGVyKTtcbiAgICAgICAgY29uc3QgYyA9IE1hdGguY29zKGFuZ2xlKSwgcyA9IE1hdGguc2luKGFuZ2xlKTtcbiAgICAgICAgY29uc3QgeCA9IHRoaXMueCAtIHYueDtcbiAgICAgICAgY29uc3QgeSA9IHRoaXMueSAtIHYueTtcbiAgICAgICAgdGhpcy54ID0geCAqIGMgLSB5ICogcyArIHYueDtcbiAgICAgICAgdGhpcy55ID0geCAqIHMgKyB5ICogYyArIHYueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJhbmRvbSgpIHtcbiAgICAgICAgdGhpcy54ID0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgdGhpcy55ID0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgICpbU3ltYm9sLml0ZXJhdG9yXSgpIHtcbiAgICAgICAgeWllbGQgdGhpcy54O1xuICAgICAgICB5aWVsZCB0aGlzLnk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gVmVjdG9yO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2RlY2FydGVzLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbIl9faW1wb3J0RGVmYXVsdCIsIm1vZCIsIl9fZXNNb2R1bGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIkxpbmVTZWdtZW50IiwiRHJhd09iamVjdCIsIkxpbmVNYXRlcmlhbCIsIkxpbmVTZWdtZW50R2VvbWV0cnkiLCJTY2VuZSIsIkNhbWVyYSIsIkNvbG9yIiwiVmVjdG9yIiwiVmVjdG9yXzEiLCJyZXF1aXJlIiwiQ29sb3JfMSIsIkNhbWVyYV8xIiwiU2NlbmVfMSIsIkdlb21ldHJpZXNfMSIsImVudW1lcmFibGUiLCJnZXQiLCJNYXRlcmlhbHNfMSIsIkRyYXdPYmplY3RzXzEiLCJjZW50ZXIiLCJzY2FsZSIsInNjcmVlbiIsInRpbWVzIiwiZHJhd1NjYWxlIiwic3ViIiwiTWF0aCIsIm1pbiIsIngiLCJ5IiwicG9pbnRlciIsInBsdXMiLCJkcmF3Q2VudGVyIiwibG9jIiwibWludXMiLCJjdXJzb3IiLCJmYWN0b3IiLCJmaXhlZCIsIm11bCIsIm1vdmVtZW50IiwiZGF0YSIsImlzQ29sb3IiLCJzZXQiLCJyIiwiZyIsImIiLCJoZXgiLCJpc1RyaXBsZSIsInJnYiIsInRvX2NvbG9yX3ZhbHVlIiwicm91bmQiLCJtYXAiLCJ0b1N0cmluZyIsInBhZFN0YXJ0Iiwiam9pbiIsIl9jb2xvcktleXdvcmRzIiwiaGV4UmVnIiwicmVwbGFjZSIsIl8iLCJzdWJzdHJpbmciLCJtYXRjaCIsInBhcnNlSW50Iiwib3RoZXIiLCJwcm9wb3J0aW9uIiwibWl4X2NoYW5uZWwiLCJhIiwiYyIsIm9iaiIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsInR5cGUiLCJnZW9tZXRyeSIsIm1hdGVyaWFsIiwic2NlbmUiLCJjdHgiLCJjYW1lcmEiLCJkcmF3Iiwic2V0X3ZpZXdfcG9pbnRzIiwibWF0ZXJpYWxDb25maWciLCJwb2ludHMiLCJ2aWV3X3BvaW50cyIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZSIsImxpbmVDb2xvciIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwidmlld09iamVjdHMiLCJwdXNoIiwiY2FudmFzQ29udGFpbmVyIiwiYXBwZW5kQ2hpbGQiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJjbGllbnRXaWR0aCIsImhlaWdodCIsImNsaWVudEhlaWdodCIsImNsZWFyUmVjdCIsImZvckVhY2giLCJTeW1ib2wiLCJpdGVyYXRvciIsInBvaW50IiwiaXNWZWN0b3IiLCJpc1BhaXIiLCJzIiwidiIsIm1hdHJpeCIsImZsb29yIiwiY2VpbCIsInNxcnQiLCJkb3QiLCJub3JtYWxpemUiLCJjbG9uZSIsImFkZCIsIm51bSIsImFscGhhIiwiYW5nbGUiLCJjb3MiLCJzaW4iLCJyYW5kb20iXSwic291cmNlUm9vdCI6IiJ9