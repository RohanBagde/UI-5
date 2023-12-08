sap.ui.define([
    'sap/ui/core/ComponentContainer'
], function(ComponentContainer)
{
    'use strict';
    new ComponentContainer({
        name :"app",
        settings :{
            id : "demo"
        },
        async : true
    }).placeAt("content")

//     XMLView.create({ viewName :"app.view.Second"}).then(function(oView) {
//     oView.placeAt("content");
//    })   
});