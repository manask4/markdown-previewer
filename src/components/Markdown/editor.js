import React from "react"
import "./markdown.css"

class Editor extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.props.parentCallback(e.target.value);    
  }

  render() {
    return (
      <textarea id="editor" value={this.props.editorValue} onChange={this.handleChange} className='box' />
    )
  }
}

export default Editor