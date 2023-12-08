sap.ui.define([
    'sap/ui/core/UIComponent',
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/BindingMode',
    'sap/ui/model/resource/ResourceModel'
], function(UIComponent, JSONModel, BindingMode, ResourceModel){
    'use strict';
    return UIComponent.extend("app.Component",{
        metadata: {
            "interfaces":["sap.ui.core.IAsyncContentCreation"],
            "manifest":"json"
        },
        init : function(){
            UIComponent.prototype.init.apply(this, arguments);

            var i18n= new ResourceModel({
                bundleName : "app.i18n.i18n"
            });
            this.setModel(i18n,"i18n");
            var oBundle = i18n.getResourceBundle();
            var jModel= new JSONModel({                 
                data :[{
                    fname : "Rohan",
                    lname : "bagde",
                    percent :"66",
                    result : "Pass"
                },
                {
                    fname : "Salman",
                    lname : "Sulthan",
                    percent :"34",
                    result : "Fail"
                },
                {
                    fname : "Pratibha",
                    lname : "UI",
                    percent :"89",
                    result : "Pass"
                }
            ]
            });
            jModel.setDefaultBindingMode(BindingMode.OneWay);
            this.setModel(jModel);
        }
    });
});