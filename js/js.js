var app = angular.module("SampleApp", []);

app.controller("SampleAppCtrl", function($scope) {
	$scope.options =
        [{ display: "Registration form", value: "register" },
        { display: "Login form", value: "login" }];

	$scope.mode = $scope.options[0];
});



function logINUSR() {

	var LogUserData = {
		email: $('#mail_log').val(),
		password: $('#pass_log').val()
	}

	$.post(
	  "php/api.php",
	  {
	    email_validate: LogUserData.email,
	    password_validate: LogUserData.password
	  }
	);

}

function RegUSR() {

	var nickName = $('#name_reg').val();
	var email = $('#mail_reg').val();
	var pass = $('#pass_reg').val();

	if ( /^[а-яА-Яa-zA-Z0-9_\-]{1,}$/.test(nickName) ) {
		if ( /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(email) ) {
			if($('#pass_reg').val() == $('#confirm_pass_reg').val()) {
				if($('#pass_reg').val() != "" && $('#confirm_pass_reg').val() != "" ) {

					var RegUserData = {
					nickname: nickName,
					email: email,
					password: pass
					}

					$.post(
					  "php/api.php",
					  {
					    nickname_register: RegUserData.nickname,
					    email_register: RegUserData.email,
					    password_register: RegUserData.password
					  }
					);
					alert("Аккаунт успешно создан");
				}
				else {alert("Ведите пароль");}
			}
			else {alert("Пароли не совпадают");}
		}
		else {alert("Проверьте корректность введенноко Email");}
	}
	else {alert("Вы ввели недопустимые символы в Вашем Nickname");}

}







/*

var res;
var data
var Name;

document.cookie = "username=Вася; expires=15/07/2016 16:05:00";
var x = document.cookie;


$(document).ready(function(){
	AddMessage();
})

function AddNewUser() {
	Name = document.getElementById('your-name').value;

	if(Name != "") {
		$('.login-popup').addClass("close-popup");
		console.log(Name);
	}
	
}

function AddMessage() {

	if(document.getElementById('message__').value == "") {
		//ничего
	}
	else {
		var text = document.getElementById('message__').value;
		res = JSON.stringify(text); 
		var text = document.getElementById('message__').value = "";
	}
	ParseMessages();
}

function ParseMessages() {

	function fillIn(data) {
		document.getElementById('dialog__space').innerHTML = '';
		console.log(data[i]);
		for(var i=0; i<data.length; i++) {
			if(i%2==0) {
				if(data[i]!=undefined) {
					$('#dialog__space').append("<div class=\"main__content__dialog__message\"><div class=\"main__content__dialog__message__name\"><span>"+data[i+1]+"</span></div><div class=\"main__content__dialog__message__date\"><span>14 января 2014</span></div><div class=\"main__content__dialog__message__msg\">"+data[i]+"</div></div>");
				}
			}
		}
	}

	$.post(
	  "php/api.php",
	  {
	    param1: res,
	    param2: Name,
	  },
	  onAjaxSuccess
	);

	function onAjaxSuccess(data) {
	  // Здесь мы получаем данные, отправленные сервером и выводим их на экран.
	    function loadJSON(callback) {
		    var request = new XMLHttpRequest();
		    request.overrideMimeType("application/json");
		    request.open('GET', 'json/mail_source.json', true);
		    request.onreadystatechange = function() {
		        if (request.readyState == 4 && request.status == "200")
		        {
		            callback(request.responseText);
		        }
		    }
		request.send(null);
		}
		loadJSON(function(response) {
			data = JSON.parse(response);
			fillIn(data);
		});
	}
}


*/