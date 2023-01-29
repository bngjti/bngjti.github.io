'use srict'

function calc(){
	
	let siteType = document.getElementById('siteType');
	let Disign = document.getElementById('Disign');
    let adaptive = document.getElementById('adaptive');
	let price = document.getElementById('price');
	let sum=0;
	sum +=parseInt(siteType.options[siteType.selectedIndex].value)+parseInt(Disign.options[Disign.selectedIndex].value)+parseInt(adaptive.options[adaptive.selectedIndex].value);
	price.innerHTML=sum;
	
	let Typeday = document.getElementById('test1');
	let Disignday = document.getElementById('test2');
    let adaptiveday = document.getElementById('test3');
	let sroki = document.getElementById('sroki');
	
	let result=Typeday.options[Typeday.selectedIndex].dataset;
	console.log(result)
	//let result=parseInt(Typeday.dataset.days)+parseInt(Disignday.dataset.days);
	sroki.innerHTML=result;
};






















/*function calc(){
	
	let  selectSite = document.getElementById('selectSite');
	let selectDesign =document.getElementById('selectDesign');
	let selectAdaptive = document.getElementById('selectAdaptive');
	let price = document.getElementById('price');
	let sum=0;
	sum +=parseInt(selectSite.options[selectSite.selectedIndex].value)+parseInt(selectDesign.options[selectDesign.selectedIndex].value)+parseInt(selectAdaptive.options[selectAdaptive.selectedIndex].value);

	 price.innerHTML=sum;
//	document.getElementById('selectSite').addEventListener(onchange, calc());
}
*/
