sap.ui.define([
    'sap/ui/core/mvc/XMLView',
    'sap/m/MessageToast'
], function(XMLView)

{
    'use strict';
   XMLView.create({ viewName :"app.Second"}).then(function(oView) {
    oView.placeAt("content");
    
   })   
});