(function ($) {

  $(document).ready(function () {

    var isResponsiveDevice = window.mobileAndTabletCheck();
    
    //A11Y 2023 MEGA MENU CLICK
    $('.sub-menu-btn').on('click', function () {
      console.log('clickkkkkkkkkkkkkkkkkkkkkk');
      if
        // if you click on the same button close the open menu
        ($(this).parent('li').hasClass('is-active')) {
        $(this).parent('li').removeClass('is-active');
        $(this).attr('aria-expanded', 'false').removeClass('highlight');
      }
      else {
        //close any open submenus
        $('#a11y-2023 .menu-item-has-children').removeClass('is-active');
        $('#a11y-2023 .sub-menu-btn').attr('aria-expanded', 'false');
        //open the specific submenu you are on
        $(this).parent('li').addClass('is-active');
        $(this).attr('aria-expanded', 'true').addClass('highlight');
        // focus on the first link in the submenu
        $('.is-active > .sub-menu > li:first-child > a').focus();
      }
    });



    if ( !isResponsiveDevice ) {

      // to hide opened submenu if clicked (touched) on anything except current opened submenu
      $('body').on('click', function (e) {
        if ( $(e.target).closest('li.is-active').length === 0 ) {
          $('#a11y-2023 > li.is-active').find('.sub-menu-btn').trigger('click');
        }
      });

      //A11Y 2023 MEGA MENU HOVER
      $('.menu-item-has-children').hover(function () {
        if ($(this).hasClass('is-active')) {
          $(this).removeClass('is-active');
          $(this).find('.sub-menu-btn').attr('aria-expanded', 'false');
        }
        else {
          $('#a11y-2023 .menu-item-has-children').removeClass('is-active');
          $(this).addClass('is-active');
          $(this).find('.sub-menu-btn').attr('aria-expanded', 'true');
        }
      });
    }
    


    // close sub-menu when tabbing out from last item
    $('.sub-menu > li:last-child').keydown(function (e) {
      if (e.which == 9 && e.shiftKey) {
        // do nothing if shift is involved
      } else if (e.which == 9) {
        $('#a11y-2023 .menu-item-has-children').removeClass('is-active');
        $('#a11y-2023 .sub-menu-btn').attr('aria-expanded', 'false').removeClass('highlight');
      }
    });

    //ESCAPE KEY CLEARS MENU
    $(document).ready(function () {

      document.onkeyup = function (event) {
        if (event.keyCode === 27) {
          $('#a11y-2023 .menu-item-has-children').removeClass('is-active');
          $('#a11y-2023 .sub-menu-btn').attr('aria-expanded', 'false').removeClass('highlight');
        }
      };
      
    });

    //ARROW KEYS WORK TO NAVIGATE SITE

    
  });

})(jQuery)