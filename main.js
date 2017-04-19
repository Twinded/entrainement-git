$(document).ready(function() {
	"use strict";
	$('#lien0').click(function() {
		alert('test');
		$('#content').load('/utilisation-git/thomas/thomas.php');	
	});
});