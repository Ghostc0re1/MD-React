import React, { useState } from 'react';
import { marked } from 'marked';
import './MarkdownPreviewer.css'; // Assume you have a CSS file for styles
import logo from './logo.svg'

const MarkdownPreviewer = () => {
  const [markdown, setMarkdown] = useState(`# Welcome to my React Markdown Previewer!

  ## Sub-heading
  This is a sub-heading...
  
  ### Cool Stuff
  And here's some other cool stuff:
  
  Here's some inline code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  
  **Bold Text**
  You can also make text **bold**! 
  
  _Italic Text_
  Or _italic_.
  
  _Combined **Bold and Italic**_
  Or... go crazy combining them _**both!**_
  
  [My GitHub](https://github.com)
  And feel free to go check out [my GitHub](https://github.com), maybe give it a star?
  
  > Blockquotes are very handy in email to emulate reply text.
  > This line is part of the same quote.
  
  - List item
    - And of course there are lists.
      - Some are bulleted.
         - With different indentation levels.
            - That look like this.
  
  ![React Logo](${logo})
  Here's an image of the React Logo.
  `);  

    const handleChange = (event) => {
      setMarkdown(event.target.value);
    };
  
    // Convert markdown to HTML
    const getMarkdownText = () => {
      const rawMarkup = marked(markdown, { breaks: true });
      return { __html: rawMarkup };
    };
  
    return (
      <div className="markdown-previewer-container" style={{ display: 'flex', height: '100vh' }}>
        <div className="editor-container" style={{ flex: 1 }}>
          <textarea id="editor" value={markdown} onChange={handleChange} style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="preview-container" style={{ flex: 1 }}>
          <div id="preview" dangerouslySetInnerHTML={getMarkdownText()} style={{ width: '100%', height: '100%', overflowY: 'scroll' }} />
        </div>
      </div>
    );
  };
  
  export default MarkdownPreviewer;