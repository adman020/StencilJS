import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'my-dropdown',
  styleUrl: 'my-dropdown.css'
})
export class Dropdown {

  // prop decorator with custom properties
  @Prop() title: string = '';

  // Data/state that can change in the component should use the state decorator
  @State() toggle: boolean = false;

  render() {
    return (
      <div>
        <button onClick={() => this.toggleClick()}>
          {this.title} {this.toggle ? <span>&#9650;</span> : <span>&#9660;</span>}
        </button>

        <div style={{ display: this.toggle ? 'block' : 'none' }}>
          <slot></slot>
        </div>
      </div>
    )
  }

  // When clicked invert the state of the toggle property
  toggleClick() {
    this.toggle = !this.toggle;
  }
}