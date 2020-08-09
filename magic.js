//Công nghê đọc suy nghĩ bằng JQuery :))
//© 2020 Copyright by Tiendatmagic - All Rights Reserved | Designed by Tiendatmagic
$(document).ready(function () {
	var magic = 0;
	document.getElementById("result-magic").innerHTML = magic;
	$('.btn-start').click(function () {
		$('.gt').hide(300);
		$('.list-1').show();
	})
	$('.btn1c').click(function () {
		magic += 1;
		document.getElementById("result-magic").innerHTML = magic;
		$('.list-1').hide(300);
		$('.list-2').show();

	})
	$('.btn1k').click(function () {
		magic += 0;
		document.getElementById("result-magic").innerHTML = magic;
		$('.list-1').hide(300);
		$('.list-2').show();
	})
	$('.btn2c').click(function () {
		magic += 2;
		document.getElementById("result-magic").innerHTML = magic;
		$('.list-2').hide(300);
		$('.list-3').show();
	})
	$('.btn2k').click(function () {
		magic += 0;
		document.getElementById("result-magic").innerHTML = magic;
		$('.list-2').hide(300);
		$('.list-3').show();
	})
	$('.btn3c').click(function () {
		magic += 4;
		document.getElementById("result-magic").innerHTML = magic;
		$('.list-3').hide(300);
		$('.list-4').show();
	})
	$('.btn3k').click(function () {
		magic += 0;
		document.getElementById("result-magic").innerHTML = magic;
		$('.list-3').hide(300);
		$('.list-4').show();
	})
	$('.btn4c').click(function () {
		magic += 8;
		document.getElementById("result-magic").innerHTML = magic;
		$('.list-4').hide(300);
		$('.list-5').show();
	})
	$('.btn4k').click(function () {
		magic += 0;
		document.getElementById("result-magic").innerHTML = magic;
		$('.list-4').hide(300);
		$('.list-5').show();
	})
	$('.btn5c').click(function () {
		magic += 16;
		document.getElementById("result-magic").innerHTML = magic;
		$('.list-5').hide(300);
		$('.list-6').show();
	})
	$('.btn5k').click(function () {
		magic += 0;
		document.getElementById("result-magic").innerHTML = magic;
		$('.list-5').hide(300);
		$('.list-6').show();
	})
	$('.btn6c').click(function () {
		magic += 32;
		document.getElementById("result-magic").innerHTML = magic;
		$('.list-6').hide(300);
		$('.list-7').show();
	})
	$('.btn6k').click(function () {
		magic += 0;
		document.getElementById("result-magic").innerHTML = magic;
		$('.list-6').hide(300);
		$('.list-7').show();
	})
	$('.btn7c').click(function () {
		magic += 64;
		document.getElementById("result-magic").innerHTML = magic;
		$('.list-7').hide(300);

		if (magic > 100) {
			$('.result-error').show();
		} else {
			$('.result').show();

		}
	})
	$('.btn7k').click(function () {
		magic += 0;
		document.getElementById("result-magic").innerHTML = magic;
		$('.list-7').hide(300);
		$('.result').show();
		if (magic > 100) {
			$('.result-error').show();
		} else {
			$('.result').show();

		}

	})

	$('.btn-reload').click(function () {
		location.reload();
	})


});
//© 2020 Copyright by Tiendatmagic - All Rights Reserved | Designed by Tiendatmagic