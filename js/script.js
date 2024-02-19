function myfunc() {
	var b1,b2,b3,b4,b5,b6,b7,b8,b9;
	b1 = document.getElementById("b1").value;
	b2 = document.getElementById("b2").value;
	b3 = document.getElementById("b3").value;
	b4 = document.getElementById("b4").value;
	b5 = document.getElementById("b5").value;
	b6 = document.getElementById("b6").value;
	b7 = document.getElementById("b7").value;
	b8 = document.getElementById("b8").value;
	b9 = document.getElementById("b9").value;
	if (b1.toLowerCase() == 'x' && b2.toLowerCase() == 'x' && b3.toLowerCase() == 'x') {
		window.alert('Победитель X');
		reset();
	} else if (b4.toLowerCase() == 'x' && b5.toLowerCase() == 'x' && b6.toLowerCase() == 'x') {
		window.alert('Победитель X');
		reset();
	} else if (b7.toLowerCase() == 'x' && b8.toLowerCase() == 'x' && b9.toLowerCase() == 'x') {
		window.alert('Победитель X');
		reset();
	} else if (b1.toLowerCase() == 'x' && b4.toLowerCase() == 'x' && b7.toLowerCase() == 'x') {
		window.alert('Победитель X');
		reset();
	} else if (b2.toLowerCase() == 'x' && b5.toLowerCase() == 'x' && b8.toLowerCase() == 'x') {
		window.alert('Победитель X');
		reset();
	} else if (b3.toLowerCase() == 'x' && b6.toLowerCase() == 'x' && b9.toLowerCase() == 'x') {
		window.alert('Победитель X');
		reset();
	} else if (b1.toLowerCase() == 'x' && b5.toLowerCase() == 'x' && b9.toLowerCase() == 'x') {
		window.alert('Победитель X');
		reset();
	} else if (b3.toLowerCase() == 'x' && b5.toLowerCase() == 'x' && b7.toLowerCase() == 'x') {
		window.alert('Победитель X');
		reset();
	}
	if (b1.toLowerCase() == 'O' && b2.toLowerCase() == 'O' && b3.toLowerCase() == 'O') {
		window.alert('Победитель O');
		reset();
	} else if (b4.toLowerCase() == 'O' && b5.toLowerCase() == 'O' && b6.toLowerCase() == 'O') {
		window.alert('Победитель O');
		reset();
	} else if (b7.toLowerCase() == 'O' && b8.toLowerCase() == 'O' && b9.toLowerCase() == 'O') {
		window.alert('Победитель O');
		reset();
	} else if (b1.toLowerCase() == 'O' && b4.toLowerCase() == 'O' && b7.toLowerCase() == 'O') {
		window.alert('Победитель O');
		reset();
	} else if (b2.toLowerCase() == 'O' && b5.toLowerCase() == 'O' && b8.toLowerCase() == 'O') {
		window.alert('Победитель O');
		reset();
	} else if (b3.toLowerCase() == 'O' && b6.toLowerCase() == 'O' && b9.toLowerCase() == 'O') {
		window.alert('Победитель O');
		reset();
	} else if (b1.toLowerCase() == 'O' && b5.toLowerCase() == 'O' && b9.toLowerCase() == 'O') {
		window.alert('Победитель O');
		reset();
	} else if (b3.toLowerCase() == 'O' && b5.toLowerCase() == 'O' && b7.toLowerCase() == 'O') {
		window.alert('Победитель O');
		reset();
	} 
	function reset() {
		location.reload();
		document.getElementById("b1").value = '';
		document.getElementById("b2").value = '';
		document.getElementById("b3").value = '';
		document.getElementById("b4").value = '';
		document.getElementById("b5").value = '';
		document.getElementById("b6").value = '';
		document.getElementById("b7").value = '';
		document.getElementById("b8").value = '';
		document.getElementById("b9").value = '';
	}
	let flag = 1;
	function setValue() {
		if (flag == 1) {
			this.value = "X";
			this.disabled = true;
			flag = 0;
		} else {
			this.value = "O";
			this.disabled = true;
			flag = 1;
		}
	}
}