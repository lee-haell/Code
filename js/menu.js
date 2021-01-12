$(function(){
  
    var $toggleBtn = $('#hamburger-menu'), //햄버거 버튼
         $toggleBar = $toggleBtn.find('span'), //버튼 안의 span
         $familyBtn = $('.fms_site'), //패밀리 div
         $familyGroup = $familyBtn.find('#list'), //div 안의 ul
         $header = $('header'), //헤더
         $nav = $header.find('.pc-wrap'), //pc nav
         $subGroup = $nav.find('.pc-ol'), //ol
         $icon = $('.icon'), //icon
         $navS = $header.find('.tm-wrap'), //tm nav
         $subGroupS = $navS.find('.tm-ol'), //tm ol
         $iconS = $('.tm-icon'), //tm icon
         $headerBg = $('.header-bg'), //헤더 배경
         on_off = false;
    
    open()
    close()
    
    $(window).load(function(){ //이미지 로드 되자마자
      $('.loading-wrap').delay(1000).fadeOut(); //로더 1.5초후에 사라짐
      $headerBg.css({'height':'10px'}); //헤더 배경 높이 조절
    });
    
    
    //메뉴 내려오기
    $nav.mouseenter(function(){
      $headerBg.css('height','80px');
      $subGroup.css('opacity',1);
    });
    $nav.mouseleave(function(){
      $headerBg.css('height','10px');
      $subGroup.css('opacity',0);
    });
    
    
    //메뉴 열릴 때 함수
    function open(){
          $headerBg.css({'height':'280px'});
          $navS.css({'opacity':1});
//          $subGroupS.css({'opacity':1});
          $iconS.css({'opacity':1});
    }
    
    //메뉴 닫힐 때 함수
    function close(){
          $headerBg.css({'height':'20px'});
          $navS.css({'opacity':0});
//          $subGroupS.css({'opacity':0});
          $iconS.css({'opacity':0});
    }
    
     /* 햄버거 버튼 클릭 */
    $toggleBtn.click(function(e){
      e.preventDefault();
      $(this).toggleClass('on');
      on_off = !on_off;
      if(on_off){
          open()
      }else{
          close()
      }
    });
    
    
     /* 패밀리 사이트 애니메이션 */
    $familyBtn.click(function (e) {
        e.preventDefault();
        if($familyGroup.css("opacity") == "0") {
            $familyGroup.css({"opacity":"1"});
        }else{
            $familyGroup.css({"opacity":"0"});
        }
    });
});

    //메뉴의 아이콘 클릭할 때 a링크 막기
    $('.icon > li > a').click(function(e){
        e.preventDefault();
    })
    $('.tm-icon > li > a').click(function(e){
        e.preventDefault();
    });