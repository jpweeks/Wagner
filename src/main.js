(function() {
	'use strict';

	var WAGNER = this.WAGNER || {};

	WAGNER.assetsPath = './assets';

	WAGNER.log = function() {
		// console.log( Array.prototype.slice.call( arguments ).join( ' ' ) );
	};

	require('core/*');
	require('passes/*');

	window.WAGNER = WAGNER;

	if (typeof exports !== 'undefined') {
		if (typeof module !== 'undefined' && module.exports) {
			exports = module.exports = WAGNER;
		}
		exports.WAGNER = WAGNER;
	} else if (typeof define !== 'undefined' && define.amd) {
		define(WAGNER);
	} else {
		this.WAGNER = WAGNER;
	}
}).call(this);
