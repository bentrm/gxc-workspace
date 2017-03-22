/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when upgrading.
*/

//<debug>
Ext.Loader.setConfig({
    enabled: true,
    disableCaching: true
});
// Show long stack traces when in debug
Q.longStackSupport = true;
//</debug>

Ext.syncRequire([
    'Deft.mixin.Injectable',
    'Deft.mixin.Controllable'
]);

var config = {
    proxy: {
          host: ''
    },
    targetId: 'gxc-container',
    persistendState: false,
    viewportItems: [{
    region: 'center',
    xtype: 'gxc_panel_map',
    tbar: [{
        xtype: 'gxc_button_layer'
    }, '-', {
        xtype: 'gxc_button_zoomin'
    }, {
        xtype: 'gxc_button_zoomout'
    }, {
        xtype: 'gxc_button_zoombox'
    }, {
        xtype: 'gxc_button_zoomtomaxextent'
    }, '-', {
        xtype: 'gxc_button_naventry'
    }, {
        xtype: 'gxc_button_navprevious'
    }, {
        xtype: 'gxc_button_navnext'
    }, '-', {
        xtype: 'gxc_button_graticule'
    }, {
        xtype: 'gxc_button_geolocate'
    }, {
        xtype: 'gxc_button_fullscreen'
    }, {
        xtype: 'gxc_button_overviewmap'
    }, '-', {
        xtype: 'gxc_button_selectfeature'
    }, '-', {
        xtype: 'gxc_button_measurepath'
    }, {
        xtype: 'gxc_button_measurepolygon'
    }, '-', {
        xtype: 'gxc_button_wmcexport'
    }, {
        xtype: 'gxc_button_wmcimport'
    }, '->', {
        xtype: 'gxc_form_geocodercombobox',
        width: 200
    }],
    bbar: ['', {
      xtype: 'gxc_form_zoomchooser',
      width: 150
    }, '->', {
      xtype: 'gxc_component_scaleline',
      width: 150
    }, '->', {
      xtype: 'gxc_form_projectioncombobox',
      width: 150
    }]
  }, {
    region: 'west',
    width: 150,
    xtype: 'gxc_panel_legend',
    title: 'Legend',
    bodyPadding: '5px',
    collapsible: true,
    collapsed: true,
    split: 3
  }, {
    region: 'east',
    title: 'Layer',
    xtype: 'gxc_panel_layer',
    autoScroll: true,
    collapsible: true,
    width: 300,
    split: 3
  }, {
    region: 'south',
    xtype: 'gxc_toolbar_notificationbar',
    itemId: 'notificationBar'
  }],
  projections: {
    'EPSG:4326': true,
    'EPSG:3857': {
      def: '+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs',
      // maxExtent: [-40075016.6784,-40075016.6784,40075016.6784,40075016.6784],
      units: 'm'
    },
    'EPSG:22780': {
      def: '+proj=sterea +lat_0=34.2 +lon_0=39.15 +k=0.9995341 +x_0=0 +y_0=0 +a=6378249.2 +b=6356515 +towgs84=-190.421,8.532,238.69,0,0,0,0 +units=m +no_defs',
      maxExtent: [-40075016.6784,-40075016.6784,40075016.6784,40075016.6784],
      units: 'm'
    }
  },
  mapOptions: {
    // Projection der angefragten Karte
    //projection: 'EPSG:3857',
	//projection: 'EPSG:31469',
	projection: 'EPSG:4326',
    // Projection der angezeigten Koordinaten
    // Eingeschränkter Kartenbereich für Navigation
    // initiale Position
    //center: [1528996, 6627663],
	center: [13.17, 51.034],
	//center: [5395240, 5646000],
    // Skalen für Berechnung der Zoomlevel (Slider, Dropdown)
    // Freie Eingabe ist über Benutzeroberfläche ebenfalls möglich
    minScale: 1,
    maxScale: 150000000,
    // Anzahl der Zoomlevel im durch minScale/maxScale bzw. minResolution/maxResolution
    // vorgegebenen Bereich
    numZoomLevels: 20,
    // Initiales Zoomlevel
    zoom: 5
  },
  layers: [{
      type: "WMS",
      title: "Meilenblätter Sachsen",
      version: "1.3.0",
      url: "http://geoinformatik.htw-dresden.de/ms/mbl",
      layer: 'Meilenblatt_V',
      visibility: false
  }, {
      type: "WMS",
      title: "Temperatur in 1h",
      version: "1.3.0",
      url: "http://geoinformatik.htw-dresden.de/ms/wetter",
      layer: 'Temperatur_1',
      visibility: true,
      opacity: 0.75
    }, {
      type: "WMS",
      title: "Temperatur in 12h",
      version: "1.3.0",
      url: "http://geoinformatik.htw-dresden.de/ms/wetter",
      layer: 'Temperatur_12',
      visibility: false
    }, {
      type: "WMS",
      title: "Temperatur in 24h",
      version: "1.3.0",
      url: "http://geoinformatik.htw-dresden.de/ms/wetter",
      layer: 'Temperatur_24',
      visibility: false
    }, {
      type: "WMS",
      title: "Niederschlag in 1h",
      version: "1.3.0",
      url: "http://geoinformatik.htw-dresden.de/ms/wetter",
      layer: 'Niederschlag_1',
      visibility: false
    }, {
      type: "WMS",
      title: "Niederschlag in 24h",
      version: "1.3.0",
      url: "http://geoinformatik.htw-dresden.de/ms/wetter",
      layer: 'Niederschlag_24',
      visibility: false
    }, {
      type: "WMS",
      title: "Wind in 1h",
      version: "1.3.0",
      url: "http://geoinformatik.htw-dresden.de/ms/wetter",
      layer: 'Wind_1',
      visibility: false
    }, {
      type: "WMS",
      title: "Wind in 24h",
      version: "1.3.0",
      url: "http://geoinformatik.htw-dresden.de/ms/wetter",
      layer: 'Wind_24',
      visibility: false
    }, {
      type: "WMS",
      title: "Open Street Map",
      version: "1.3.0",
      url: "http://ows.terrestris.de/osm/service",
      layer: 'OSM-WMS'
    }
  ],
  services: [{
    type: 'WMS',
    title: 'Meilenblätter Sachsen',
    version: '1.3.0',
    url: 'http://geoinformatik.htw-dresden.de/ms/mbl'
  }, {
    type: "WMS",
    title: "Wetterinformationen Sachsen",
    version: "1.3.0",
    url: "http://geoinformatik.htw-dresden.de/ms/wetter"
  }, {
    type: "WMS",
    title: "Some",
    version: "1.3.0",
    url: "http://129.206.228.72/cached/osm"
  }, {
    type: "WMS",
    title: "Some",
    version: "1.3.0",
    url: "http://129.206.228.72/cached/hillshade"
  }, {
    type: 'WMS',
    title: 'OpenStreetMap',
    version: '1.1.1',
    url: 'http://ows.terrestris.de/osm/service'
  }, {
    type: 'WMS',
    title: 'OpenStreetMap (Grau)',
    version: '1.1.1',
    url: 'http://ows.terrestris.de/osm-gray/service'
  }]
};

Ext.application({
    name: 'GIS',
    extend: 'GXC.App',
    autoCreateViewport: false,
    appConfig: config
});
