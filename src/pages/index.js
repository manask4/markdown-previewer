import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Editor from "../components/Markdown/editor"
import Previewer from "../components/Markdown/previewer"

const placeholder = `## Welcome to my React Markdown Previewer!
### This is a sub-heading...
#### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function greetMe(name) {
  return 'Hello ' + name;
}
\`\`\`
[Google](https://www.google.com)
`;

class IndexPage extends React.Component {
  constructor() {
    super()
    this.state = {
      input: placeholder,
      output: '',
    }
  }

  updateInput = (newInput) => {
    this.setState({
      input: newInput
    })
  }

  render() {
    return (
      <Layout>
      <SEO title="Home" />
      <div className="container" style={{display: 'flex'}}>
        <Editor editorValue={this.state.input} parentCallback={this.updateInput} />
        <Previewer input={this.state.input}/>
      </div>
      </Layout>
    )
  }
}

export default IndexPage
