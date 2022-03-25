import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types';

function TextArea(props) {
  const ref = useRef(null);
  const { value, onChange, style, className, autoFocus, placeholder } = props;
  const [text, setText] = useState("");

  const autoGrow = (textarea) => {
    if (textarea) {
      let rowct = textarea.value.split('\n').length;
      let h = 1.0;
      textarea.style.height = h * rowct + 'px';
      let adjustedHeight = textarea.clientHeight;
      adjustedHeight = Math.max(textarea.scrollHeight, adjustedHeight);
      adjustedHeight = Math.max(textarea.scrollHeight, adjustedHeight);
      if (adjustedHeight > textarea.clientHeight) {
        let padding = 0;
        if (window.getComputedStyle(textarea).getPropertyValue('box-sizing') == 'border-box')
          padding = parseInt(window.getComputedStyle(textarea).getPropertyValue('padding-top').replace('px', '')) +
            parseInt(window.getComputedStyle(textarea).getPropertyValue('padding-bottom').replace('px', ''));
        textarea.style.height = adjustedHeight + padding / 2 + 'px';
      }
    }
  }

  useEffect(() => {
    autoGrow(ref.current);
    onChange(text)
  }, [text])

  useEffect(() => {
    setText(value);
  }, [value])

  return (
    <textarea
      ref={ref}
      onChange={e => setText(e.target.value)}
      defaultValue={text}
      style={style}
      className={className}
      autoFocus={autoFocus}
      placeholder={placeholder}
    />
  )
}

TextArea.propTypes = {
  /** 預設文字*/
  value: PropTypes.string,
  /** 當輸入框內內容改變時，(text) => {}*/
  onChange: PropTypes.func,
  /** style*/
  style: PropTypes.object,
  /** className*/
  className: PropTypes.string,
  /** 提示文字*/
  placeholder: PropTypes.string,
}

TextArea.defaultProps = {
  value: "",
  onChange: (text) => { },
  style: {},
  className: "whl_textarea",
  placeholder: "placeholder",
}

export default TextArea;