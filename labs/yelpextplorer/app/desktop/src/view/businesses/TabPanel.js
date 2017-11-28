Ext.define("YelpExtplorer.view.businesses.TabPanel", {
    extend: "Ext.tab.Panel",
    xtype: 'businessestabpanel',
    requires: [
    'YelpExtplorer.view.businesses.Map'
    ],
    items: [
    {
    title: 'Map',
    xtype: 'businessesmap',
    bind: {
        location: '{location}',
        store: '{businesses}'
    }
}
    , {
        title: 'View',
        html: 'businessesview'
    }, {
        title: 'Grid',
        html: 'businessesgrid'
    }]

});