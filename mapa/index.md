---
layout: page
title: Mapa
mapycz_api: true
---
<div id="mapa" style="width:1200px; height:800px;"></div>
<script type="text/javascript">
  var center = SMap.Coords.fromWGS84(14.44, 50.11);
  var m = new SMap(JAK.gel("mapa"), center, 13);
  var l = new SMap.Layer.Marker();

  m.addDefaultLayer(SMap.DEF_BASE).enable();
  m.addDefaultControls();

  var data = [
    { title: "Hřbitov chovanců Ústavu pro choromyslné", coord: '50.1385828N, 14.4036044E' },
    { title: "Zahrádky Šutka", coord: '50.1225989N, 14.4379869E' },
    { title: "Povltavská promenáda", coord: '50.1136289N, 14.4556669E' },
    { title: "Rohanský strov", coord: '50.0991069N, 14.4626572E' },
    { title: "Cykloobousměrky v Karlíně", coord: '50.0929547N, 14.4431608E' },
    { title: "Rohanský strov", coord: '50.0991069N, 14.4626572E' },
    { title: "Zastávka U Kříže", coord: '50.1114378N, 14.4732719E' },
    { title: "Kaufland Bohnice", coord: '50.1256183N, 14.4186517E' },
    { title: "Park Pod Korábem", coord: '50.1124911N, 14.4704947E' },
    { title: "Linka 140", coord: '50.1125603N, 14.4797450E' },
    { title: "Koupaliště Stírka", coord: '50.1225233N, 14.4584728E' },
    { title: "Tramvaje do Bohnic", coord: '50.1256981N, 14.4438561E' },
    { title: "Tramvaj do Zdib", coord: '50.1332067N, 14.4530314E' },
    { title: "Ulice v Holešovičkách", coord: '50.1177239N, 14.4538058E' },
    { title: "Lávka Holka", coord: '50.0966186N, 14.4452133E' },
    { title: "Skejtpark Bohnice", coord: '50.1268381N, 14.4287650E' },
    { title: "Libeňský most", coord: '50.1033203N, 14.4620894E' },
    { title: "Rohanský most", coord: '50.0983136N, 14.4515919E' },
    { title: "Lanovka Bohnice-Podbaba", coord: '50.1255847N, 14.4155831E' },
    { title: "Nemocnice Bulovka", coord: '50.1157772N, 14.4625083E' },
    { title: "Palmovka", coord: '50.1044461N, 14.4756108E' },
    { title: "Nová Palmovka", coord: '50.1012167N, 14.4715992E' },
    { title: "Florenc", coord: '50.0909167N, 14.4389442E' },
  ];
  var c = []
  var layer = new SMap.Layer.Marker();
  for (const d in data) {
    var md = data[d]
    var card = new SMap.Card();
    card.getHeader().innerHTML = '<strong>' + md['title']+ '</strong>';
    card.getBody().innerHTML = 'Ahoj, já jsem <em>obsah vizitky</em>';

    var coords = SMap.Coords.fromWGS84(md['coord']);
    c.push(coords)
    var marker = new SMap.Marker(coords);
    marker.decorate(SMap.Marker.Feature.Card, card);
    layer.addMarker(marker);
  }
  var center = m.computeCenterZoom(c);
  m.addLayer(layer).enable();
</script>
