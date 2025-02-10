/**
 * This file was generated from CurrencyInput.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { EditableValue } from "mendix";
import { Big } from "big.js";

export interface CurrencyInputContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    valueKey?: EditableValue<string>;
    defaultValueKey?: EditableValue<string | Big>;
    allowDecimalsKey?: EditableValue<boolean>;
    allowNegativeValueKey?: EditableValue<boolean>;
    placeholderKey?: EditableValue<string>;
    decimalsLimitKey?: EditableValue<Big>;
    decimalScaleKey?: EditableValue<Big>;
    fixedDecimalLengthKey?: EditableValue<Big>;
    prefixKey?: EditableValue<string>;
    suffixKey?: EditableValue<string>;
    decimalSeparatorKey?: EditableValue<string>;
    groupSeparatorKey?: EditableValue<string>;
    disabledKey?: EditableValue<boolean>;
    disableAbbreviationsKey?: EditableValue<boolean>;
    disableGroupSeparatorsKey?: EditableValue<boolean>;
    maxLengthKey?: EditableValue<Big>;
    stepKey?: EditableValue<Big>;
}

export interface CurrencyInputPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    renderMode?: "design" | "xray" | "structure";
    valueKey: string;
    defaultValueKey: string;
    allowDecimalsKey: string;
    allowNegativeValueKey: string;
    placeholderKey: string;
    decimalsLimitKey: string;
    decimalScaleKey: string;
    fixedDecimalLengthKey: string;
    prefixKey: string;
    suffixKey: string;
    decimalSeparatorKey: string;
    groupSeparatorKey: string;
    disabledKey: string;
    disableAbbreviationsKey: string;
    disableGroupSeparatorsKey: string;
    maxLengthKey: string;
    stepKey: string;
}
