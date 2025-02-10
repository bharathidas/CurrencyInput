import { Component, ReactNode, createElement } from "react";
import CurrencyInput from 'react-currency-input-field';

import "../ui/CurrencyInput.css";

export interface CurrencyInputProps {
    allowDecimals:boolean;
    allowNegativeValue:boolean;
    defaultValue:number;
    value:number | string;
    onLeave?: (value: number | string, isChanged: boolean) => void;
    placeholder?:string;
    decimalsLimit?:number;
    decimalScale?:number;
    fixedDecimalLength?:number;
    prefix?:string;
    suffix?:string;
    decimalSeparator?:string;
    groupSeparator?:string;
    disabled?:boolean;
    disableAbbreviations?:boolean;
    disableGroupSeparators?:boolean;
    maxLength?:number;
    step?:number;
}
interface InputState {
  editedValue?: number | string;
}

export class CurrencyInputComponent extends Component<CurrencyInputProps,InputState> {
  
  //private readonly onChangeHandle = this.onChange.bind(this);
    private readonly onBlurHandle = this.onBlur.bind(this);
  
  readonly state: InputState = { editedValue: undefined };

  componentDidUpdate(prevProps: CurrencyInputProps): void {
      if (this.props.value !== prevProps.value) {
          this.setState({ editedValue: undefined });
      }
  }
  
  render(): ReactNode {
    //console.info('default value:'+this.props.defaultValue);
    //console.info('valuess:'+this.props.value+':::current::::::::'+this.getCurrentValue());
    //console.info('allowDecimals:'+this.props.allowDecimals);
    //console.info('allowNegativeValue:'+this.props.allowNegativeValue);
    let ClassName='currency-input';
    
    return (
        <CurrencyInput 
        allowDecimals={this.props.allowDecimals}
        allowNegativeValue={this.props.allowNegativeValue}
        defaultValue={this.props.defaultValue}
        value={this.getCurrentValue()}
        onValueChange={this.handleValueChange}
        //onChange={this.onChangeHandle}
        onBlur={this.onBlurHandle}
        placeholder={this.props.placeholder}
        decimalsLimit={this.props.decimalsLimit}
        decimalScale={this.props.decimalScale}
        fixedDecimalLength={this.props.fixedDecimalLength}
        prefix={this.props.prefix}
        suffix={this.props.suffix}
        decimalSeparator={this.props.decimalSeparator}
        groupSeparator={this.props.groupSeparator}
        disabled={this.props.disabled}
        disableAbbreviations={this.props.disableAbbreviations}
        disableGroupSeparators={this.props.disableGroupSeparators}
        maxLength={this.props.maxLength}
        step={this.props.step}
        className={ClassName}
       
       
       
        />
    );
  }

  private handleValueChange = (value: string | undefined) => {
    this.setState({ editedValue:value ?? 0 });
  //console.info('Field '+name+' changed to:'+value);
  //console.info('Edit val change'+this.state.editedValue);
};
  private getCurrentValue(): number | string {
    //console.info('getCurrentValue:'+(this.state.editedValue !== undefined ) ? this.state.editedValue : this.props.value);
    //console.info('getCurrentValue editval:'+this.state.editedValue );
    //console.info('getCurrentValue val:'+this.props.value);
    
    return (this.state.editedValue !== undefined ) ? this.state.editedValue : this.props.value;
}
// private onChange(event: ChangeEvent<HTMLInputElement>): void {
//   console.info('typeof event.target.value:'+typeof event.target.value+'::val::'+event.target.value);
//   this.props.value
//   this.setState({ editedValue: event.target.value });
//   console.info('state value::'+this.state.editedValue);
// }

private onBlur(): void {
  //console.info('onblur');
  const inputValue = this.props.value;
  const currentValue = this.getCurrentValue();

  if (this.props.onLeave) {
      this.props.onLeave(currentValue, currentValue !== inputValue);
  }

  this.setState({ editedValue: undefined });
}
}