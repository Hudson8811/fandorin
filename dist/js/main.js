/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/***/ (function() {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/***/ (function() {



/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ (function() {

document.addEventListener('DOMContentLoaded', function () {
  var contentTitle = document.querySelector('.fate__content--title');
  var contentQuote = document.querySelector('.fate__content--quote');
  var button = document.querySelector(".fate__content--button");
  if (button !== null) {
    button.addEventListener("click", function () {
      var _this = this;
      var content = document.querySelector(".fate__content");
      contentTitle.classList.add("activeText");
      contentQuote.classList.add("activeText");
      setTimeout(function () {
        contentTitle.classList.remove("activeText");
      }, "3200");
      setTimeout(function () {
        contentTitle.classList.remove("activeText");
        contentQuote.classList.remove("activeText");
        _this.removeAttribute('disabled');
      }, "5200");
      content.classList.add("active");
      this.textContent = "ЕЩЕ РАЗ";
      this.setAttribute('disabled', true);
      randomTitle();
    });
  }
  function randomTitle() {
    var quotes = new Array("В этом году вас засыпят комплиментами", "Ждите потрясающих подарков от судьбы", "Потрясения будут стараться обходить вас стороной", "Этот год закрутит вас в водовороте любовных чувств", "В новом году вас ждут большие карьерные достижения", "Год пройдет под знаком финансовой стабильности и благополучия", "Новый год – новые путешествия!", "Вам всегда будет сопутствовать удача!");
    var numberTitle = Math.floor(Math.random() * quotes.length);
    var randomizeTitle = quotes[numberTitle];
    contentTitle.innerHTML = randomizeTitle;
    selectinglistQuotes(randomizeTitle);
    randomTitleNum(randomizeTitle, numberTitle);
  }
  function selectinglistQuotes(x) {
    switch (x) {
      case "В этом году вас засыпят комплиментами":
        var listOne = new Array("Сударыня! Говорил ли вам кто-нибудь прежде, что вы невыносимо прекрасны?", "Юноша чистый, смелый, благородных устремлений.", "Бриллинг Иван Францевич — птица высокого полета. Можно сказать, орел прегордый меж дроздами, абы кому важного дела не доверит.", "Понравился ты мне, ужас как понравился. Есть в тебе что-то... Не знаю, печать какая-то, что ли. У меня на таких, как ты, нюх. Я будто нимб у человека над головой вижу, этакое легкое сияние. Особые это люди, у кого нимб, судьба их хранит, от всех опасностей оберегает.", "Вы очень смышленый юноша и вызываете у меня искреннюю симпатию.", "Он отличается прекрасной реакцией, смел, обладает хорошо развитым логическим мышлением и уникальной интуицией.", "Он обладал прирожденным лидерским талантом: редкостная сила воли, дисциплинированность, умение безошибочно выделить в каждом человеке сильные и слабые стороны.");
        randomQuote(listOne);
        break;
      case "Ждите потрясающих подарков от судьбы":
        var listTwo = new Array("Судьба дает ему все — и богатство, и свободу, и образованность, и красоту.", " Шеф, это я! — радостно объявил Фандорин, наслаждаясь эффектом. Эффект и в самом деле превзошел все ожидания.", "Гений у нас — редкость и даже чудо, а ведь кто такой гений? Это просто человек, которому повезло. Его судьба сложилась так, что жизненные обстоятельства сами подтолкнули человека к правильному выбору пути. ", "Найти свой путь — самое главное в жизни любого человека.", "Всяк сам хозяин своей судьбы.");
        randomQuote(listTwo);
        break;
      case "Потрясения будут стараться обходить вас стороной":
        var listTree = new Array("Ничто не предвещало неприятностей, в воздухе, наполненном ароматами зрелой, уверенной весны, разливались ленивое довольство и отрадная скука.", "Правильное дыхание — основа правильной жизни. Оно поддержит тебя в трудные минуты бытия, в нем обретешь ты спасение, успокоение и просветление. Вдыхая жизненную силу прану, не спеши выдохнуть ее обратно, задержи ее в своих легких. Чем дольше и размеренней твое дыхание, тем больше в тебе жизненной силы.", "Но жить все равно было замечательно. Эраст Петрович окинул любовным взглядом серый речной простор (на той стороне ласково светились огоньки), умилился добротности приземистого пакгауза, одобрил мерное покачивание буксиров и баркасов, вытянувшихся вдоль пристани.");
        randomQuote(listTree);
        break;
      case "Этот год закрутит вас в водовороте любовных чувств":
        var list4 = new Array("Фандорин вскочил и поклонился, чувствуя себя прескверно. Девушка ему ужасно понравилась, и бедный письмоводитель испугался, что сейчас возьмет и влюбится в нее с первого взгляда, а делать этого никак не следовало.", "Эраст Петрович с завистью подумал, что красавца Ипполита, бесшабашную голову, очень даже есть за что полюбить и без всякого пожара. Такому молодцу, наверно, от женщин отбоя нет.", "Следует признаться, что головокружительные события последних недель несколько приглушили воспоминания о той, кого Эраст Петрович именовал про себя исключительно «Лизанькой», а иногда, в особенно мечтательные минуты, даже «нежным ангелом». Однако при виде этого милого создания огонек, некогда опаливший сердце бедного коллежского регистратора, моментально полыхнул жаром, обжег легкие огненными искорками.", "В обществе Лизаньки одинаково хорошо и говорилось, и молчалось. Смотрели в основном в окно, но по временам взглядывали и друг на друга, причем если взгляды ненароком пересекались, то это было совсем не стыдно, а наоборот, весело и приятно.", "Это редкостная женщина. Клеопатра. Кармен... Красоты неописуемой, но дело даже не в красоте... Магнетический взгляд. Нет, и взгляд не то... Вот главное: в ней ощущается огромная сила. Такая сила, что она со всеми будто играет.", "При виде женщины у Эраста Петровича чуть не вырвался торжествующий вопль — это была Бежецкая! С гладко зачесанными черными волосами, перетянутыми алой лентой, в кружевном пеньюаре, поверх которого была накинута цветастая цыганская шаль, она показалась ему ослепительно прекрасной. О, такой женщине можно простить любые прегрешения!");
        randomQuote(list4);
        break;
      case "В новом году вас ждут большие карьерные достижения":
        var list5 = new Array("Читал ваше донесение, — без малейшего перехода продолжил Бриллинг. — Толково. Наблюдательно. Результативно. Приятно удивлен вашей интуицией — это в нашем деле драгоценнее всего. Еще не знаешь, как разовьется ситуация, а чутье подсказывает принять меры. ", "Ваше высокопревосходительство, в интересах известного Вам дела, а также в признание исключительных заслуг прошу вне всякой очереди и без учета выслуги произвести коллежского регистратора Эраста Петровича Фандорина в титулярные советники.", "Я рассказал Лаврентию Аркадьевичу и о вас. Правда, вы не участвовали в финале, но все же очень помогли нам в ходе расследования. Если не возражаете, будем работать вместе и дальше. Я беру вашу судьбу в свои руки...", "Это был лучший из моих помощников, мое доверенное лицо! Он сделал блестящую карьеру, перед ним были открыты все дороги! Какой яркий, парадоксальный ум, какая инициативность, какая исполнительность!", "Какой это был самоотверженный, неутомимый работник! И редкостный лингвистический дар — без него мне было бы просто невозможно уследить за работой филиалов в стольких странах. ");
        randomQuote(list5);
        break;
      case "Год пройдет под знаком финансовой стабильности и благополучия":
        var list6 = new Array("И то сказать, состояние-то громадное. Я справлялся — две фабрики, три завода, дома в разных городах, верфи в Либаве, одних процентных бумаг в Государственном банке на полмиллиона!", "Я распоряжусь, чтобы вам из особого фонда выдали пятьсот рублей премиальных. За усердие и перенесенную опасность.");
        randomQuote(list6);
        break;
      case "Новый год – новые путешествия!":
        var list7 = new Array("Кстати, дипломатическую почту вы по дороге, действительно, развезете — в Берлин, Вену, Париж. Для конспирации, чтоб не вызывать лишних подозрений. Возражений нет? ", "Через проливчик я вас, ангел мой, конечно, переправлю — дело небольшое. Если не побрезгуете утлым рыбацким челном, завтра же поплывете себе с Богом. Ловя под парус ветр ревущий.");
        randomQuote(list7);
        break;
      case "Вам всегда будет сопутствовать удача!":
        var list8 = new Array("Услужливый швейцар успокоил Эраста Петровича, сказал, что господин Бриллинг дома, «пять минут как прибыли-с». Всё сегодня шло у Фандорина по шерстке, всё удавалось.");
        randomQuote(list8);
        break;
      default:
        alert("Нет таких значений");
    }
  }
  function randomQuote(list) {
    var randomizeQuoteNum = Math.floor(Math.random() * list.length);
    var randomizeQuote = list[randomizeQuoteNum];
    contentQuote.innerHTML = randomizeQuote;
    randomQuoteNum(randomizeQuoteNum);
  }
  var url = {};
  function randomQuoteNum(a) {
    var x = a;
    url.value2 = x;
  }
  ;
  function randomTitleNum(name, num) {
    var a = name;
    var b = num;
    url.title = a;
    url.value1 = b;
    selectingAtributeSoc(url);
  }
  ;
  console.log(url);
  function selectingAtributeSoc(a) {
    var soc = document.querySelectorAll(".fate__content--soc__item");
    console.log(url);
    var dataTitle = a.title;
    var numTitle = a.value1;
    var numQuote = a.value2;
    soc.forEach(function (item) {
      var a = dataTitle;
      item.setAttribute("data-title", a);
      item.setAttribute("data-url", "/share/".concat(numTitle, "/").concat(numQuote));
    });
  }
});

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__);



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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_import_components__WEBPACK_IMPORTED_MODULE_1__);


}();
/******/ })()
;
//# sourceMappingURL=main.js.map