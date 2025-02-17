sap.ui.define(
    [
        'sap/ui/core/mvc/ControllerExtension'
        // ,'sap/ui/core/mvc/OverrideExecution'
    ],
    function (
        ControllerExtension
        // ,OverrideExecution
    ) {
        'use strict';
        return ControllerExtension.extend("customer.app.variant1.excelupload", {
			async onUpload(event)  {
				const spreadsheetUploadComponent = await this.base.getAppComponent().createComponent(
					{
						usage: "customer.upload",
						async: true,
						componentData: {
							context: this,
                            action: "UPDATE",
                            tableId: "bf.bk.bank.manage::BankList--fe::table::Bank::LineItem-innerTable",
                            showDownloadButton: true,
                            deepDownloadConfig: {
                                deepLevel: 0,
                                addKeysToExport: true,
                                setDraftStatus: true,
                                showOptions: false
                            }
						}
					}
				)
				spreadsheetUploadComponent.openSpreadsheetUploadDialog()
			}
        });
    }
);
