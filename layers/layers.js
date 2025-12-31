var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_OKINAWA_UNO_1 = new ol.format.GeoJSON();
var features_OKINAWA_UNO_1 = format_OKINAWA_UNO_1.readFeatures(json_OKINAWA_UNO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OKINAWA_UNO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OKINAWA_UNO_1.addFeatures(features_OKINAWA_UNO_1);
var lyr_OKINAWA_UNO_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OKINAWA_UNO_1, 
                style: style_OKINAWA_UNO_1,
                popuplayertitle: 'OKINAWA_UNO',
                interactive: true,
                title: '<img src="styles/legend/OKINAWA_UNO_1.png" /> OKINAWA_UNO'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OKINAWA_UNO_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OKINAWA_UNO_1];
lyr_OKINAWA_UNO_1.set('fieldAliases', {'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'cod_cd_com': 'cod_cd_com', 'ciu_com': 'ciu_com', });
lyr_OKINAWA_UNO_1.set('fieldImages', {'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'cod_cd_com': 'TextEdit', 'ciu_com': 'TextEdit', });
lyr_OKINAWA_UNO_1.set('fieldLabels', {'cod_depto': 'inline label - always visible', 'depto': 'inline label - always visible', 'cod_prov': 'inline label - always visible', 'prov': 'inline label - always visible', 'cod_mpio': 'inline label - always visible', 'mpio': 'inline label - always visible', 'cod_cd_com': 'inline label - always visible', 'ciu_com': 'inline label - always visible', });
lyr_OKINAWA_UNO_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});