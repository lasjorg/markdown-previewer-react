import React from 'react';

const Editor = props => {
  return (
    <textarea
      className="editor"
      value={props.markDown}
      onChange={props.onChange}
      type="text"
    />
  );
};

export default Editor;
