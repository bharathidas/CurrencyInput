import { Component, ReactNode, createElement } from "react";
import { CurrencyInputPreviewProps } from "../typings/CurrencyInputProps";

export class preview extends Component<CurrencyInputPreviewProps> {
    render(): ReactNode {
        return (
            <div ref={this.parentInline}>
                
            </div>
        );
    }

    private parentInline(node?: HTMLElement | null): void {
        // Temporary fix, the web modeler add a containing div, to render inline we need to change it.
        if (node && node.parentElement && node.parentElement.parentElement) {
            node.parentElement.parentElement.style.display = "inline-block";
        }
    }

    
}

export function getPreviewCss(): string {
    return require("./ui/CurrencyInput.css");
}
