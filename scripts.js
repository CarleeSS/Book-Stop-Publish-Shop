document.addEventListener("DOMContentLoaded", function(){
	document.querySelector('.editors-open').addEventListener('click', function(){
		document.querySelector('.editors').classList.toggle('show');
	});
});
document.addEventListener("DOMContentLoaded", function(){
	document.querySelector('.agents-open').addEventListener('click', function(){
		document.querySelector('.agents').classList.toggle('show');
	});
});
document.addEventListener("DOMContentLoaded", function(){
	document.querySelector('.companies-open').addEventListener('click', function(){
		document.querySelector('.companies').classList.toggle('show');
	});
});