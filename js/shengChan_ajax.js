$(function () {
    var colors = ['#ff2712', '#078011', '#d53a35', '#A738FF', '#9fdabf', 'blue', '007c00',];
    var gaugeColors = ['#078011', '#078011', '#078011', '#078011', '#078011', '#078011','#078011'];
    var valueColors=['black'];
    window.flushTime=600000;
    window.position=['inside','top'];
    window.tableInterval1 = '';
    window.tableInterval2 = '';
    window.tableInterval3 = '';
    window.hide=0;
    window.hideGongXv=['ZX025','ZX023','ZX029','ZX026','ZX074']
    var headArray = [];
    var headArrayChinese = [];
    var jsonArray = [];
    var headArray2 = [];
    var headArrayChinese2 = [];
    var jsonArray2 = [];
    var headArray3 = [];
    var headArrayChinese3 = [];
    var jsonArray3 = [];
    var fieldList = [
        {
            name: 'chanXianName',
            value: '产线名称'
        },
        {
            name: 'chanXianYueGoal',
            value: '产线月目标'
        },
        {
            name: 'chanXianRiGoal',
            value: '日目标'
        },
        {
            name: 'chanLiangNow',
            value: '当前产量'
        },
        {
            name: 'chaZhi',
            value: '差欠量'
        },
        {
            name: 'wanChengLv',
            value: '完成率(%)'
        }
    ];
    var fieldList2 = [
        /*{
            name: 'chanXianCode',
            value: '产线编码'
        },*/
        {
            name: 'chanXianName',
            value: '产线名称'
        },
        {
            name: 'gongXvCode',
            value: '工序'
        },
        {
            name: 'chanXianRiGoal',
            value: '日目标'
        },
        {
            name: 'chanLiangNow',
            value: '当前产量'
        },
        {
            name: 'chanLiangZuo',
            value: '昨日产量'
        },
        {
            name: 'chanLiangJin',
            value: '今日产量'
        },
        {
            name: 'chaZhi',
            value: '差欠量'
        },
        {
            name: 'wanChengLv',
            value: '完成率(%)'
        },
        {
            name: 'state',
            value: '产量状态'
        },

    ];
    var fieldList3 = [
      /*  {
            name: 'chanXianCode',
            value: '产线编码'
        },*/
        {
            name: 'chanXianName',
            value: '产线名称'
        },
        {
            name: 'buMen',
            value: '部门'
        },
        {
            name: 'gongHao',
            value: '员工号'
        },
        {
            name: 'name',
            value: '员工姓名'
        },
        {
            name: 'gangWei',
            value: '岗位'
        },
        {
            name: 'zuoSalary',
            value: '昨日产值'
        },
        {
            name: 'zuoState',
            value: '昨日产值状态'
        },
        {
            name: 'jinSalary',
            value: '今日产值'
        },
        {
            name: 'state',
            value: '今日产值状态'
        }
    ];
    // 把时间转换成固定格式的时间
    Date.prototype.toLocaleString = function () {
        return this.getFullYear() + "年" + (this.getMonth() + 1) + "月" + this.getDate() + "日";
    };

    function changeTimeStyle(time) {
        var commonTime = "";
        if (time) {
            var timeStamp = new Date(time);
            commonTime = timeStamp.toLocaleString();
        }
        return commonTime;
    }

    function parseHead(fieldList) {
        for (var field in fieldList) {
            headArray[headArray.length] = fieldList[field].name;
            headArrayChinese[headArrayChinese.length] = fieldList[field].value;
        }
        /*
                for (var i = 0; i < headArray.length; i++) {
                    console.log(headArray[i]+"headArray666")
                    console.log(headArrayChinese[i]+"headArrayChinese888")
                }*/
    }

    function parseHead2(fieldList2) {
        for (var field in fieldList2) {
            headArray2[headArray2.length] =fieldList2[field].name;
            headArrayChinese2[headArrayChinese2.length] = fieldList2[field].value;
        }
    }

    function parseHead3(fieldList3) {
        for (var field in fieldList3) {
            headArray3[headArray3.length] = fieldList3[field].name;
            headArrayChinese3[headArrayChinese3.length] = fieldList3[field].value;
        }
    }

    function tableIntervalFun1() {
        var table = document.getElementById("table1");//获得表格
        tableLoopBeat(table);//执行表格tableLoopBeat函数，删除第一行，最后增加一行，类似行滚动
    }

    function appendTable() {
        parseHead(fieldList);
        var div = document.getElementById("tables");
        var table = document.createElement("table");
        var tr = document.createElement("tr");
        var thead = document.createElement("thead");
        var tbody = document.createElement("tbody");
        for (var count = 0; count < headArray.length; count++) {
            var th = document.createElement("th");
            th.innerHTML = headArrayChinese[count];
            tr.appendChild(th);
        }
        thead.appendChild(tr);
        table.appendChild(thead);
        for (var tableRowNo = 0; tableRowNo < jsonArray.length; tableRowNo++) {
            var tr = document.createElement("tr");
            for (var headCount = 0; headCount < headArray.length; headCount++) {
                var cell = document.createElement("td");
                cell.innerHTML = jsonArray[tableRowNo][headArray[headCount]];
                tr.appendChild(cell);
            }
            tbody.appendChild(tr)
        }
        table.appendChild(tbody);
        $(table).attr("id", "table1");
        div.appendChild(table);
        headArray = [];//重要
        headArrayChinese = [];
        $("#table1 th").addClass("thStyle1");
        clearInterval(window.tableInterval1);
        window.tableInterval1 = setInterval(tableIntervalFun1, 3000);
    }

    function tableIntervalFun2() {
        var table = document.getElementById("table2");//获得表格
        tableLoopBeat(table);//执行表格tableLoopBeat函数，删除第一行，最后增加一行，类似行滚动
    }

    function appendTable2() {
        parseHead2(fieldList2);
        var div = document.getElementById("tables2");
        var table = document.createElement("table");
        var tr = document.createElement("tr");
        var thead = document.createElement("thead");
        var tbody = document.createElement("tbody");
        for (var count = 0; count < headArray2.length; count++) {
            var th = document.createElement("th");
            th.innerHTML = headArrayChinese2[count];
            tr.appendChild(th);
        }
        thead.appendChild(tr);
        table.appendChild(thead);
        for (var tableRowNo = 0; tableRowNo < jsonArray2.length; tableRowNo++) {
            var tr = document.createElement("tr");
            var hide=0;
            for (var headCount = 0; headCount < headArray2.length; headCount++) {
                var cell = document.createElement("td");
                cell.innerHTML = jsonArray2[tableRowNo][headArray2[headCount]];
                if (headArray2[headCount] == 'state') {
                    if (cell.innerHTML == 1) {
                        cell.innerHTML = "<div class='greenLight'></div>";
                        $(cell).addClass("upState");
                    } else if (cell.innerHTML == 0) {
                        cell.innerHTML = "<div class='redLight'></div>";
                        $(cell).addClass("downState");
                    }
                }

                if (headArray2[headCount] == 'chanXianRiGoal') {
                    var s=cell.innerHTML;
                    if(s=='0'||s==0||s==undefined||s=='undefined'||s==''||s==' '){
                        hide=1;
                    }
                }
                if (headArray3[headCount] == 'zouState') {
                    if (cell.innerHTML == 1) {
                        cell.innerHTML = "<div class='greenLight'></div>";
                        $(cell).addClass("upState");
                    } else if (cell.innerHTML == 0) {
                        cell.innerHTML = "<div class='redLight'></div>";
                        $(cell).addClass("downState");
                    }
                }
                tr.appendChild(cell);
            }
            // console.log(hide+"9999")
            if(hide==0){
                tbody.appendChild(tr)
            }
        }
        table.appendChild(tbody);
        $(table).attr("id", "table2");
        div.appendChild(table);
        headArray2 = [];//重要
        headArrayChinese2 = [];
        $("#table2 th").addClass("thStyle2");
        clearInterval(window.tableInterval2);
        window.tableInterval2 = setInterval(tableIntervalFun2, 5000);
    }

    //先在table的最后增加一行，然后再把第一行中的数据填充到新增加的行中，最后再删除table的第一行
    function tableLoopBeat(table) {
        if(table!=null&&table!=''){
        var row = table.insertRow(table.rows.length);//在table的最后增加一行,table.rows.length是表格的总行数
        for (j = 0; j < table.rows[1].cells.length; j++) {//循环第一行的所有单元格的数据，让其加到最后新加的一行数据中（注意下标是从0开始的）
            var cell = row.insertCell(j);//给新插入的行中添加单元格
            cell.innerHTML = table.rows[1].cells[j].innerHTML;//设置新单元格的内容，这个根据需要，自己设置
            if (cell.innerHTML == "<div class='greenLight'></div>") {
                $(cell).addClass("upState");
            } else if (cell.innerHTML == "<div class='redLight'></div>") {
                $(cell).addClass("downState");
            }
        }
        table.deleteRow(1);//删除table的第一行
        }
    }

    function tableIntervalFun3() {
        var table = document.getElementById("table3");//获得表格
        tableLoopBeat(table);//执行表格tableLoopBeat函数，删除第一行，最后增加一行，类似行滚动
    }

    function appendTable3() {
        parseHead3(fieldList3);
        var div = document.getElementById("tables3");
        var table = document.createElement("table");
        var tr = document.createElement("tr");
        var thead = document.createElement("thead");
        var tbody = document.createElement("tbody");
        for (var count = 0; count < headArray3.length; count++) {
            var th = document.createElement("th");
            th.innerHTML = headArrayChinese3[count];
            tr.appendChild(th);
        }
        thead.appendChild(tr);
        table.appendChild(thead);
        $(table).attr("id", "table3");
        // $("#tables3").css("border-bottom", "solid 1px");
        for (var tableRowNo = 0; tableRowNo < jsonArray3.length; tableRowNo++) {
            var tr = document.createElement("tr");
            for (var headCount = 0; headCount < headArray3.length; headCount++) {
                var cell = document.createElement("td");
                cell.innerHTML = jsonArray3[tableRowNo][headArray3[headCount]];
                if (headArray3[headCount] == 'state') {
                    if (cell.innerHTML == 1) {
                        cell.innerHTML = "<div class='greenLight'></div>";
                        $(cell).addClass("upState");
                    } else if (cell.innerHTML == 0) {
                        cell.innerHTML = "<div class='redLight'></div>";
                        $(cell).addClass("downState");
                    }
                }

                if (headArray3[headCount] == 'zuoState') {
                    if (cell.innerHTML == 1) {
                        cell.innerHTML = "<div class='greenLight'></div>";
                        $(cell).addClass("upState");
                    } else if (cell.innerHTML == 0) {
                        cell.innerHTML = "<div class='redLight'></div>";
                        $(cell).addClass("downState");
                    }
                }
                tr.appendChild(cell);
            }
            tbody.appendChild(tr)
        }
        table.appendChild(tbody);
        div.appendChild(table);
        headArray3 = [];//重要
        headArrayChinese3 = [];
        $("#table3 th").addClass("thStyle3");
        for (var i = 0; i < $(".thStyle3").length; i++) {
            $(".thStyle3").eq(i).css("width",100/$(".thStyle3").length+"%")
        }
        clearInterval(window.tableInterval3);
        window.tableInterval3 = setInterval(tableIntervalFun3, 2000);//每隔2秒执行一次tableLoopBeat函数，相当于table在向上滚动一样
    }
    /*
          *id:id;
          *title:仪表盘名称
          *min:最小值
          *max:最大值
          *val:当前实际值
          *unit:单位符号
          */
    var myChart=echarts.init(document.getElementById("echarts"));
    function gaugeimg( id,title, min, max, val, unit,myChart) {
        option = {
            title: {
                text: title,
                x: 'center',
                y: '90%'
            },
            tooltip: {
                formatter: "完成率:{c}" + unit
            },
            toolbox: {
                show: false,
                feature: {
                    mark: {
                        show: true
                    },
                    restore: {
                        show: true
                    },
                    saveAsImage: {
                        show: true
                    }
                }
            },
            series: [{
                center: ['35%', '52%'],
                number: [0, '50%'],
                /* startAngle: 240, //仪表盘起始角度
                 endAngle: -60, //仪表盘结束角度*/
                startAngle: 225,		// 仪表盘起始角度,默认 225。圆心 正右手侧为0度，正上方为90度，正左手侧为180度。
                endAngle: -45,

                //min: min,
                //max: max,
                name: title,
                type: 'gauge',
                radius: '75%',
                splitNumber: 12, // 分割段数，默认为5
                axisLine: { // 坐标轴线
                    lineStyle: { // 属性lineStyle控制线条样式
                        color: [
                            [0.25, '#ff2712'],
                            [1, '#ff2712']
                        ],
                        width: 8
                    }
                },
                axisTick: { // 坐标轴小标记
                    splitNumber: 10, // 每份split细分多少段
                    length: 12, // 属性length控制线长
                    lineStyle: { // 属性lineStyle控制线条样式
                        color: 'auto'
                    }
                },
                axisLabel: { // 坐标轴文本标签，详见axis.axisLabel
                    textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        color: 'auto'
                    }
                },
                splitLine: { // 分隔线
                    show: true, // 默认显示，属性show控制显示与否
                    length: 22, // 属性length控制线长
                    lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                        color: 'auto'
                    }
                },
                pointer: { //指针粗细
                    width: 5
                },
                title: {
                    textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder'
                    },
                    "show": true,
                    "offsetCenter": [0, "-30%"],
                    "padding": [5, 10],
                    "fontSize": 18,
                    //"color": "auto",
                },
                detail: {
                    formatter: '{value}' + unit,
                    offsetCenter: [0,"80%"],
                    // color: valueColors[0],
                    textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        // color: 'green',
                        fontWeight: 'bolder',
                        "fontSize": 20
                    }
                },

                data: [{
                    //value: val,
                    //name: name
                }]
            }]
        };
        option.series[0].min = min;
        option.series[0].max = max;
        option.series[0].data[0].value = val;
        option.series[0].axisLine.lineStyle.color[0][0] = (val - min) / (max - min);
        option.series[0].axisLine.lineStyle.color[0][1] = detectionData(val, id);
        option.series[0].detail.textStyle.color=valueColors[0];
        myChart.setOption(option);
    }


    /*
     *颜色设置，
     */
    function detectionData(str, id) {
        if (id == 'echarts') {
            valueColors[0]=gaugeColors[0];
            var color = new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                offset: 0,
                color: gaugeColors[0]
            }, {
                offset: 1,
                color: gaugeColors[0]
            }]);
            option.series[0].data[0].name = '';
            if (str >= 20 && str <40) {
                valueColors[0]=gaugeColors[1];
                color = new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                    offset: 0,
                    color: gaugeColors[1]
                }, {
                    offset: 1,
                    color: gaugeColors[1]
                }]);
                option.series[0].data[0].name = '';
            }
            if (str >= 40 && str < 60) {
                valueColors[0]=gaugeColors[2];
                color = new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                    offset: 0,
                    color: gaugeColors[2]
                }, {
                    offset: 1,
                    color:gaugeColors[2]
                }]);
                option.series[0].data[0].name = '';
            }
            if (str >= 60 && str <80) {
                valueColors[0]=gaugeColors[3];
                color = new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                    offset: 0,
                    color: gaugeColors[3]
                }, {
                    offset: 1,
                    color: gaugeColors[3]
                }]);
                option.series[0].data[0].name = '';
            }
            if (str >= 80 && str < 100) {
                valueColors[0]=gaugeColors[4];
                color = new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                    offset: 0,
                    color: gaugeColors[4]
                }, {
                    offset: 1,
                    color: gaugeColors[4]
                }]);
                option.series[0].data[0].name = '';
            } else if (str >= 100) {
                valueColors[0]=gaugeColors[5];
                color = new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                    offset: 0,
                    color: gaugeColors[5]
                }, {
                    offset: 1,
                    color: gaugeColors[5]
                }]);
                option.series[0].data[0].name = '';
            }
            option.series[0].axisLine.lineStyle.width = '11'; //重置仪表盘轴线宽度
            option.series[0].axisTick.length = '16'; //重置仪表盘刻度线长度
            option.series[0].title.color = color.colorStops[1].color; //字体颜色和轴线颜色一致
            option.series[0].title.fontSize = 30; //第一个字体变大


            return color;
        }
    }
  /*  var myChart = echarts.init(document.getElementById('echarts'));
    myChart.clear();
    var option = {
        title: {
            x: 'center',
            textStyle: {
                fontSize: 15
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            data: [],
            type: 'scroll',
            // orient: 'vertical',
            left: '1%',
            top: '1%',
            bottom: '10%'
        },
        toolbox: {
            right: '1%',
            show: false,
            feature: {
                saveAsImage: {show: true}
            }
        },
        series: [
            {
                name: '产量',
                type: 'pie',
                radius: '70%',
                center: ['35%', '52%'],
                data: [],
                itemStyle: {
                    normal: {

                        color:function (params) {
                            return colors[params.dataIndex]
                        },
                        label: {
                            show: true,
                            position: 'inside',
                            formatter: '{b} : {c}\n({d}%)',
                            textStyle: { //数值样式
                                color: 'black',
                                fontSize: 15
                            },
                        },
                        labelLine: {show: true}
                    },
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    myChart.setOption(option);*/
    window.onresize = function () {
        $("#echarts").css("width", "100%");
        alert(666);
        myChart.resize();
        alert(777);
    }

    var myChart2 = echarts.init(document.getElementById('echarts2'));
    myChart2.clear();
    var option2 = {
        title: {
            x:'center',
            textStyle: {
                fontSize: 15
            }
        },
        grid:{
            x:'1%',
            y:'20%',
            x2:'10%',
            y2:'30%',
            containLabel:false,
            height:'auto'
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {
                type : 'shadow'
            },
            /*       formatter:function (p) {
                       console.log(JSON.stringify(p)+"tool");
                      /!* [{"componentType":"series","componentSubType":"bar","componentIndex":0,"seriesType":"bar","seriesIndex":0,"seriesId":"\u0000昨日产量\u00000","seriesName":"昨日产量","name":"昨日                                    ","dataIndex":0,"data":320,"value":320,"color":"#ff2712","dimensionNames":["x","y","__\u0000ecstackresult","__\u0000ecstackedover"],"encode":{"x":[0],"y":[1]},"marker":"<span style=\"display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#ff2712;\"></span>","$vars":["seriesName","name","value"],"axisDim":"x","axisIndex":0,"axisType":"xAxis.category","axisId":"\u0000时间\u00000","axisValue":"昨日                                    ","axisValueLabel":"昨日                                    "},{"componentType":"series","componentSubType":"bar","componentIndex":1,"seriesType":"bar","seriesIndex":1,"seriesId":"\u0000今日产量\u00000","seriesName":"今日产量","name":"昨日                                    ","dataIndex":0,"data":"","value":"","color":"#078011","dimensionNames":["x","y","__\u0000ecstackresult","__\u0000ecstackedover"],"encode":{"x":[0],"y":[1]},"marker":"<span style=\"display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#078011;\"></span>","$vars":["seriesName","name","value"],"axisDim":"x","axisIndex":0,"axisType":"xAxis.category","axisId":"\u0000时间\u00000","axisValue":"昨日                                    ","axisValueLabel":"昨日                                    "},{"componentType":"series","componentSubType":"bar","componentIndex":2,"seriesType":"bar","seriesIndex":2,"seriesId":"\u0000昨日目标量\u00000","seriesName":"昨日目标量","name":"昨日                                    ","dataIndex":0,"data":680,"value":680,"color":"#A738FF","dimensionNames":["x","y","__\u0000ecstackresult","__\u0000ecstackedover"],"encode":{"x":[0],"y":[1]},"marker":"<span style=\"display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#A738FF;\"></span>","$vars":["seriesName","name","value"],"axisDim":"x","axisIndex":0,"axisType":"xAxis.category","axisId":"\u0000时间\u00000","axisValue":"昨日                                    ","axisValueLabel":"昨日                                    "},{"componentType":"series","componentSubType":"bar","componentIndex":3,"seriesType":"bar","seriesIndex":3,"seriesId":"\u0000今日目标量\u00000","seriesName":"今日目标量","name":"昨日                                    ","dataIndex":0,"data":"","value":"","color":"#9fdabf","dimensionNames":["x","y","__\u0000ecstackresult","__\u0000ecstackedover"],"encode":{"x":[0],"y":[1]},"marker":"<span style=\"display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#9fdabf;\"></span>","$vars":["seriesName","name","value"],"axisDim":"x","axisIndex":0,"axisType":"xAxis.category","axisId":"\u0000时间\u00000","axisValue":"昨日                                    ","axisValueLabel":"昨日                                    "}]tool*!/
                   }*/
        },
        legend: {
            data:['日目标','产量'],
            show:true,
            symbolSize:5,
            left: '1%'
        },
        toolbox: {
            right: '1%',
            show : false,
            feature : {
                saveAsImage : {show: true},
                magicType: {show: true, type: ['line', 'bar']},
            }
        },
        xAxis: [
            {
                data : ['1','2','3','4','5'],
                show:true,
                axisLabel: {
                    interval:0,
                    show: true,
                    textStyle: {
                        color: 'black',  //更改坐标轴文字颜色
                        fontSize : 10      //更改坐标轴文字大小
                    }
                },
                splitLine:{
                    show:false,
                },
                axisLine:{       //y轴
                    show:false
                },
                axisTick:{       //y轴刻度线
                    show:false
                },
                /* axisTick: {
                     alignWithLabel: true,
                 }*/
            }
        ],
        dataZoom: [{
            type: 'inside',
            throttle: 50
        }],
        yAxis : [
            {
                show:false,
                type: 'value',
              /*  boundaryGap:true,*/
                name: '产量',
                max:40000,
                min:0,
                /*scale:true,*/
                axisLine:{       //y轴
                    show:true
                },
                splitLine:{
                    show:true,
                },
                axisTick:{       //y轴刻度线
                    show:true
                },
                /*  axisTick: {
                      alignWithLabel: true,

                  }*/
            }
        ],
        series: [
            {
                name:'日目标',
                type:'line',
                /*barWidth:'15%',
                barCategoryGap:'50%',*/
               /* barGap:'20%',*/
                data:['',1000-320],
                stack: '产量1',
                symbol: 'circle',
                symbolSize: 0,
                itemStyle: {
                    normal: {
                        lineStyle:{
                            type:'dotted'  //'dotted'虚线 'solid'实线
                        },
                        color: colors[5],
                        label: {
                            show: true, //开启显示
                            position: 'top',

                            /*   formatter:function (p) {
                                   console.log(JSON.stringify(p)+"ooo");
                                   window.zuoMuBiao=p.data+window.zuoChanLiang;
                                   return window.zuoMuBiao;
                               },*/
                            textStyle: { //数值样式
                                color: 'black',
                                fontSize: 12
                            }
                        }
                    }
                }
            },
            {
                name:'产量',
                type:'bar',
                barWidth:'50%',
                  barCategoryGap:'10%',
                 /* barGap:'20%',*/
                data:['',320],
                // stack: '产量1',
                // symbol: 'triangle',
                symbolSize: 12,
                itemStyle: {
                    normal: {
                        color: colors[1],
                        label: {
                            show: true, //开启显示
                            position:'top',
                          /*  formatter:function (p) {
                                window.zuoChanLiang=p.data;
                            },*/
                            textStyle: { //数值样式
                                color: 'black',
                                fontSize: 12
                            }
                        }
                    }
                }
            },
            {
                name:'产量2',
                type:'line',
                barWidth:'50%',
                barCategoryGap:'10%',
                /* barGap:'20%',*/
                data:['',320],
                // stack: '产量1',
                symbol: 'circle',
                symbolSize: 5,
                itemStyle: {
                    normal: {
                        color: colors[1],
                        label: {
                            show: true, //开启显示
                            position:'top',
                              formatter:function (p) {
                                 return '';
                              },
                            textStyle: { //数值样式
                                color: 'black',
                                fontSize: 12
                            }
                        }
                    }
                }
            },
          /*  {
                name:'ff',
                type:'line',

                markLine : {
                    symbol:"none",               //去掉警戒线最后面的箭头
                    label:{
                        position:"start"          //将警示值放在哪个位置，三个值“start”,"middle","end"  开始  中点 结束
                    },
                },
            }*/
            /*{
                name:'今日产量',
                type:'line',
                barWidth:'15%',
                  barCategoryGap:'50%',
                  barGap:'20%',
                data:['',500],
                // stack: '产量2',
                itemStyle: {
                    normal: {
                        color: colors[1],
                        label: {
                            show: true, //开启显示
                           /!* formatter:function (p) {
                                window.jinChanLiang=p.data;
                            },*!/
                            position: 'top',
                            textStyle: { //数值样式
                                color: 'black',
                                fontSize: 15
                            }
                        }
                    }
                }
            },
*/


           /* {
                name:'日目标量',
                type:'bar',
                barWidth:'25%',
                /!* barCategoryGap:'50%',
                 barGap:'50%',*!/
                // barGap:"80",
                data:['',1234-500],
                // stack: '产量2',
                itemStyle: {
                    normal: {
                        color: colors[3],
                        label: {
                            show: true, //开启显示
                            /!* formatter:function (p) {
                                 console.log(JSON.stringify(p)+"ooo");
                                 window.jinMuBiao=p.data+window.jinChanLiang;
                                 return window.jinMuBiao;
                             },*!/
                            position: 'top',
                            textStyle: { //数值样式
                                color: 'black',
                                fontSize: 15
                            }
                        }
                    }
                }
            }*/
        ]
    };
    function setTrueValue(p) {
        return isNull(p)?0:p;
    }
    function isNull(p) {
        if(p==null||p==''||p==undefined||p==NaN){
            return true;
        }else {
            return false;
        }

    }
    myChart2.setOption(option2);
    window.onresize = function () {
        $("#echarts2").css("width","100%");
        myChart2.resize();
    }
    var names2=[];
    var zuoNums=[];
    var jinNums=[];
    var pieSeriesData = [];
    var chanXianYueGoal = [];
    var zuoChanLiang = [];
    var ChanLiangs = [];
    var jinChanLiang = [];
    var chanXianRiGoalReals = [];
    var chanXianRiGoal1 = [];
    var chanXianRiGoal2 = [];
    var chanLiangNow = [];
    var names = [''];
    var values = [];
    var riQis2 = [];
    var flushInterval = "";
    /* function checkRiQi() {
         var nianYueReg = /(\d{4}-(((0(1|3|5|7|8))|(1(0|2)))(-((0[1-9])|([1-2][0-9])|(3[0-1])))?)|(((0(2|4|6|9))|(11))(-((0[1-9])|([1-2][0-9])|(30)))?)|((02)(-((0[1-9])|(1[0-9])|(2[0-8])))?))|(((([0-9]{2})((0[48])|([2468][048])|([13579][26]))|(((0[48])|([2468][048])|([3579][26]))00)))-02-29)/;
         if ($("input[type='date']").length > 0) {
             riQiTemp = $("input[type='date']").get(0).value;
             if (!nianYueReg.test(riQiTemp)) {
                 swal("请输入正确的日期格式");
                 return false;
             } else {
                 window.riQi2 = riQiTemp.split("-")[0] + "年" + riQiTemp.split("-")[1] + "月";
                 return true;
             }
         } else {
             return true;
         }

     }*/
    function checkChanXian(){
        if($("#selectedValue").get(0).value==''||$("#selectedValue").get(0).value=='0'){
            message('请选择产线');
            return false;
        }else{
            return true;
        }
    }
    $(".queryButton").click(function () {
        if (checkChanXian()) {
            jsonArray = [];
            jsonArray2 = [];
            jsonArray3 = [];
            chanXianYueGoal = [];
            zuoChanLiang = [];
            ChanLiangs = [];
            jinChanLiang = [];
            chanXianRiGoalReals = [];
            chanXianRiGoal1 = [];
            chanXianRiGoal2 = [];
            pieSeriesData = [];
            chanLiangNow = [];
            values = [];
            riQis2 = [];
            names2 = [];
            zuoNums = [];
            jinNums = [];
            $("#tables").html('');
            $("#tables2").html('');
            $("#tables3").html('');
            $("#echarts").hide();
            $("#echarts2").hide();
            clearInterval(flushInterval);
            query();
            flushInterval = setInterval(query, window.flushTime);
        }

    });

    function query() {

        jsonArray = [];
        jsonArray2 = [];
        jsonArray3 = [];
        chanXianYueGoal = [];
        zuoChanLiang = [];
        ChanLiangs = [];
        jinChanLiang = [];
        chanXianRiGoalReals = [];
        chanXianRiGoal1 = [];
        chanXianRiGoal2 = [];
        pieSeriesData = [];
        chanLiangNow = [];
        values = [];
        riQis2 = [];
        names2=[];
        zuoNums=[];
        jinNums=[];
        $("#tables").html('');
        $("#tables2").html('');
        $("#tables3").html('');
        $("#echarts").hide();
        $("#echarts2").hide();
/*        $.post("jiaoJie", $("#queryForm").serialize(), function (data) {
            if (data != null && data != '') {
                jsonArray = data;
                // alert(JSON.stringify(data))
                for(index in jsonArray){
                    names2.push(jsonArray[index].chengBen+'\n'+jsonArray[index].gongXv);
                    zuoNums.push(jsonArray[index].zuoNum);
                    jinNums.push(jsonArray[index].jinNum);
                }
                /!* myChart2.setOption({
                     xAxis: [ {
                       /!*  data : names2,*!/
                     }
                     ],
                     series:  [
                         {
                             data:zuoNums,
                         },
                         {
                             data:jinNums,
                         }
                     ]
                 });*!/
                $("#echarts2").show();
            } else {
                $("#echarts2").hide();
                console.log("没有查到");
            }
        });*/

     /*   $.post("shengChan/shengChanYue", $("#queryForm").serialize(), function (data) {
            if (data != null && data != '') {
                jsonArray = data;
                // console.log(JSON.stringify(jsonArray)+"shengChanYue");
                for (index in jsonArray) {
                 /!*   values.push(jsonArray[index].chanXianYueGoal - jsonArray[index].chanLiangNow);
                    values.push(jsonArray[index].chanLiangNow);*!/
                    values.push(setTrueValue(jsonArray[index].wanChengLv));
                    chanXianRiGoalReals.push(Math.ceil(jsonArray[index].chanXianRiGoal));
                    chanXianRiGoalReals.push(chanXianRiGoalReals[0]);
                    chanXianRiGoalReals.push(chanXianRiGoalReals[0]);
                    chanXianRiGoalReals.push(chanXianRiGoalReals[0]);
                    chanXianRiGoalReals.push(chanXianRiGoalReals[0]);
                  /!*  zuoChanLiang.push('');
                    zuoChanLiang.push(jsonArray[index].zuoChanLiang);*!/
                  if(jsonArray[index].zuoChanLiang_3==null||jsonArray[index].zuoChanLiang_3==''){
                      jsonArray[index].zuoChanLiang_3=0
                  }
                    if(jsonArray[index].zuoChanLiang_2==null||jsonArray[index].zuoChanLiang_2==''){
                        jsonArray[index].zuoChanLiang_2=0
                    }
                    if(jsonArray[index].zuoChanLiang_1==null||jsonArray[index].zuoChanLiang_1==''){
                        jsonArray[index].zuoChanLiang_1=0
                    }
                    if(jsonArray[index].zuoChanLiang==null||jsonArray[index].zuoChanLiang==''){
                        jsonArray[index].zuoChanLiang=0
                    }
                    if(jsonArray[index].jinChanLiang==null||jsonArray[index].jinChanLiang==''){
                        jsonArray[index].jinChanLiang=0
                    }
                    ChanLiangs.push(jsonArray[index].zuoChanLiang_3);/!*jsonArray[index].zuoChanLiang_3*!/
                    ChanLiangs.push(jsonArray[index].zuoChanLiang_2);/!*jsonArray[index].zuoChanLiang_2*!/
                    ChanLiangs.push(jsonArray[index].zuoChanLiang_1);/!*jsonArray[index].zuoChanLiang_1*!/
                    ChanLiangs.push(jsonArray[index].zuoChanLiang);
                    ChanLiangs.push(jsonArray[index].jinChanLiang);
                 /!*   jinChanLiang.push('');
                    jinChanLiang.push(jsonArray[index].jinChanLiang);
                    chanXianRiGoal1.push('');
                    chanXianRiGoal1.push(chanXianRiGoalReals[0]-zuoChanLiang[1]);
                    chanXianRiGoal2.push('');
                    chanXianRiGoal2.push(chanXianRiGoalReals[0]-jinChanLiang[1]);*!/
                  /!*  for (var i = 0; i < ChanLiangs.length; i++) {
                        console.log(ChanLiangs[i]+"ChanLiangs");
                    }*!/
                    if(Math.max(ChanLiangs[0],ChanLiangs[1],ChanLiangs[2],ChanLiangs[3])>=chanXianRiGoalReals[0]){
                        chanXianYueGoal.push( Math.ceil(Math.max(ChanLiangs[0],ChanLiangs[1],ChanLiangs[2],ChanLiangs[3])*1.2));
                    }else {
                        chanXianYueGoal.push(Math.ceil(chanXianRiGoalReals[0]*1.2));
                    }

                }
                $("#queryResult").empty().append("<div class='tableName'>" + window.riQi2 + "成品生产情况表</div>");
                $("#tables").html('');
                appendTable();
                $("#queryResult").show();
                gaugeimg( 'echarts','', 0, 120, values[0], '%',myChart);
          /!*      myChart.setOption({
                    legend: {
                        data: names,
                    },
                    series: [
                        {
                            data: [
                                {
                                    name: names[0],
                                    value: values[0],
                                    color: colors[0],
                                },

                                {
                                    name: names[1],
                                    value: values[1],
                                    color: colors[1],
                                },
                            ],
                        }
                    ]
                });*!/
                myChart2.setOption({
                    /!* legend: {
                         data: names,
                     },*!/
                    xAxis:[{
                        data:window.riQis,
                    }],
                    yAxis:[{
                        max:chanXianYueGoal,
                    }],
                    series: [
                        {
                            data:chanXianRiGoalReals,
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: true, //开启显示
                                        formatter:function (p) {
                                            return '';
                                        },
                                        textStyle: { //数值样式
                                            color: 'black',
                                            fontSize: 15
                                        }
                                    }
                                }
                            }
                        },
                        {
                            data:ChanLiangs,

                        },
                        {
                            data:ChanLiangs,

                        },
                      /!*  {markLine:{
                            data:chanXianRiGoalReals,
                            }}*!/
                     /!*   {
                            data:jinChanLiang,
                        },*!/

                        /!*{
                            data:chanXianRiGoal2,
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: true, //开启显示
                                        formatter:function (p) {
                                            return chanXianRiGoalReals[0];
                                        },
                                        textStyle: { //数值样式
                                            color: 'black',
                                            fontSize: 15
                                        }
                                    }
                                }
                            }
                        }*!/
                    ]
                });
                $("#echarts").show();
                $("#echarts2").show();
            } else {
                $("#echarts").hide();
                $("#echarts2").hide();
                console.log("没有查到");
            }
        });*/

        $.ajax({
            type: "post",
            url: 'shengChan/shengChanYue',
            data: $("#queryForm").serialize(),
            success: function (data) {
                if (data != null && data != '') {
                    jsonArray = data;
                    // console.log(JSON.stringify(jsonArray)+"shengChanYue");
                    for (index in jsonArray) {
                        /*   values.push(jsonArray[index].chanXianYueGoal - jsonArray[index].chanLiangNow);
                           values.push(jsonArray[index].chanLiangNow);*/
                        values.push(setTrueValue(jsonArray[index].wanChengLv));
                        chanXianRiGoalReals.push(Math.ceil(jsonArray[index].chanXianRiGoal));
                        chanXianRiGoalReals.push(chanXianRiGoalReals[0]);
                        chanXianRiGoalReals.push(chanXianRiGoalReals[0]);
                        chanXianRiGoalReals.push(chanXianRiGoalReals[0]);
                        chanXianRiGoalReals.push(chanXianRiGoalReals[0]);
                        /*  zuoChanLiang.push('');
                          zuoChanLiang.push(jsonArray[index].zuoChanLiang);*/
                        if(jsonArray[index].zuoChanLiang_3==null||jsonArray[index].zuoChanLiang_3==''){
                            jsonArray[index].zuoChanLiang_3=0
                        }
                        if(jsonArray[index].zuoChanLiang_2==null||jsonArray[index].zuoChanLiang_2==''){
                            jsonArray[index].zuoChanLiang_2=0
                        }
                        if(jsonArray[index].zuoChanLiang_1==null||jsonArray[index].zuoChanLiang_1==''){
                            jsonArray[index].zuoChanLiang_1=0
                        }
                        if(jsonArray[index].zuoChanLiang==null||jsonArray[index].zuoChanLiang==''){
                            jsonArray[index].zuoChanLiang=0
                        }
                        if(jsonArray[index].jinChanLiang==null||jsonArray[index].jinChanLiang==''){
                            jsonArray[index].jinChanLiang=0
                        }
                        ChanLiangs.push(jsonArray[index].zuoChanLiang_3);/*jsonArray[index].zuoChanLiang_3*/
                        ChanLiangs.push(jsonArray[index].zuoChanLiang_2);/*jsonArray[index].zuoChanLiang_2*/
                        ChanLiangs.push(jsonArray[index].zuoChanLiang_1);/*jsonArray[index].zuoChanLiang_1*/
                        ChanLiangs.push(jsonArray[index].zuoChanLiang);
                        ChanLiangs.push(jsonArray[index].jinChanLiang);
                        /*   jinChanLiang.push('');
                           jinChanLiang.push(jsonArray[index].jinChanLiang);
                           chanXianRiGoal1.push('');
                           chanXianRiGoal1.push(chanXianRiGoalReals[0]-zuoChanLiang[1]);
                           chanXianRiGoal2.push('');
                           chanXianRiGoal2.push(chanXianRiGoalReals[0]-jinChanLiang[1]);*/
                        /*  for (var i = 0; i < ChanLiangs.length; i++) {
                              console.log(ChanLiangs[i]+"ChanLiangs");
                          }*/
                        if(Math.max(ChanLiangs[0],ChanLiangs[1],ChanLiangs[2],ChanLiangs[3])>=chanXianRiGoalReals[0]){
                            chanXianYueGoal.push( Math.ceil(Math.max(ChanLiangs[0],ChanLiangs[1],ChanLiangs[2],ChanLiangs[3])*1.2));
                        }else {
                            chanXianYueGoal.push(Math.ceil(chanXianRiGoalReals[0]*1.2));
                        }

                    }
                    $("#queryResult").empty().append("<div class='tableName'>" + window.riQi2 + "成品生产情况表</div>");
                    $("#tables").html('');
                    appendTable();
                    $("#queryResult").show();
                    gaugeimg( 'echarts','', 0, 120, values[0], '%',myChart);
                    /*      myChart.setOption({
                              legend: {
                                  data: names,
                              },
                              series: [
                                  {
                                      data: [
                                          {
                                              name: names[0],
                                              value: values[0],
                                              color: colors[0],
                                          },

                                          {
                                              name: names[1],
                                              value: values[1],
                                              color: colors[1],
                                          },
                                      ],
                                  }
                              ]
                          });*/
                    myChart2.setOption({
                        /* legend: {
                             data: names,
                         },*/
                        xAxis:[{
                            data:window.riQis,
                        }],
                        yAxis:[{
                            max:chanXianYueGoal,
                        }],
                        series: [
                            {
                                data:chanXianRiGoalReals,
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true, //开启显示
                                            formatter:function (p) {
                                                return '';
                                            },
                                            textStyle: { //数值样式
                                                color: 'black',
                                                fontSize: 15
                                            }
                                        }
                                    }
                                }
                            },
                            {
                                data:ChanLiangs,

                            },
                            {
                                data:ChanLiangs,

                            },
                            /*  {markLine:{
                                  data:chanXianRiGoalReals,
                                  }}*/
                            /*   {
                                   data:jinChanLiang,
                               },*/

                            /*{
                                data:chanXianRiGoal2,
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true, //开启显示
                                            formatter:function (p) {
                                                return chanXianRiGoalReals[0];
                                            },
                                            textStyle: { //数值样式
                                                color: 'black',
                                                fontSize: 15
                                            }
                                        }
                                    }
                                }
                            }*/
                        ]
                    });
                    $("#echarts").show();
                    $("#echarts2").show();
                } else {
                    $("#echarts").hide();
                    $("#echarts2").hide();
                    // autoRedirect(10,"没有查到数据，10秒钟后自动重新连接");
                }
            },

            error:function () {
                autoRedirect(10,"服务器开小差了，10秒钟后自动重新连接");
            }
        });
        $.ajax({
            type: "post",
            url: 'shengChan/shengChanDetail',
            data: $("#queryForm").serialize(),
            success: function (data) {
                if (data != null && data != '') {
                    jsonArray2 = data;
                    console.log(JSON.stringify(jsonArray2)+"jsonArray")
                    for (index in jsonArray2) {
                        riQis2.push(new Date((jsonArray2[index].riQi)).getDate());
                    }
                    $("#queryResult2").empty().append("<div class='tableName'>" + window.riQi3 + "关键工序生产情况表</div>");
                    $("#tables2").html('');
                    appendTable2();
                    $("#queryResult2").show();
                } else {
                    // autoRedirect(10,"没有查到数据，10秒钟后自动重新连接");
                    console.log("没有查到");
                }
            },

            error:function () {
                autoRedirect(10,"服务器开小差了，10秒钟后自动重新连接");
            }
        });

        $.ajax({
            type: "post",
            url: 'shengChan/shengChanYuanGong',
            data: $("#queryForm").serialize(),
            success: function (data) {
                if (data != null && data != '') {
                    jsonArray3 = data;
                    $("#queryResult3").empty().append("<div class='tableName'>" + window.riQi3 + "员工生产情况表</div>");
                    $("#tables3").html('');
                    appendTable3();
                    $("#queryResult3").show();
                } else {
                    autoRedirect(10,"没有查到员工生产情况，10秒钟后自动重新连接");
                    console.log("没有查到");
                }
            },

            error:function () {
                autoRedirect(10,"服务器开小差了，10秒钟后自动重新连接");
            }
        });
     /*   $.post("shengChan/shengChanYuanGong", $("#queryForm").serialize(), function (data) {
            if (data != null && data != '') {
                jsonArray3 = data;
                $("#queryResult3").empty().append("<div class='tableName'>" + window.riQi3 + "员工生产情况表</div>");
                $("#tables3").html('');
                appendTable3();
                $("#queryResult3").show();
            } else {
                console.log("没有查到");
            }
        });*/
    }

});