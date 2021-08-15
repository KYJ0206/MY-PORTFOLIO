$(function () { /// jQB ////////////////////////


    $("html,body").animate({
        scrollTop: "0px"
    }, 1000, "easeOutQuint");

    // 메뉴 a요소 기본이동 막기!
    $(".gnb a,.indic a").click(function (e) {
        e.preventDefault();
    }); ///////////// click ////////////////



    //// GNB메뉴 클릭시 해당 페이지 위치로 이동 애니메이션
    // 이벤트 대상: .gnb li + .indic li
    // 변경 대상: html,body
    $(".gnb li,.indic li").click(function (e) {

        ////// 광스크롤막기 /////////////
        if (psts) return; //돌아가!
        psts = 1; //불허용상태변경!
        setTimeout(() => {
            psts = 0;
        }, 1200);
        // 1.2초애니시간후 허용상태변경 //

        // 0. 클릭된 li순번 구해오기
        let idx = $(this).index();
        console.log("순번:" + idx);

        // 1. 하위a요소의 href값 읽어오기
        let idnm = $("a", this).attr("href");
        console.log("href값:" + idnm);

        // 2. 아이디값에 해당하위 top값 위치구하기
        // top값을 구해서 스크롤 애니메이션 이동에 사용함!
        let pos = $(idnm).offset().top;
        // offset() 메서드 : 요소의 기본 셋팅 정보를 리턴함
        // - top,left,width,height 등 을 알수 있다!
        console.log("위치값:" + pos);

        // 3. 스크롤 애니메이션으로 페이지 이동하기
        // 세로스크롤 이동속성: scrollTop
        // 참고: 가로스크롤 이동속성: scrollLeft
        // 스크롤 이동대상: html,body
        // -> 범용브라우저에서 사용하는 스크롤대상
        $("html,body").animate({
            scrollTop: pos + "px"
        }, 1200, "easeOutQuint"); //// animate /////

        // 4. 클릭된 a요소의 부모 li에 class="on" 넣기
        $(".gnb li").eq(idx).addClass("on")
            .siblings().removeClass("on");
        $(".indic li").eq(idx).addClass("on")
            .siblings().removeClass("on");
        //다른 형제 li들 class="on" 지움

        // 5. li순번과 pno와 일치하기!
        // 전역변수 페이지번호(pno)와 gnb메뉴 li순번과 같다!
        pno = idx;
        console.log("페이지번호:" + pno);



    pageAction();

    }); ///////////// click ///////////////



// 햄버거버튼 클릭시 class = "on" 토글
$(".ham").click(function () {

    $(this).toggleClass("on");

}); //////////// click ////////////

// 버블링막기
$(".ham ul").click(function (e) {

    e.stopPropagation();

}); //////////// click ////////////


// 스와이프
var swiper = new Swiper(".mySwiper", {
    effect: "flip",
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

$(".pjbx").on("dragstop", function (e) {
    e.stopPropagation();
    console.log("드래그이벤트");
}); //////// drag //////////////


// 폼메일
function chkMailFrm() {

    var f = document.formmail;

    if (!f.title.value) {

        alert("제목을 입력해주세요");

        f.title.focus();

        return false;

    }

    if (!f.senduser.value) {

        alert("이름을 입력해주세요");

        f.senduser.focus();

        return false;

    }

    if (!f.phone.value) {

        alert("전화번호을 입력해주세요");

        f.phone.focus();

        return false;

    }

    if (!f.email.value) {

        alert("이메일을 입력해주세요");

        f.email.focus();

        return false;

    }

}

}); ///////////// jQB ////////////////////////