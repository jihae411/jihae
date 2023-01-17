$(window).scroll(function() {
  let $w_h = $(window).height();
  let $s_dist = $(window).scrollTop();

  let $sec02_left = $(' .sec02_txt');
  let $sec02_cert = $('.cert');
  let $sec03_tit = $('.work .work_right ');
  let $sec03_titl = $('.work2 .work_left');

  $sec02_left.each(function() {
    let $top = $(this).offset().top;
    let $outer_h = $(this).outerHeight();
    console.log($top);
    if($w_h + $s_dist > $top + $outer_h) {
      $(this).addClass('active');
    }
  })

  $sec02_cert.each(function() {
    let $top = $(this).offset().top;
    let $outer_h = $(this).outerHeight();
    console.log($top);
    if($w_h + $s_dist > $top + $outer_h) {
      $(this).addClass('active');
    }
  })
  $sec03_tit.each(function() {
    let $top = $(this).offset().top;
    let $outer_h = $(this).outerHeight();
    console.log($top);
    if($w_h + $s_dist > $top + $outer_h) {
      $(this).addClass('active');
    }
  })
  $sec03_titl.each(function() {
    let $top = $(this).offset().top;
    let $outer_h = $(this).outerHeight();
    console.log($top);
    if($w_h + $s_dist > $top + $outer_h) {
      $(this).addClass('active');
    }
  })



});