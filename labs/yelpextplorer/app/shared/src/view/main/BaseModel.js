Ext.define('YelpExtplorer.view.main.BaseModel', {
    extend: 'Ext.app.ViewModel',
    require: ['YelpExtplorer.model.Business'],
    data: {
        city: 'Madison, Wisconsin'
    },
    stores: {
        businesses: {
            model: 'YelpExtplorer.model.Business',
            pageSize: 20 // Yelp limits results to 20 at a time
        }
    }
});