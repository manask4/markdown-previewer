import React from "react"
import marked from 'marked';

import "./markdown.css"

class Previewer extends React.Component {
  constructor(props) {
    super(props)
    this.getMarkdown = this.getMarkdown.bind(this);
  }

  getMarkdown() {
    marked.setOptions({breaks: true});
    const renderer = new marked.Renderer();
    renderer.link = function (href, title, text) {
      return `<a rel="noopener noreferrer" target="_blank" title="${text}" href="${href}">${text}</a>`;
    }
    const markup = marked(this.props.input, {renderer});
    return {__html: markup}
  }

  render() {
    return (
      <div dangerouslySetInnerHTML={this.getMarkdown()} id="preview" className='box'>
        
      </div>
    )
  }
}

export default Previewer