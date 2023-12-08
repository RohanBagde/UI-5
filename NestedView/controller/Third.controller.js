sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/BindingMode',
    'sap/ui/model/resource/ResourceModel'
], function(Controller, MessageToast, JSONModel, BindingMode, ResourceModel){
    'use strict';
    return Controller.extend("app.Third",{
     
        show_text : function(){
            var mData= this.getView().getModel().getProperty("/message");
            MessageToast.show(mData);
        }
    });
});