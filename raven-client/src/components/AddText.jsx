import React from 'react';
import { connect } from 'react-redux';
import { addText } from '../actions';

const AddText = ({ dispatch }) => {
    let input;
    return (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault()
              if (!input.value.trim()) {
                return
              }
              dispatch(addText(input.value))
              input.value = ''
            }}
          >
            <input ref={node => (input = node)} />
            <button type="submit">Add Text</button>
          </form>
        </div>
      )
    }

export default connect()(AddText)