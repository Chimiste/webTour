/**
 * @package:WebTour
 * @Auth.js::signup()
 */
$(document).ready(function() {

    $('.registerForm').bootstrapValidator({
        message: lang['sms_value_not_valid'],
		container: 'tooltip',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            firstname: {
                message: "Please Firstname is required.",
                validators: {
                    notEmpty: {
                        message: 'Please Firstname is required.'
                    }
                }
            },
			lastname: {
                message: 'Lastname is notvalid.',
                validators: {
                    notEmpty: {
                        message: "Lastname is required."
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'E-mail is required.'
                    },
                    emailAddress: {
                        message: 'E-mail is not valid.'
                    }
                }
            },
			password: {
                validators: {
                    notEmpty: {
                        message: 'Password is required.'
                    },
                    different: {
                        field: 'firstname',
                        message: 'Password is different of firstname.'
                    },
					different: {
                        field: 'lastname',
                        message: 'Password is different of lastname.'
                    },
					identical: {
                        field: 'cpassword',
                        message: 'Password do not match.'
                    }
                }
            },
			cpassword: {
                validators: {
					notEmpty: {
                        message: 'Re-type your password.'
                    },
                    identical: {
                        field: 'password',
                        message: 'Password do not match.'
                    }
                }
            }
        }
    })
	.on('success.form.bv', function(e) {
    e.preventDefault();
	  var url = baseurl+'signup-processing',
			    data = $(".registerForm").serialize();
		
		//below line will be done later		
	  //$('.registerForm').find('h1').first().append('  <img src="'+ajaxLoader+'" alt="" class="ajaxLoader" />');

	   ajaxSubmit(url, data , successSignUp, errorSignUp, failureSignUp,'json')
	});
});

/**
 * @package:WebTour
 * @Auth.js::successSignUp()
 * @params:str
*/
function successSignUp(str){
  //handling success from server
}
/**
 * @package:WebTour
 * @Auth.js::errorSignUp()
 * @params:str
*/
function errorSignUp(str){
   //handling error from server
}

/**
 * @package:WebTour
 * @Auth.js::failureSignUp()
 * @params:str
*/
function failureSignUp(str){
 //handling error from server
}

/**
 * @package:WebTour
 * @Auth.js::Login()
*/
$(document).ready(function() {
    $('.login-form').bootstrapValidator({
        message: lang['sms_value_not_valid'],
		container: 'tooltip',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            login_email: {
                validators: {
                    notEmpty: {
                        message: 'E-mail is required.'
                    },
                    emailAddress: {
                        message: 'E-mail isnot valid.'
                    }
                }
            },
			login_password: {
                validators: {
                    notEmpty: {
                        message: 'Password is required.'
                    }
                }
            }
        }
    })
	.on('success.form.bv', function(e) {
    e.preventDefault();
	  var url = baseurl+'login',
			    data = $(".login-form").serialize();
				
	  //$('.login-modal').find('h4').first().append('  <img src="'+ajaxLoader+'" alt="" class="ajaxLoader" />');

	   ajaxSubmit(url, data , successLogin, errorLogin, failureLogin,'json')
	});
});
/**
 * @package:WebTour
 * @Auth.js::successLogin()
 * @params:str
*/
function successLogin(str){
//handling success
}
/**
 * @package:WebTour
 * @Auth.js::errorLogin()
 * @params:str
*/
function errorLogin(str){
//handling error
}
/**
 * @package:WebTour
 * @Auth.js::failureLogin()
 * @params:str
*/
function failureLogin(str){
 //handling error
}
