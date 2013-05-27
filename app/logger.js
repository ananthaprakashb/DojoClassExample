//create a new class
define(["dojo/_base/declare",
		"dojo/_base/window", 
		"dojo/dom-construct",
		"dojo/dom"
	], function(declare, win, domConstruct, dom){
		return declare(null, {
			log : function(msg){
				if(!dom.byId('console')){
					domConstruct.create('div', {id:'console'}, win.body());
				}
				dom.byId('console').innerHTML += "<div>" + msg + "</div>";
			}
		/*constructor: function(args){
			declare.safeMixin(this, args);
		}*/
	});
});
