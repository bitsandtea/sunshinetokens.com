// helper functions

function validateEmail(email) {
  // The regex pattern to match an email format
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Return whether the email matches the pattern
  return pattern.test(email);
}
 
let errorMessage = "Please provide the missing fields.";
//modal window form
$(".modal_contact_btn").on('click', function () {
    //disable submit button on click
    $(".modal_contact_btn").attr("disabled", "disabled");
    // $(".modal_contact_btn b").text('Sending');
    $(".modal_contact_btn i").removeClass('d-none');  
    
    //simple validation at client's end
    var post_data, output;
    var proceed = true;

    var str=$('#modal-contact-form-data').serializeArray();
    const email = str[2].value;
    if (!validateEmail(email)) {
        console.log("Invalid email format", email);
        errorMessage = "Invalid email format";
        proceed = false;
    } 
    if (str.length !== 4){
        proceed = false;

    }
    $('#modal-contact-form-data input').each(function() {
        if(!$(this).val()){
            proceed = false;
        }
    });

    //everything looks good! proceed...
    if (proceed) {

        var accessURL = "https://formspree.io/f/mgebrjav";
        $.ajax({
            type : 'POST',
            url : accessURL,
            data : str,
            dataType: 'json',
            success: function(response) {
                if (response.type == 'error') {
                    output = '<div class="alert-danger" style="padding:10px 15px; margin-bottom:30px;">' + response.text + '</div>';
                } else {
                    output = '<div></div>';
                    //reset values in all input fields
                    $('.contact-form input').val('');
                    $('.contact-form textarea').val('');
                    $('.signup-popup').addClass('d-none');
                    $('.info-video').addClass('d-block');
                }


                if ($("#quote_result").length) {
                    $("#quote_result").hide().html(output).slideDown();
                    $(".modal_contact_btn i").addClass('d-none');
                }else{
                    if (response.type == 'error') {
                        Swal.fire({
                            type: 'error',
                            icon: 'error',
                            title: 'Oops...',
                            html: '<div class="text-danger">'+ response.text +'</div>',
                        })
                        $(".modal_contact_btn i").addClass('d-none');
                    }else{
                        Swal.fire({
                            type: 'success',
                            icon: 'success',
                            title: 'Success!',
                            html: '<div class="text-success">'+ response.text +'</div>',
                        })
                        $(".modal_contact_btn i").addClass('d-none');
                    }
                }
            },
            error: function () {
                alert("Something went wrong, please give it another try or email us at support@sunshinetokens.com");
            }
        });

    }
    else {
        // output = '<div class="alert-danger" style="padding:10px 15px; margin-bottom:30px;">Please provide the missing fields.</div>';
        // $("#quote_result").hide().html(output).slideDown();
        // $(".modal_contact_btn i").addClass('d-none');
        if ($("#quote_result").length) {
            output = '<div class="alert-danger" style="padding:10px 15px; margin-bottom:30px;">'+errorMessage+'</div>';
            $("#quote_result").hide().html(output).slideDown();
            $(".modal_contact_btn i").addClass('d-none');
        }else{
            Swal.fire({
                icon: 'error',
                type: 'error',
                title: 'Oops...',
                html: '<div class="text-danger">'+errorMessage+'</div>'
            })
            $(".modal_contact_btn i").addClass('d-none');
        }
    }


});


//contact form
$(".contact_btn").on('click', function () {
    //disable submit button on click
    // $(".contact_btn").attr("disabled", "disabled");
    // $(".contact_btn b").text('Sending');
    $(".contact_btn i").removeClass('d-none');  
    
    //simple validation at client's end
    var post_data, output;
    var proceed = true;

    var str=$('#contact-form-data').serializeArray();
    const email = str[2].value;
    if (!validateEmail(email)) {
        console.log("Invalid email format", email);
        errorMessage = "Invalid email format";
        proceed = false;
    } 
    if (str.length !== 4){
        proceed = false;

    }
    $('#contact-form-data input').each(function() {
        if(!$(this).val()){
            proceed = false;
        }
    });

    //everything looks good! proceed...
    if (proceed) {

        var accessURL = "https://formspree.io/f/mgebrjav";
        $.ajax({
            type : 'POST',
            url : accessURL,
            data : str,
            dataType: 'json',
            success: function(response) {
                if (response.type == 'error') {
                    output = '<div class="alert-danger" style="padding:10px 15px; margin-bottom:30px;">' + response.text + '</div>';
                } else {
                    output = '<div class="alert-success" style="padding:10px 15px; margin-bottom:30px;">' + 'You have signed up! We will email you soon!' + '</div>';
                    //reset values in all input fields
                    $('.contact-form input').val('');
                    $('.contact-form textarea').val('');
                    console.log('success')
                    // $('.signup-popup').addClass('d-none');
                    // $('.info-video').addClass('d-block');
                }


                if ($("#result").length) {
                    $("#result").hide().html(output).slideDown();
                    $(".contact_btn i").addClass('d-none');
                }else{
                    if (response.type == 'error') {
                        Swal.fire({
                            type: 'error',
                            icon: 'error',
                            title: 'Oops...',
                            html: '<div class="text-danger">'+ response.text +'</div>',
                        })
                        $(".contact_btn i").addClass('d-none');
                    }else{
                        Swal.fire({
                            type: 'success',
                            icon: 'success',
                            title: 'Success!',
                            html: '<div class="text-success">'+ response.text +'</div>',
                        })
                        $(".contact_btn i").addClass('d-none');
                    }
                }
            },
            error: function () {
                alert("Something went wrong, please give it another try or email us at support@sunshinetokens.com");
            }
        });

    }
    else {
        // output = '<div class="alert-danger" style="padding:10px 15px; margin-bottom:30px;">Please provide the missing fields.</div>';
        // $("#result").hide().html(output).slideDown();
        // $(".contact_btn i").addClass('d-none');
        if ($("#result").length) {
            output = '<div class="alert-danger" style="padding:10px 15px; margin-bottom:30px;">'+errorMessage+'</div>';
            $("#result").hide().html(output).slideDown();
            $(".contact_btn i").addClass('d-none');
        }else{
            Swal.fire({
                icon: 'error',
                type: 'error',
                title: 'Oops...',
                html: '<div class="text-danger">'+errorMessage+'</div>'
            })
            $(".contact_btn i").addClass('d-none');
        }
    }


});