/*---------------------------------------------------------------------
	File Name: custom.js
---------------------------------------------------------------------*/

$(function () {

	"use strict";


	/* JQuery Menu
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$('header nav').meanmenu();
	});

	/*-----------------------------------------------------------------------------------------------------------------*/
	//--------------------------------------------------REGISTER FORM
	$(document).ready(function () {
		$('#form_register').on('click', function () {

			//lấy dữ liệu từ form
			var firstname = $.trim($('#firstname').val());
			var lastname = $.trim($('#lastname').val());
			var email = $.trim($('#email').val());
			var username = $.trim($('#username').val());
			var password = $.trim($('#password').val());
			var repassword = $.trim($('#re-password').val());


			//Validate dữ liệu
			//biến dữ liệu
			var flag = true;


			//firstname
			if (firstname.length <= 0) {
				$('#firstname_error').text('first name must be not blank.');
				flag = false;
			}
			else {
				$('#firstname_error').text('');
			}
			//lastname
			if (lastname.length <= 0) {
				$('#lastname_error').text('last name must be not blank.');
				flag = false;
			}
			else {
				$('#lastname_error').text('');
			}
			//username
			if (username == '' || username.length <= 5) {
				$('#username_error').text('user name must have more than 5 characters.');
				flag = false;
			}
			else {
				$('#username_error').text('');
			}

			//password
			if (password.length <= 0) {
				$('#password_error').text('password must be not blank.');
				flag = false;
			}
			else {
				$('#password_error').text('');
			}

			//re-password
			if (password != repassword) {
				$('#repassword_error').text('Repassword must be the same with password.');
				flag = false;
			}
			else {
				$('#repassword_error').text('');
			}

			//email
			if (email.length <= 0) {
				$('#email_error').text('Email must be not blank.');
				flag = false;
			}
			else {
				$('#email_error').text('')
			}

			if (flag == true) {
				alert('Sign Up Success.')
				window.location.href = 'signin.html'
			}

			return flag;
		});
	});



	/**-----------------------------------------------------------------LOGIN---------------------------- */
	$(document).ready(function () {
		$('#form_sign').on('click', function () {
			//get dữ liệu
			var username = $.trim($('#username').val());
			var password = $.trim($('#password').val());

			//Validate dữ liệu
			//biến dữ liệu
			var flag = true;
			
			if (username == '' || password == '') {
				$('#sign_error').text('User name and password must be not blank.');
				flag = false;
			}
			else if (username .length <= 5 || password == '') {
				$('#sign_error').text('User name must have more than 5 characters.');
				flag = false;
			}
			else {
				$('#sign_error').text('');
				//$('#sign-change').html("<span>Hello &nbsp:&ensp;"+username+".</span>")
				alert('Welcome members: '+username+'.')
				window.location.href = 'index.html'
			}
			

			return flag;
		});
	});
	/**---------------------------------------------------CONTACT FORM------------------------------------------------------ */
	$(document).ready(function () {
		$('#form_contact').on('click', function () {
			//get du lieu
			var firstname = $.trim($('#firstname').val());
			var lastname = $.trim($('#lastname').val());
			var email = $.trim($('#email').val());
			var phone = $.trim($('#phone').val());
			var topic = $.trim($('#topic').val());
			var trd = $.trim($('#trd').val());
			var feedback = $.trim($('#feedback').val());

			var flag = true;

			//first name
			if (firstname == '') {
				$('#firstname_error').text('first name must be not blank.');
				flag = false;
			}
			else {
				$('#firstname_error').text('');
			}
			//last name
			if (lastname == '') {
				$('#lastname_error').text('last name must be not blank.');
				flag = false;
			}
			else {
				$('#lastname_error').text('');
			}
			//email
			if (email == '') {
				$('#email_error').text('email must be not blank.');
				flag = false;
			}
			else {
				$('#email_error').text('');
			}
			//phone	
			if (phone == '') {
				$('#phone_error').text('phone must be not blank.');
				flag = false;
			}
			else {
				$('#phone_error').text('');
			}
			//topic
			if (topic == 'none') {
				$('#topic_error').text('Please select your topic.');
				flag = false;
			}
			else {
				$('#topic_error').text('');
			}
			//trd
			if (trd == '') {
				$('#trd_error').text('Please select your ticket request day.');
				flag = false;
			}
			else {
				$('#trd_error').text('');
			}
			//feedback
			if (feedback == '') {
				$('#feedback_error').text('feedback must be not blank.');
				flag = false;
			}
			else {
				$('#topic_error').text('');
			}

			//alert
			if (flag == true) {
				alert('Contact form has been sent.')
			}
			else {

			}


			return flag;
				

		});
	});
	/**-----------------------------------------------------------DONATE--------------------- */
	$(document).ready(function () {
		$('#cardn').on('click', function () {
			$('#clktn').html("<p>1: Donate for Zoo : $15.00</p>")
			$('#cardss').html("<p>Thanks You</p>")
		});
	});
	
});
var c = function (pos) {
	var lat = pos.coords.latitude,
		long = pos.coords.longitude,
		coords = lat + ',' + long;

	document.getElementById('google_map').setAttribute('src', 'https://maps.google.co.uk?q=' + coords + '&z=60&output=embed')

}


/**----------------------------------------------------------ADD TO CART-------------------- */

function addToCart() {
	alert("added to cart!");
}