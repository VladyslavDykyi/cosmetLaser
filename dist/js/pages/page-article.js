"use strict";
(function (){
	const selectorTel = document.getElementById("formControlInput2");

	const tel = new Inputmask("+38 (099) 999-99-99");
	tel.mask(selectorTel);
})();