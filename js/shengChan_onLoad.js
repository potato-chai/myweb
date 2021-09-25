$(document).ready(function () {

    function getCurrentDate(date) {

        var s= date.getFullYear()+"-"+(date.getMonth() + 1)+"-"+date.getDate();
        return s.split("-")[0]+"年"+s.split("-")[1]+"月"+s.split("-")[2]+"日";

    }


    function getCurrentDate2(date) {

        var s= date.getFullYear()+"-"+(date.getMonth() + 1)+"-"+date.getDate();
        return s.split("-")[0]+"年"+s.split("-")[1]+"月";

    }
    function getCurrentDate3(date) {

        var s= date.getFullYear()+"-"+(date.getMonth() + 1)+"-"+date.getDate();
        return s.split("-")[1]+"月"+s.split("-")[2]+"日";

    }
    var nowDate=window.nowDate;
    // console.log(nowDate+"iiii");
    window.riQi2=getCurrentDate2(new Date(nowDate));
    window.riQi3=getCurrentDate(new Date(nowDate));
    window.riQis=[];
    var today=new Date(nowDate);
    $("#currentDate").attr("value",today.getFullYear()+"-"+(today.getMonth() + 1)+"-"+today.getDate());

    window.riQis.push(getCurrentDate3(new Date(today.setDate(today.getDate()-4))));
    window.riQis.push(getCurrentDate3(new Date(today.setDate(today.getDate()+1))));
    window.riQis.push(getCurrentDate3(new Date(today.setDate(today.getDate()+1))));
    window.riQis.push(getCurrentDate3(new Date(today.setDate(today.getDate()+1))));
    window.riQis.push(getCurrentDate3(new Date(today.setDate(today.getDate()+1))));
    /* $(".selectpicker").attr("data-style", "btn-primary");
     $(".selectpicker").attr("data-actions-box", "true");
     $(".selectpicker").attr("data-width", "auto");
     $(".selectpicker").attr("data-select-all-text", "全选");
     $(".selectpicker").attr("data-deselect-all-text", "全不选");
     $(".selectpicker").attr("data-live-search", "true");
     $(".selectpicker").attr("data-none-results-text", "没有结果与{0}匹配");
     $(".selectpicker").attr("data-size", "10");
     $('.selectpicker').selectpicker('render');
     $(".selectpicker").selectpicker('refresh');*/
    $(".queryButton").addClass("btn btn-primary");
    $(".hideButton").addClass("btn btn-primary");
    $("#tablesAndEcharts2").hide();
    $("form").attr("role", "form");
    $("#queryResult").addClass("baseFont");
    $("#queryResult2").addClass("baseFont");
    $("#queryResult3").addClass("baseFont");
});
$(function () {
    window.redirect = '';
    $("#echarts").css("width", screen.width / 4);
    $("#echarts2").css("width", screen.width / 4);
    $("#queryResult").hide();
    $("#queryResult2").hide();
    $("#queryResult3").hide();
    $("#echarts").hide();
    $("#echarts2").hide();
    $(".hideButton").on("click", function () {
        $(".upDivs").hide();
        message("点击表格标题恢复显示");
    });

    $(".downDivs").on("dblclick", ".tableName", function () {
        $(".upDivs").show();
    });

    $(".tab").on("mouseover", "tr", function () {
        $(this).addClass("tableOver");
    });
    $(".tab").on("mouseout", "tr", function () {
        $(this).removeClass("tableOver");
    });

});