var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_mukimclipped_1 = new ol.format.GeoJSON();
var features_mukimclipped_1 = format_mukimclipped_1.readFeatures(json_mukimclipped_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mukimclipped_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mukimclipped_1.addFeatures(features_mukimclipped_1);
var lyr_mukimclipped_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mukimclipped_1, 
                style: style_mukimclipped_1,
                popuplayertitle: 'mukim clipped',
                interactive: true,
                title: '<img src="styles/legend/mukimclipped_1.png" /> mukim clipped'
            });
var format_parlimenpeninsular_2018_parlimen_2 = new ol.format.GeoJSON();
var features_parlimenpeninsular_2018_parlimen_2 = format_parlimenpeninsular_2018_parlimen_2.readFeatures(json_parlimenpeninsular_2018_parlimen_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parlimenpeninsular_2018_parlimen_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parlimenpeninsular_2018_parlimen_2.addFeatures(features_parlimenpeninsular_2018_parlimen_2);
var lyr_parlimenpeninsular_2018_parlimen_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parlimenpeninsular_2018_parlimen_2, 
                style: style_parlimenpeninsular_2018_parlimen_2,
                popuplayertitle: 'parlimen — peninsular_2018_parlimen',
                interactive: true,
                title: '<img src="styles/legend/parlimenpeninsular_2018_parlimen_2.png" /> parlimen — peninsular_2018_parlimen'
            });
var format_landuse3landuse_residential_3 = new ol.format.GeoJSON();
var features_landuse3landuse_residential_3 = format_landuse3landuse_residential_3.readFeatures(json_landuse3landuse_residential_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_landuse3landuse_residential_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_landuse3landuse_residential_3.addFeatures(features_landuse3landuse_residential_3);
var lyr_landuse3landuse_residential_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_landuse3landuse_residential_3, 
                style: style_landuse3landuse_residential_3,
                popuplayertitle: 'landuse3 — landuse_residential',
                interactive: true,
                title: '<img src="styles/legend/landuse3landuse_residential_3.png" /> landuse3 — landuse_residential'
            });
var format_landuse2landuse_residential_4 = new ol.format.GeoJSON();
var features_landuse2landuse_residential_4 = format_landuse2landuse_residential_4.readFeatures(json_landuse2landuse_residential_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_landuse2landuse_residential_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_landuse2landuse_residential_4.addFeatures(features_landuse2landuse_residential_4);
var lyr_landuse2landuse_residential_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_landuse2landuse_residential_4, 
                style: style_landuse2landuse_residential_4,
                popuplayertitle: 'landuse 2 — landuse_residential',
                interactive: true,
                title: '<img src="styles/legend/landuse2landuse_residential_4.png" /> landuse 2 — landuse_residential'
            });
var format_landuse1landuse_residential_5 = new ol.format.GeoJSON();
var features_landuse1landuse_residential_5 = format_landuse1landuse_residential_5.readFeatures(json_landuse1landuse_residential_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_landuse1landuse_residential_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_landuse1landuse_residential_5.addFeatures(features_landuse1landuse_residential_5);
var lyr_landuse1landuse_residential_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_landuse1landuse_residential_5, 
                style: style_landuse1landuse_residential_5,
                popuplayertitle: 'landuse 1 — landuse_residential',
                interactive: true,
                title: '<img src="styles/legend/landuse1landuse_residential_5.png" /> landuse 1 — landuse_residential'
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

lyr_GoogleSatellite_0.setVisible(true);lyr_mukimclipped_1.setVisible(true);lyr_parlimenpeninsular_2018_parlimen_2.setVisible(true);lyr_landuse3landuse_residential_3.setVisible(true);lyr_landuse2landuse_residential_4.setVisible(true);lyr_landuse1landuse_residential_5.setVisible(true);lyr_balai_polis__6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_mukimclipped_1,lyr_parlimenpeninsular_2018_parlimen_2,lyr_landuse3landuse_residential_3,lyr_landuse2landuse_residential_4,lyr_landuse1landuse_residential_5,lyr_balai_polis__6];
lyr_mukimclipped_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'kod_negeri': 'kod_negeri', 'kod_daerah': 'kod_daerah', 'kod_mukim': 'kod_mukim', 'nama_mukim': 'nama_mukim', });
lyr_parlimenpeninsular_2018_parlimen_2.set('fieldAliases', {'fid': 'fid', 'state': 'state', 'parlimen': 'parlimen', 'code_parlimen': 'code_parlimen', 'Jum_kes 2025': 'Jum_kes 2025', 'Jum_kes 2026': 'Jum_kes 2026', 'Jum_keseluruhan': 'Jum_keseluruhan', });
lyr_landuse3landuse_residential_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'landuse': 'landuse', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'name:ms': 'name:ms', 'name:en': 'name:en', 'access': 'access', 'barrier': 'barrier', 'traffic_calming': 'traffic_calming', 'place': 'place', 'name': 'name', 'alt_name': 'alt_name', 'highway': 'highway', });
lyr_landuse2landuse_residential_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'barrier': 'barrier', });
lyr_landuse1landuse_residential_5.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'landuse': 'landuse', 'alt_name:zh-Hant': 'alt_name:zh-Hant', 'alt_name:zh-Hans': 'alt_name:zh-Hans', 'alt_name:zh': 'alt_name:zh', 'postal_code': 'postal_code', 'addr:housenumber': 'addr:housenumber', 'name:ta': 'name:ta', 'leisure': 'leisure', 'source:name:zh': 'source:name:zh', 'alt_name:ms': 'alt_name:ms', 'short_name': 'short_name', 'official_name:zh-Hant': 'official_name:zh-Hant', 'official_name:zh-Hans': 'official_name:zh-Hans', 'official_name:zh': 'official_name:zh', 'official_name:ms': 'official_name:ms', 'official_name': 'official_name', 'name:id': 'name:id', 'addr:street': 'addr:street', 'police': 'police', 'fence_type': 'fence_type', 'source:name': 'source:name', 'old_name': 'old_name', 'start_date': 'start_date', 'is_in': 'is_in', 'addr:city': 'addr:city', 'description': 'description', 'operator': 'operator', 'barrier': 'barrier', 'name:ms': 'name:ms', 'residential': 'residential', 'name:zh-Hant': 'name:zh-Hant', 'name:zh-Hans': 'name:zh-Hans', 'name:en': 'name:en', 'alt_name': 'alt_name', 'boundary': 'boundary', 'website': 'website', 'type': 'type', 'place': 'place', 'name:zh': 'name:zh', 'name': 'name', 'addr:postcode': 'addr:postcode', });
lyr_balai_polis__6.set('fieldAliases', {'Nama_Balai': 'Nama_Balai', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_mukimclipped_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'kod_negeri': 'TextEdit', 'kod_daerah': 'TextEdit', 'kod_mukim': 'TextEdit', 'nama_mukim': 'TextEdit', });
lyr_parlimenpeninsular_2018_parlimen_2.set('fieldImages', {'fid': 'TextEdit', 'state': 'TextEdit', 'parlimen': 'TextEdit', 'code_parlimen': 'TextEdit', 'Jum_kes 2025': '', 'Jum_kes 2026': '', 'Jum_keseluruhan': '', });
lyr_landuse3landuse_residential_3.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'landuse': 'TextEdit', 'addr:street': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:housenumber': 'TextEdit', 'addr:city': 'TextEdit', 'name:ms': 'TextEdit', 'name:en': 'TextEdit', 'access': 'TextEdit', 'barrier': 'TextEdit', 'traffic_calming': 'TextEdit', 'place': 'TextEdit', 'name': 'TextEdit', 'alt_name': 'TextEdit', 'highway': 'TextEdit', });
lyr_landuse2landuse_residential_4.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'barrier': 'TextEdit', });
lyr_landuse1landuse_residential_5.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'landuse': 'TextEdit', 'alt_name:zh-Hant': 'TextEdit', 'alt_name:zh-Hans': 'TextEdit', 'alt_name:zh': 'TextEdit', 'postal_code': 'TextEdit', 'addr:housenumber': 'TextEdit', 'name:ta': 'TextEdit', 'leisure': 'TextEdit', 'source:name:zh': 'TextEdit', 'alt_name:ms': 'TextEdit', 'short_name': 'TextEdit', 'official_name:zh-Hant': 'TextEdit', 'official_name:zh-Hans': 'TextEdit', 'official_name:zh': 'TextEdit', 'official_name:ms': 'TextEdit', 'official_name': 'TextEdit', 'name:id': 'TextEdit', 'addr:street': 'TextEdit', 'police': 'TextEdit', 'fence_type': 'TextEdit', 'source:name': 'TextEdit', 'old_name': 'TextEdit', 'start_date': 'TextEdit', 'is_in': 'TextEdit', 'addr:city': 'TextEdit', 'description': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'name:ms': 'TextEdit', 'residential': 'TextEdit', 'name:zh-Hant': 'TextEdit', 'name:zh-Hans': 'TextEdit', 'name:en': 'TextEdit', 'alt_name': 'TextEdit', 'boundary': 'TextEdit', 'website': 'TextEdit', 'type': 'TextEdit', 'place': 'TextEdit', 'name:zh': 'TextEdit', 'name': 'TextEdit', 'addr:postcode': 'TextEdit', });
lyr_balai_polis__6.set('fieldImages', {'Nama_Balai': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_mukimclipped_1.set('fieldLabels', {'OBJECTID': 'no label', 'kod_negeri': 'no label', 'kod_daerah': 'no label', 'kod_mukim': 'no label', 'nama_mukim': 'no label', });
lyr_parlimenpeninsular_2018_parlimen_2.set('fieldLabels', {'fid': 'no label', 'state': 'no label', 'parlimen': 'no label', 'code_parlimen': 'no label', 'Jum_kes 2025': 'no label', 'Jum_kes 2026': 'no label', 'Jum_keseluruhan': 'no label', });
lyr_landuse3landuse_residential_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'landuse': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'name:ms': 'no label', 'name:en': 'no label', 'access': 'no label', 'barrier': 'no label', 'traffic_calming': 'no label', 'place': 'no label', 'name': 'no label', 'alt_name': 'no label', 'highway': 'no label', });
lyr_landuse2landuse_residential_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'barrier': 'no label', });
lyr_landuse1landuse_residential_5.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'landuse': 'no label', 'alt_name:zh-Hant': 'no label', 'alt_name:zh-Hans': 'no label', 'alt_name:zh': 'no label', 'postal_code': 'no label', 'addr:housenumber': 'no label', 'name:ta': 'no label', 'leisure': 'no label', 'source:name:zh': 'no label', 'alt_name:ms': 'no label', 'short_name': 'no label', 'official_name:zh-Hant': 'no label', 'official_name:zh-Hans': 'no label', 'official_name:zh': 'no label', 'official_name:ms': 'no label', 'official_name': 'no label', 'name:id': 'no label', 'addr:street': 'no label', 'police': 'no label', 'fence_type': 'no label', 'source:name': 'no label', 'old_name': 'no label', 'start_date': 'no label', 'is_in': 'no label', 'addr:city': 'no label', 'description': 'no label', 'operator': 'no label', 'barrier': 'no label', 'name:ms': 'no label', 'residential': 'no label', 'name:zh-Hant': 'no label', 'name:zh-Hans': 'no label', 'name:en': 'no label', 'alt_name': 'no label', 'boundary': 'no label', 'website': 'no label', 'type': 'no label', 'place': 'no label', 'name:zh': 'no label', 'name': 'no label', 'addr:postcode': 'no label', });
lyr_balai_polis__6.set('fieldLabels', {'Nama_Balai': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_balai_polis__6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});