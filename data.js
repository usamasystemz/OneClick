//タイマー
let JS00=179;
let JS01=JS00;                                                                                      /*変数を定義*/
function JS08(){                                                                                    /*関数を定義*/
    if(JS01<=0){                                                                                    /*条件分岐*/
        //JS01が0以下の場合
        JS01=JS00;
        window.location.href="https://gakuen.idolmaster-official.jp/";                              /*URL先に遷移する*/
    }
    if(JS01>0){
        //JS01が0を含まない0以上の場合
        let JS02=Math.floor(JS01/86400);                                                            /*小数点を切り捨てて計算する*/
        let JS06=JS01-JS02*86400;
        let JS03=Math.floor(JS06/3600);
        let JS07=JS06-JS03*3600;
        let JS04=Math.floor(JS07/60);
        let JS05=JS07-JS04*60;
        JS02=JS02<10? "0"+JS02:JS02;                                                               /*条件により出力を変更*/
        JS03=JS03<10? "0"+JS03:JS03;
        JS04=JS04<10? "0"+JS04:JS04;
        JS05=JS05<10? "0"+JS05:JS05;
        document.querySelector("#timer00").innerHTML=JS02+"日"+JS03+"時"+JS04+"分"+JS05+"秒";          /*HTMLに出力する*/
        JS01=JS01-1;
    }
}
setInterval(JS08, 1000);                                                                           /*一定時間毎に関数を繰り返す*/
/*
JS00　タイマーの初期値
JS01　タイマーの現在地
JS02　タイマーの現在地から算出された日数
JS03　タイマーの現在地から算出された時数
JS04　タイマーの現在地から算出された分数
JS05　タイマーの現在地から算出された秒数
JS06　タイマーの現在地から算出された日数を除いたタイマーの現在地の数
JS07　タイマーの現在地から算出された日数と時数を除いたタイマーの現在地
JS08　関数を1秒毎に繰り返す
*/
//IPアドレスの取得
$.get("https://ipinfo.io", function(res) {
    document.querySelector("#data00").innerHTML=res.ip;
}, "jsonp");
//現在日時の取得
$("#data01").text(new Date().toLocaleString());
//端末情報の取得
$(document).ready(function() {
    if (typeof platform !== 'undefined') {
        var deviceInfo = platform.name + " " + platform.version + " on " + platform.os.toString();
        $("#data02").text(deviceInfo);
    } 
});