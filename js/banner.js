$(function(){
  
    var $slideWrap = $('#main_vis'), //div
         $slideGroup = $slideWrap.find('.main_list'), //ul
         $slides  = $slideGroup.find('li'), //li
         $slidesNum = $slides.size(), //li의 개수
         $btnWrap = $('#bx-pager'), //페이저 div
         $btn = $btnWrap.find('li'), //div의 li
         $btnNum = $btnWrap.find('a'), //페이저 li의 a(숫자)
         $btnLine = $btnWrap.find('.yellow'), //페이저 li의 span(라인)
         currentIndex = 0, //처음에 첫번째 배너가 오기 때문에 '현재 인덱스' 0
         duration = 1300,
         easing = 'easeOutExpo',
         timer; //배너에 마우스 올렸을 때 멈추도록 설정할 변수 선언
        
    
    /* 슬라이드 이동 함수 */
    function goToSlides(index){ //i(0)인덱스0이 되면 -> top:0px, i(1) -> top:-869px~ 
        $slideGroup.animate({top: -($slides.height())*index+'px'}, duration, easing);
        currentIndex = index; //넘어오는 인덱스값을 현재 인덱스값으로
        $btnNum.removeClass('active'); //페이저a에 .active 빼기
        $btnNum.eq(currentIndex).addClass('active'); //페이저a의 현재인덱스값(클릭한 a)에 .active 넣기
        
        /*
            1. 모든 요소에서 active 빼고, 원하는 요소에 클래스(active) 추가
                $btnWrap.find('a').removeClass('active'); //페이저a에 .active 빼기
                $btnWrap.find('a').eq(currentIndex).addClass('active'); 
                //페이저a의 현재인덱스값(클릭한 a)에 .active 넣기
                
            2. 원하는 요소에만 클래스(active) 추가하고 나머지는 클래스(active) 빼기
                형제 자매 요소 -> 'siblings'
                $('선택자').eq(currentIndex).addClass('active').siblings().removeClass('active');
        */
    }
    
    
    function nextSlides(){
        currentIndex ++;
        if(currentIndex >= $slidesNum){
            currentIndex = 0;
        }
        goToSlides(currentIndex);
    }
    
    
    /* 버튼으로 이동하기 */
    $btn.click(function(e){
      e.preventDefault();
      var idx = $(this).index();
      goToSlides(idx);
        
      $btnLine.css({'bottom':$btnNum.position().bottom});
      //버튼 라인의 하단 위치값을 그것의 텍스트 길이 하단 위치값만큼
      $btnLine.stop().animate({'width':$btnNum.width()}, 100, easing);
      //버튼 라인의 너비값이 그것의 텍스트 너비값만큼 애니메이션
      $btnLine.not($(this).children('.yellow')).stop().animate({'width':0}, 100, easing);
      //클릭한 버튼이 아닌 라인 너비값은 0으로
    });
    
    
    
    $("#btn, #bx-pager").mouseover(function (){ //'자세히보기, f,s,b 버튼'에 마우스 올렸을 때 할 일
            clearInterval(timer); //반복 중지
          });
    $('#btn, #bx-pager').mouseleave(function (){ //'자세히보기, f,s,b 버튼'에 마우스 내렸을 때 할 일
            timer = setInterval(nextSlides, 2000); //반복
            $btnLine.animate({width: '0'}, 600, easing);
          });
    
    
    
    /* 자동 슬라이드 함수 */
    function startTimer(){ //일정 시간마다 할 일 필요 -> setInterval(할일, 시간)
        timer = setInterval(nextSlides, 2000);
    }
    startTimer();
    
    function stopTimer(){
        clearInterval(timer);
    }
    
    
});