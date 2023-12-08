sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/BindingMode',
    'sap/ui/model/resource/ResourceModel'
], function(Controller, MessageToast, JSONModel, BindingMode, ResourceModel){
    'use strict';
    return Controller.extend("app.Second",{
        // onInit : function () {

        //     //Moved this comment to Component.js
        //     var i18n= new ResourceModel({
        //         bundleName : "app.i18n.i18n"
        //     });
        //     this.getView().setModel(i18n,"i18n");

        //     var oBundle = i18n.getResourceBundle();

        //      var jModel= new JSONModel({ message :oBundle.getText("message")});
        //      jModel.setDefaultBindingMode(BindingMode.OneWay);
        //      this.getView().setModel(jModel);
        //     },

        // show_text : function(){
        //    // MessageToast.show("This is show_text function")

        //     var mData= this.getView().getModel().getProperty("/message");
        //     MessageToast.show(mData);
        //     //By Default it is two way binding
        // }
    });
});