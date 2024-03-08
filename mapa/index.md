# Náhled HTML kódu

Zde je HTML kód s původními informacemi v češtině:

```html
<!DOCTYPE html>
<html lang="cs">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mapa</title>
</head>
<body>

<!-- Obsah mapy -->
<div id="mapa"></div>

<!-- Styly CSS -->
<style type="text/css">
  .card-header { font-weight: bold; } /* Nadpis karty */
  .card-body { margin: 10px 0; } /* Tělo karty */
  .card-footer a { text-decoration: underline; } /* Odkazy v patičce karty */
</style>

<!-- Skript JavaScript -->
<script type="text/javascript">
  var data = {{ site.data.map.posts | jsonify }}; /* Data mapy */
  var střed = SMap.Coords.fromWGS84(14.44, 50.11); /* Střed mapy */
  var mapa = new SMap(JAK.gel("mapa"), střed, 13); /* Vytvoření mapy */
  var vrstvaZnaček = new SMap.Layer.Marker(); /* Vytvoření vrstvy značek */
  mapa.addDefaultLayer(SMap.DEF_BASE).enable(); /* Přidání výchozí vrstvy */
  mapa.addDefaultControls(); /* Přidání výchozích ovládacích prvků */
  var souřadniceZnaček = []; /* Pole pro ukládání souřadnic značek */
  var vrstva = new SMap.Layer.Marker(); /* Vytvoření vrstvy */
  for (const klíč in data) {
    var md = data[klíč];
    var souřadnice = SMap.Coords.fromWGS84(md['coord']);
    souřadniceZnaček.push(souřadnice);
    var značka = new SMap.Marker(souřadnice);
    var karta = new SMap.Card();
    karta.getHeader().innerHTML = md['titulek'];
    karta.getBody().innerHTML = md['text'];
    karta.getFooter().innerHTML = 'Související aktualitní <a href="/aktuality/stitky/' + md['slug'] + '/">' + md['size'] + '</a>';
    značka.decorate(SMap.Marker.Feature.Card, karta);
    vrstva.addMarker(značka);
  }
  var novýStřed = mapa.computeCenterZoom(souřadniceZnaček);
  mapa.addLayer(vrstva).enable();
</script>

</body>
</html>
