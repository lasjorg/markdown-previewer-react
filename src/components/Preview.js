import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import marked from 'marked';
import 'highlight.js/styles/github.css';

marked.setOptions({
  breaks: true,
  highlight: function(code) {
    return require('highlight.js').highlightAuto(code).value;
  }
});

const renderer = new marked.Renderer();

renderer.link = function(href, title, text) {
  return `<a href=${href} target="_blank" rel="noopener noreferrer">${text}</a>`;
};

const Preview = props => {
  const markDown = marked(props.markDown, { renderer: renderer });
  return (
    <React.Fragment>
      <div className="preview">{ReactHtmlParser(markDown)}</div>
    </React.Fragment>
  );
};

export default Preview;
