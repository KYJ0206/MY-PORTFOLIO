/// 보그 코리아 링크 시스템 JS - linksys.js ///

$(function(){ //////// jQB ///////////////////////

    // 로고 클릭시 메인 페이지로 이동하기
    $(".logo a").click(function(e){
        
        // 기본이동막기
        e.preventDefault();

        location.href = "index.html";

    });////////// click /////////////

    // GNB 메뉴 링크 연결하기 //
    // 대상: .gnb a + .mognb a -> 모바일까지 한꺼번에!
    $(".gnb a,.mognb a").click(function(e){

        // 기본이동막기
        e.preventDefault();
        
        // 클릭한 a요소의 텍스트 읽어오기
        let mtxt = $(this).text().toLowerCase();
        // toLowerCase() -> 소문자로 모두 변환!
        // 비교) toUpperCase() -> 대문자변환
        
        console.log(mtxt);

        // 페이지 이동하기 ///
        location.href = "sub.html?cat="+mtxt;

    }); ///////// click //////////////


}); ///////////////// jQB ////////////////////////