Ext.define('YelpExtplorer.view.businesses.Filter', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'businessesfilter',
    renderConfig: {
        city: '',
        category: ''
    },
    twoWayBindable: ['city', 'category'],
    updateCity: function (city) {
        // Or put an itemId on city, and look for that.
        this.down('textfield[fieldLabel="City"]').setValue(city);
    },
    updateCategory: function(category) {
        this.down('textfield[label="Category"]').setValue(category);
    },
    items: [{
    xtype: 'textfield',
    reference: 'city',
    fieldLabel: 'City',
    listeners: {
        change: function (field, value) {
            field.up('businessesfilter').setCity(value);
        }
    },
    labelWidth: 26
}, '',  {
        xtype: 'textfield',
        label: 'Category',
        labelWidth: 64,
        listeners: {
            change: function(field, value) {
                field.up('businessesfilter').setCategory(value);
            }
        }
    }],
    padding: 4
});
