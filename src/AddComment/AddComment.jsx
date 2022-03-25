import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Avatar from '../Avatar/Avatar'
import CSSModules from 'react-css-modules'
import styles from '../style/AddComment.styl'
import parse, { domToReact } from 'html-react-parser'

export class AddComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openbutton: false,
            replymode: false,
            editmode: false,
            htmlcomment: ""
        }

        this.commentdes = React.createRef();
    }

    static propTypes = {
        /** 初始留言*/
        defaultcomment: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.object
        ]),
        /** 用戶資訊 `{ mid: 0, name: "None", src: "" }`*/
        userinfo: PropTypes.object,
        /** 取得驗證用, getComment 會回傳完整 checkdata 資料*/
        checkdata: PropTypes.object,
        /** default、edit、reply*/
        mode: PropTypes.string,
        /** 使否顯示頭像*/
        showavatar: PropTypes.bool,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func,
        /** 按下取消按鈕事件， `(false, checkdata) => {}`*/
        clickCancel: PropTypes.func,
        /** 按下(留言/儲存)時傳送留言與 checkdata， `(comment, checkdata) => {}`*/
        getComment: PropTypes.func,
    }

    static defaultProps = {
        defaultcomment: "",
        userinfo: { mid: 0, name: "None", src: "" },
        checkdata: {},
        mode: "default",
        showavatar: true,
        onFocus: (e) => { },
        onBlur: (e) => { },
        clickCancel: (f, checkdata) => { },
        getComment: (comment, checkdata) => { console.log('get', comment) },
    }

    componentDidMount() {
        // this.autoGrow()
        let { mode } = this.props;

        if (mode == "reply") {
            this.commentdes.current.focus();
            this.setState({
                replymode: true
            })
        }
        if (mode == "edit") {
            this.commentdes.current.focus();
            this.setState({
                comment: this.props.defaultcomment,
                editmode: true
            })
        }
    }

    autoGrow = () => {
        let textarea = this.commentdes.current
        if (textarea) {
            let rowct = textarea.value.split('\n').length;
            let h = 1;
            textarea.style.height = h * rowct + 'px';
            let adjustedHeight = 0; //textarea.clientHeight;
            adjustedHeight = Math.max(textarea.scrollHeight, adjustedHeight);
            adjustedHeight = Math.max(textarea.scrollHeight, adjustedHeight);
            if (adjustedHeight > textarea.clientHeight) {
                textarea.style.height = adjustedHeight + 'px';
            }
        }
    }

    setComment = (e) => {
        this.setState({
            htmlcomment: e.target.innerHTML,
        })
    }

    setOpenButton = (tf) => {
        let { htmlcomment } = this.state;
        if (!tf) {
            htmlcomment = ""
            this.commentdes.current.innerHTML = ""
        }
        this.setState({
            openbutton: tf,
            htmlcomment: htmlcomment
        })
    }

    keyUp = (e) => {
        if (e.target.innerText === '\n') e.target.innerHTML = ''
    }

    placeCaretAtEnd = (el) => {
        el = el.target
        el.focus();
        if (typeof window.getSelection != "undefined"
            && typeof document.createRange != "undefined") {
            var range = document.createRange();
            range.selectNodeContents(el);
            range.collapse(false);
            var sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        } else if (typeof document.body.createTextRange != "undefined") {
            var textRange = document.body.createTextRange();
            textRange.moveToElementText(el);
            textRange.collapse(false);
            textRange.select();
        }
    }

    render() {
        const { userinfo, getComment, onFocus, onBlur, clickCancel, checkdata, showavatar, defaultcomment } = this.props;
        const { openbutton, replymode, editmode, htmlcomment } = this.state;
        var skiphref = /<a[^]+\/a>/ig;
        var regex = /(<([^>]+)>)/ig;
        var strip = /^\s+|\s+$/g;
        let checklen = htmlcomment.replace(skiphref, "").replace(regex, "").replace(strip, '').replace('&nbsp;', '').length;

        const options = {
            replace: ({ attribs, children }) => {
                if (!attribs) { return; }

                if (attribs.class === 'tag_name') {
                    return (
                        <Link to={attribs.href} className={attribs.class} suppressContentEditableWarning="true" contentEditable="false">
                            {domToReact(children, options)}</Link>);
                }
            }
        };

        return (
            <div className="whl_addcomment">
                {!!showavatar &&
                    <Avatar alt={userinfo.name} src={userinfo.src}></Avatar>}
                <div className={`comment_wrapper ${showavatar ? `show_avatar` : ""}`}>
                    {/* <textarea className="addcomment" placeholder={`使用以下身分公布開放留言：${userinfo.name}`} onFocus={onFocus} onBlur={onBlur}
                        onClick={e => this.setOpenButton(true)} onChange={this.setComment} value={comment} ref={this.commentdes}>
                    </textarea> */}
                    <div className="addcomment" contentEditable="true" suppressContentEditableWarning={true} aria-label={`使用以下身分公布開放留言：${userinfo.name}`}
                        onKeyUp={e => { this.setComment(e); this.keyUp(e) }} onInput={this.setComment} ref={this.commentdes} onClick={e => this.setOpenButton(true)}
                        spellCheck={false} onFocus={e => { onFocus(e); this.placeCaretAtEnd(e); }}
                        onBlur={onBlur}>{typeof defaultcomment == 'string' ? parse(defaultcomment, options) : defaultcomment}</div>

                    {(openbutton || replymode || editmode) &&
                        <div className="addcommentbtn">
                            <div></div>
                            <div>
                                <div className={`ctcancel pointer`} onClick={e => { this.setOpenButton(false); clickCancel(false, checkdata) }}><span>取消</span></div>
                                <div className={`ctsubmit ${checklen > 0 ? "yessubmit pointer" : "nosubmit"}`}
                                    onClick={e => {
                                        if (checklen > 0) { getComment(this.commentdes.current.innerHTML, checkdata); this.setOpenButton(false); }
                                    }}>
                                    <span>{!editmode ? `留言` : `儲存`}</span>
                                </div>
                            </div>
                        </div>
                    }
                </div>

            </div>
        )
    }
}

export default CSSModules(AddComment, styles)