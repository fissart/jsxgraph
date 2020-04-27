JXG.Options.axis.ticks.majorHeight = 60;
JXG.Options.axis.ticks.insertTicks = false;
JXG.Options.axis.ticks.ticksDistance = 100;
  var board = JXG.JSXGraph.initBoard("hiperbola", {
    originX: 50,
    originY: 250,
    unitX: 50,
    unitY: 50,
    axis: true,
    showFullscreen: true,
    zoom: {factorX: 1.25, factorY: 1.25, wheel: true,needshift: true, eps: 0.1},
    showNavigation: false,
    showCopyright: false,
    defaultAxes: {y: { ticks: {visible: true, majorHeight: 5 }},x: { ticks: { visible: true, majorHeight: 5 }}},
  });

    
  f1 = board.create("point", [2,-1], { name: "\\(F_1\\)" , fillColor:'#306754',label:{autoPosition: true, offset:[0, -20]}});
  f2 = board.create("point", [8,3], { name: "\\(F_2\\)" , label:{autoPosition: true, offset:[-5, 20]}});

  var l1 = board.create('line', [f1, f2],{strokeColor:'green',strokewidth:1});
  var mp1 = board.create('midpoint', [f1, f2], { name: "\\(O\\)", label:{autoPosition: true, offset:[0,-15]}});
  var vec = board.create('arrow', [[0,0], mp1],{straightFirst:true, straightLast:true, strokeWidth:1, dash:2});
  var perp1 = board.create('perpendicular', [l1, mp1] ,{strokeColor:'red',strokewidth:0});


  ew=board.create("hyperbola", [f1, f2, 5.5],{strokeColor:'#000000',strokewidth:2});

  ewg = board.create("glider", [10.21, 1, ew], { name: "\\(P\\)", label:{offset:[10, 10]} });
  var w = board.create("tangent", [ewg],{strokeColor:'#222200',strokewidth:1});
   


  cc1 = board.create('circle', [mp1, f1],{strokeColor:'red',strokewidth:1,dash:1});
//
  var b1 = board.create('intersection', [ew, perp1, 0], { name: "\\(B_1\\)", label:{offset:[-15, -20]} });
  var b2 = board.create('intersection', [ew, perp1, 1], { name: "\\(B_2\\)", label:{offset:[5, -20]} });
//
  var c1 = board.create('intersection', [ew, l1, 0], { name: "\\(V_1\\)", label:{offset:[15, -10]} });
  var c2 = board.create('intersection', [ew, l1, 1], { name: "\\(V_2\\)", label:{offset:[-30, 5]} });

  var perp2 = board.create('perpendicular', [l1, c1] ,{strokeColor:'red',strokewidth:0});
  var perp3 = board.create('perpendicular', [l1, c2] ,{strokeColor:'red',strokewidth:0});

  var r1 = board.create('intersection', [cc1, perp2, 0], { name: "", label:{offset:[-15, -20]} });
  var r2 = board.create('intersection', [cc1, perp2, 1], { name: "", label:{offset:[5, -20]} });

  var s1 = board.create('intersection', [cc1, perp3, 0], { name: "", label:{offset:[-15, -20]} });
  var s2 = board.create('intersection', [cc1, perp3, 1], { name: "", label:{offset:[5, -20]} });

  var asintota1 = board.create('line', [s2, r1],{strokeColor:'green',strokewidth:1,dash:1});  
  var asintota1 = board.create('line', [s1, r2],{strokeColor:'green',strokewidth:1,dash:1});


  var segmento1 = board.create('segment', [s1, s2],{strokeColor:'green',strokewidth:1});
  var segmento2 = board.create('segment', [r1, r2],{strokeColor:'green',strokewidth:1});

  
  var recto1 = board.create('perpendicular', [l1, f1] ,{strokeColor:'red',strokewidth:0});
  var recto2 = board.create('perpendicular', [l1, f2] ,{strokeColor:'red',strokewidth:0});

var recto_s = board.create('segment', [board.create('intersection', [ew, recto1, 0], {name: ""}), board.create('intersection', [ew, recto1, 1], {name: ""})],{strokeColor:'green',strokewidth:1});
var recto_s = board.create('segment', [board.create('intersection', [ew, recto2, 0], {name: ""}), board.create('intersection', [ew, recto2, 1], {name: ""})],{strokeColor:'green',strokewidth:1});

  var s1 = board.create('segment', [b1, b2],{strokeColor:'green',strokewidth:1});
  var s1 = board.create('segment', [b1, f2],{straightFirst:true, straightLast:true, strokeWidth:1, dash:1});
  
  


  c3 = board.create('circle', [mp1, function() { return mp1.Dist(c1)*mp1.Dist(c1)/mp1.Dist(f1); }],{strokeColor:'red',strokewidth:0});

  var d1 = board.create('intersection', [c3, l1, 0], { name: ""});
  var d2 = board.create('intersection', [c3, l1, 1], { name: ""});

  var perp2 = board.create('perpendicular', [l1, d1],{strokeColor:'#256552',strokewidth:1,name:'\\(\\mathcal{L}_1\\)', withLabel: true, label:{offset:[-30, 5],position:"lft"}});
  var perp3 = board.create('perpendicular', [l1, d2],{strokeColor:'#256552',strokewidth:1,name:'\\(\\mathcal{L}_1\\)', withLabel: true, label:{offset:[10, 10],position:"lft"}});

  
  var pol2 = board.create('polygon', [f1, ewg, f2],{hasInnerPoints: true});
  var t = board.create('text', [11, 0.2, function() { return pol2.Perimeter().toFixed(3); }]);