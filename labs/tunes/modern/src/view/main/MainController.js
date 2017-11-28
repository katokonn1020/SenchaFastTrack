Ext.define('Tunes.view.main.MainController', {
    extend: 'Tunes.view.main.BaseController',
    alias: 'controller.main-main',

onShowPreview: function(list, index, target, record) {
    this.getView().push({
        xtype: 'video',
        title: record.data.title + ' &mdash; ' + record.data.artist,
        posterUrl: record.data.image,
        url: record.data.preview
    });
}

});