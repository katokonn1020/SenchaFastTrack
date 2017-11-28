Ext.define('YelpExtplorer.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'main',

    requires: [
        'Ext.plugin.Viewport',
        'YelpExtplorer.view.Banner',
        'YelpExtplorer.view.main.MainController',
        'YelpExtplorer.view.main.MainModel',
        'YelpExtplorer.view.businesses.Filter',
        'YelpExtplorer.view.businesses.TabPanel'
    ],

    controller: 'main-main',
    viewModel: {
        type: 'main-main'
    },

dockedItems: [{
    dock: 'top',
    xtype: 'banner'
}, {
    dock: 'top',
    xtype: 'businessesfilter',
    bind: {
        city: '{city}',
        category: '{category}'
    }
}],
    layout: 'border',
    items: [{
        xtype: 'businessestabpanel',
        region: 'center'
    }, {
        region: 'east',
        html: 'businessdetail',
        width: 130
    }]

});

