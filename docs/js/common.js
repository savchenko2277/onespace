/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 788:
/***/ (() => {

// глобальный объект для экспорта логики
window.Site = {};

/* Polyfills */
(function (e) {
  e.matches = e.matches || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector;
  e.closest = e.closest || function closest(selector) {
    if (!this) return null;
    if (this.matches(selector)) return this;
    if (!this.parentElement) {
      return null;
    } else return this.parentElement.closest(selector);
  };
})(Element.prototype);
(function (e) {
  var matches = e.matches || e.matchesSelector || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector;
  !matches ? e.matches = e.matchesSelector = function matches(selector) {
    var matches = document.querySelectorAll(selector);
    var th = this;
    return Array.prototype.some.call(matches, function (e) {
      return e === th;
    });
  } : e.matches = e.matchesSelector = matches;
})(Element.prototype);

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";

;// ./src/js/libs/utils.js
var _this = undefined;
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
// Проверка на объект (не массив)
var isObject = function isObject(item) {
  return item && _typeof(item) === 'object' && !Array.isArray(item);
};

// Слияние двух объектов с глубокой вложенностью
var _mergeDeep = function mergeDeep(target) {
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }
  if (!sources.length) return target;
  var source = sources.shift();
  if (isObject(target) && isObject(source)) {
    for (var key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, _defineProperty({}, key, {}));
        _mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, _defineProperty({}, key, source[key]));
      }
    }
  }
  return _mergeDeep.apply(void 0, [target].concat(sources));
};

// Глубокое клонирование объекта

var _cloneObj = function cloneObj(obj) {
  if (obj === null || _typeof(obj) !== 'object') return obj;
  var newObj = Array.isArray(obj) ? [] : {};
  for (var prop in obj) {
    obj.hasOwnProperty(prop) && (newObj[prop] = _cloneObj(obj[prop]));
  }
  return newObj;
};

// Отложить вызов функции

var throttle = function throttle(fn) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
  var timeout = null;
  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    if (timeout === null) {
      // fn.apply(this, args);

      timeout = setTimeout(function () {
        fn.apply(_this, args);
        timeout = null;
      }, delay);
    }
  };
};

/* window.addEventListener("resize", throttle(() => {
	console.log('hello');
}, 200)); */

// Получить ширину прокрутки
var getScrollSize = function getScrollSize() {
  var outer = document.createElement('div');
  var inner = document.createElement('div');
  outer.style.overflow = 'scroll';
  outer.classList.add('scrollbar');
  document.body.appendChild(outer);
  outer.appendChild(inner);
  var scrollbarSize = outer.offsetWidth - inner.offsetWidth;
  document.body.removeChild(outer);
  return scrollbarSize;
};

// Получить высоту скрытого элемента
var getHeight = function getHeight(el) {
  if (!el) return;
  var computed = window.getComputedStyle(el);
  var height = el.offsetHeight;

  // Если элемент с "border-box", учитываем паддинги и бордеры
  if (computed.boxSizing !== "border-box") {
    height -= parseFloat(computed.paddingTop) + parseFloat(computed.borderBottomWidth) + parseFloat(computed.borderTopWidth) + parseFloat(computed.paddingBottom);
  }

  // Если высота авто и элемент скрыт, клонируем его для вычислений
  if (computed.height === 'auto' && computed.display === 'none') {
    var clone = el.cloneNode(true);
    Object.assign(clone.style, {
      visibility: 'hidden',
      overflow: 'visible',
      maxHeight: 'none',
      display: 'block',
      opacity: '0'
    });
    el.after(clone);
    height = clone.offsetHeight;
    clone.remove();
  }
  return height;
};

/* 
* Плавная прокрутка к заданному элементу 
* @вызов:
* 
import { scrollToId } from "../../js/libs/utils";
scrollToId(document.querySelectorAll('a[href^="#"]'));
* 
*/

var scrollToId = function scrollToId(items) {
  items.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      document.getElementById(item.getAttribute('href').substring(1)).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
};

/* 
* Плавная прокрутка к верху страницы
* @вызов:
* 
import { scrollToTop } from "../../js/libs/utils";
scrollToTop(document.querySelector('a[href^="top"]'));
* 
*/

var scrollToTop = function scrollToTop(item) {
  if (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
};

/* 
* Обновление заданного массива в localStorage
* @вызов:
* 
import { updateLocalStorage } from "../../js/libs/utils";
updateLocalStorage('myArray', 'item1');
updateLocalStorage('myArray', 'item1', false);
* 
*/

var updateLocalStorage = function updateLocalStorage(key, item) {
  var add = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var storage = JSON.parse(localStorage.getItem(key)) || [];
  var updated = add ? _toConsumableArray(new Set([].concat(_toConsumableArray(storage), [item]))) : storage.filter(function (val) {
    return val !== item;
  });
  localStorage.setItem(key, JSON.stringify(updated));
};

/* 
* Простая валидация формы
* @вызов:
* 
import { validate } from "../../js/libs/utils";
input.classList.toggle('error', !validate(input));
* 
*/

var validate = function validate(input) {
  if (!input || !input.dataset.rules) return true;
  var rules = input.dataset.rules.split(',').map(function (rule) {
    return rule.trim();
  }).filter(Boolean);
  if (!rules.length) return true;
  var value = input.value.trim();
  var patterns = {
    req: /.+/,
    omit: /^$/,
    num: /^\d*$/,
    name: /^[a-zA-Zа-яА-ЯёЁ\s-]+$/,
    phone: /^\+?\d{1,4}[-\d()\s]{5,20}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    url: /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/i
  };
  var _iterator = _createForOfIteratorHelper(rules),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var rule = _step.value;
      if (rule.startsWith('min:') && value.length < +rule.slice(4)) return false;
      if (rule.startsWith('max:') && value.length > +rule.slice(4)) return false;
      if (rule.startsWith('num:') && (isNaN(+value) || +value > +rule.slice(4))) return false;
      if (patterns[rule] && !patterns[rule].test(value)) return false;
      if (!patterns[rule] && !rule.includes(':')) {
        console.warn("Unknown rule: ".concat(rule));
        return false;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return true;
};

/* 
* Изменение высоты формы по мере ввода текста
* @вызов:
* 
import { textareaResize } from "../../js/libs/utils";
document.querySelectorAll('textarea').forEach(autoResizeTextarea);
* 
*/

var textareaResize = function textareaResize(textarea) {
  if (!textarea) return;
  var resize = function resize() {
    var style = getComputedStyle(textarea);
    var borderOffset = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + borderOffset + 'px';
  };
  textarea.addEventListener('input', resize);
  resize();
};
// EXTERNAL MODULE: ./src/js/polyfills.js
var polyfills = __webpack_require__(788);
;// ./src/js/common.js




// Функции

// Единицы высоты (ширины) экрана
function updateVH() {
  var _ref = window.visualViewport || {},
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? window.innerHeight : _ref$height,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? window.innerWidth : _ref$width;
  document.documentElement.style.setProperty('--vh', "".concat(height * 0.01, "px"));
  ['resize', 'orientationchange'].forEach(function (event) {
    window.addEventListener(event, throttle(updateVH, 200), {
      passive: true
    });
  });
}

// Ширина скроллбара
var setScrollbarWidth = function setScrollbarWidth() {
  document.documentElement.style.setProperty('--sw', "".concat(window.innerWidth - document.documentElement.clientWidth, "px"));
};

// Шапка

var setHeader = function setHeader() {
  var header = document.querySelector('.header');
  var headerBurger = header.querySelector('.header__burger');
  var updateHeader = function updateHeader() {
    var headerHeight = header ? header.offsetHeight : 0;
    document.documentElement.style.setProperty('--header-height', "".concat(headerHeight, "px"));
  };
  headerBurger.addEventListener('click', function () {
    header.classList.toggle('is-open');
    if (header.classList.contains('is-open')) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  });
  updateHeader();
  window.addEventListener('resize', throttle(updateHeader, 200), {
    passive: true
  });
};
var setParallax = function setParallax() {
  var parallaxBlocks = document.querySelectorAll('[data-parallax]');
  parallaxBlocks.forEach(function (block) {
    var items = block.querySelectorAll('[data-parallax-item]');
    var mouseX = 0,
      mouseY = 0;

    // Слушаем движение мыши внутри блока
    block.addEventListener('mousemove', function (e) {
      var rect = block.getBoundingClientRect();
      mouseX = e.clientX - rect.left - rect.width / 2;
      mouseY = e.clientY - rect.top - rect.height / 2;
    });

    // Сброс при уходе мыши
    block.addEventListener('mouseleave', function () {
      mouseX = 0;
      mouseY = 0;
    });

    // Для каждого элемента хранится текущее положение
    var states = Array.from(items).map(function () {
      return {
        x: 0,
        y: 0
      };
    });
    function animate() {
      items.forEach(function (item, index) {
        var data = item.dataset.parallaxItem.split(',');
        var radius = parseFloat(data[0]) || 10; // максимальное смещение
        var speed = parseFloat(data[1]) || 0.1; // скорость догонять цель

        // текущее положение догоняет цель
        states[index].x += (mouseX - states[index].x) * speed;
        states[index].y += (mouseY - states[index].y) * speed;

        // применяем смещение с радиусом
        var translateX = states[index].x / (block.offsetWidth / 2) * radius;
        var translateY = states[index].y / (block.offsetHeight / 2) * radius;
        item.style.transform = "translate(".concat(translateX, "px, ").concat(translateY, "px)");
      });
      requestAnimationFrame(animate);
    }
    animate();
  });
};
var setStopAnimation = function setStopAnimation() {
  document.body.classList.add('is-resize');
  setTimeout(function () {
    document.body.classList.remove('is-resize');
  }, 500);
};
var setCounters = function setCounters(selector) {
  var container = document.querySelector(selector);
  if (!container) return;
  var counters = container.querySelectorAll('[data-counter]');
  var startCounting = function startCounting(counter) {
    var target = parseFloat(counter.textContent.replace(/\s/g, ''));
    var duration = parseInt(counter.getAttribute('data-counter'), 10) || 2000;
    counter.textContent = 0;
    var start = 0;
    var startTime = performance.now();
    function update(currentTime) {
      var elapsed = currentTime - startTime;
      var progress = Math.min(elapsed / duration, 1);
      var currentValue = Math.floor(progress * target);
      counter.textContent = currentValue.toLocaleString('en-US');
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        counter.textContent = target.toLocaleString('en-US');
      }
    }
    setTimeout(function () {
      return requestAnimationFrame(update);
    }, 500);
  };
  var observer = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting && entry.intersectionRatio >= 1) {
        var counter = entry.target;
        startCounting(counter);
        obs.unobserve(counter);
      }
    });
  }, {
    threshold: 1
  });
  counters.forEach(function (counter) {
    return observer.observe(counter);
  });
};
var setTeamCursorCoords = function setTeamCursorCoords() {
  var team = document.querySelector('.team');
  if (!team) return;
  var updateCursorPosition = function updateCursorPosition(clientX, clientY) {
    // координаты относительно окна
    team.dataset.mouseX = Math.round(clientX);
    team.dataset.mouseY = Math.round(clientY);
    team.style.setProperty('--mouse-x', "".concat(clientX, "px"));
    team.style.setProperty('--mouse-y', "".concat(clientY, "px"));
    team.classList.add('is-active');
  };
  var handleMove = function handleMove(event) {
    var clientX, clientY;
    if (event.touches && event.touches.length > 0) {
      clientX = event.touches[0].clientX;
      clientY = event.touches[0].clientY;
    } else {
      clientX = event.clientX;
      clientY = event.clientY;
    }

    // проверяем, находится ли курсор внутри .team
    var rect = team.getBoundingClientRect();
    var inside = clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom;
    if (inside) {
      updateCursorPosition(clientX, clientY);
    } else {
      handleLeave();
    }
  };
  var handleLeave = function handleLeave() {
    team.style.setProperty('--mouse-x');
    team.style.setProperty('--mouse-y');
    team.classList.remove('is-active');
  };
  document.addEventListener('mousemove', handleMove);
  document.addEventListener('touchmove', handleMove, {
    passive: true
  });
  document.addEventListener('touchend', handleLeave);
};

// Запуск функций
updateVH();
setScrollbarWidth();
setHeader();
setParallax();
setStopAnimation();
setCounters('.about');
setTeamCursorCoords();
setStopAnimation();
})();

/******/ })()
;