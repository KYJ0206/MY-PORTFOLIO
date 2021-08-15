$(function(){//jQB////////////////////////

    ///// 메일 보내기 버튼 ///
    $("#btnsend").click(function(e){
        e.preventDefault();

        console.log("메일")
    
    let nm = $("#nm").val().trim();
    let email = $("#email").val().trim();
    let title = $("#title").val().trim();
    let msg = $("#msg").val().trim();

        if(nm!==""&&email!==""&&title!==""&&msg!=="")
        {
            $.post(
                // 1.전송할 페이지주소
                "../Sendmail.php",
                // 2.전송할 데이터
                {
                    "nm": nm, // 이름
                    "email": email, // 이메일
                    "title": title, // 제목
                    "msg": msg // 내용
                },
                // 3.전송 후 실행코드
                function (res) {
                    if(res==="ok"){
                        alert("메일이 정상적으로 발송되었습니다!");
                    }
                    else{
                        alert(res);
                    }
                } ///////// 전송 후 실행함수 ////////////

            ); ////////////////// post전송 /////////////////

        }
        else{
            alert("모든항목을 다 써야합니다!");
        }

    }); ///////////// click //////////////
    
    
    
    
    
});//jQb//////////////////////////////////