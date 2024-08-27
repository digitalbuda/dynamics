﻿/**
 * SAMPLE CODE NOTICE
 * 
 * THIS SAMPLE CODE IS MADE AVAILABLE AS IS.  MICROSOFT MAKES NO WARRANTIES, WHETHER EXPRESS OR IMPLIED,
 * OF FITNESS FOR A PARTICULAR PURPOSE, OF ACCURACY OR COMPLETENESS OF RESPONSES, OF RESULTS, OR CONDITIONS OF MERCHANTABILITY.
 * THE ENTIRE RISK OF THE USE OR THE RESULTS FROM THE USE OF THIS SAMPLE CODE REMAINS WITH THE USER.
 * NO TECHNICAL SUPPORT IS PROVIDED.  YOU MAY NOT DISTRIBUTE THIS CODE UNLESS YOU HAVE A LICENSE AGREEMENT WITH MICROSOFT THAT ALLOWS YOU TO DO SO.
 */

import * as Triggers from "PosApi/Extend/Triggers/ApplicationTriggers";
import { CancelableTriggerResult } from "PosApi/Extend/Triggers/Triggers";
import { ObjectExtensions, StringExtensions } from "PosApi/TypeExtensions";
import PinInputDialog, { IRequestPinNumberResult } from "../Controls/PinInputDialog";
import IPreLogOnTriggerOptions = Triggers.IPreLogOnTriggerOptions;

/**
 * Example implementation of an PreLogOnTrigger trigger that accepts extra PIN number and modifies extraParameters.
 */
export default class PreLogOnTrigger extends Triggers.PreLogOnTrigger {
    /**
     * Executes the trigger functionality.
     * The operatorId and extraParameters can be updated on the newOptions and this modifies the value used in the LogOn operation.
     * @param {Triggers.IPreLogOnTriggerOptions} options The options provided to the trigger.
     */
    public execute(options: Triggers.IPreLogOnTriggerOptions): Promise<CancelableTriggerResult<IPreLogOnTriggerOptions>> {
        let newOptions: IPreLogOnTriggerOptions = ObjectExtensions.clone(options);
        if (StringExtensions.endsWith(newOptions.grantType, "msr") || StringExtensions.endsWith(newOptions.grantType, "barcode")) {
            return PinInputDialog.getPinNumber(this.context).then((result: IRequestPinNumberResult) => {
                if (!result.canceled) {
                    newOptions.extraParameters = {
                        pin: result.pinNumber
                    };
                    return Promise.resolve(new CancelableTriggerResult(false, newOptions));
                } else {
                    return Promise.resolve(new CancelableTriggerResult(true, newOptions));
                }
            });
        }
        else
        {
            return  Promise.resolve(new CancelableTriggerResult(false, newOptions));
        }
    }
}
