(function(){
    'use strict';

    var TEXT = {
        ms: {
            filterTitle: 'Filter Paparan Peta',
            labelDisplay: 'Paparan label statistik',
            layerControl: 'Kawalan Layer',
            layerHint: 'Hidupkan atau matikan layer QGIS2Web pada peta.',
            open: 'Buka',
            close: 'Tutup',
            cases: 'kes',
            rumah: 'Rumah',
            kedai: 'Kedai',
            masjid: 'Masjid/Kuil/Tokong',
            lain: 'Lain-lain',
            satellite: 'Google Satellite',
            mukim: 'Sempadan Mukim',
            parlimen: 'Kes Mengikut Parlimen',
            landuse3: 'Kawasan Kediaman 3',
            landuse2: 'Kawasan Kediaman 2',
            landuse1: 'Kawasan Kediaman 1',
            police: 'Balai Polis'
        },
        en: {
            filterTitle: 'Map Display Filter',
            labelDisplay: 'Statistics label display',
            layerControl: 'Layer Control',
            layerHint: 'Turn QGIS2Web map layers on or off.',
            open: 'Open',
            close: 'Close',
            cases: 'cases',
            rumah: 'House',
            kedai: 'Shop',
            masjid: 'Mosque/Temple',
            lain: 'Others',
            satellite: 'Google Satellite',
            mukim: 'Mukim Boundary',
            parlimen: 'Cases by Parliament',
            landuse3: 'Residential Area 3',
            landuse2: 'Residential Area 2',
            landuse1: 'Residential Area 1',
            police: 'Police Stations'
        },
        zh: {
            filterTitle: '地图显示筛选',
            labelDisplay: '统计标签显示',
            layerControl: '图层控制',
            layerHint: '开启或关闭 QGIS2Web 地图图层。',
            open: '打开',
            close: '收起',
            cases: '宗',
            rumah: '住宅',
            kedai: '商店',
            masjid: '清真寺/寺庙',
            lain: '其他',
            satellite: 'Google 卫星图',
            mukim: 'Mukim 边界',
            parlimen: '国会选区案件',
            landuse3: '住宅区 3',
            landuse2: '住宅区 2',
            landuse1: '住宅区 1',
            police: '警察局'
        }
    };

    var LAYERS = [
        { key: 'satellite', globalName: 'lyr_GoogleSatellite_0' },
        { key: 'mukim', globalName: 'lyr_mukimclipped_1' },
        { key: 'parlimen', globalName: 'lyr_parlimenpeninsular_2018_parlimen_2' },
        { key: 'landuse3', globalName: 'lyr_landuse3landuse_residential_3' },
        { key: 'landuse2', globalName: 'lyr_landuse2landuse_residential_4' },
        { key: 'landuse1', globalName: 'lyr_landuse1landuse_residential_5' },
        { key: 'police', globalName: 'lyr_balai_polis__6' }
    ];

    var observerBusy = false;

    function currentLang(){
        var lang = document.documentElement.lang || localStorage.getItem('webgis-language') || 'ms';
        return TEXT[lang] ? lang : 'ms';
    }

    function t(){
        return TEXT[currentLang()];
    }

    function getLayer(def){
        return window[def.globalName] || null;
    }

    function injectStyles(){
        if(document.getElementById('fyp3-fixes-style')) return;
        var style = document.createElement('style');
        style.id = 'fyp3-fixes-style';
        style.textContent = [
            '.map-filter-label-heading{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.55px;color:#71808b;margin:4px 0 7px;}',
            '.qgis-layer-section{margin-top:11px;padding-top:10px;border-top:1px solid #dce5eb;}',
            '.qgis-layer-toggle{width:100%;display:flex;align-items:center;justify-content:space-between;gap:8px;border:0;background:transparent;color:inherit;padding:0;cursor:pointer;font:inherit;font-weight:800;text-align:left;}',
            '.qgis-layer-toggle-left{display:flex;align-items:center;gap:7px;}',
            '.qgis-layer-toggle i.fa-chevron-down{transition:transform .2s ease;}',
            '.qgis-layer-section.collapsed .qgis-layer-toggle i.fa-chevron-down{transform:rotate(-90deg);}',
            '.qgis-layer-body{margin-top:9px;}',
            '.qgis-layer-section.collapsed .qgis-layer-body{display:none;}',
            '.qgis-layer-hint{font-size:10px;line-height:1.35;color:#7a8793;margin:0 0 8px;}',
            '.qgis-layer-list{display:flex;flex-direction:column;gap:6px;}',
            '.qgis-layer-item{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:6px 7px;border-radius:7px;background:#f5f8fa;}',
            '.qgis-layer-item span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}',
            '.qgis-layer-item input{accent-color:#1687c9;flex:0 0 auto;}',
            'body.dark .map-filter-label-heading{color:#aebbc4!important;}',
            'body.dark .qgis-layer-section{border-color:#3b4c58!important;}',
            'body.dark .qgis-layer-hint{color:#b8c4cc!important;}',
            'body.dark .qgis-layer-item{background:#22323d!important;color:#f1f5f7!important;}',
            'body.dark .legend-item,body.dark .info-step strong,body.dark .info-step p,body.dark .panel-body p,body.dark .stat-number,body.dark .bar strong,body.dark .bar span{color:#e8eef2!important;}',
            'body.dark .search-box{background:#1c2b35!important;border-color:#3b4c58!important;}',
            'body.dark .search-box input{background:transparent!important;color:#fff!important;}',
            'body.dark .search-box input::placeholder{color:#aebbc4!important;}',
            'body.dark .chart{border-color:#3b4c58!important;}',
            'body.dark .panel-action{color:#67c2ff!important;}',
            'body.dark .complaint-status span{color:#b9c9c2!important;}',
            '@media(max-width:700px){.qgis-layer-item{padding:7px 6px;}}'
        ].join('');
        document.head.appendChild(style);
    }

    function cleanBrokenInlineText(){
        if(!document.body) return;
        Array.prototype.slice.call(document.body.childNodes).forEach(function(node){
            if(node.nodeType !== 3) return;
            var value = node.textContent || '';
            if(value.indexOf('WEBGIS_LANGUAGE_FINAL_FIX') !== -1 ||
               (value.indexOf('window.addEventListener') !== -1 && value.indexOf('moveMapContainer') !== -1)){
                node.parentNode.removeChild(node);
            }
        });
    }

    function applySavedLanguage(){
        var saved = localStorage.getItem('webgis-language') || 'ms';
        if(typeof window.changeLanguage === 'function'){
            try { window.changeLanguage(saved); } catch(e) {}
        } else {
            document.documentElement.lang = saved;
        }
    }

    function translateFilterPanel(){
        var target = document.getElementById('mapPageFilter');
        var labels = document.getElementById('mapPageLabels');
        if(!target) return;
        var tx = t();
        var title = target.querySelector('.map-filter-title');
        if(title) title.innerHTML = '<i class="fas fa-filter"></i> ' + tx.filterTitle;

        var options = target.querySelector('.map-filter-options');
        if(options){
            var heading = target.querySelector('.map-filter-label-heading');
            if(!heading){
                heading = document.createElement('div');
                heading.className = 'map-filter-label-heading';
                options.parentNode.insertBefore(heading, options);
            }
            heading.textContent = tx.labelDisplay;
            var nameMap = { rumah: tx.rumah, kedai: tx.kedai, masjid: tx.masjid, lain: tx.lain };
            options.querySelectorAll('[data-map-label]').forEach(function(cb){
                var label = cb.closest('label');
                if(!label) return;
                var textNode = Array.prototype.slice.call(label.childNodes).find(function(n){ return n.nodeType === 3; });
                if(textNode && nameMap[cb.dataset.mapLabel]) textNode.nodeValue = ' ' + nameMap[cb.dataset.mapLabel];
            });
        }

        if(labels){
            var nameMap2 = { rumah: tx.rumah, kedai: tx.kedai, masjid: tx.masjid, lain: tx.lain };
            labels.querySelectorAll('[data-label-key]').forEach(function(box){
                var key = box.dataset.labelKey;
                var strong = box.querySelector('strong');
                var span = box.querySelector('span');
                if(strong && nameMap2[key]) strong.textContent = nameMap2[key];
                if(span){
                    var match = (span.textContent || '').match(/[\d,.]+/);
                    if(match) span.textContent = match[0] + ' ' + tx.cases;
                }
            });
        }
    }

    function syncCheckboxForLayer(def, layer){
        var cb = document.querySelector('.qgis-layer-item input[data-layer-key="' + def.key + '"]');
        if(cb && layer && typeof layer.getVisible === 'function') cb.checked = layer.getVisible();
    }

    function bindLayerVisibility(def, layer){
        if(!layer || typeof layer.on !== 'function' || layer.__fyp3VisibilityBound) return;
        layer.__fyp3VisibilityBound = true;
        layer.on('change:visible', function(){ syncCheckboxForLayer(def, layer); });
    }

    function renderLayerSection(){
        var target = document.getElementById('mapPageFilter');
        if(!target) return;
        var tx = t();
        var section = target.querySelector('.qgis-layer-section');
        var wasCollapsed = section ? section.classList.contains('collapsed') : false;

        if(!section){
            section = document.createElement('div');
            section.className = 'qgis-layer-section';
            target.appendChild(section);
        }
        if(wasCollapsed) section.classList.add('collapsed');

        section.innerHTML = '';
        var toggle = document.createElement('button');
        toggle.type = 'button';
        toggle.className = 'qgis-layer-toggle';
        toggle.innerHTML = '<span class="qgis-layer-toggle-left"><i class="fas fa-layer-group"></i><span>' + tx.layerControl + '</span></span><i class="fas fa-chevron-down"></i>';
        section.appendChild(toggle);

        var body = document.createElement('div');
        body.className = 'qgis-layer-body';
        var hint = document.createElement('p');
        hint.className = 'qgis-layer-hint';
        hint.textContent = tx.layerHint;
        body.appendChild(hint);

        var list = document.createElement('div');
        list.className = 'qgis-layer-list';
        LAYERS.forEach(function(def){
            var layer = getLayer(def);
            if(!layer) return;
            var item = document.createElement('label');
            item.className = 'qgis-layer-item';
            var name = document.createElement('span');
            name.textContent = tx[def.key] || def.key;
            var cb = document.createElement('input');
            cb.type = 'checkbox';
            cb.dataset.layerKey = def.key;
            cb.checked = typeof layer.getVisible === 'function' ? layer.getVisible() : true;
            cb.addEventListener('change', function(){
                if(typeof layer.setVisible === 'function') layer.setVisible(cb.checked);
                if(window.map && typeof window.map.updateSize === 'function') window.map.updateSize();
            });
            item.appendChild(name);
            item.appendChild(cb);
            list.appendChild(item);
            bindLayerVisibility(def, layer);
        });
        body.appendChild(list);
        section.appendChild(body);

        toggle.addEventListener('click', function(){
            section.classList.toggle('collapsed');
        });
    }

    function ensureLayerControl(){
        if(observerBusy) return;
        observerBusy = true;
        try {
            translateFilterPanel();
            renderLayerSection();
        } finally {
            observerBusy = false;
        }
    }

    function openLayerControl(){
        if(typeof window.closeSettings === 'function'){
            try { window.closeSettings(); } catch(e) {}
        }
        if(typeof window.showPageById === 'function'){
            window.showPageById('map-page');
        }
        setTimeout(function(){
            ensureLayerControl();
            var section = document.querySelector('#mapPageFilter .qgis-layer-section');
            if(section) section.classList.remove('collapsed');
            resizeMap();
        }, 180);
    }

    function patchSettingsLayerButton(){
        var label = document.querySelector('.settings [data-i18n="layerControl"]');
        if(!label) return;
        var row = label.closest('.setting-row');
        var button = row ? row.querySelector('button') : null;
        if(!button || button.dataset.fyp3LayerButton === '1') return;
        button.dataset.fyp3LayerButton = '1';
        button.onclick = openLayerControl;
    }

    function resizeMap(){
        try {
            var active = document.querySelector('.page.active');
            if(typeof window.moveMapContainer === 'function'){
                window.moveMapContainer(active && active.id === 'map-page' ? 'map-page' : 'dashboard');
            }
            if(window.map && typeof window.map.updateSize === 'function'){
                setTimeout(function(){ window.map.updateSize(); }, 30);
                setTimeout(function(){ window.map.updateSize(); }, 220);
            }
        } catch(e) {}
    }

    function watchFilter(){
        var target = document.getElementById('mapPageFilter');
        if(!target || target.__fyp3Observer) return;
        var scheduled = false;
        var observer = new MutationObserver(function(){
            if(observerBusy || scheduled) return;
            scheduled = true;
            setTimeout(function(){
                scheduled = false;
                ensureLayerControl();
            }, 0);
        });
        observer.observe(target, { childList: true, subtree: true });
        target.__fyp3Observer = observer;
    }

    function watchActivePage(){
        document.querySelectorAll('.page').forEach(function(page){
            if(page.__fyp3PageObserver) return;
            var observer = new MutationObserver(function(){
                if(page.classList.contains('active')){
                    if(page.id === 'map-page') ensureLayerControl();
                    resizeMap();
                }
            });
            observer.observe(page, { attributes: true, attributeFilter: ['class'] });
            page.__fyp3PageObserver = observer;
        });
    }

    function init(){
        injectStyles();
        cleanBrokenInlineText();
        applySavedLanguage();
        watchFilter();
        watchActivePage();
        ensureLayerControl();
        patchSettingsLayerButton();
        resizeMap();

        var languageSelect = document.getElementById('languageSelect');
        if(languageSelect && languageSelect.dataset.fyp3Bound !== '1'){
            languageSelect.dataset.fyp3Bound = '1';
            languageSelect.addEventListener('change', function(){
                setTimeout(function(){
                    translateFilterPanel();
                    renderLayerSection();
                    patchSettingsLayerButton();
                }, 25);
            });
        }

        window.addEventListener('resize', resizeMap);
        setTimeout(function(){ applySavedLanguage(); ensureLayerControl(); patchSettingsLayerButton(); resizeMap(); }, 250);
        setTimeout(function(){ ensureLayerControl(); resizeMap(); }, 800);
    }

    if(document.readyState === 'loading'){
        document.addEventListener('DOMContentLoaded', init, { once: true });
    } else {
        init();
    }
})();
