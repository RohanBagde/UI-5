sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/BindingMode'

], function(Controller, MessageToast, JSONModel, BindingMode){
    'use strict';
    return Controller.extend("app.Second",{
        onInit : function () {

            //This is One Way Binding
              
             var jModel= new JSONModel({ message :"This Is One Way Binding Can't Edit"});
             jModel.setDefaultBindingMode(BindingMode.OneWay);
             this.getView().setModel(jModel);
        },
            
        //By Default it is two way binding

    //         this.getView().setModel(new JSONModel({
    //             message :"This Is Two Way Binding"
    //         })
    //     );
    // },

           
        show_text : function(){
          // MessageToast.show("This is show_text function")
            var mData= this.getView().getModel().getProperty("/message");
            MessageToast.show(mData);
            
        }
    });
});