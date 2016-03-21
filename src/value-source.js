import React from 'react';

/*
  Replacement for deprecated / buggy <LinkedInput/>

  Usage:

  <ValueSourcedInput type="text"       valueSource={createValueSource(this, 'name')}/>
  <ValueSourcedInput type="checkbox" checkedSource={createValueSource(this, 'male')}/>

  You probably want to call createValueSource() in a containing components, and pass its
  valueSource to child components.

*/


function defaultValue(component) {
  return (component.props['type'] === 'checkbox') ? false : '';
}

function value(component, propertyName) {
  return (component.state && component.state[propertyName]) ? component.state[propertyName] : defaultValue(component);
}

export function createValueSource(component, propertyName) {
  return {
    value: value(component, propertyName),
    requestChange: function(newValue) {
      component.setState({[propertyName]: newValue});
    }
  }
}

export function ValueSourcedInput(props) {
  var newProps = Object.assign({}, props);
  if (props.valueSource) {
    newProps.value = props.valueSource.value;
    newProps.onChange = event => props.valueSource.requestChange(event.target.value)
    delete newProps.valueSource;
  } else if (props.checkedSource) {
    newProps.checked = props.checkedSource.value;
    newProps.onChange = event => props.checkedSource.requestChange(event.target.checked)
    delete newProps.checkedSource;
  } else {
    console.warn("<ValueSourcedInput/> is missing property valueSource or checkedSource");
  }
  return <input {...newProps}/>
}
