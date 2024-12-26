sap.ui.define(
  ["sap/ui/core/mvc/ControllerExtension"],
  function (ControllerExtension) {
    "use strict";

    return ControllerExtension.extend(
      "booksv4.ext.controller.ControllerExtensionFile",
      {
        // this section allows to extend lifecycle hooks or hooks provided by Fiori elements
        override: {
          /**
           * Called when a controller is instantiated and its View controls (if available) are already created.
           * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
           * @memberOf booksv4.ext.controller.ControllerExtensionFile
           */
          onInit: function () {
            // you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
            var oModel = this.base.getExtensionAPI().getModel();
            // this.getView()
            //   .byId(
            //     "booksv4::BooksList--fe::table::Books::LineItem::CustomAction::ListReportext::ActionToolbarAction"
            //   )
            //   .setVisible(false);
          },
          editFlow: {
            onBeforeEdit: function () {
              debugger;
            },
            customMassEditSave: function () {
              debugger;
            },
            editDocument: function () {
              debugger;
            },
            invokeAction: function () {
              debugger;
            },
            onAfterEdit: function () {
              debugger;
            },
            onAfterSave: function () {
              debugger;
            },
            updateDocument: function () {
              debugger;
            },
          },
        },
      }
    );
  }
);
