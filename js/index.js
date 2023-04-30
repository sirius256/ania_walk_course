(function() {

    $(window).on('load', function () {
        initMobileMenu();
        initMenuButton();
    });

    function initMobileMenu() {
        $('#mobilMenuButton').click(function(){
            $('#mainMenu').toggleClass('active');
            console.log('toggleClass active');
        });

        $(document).click(function(event) {
            if ($(event.target).closest(".course__header-wrap").length) {
                return;
            }
            console.log('removeClass active');
            $('#mainMenu').removeClass('active');
            event.stopPropagation();
        });

        $('.course__menu-button').click(function(){
            console.log('removeClass active');
            $('#mainMenu').removeClass('active');
        });
    }

    function initMenuButton() {
        let body = $("html, body");
        let headerHeight = $(".course__header").height();

        $('#menuButtonRegistration').click(function() {
            body.stop().animate({scrollTop:($('#registrationBlock').offset().top - headerHeight)}, '500', 'linear');
        });

        $('#menuButtonCourseDetails').click(function() {
            body.stop().animate({scrollTop:($('#courseDetailsBlock').offset().top - headerHeight)}, '500', 'linear');
        });

        $('#menuButtonAboutCourse').click(function() {
            body.stop().animate({scrollTop:($('#aboutCourseBlock').offset().top - headerHeight)}, '500', 'linear');
        });
    }

})();
