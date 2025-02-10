import { Component, ReactNode, createElement } from "react";

import { CurrencyInputContainerProps } from "../typings/CurrencyInputProps";
import { CurrencyInputComponent } from "./components/CurrencyInputComponent";
import "./ui/CurrencyInput.css";
//import Big from "big.js";

export class CurrencyInput extends Component<CurrencyInputContainerProps> {
    private readonly onLeaveHandle = this.onLeave.bind(this);
    
    render(): ReactNode {
        let allowDecimals=true;
        //console.info('input allowDecimalsKey outside'+this.props.allowDecimalsKey?.value)
        if(this.props.allowDecimalsKey?.value !== undefined){
            //console.info('input allowDecimalsKey '+this.props.allowDecimalsKey?.value)
            allowDecimals=this.props.allowDecimalsKey?.value
        }
        let allowNegativeValue=true;
        if(this.props.allowNegativeValueKey?.value !== undefined){
            //console.info('input allowNegativeValueKey '+this.props.allowNegativeValueKey?.value)
            allowNegativeValue=this.props.allowNegativeValueKey?.value
        }

        let defaultValue=0;
        if(this.props.defaultValueKey?.value){
            defaultValue=Number(this.props.defaultValueKey?.value)
        }
        let value:number|string=0
        //console.info('typeof value:'+typeof this.props.valueKey?.value);
        if(this.props.valueKey?.value){
            if(typeof this.props.valueKey?.value === "number"){
                value=Number(this.props.valueKey?.value);
            }else if (typeof this.props.valueKey?.value === "string") {
                value=this.props.valueKey?.value;
              }
           
           
        }
        let placeholder=this.props.placeholderKey?.value

        let decimalsLimit=2;
        if(this.props.decimalsLimitKey?.value){
            decimalsLimit=Number(this.props.decimalsLimitKey?.value);
        }
        let decimalScale=0
        if(this.props.decimalScaleKey?.value){
            decimalScale=Number(this.props.decimalScaleKey?.value);
        }
        let fixedDecimalLength=0
        if(this.props.fixedDecimalLengthKey?.value){
            fixedDecimalLength=Number(this.props.fixedDecimalLengthKey?.value);
        }
        let prefix=this.props.prefixKey?.value;
        let suffix=this.props.suffixKey?.value;
        let decimalSeparator=this.props.decimalSeparatorKey?.value;
        let groupSeparator=this.props.groupSeparatorKey?.value;

        let disabled=false;
        if(this.props.disabledKey?.value){
            disabled=this.props.disabledKey?.value
        }
        let disableAbbreviations=false;
        if(this.props.disableAbbreviationsKey?.value){
            disableAbbreviations=this.props.disableAbbreviationsKey?.value
        }
        let disableGroupSeparators=false;
        if(this.props.disableGroupSeparatorsKey?.value){
            disableGroupSeparators=this.props.disableGroupSeparatorsKey?.value
        }
        let maxLength=0
        if(this.props.maxLengthKey?.value){
            maxLength=Number(this.props.maxLengthKey?.value);
        }
        let step=0
        if(this.props.stepKey?.value){
            step=Number(this.props.stepKey?.value);
        }
        
        return (
            <CurrencyInputComponent
                allowDecimals={allowDecimals}
                allowNegativeValue={allowNegativeValue}
                defaultValue={defaultValue}
                value={value}
                onLeave={this.onLeaveHandle}
                placeholder={placeholder}
                decimalsLimit={decimalsLimit}
                decimalScale={decimalScale}
                fixedDecimalLength={fixedDecimalLength}
                prefix={prefix}
                suffix={suffix}
                decimalSeparator={decimalSeparator}
                groupSeparator={groupSeparator}
                disabled={disabled}
                disableAbbreviations={disableAbbreviations}
                disableGroupSeparators={disableGroupSeparators}
                maxLength={maxLength}
                step={step}
                
            />
        );
    }
    private onLeave(value: string, isChanged: boolean): void {
        if (!isChanged) {
            return;
        }
        //console.info('OnLeave: val::'+typeof value+'Va:'+value);
        //console.info('OnLeave: this.props.valueKey::'+typeof this.props.valueKey?.value);
        
        if(this.props.valueKey){
            if(typeof this.props.valueKey?.value === "number"){
                //let bigNum = new Big(value)
                //console.info('OnLeave: inside num::'+bigNum);
                //this.props.valueKey.setValue(bigNum);
            }else if (typeof this.props.valueKey?.value === "string") {
                //console.info('OnLeave: inside string::'+value);
                this.props.valueKey.setValue(value);
              }
        
    }
    }
   
   
}
