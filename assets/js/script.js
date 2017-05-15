var enderecoMac = [32];
var macInvertido = [32];



function SomenteNumero(e) {
	var tecla = (window.event) ? event.keyCode : e.which;
	if ((tecla > 47 && tecla < 58) || tecla == 46) {
		return true;
	}
	else {
		if (tecla == 8 || tecla == 0) {
			return true;
		}
		else {
			return false;
		}
	}
}



function validaIp1() {

	var valor = $('#ip1').val();
	var tamanho = valor.length;
	console.log("Tamanho: " + tamanho + " Valor: " + valor);

	if (valor >= 0 && valor <= 255 && tamanho >= 1) {
		$('#divIp1').removeClass("has-error");
		$('#divIp1').addClass("has-success");
		$('#divIp1').addClass("has-feedback");
		$('#spanIp1').removeClass("glyphicon-remove");
		$('#spanIp1').addClass("glyphicon-ok");

		ipSufixo();

		ipToBin();

		if (tamanho == 3) {
			$('#ip2').focus();
		}
	}
	else {
		if (tamanho == 3 && valor > 255 || valor < 0) {
			$('#divIp1').removeClass("has-success");
			$('#divIp1').addClass("has-error");
			$('#divIp1').addClass("has-feedback");
			$('#spanIp1').removeClass("glyphicon-ok");
			$('#spanIp1').addClass("glyphicon-remove");

			$('#ipSufixo').val("");

			$('#ip1').focus();
		}
	}
	
	if(valor[valor.length -1] == "."){
		var val = "";
		for(var i = 0; i < valor.length - 1; i++){
			val += valor[i];
		}
		$('#ip1').val(val);
		$('#ip2').focus();
	}
}

function validaIp2() {

	var valor = $('#ip2').val();
	var tamanho = valor.length;
	console.log("Tamanho: " + tamanho + " Valor: " + valor);

	if (valor >= 0 && valor <= 255 && tamanho >= 1) {
		$('#divIp2').removeClass("has-error");
		$('#divIp2').addClass("has-success");
		$('#divIp2').addClass("has-feedback");
		$('#spanIp2').removeClass("glyphicon-remove");
		$('#spanIp2').addClass("glyphicon-ok");

		ipSufixo();

		ipToBin();

		if (tamanho == 3) {
			$('#ip3').focus();
		}
	}
	else {
		if (tamanho == 3 && valor > 255 || valor < 0) {
			$('#divIp2').removeClass("has-success");
			$('#divIp2').addClass("has-error");
			$('#divIp2').addClass("has-feedback");
			$('#spanIp2').removeClass("glyphicon-ok");
			$('#spanIp2').addClass("glyphicon-remove");

			$('#ipSufixo').val("");

			$('#ip2').focus();
		}
	}
	
	if(valor[valor.length -1] == "."){
		var val = "";
		for(var i = 0; i < valor.length - 1; i++){
			val += valor[i];
		}
		$('#ip2').val(val);
		$('#ip3').focus();
	}

}

function validaIp3() {

	var valor = $('#ip3').val();
	var tamanho = valor.length;
	console.log("Tamanho: " + tamanho + " Valor: " + valor);

	if (valor >= 0 && valor <= 255 && tamanho >= 1) {
		$('#divIp3').removeClass("has-error");
		$('#divIp3').addClass("has-success");
		$('#divIp3').addClass("has-feedback");
		$('#spanIp3').removeClass("glyphicon-remove");
		$('#spanIp3').addClass("glyphicon-ok");

		ipSufixo();

		ipToBin();

		if (tamanho == 3) {
			$('#ip4').focus();
		}
	}
	else {
		if (tamanho == 3 && valor > 255 || valor < 0) {
			$('#divIp3').removeClass("has-success");
			$('#divIp3').addClass("has-error");
			$('#divIp3').addClass("has-feedback");
			$('#spanIp3').removeClass("glyphicon-ok");
			$('#spanIp3').addClass("glyphicon-remove");

			$('#ipSufixo').val("");

			$('#ip3').focus();
		}
	}
	
	if(valor[valor.length -1] == "."){
		var val = "";
		for(var i = 0; i < valor.length - 1; i++){
			val += valor[i];
		}
		$('#ip3').val(val);
		$('#ip4').focus();
	}
}

function validaIp4() {

	var valor = $('#ip4').val();
	var tamanho = valor.length;
	console.log("Tamanho: " + tamanho + " Valor: " + valor);

	if (valor >= 0 && valor <= 255 && tamanho >= 1) {
		$('#divIp4').removeClass("has-error");
		$('#divIp4').addClass("has-success");
		$('#divIp4').addClass("has-feedback");
		$('#spanIp4').removeClass("glyphicon-remove");
		$('#spanIp4').addClass("glyphicon-ok");

		ipSufixo();

		ipToBin();

		if (tamanho == 3) {
			$('#sufixo').focus();
		}
	}
	else {
		if (tamanho == 3 && valor > 255 || valor < 0) {
			$('#divIp4').removeClass("has-success");
			$('#divIp4').addClass("has-error");
			$('#divIp4').addClass("has-feedback");
			$('#spanIp4').removeClass("glyphicon-ok");
			$('#spanIp4').addClass("glyphicon-remove");

			$('#ipSufixo').val("");

			$('#ip4').focus();
		}
	}
	
	if(valor[valor.length -1] == "."){
		var val = "";
		for(var i = 0; i < valor.length - 1; i++){
			val += valor[i];
		}
		$('#ip4').val(val);
		$('#sufixo').focus();
	}
}

function validaSufixo() {

	var valor = $('#sufixo').val();
	var tamanho = valor.length;
	console.log("Tamanho: " + tamanho + " Valor: " + valor);

	if (valor > 0 && valor <= 32 && tamanho >= 1) {
		$('#divSufixo').removeClass("has-error");
		$('#divSufixo').addClass("has-success");
		$('#divSufixo').addClass("has-feedback");
		$('#spanSufixo').removeClass("glyphicon-remove");
		$('#spanSufixo').addClass("glyphicon-ok");

		ipSufixo();

	}
	else {
		if (tamanho == 2 && valor > 32 || valor <= 0) {
			$('#divSufixo').removeClass("has-success");
			$('#divSufixo').addClass("has-error");
			$('#divSufixo').addClass("has-feedback");
			$('#spanSufixo').removeClass("glyphicon-ok");
			$('#spanSufixo').addClass("glyphicon-remove");

			$('#ipSufixo').val("");

		}
	}
	
	if(valor[valor.length -1] == "."){
		var val = "";
		for(var i = 0; i < valor.length - 1; i++){
			val += valor[i];
		}
		$('#sufixo').val(val);
		calcula();
	}
}

function ipSufixo() {
	$('#ipSufixo').val("");
	$('#ipSufixo').val($('#ip1').val() + "." + $('#ip2').val() + "." + $('#ip3').val() + "." + $('#ip4').val() + "/" + $('#sufixo').val());
}

function limparCampos() {
	$('#ip1').val("");
	$('#divIp1').removeClass("has-success");
	$('#spanIp1').removeClass("glyphicon-ok");
	$('#divIp1').removeClass("has-error");
	$('#spanIp1').removeClass("glyphicon-remove");

	$('#ip2').val("");
	$('#divIp2').removeClass("has-success");
	$('#spanIp2').removeClass("glyphicon-ok");
	$('#divIp2').removeClass("has-error");
	$('#spanIp2').removeClass("glyphicon-remove");

	$('#ip3').val("");
	$('#divIp3').removeClass("has-success");
	$('#spanIp3').removeClass("glyphicon-ok");
	$('#divIp3').removeClass("has-error");
	$('#spanIp3').removeClass("glyphicon-remove");

	$('#ip4').val("");
	$('#divIp4').removeClass("has-success");
	$('#spanIp4').removeClass("glyphicon-ok");
	$('#divIp4').removeClass("has-error");
	$('#spanIp4').removeClass("glyphicon-remove");

	$('#sufixo').val("");
	$('#divSufixo').removeClass("has-success");
	$('#spanSufixo').removeClass("glyphicon-ok");
	$('#divSufixo').removeClass("has-error");
	$('#spanSufixo').removeClass("glyphicon-remove");

	$('#ipSufixo').val("");

	$('#endIpBinario').val("");

	$('#endMacBinario').val("");
	$('#endMacDecimal').val("");

	$('#endRedeBinario').val("");
	$('#endRedeDecimal').val("");

	$('#endBroadBinario').val("");
	$('#endBroadDecimal').val("");

	$('#hostInicial').val("");
	$('#hostFinal').val("");
	$('#hostQtd').val("");

	$('#ip1').focus();
}

function geraAleatorio() {

	var min = 0;
	var max = 255

	$('#ip1').val(aleatorio(min, max));
	$('#ip2').val(aleatorio(min, max));
	$('#ip3').val(aleatorio(min, max));
	$('#ip4').val(aleatorio(min, max));
	$('#sufixo').val(aleatorio(1, 32));

	ipSufixo();

	$('#divIp1').removeClass("has-error");
	$('#divIp1').addClass("has-success");
	$('#divIp1').addClass("has-feedback");
	$('#spanIp1').removeClass("glyphicon-remove");
	$('#spanIp1').addClass("glyphicon-ok");

	$('#divIp2').removeClass("has-error");
	$('#divIp2').addClass("has-success");
	$('#divIp2').addClass("has-feedback");
	$('#spanIp2').removeClass("glyphicon-remove");
	$('#spanIp2').addClass("glyphicon-ok");

	$('#divIp3').removeClass("has-error");
	$('#divIp3').addClass("has-success");
	$('#divIp3').addClass("has-feedback");
	$('#spanIp3').removeClass("glyphicon-remove");
	$('#spanIp3').addClass("glyphicon-ok");

	$('#divIp3').removeClass("has-error");
	$('#divIp3').addClass("has-success");
	$('#divIp3').addClass("has-feedback");
	$('#spanIp3').removeClass("glyphicon-remove");
	$('#spanIp3').addClass("glyphicon-ok");

	$('#divIp4').removeClass("has-error");
	$('#divIp4').addClass("has-success");
	$('#divIp4').addClass("has-feedback");
	$('#spanIp4').removeClass("glyphicon-remove");
	$('#spanIp4').addClass("glyphicon-ok");

	$('#divSufixo').removeClass("has-error");
	$('#divSufixo').addClass("has-success");
	$('#divSufixo').addClass("has-feedback");
	$('#spanSufixo').removeClass("glyphicon-remove");
	$('#spanSufixo').addClass("glyphicon-ok");

	calcula();

}

function aleatorio(inferior, superior) {
	var numPossibilidades = superior - inferior;
	var aleat = Math.random() * numPossibilidades;
	var aleat = Math.floor(aleat);

	return parseInt(inferior) + aleat;
}

function calculaMac() {

	var sufixo = $('#sufixo').val();

	$('#endMacBinario').val("");

	for (var i = 0; i < 32; i++) {
		if (i < sufixo) {
			enderecoMac[i] = 1;
		}
		else {
			enderecoMac[i] = 0
		}
	}

	var enderecoMacString;

	for (var i = 0; i < 32; i++) {
		if (i == 8) {
			$('#endMacBinario').val($('#endMacBinario').val() + ".");
		}
		if (i == 16) {
			$('#endMacBinario').val($('#endMacBinario').val() + ".");
		}
		if (i == 24) {
			$('#endMacBinario').val($('#endMacBinario').val() + ".");
		}

		$('#endMacBinario').val($('#endMacBinario').val() + enderecoMac[i]);

	}

	converteMac();
}

function converteMac() {

	var mac1 = "";
	var mac2 = "";
	var mac3 = "";
	var mac4 = "";

	for (var i = 0; i < 32; i++) {
		if (i < 8) {
			mac1 = mac1 + enderecoMac[i];
		}
		else {
			if (i < 16) {
				mac2 = mac2 + enderecoMac[i];
			}
			else {
				if (i < 24) {
					mac3 = mac3 + enderecoMac[i];
				}
				else {
					mac4 = mac4 + enderecoMac[i];
				}
			}
		}
	}

	mac1 = BinToDec(mac1);
	mac2 = BinToDec(mac2);
	mac3 = BinToDec(mac3);
	mac4 = BinToDec(mac4);

	$('#endMacDecimal').val(mac1 + "." + mac2 + "." + mac3 + "." + mac4);

}

function calculaRede() {
	var mascara = $('#endMacBinario').val().split(".");
	var ip = $('#endIpBinario').val().split(".");
	var rede = "";
	for (var i = 0; i < mascara.length; i++) {
		for (var j = 0; j < mascara[i].length; j++) {
			if (mascara[i][j] == 1 && ip[i][j] == 1) {
				rede += "1";
			}
			else {
				rede += "0";
			}
		}
		if (i < mascara.length - 1) {
			rede += ".";
		}
	}
	$('#endRedeBinario').val(rede);
	converteRede();
}

function converteRede() {
	var rede = $('#endRedeBinario').val().split(".");

	var dec = "";
	for (var i = 0; i < rede.length; i++) {
		dec += BinToDec(rede[i]);
		if (i < rede.length - 1) {
			dec += ".";
		}
	}
	$('#endRedeDecimal').val(dec);
}

function calculaBroad() {

	var macInverso = ""

	// for (i = enderecoMac.length - 1; i >= 0; i--) {
	// 	macInverso += enderecoMac[i];
	// }
	
	for (i = 0; i < enderecoMac.length; i++) {
	 	if(enderecoMac[i] == 1){
	 		macInverso += "0";
	 	}else{
	 		macInverso += "1";
	 	}
	}

	var rede = $('#endRedeBinario').val().split(".");
	var redeBinario = "";

	for (i = 0; i < rede.length; i++) {
		redeBinario += rede[i];
	}

	var broadBinario = "";

	for (i = 0; i < macInverso.length; i++) {
		if (macInverso[i] == 1 || redeBinario[i] == 1) {
			broadBinario += "1";
		}
		else {
			broadBinario += "0";
		}
		if (i == 7 || i == 15 || i == 23) {
			broadBinario += ".";
		}
	}

	$('#endBroadBinario').val(broadBinario);

	converteBroad();
}

function converteBroad() {
	var broad = $('#endBroadBinario').val().split(".");

	var dec = "";
	for (var i = 0; i < broad.length; i++) {
		dec += BinToDec(broad[i]);
		if (i < broad.length - 1) {
			dec += ".";
		}
	}
	$('#endBroadDecimal').val(dec);
}




function BinToDec(binario) {
	var aux1 = new Array(8);
	aux1[0] = 1
	aux1[1] = 2
	aux1[2] = 4
	aux1[3] = 8
	aux1[4] = 16
	aux1[5] = 32
	aux1[6] = 64
	aux1[7] = 128

	var numeroB = binario
	var qtd = numeroB.length;

	var ArrBin = new Array(qtd);
	var j = 0
	for (var i = qtd - 1; i >= 0; i--) {
		ArrBin[j] = numeroB.substring(i, i + 1);
		j++;
	}
	var valor = 0;
	for (i = 0; i < qtd; i++) {
		if (ArrBin[i] > 0) {
			valor += aux1[i]
		}
	}
	return valor;
}

function DecToBin(decimal) {
	var vet = (decimal).toString(2);
	alert(vet);
	var binario = [8];

	if (decimal >= 128) {
		binario[0] = 1;
		decimal = decimal - 128;
	}
	else {
		binario[0] = 0;
	}

	if (decimal >= 64) {
		binario[1] = 1;
		decimal = decimal - 64;
	}
	else {
		binario[1] = 0;
	}

	if (decimal >= 32) {
		binario[2] = 1;
		decimal = decimal - 32;
	}
	else {
		binario[2] = 0;
	}

	if (decimal >= 16) {
		binario[3] = 1;
		decimal = decimal - 16;
	}
	else {
		binario[3] = 0;
	}

	if (decimal >= 8) {
		binario[4] = 1;
		decimal = decimal - 8;
	}
	else {
		binario[4] = 0;
	}

	if (decimal >= 4) {
		binario[5] = 1;
		decimal = decimal - 4;
	}
	else {
		binario[5] = 0;
	}

	if (decimal >= 2) {
		binario[6] = 1;
		decimal = decimal - 2;
	}
	else {
		binario[6] = 0;
	}

	if (decimal >= 1) {
		binario[7] = 1;
		decimal = decimal - 1;
	}
	else {
		binario[7] = 0;
	}

	var valor = "";

	for (var i = 0; i < 8; i++) {
		valor = valor + binario[i];
	}

	return valor;

}

function ipToBin() {
	var ip1 = $('#ip1').val();
	var ip2 = $('#ip2').val();
	var ip3 = $('#ip3').val();
	var ip4 = $('#ip4').val();

	/*ip1 = DecToBin(ip1);
	ip2 = DecToBin(ip2);
	ip3 = DecToBin(ip3);
	ip4 = DecToBin(ip4);*/
	ip1 = parseInt(ip1).toString(2);
	ip2 = parseInt(ip2).toString(2);
	ip3 = parseInt(ip3).toString(2);
	ip4 = parseInt(ip4).toString(2);
	ip1 = pad(ip1, 8);
	ip2 = pad(ip2, 8);
	ip3 = pad(ip3, 8);
	ip4 = pad(ip4, 8);

	$('#endIpBinario').val(ip1 + "." + ip2 + "." + ip3 + "." + ip4);

}

function pad(s, size) {
	while (s.length < size) s = "0" + s;
	return s;
}

var pw = false;
var pwMac = false;
var pwHost = false;
var pwRede = false;
var pwBroad = false;

function hideMac() {
	if (pwMac == false) {
		$('.input-mac').attr('type', 'password');
		pwMac = true;
		$('#hide-mac').html("Mostrar");
	}
	else if (pwMac == true) {
		$('.input-mac').attr('type', 'text');
		pwMac = false;
		$('#hide-mac').html("Ocultar");
	}
}

function hideHost() {
	if (pwHost == false) {
		$('.input-host').attr('type', 'password');
		pwHost = true;
		$('#hide-host').html("Mostrar");
	}
	else if (pwHost == true) {
		$('.input-host').attr('type', 'text');
		pwHost = false;
		$('#hide-host').html("Ocultar");
	}
}

function hideRede() {
	if (pwRede == false) {
		$('.input-rede').attr('type', 'password');
		pwRede = true;
		$('#hide-rede').html("Mostrar");
	}
	else if (pwRede == true) {
		$('.input-rede').attr('type', 'text');
		pwRede = false;
		$('#hide-rede').html("Ocultar");
	}
}

function hideBroad() {
	if (pwBroad == false) {
		$('.input-broad').attr('type', 'password');
		pwBroad = true;
		$('#hide-broad').html("Mostrar");
	}
	else if (pwBroad == true) {
		$('.input-broad').attr('type', 'text');
		pwBroad = false;
		$('#hide-broad').html("Ocultar");
	}
}

function hideAll() {
	if (pw == false) {
		$('.input').attr('type', 'password');
		pw = true;
		$('#hide-all').html("Mostrar Tudo");

		pwMac = true;
		$('#hide-mac').html("Mostrar");
		pwHost = true;
		$('#hide-host').html("Mostrar");
		pwRede = true;
		$('#hide-rede').html("Mostrar");
		pwBroad = true;
		$('#hide-broad').html("Mostrar");

	}
	else if (pw == true) {
		$('.input').attr('type', 'text');
		pw = false;
		$('#hide-all').html("Ocultar Tudo");

		pwMac = false;
		$('#hide-mac').html("Ocultar");
		pwHost = false;
		$('#hide-host').html("Ocultar");
		pwRede = false;
		$('#hide-rede').html("Ocultar");
		pwBroad = false;
		$('#hide-broad').html("Ocultar");
	}
}


function calculaHostInicial() {
	var rede = $('#endRedeDecimal').val().split(".");

	for (i = 0; i < rede.length; i++) {
		rede[i] = parseInt(rede[i]);
	}

	if (rede[3] == 255 && rede[2] == 255 && rede[1] == 255 && rede[0] == 255) {

	}
	else {
		if (rede[3] == 255 && rede[2] == 255 && rede[1] == 255) {
			rede[0]++;
			rede[1] = 0;
			rede[2] = 0;
			rede[3] = 0;
		}
		else {
			if (rede[3] == 255 && rede[2] == 255) {
				rede[1]++;
				rede[2] = 0;
				rede[3] = 0;
			}
			else {
				if (rede[3] == 255) {
					rede[2]++;
					rede[3] = 0;
				}
				else {
					rede[3]++;
				}
			}
		}
	}

	$("#hostInicial").val(rede[0] + "." + rede[1] + "." + rede[2] + "." + rede[3])

}

function calculaHostFinal() {
	var broad = $('#endBroadDecimal').val().split(".");

	for (i = 0; i < broad.length; i++) {
		broad[i] = parseInt(broad[i]);
	}

	if (broad[3] == 0 && broad[2] == 0 && broad[1] == 0 && broad[0] == 0) {

	}
	else {
		if (broad[3] == 0 && broad[2] == 0 && broad[1] == 0) {
			broad[0]--;
			broad[1] = 255;
			broad[2] = 255;
			broad[3] = 255;
		}
		else {
			if (broad[3] == 0 && broad[2] == 0) {
				broad[1]--;
				broad[2] = 255;
				broad[3] = 255;
			}
			else {
				if (broad[3] == 0) {
					broad[2]--;
					broad[3] = 255;
				}
				else {
					broad[3]--;
				}
			}
		}
	}

	$("#hostFinal").val(broad[0] + "." + broad[1] + "." + broad[2] + "." + broad[3])

}


function qtdHosts() {

	var qtd = $('#sufixo').val();

	if (qtd == 32) {
		$('#hostQtd').val();
	}
	else {
		qtd = 32 - qtd;

		qtd = Math.pow(2, qtd);
		$('#hostQtd').val(qtd - 2);
	}



}

function calcula() {
	ipToBin();
	calculaMac();

	calculaRede();
	converteRede();

	calculaBroad();
	converteBroad();

	calculaHostInicial();
	calculaHostFinal();

	qtdHosts();

}