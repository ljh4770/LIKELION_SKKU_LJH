/*
 - 이벤트(event)
    폼 이벤트
    - 제출, 초기화
    마우스 이벤트
    - 클릭, 더블클릭, 마우스이동
    키보드 이벤트
    - keydown, keypress(문자열만 눌렀을 때), keyup
    
    on + 이벤트 타입
*/

var el = document.getElementById('aa');

var clickHandler = function(){
    alert('Clicked!');
};

el.addEventListener('click', clickHandler);