// 배너순번
let bseq = 0;


$(function () { /// jQB ////////////////////////


    //////////////////////////////////////
    /// 배너 드래그 이동하기 ///////////////
    /// 대상: .pslide 
    let pslide = $(".pslide");
    /// 사용 메서드: draggable() 
    pslide.draggable({
        axis: "x" // x축고정
    }); ///// draggable ///////////



    ////////////////////////////////////////////
    /////// 배너이동 함수 : goSlide /////////////
    ////////////////////////////////////////////
    let goSlide = function (dir) {
        // dir-1 왼쪽이동, dir-0 오른쪽이동
        if (dir) { // 왼쪽이동

            pslide.stop().animate({
                    left: -winW  + "px"
                }, 600, "easeOutQuint",
                function () { // 이동 후 실행

                    //커버숨기기
                    cover.hide(); 

                }); //////// animate //////////
        } ///////////////// if /////////////////


        else { // 오른쪽이동 ////////////////////
            pslide.stop().animate({
                    left: "0px"
                }, 600, "easeOutQuint",
                function () { // 이동 후 실행

                    //커버숨기기
                    cover.hide(); 

                }); //////////// animate ///////

           

        } /////////////// else //////////////////

    }; //////////////// goSlide함수 //////////////



    ///////////////////////////////////////////
    //////// 배너이동 애니메이션 하기 //////////
    ///////////////////////////////////////////

    // 이벤트 대상: .pslide
    // 이벤트 종류: dragstop
    // 사용 메서드: on(이벤트명,함수)
    // 광드래그 막기: .cover요소를 보였다가 이동 애니후 숨기기
    let cover = $(".cover");
    // 화면의 width크기
    let winW = $(window).width();
    //console.log("윈도우width:"+winW);

    pslide.on("dragstop", function () {


        // 광드래그 막기 커버보이기
        cover.show();

        // 알아야할 값! -> 슬라이드의 left값!
        let sLeft = $(this).offset().left;
        //console.log("현재left:"+sLeft);

        // 슬라이드를 왼쪽으로 애니메이션
        if (sLeft > -winW && sLeft < -winW*0.5) {

            // 슬라이드 이동함수 호출!
            goSlide(0);

        } /////////// if //////////////////


        // 슬라이드를 오른쪽으로 애니메이션
        else if (sLeft < 0 && sLeft > -winW) {

            // 슬라이드 이동함수 호출!
            goSlide(1);

        } /////////// else if //////////////////



        // 복귀 애니메이션 
        else if(sLeft < -winW) {

            $(this).stop().animate({
                    left: -winW + "px"
                }, 600, "easeOutQuint",
                function () { /// 애니 후 실행

                    //커버숨기기
                    cover.hide();

                }); //////// animate ///////

        } ///////////// else ////////////////

        // 복귀 애니메이션
        else if(sLeft > 0) {

            $(this).stop().animate({
                    left: "0px"
                }, 600, "easeOutQuint",
                function () { /// 애니 후 실행

                    //커버숨기기
                    cover.hide();

                }); //////// animate ///////

        } ///////////// else ////////////////



    }); //////////// dragstop 함수 ////////////////////
    ///////////////////////////////////////////////////


    let move = $(".pslide");

        //////// 위치이동 한계설정 ////////

        // -> 첫번째 한계값
        let fpt = $(window).width()/3;
        console.log("첫번째한계값:"+fpt);

        // 마지막 한계값
        let lpt = move.width() - (fpt*2);
        console.log("마지막한계값:"+lpt);


        $("#pg3")
        .on("mousedown mouseup mousemove",
        function(){


            // 움직이는 박스의 left위치값
            let mpos = move.offset().left;
            // console.log("현재left:"+mpos);
            // 처음한계값 체크 후 위치 고정하기
            if(mpos > fpt) {
                // 첫번째 한계값에 고정함!
                move.css({
                    left: fpt + "px"
                });/////// css ////////
            } ///////// if ////////////////


            // 마지막 한계값 체크 후 위치 고정하기
            // left값이 마이너스임!
            else if(mpos < -lpt) {
                // 마지막 한계값에 위치 고정하기
                move.css({
                    left: -lpt + "px"
                });/////// css ////////
            } ////////// else if //////////////


        }); ///////// 마우스 + 터치 이벤트 함수 //////////////
        ////////////////////////////////////////////////////


        // 마우스 팔로워 플러그인 적용하기
        // 움직일 대상: body
        // 설정범위는 움직일 대상이 포함된 부모요소

        $(".btna").mousefollower();

        $(".btna").hover(
            function () { // over

                // 흰원 나타나기
                $(".inside", this).css({
                    transform: "scale(1)"
                }); //// css ////////////

                // 글자 나타나기
                $(".btntit", this).css({
                    transform: "translate(-50%, -50%) scale(1)"
                }); /////// css /////////////

            },
            function () { // out

                // 흰원 사라지기
                $(".inside", this).css({
                    transform: "scale(0)"
                }); //// css ////////////

                // 글자 사라지기
                $(".btntit", this).css({
                    transform: "translate(-50%, -50%) scale(0)"
                }); ////////// css ////////

        }); ///// hover ///////////

        ///////////////////////////////////////////
        /////// 배너이동 버튼 클릭시 배너이동하기 ////
        ///////////////////////////////////////////
        // 대상: .btntit
        $(".btntit").click(function () {

            // 1. 어느쪽버튼인지 구분하기
            let btn = $(this).parent().is(".ar1");
            console.log("이동!" + btn);

            // 2. btn이 true이면 왼쪽버튼 아니면 오른쪽버튼
            if (btn) { // 왼쪽버튼(prev버튼-오른쪽이동)
                goSlide(0);
            } //////////// if /////////////
            else { // 오른쪽버튼(next버튼-왼쪽이동)
                goSlide(1);
            } ////////////// else /////////

        }); ////////// click //////////////////////

}); ///////////// jQB ////////////////////////