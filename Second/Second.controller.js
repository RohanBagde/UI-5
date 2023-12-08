sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast'
], function(Controller, MessageToast){
    'use strict';
    return Controller.extend("app.Second",{
        handlePress1 : function(){
            MessageToast.show("Hello World");
        }
    });
});