Ext.define('Tunes.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'main',
    requires: [
        'Tunes.view.main.MainController',
        'Tunes.view.main.MainModel',
        'Tunes.view.View',
        'Tunes.view.Preview'
    ],
    controller: 'main-main',
    viewModel: {
        type: 'main-main'
    },

    foo: 12,

    layout: 'fit',
    items: [{
    xtype: 'tunesview',
    listeners: {
        itemclick: 'onShowPreview'
    },
    bind: {
        store: '{tunes}'
    }
    }]

});
