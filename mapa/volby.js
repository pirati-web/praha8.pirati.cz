window.createMap = function() {
    var map = new SMap(JAK.gel("m"));
    var gLayer = new SMap.Layer.Geometry();
    var mLayer = new SMap.Layer.Marker();

    map.addDefaultLayer(SMap.DEF_BASE).enable();
    map.addDefaultControls();
    map.addLayer(gLayer);
    map.addLayer(mLayer);

    gLayer.enable();
    mLayer.enable();

    mCoords = []
    for (const [pid, data] of Object.entries(window.precincts)) {
        var card = new SMap.Card();
        card.getHeader().innerHTML = "<strong>Okrsek "+pid+"</strong>";
        card.getBody().innerHTML = `<ul><li><a href="https://www.volby.cz/pls/kv2022/kv1111?xjazyk=CZ&xid=1&xdz=5&xnumnuts=1100&xobec=500208&xokrsek=${pid}&xstat=0&xvyber=1">Výsledky 2022</a></li><li><a href="https://www.volby.cz/pls/kv2018/kv1111?xjazyk=CZ&xid=1&xdz=5&xnumnuts=1100&xobec=500208&xokrsek=${pid}&xstat=0&xvyber=1">Výsledky 2018</a></li>`;
        var mCoord = SMap.Coords.fromJTSK(data.pos.x, data.pos.y);
        var marker = new SMap.Marker(mCoord, pid, { title: `Okrsek: ${pid}` });
        marker.decorate(SMap.Marker.Feature.Card, card);
        mLayer.addMarker(marker);
        mCoords.push(mCoord)

        var points = []
        for (let poly of data.posList) {
            for (let point of poly) {
                points.push(SMap.Coords.fromJTSK(point.x,point.y))
            }
        }
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        var polygon = new SMap.Geometry(SMap.GEOMETRY_POLYGON, null, points, { color: "#" + randomColor } );
        gLayer.addGeometry(polygon);
    }
    var cz = map.computeCenterZoom(mCoords);
    map.setCenterZoom(cz[0], cz[1]);
}