Ext.define('YelpExtplorer.view.main.BaseController', {
    extend: 'Ext.app.ViewController',
    requires: [
        'YelpExtplorer.util.Geocode',
    ],
    geocodeCity: function (city) {
        var me = this;
        YelpExtplorer.util.Geocode.geocodeAddress(city, function (coordinates) {
            if (coordinates) {
                me.getViewModel().set('location', coordinates);
            }
        });
    },
    initViewModel: function (vm) {
        var me = this;

        vm.bind('{city}', Ext.Function.createBuffered(me.geocodeCity, 1000), me);
        vm.bind('{location}', me.load, me);
    },
load: function() {
    // Loading the store runs the Yelp URL, passing in a "ll" param, which is set 
    // to the location latitide and longitude. Those values are in the '{location} 
    // in the view model. 

    var vm = this.getViewModel();
    var location = vm.get('location');
    var category = vm.get('category');
    if (!location) return;
    var store = vm.getStore('businesses');

    // Yelp expects something like &ll=43.084,-89.546&term=pizza
    var params = {
        ll: (location.latitude + ',' + location.longitude)
    };
    if (category) {
        params.term = category;
    }
    store.load({
        params: params
    });
    // Since the store has new businesses, the detail page shouldn't show the previous business any more.
    vm.set('business', null);
}
});

