import React, { useEffect, useState } from 'react'
import GoogleBtn from '../GoogleBtn/GoogleBtn'
import CSSModules from 'react-css-modules';
import styles from '../style/UploadFile.styl'
import PropTypes from 'prop-types';

function UploadFile(props) {
  let { title, height, width, style, hint, onSubmit, accept, onClose } = props;
  const [files, setFiles] = useState([]);

  useEffect(() => {
    // console.log(files)
  })

  const addFiles = (newFiles) => {
    setFiles([...files, ...newFiles])
  }

  return (
    <div className='whl_uploadfile' style={{ ...style, width, height }}>
      <div className='whl_flex-s-c whl_bottom_split'>
        <div>{title}</div>
        <GoogleBtn str="close" fontsize="20px" width="26px" onClick={onClose} />
      </div>
      <div className='whl_bottom_split whl_uploadfile_body'>
        <div>
          {hint}
        </div>
        <div className=''>
          <label className='whl_upload_btn_wrapper' draggable="true">
            <input type="file" multiple="multiple" required="required" draggable="true" onChange={e => setFiles([...files, ...(e.target.files)])}
              className="whl_hidden_input pointer"
              accept={accept}
            />
            <div className=''>選擇或拖曳檔案至此</div>
          </label>

        </div>
        <div className='whl_files_wrapper'>
          {
            files.map((m, index) =>
              <div key={index} className="whl_file_items whl_flex-s-c">
                <span>{m.name}</span>
                <div className='full_ellipsis'></div>
                <GoogleBtn str="close" fontsize="20px" width="22px" color="red" onClick={e => setFiles(files.filter((f, idx) => idx !== index))} />
              </div>)
          }
        </div>
      </div>
      <div className='whl_flex-s-c'>
        <div></div>
        <button onClick={e => onSubmit(files)} className="whl_button">上傳圖片</button>
      </div>
    </div>
  )
}

UploadFile.propTypes = {
  title: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  styles: PropTypes.object,
  hint: PropTypes.string,
  onSubmit: PropTypes.func,
  accept: PropTypes.string,
  onClose: PropTypes.func,
}

UploadFile.defaultProps = {
  title: "上傳檔案",
  height: "400px",
  width: "100%",
  style: {},
  hint: "從本機上傳",
  onSubmit: (files) => { },
  accept: ".*", // "image/*"
  onClose: () => {},
}

export default CSSModules(UploadFile, styles);