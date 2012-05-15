/*global setScrollPosition:true,isHostMethod,global */

var setScrollPosition;

if(isHostMethod(global, "scrollTo")) {
	setScrollPosition = function(x, y) {
		window.scrollTo(x, y);
	};
}