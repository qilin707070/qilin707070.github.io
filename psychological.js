function playerName(){
  var name = prompt("what's your name?");
  alert("Hello," + name + ",welcome to this test !");
}
playerName()

function processForm() {
        var sum = 0;
        hc = new Array(15);

        if (document.see.c1[0].checked == 1) sum += 0;
        if (document.see.c1[1].checked == 1) sum += 1;
        if (document.see.c1[2].checked == 1) sum += 2;
        if (document.see.c1[3].checked == 1) sum += 3;

        if (document.see.c2[0].checked == 1) sum += 0;
        if (document.see.c2[1].checked == 1) sum += 1;
        if (document.see.c2[2].checked == 1) sum += 2;
        if (document.see.c2[3].checked == 1) sum += 3;

        if (document.see.c3[0].checked == 1) sum += 0;
        if (document.see.c3[1].checked == 1) sum += 1;
        if (document.see.c3[2].checked == 1) sum += 2;
        if (document.see.c3[3].checked == 1) sum += 3;

        if (document.see.c4[0].checked == 1) sum += 0;
        if (document.see.c4[1].checked == 1) sum += 1;
        if (document.see.c4[2].checked == 1) sum += 2;
        if (document.see.c4[3].checked == 1) sum += 3;

        if (document.see.c5[0].checked == 1) sum += 0;
        if (document.see.c5[1].checked == 1) sum += 1;
        if (document.see.c5[2].checked == 1) sum += 2;
        if (document.see.c5[3].checked == 1) sum += 3;

        if (document.see.c6[0].checked == 1) sum += 0;
        if (document.see.c6[1].checked == 1) sum += 1;
        if (document.see.c6[2].checked == 1) sum += 2;
        if (document.see.c6[3].checked == 1) sum += 3;

        if (document.see.c7[0].checked == 1) sum += 0;
        if (document.see.c7[1].checked == 1) sum += 1;
        if (document.see.c7[2].checked == 1) sum += 2;
        if (document.see.c7[3].checked == 1) sum += 3;

        if (document.see.c8[0].checked == 1) sum += 0;
        if (document.see.c8[1].checked == 1) sum += 1;
        if (document.see.c8[2].checked == 1) sum += 2;
        if (document.see.c8[3].checked == 1) sum += 3;

        if (document.see.c9[0].checked == 1) sum += 0;
        if (document.see.c9[1].checked == 1) sum += 1;
        if (document.see.c9[2].checked == 1) sum += 2;
        if (document.see.c9[3].checked == 1) sum += 3;

        if (document.see.c10[0].checked == 1) sum += 0;
        if (document.see.c10[1].checked == 1) sum += 1;
        if (document.see.c10[2].checked == 1) sum += 2;
        if (document.see.c10[3].checked == 1) sum += 3;

        if (document.see.c11[0].checked == 1) sum += 0;
        if (document.see.c11[1].checked == 1) sum += 1;
        if (document.see.c11[2].checked == 1) sum += 2;
        if (document.see.c11[3].checked == 1) sum += 3;

        if (document.see.c12[0].checked == 1) sum += 0;
        if (document.see.c12[1].checked == 1) sum += 1;
        if (document.see.c12[2].checked == 1) sum += 2;
        if (document.see.c12[3].checked == 1) sum += 3;

        if (document.see.c13[0].checked == 1) sum += 0;
        if (document.see.c13[1].checked == 1) sum += 1;
        if (document.see.c13[2].checked == 1) sum += 2;
        if (document.see.c13[3].checked == 1) sum += 3;

        if (document.see.c14[0].checked == 1) sum += 0;
        if (document.see.c14[1].checked == 1) sum += 1;
        if (document.see.c14[2].checked == 1) sum += 2;
        if (document.see.c14[3].checked == 1) sum += 3;

        if (document.see.c15[0].checked == 1) sum += 0;
        if (document.see.c15[1].checked == 1) sum += 1;
        if (document.see.c15[2].checked == 1) sum += 2;
        if (document.see.c15[3].checked == 1) sum += 3;


        if (sum <= 4) document.see.answer.value = "您的得分为"+sum+"分\n您精神健康，没有抑郁";
        if (sum <= 10 && sum >= 5) document.see.answer.value = "您的得分为"+sum+"分\n您偶尔有抑郁情绪";
        if (sum <= 20 && sum >= 11) document.see.answer.value = "您的得分为"+sum+"分\n您有轻度抑郁症";
        if (sum <= 30 && sum >= 21) document.see.answer.value = "您的得分为"+sum+"分\n您有中度抑郁症";
        if (sum <= 45 && sum >= 31) document.see.answer.value = "您的得分为"+sum+"分\n您有严重抑郁症并需要立即接受专科医生的治疗";

                }
