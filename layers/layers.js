var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_IPOHTIMORDNIPOHBARAT_2025_26_1 = new ol.format.GeoJSON();
var features_IPOHTIMORDNIPOHBARAT_2025_26_1 = format_IPOHTIMORDNIPOHBARAT_2025_26_1.readFeatures(json_IPOHTIMORDNIPOHBARAT_2025_26_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IPOHTIMORDNIPOHBARAT_2025_26_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IPOHTIMORDNIPOHBARAT_2025_26_1.addFeatures(features_IPOHTIMORDNIPOHBARAT_2025_26_1);
var lyr_IPOHTIMORDNIPOHBARAT_2025_26_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IPOHTIMORDNIPOHBARAT_2025_26_1, 
                style: style_IPOHTIMORDNIPOHBARAT_2025_26_1,
                popuplayertitle: 'IPOH TIMOR DN IPOH BARAT_2025_26',
                interactive: true,
    title: 'IPOH TIMOR DN IPOH BARAT_2025_26<br />\
    <img src="styles/legend/IPOHTIMORDNIPOHBARAT_2025_26_1_0.png" /> 411 - 415.8<br />\
    <img src="styles/legend/IPOHTIMORDNIPOHBARAT_2025_26_1_1.png" /> 415.8 - 420.6<br />\
    <img src="styles/legend/IPOHTIMORDNIPOHBARAT_2025_26_1_2.png" /> 420.6 - 425.4<br />\
    <img src="styles/legend/IPOHTIMORDNIPOHBARAT_2025_26_1_3.png" /> 425.4 - 430.2<br />\
    <img src="styles/legend/IPOHTIMORDNIPOHBARAT_2025_26_1_4.png" /> 430.2 - 435<br />' });
var format_LANDUSE2__2 = new ol.format.GeoJSON();
var features_LANDUSE2__2 = format_LANDUSE2__2.readFeatures(json_LANDUSE2__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LANDUSE2__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LANDUSE2__2.addFeatures(features_LANDUSE2__2);
var lyr_LANDUSE2__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LANDUSE2__2, 
                style: style_LANDUSE2__2,
                popuplayertitle: 'LANDUSE2_',
                interactive: true,
                title: '<img src="styles/legend/LANDUSE2__2.png" /> LANDUSE2_'
            });
var format_mukimclipped_3 = new ol.format.GeoJSON();
var features_mukimclipped_3 = format_mukimclipped_3.readFeatures(json_mukimclipped_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mukimclipped_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mukimclipped_3.addFeatures(features_mukimclipped_3);
var lyr_mukimclipped_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mukimclipped_3, 
                style: style_mukimclipped_3,
                popuplayertitle: 'mukim clipped',
                interactive: true,
                title: '<img src="styles/legend/mukimclipped_3.png" /> mukim clipped'
            });
var format_LANDUSE1__4 = new ol.format.GeoJSON();
var features_LANDUSE1__4 = format_LANDUSE1__4.readFeatures(json_LANDUSE1__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LANDUSE1__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LANDUSE1__4.addFeatures(features_LANDUSE1__4);
var lyr_LANDUSE1__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LANDUSE1__4, 
                style: style_LANDUSE1__4,
                popuplayertitle: 'LANDUSE1_',
                interactive: true,
                title: '<img src="styles/legend/LANDUSE1__4.png" /> LANDUSE1_'
            });
var format_LANDUSE3__5 = new ol.format.GeoJSON();
var features_LANDUSE3__5 = format_LANDUSE3__5.readFeatures(json_LANDUSE3__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LANDUSE3__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LANDUSE3__5.addFeatures(features_LANDUSE3__5);
var lyr_LANDUSE3__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LANDUSE3__5, 
                style: style_LANDUSE3__5,
                popuplayertitle: 'LANDUSE3 _',
                interactive: true,
                title: '<img src="styles/legend/LANDUSE3__5.png" /> LANDUSE3 _'
            });
var format_balai_polis__6 = new ol.format.GeoJSON();
var features_balai_polis__6 = format_balai_polis__6.readFeatures(json_balai_polis__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_balai_polis__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_balai_polis__6.addFeatures(features_balai_polis__6);
var lyr_balai_polis__6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_balai_polis__6, 
                style: style_balai_polis__6,
                popuplayertitle: 'balai_polis_',
                interactive: true,
                title: '<img src="styles/legend/balai_polis__6.png" /> balai_polis_'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_IPOHTIMORDNIPOHBARAT_2025_26_1.setVisible(true);lyr_LANDUSE2__2.setVisible(true);lyr_mukimclipped_3.setVisible(true);lyr_LANDUSE1__4.setVisible(true);lyr_LANDUSE3__5.setVisible(true);lyr_balai_polis__6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_IPOHTIMORDNIPOHBARAT_2025_26_1,lyr_LANDUSE2__2,lyr_mukimclipped_3,lyr_LANDUSE1__4,lyr_LANDUSE3__5,lyr_balai_polis__6];
lyr_IPOHTIMORDNIPOHBARAT_2025_26_1.set('fieldAliases', {'fid': 'fid', 'state': 'state', 'parlimen': 'parlimen', 'code_parli': 'code_parli', 'Jum_kes25': 'Jum_kes25', 'Jum_kes26': 'Jum_kes26', 'Jum_keselu': 'Jum_keselu', 'SEMPADAN': 'SEMPADAN', });
lyr_LANDUSE2__2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'barrier': 'barrier', });
lyr_mukimclipped_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'kod_negeri': 'kod_negeri', 'kod_daerah': 'kod_daerah', 'kod_mukim': 'kod_mukim', 'nama_mukim': 'nama_mukim', });
lyr_LANDUSE1__4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'landuse': 'landuse', 'alt_name_z': 'alt_name_z', 'alt_name_1': 'alt_name_1', 'alt_name_2': 'alt_name_2', 'postal_cod': 'postal_cod', 'addr_house': 'addr_house', 'name_ta': 'name_ta', 'leisure': 'leisure', 'source_nam': 'source_nam', 'alt_name_m': 'alt_name_m', 'short_name': 'short_name', 'official_n': 'official_n', 'official_1': 'official_1', 'official_2': 'official_2', 'official_3': 'official_3', 'official_4': 'official_4', 'name_id': 'name_id', 'addr_stree': 'addr_stree', 'police': 'police', 'fence_type': 'fence_type', 'source_n_1': 'source_n_1', 'old_name': 'old_name', 'start_date': 'start_date', 'is_in': 'is_in', 'addr_city': 'addr_city', 'descriptio': 'descriptio', 'operator': 'operator', 'barrier': 'barrier', 'name_ms': 'name_ms', 'residentia': 'residentia', 'name_zh-Ha': 'name_zh-Ha', 'name_zh-_1': 'name_zh-_1', 'name_en': 'name_en', 'alt_name': 'alt_name', 'boundary': 'boundary', 'website': 'website', 'type': 'type', 'place': 'place', 'name_zh': 'name_zh', 'name': 'name', 'addr_postc': 'addr_postc', });
lyr_LANDUSE3__5.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'landuse': 'landuse', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_house': 'addr_house', 'addr_city': 'addr_city', 'name_ms': 'name_ms', 'name_en': 'name_en', 'access': 'access', 'barrier': 'barrier', 'traffic_ca': 'traffic_ca', 'place': 'place', 'name': 'name', 'alt_name': 'alt_name', 'highway': 'highway', });
lyr_balai_polis__6.set('fieldAliases', {'Nama_Balai': 'Nama_Balai', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_IPOHTIMORDNIPOHBARAT_2025_26_1.set('fieldImages', {'fid': 'TextEdit', 'state': 'TextEdit', 'parlimen': 'TextEdit', 'code_parli': 'TextEdit', 'Jum_kes25': 'TextEdit', 'Jum_kes26': 'TextEdit', 'Jum_keselu': 'TextEdit', 'SEMPADAN': 'TextEdit', });
lyr_LANDUSE2__2.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'barrier': 'TextEdit', });
lyr_mukimclipped_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'kod_negeri': 'TextEdit', 'kod_daerah': 'TextEdit', 'kod_mukim': 'TextEdit', 'nama_mukim': 'TextEdit', });
lyr_LANDUSE1__4.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'landuse': '', 'alt_name_z': '', 'alt_name_1': '', 'alt_name_2': '', 'postal_cod': '', 'addr_house': '', 'name_ta': '', 'leisure': '', 'source_nam': '', 'alt_name_m': '', 'short_name': '', 'official_n': '', 'official_1': '', 'official_2': '', 'official_3': '', 'official_4': '', 'name_id': '', 'addr_stree': '', 'police': '', 'fence_type': '', 'source_n_1': '', 'old_name': '', 'start_date': '', 'is_in': '', 'addr_city': '', 'descriptio': '', 'operator': '', 'barrier': '', 'name_ms': '', 'residentia': '', 'name_zh-Ha': '', 'name_zh-_1': '', 'name_en': '', 'alt_name': '', 'boundary': '', 'website': '', 'type': '', 'place': '', 'name_zh': '', 'name': '', 'addr_postc': '', });
lyr_LANDUSE3__5.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'landuse': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_house': 'TextEdit', 'addr_city': 'TextEdit', 'name_ms': 'TextEdit', 'name_en': 'TextEdit', 'access': 'TextEdit', 'barrier': 'TextEdit', 'traffic_ca': 'TextEdit', 'place': 'TextEdit', 'name': 'TextEdit', 'alt_name': 'TextEdit', 'highway': 'TextEdit', });
lyr_balai_polis__6.set('fieldImages', {'Nama_Balai': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_IPOHTIMORDNIPOHBARAT_2025_26_1.set('fieldLabels', {'fid': 'no label', 'state': 'no label', 'parlimen': 'no label', 'code_parli': 'no label', 'Jum_kes25': 'no label', 'Jum_kes26': 'no label', 'Jum_keselu': 'no label', 'SEMPADAN': 'no label', });
lyr_LANDUSE2__2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'barrier': 'no label', });
lyr_mukimclipped_3.set('fieldLabels', {'OBJECTID': 'no label', 'kod_negeri': 'no label', 'kod_daerah': 'no label', 'kod_mukim': 'no label', 'nama_mukim': 'no label', });
lyr_LANDUSE1__4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'landuse': 'no label', 'alt_name_z': 'no label', 'alt_name_1': 'no label', 'alt_name_2': 'no label', 'postal_cod': 'no label', 'addr_house': 'no label', 'name_ta': 'no label', 'leisure': 'no label', 'source_nam': 'no label', 'alt_name_m': 'no label', 'short_name': 'no label', 'official_n': 'no label', 'official_1': 'no label', 'official_2': 'no label', 'official_3': 'no label', 'official_4': 'no label', 'name_id': 'no label', 'addr_stree': 'no label', 'police': 'no label', 'fence_type': 'no label', 'source_n_1': 'no label', 'old_name': 'no label', 'start_date': 'no label', 'is_in': 'no label', 'addr_city': 'no label', 'descriptio': 'no label', 'operator': 'no label', 'barrier': 'no label', 'name_ms': 'no label', 'residentia': 'no label', 'name_zh-Ha': 'no label', 'name_zh-_1': 'no label', 'name_en': 'no label', 'alt_name': 'no label', 'boundary': 'no label', 'website': 'no label', 'type': 'no label', 'place': 'no label', 'name_zh': 'no label', 'name': 'no label', 'addr_postc': 'no label', });
lyr_LANDUSE3__5.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'landuse': 'no label', 'addr_stree': 'no label', 'addr_postc': 'no label', 'addr_house': 'no label', 'addr_city': 'no label', 'name_ms': 'no label', 'name_en': 'no label', 'access': 'no label', 'barrier': 'no label', 'traffic_ca': 'no label', 'place': 'no label', 'name': 'no label', 'alt_name': 'no label', 'highway': 'no label', });
lyr_balai_polis__6.set('fieldLabels', {'Nama_Balai': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_balai_polis__6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});