import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Component, OnInit, ElementRef, Input, OnDestroy, OnChanges, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Button, ButtonProps } from "@patternfly/react-core";

export class ReactBase {
  protected refElement: ElementRef
  constructor(refElement: ElementRef){
    this.refElement = refElement;
  }
}

@Component({
  selector: 'pfc-button',
  template: '',
  styleUrls: [
    "../../../../node_modules/@patternfly/react-styles/css/base/patternfly-variables.css",
    "../../../../node_modules/@patternfly/react-styles/css/components/Button/button.css"],
  encapsulation: ViewEncapsulation.None,

})
export class ButtonComponent  extends ReactBase implements OnInit, ButtonProps, OnInit, OnDestroy, OnChanges, AfterViewInit{
  /** Content rendered inside the button */
  @Input() children?: React.ReactNode;
  /** Additional classes added to the button */
  @Input() className?: string;
  /** Sets the base component to render. defaults to button */
  @Input() component?: React.ElementType<any>;
  /** Adds active styling to button. */
  @Input() isActive?: boolean;
  /** Adds block styling to button */
  @Input() isBlock?: boolean;
  /** Adds disabled styling and disables the button using the disabled html attribute */
  @Input() isDisabled?: boolean;
  /** @beta Adds disabled styling and communicates that the button is disabled using the aria-disabled html attribute */
  @Input() isAriaDisabled?: boolean;
  /** @beta Events to prevent when the button is in an aria-disabled state */
  @Input() inoperableEvents?: string[];
  /** Adds inline styling to a link button */
  @Input() isInline?: boolean;
  /** Sets button type */
  @Input() type?: 'button' | 'submit' | 'reset';
  /** Adds button variant styles */
  @Input() variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'link' | 'plain' | 'control';
  /** Sets position of the link icon */
  @Input() iconPosition?: 'left' | 'right';
  /** Adds accessible text to the button. */
  @Input() 'aria-label'?: string;
  /** Icon for the button. Usable by all variants except for plain. */
  @Input() icon?: React.ReactNode | null;
  /** Sets the button tabindex. */
  @Input() tabIndex?: number;
  /** Adds small styling to the button */
  @Input() isSmall?: boolean;
  /** Adds large styling to the button */
  @Input() isLarge?: boolean;

  constructor(ref: ElementRef) {
    super(ref);
  }
  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }

  ngOnInit(): void {
  }

  getProps() : ButtonProps {
    return {
      children: this.children,
      className: this.className,
      component: this.component,
      isActive: this.isActive,
      isBlock: this.isBlock,
      isDisabled: this.isDisabled,
      isAriaDisabled: this.isAriaDisabled,
      inoperableEvents: this.inoperableEvents,
      isInline: this.isInline,
      type: this.type,
      variant: this.variant,
      iconPosition: this.iconPosition,
      'aria-label': this["aria-label"],
      icon: this.icon,
      tabIndex: this.tabIndex,
      isSmall: this.isSmall,
      isLarge: this.isLarge
    };
  }

  protected render() {
    var props = this.getProps();
    console.log(props);
    if (!!this.refElement.nativeElement) {
      ReactDOM.render(React.createElement(Button, props), this.refElement.nativeElement);
    }
  }

  ngOnChanges() {
    this.render();
  }

  ngAfterViewInit() {
    this.render();
  }

}
