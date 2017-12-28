<template>
  <div id="container" >
    <div id="main2"></div>
   <!-- <div class="toolBar"></div>-->
    <div id="main"></div>
    <div id="main5"></div>
    <div id="main4"></div>
    <div id="main6"></div>
    <div id="main7"></div>
    <div id="main8"></div>
    <div id="main9"></div>
  </div>
</template>

<script>


  import Kgv from 'kgv';
  export default {
    data(){
      return{
         nodes : [
          { "name": "李明学"   , "type" : "1" },
          { "name": "一种基于人脸识别的系统设计与实现（成果）"   , "type" : "2" },
          { "name": ""   , "type" : "2" },
          { "name": ""   , "type" : "2" },
          { "name": ""   , "type" : "2" },
          { "name": "一种基于人脸识别的系统设计与实现（专利）"   , "type" : "3" },
          { "name": ""   , "type" : "3" },
          { "name": ""   , "type" : "3" },
          { "name": ""   , "type" : "3" },
          { "name": "北京邮电大学"   , "type" : "4" },
          { "name": ""   , "type" : "4" },
          { "name": ""   , "type" : "4" },
          { "name": "图像识别"   , "type" : "5" },
          { "name": ""   , "type" : "5" },
          { "name": ""   , "type" : "5" },
        ],

       edges : [
        { "source": 1 , "target": 0 , "relation":"" },
        { "source": 2 , "target": 0 , "relation":"" },
        { "source": 3 , "target": 0 , "relation":"" },
        { "source": 4 , "target": 0 , "relation":"" },
        { "source": 5 , "target": 0 , "relation":"" },
        { "source": 6 , "target": 0 , "relation":"" },
        { "source": 7 , "target": 0 , "relation":"" },
        { "source": 8 , "target": 0 , "relation":"" },
        { "source": 9 , "target": 0 , "relation":"" },
        { "source": 10 , "target": 0 , "relation":"" },
        { "source": 11 , "target": 0 , "relation":"" },
        { "source": 12 , "target": 0 , "relation":"" },
        { "source": 13 , "target": 0 , "relation":"" },
        { "source": 14 , "target": 0 , "relation":"" }
      ]
      }
    },
    mounted(){
      var colors = [
        {color:"#7C5053",label:"专家"},
        {color:"#6B1901",label:"成果"},
        {color:"#B42A01",label:"专利"},
        {color:"#B45A2D",label:"机构"},
        {color:"#D9B318",label:"技术链"}
      ];
      var title = "力导向图";
      this.$force(title, this.nodes,this.edges, 'main2');

      var json = [
        {
          "name": "flare",
          "children": [
            {
              "name": "analytics",
              "children": [
                {
                  "name": "cluster",
                  "children": [
                    {"name": "AgglomerativeCluster", "value": 3938},
                    {"name": "CommunityStructure", "value": 3812},
                    {"name": "HierarchicalCluster", "value": 6714},
                    {"name": "MergeEdge", "value": 743}
                  ]
                },
                {
                  "name": "graph",
                  "children": [
                    {"name": "BetweennessCentrality", "value": 3534},
                    {"name": "LinkDistance", "value": 5731},
                    {"name": "MaxFlowMinCut", "value": 7840},
                    {"name": "ShortestPaths", "value": 5914},
                    {"name": "SpanningTree", "value": 3416}
                  ]
                },
                {
                  "name": "optimization",
                  "children": [
                    {"name": "AspectRatioBanker", "value": 7074}
                  ]
                }
              ]
            },
            {
              "name": "animate",
              "children": [
                {"name": "Easing", "value": 17010},
                {"name": "FunctionSequence", "value": 5842},
                {
                  "name": "interpolate",
                  "children": [
                    {"name": "ArrayInterpolator", "value": 1983},
                    {"name": "ColorInterpolator", "value": 2047},
                    {"name": "DateInterpolator", "value": 1375},
                    {"name": "Interpolator", "value": 8746},
                    {"name": "MatrixInterpolator", "value": 2202},
                    {"name": "NumberInterpolator", "value": 1382},
                    {"name": "ObjectInterpolator", "value": 1629},
                    {"name": "PointInterpolator", "value": 1675},
                    {"name": "RectangleInterpolator", "value": 2042}
                  ]
                },
                {"name": "ISchedulable", "value": 1041},
                {"name": "Parallel", "value": 5176},
                {"name": "Pause", "value": 449},
                {"name": "Scheduler", "value": 5593},
                {"name": "Sequence", "value": 5534},
                {"name": "Transition", "value": 9201},
                {"name": "Transitioner", "value": 19975},
                {"name": "TransitionEvent", "value": 1116},
                {"name": "Tween", "value": 6006}
              ]
            },
            {
              "name": "data",
              "children": [
                {
                  "name": "converters",
                  "children": [
                    {"name": "Converters", "value": 721},
                    {"name": "DelimitedTextConverter", "value": 4294},
                    {"name": "GraphMLConverter", "value": 9800},
                    {"name": "IDataConverter", "value": 1314},
                    {"name": "JSONConverter", "value": 2220}
                  ]
                },
                {"name": "DataField", "value": 1759},
                {"name": "DataSchema", "value": 2165},
                {"name": "DataSet", "value": 586},
                {"name": "DataSource", "value": 3331},
                {"name": "DataTable", "value": 772},
                {"name": "DataUtil", "value": 3322}
              ]
            },
            {
              "name": "display",
              "children": [
                {"name": "DirtySprite", "value": 8833},
                {"name": "LineSprite", "value": 1732},
                {"name": "RectSprite", "value": 3623},
                {"name": "TextSprite", "value": 10066}
              ]
            },
            {
              "name": "flex",
              "children": [
                {"name": "FlareVis", "value": 4116}
              ]
            },
            {
              "name": "physics",
              "children": [
                {"name": "DragForce", "value": 1082},
                {"name": "GravityForce", "value": 1336},
                {"name": "IForce", "value": 319},
                {"name": "NBodyForce", "value": 10498},
                {"name": "Particle", "value": 2822},
                {"name": "Simulation", "value": 9983},
                {"name": "Spring", "value": 2213},
                {"name": "SpringForce", "value": 1681}
              ]
            },
            {
              "name": "query",
              "children": [
                {"name": "AggregateExpression", "value": 1616},
                {"name": "And", "value": 1027},
                {"name": "Arithmetic", "value": 3891},
                {"name": "Average", "value": 891},
                {"name": "BinaryExpression", "value": 2893},
                {"name": "Comparison", "value": 5103},
                {"name": "CompositeExpression", "value": 3677},
                {"name": "Count", "value": 781},
                {"name": "DateUtil", "value": 4141},
                {"name": "Distinct", "value": 933},
                {"name": "Expression", "value": 5130},
                {"name": "ExpressionIterator", "value": 3617},
                {"name": "Fn", "value": 3240},
                {"name": "If", "value": 2732},
                {"name": "IsA", "value": 2039},
                {"name": "Literal", "value": 1214},
                {"name": "Match", "value": 3748},
                {"name": "Maximum", "value": 843},
                {
                  "name": "methods",
                  "children": [
                    {"name": "add", "value": 593},
                    {"name": "and", "value": 330},
                    {"name": "average", "value": 287},
                    {"name": "count", "value": 277},
                    {"name": "distinct", "value": 292},
                    {"name": "div", "value": 595},
                    {"name": "eq", "value": 594},
                    {"name": "fn", "value": 460},
                    {"name": "gt", "value": 603},
                    {"name": "gte", "value": 625},
                    {"name": "iff", "value": 748},
                    {"name": "isa", "value": 461},
                    {"name": "lt", "value": 597},
                    {"name": "lte", "value": 619},
                    {"name": "max", "value": 283},
                    {"name": "min", "value": 283},
                    {"name": "mod", "value": 591},
                    {"name": "mul", "value": 603},
                    {"name": "neq", "value": 599},
                    {"name": "not", "value": 386},
                    {"name": "or", "value": 323},
                    {"name": "orderby", "value": 307},
                    {"name": "range", "value": 772},
                    {"name": "select", "value": 296},
                    {"name": "stddev", "value": 363},
                    {"name": "sub", "value": 600},
                    {"name": "sum", "value": 280},
                    {"name": "update", "value": 307},
                    {"name": "variance", "value": 335},
                    {"name": "where", "value": 299},
                    {"name": "xor", "value": 354},
                    {"name": "-", "value": 264}
                  ]
                },
                {"name": "Minimum", "value": 843},
                {"name": "Not", "value": 1554},
                {"name": "Or", "value": 970},
                {"name": "Query", "value": 13896},
                {"name": "Range", "value": 1594},
                {"name": "StringUtil", "value": 4130},
                {"name": "Sum", "value": 791},
                {"name": "Variable", "value": 1124},
                {"name": "Variance", "value": 1876},
                {"name": "Xor", "value": 1101}
              ]
            },
            {
              "name": "scale",
              "children": [
                {"name": "IScaleMap", "value": 2105},
                {"name": "LinearScale", "value": 1316},
                {"name": "LogScale", "value": 3151},
                {"name": "OrdinalScale", "value": 3770},
                {"name": "QuantileScale", "value": 2435},
                {"name": "QuantitativeScale", "value": 4839},
                {"name": "RootScale", "value": 1756},
                {"name": "Scale", "value": 4268},
                {"name": "ScaleType", "value": 1821},
                {"name": "TimeScale", "value": 5833}
              ]
            },
            {
              "name": "util",
              "children": [
                {"name": "Arrays", "value": 8258},
                {"name": "Colors", "value": 10001},
                {"name": "Dates", "value": 8217},
                {"name": "Displays", "value": 12555},
                {"name": "Filter", "value": 2324},
                {"name": "Geometry", "value": 10993},
                {
                  "name": "heap",
                  "children": [
                    {"name": "FibonacciHeap", "value": 9354},
                    {"name": "HeapNode", "value": 1233}
                  ]
                },
                {"name": "IEvaluable", "value": 335},
                {"name": "IPredicate", "value": 383},
                {"name": "IValueProxy", "value": 874},
                {
                  "name": "math",
                  "children": [
                    {"name": "DenseMatrix", "value": 3165},
                    {"name": "IMatrix", "value": 2815},
                    {"name": "SparseMatrix", "value": 3366}
                  ]
                },
                {"name": "Maths", "value": 17705},
                {"name": "Orientation", "value": 1486},
                {
                  "name": "palette",
                  "children": [
                    {"name": "ColorPalette", "value": 6367},
                    {"name": "Palette", "value": 1229},
                    {"name": "ShapePalette", "value": 2059},
                    {"name": "SizePalette", "value": 2291}
                  ]
                },
                {"name": "Property", "value": 5559},
                {"name": "Shapes", "value": 19118},
                {"name": "Sort", "value": 6887},
                {"name": "Stats", "value": 6557},
                {"name": "Strings", "value": 22026}
              ]
            },
            {
              "name": "vis",
              "children": [
                {
                  "name": "axis",
                  "children": [
                    {"name": "Axes", "value": 1302},
                    {"name": "Axis", "value": 24593},
                    {"name": "AxisGridLine", "value": 652},
                    {"name": "AxisLabel", "value": 636},
                    {"name": "CartesianAxes", "value": 6703}
                  ]
                },
                {
                  "name": "controls",
                  "children": [
                    {"name": "AnchorControl", "value": 2138},
                    {"name": "ClickControl", "value": 3824},
                    {"name": "Control", "value": 1353},
                    {"name": "ControlList", "value": 4665},
                    {"name": "DragControl", "value": 2649},
                    {"name": "ExpandControl", "value": 2832},
                    {"name": "HoverControl", "value": 4896},
                    {"name": "IControl", "value": 763},
                    {"name": "PanZoomControl", "value": 5222},
                    {"name": "SelectionControl", "value": 7862},
                    {"name": "TooltipControl", "value": 8435}
                  ]
                },
                {
                  "name": "data",
                  "children": [
                    {"name": "Data", "value": 20544},
                    {"name": "DataList", "value": 19788},
                    {"name": "DataSprite", "value": 10349},
                    {"name": "EdgeSprite", "value": 3301},
                    {"name": "NodeSprite", "value": 19382},
                    {
                      "name": "render",
                      "children": [
                        {"name": "ArrowType", "value": 698},
                        {"name": "EdgeRenderer", "value": 5569},
                        {"name": "IRenderer", "value": 353},
                        {"name": "ShapeRenderer", "value": 2247}
                      ]
                    },
                    {"name": "ScaleBinding", "value": 11275},
                    {"name": "Tree", "value": 7147},
                    {"name": "TreeBuilder", "value": 9930}
                  ]
                },
                {
                  "name": "events",
                  "children": [
                    {"name": "DataEvent", "value": 2313},
                    {"name": "SelectionEvent", "value": 1880},
                    {"name": "TooltipEvent", "value": 1701},
                    {"name": "VisualizationEvent", "value": 1117}
                  ]
                },
                {
                  "name": "legend",
                  "children": [
                    {"name": "Legend", "value": 20859},
                    {"name": "LegendItem", "value": 4614},
                    {"name": "LegendRange", "value": 10530}
                  ]
                },
                {
                  "name": "operator",
                  "children": [
                    {
                      "name": "distortion",
                      "children": [
                        {"name": "BifocalDistortion", "value": 4461},
                        {"name": "Distortion", "value": 6314},
                        {"name": "FisheyeDistortion", "value": 3444}
                      ]
                    },
                    {
                      "name": "encoder",
                      "children": [
                        {"name": "ColorEncoder", "value": 3179},
                        {"name": "Encoder", "value": 4060},
                        {"name": "PropertyEncoder", "value": 4138},
                        {"name": "ShapeEncoder", "value": 1690},
                        {"name": "SizeEncoder", "value": 1830}
                      ]
                    },
                    {
                      "name": "filter",
                      "children": [
                        {"name": "FisheyeTreeFilter", "value": 5219},
                        {"name": "GraphDistanceFilter", "value": 3165},
                        {"name": "VisibilityFilter", "value": 3509}
                      ]
                    },
                    {"name": "IOperator", "value": 1286},
                    {
                      "name": "label",
                      "children": [
                        {"name": "Labeler", "value": 9956},
                        {"name": "RadialLabeler", "value": 3899},
                        {"name": "StackedAreaLabeler", "value": 3202}
                      ]
                    },
                    {
                      "name": "layout",
                      "children": [
                        {"name": "AxisLayout", "value": 6725},
                        {"name": "BundledEdgeRouter", "value": 3727},
                        {"name": "CircleLayout", "value": 9317},
                        {"name": "CirclePackingLayout", "value": 12003},
                        {"name": "DendrogramLayout", "value": 4853},
                        {"name": "ForceDirectedLayout", "value": 8411},
                        {"name": "IcicleTreeLayout", "value": 4864},
                        {"name": "IndentedTreeLayout", "value": 3174},
                        {"name": "Layout", "value": 7881},
                        {"name": "NodeLinkTreeLayout", "value": 12870},
                        {"name": "PieLayout", "value": 2728},
                        {"name": "RadialTreeLayout", "value": 12348},
                        {"name": "RandomLayout", "value": 870},
                        {"name": "StackedAreaLayout", "value": 9121},
                        {"name": "TreeMapLayout", "value": 9191}
                      ]
                    },
                    {"name": "Operator", "value": 2490},
                    {"name": "OperatorList", "value": 5248},
                    {"name": "OperatorSequence", "value": 4190},
                    {"name": "OperatorSwitch", "value": 2581},
                    {"name": "SortOperator", "value": 2023}
                  ]
                },
                {"name": "Visualization", "value": 16540}
              ]
            }
          ]
        }

      ];
      this.$tree(json, "main","树状图");
      var places = {
        "name": "地点",
        "location":
          [
            {
              "name":"北京",
              "log":"116.3",
              "lat":"39.9",
              "img":"../src/assets/beijing.png"
            },
            {
              "name":"上海",
              "log":"121.4",
              "lat":"31.2",
              "img":"../src/assets/shanghai.png"
            },
            {
              "name":"桂林",
              "log":"110.3",
              "lat":"25.3",
              "img":"../src/assets/guilin.png"
            },
            {
              "name":"乌鲁木齐",
              "log":"87.6",
              "lat":"43.8",
              "img":"../src/assets/wulumuqi.png"
            },
            {
              "name":"西藏",
              "log":"91.2",
              "lat":"29.7",
              "img":"../src/assets/lasa.png"
            }
          ]
      };
      this.$map("main5", places, "地理信息图");
      var data = [
        [11, 11, 15, 13, 12, 13, 10],
        [1, -2, 2, 5, 3, 2, 0]
      ]
      var legend = ["最高温度", "最低温度"];
      var xAxis = ['周一','周二','周三','周四','周五','周六','周日'];
      var yAxis = '{value} °C';

      this.$line("折线图","main4", legend, xAxis, yAxis, data);
      var dataAxis = ['点', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放'];
      var data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
      var yMax = 500;
      var color1 = ["#83bff6", "#188df0", "#188df0"];
      var color2 = ["#2378f7", "#2378f7", "#83bff6"];
      this.$bar("柱状图","main6", dataAxis, data, yMax, color1, color2, "#fff");
      var data= [['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'],[
        {value:335, name:'直接访问'},
        {value:310, name:'邮件营销'},
        {value:234, name:'联盟广告'},
        {value:135, name:'视频广告'},
        {value:1548, name:'搜索引擎'}
      ]];
      this.$pie("饼状图",data, "main7");
      var data = [[0,0,5],[0,1,1],[0,2,0],[0,3,0],[0,4,0],[0,5,0],[0,6,0],[0,7,0],[0,8,0],[0,9,0],[0,10,0],[0,11,2],[0,12,4],[0,13,1],[0,14,1],[0,15,3],[0,16,4],[0,17,6],[0,18,4],[0,19,4],[0,20,3],[0,21,3],[0,22,2],[0,23,5],[1,0,7],[1,1,0],[1,2,0],[1,3,0],[1,4,0],[1,5,0],[1,6,0],[1,7,0],[1,8,0],[1,9,0],[1,10,5],[1,11,2],[1,12,2],[1,13,6],[1,14,9],[1,15,11],[1,16,6],[1,17,7],[1,18,8],[1,19,12],[1,20,5],[1,21,5],[1,22,7],[1,23,2],[2,0,1],[2,1,1],[2,2,0],[2,3,0],[2,4,0],[2,5,0],[2,6,0],[2,7,0],[2,8,0],[2,9,0],[2,10,3],[2,11,2],[2,12,1],[2,13,9],[2,14,8],[2,15,10],[2,16,6],[2,17,5],[2,18,5],[2,19,5],[2,20,7],[2,21,4],[2,22,2],[2,23,4],[3,0,7],[3,1,3],[3,2,0],[3,3,0],[3,4,0],[3,5,0],[3,6,0],[3,7,0],[3,8,1],[3,9,0],[3,10,5],[3,11,4],[3,12,7],[3,13,14],[3,14,13],[3,15,12],[3,16,9],[3,17,5],[3,18,5],[3,19,10],[3,20,6],[3,21,4],[3,22,4],[3,23,1],[4,0,1],[4,1,3],[4,2,0],[4,3,0],[4,4,0],[4,5,1],[4,6,0],[4,7,0],[4,8,0],[4,9,2],[4,10,4],[4,11,4],[4,12,2],[4,13,4],[4,14,4],[4,15,14],[4,16,12],[4,17,1],[4,18,8],[4,19,5],[4,20,3],[4,21,7],[4,22,3],[4,23,0],[5,0,2],[5,1,1],[5,2,0],[5,3,3],[5,4,0],[5,5,0],[5,6,0],[5,7,0],[5,8,2],[5,9,0],[5,10,4],[5,11,1],[5,12,5],[5,13,10],[5,14,5],[5,15,7],[5,16,11],[5,17,6],[5,18,0],[5,19,5],[5,20,3],[5,21,4],[5,22,2],[5,23,0],[6,0,1],[6,1,0],[6,2,0],[6,3,0],[6,4,0],[6,5,0],[6,6,0],[6,7,0],[6,8,0],[6,9,0],[6,10,1],[6,11,0],[6,12,2],[6,13,1],[6,14,3],[6,15,4],[6,16,0],[6,17,0],[6,18,0],[6,19,0],[6,20,1],[6,21,2],[6,22,2],[6,23,6]];

      this.$heatmap("热力图","main8", data);
      var indicator =[
        { name: '销售（sales）', max: 6500},
        { name: '管理（Administration）', max: 16000},
        { name: '信息技术（Information Techology）', max: 30000},
        { name: '客服（Customer Support）', max: 38000},
        { name: '研发（Development）', max: 52000},
        { name: '市场（Marketing）', max: 25000}
      ];
      var legend = ['预算分配（Allocated Budget）', '实际开销（Actual Spending）'];
      var data = [
        {
          value : [4300, 10000, 28000, 35000, 50000, 19000],
          name : '预算分配（Allocated Budget）'
        },
        {
          value : [5000, 14000, 28000, 31000, 42000, 21000],
          name : '实际开销（Actual Spending）'
        }
      ];
      this.$radar("雷达图","main9",indicator, legend, data);

    }
  }
</script>

<style>
  #main4{
    height: 500px;
    width: 500px;
  }
  #main6{
    height: 500px;
    width: 500px;
  }
  #main7, #main8, #main9{
    height: 500px;
    width: 500px;
  }
  .overlay {
    fill: none;
    pointer-events: all;
  }

  .tooltip2 {
    position: absolute;
    border: 1px solid #cccccc;
    padding: 10px;
    border-radius: 5px;
  }

  .tooltip2 .title2 {
    border-bottom: 1px solid #000;
    test-align: center;
    color:#ccc;
  }

  .tooltip2 .desColor {
    width: 10px;
    height: 10px;
    float: left;
    margin: 9px 8px 1px 8px;
  }

  .tooltip2 .desText {
    color: #cccccc;
    display: inline-block;
  }

  .axis {
    fill: none;
    stroke: #ccc;
    /*shape-rendering: crispEdges;*/
  }

  .path {
    fill: none;
    stroke-width: 3;
  }
</style>
