// 탑스크롤 변환 JS - topscroll.js


// 모바일여부를 체크하는 변수에 코드발급하기!!!
let mob = 0;
let chksz = () => {
    if ($(window).width() <= 500) mob = 1;
    else mob = 0;
    console.log("모바일여부:" + mob);
}; //// chksz함수 /////////////
chksz(); //함수실행 

// 화면의 크기가 변경될때 / 모바일 오리엔테이션변경(방향변경)시
// resize() 메서드 - 화면크기가 변할때 사용
$(window).resize(chksz);

$(function () { //////// jQB //////////////////


    $("html,body").stop().animate({
        scrollTop: "0px"
    }, 1000, "easeOutQuint");


    //// 스크롤 액션 대상 변수 ///////
    // 1.위로가기 버튼
    let tbtn = $(".tbtn");

    // 2.위로가기 버튼 등장액션 상태변수
    let tsts = 0; //0-액션전, 1-액션후

    // 3.상단영역요소
    let tbx = $("#top");

    // 4.GNB박스 위치값
    let gnbpos = $(".gnb").offset().top;
    console.log("GNB위치값:" + gnbpos);

    // 5.상단영역 클래스 적용여부 상태변수
    let gnbsts = 0; //0-액션전, 1-액션후


    //////////////////////////////////////////////////
    //////////////// 스크롤 액션 //////////////////////
    //////////////////////////////////////////////////
    // 이벤트 종류: scroll
    // 이벤트 대상: window (전체스크롤)
    // 사용 메서드: scroll() 메서드
    $(window).scroll(function () {

        /////// 모바일이 아닐때만 실행!!! //////
        if (scTop >= gnbpos && gnbsts === 0 && mob === 0) {

            gnbsts = 1; //한번만실행!
            // console.log("바꿔!");

            // 상단영역에 class넣기
            tbx.addClass("on");

        } /////// if /////////////////////
        else if (scTop < gnbpos && gnbsts === 1 && mob === 0) {

            gnbsts = 0; //한번만실행!
            // console.log("복귀!");

            // 상단영역에 class제거
            tbx.removeClass("on");

        } /////// if /////////////////////


    }); ////////////////// scroll ////////////////////
    //////////////////////////////////////////////////

    //// 탑버튼 클릭시 페이지 상단 이동 애니메이션 하기 ///
    tbtn.click(function (e) {

        e.preventDefault(); // 기본이동막기

        // 상단영역class미리제거 애니메이션을 자연스럽게 상단처리
        tbx.removeClass("on");
        pno = 0;

        // 탑버튼 클릭시 스크롤 애니메이션 //
        $("html,body").stop().animate({
            scrollTop: "0"
        }, 1000, "easeOutCubic");

        pageAction();

        $(".gnb li").eq(pno).addClass("on")
            .siblings().removeClass("on");
            $(".indic li").eq(pno).addClass("on")
            .siblings().removeClass("on");

    }); ////////// click /////////////


}); ///////////////// jQB ///////////////////