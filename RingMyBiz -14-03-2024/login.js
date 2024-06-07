
// $(document).ready(function () {
//     $(".sign_up").click(function () {
//         $("body").toggleClass("active");
//     })
//     $(".form-recovery").click(function () {
//         $("body").toggleClass("forget_password");
//     })
//     $(".back_to_login").click(function () {
//         $("body").removeClass("active");
//     })
//     $(".back_to_login").click(function () {
//         $("body").removeClass("forget_password");
//     })
// });
$(".toggle-password").click(function() {
    $(this).toggleClass("fa-eye fa-eye-slash");
    input = $(this).parent().find("input");
    if (input.attr("type") == "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }
});



