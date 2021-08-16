// 제이쿼리 코드블록 ////////////////////////
$(function () {


    // 팝업창내용 셋팅
    let poptxt = {
      "SEOULLEND":[
        "이름: 서울랜드_PJ", 
        "구분: PC, 반응형", 
        "페이지: 메인/ sns페이지, footer링크 연결작업", 
        "설명: 기존 서울랜드 페이지를 그리드작업하여 최대한 동일한 느낌으로 제작하였습니다."
      ],
      "VOGUE":[
        "이름: 보그_PJ", 
        "구분: PC, 반응형", 
        "페이지: 메인/sub메뉴 페이지", 
        "설명: 기존 보그페이지 를 동일한 느낌으로 서브 메뉴 제작적용 하였습니다."
      ],
      "DISCOVERY":[
        "이름: 디스커버리_PJ", 
        "구분: PC", 
        "페이지: 메인/ 메뉴의남성페이지", 
        "설명: 디스커버리 브랜드 남성페이지 서브 메뉴 적용하여 쇼필몰 처럼 꾸며 적용해 보았습니다."
      ],
      "MYITEM":[
        "이름: MY Item_PJ", 
        "구분: PC", 
        "페이지: 메인/서브메뉴/상단오른쪽 input 메뉴들", 
        "설명: 저만의 아이템을 서브페이지와 함께 서버작업해보았습니다."
      ],
      "CGV":[
        "이름: CGV_PJ", 
        "구분: PC", 
        "페이지: 메인/서브메뉴/상단오른쪽 input 메뉴들", 
        "설명: CGV 영화관을 모티브로 영화 상영관 처럼꾸며 보았습니다" 
      ]
    };

    let popurl = {
      "CGV":"../001.CGV_PJ/003.site/index.html",
      "MYITEM":"../005.MyItem_PJ/02.Asset/index.html",
      "DISCOVERY":"../004.DiscoveryPJ/002.구현소스/index.html",
      "VOGUE":"../002.VOGUE_PJ/002.site/index.html",
      "SEOULLEND":"../003.SeoulLand_PJ/asset/index.html"
    };

    ///// 팝업창 띄우기 /////////
    // 대상: .gong li:first-child
    $(".swiper-slide img")
      .click(function () {

        //순번
        let idx = $(this).index();
        // 호출확인
        console.log("팝업띄워!" + idx);

        // 팝업 띄우기
        // 대상: .pop, .popbg
        $(".pop,.popbg").show();
        // show()는 display를 보이게하는 메서드

        let isrc = $(this).attr("src");
        console.log(isrc);

        $(".pop img").attr("src", isrc);

        // 클릭된 이미지의 alt
        let ialt = $(this).attr("alt");

        // 열린팝업창의 텍스트설명
        let nowpop = poptxt[ialt];
        console.log(nowpop);

        $(".pop ul li").each(function(idx,ele){
          //console.log(idx);
          $(ele).text(nowpop[idx]);
        });////////// each //////////////////

        $(".baro").html('<a href="'+popurl[ialt]+'" target="_blank">웹사이트 바로가기</a>');

      }); //////// click ///////////////

    /// 팝업 닫기버튼 클릭시 /////
    // 대상: .bbx button
    $(".bbx button").click(function () {
      // 호출확인
      console.log("팝업닫어!");

      // 팝업 닫기
      // 대상: .pop
      $(".pop,.popbg").hide();
      // hide()는 display:none으로 만들어주는 메서드

    }); //////// click //////////////////



  }); /////// jQB ///////////////////////////
  ///////////////////////////////////////////