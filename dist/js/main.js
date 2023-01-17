let $body,
	windowHeight,
	windowWidth,
	degree = 0.0174532925,
	mediaPoint1 = 1024,
	mediaPoint2 = 768,
	mediaPoint3 = 480,
	mediaPoint4 = 320,
	devStatus = window.productionStatus === 'development';
	const win = document.body

$(document).ready(function ($) {
	$body = $('body');
	if(windowWidth > mediaPoint1) {
		popupForms('17px');
	} else {
		popupForms('');
	}
});

$(window).on('load', function () {
	updateSizes();
	loadFunc();
});

$(window).on('resize', function () {
	resizeFunc();
});

$(window).on('scroll', function () {
	scrollFunc();
});

function loadFunc() {
	calcViewportHeight();
}

function resizeFunc() {
	updateSizes();

	calcViewportHeight();
}

function scrollFunc() {}

function calcViewportHeight() {
	if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
		var vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', vh + 'px');
	}
}

function updateSizes() {
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
}

if ('objectFit' in document.documentElement.style === false) {
	document.addEventListener('DOMContentLoaded', function () {
		Array.prototype.forEach.call(
			document.querySelectorAll('img[data-object-fit]'),
			function (image) {
				(image.runtimeStyle || image.style).background =
					'url("' +
					image.src +
					'") no-repeat 50%/' +
					(image.currentStyle
						? image.currentStyle['object-fit']
						: image.getAttribute('data-object-fit'));

				image.src =
					"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" +
					image.width +
					"' height='" +
					image.height +
					"'%3E%3C/svg%3E";
			}
		);
	});
}

function succes(success) {
	$(success).toggleClass('active');
		setTimeout(function() {
			$(success).removeClass('active')
		}, 3000)
}

function failed(failed) {
	$(failed).toggleClass('active');
		setTimeout(function() {
			$(failed).removeClass('active')
		}, 3000)
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}

var styles = ['color: red', 'background: black'].join(';');
var message = 'Developed by KotoFeelGood Arkada-Studio https://arkada-web.ru/';
console.info('%c%s', styles, message);



$(document).ready(function() {
	const btns = document.querySelectorAll('.btn')

	btns.forEach(el => {
			el.addEventListener('click', function(e) {
					let
							size = Math.max(this.offsetWidth, this.offsetHeight),
							x = e.offsetX - size / 2,
							y = e.offsetY - size / 2,
							wave = this.querySelector('.wave')
	
					// Create an element if it doesn't exist
					if (!wave) {
							wave = document.createElement('span')
							wave.className = 'wave'
					}
					wave.style.cssText = `width:${size}px;height:${size}px;top:${y}px;left:${x}px`
					this.appendChild(wave)
			})
	})
})



// const btnSubmit = document.querySelectorAll('button[type="submit"]')
// Array.from(btnSubmit).map((item) => {
// 	item.addEventListener('click', (e) => {
// 		e.preventDefault();
// 		succes('.succes')
// 	})
// })


function popupForms(pr) {

	let popupForms = document.querySelector('.popup_order')
	let popupFormsTrigger = document.querySelector('.order_btn')
	let popupFormsClose = document.querySelectorAll('.remove_popup')
	let popupFormsSubmit = popupForms.querySelector('button[type="submit"]')
	
	popupFormsTrigger.addEventListener('click', (e) => {
		e.preventDefault();
		popupForms.classList.add('active');
		win.style.overflow = "hidden";
		win.style.paddingRight = pr; 
	})


	Array.from(popupFormsClose).map((item) => {
		item.addEventListener('click', () => {
			popupForms.classList.remove('active')
			win.style.overflow = "";
			win.style.paddingRight = ""; 
		})
	})

	// popupFormsSubmit.addEventListener('click', () => {
	// 	popupForms.classList.remove('active')
	// 	win.style.overflow = "";
	// 	win.style.paddingRight = ""; 
	// 	succes('.succes')
	// })
}








$(document).ready(function()  {

	var inputsTel = document.querySelectorAll('input[type="tel"]');
	Inputmask({
		"mask": "+7 (999) 999-99-99",
		showMaskOnHover: false
	}).mask(inputsTel);
})




function calcParams() {
	let checkInput = document.querySelectorAll('.inputChecks'); 
	let price = document.querySelector('.calc_total')

	let prices = 0;
	for (let i = 0; i < checkInput.length; i++) {
			if (checkInput[i].checked) {
				let checkedPrice = parseInt(checkInput[i].dataset.price)
				prices += checkedPrice
			}
		}
	pushImg();

		price.innerHTML = (prices+'').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1, ')
}

calcParams();


function pushImg() {
	let input = document.querySelectorAll('input[name="light"]')
	let img = document.querySelector('.quiz_img')

	for(let i = 0; i < input.length; i++) {
		if(input[i].checked) {
			img.src = input[i].dataset.img
		}
	}

}
















































