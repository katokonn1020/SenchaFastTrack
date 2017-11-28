/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'MyModern.Application',

    name: 'MyModern',

    requires: [
        // This will automatically load all classes in the MyModern namespace
        // so that application classes do not need to require each other.
        'MyModern.*'
    ],

    // The name of the initial view to create.
    mainView: 'MyModern.view.main.Main'
});
