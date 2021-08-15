// 자동 스크롤 기능 - autoScroll_pageAction.js

///// 전역변수구역 ///////////////////
// 현재 페이지 번호
let pno = 0;
// 전체 페이지 개수(상수로 변경불가!)
const totnum = 4;
// 광스크롤막기(0-허용,1-불허용)
let psts = 0;

////////////////////////////////////
// 초기화함수
let init;
// 페이지액션함수
let pageAction;
/////////////////////////////////////

function pageAction2() {
    if (pno === 1) {
        pFn(0, 94);
        pFn(1, 89);
        pFn(2, 79);
        pFn(3, 84);

    } else {
        $(".c1").attr("style", "");
        $(".ptxt").text("");
    }


} /////////// pageAction2 ////////////////





///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////// 데스크탑 ///////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(function () { /// jQB1 ////////////////////////


    $("html,body").animate({
        scrollTop: "0px"
    }, 1000, "easeOutQuint");

    /*//////////////////////////////////////////
        함수명: init(전역변수구역에 선언!)
        기능: 각 페이지액션 대상 요소 초기화
    */ //////////////////////////////////////////
    init = function () {

        // 호출확인
        // console.log("초기화!");

        // HOME
        $(".slidebox1").hide();

    }; ///////////// init함수 ///////////////////
    ////////////////////////////////////////////

    // init함수 최초호출!(함수아래서호출)
    init();

    /*/////////////////////////////////////////////
        함수명: pageAction(전역변수구역에 선언)
        기능: 각 페이지 도착시 요소 등장액션 실행
    */ /////////////////////////////////////////////
    pageAction = function () {

        // 호출확인
        // console.log("액션!");

        init(); // 초기화호출!


        // HOME
        if (pno === 0) {
            $(".slidebox1").fadeIn(1000);
        } ////// if ///////////////  


        // 위로이동 TOP버튼
        if (pno === 0) $(".tbtn").fadeOut(200);
        else $(".tbtn").fadeIn(200);

    }; ////////// pageAction함수 ///////////////////
    ////////////////////////////////////////////////



    // pageAction함수 최초호출!
    pageAction();


    /////////////// 자동스크롤 구현 ////////////////////
    // 사용메서드: on(이벤트명, 함수) 
    $(document).on("mousewheel DOMMouseScroll",
        function (e) { //e-이벤트 전달변수


            ////// 광스크롤막기 /////////////
            if (psts) return; //돌아가!
            psts = 1; //불허용상태변경!
            setTimeout(() => {
                psts = 0;
            }, 1000);
            // 1초애니시간후 허용상태변경 //



            //////////////////////////////
            // 1. 마우스휠 방향 알아내기!///
            //////////////////////////////

            e = window.event || e;

            let delta = e.detail ? e.detail : e.wheelDelta;

            // console.log("휠델타정보:"+delta);

            ///////////////////////////////////////////
            ///// 파이어폭스 일때 델타값 반대로 하기 /////

            // // console.log("브라우저정보:"+navigator.userAgent);
            // // console.log("정보여부:"+
            // (/Firefox/i.test(navigator.userAgent)));

            //// 파이어폭스 브라이우저 이면 델타값 부호를 반대로 한다!!!
            if (/Firefox/i.test(navigator.userAgent)) {
                delta = -delta; // 변수앞에 마이너스는 부호반대!
            } ///////// 파이어폭스여부 if문 /////////////



            //////////////////////////////////////////////
            // 2. 마우스휠 방향에 따라 페이지번호 증감하기!//
            //////////////////////////////////////////////

            // 페이지 액션 함수 호출여부
            let callFn = 1; //1-허용,0-불허용

            if (delta < 0) { // -120 아랫방향 스크롤(다음페이지)
                pno++;
                if (pno === totnum) {
                    pno = totnum - 1;
                    callFn = 0;
                } else {
                    callFn = 1;
                }
                // 마지막페이지에 고정하기!
            } ////// if ///////////
            else { // 120 윗방향 스크롤(이전페이지)
                pno--;
                if (pno === -1) {
                    pno = 0;
                    callFn = 0;
                } else {
                    callFn = 1;
                }
                // 첫페이지에 고정하기!
            } /////// else ////////

            // console.log("페이지번호:" + pno);



            //////////////////////////////////////////////
            // 3. 이동할 페이지(.page)의 위치값 알아내기 ///
            //////////////////////////////////////////////

            // 방법: .page의 순서로 위치를 알아냄!
            let pos = $(".page").eq(pno).offset().top;
            // offset().top 은 현재 선택요소의 top위치값

            // console.log("이동위치:" + pos);



            //////////////////////////////////////////////
            // 4. 실제 이동위치로 스크롤 애니메이션 하기 ////
            //////////////////////////////////////////////

            $("html,body").stop().animate({
                scrollTop: pos + "px"
            }, 1000, "easeOutQuint", pageAction2);
            // 애니메이션 이동후 pageAction함수 호출하기!!!

            if (callFn) pageAction();



            ///////////////////////////////////////////////
            // 5. 페이지번호(pno)에 맞는 GNB 메뉴 변경하기 //
            ///////////////////////////////////////////////
            // 변경대상: .gnb li, .indic li
            $(".gnb li").eq(pno).addClass("on")
                .siblings().removeClass("on");
            $(".indic li").eq(pno).addClass("on")
                .siblings().removeClass("on");
            // 선택된 li 이외의 li형제들 class="on"제거하기



        }); //////////// 자동스크롤 /////////////////////////
    ///////////////////////////////////////////////////


}); //////////////// jQB1 /////////////////////








///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////// 모바일 ////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 자동 스크롤 기능 - touchScroll_mobile.js

$(function () { /// jQB2 ////////////////////////

    /* 이벤트 중복발생 막기! */
    // 대상: #top, .indic
    // 막을 이벤트: touchstart, touchend
    // 원리: 이벤트 버블링 막기!(자식이벤트가 부모로 올라가는 현상!)
    // 사용메서드: e.stopPropagation()
    $("#top,.indic,.swiperbtn,.slidebox1,.slbtn,.clse,.msgbox").on("touchstart touchend", function (e) {
        e.stopPropagation();
    }); /////////// 터치이벤트 버블링 막기 ///////////

    //// 터치방향을 위한 변수 ///
    let tcd1, tcd2;
    // tcd1 - 처음 터치된 Y축 위치값
    // tcd2 - 나중 터치끝날때 Y축 위치값

    //// 1. 터치 시작시 화면 터치위치값 변수에 넣기 ///
    // 대상: document
    // 사용위치속성: screenY (페이지 이동이 Y축 이므로!)
    $(document).on("touchstart", function (e) { // e-이벤트전달변수

        // 모바일 터치 위치값 변수에 할당하기
        tcd1 = e.originalEvent.touches[0].screenY;
        console.log("터치시작:" + tcd1);

    }); /////////// touchstart 이벤트함수 /////////////

    //// 2. 터치 끝날때 화면 터치위치값 변수에 넣기 ///
    // 대상: document
    // 사용위치속성: screenY (페이지 이동이 Y축 이므로!)
    $(document).on("touchend", function (e) { // e-이벤트전달변수

        ////// 광스크롤막기 /////////////
        if (psts) return; //돌아가!
        psts = 1; //불허용상태변경!
        setTimeout(() => {
            psts = 0;
        }, 1000);
        // 1초애니시간후 허용상태변경 //

        // 1. 모바일 터치 위치값 변수에 할당하기
        tcd2 = e.originalEvent.changedTouches[0].screenY;
        //console.log("터치끝:" + tcd2);

        // 2. 방향판별하기(델타변수)
        let delta = tcd1 - tcd2;
        //console.log("차이:" + delta);

        ////////////////////////////////////////////////
        ////// 여기서 부터는 마우스 휠 코드와 동일함!//////

        //////////////////////////////////////////////
        // 3. 스와이프 방향에 따라 페이지번호 증감하기!//
        //////////////////////////////////////////////

        if (delta > 0) { // 양수면 윗방향 스와이프(다음페이지)
            pno++;
            if (pno === totnum) pno = totnum - 1;
            // 마지막페이지에 고정하기!
        } ////// if ///////////
        else { // 음수면 아랫방향 스와이프(이전페이지)
            pno--;
            if (pno === -1) pno = 0;
            // 첫페이지에 고정하기!
        } /////// else ////////

        //console.log("페이지번호:" + pno);

        //////////////////////////////////////////////
        // 4. 이동할 페이지(.page)의 위치값 알아내기 ///
        //////////////////////////////////////////////

        ////////////////////////////////////////////////////
        // 새로운 페이지 위치값 : 윈도우 높이값 * 페이지순번 //
        let pos = $(window).height() * pno;
        ///////////////////////////////////////////////////

        //console.log("이동위치:" + pos);

        //////////////////////////////////////////////
        // 5. 실제 이동위치로 스크롤 애니메이션 하기 ////
        //////////////////////////////////////////////

        $("html,body").stop().animate({
            scrollTop: pos + "px"
        }, 1000, "easeOutQuint", pageAction2);

        pageAction();


        ///////////////////////////////////////////////
        // 6. 페이지번호(pno)에 맞는 GNB 메뉴 변경하기 //
        ///////////////////////////////////////////////
        // 변경대상: .gnb li, .indic li
        $(".gnb li").eq(pno).addClass("on")
            .siblings().removeClass("on");
        $(".indic li").eq(pno).addClass("on")
            .siblings().removeClass("on");
        // 선택된 li 이외의 li형제들 class="on"제거하기


    }); /////////// touchend 이벤트함수 /////////////


}); //////////////// jQB2 /////////////////////