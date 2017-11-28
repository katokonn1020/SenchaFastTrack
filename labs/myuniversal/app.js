/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'MyUniversal.Application',

    name: 'MyUniversal',

    requires: [
        // This will automatically load all classes in the MyUniversal namespace
        // so that application classes do not need to require each other.
        'MyUniversal.*'
    ],

    // The name of the initial view to create.
    mainView: 'MyUniversal.view.main.Main'
});
