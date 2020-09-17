import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Component, OnInit, ElementRef, Input, OnDestroy, OnChanges, AfterViewInit, ViewEncapsulation, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { Switch, SwitchProps } from "@patternfly/react-core";

export class ReactBase {
  protected refElement: ElementRef
  constructor(refElement: ElementRef) {
    this.refElement = refElement;
  }
}

@Component({
  selector: 'pfc-switch',
  template: '',
  styleUrls: [
    "../../../../node_modules/@patternfly/react-styles/css/components/Switch/switch.css"],
  encapsulation: ViewEncapsulation.None,

})
export class SwitchComponent extends ReactBase implements OnInit, OnInit, OnDestroy, OnChanges, AfterViewInit {

  @Input() id?: string;
  /** Additional classes added to the Switch */
  @Input() className?: string;
  /** Text value for the label when on */
  @Input() label?: React.ReactNode;
  /** Text value for the label when off */
  @Input() labelOff?: React.ReactNode;
  /** Flag to show if the Switch is checked. */
  @Input() isChecked?: boolean;
  /** Flag to show if the Switch is disabled. */
  @Input() isDisabled?: boolean;
  /** A callback for when the Switch selection changes. (isChecked, event) => {} */
  @Output() onChange = new EventEmitter<{checked: boolean, event: React.FormEvent<HTMLInputElement>}>();
  /** Adds accessible text to the Switch, and should describe the isChecked="true" state. When label is defined, aria-label should be set to the text string that is visible when isChecked is true. */
  @Input() 'aria-label'?: string;

  constructor(elementRef: ElementRef) {
    super(elementRef);
  }

  getProps(): SwitchProps {
    return {
      id: this.id,
      className: this.className,
      label: this.label,
      labelOff: this.labelOff,
      isChecked: this.isChecked,
      isDisabled: this.isDisabled,
      onChange: (checked, event) => this.onChange.emit({checked, event}),
      'aria-label': this["aria-label"],
    };
  }
  ngOnDestroy(): void {
    
  }

  ngOnInit(): void {
  }


  protected render() {
    var props = this.getProps();
    console.log(props);
    if (!!this.refElement.nativeElement) {
      ReactDOM.render(React.createElement(Switch, props), this.refElement.nativeElement);
    }
  }

  ngOnChanges() {
    this.render();
  }

  ngAfterViewInit() {
    this.render();
  }

}
