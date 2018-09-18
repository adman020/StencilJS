import { Component, State } from '@stencil/core';


@Component({ // decorator provides meta data
    tag: 'custom-clock',
    styleUrl: 'custom-clock-component.css'
})

// standard JS class
export class CustomClock {

    timer: number;

    // Indicate that the name variable is public and will update if variable is changed
    @State() time: number = Date.now();


// The component is about to load and it has not rendered yet
componentWillLoad() {
    console.log('Component is about to be rendered');
}

// The component has loaded and has already rendered
componentDidLoad() {
    this.timer = window.setInterval(() => {
        this.time = Date.now();
      }, 1000);
    console.log('Component has been rendered');
}

// The component is about to update and re-render
componentWillUpdate() {
    console.log('Component will update and re-render');
}

// The component has just re-rendered
componentDidUpdate() {
    console.log('Component did update');
}

// The component did unload and the element will be destroyed.
componentDidUnload() {
    window.clearInterval(this.timer);
    console.log('Component removed from the DOM');
}



  // what will be pushed to the DOM - shown on screen
  render() {
    const time = new Date(this.time).toLocaleTimeString();

    return (
      <span>{ time }</span>
    );
  }
}