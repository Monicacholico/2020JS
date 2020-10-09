/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "assets/scripts/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/SharePlace.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/SharePlace.js":
/*!***************************!*\
  !*** ./src/SharePlace.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI_Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI/Modal */ \"./src/UI/Modal.js\");\n/* harmony import */ var _UI_Map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI/Map */ \"./src/UI/Map.js\");\n/* harmony import */ var _utility_Location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utility/Location */ \"./src/utility/Location.js\");\n\n\n\n\nclass PlaceFinder {\n  constructor() {\n    const addressForm = document.querySelector('form');\n    const locateUserBtn = document.getElementById('locate-btn');\n    this.shareBtn = document.getElementById('share-btn');\n    locateUserBtn.addEventListener('click', this.locateUserHandler.bind(this));\n    this.shareBtn.addEventListener('click', this.sharePlaceHandler);\n    addressForm.addEventListener('submit', this.findAddressHandler.bind(this));\n  }\n\n  sharePlaceHandler() {\n    const sharedLinkInputElement = document.getElementById('share-link');\n\n    if (!navigator.clipboard) {\n      sharedLinkInputElement.select();\n      return;\n    }\n\n    navigator.clipboard.writeText(sharedLinkInputElement.value).then(() => {\n      alert('Copied into clipboard');\n    }).catch(err => {\n      console.log(err);\n      sharedLinkInputElement.select();\n    });\n  }\n\n  selectPlace(coordinates, address) {\n    if (this.map) {\n      this.map.render(coordinates);\n    } else {\n      this.map = new _UI_Map__WEBPACK_IMPORTED_MODULE_1__[\"Map\"](coordinates);\n    }\n\n    fetch('http://localhost:3000/add-location', {\n      method: 'POST',\n      body: JSON.stringify({\n        address: address,\n        lat: coordinates.lat,\n        lng: coordinates.lng\n      }),\n      headers: {\n        'Content-Type': 'application/json'\n      }\n    }).then(response => {\n      return response.json();\n    }).then(data => {\n      const locationId = data.locId;\n      this.shareBtn.disabled = false;\n      const shareLinkInputElement = document.getElementById('share-link');\n      shareLinkInputElement.value = `${location.origin}/my-place?location=${locationId}`;\n    });\n  }\n\n  locateUserHandler() {\n    if (!navigator.geolocation) {\n      alert('Location feature not available in you browser - please use a more modern browser');\n      return;\n    }\n\n    const modal = new _UI_Modal__WEBPACK_IMPORTED_MODULE_0__[\"Modal\"]('loading-modal-content', 'Loading location - please wait');\n    modal.show();\n    navigator.geolocation.getCurrentPosition(async successResult => {\n      const coordinates = {\n        lat: successResult.coords.latitude,\n        lng: successResult.coords.longitude\n      };\n      const address = await Object(_utility_Location__WEBPACK_IMPORTED_MODULE_2__[\"getAddressFromCoords\"])(coordinates);\n      modal.hide();\n      this.selectPlace(coordinates, address);\n    }, error => {\n      modal.hide();\n      alert('Could not locate you. Please enter an address manually');\n    });\n  }\n\n  async findAddressHandler(event) {\n    event.preventDefault();\n    const address = event.target.querySelector('input').value;\n    console.log(address);\n\n    if (!address || address.trim().length === 0) {\n      alert('Invalid address entered - please try again');\n      return;\n    }\n\n    const modal = new _UI_Modal__WEBPACK_IMPORTED_MODULE_0__[\"Modal\"]('loading-modal-content', 'loading location - please wait!');\n    modal.show();\n\n    try {\n      const coordinates = await Object(_utility_Location__WEBPACK_IMPORTED_MODULE_2__[\"getCoordsFromAddress\"])(address);\n      console.log(coordinates);\n      this.selectPlace(coordinates, address);\n    } catch (err) {\n      alert('this is my custom error message');\n    }\n\n    modal.hide();\n  }\n\n}\n\nnew PlaceFinder();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU2hhcmVQbGFjZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9TaGFyZVBsYWNlLmpzP2Q1YTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuL1VJL01vZGFsJztcbmltcG9ydCB7IE1hcCB9IGZyb20gJy4vVUkvTWFwJztcbmltcG9ydCB7IGdldENvb3Jkc0Zyb21BZGRyZXNzLCBnZXRBZGRyZXNzRnJvbUNvb3JkcyB9IGZyb20gJy4vdXRpbGl0eS9Mb2NhdGlvbic7XG5cbmNsYXNzIFBsYWNlRmluZGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY29uc3QgYWRkcmVzc0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gICAgICAgIGNvbnN0IGxvY2F0ZVVzZXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRlLWJ0bicpO1xuICAgICAgICB0aGlzLnNoYXJlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoYXJlLWJ0bicpO1xuXG4gICAgICAgIGxvY2F0ZVVzZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmxvY2F0ZVVzZXJIYW5kbGVyLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLnNoYXJlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zaGFyZVBsYWNlSGFuZGxlcik7XG4gICAgICAgIGFkZHJlc3NGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMuZmluZEFkZHJlc3NIYW5kbGVyLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHNoYXJlUGxhY2VIYW5kbGVyKCl7XG4gICAgICAgIGNvbnN0IHNoYXJlZExpbmtJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hhcmUtbGluaycpO1xuICAgICAgICBpZiAoIW5hdmlnYXRvci5jbGlwYm9hcmQpIHsgXG4gICAgICAgICAgICBzaGFyZWRMaW5rSW5wdXRFbGVtZW50LnNlbGVjdCgpO1xuICAgICAgICAgICAgcmV0dXJuOyBcbiAgICAgICAgfVxuICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChzaGFyZWRMaW5rSW5wdXRFbGVtZW50LnZhbHVlKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBhbGVydCgnQ29waWVkIGludG8gY2xpcGJvYXJkJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgIHNoYXJlZExpbmtJbnB1dEVsZW1lbnQuc2VsZWN0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNlbGVjdFBsYWNlKGNvb3JkaW5hdGVzLCBhZGRyZXNzKXtcbiAgICAgICAgaWYodGhpcy5tYXApIHtcbiAgICAgICAgICAgIHRoaXMubWFwLnJlbmRlcihjb29yZGluYXRlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1hcCA9IG5ldyBNYXAoY29vcmRpbmF0ZXMpO1xuICAgICAgICB9XG4gICAgICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYWRkLWxvY2F0aW9uJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgYWRkcmVzczogYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBsYXQ6IGNvb3JkaW5hdGVzLmxhdCxcbiAgICAgICAgICAgICAgICBsbmc6IGNvb3JkaW5hdGVzLmxuZ1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH0pLnRoZW4oIGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYXRpb25JZCA9IGRhdGEubG9jSWQ7XG4gICAgICAgICAgICB0aGlzLnNoYXJlQnRuLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zdCBzaGFyZUxpbmtJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hhcmUtbGluaycpO1xuICAgICAgICAgICAgc2hhcmVMaW5rSW5wdXRFbGVtZW50LnZhbHVlID0gYCR7bG9jYXRpb24ub3JpZ2lufS9teS1wbGFjZT9sb2NhdGlvbj0ke2xvY2F0aW9uSWR9YDsgICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgIGxvY2F0ZVVzZXJIYW5kbGVyKCkge1xuICAgICAgICBpZighbmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XG4gICAgICAgICAgICBhbGVydCgnTG9jYXRpb24gZmVhdHVyZSBub3QgYXZhaWxhYmxlIGluIHlvdSBicm93c2VyIC0gcGxlYXNlIHVzZSBhIG1vcmUgbW9kZXJuIGJyb3dzZXInKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb2RhbCA9IG5ldyBNb2RhbCAoJ2xvYWRpbmctbW9kYWwtY29udGVudCcsICdMb2FkaW5nIGxvY2F0aW9uIC0gcGxlYXNlIHdhaXQnKTtcbiAgICAgICAgbW9kYWwuc2hvdygpO1xuICAgICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKFxuICAgICAgICAgICAgYXN5bmMgc3VjY2Vzc1Jlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGxhdDogc3VjY2Vzc1Jlc3VsdC5jb29yZHMubGF0aXR1ZGUsXG4gICAgICAgICAgICAgICAgICAgIGxuZzogc3VjY2Vzc1Jlc3VsdC5jb29yZHMubG9uZ2l0dWRlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY29uc3QgYWRkcmVzcyA9IGF3YWl0IGdldEFkZHJlc3NGcm9tQ29vcmRzKGNvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgICAgICBtb2RhbC5oaWRlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RQbGFjZShjb29yZGluYXRlcywgYWRkcmVzcyk7XG4gICAgICAgIH0sIFxuICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICBtb2RhbC5oaWRlKCk7XG4gICAgICAgICAgICBhbGVydCgnQ291bGQgbm90IGxvY2F0ZSB5b3UuIFBsZWFzZSBlbnRlciBhbiBhZGRyZXNzIG1hbnVhbGx5Jyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBhc3luYyBmaW5kQWRkcmVzc0hhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgYWRkcmVzcyA9IGV2ZW50LnRhcmdldC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnZhbHVlO1xuICAgICAgICBjb25zb2xlLmxvZyhhZGRyZXNzKTtcbiAgICAgICAgaWYoIWFkZHJlc3MgfHwgYWRkcmVzcy50cmltKCkubGVuZ3RoID09PSAwKXtcbiAgICAgICAgICAgIGFsZXJ0KCdJbnZhbGlkIGFkZHJlc3MgZW50ZXJlZCAtIHBsZWFzZSB0cnkgYWdhaW4nKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb2RhbCA9IG5ldyBNb2RhbCAoXG4gICAgICAgICAgICAnbG9hZGluZy1tb2RhbC1jb250ZW50JyxcbiAgICAgICAgICAgICdsb2FkaW5nIGxvY2F0aW9uIC0gcGxlYXNlIHdhaXQhJ1xuICAgICAgICApO1xuICAgICAgICBtb2RhbC5zaG93KCk7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gYXdhaXQgZ2V0Q29vcmRzRnJvbUFkZHJlc3MoYWRkcmVzcyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjb29yZGluYXRlcyk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdFBsYWNlKGNvb3JkaW5hdGVzLCBhZGRyZXNzKTtcbiAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgIGFsZXJ0KCd0aGlzIGlzIG15IGN1c3RvbSBlcnJvciBtZXNzYWdlJyk7XG4gICAgICAgIH1cbiAgICAgICAgbW9kYWwuaGlkZSgpO1xuICAgIH1cbn1cbm5ldyBQbGFjZUZpbmRlcigpOyBcblxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBREE7QUFQQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBbEdBO0FBQ0E7QUFrR0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/SharePlace.js\n");

/***/ }),

/***/ "./src/UI/Map.js":
/*!***********************!*\
  !*** ./src/UI/Map.js ***!
  \***********************/
/*! exports provided: Map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Map\", function() { return Map; });\nclass Map {\n  constructor(coords) {\n    // this.coordinates = coords;\n    this.render(coords);\n  }\n\n  render(coordinates) {\n    if (!google) {\n      alert('Could not load maps library - please try again later');\n      return;\n    }\n\n    const map = new google.maps.Map(document.getElementById('map'), {\n      center: coordinates,\n      zoom: 16\n    });\n    new google.maps.Marker({\n      position: coordinates,\n      map: map\n    });\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVUkvTWFwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL1VJL01hcC5qcz9iNTc5Il0sInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGNsYXNzIE1hcCB7XG4gICAgY29uc3RydWN0b3IoY29vcmRzKSB7XG4gICAgICAgIC8vIHRoaXMuY29vcmRpbmF0ZXMgPSBjb29yZHM7XG4gICAgICAgIHRoaXMucmVuZGVyKGNvb3Jkcyk7XG4gICAgfVxuICAgIHJlbmRlcihjb29yZGluYXRlcykge1xuICAgICAgICBpZighZ29vZ2xlKSB7XG4gICAgICAgICAgICBhbGVydCgnQ291bGQgbm90IGxvYWQgbWFwcyBsaWJyYXJ5IC0gcGxlYXNlIHRyeSBhZ2FpbiBsYXRlcicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpLCB7XG4gICAgICAgICAgICBjZW50ZXI6IGNvb3JkaW5hdGVzLFxuICAgICAgICAgICAgem9vbTogMTZcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICAgICAgICBwb3NpdGlvbjogY29vcmRpbmF0ZXMsXG4gICAgICAgICAgICBtYXA6IG1hcFxuICAgICAgICB9KTtcblxuICAgIH1cbn0iXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQXJCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/UI/Map.js\n");

/***/ }),

/***/ "./src/UI/Modal.js":
/*!*************************!*\
  !*** ./src/UI/Modal.js ***!
  \*************************/
/*! exports provided: Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Modal\", function() { return Modal; });\nclass Modal {\n  constructor(contentId, fallbackText) {\n    this.fallbackText = fallbackText;\n    this.contentTemplateEl = document.getElementById(contentId);\n    console.log(this.contentTemplateEl);\n    this.modalTemplateEl = document.getElementById('modal-template');\n  }\n\n  greetin() {\n    console.log('this is working');\n  }\n\n  show() {\n    if ('content' in document.createElement('template')) {\n      const modalElements = document.importNode(this.modalTemplateEl.content, true);\n      this.modalElement = modalElements.querySelector('.modal');\n      this.backdropElement = modalElements.querySelector('.backdrop');\n      const contentElement = document.importNode(this.contentTemplateEl.content, true);\n      this.modalElement.appendChild(contentElement);\n      document.body.insertAdjacentElement('afterbegin', this.modalElement);\n      document.body.insertAdjacentElement('afterbegin', this.backdropElement);\n    } else {\n      //fallback code\n      alert();\n    }\n  }\n\n  hide() {\n    if (this.modalElement) {\n      document.body.removeChild(this.modalElement); //thismodalElement.remove()\n\n      document.body.removeChild(this.backdropElement);\n      this.modalElement = null;\n      this.backdropElement = null;\n    }\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVUkvTW9kYWwuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvVUkvTW9kYWwuanM/MjcwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTW9kYWwge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRlbnRJZCwgZmFsbGJhY2tUZXh0KXtcbiAgICAgICAgdGhpcy5mYWxsYmFja1RleHQgPSBmYWxsYmFja1RleHQ7XG4gICAgICAgIHRoaXMuY29udGVudFRlbXBsYXRlRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250ZW50SWQpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbnRlbnRUZW1wbGF0ZUVsKTtcbiAgICAgICAgdGhpcy5tb2RhbFRlbXBsYXRlRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtdGVtcGxhdGUnKTtcbiAgICB9XG4gICAgZ3JlZXRpbigpe1xuICAgICAgICBjb25zb2xlLmxvZygndGhpcyBpcyB3b3JraW5nJyk7XG4gICAgfVxuXG4gICAgc2hvdygpe1xuICAgICAgICBpZignY29udGVudCcgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKSkge1xuICAgICAgICAgICAgY29uc3QgbW9kYWxFbGVtZW50cyA9IGRvY3VtZW50LmltcG9ydE5vZGUoXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbFRlbXBsYXRlRWwuY29udGVudCwgXG4gICAgICAgICAgICAgICAgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLm1vZGFsRWxlbWVudCA9IG1vZGFsRWxlbWVudHMucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG4gICAgICAgICAgICB0aGlzLmJhY2tkcm9wRWxlbWVudCA9IG1vZGFsRWxlbWVudHMucXVlcnlTZWxlY3RvcignLmJhY2tkcm9wJyk7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50RWxlbWVudCA9IGRvY3VtZW50LmltcG9ydE5vZGUoXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50VGVtcGxhdGVFbC5jb250ZW50LFxuICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHRoaXMubW9kYWxFbGVtZW50LmFwcGVuZENoaWxkKGNvbnRlbnRFbGVtZW50KTtcblxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyYmVnaW4nLCB0aGlzLm1vZGFsRWxlbWVudCk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJiZWdpbicsIHRoaXMuYmFja2Ryb3BFbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vZmFsbGJhY2sgY29kZVxuICAgICAgICAgICAgYWxlcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhpZGUoKXtcbiAgICAgICAgaWYodGhpcy5tb2RhbEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5tb2RhbEVsZW1lbnQpOyAvL3RoaXNtb2RhbEVsZW1lbnQucmVtb3ZlKClcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5iYWNrZHJvcEVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy5tb2RhbEVsZW1lbnQgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5iYWNrZHJvcEVsZW1lbnQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBekNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/UI/Modal.js\n");

/***/ }),

/***/ "./src/utility/Location.js":
/*!*********************************!*\
  !*** ./src/utility/Location.js ***!
  \*********************************/
/*! exports provided: getAddressFromCoords, getCoordsFromAddress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAddressFromCoords\", function() { return getAddressFromCoords; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCoordsFromAddress\", function() { return getCoordsFromAddress; });\nconst GOOGLE_API_KEY = 'AIzaSyBuoyX9EW099iU7kCUN3jms7tLdyXOsJ10';\nasync function getAddressFromCoords(coords) {\n  const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.lat},${coords.lng}&key=${GOOGLE_API_KEY}`);\n\n  if (!response.ok) {\n    throw new Error('Failed to fecth address. Please try again');\n  }\n\n  const data = await response.json();\n  console.log(data);\n\n  if (data.error_message) {\n    throw new Error(data.error_message);\n  }\n\n  const address = data.results[0].formatted_address;\n  return address;\n}\nasync function getCoordsFromAddress(address) {\n  const urlAddress = encodeURI(address);\n  const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${urlAddress}&key=${GOOGLE_API_KEY}`);\n\n  if (!response.ok) {\n    throw new Error('Failed to fecth coordinates. Please try again');\n  }\n\n  console.log(response);\n  const data = await response.json();\n  console.log(data);\n\n  if (data.error_message) {\n    throw new Error(data.error_message);\n  }\n\n  const coordinates = data.results[0].geometry.location;\n  console.log(coordinates);\n  return coordinates;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbGl0eS9Mb2NhdGlvbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy91dGlsaXR5L0xvY2F0aW9uLmpzPzMzOTIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgR09PR0xFX0FQSV9LRVkgPSAnQUl6YVN5QnVveVg5RVcwOTlpVTdrQ1VOM2ptczd0TGR5WE9zSjEwJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFkZHJlc3NGcm9tQ29vcmRzKGNvb3Jkcykge1xuICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvbj9sYXRsbmc9JHtjb29yZHMubGF0fSwke2Nvb3Jkcy5sbmd9JmtleT0ke0dPT0dMRV9BUElfS0VZfWApO1xuICAgaWYoIXJlc3BvbnNlLm9rKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmVjdGggYWRkcmVzcy4gUGxlYXNlIHRyeSBhZ2FpbicpO1xuICAgfVxuICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICBpZihkYXRhLmVycm9yX21lc3NhZ2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGRhdGEuZXJyb3JfbWVzc2FnZSk7XG4gICAgfVxuICAgIGNvbnN0IGFkZHJlc3MgPSBkYXRhLnJlc3VsdHNbMF0uZm9ybWF0dGVkX2FkZHJlc3M7XG4gICAgcmV0dXJuIGFkZHJlc3M7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb29yZHNGcm9tQWRkcmVzcyhhZGRyZXNzKSB7XG4gICAgY29uc3QgdXJsQWRkcmVzcyA9IGVuY29kZVVSSShhZGRyZXNzKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uP2FkZHJlc3M9JHt1cmxBZGRyZXNzfSZrZXk9JHtHT09HTEVfQVBJX0tFWX1gKTtcbiAgICBpZighcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmVjdGggY29vcmRpbmF0ZXMuIFBsZWFzZSB0cnkgYWdhaW4nKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgaWYoZGF0YS5lcnJvcl9tZXNzYWdlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihkYXRhLmVycm9yX21lc3NhZ2UpO1xuICAgIH1cbiAgICBjb25zdCBjb29yZGluYXRlcyA9IGRhdGEucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbjtcbiAgICBjb25zb2xlLmxvZyhjb29yZGluYXRlcyk7XG4gICAgcmV0dXJuIGNvb3JkaW5hdGVzO1xufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utility/Location.js\n");

/***/ })

/******/ });