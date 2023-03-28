/**
*@NApiVersion 2.1
*/
define(["require", "exports", "N/ui/serverWidget"], function (require, exports, serverWidget) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.hideButton = void 0;
    var hideButton = function (ctxUserEvent, idsButtons) {
        var Form = ctxUserEvent['form'];
        var scr = "";
        //create an inline html field
        var hideFld = Form.addField({
            id: 'custpage_hide_buttons',
            label: 'not shown - hidden',
            type: serverWidget.FieldType.INLINEHTML
        });
        // for every button you want to hide, modify the scr += line
        for (var i = 0; i < idsButtons.length; i++) {
            scr += 'jQuery("#' + idsButtons[i] + '").hide();';
        }
        // push the script into the field so that it fires and does its handy work
        hideFld.defaultValue = "<script>jQuery(function($){require([], function(){" + scr + ";})})</script>";
    };
    exports.hideButton = hideButton;
});
