function changes(selector){
    // ------todo
    var selectedTeacher = selector.value;
    for(let i = 0; i<tbody.rows.rows;i++){
    }
}
function hrefClick(ahref) {
    // alert(ahref);
    switch(ahref){
        case "ahref1":
            location.href="manageApply.html";
            break;
        case "ahref2":
            location.href="teacherManage.html";
            break;
        case "ahref3":
            location.href="schedule.html";
            break;
        case "ahref4":
            location.href="index.html";
            break;
        default:
        location.href="#";
    }
}

var addHtmls = "<option value='' selected disabled hidden>강사</option>";
var teachers = JSON.parse(localStorage.getItem('teacher'));

document.addEventListener("DOMContentLoaded", function(){
    // var dat = {
    //     t0:'마동석',
    //     t1:'권율',
    //     t2:'이순신',
    //     t3:'홍길동'
    // };
    // datas = JSON.stringify(dat);
    // localStorage.setItem('teacher',datas);
    // for(let i = 0; i<Object.keys(teachers).length; i++){
    //     addHtmls = addHtmls + "<option value='"+ teachers["t"+i] + "'>" + teachers["t"+i] + "</option>";
        
    // }
    // document.getElementById("tname").innerHTML = addHtmls;

    // ---------------데이터 호출및 프린트
    var leng = Object.keys(localStorage);
    var addhtmls = "<tr>";
    // try{
        // alert(localStorage.getItem("__apply__13"));
        for(var idx in leng) {

            var key = leng[idx]

            if(key.indexOf("__apply__")<0){
                continue;
            }
            var i = key.replace("__apply__",'');
            var udata = JSON.parse(localStorage.getItem("__apply__"+i));
            addhtmls = addhtmls + '<td class="idtd" id="idtd"'+i+'">'+udata.id+'</td>';
            addhtmls = addhtmls + '<td class="nametd" id="nametd"'+i+'">'+udata.gender+'</td>';
            addhtmls = addhtmls + '<td class="addresstd" id="addresstd"'+i+'">'+udata.member.address+'</td>';
            addhtmls = addhtmls + '<td class="phonetd" id="phonetd"'+i+'">'+udata.member.phone+'</td>';
            addhtmls = addhtmls + '<td class="timetd" id="timetd"'+i+'">'+udata.time+'</td>';
            addhtmls = addhtmls + '<td class="teachertd" id="teachertd"'+i+'">'+udata.name+'</td>';
            addhtmls = addhtmls + '<td class="ACKtd"><input type="checkbox" class="ACKCheckbox" id="ackCheckbox"'+i+'" name="ackCheckbox" value="ack"></td>';
            addhtmls = addhtmls + '</tr>';
            document.getElementById("rows").innerHTML = addhtmls;
        }
        // for(let i = 0; i<leng; i++){
        //     if(localStorage.getItem("__apply__"+i)===null){
        //         continue;
        //     }
        //     console
        //     var udata = JSON.parse(localStorage.getItem("__apply__"+i));
        //     addhtmls = addhtmls + '<td class="idtd" id="idtd"'+i+'">'+udata.id+'</td>';
        //     addhtmls = addhtmls + '<td class="nametd" id="nametd"'+i+'">'+udata.gender+'</td>';
        //     addhtmls = addhtmls + '<td class="addresstd" id="addresstd"'+i+'">'+udata.member.address+'</td>';
        //     addhtmls = addhtmls + '<td class="phonetd" id="phonetd"'+i+'">'+udata.phone+'</td>';
        //     addhtmls = addhtmls + '<td class="timetd" id="timetd"'+i+'">'+udata.time+'</td>';
        //     addhtmls = addhtmls + '<td class="teachertd" id="teachertd"'+i+'">'+udata.teacher+'</td>';
        //     addhtmls = addhtmls + '<td class="ACKtd"><input type="checkbox" class="ACKCheckbox" id="ackCheckbox"'+i+'" name="ackCheckbox" value="ack"></td>';
        //     addhtmls = addhtmls + '</tr>';
        //     document.getElementById("rows").innerHTML = addhtmls;
        // }


    // }catch(e){

    // }

});

function approveBtn() {

    var checkerCount = document.getElementsByClassName("ACKCheckbox").value;
    console.log(checkerCount);
    // var checker = document.getElementById("acktd1").checked;
    // if(checker === true){
    //     var id = document.getElementById("idtd1").innerText;
    //     var name = document.getElementById("nametd1").innerText;
    //     var address = document.getElementById("addresstd1").innerText;
    //     var phone = document.getElementById("phonetd1").innerText;
    //     var time = document.getElementById("timetd1").innerText;
    //     var teacher = document.getElementById("teachertd1").innerText;
    //     var ack = document.getElementById("acktd1").checked;

    //     var applyInfo = {
    //         id: id,
    //         name: name,
    //         address: address,
    //         phone: phone,
    //         time: time,
    //         teacher: teacher,
    //         ack: ack,
    //     };
    // }


}

// <td class="idtd" id="idtd1">hiatus</td>
// <td class="nametd" id="nametd1">박성호</td>
// <td class="addresstd" id="addresstd1">전남 순천시 석현안길 23-4 드림빌 403호</td>
// <td class="phonetd" id="phonetd1">0100000000</td>
// <td class="timetd" id="timetd1">수요일 10~12시</td>
// <td class="teachertd" id="teachertd1">마동석</td>
// <td class="ACKtd"><input type="checkbox" id="ackCheckbox1" 