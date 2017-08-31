var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var battlefieldUI=(function(_super){
		function battlefieldUI(){
			

			battlefieldUI.__super.call(this);
		}

		CLASS$(battlefieldUI,'ui.battlefieldUI',_super);
		var __proto__=battlefieldUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(battlefieldUI.uiView);
		}
		battlefieldUI.uiView={"type":"View","props":{"width":800,"height":480}};
		return battlefieldUI;
	})(View);
var mainUI=(function(_super){
		function mainUI(){
			
		    this.info=null;

			mainUI.__super.call(this);
		}

		CLASS$(mainUI,'ui.mainUI',_super);
		var __proto__=mainUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(mainUI.uiView);
		}
		mainUI.uiView={"type":"View","props":{"width":800,"height":480},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"img/map.jpg"}},{"type":"Image","props":{"y":0,"x":680,"var":"info","skin":"img/right.jpg"}}]};
		return mainUI;
	})(View);
var menu1UI=(function(_super){
		function menu1UI(){
			
		    this.newGame=null;
		    this.exitGame=null;
		    this.aboutWork=null;
		    this.backGame=null;

			menu1UI.__super.call(this);
		}

		CLASS$(menu1UI,'ui.menu1UI',_super);
		var __proto__=menu1UI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(menu1UI.uiView);
		}
		menu1UI.uiView={"type":"View","props":{"width":800,"height":480},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"img/gmstart.jpg"}},{"type":"Image","props":{"y":227,"x":28,"var":"newGame","skin":"img/gmnew.jpg"}},{"type":"Image","props":{"y":352,"x":414,"var":"exitGame","skin":"img/gmend.jpg"}},{"type":"Image","props":{"y":352,"x":28,"var":"aboutWork","skin":"img/gmwork.jpg"}},{"type":"Image","props":{"y":226,"x":415,"var":"backGame","skin":"img/gmback.jpg"}}]};
		return menu1UI;
	})(View);
var menu2UI=(function(_super){
		function menu2UI(){
			
		    this.dznq=null;
		    this.ccjq=null;
		    this.cbzz=null;
		    this.sgdl=null;
		    this.backBtn=null;

			menu2UI.__super.call(this);
		}

		CLASS$(menu2UI,'ui.menu2UI',_super);
		var __proto__=menu2UI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(menu2UI.uiView);
		}
		menu2UI.uiView={"type":"View","props":{"width":800,"height":480},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"img/history.jpg"}},{"type":"Image","props":{"y":142,"x":8,"var":"dznq","skin":"img/_1dznq.jpg"}},{"type":"Image","props":{"y":283,"x":9,"var":"ccjq","skin":"img/_2ccjq.jpg"}},{"type":"Image","props":{"y":139,"x":407,"var":"cbzz","skin":"img/_3cbzz.jpg"}},{"type":"Image","props":{"y":282,"x":409,"var":"sgdl","skin":"img/_4sgdl.jpg"}},{"type":"Button","props":{"y":428,"x":698,"width":100,"var":"backBtn","stateNum":1,"skin":"img/btn_bg.jpg","labelSize":20,"label":"返回","height":50}}]};
		return menu2UI;
	})(View);
var selectLordUI=(function(_super){
		function selectLordUI(){
			
		    this.whoMap=null;
		    this.lordList=null;
		    this.okBtn=null;
		    this.backBtn=null;
		    this.lordHead=null;
		    this.lordDesc=null;
		    this.lordInfo=null;

			selectLordUI.__super.call(this);
		}

		CLASS$(selectLordUI,'ui.selectLordUI',_super);
		var __proto__=selectLordUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(selectLordUI.uiView);
		}
		selectLordUI.uiView={"type":"View","props":{"width":800,"height":480},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"img/white.jpg"}},{"type":"Image","props":{"y":10,"x":10,"width":420,"var":"whoMap","skin":"img/who.jpg","height":320}},{"type":"List","props":{"y":15,"x":598,"width":164,"var":"lordList","spaceY":10,"repeatY":7,"repeatX":1,"height":369},"child":[{"type":"Box","props":{"y":0,"x":10,"width":145,"renderType":"render","name":"render","height":40},"child":[{"type":"Label","props":{"y":4,"x":31,"width":86,"strokeColor":"#ffffff","stroke":2,"padding":"4","name":"name","height":34,"fontSize":26,"color":"#080808","bold":true}}]},{"type":"VScrollBar","props":{"y":1,"x":130,"width":1,"name":"scrollBar","height":374}}]},{"type":"Button","props":{"y":421,"x":584,"width":100,"var":"okBtn","stateNum":1,"skin":"img/btn_bg.jpg","labelSize":20,"label":"确定","height":50}},{"type":"Button","props":{"y":420,"x":692,"width":100,"var":"backBtn","stateNum":1,"skin":"img/btn_bg.jpg","labelSize":20,"label":"返回","height":50}},{"type":"Image","props":{"y":14,"x":465,"width":120,"var":"lordHead","height":120}},{"type":"Label","props":{"y":359,"x":17,"wordWrap":true,"width":552,"var":"lordDesc","strokeColor":"#ffffff","stroke":2,"leading":8,"height":104,"fontSize":20,"bold":true}},{"type":"Label","props":{"y":146,"x":464,"width":121,"var":"lordInfo","height":192,"fontSize":20}}]};
		return selectLordUI;
	})(View);