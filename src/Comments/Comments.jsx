import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/Comments.styl'
import Avatar from '../Avatar/Avatar'
import { AddComment } from '../AddComment/AddComment'
import TimeConvert from '../TimeConvert/TimeConvert'
import parse, { domToReact } from 'html-react-parser'
import { Link } from 'react-router-dom'

export class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            childcid: null,
        }
    }
    static propTypes = {
        /** 留言陣列，相關參數在 VIEW CODE 之中*/
        commentlist: PropTypes.array,
        /** 用戶資訊 `{ mid: 1, name: "WHL", src: "" }`*/
        userinfo: PropTypes.object,
        /** 新增留言，`(pcid, comment) => { }`*/
        addComment: PropTypes.func,
        /** 修改留言，`(cid, pcid, comment) => { }`*/
        editComment: PropTypes.func,
        /** 取得子留言，`(vid, pcid) => { }`*/
        getRelComment: PropTypes.func,
        /** 刪除留言，`(cid, pcid) => { }`*/
        delComment: PropTypes.func,
        /** 對留言表達贊同或不贊同，`(cid, pcid, tf) => { }`*/
        setCommentLike: PropTypes.func,
        /** 其他訊息，例如按下回覆卻尚未登入 `{ err: "reply", msg: "按了回覆，尚未登入" }`*/
        otherMsg: PropTypes.func,
        /** `@人名` 的路徑，用 `${mid}` 來代表變數 mid，沒給的話 mid 會接在結尾*/
        userpath: PropTypes.string,
        /** 進入編輯或回覆留言時*/
        commentFocus: PropTypes.func,
        /** 離開編輯或回覆留言時*/
        commentBlur: PropTypes.func,
    }

    static defaultProps = {
        commentlist: [],
        userinfo: { mid: 1, name: "WHL", src: "" },
        addComment: (pcid, comment) => { console.log({ pcid, comment }) },
        editComment: (cid, pcid, comment) => { console.log({ cid, pcid, comment }) },
        getRelComment: (vid, cid) => { console.log({ vid, cid }) },
        delComment: (cid, pcid) => { console.log({ cid, pcid }) },
        setCommentLike: (cid, pcid, tf) => { console.log({ cid, pcid, tf }) },
        otherMsg: (msg) => { console.log(msg) },
        userpath: "/u/${mid}",
        commentFocus: (e) => { },
        commentBlur: (e) => { },
    }

    openChild = (cid) => {
        this.setState({ childcid: cid })
    }

    addComment = (cid, pcid, comment) => {
        const { addComment } = this.props;
        addComment(pcid, comment)
        this.openChild(cid)
    }

    getNewComment = (newcomment, checkdata) => {
        const { addComment } = this.props;
        addComment(-1, newcomment)
    }

    render() {
        const { commentlist, userinfo, editComment, delComment, getRelComment, setCommentLike, otherMsg, userpath, commentFocus, commentBlur } = this.props;
        const { childcid } = this.state;

        return (
            <div className="whl_comments">
                {!!userinfo.mid &&
                    <div className="summitcommentmargin">
                        <AddComment userinfo={userinfo} getComment={this.getNewComment} onFocus={commentFocus} onBlur={commentBlur}></AddComment>
                    </div>
                }
                {
                    commentlist.map(m =>
                        <div className="parentcomment" key={m.cid}>
                            <UserComment comment={m} userinfo={userinfo} addComment={this.addComment} editComment={editComment} delComment={delComment} pcid={-1}
                                setCommentLike={setCommentLike} otherMsg={otherMsg} userpath={userpath} commentFocus={commentFocus} commentBlur={commentBlur}></UserComment>
                            <ReplyComments recommentct={m.recomment} child={m.child} isopen={childcid == m.cid} getRelComment={getRelComment} vid={m.vid}
                                userinfo={userinfo} addComment={this.addComment} editComment={editComment} delComment={delComment} pcid={m.cid}
                                setCommentLike={setCommentLike} otherMsg={otherMsg} userpath={userpath} commentFocus={commentFocus} commentBlur={commentBlur}></ReplyComments>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default CSSModules(Comments, styles)

import ThumbUpDown from '../ThumbUpDown/ThumbUpDown'

export class UserComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editmode: false,
            replymode: false,
            moreinfo: false, // 打開更多
            moreopen: false, // 滑鼠移到留言框內
            defaultcomment: "",
        }
    }

    componentDidMount() {
        document.addEventListener('click', this.ousideClick);

    }

    componentWillUnmount() {
        document.removeEventListener('click', this.ousideClick);
    }

    moreOpen = (tf) => {
        this.setState({ moreopen: tf });
    }

    openMoreInfo = (e) => {
        e.nativeEvent.stopImmediatePropagation();
        this.setState({ moreinfo: !this.state.moreinfo });
    }

    ousideClick = (e) => {
        this.setState({ moreinfo: false });
    }

    leaveMoreInfo = (e) => {
        e.nativeEvent.stopImmediatePropagation();
    }

    openReply = (tf = false) => {
        const { comment, pcid, userpath } = this.props;
        const { mid, username } = comment
        let defaultcomment = ""
        let newuserpath = ""
        if (userpath.match(/\$\{mid\}/g) != null)
            newuserpath = userpath.replace(/\$\{mid\}/, mid)
        else
            newuserpath = userpath + mid
        if (pcid != -1)
            defaultcomment = <Fragment>
                <Link to={newuserpath} className="tag_name" contentEditable="false" suppressContentEditableWarning={true}>&nbsp;@{username}&nbsp;</Link>&nbsp;
            </Fragment>
        this.setState({ replymode: tf, defaultcomment: defaultcomment });
    }

    getReply = (newcomment, checkdata) => {
        const { addComment, pcid, comment } = this.props;
        const { cid } = comment;
        this.openReply();
        let newpcid = (pcid == -1 ? cid : pcid)
        console.log(newpcid, newcomment)
        addComment(cid, newpcid, newcomment)
    }

    getEdit = (newcomment, checkdata) => {
        const { editComment, pcid, comment } = this.props;
        const { cid } = comment;
        this.openEdit();
        editComment(cid, pcid, newcomment)
    }

    openEdit = (tf = false) => {
        this.ousideClick()
        this.setState({ editmode: tf, })
    }

    render() {
        const { comment, userinfo, delComment, setCommentLike, pcid, otherMsg, userpath, commentFocus, commentBlur } = this.props;
        const { username, usersrc, des, since, mid, like, unlike, userlike, cid } = comment;
        const { editmode, replymode, moreopen, moreinfo, defaultcomment } = this.state;
        const options = {
            replace: ({ attribs, children }) => {
                if (!attribs) {
                    return;
                }

                if (attribs.class === 'tag_name') {
                    return (
                        <Link to={attribs.href} className={attribs.class}>
                            {domToReact(children, options)}
                        </Link>
                    );
                }
            }
        };

        return (
            <div className="whl_usercomment" onMouseOver={e => this.moreOpen(true)} onMouseLeave={e => this.moreOpen(false)}>
                <div className="comment_more">
                    {(moreopen || moreinfo) && userinfo.mid == mid &&
                        <div className="moreabsolute"><span className="material-icons-outlined" onClick={e => this.openMoreInfo(e)}>
                            more_vert</span></div>}
                    {!!moreinfo &&
                        <ul className="comment_moreinfo" onClick={e => this.leaveMoreInfo(e)}>
                            <li onClick={e => this.openEdit(true)}><span>
                                {/* <span className="material-icons-outlined">edit</span> */}
                                編輯</span></li>
                            <li onClick={e => delComment(cid, pcid)}><span>刪除</span></li>
                        </ul>}
                </div>
                <Avatar alt={username} src={usersrc}
                    link={userpath.match(/\$\{mid\}/g) != null ? userpath.replace(/\$\{mid\}/, mid) : userpath + mid}></Avatar>
                <div>
                    {
                        !!editmode ?
                            <AddComment userinfo={userinfo} getComment={this.getEdit} defaultcomment={des}
                                clickCancel={this.openEdit} mode="edit" showavatar={false} onFocus={commentFocus} onBlur={commentBlur}></AddComment>
                            :
                            <div>
                                <div className="name_time"><span className="username">
                                    <b>{username}</b></span><span className="username"><TimeConvert time={since} updatetime={10}></TimeConvert></span>
                                </div>
                                <div className="cdes">
                                    {/* <span>{des}</span> */}
                                    {parse(des || "", options)}
                                </div>
                                <div className="comment_like_unlike">
                                    <ThumbUpDown likect={like} unlikect={unlike} userlike={userlike}
                                        clickLike={e => userinfo.mid ? setCommentLike(cid, pcid, true) : otherMsg({ err: "like", msg: "按了喜歡，尚未登入" })}
                                        clickUnLike={e => userinfo.mid ? setCommentLike(cid, pcid, false) : otherMsg({ err: "unlike", msg: "按了不喜歡，尚未登入" })}></ThumbUpDown>
                                    <div className="pointer" onClick={e => {
                                        userinfo.mid ? this.openReply(true) : otherMsg({ err: "reply", msg: "按了回覆，尚未登入" })
                                    }}>
                                        <span>回覆</span>
                                    </div>
                                </div>
                            </div>
                    }

                    {replymode && <div className="summitcomment">
                        <AddComment userinfo={userinfo} getComment={this.getReply} defaultcomment={defaultcomment}
                            clickCancel={this.openReply} mode="edit" showavatar={true} onFocus={commentFocus} onBlur={commentBlur}></AddComment>
                    </div>}
                </div>
            </div>
        )
    }
}

export class ReplyComments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openchild: false
        };
    }

    componentDidUpdate = (prevProps, prevState) => {
        const { isopen, cid } = this.props;
        if (isopen != prevProps.isopen && this.state.openchild != true) {
            this.setState({ openchild: isopen })
        }
    }

    openChild = () => {
        this.setState({
            openchild: !this.state.openchild
        })
    }

    render() {
        const { recommentct, child, userinfo, addComment, editComment, delComment, getRelComment, setCommentLike, pcid, vid, otherMsg,
            userpath, commentFocus, commentBlur } = this.props;
        const { openchild } = this.state;

        return (
            <div className="whl_replycomments">
                {recommentct > 0 && <div>
                    <span className="pointer reply_comment" onClick={e => (!openchild && getRelComment(vid, pcid), this.openChild())}>
                        <span className="material-icons-outlined">
                            arrow_drop_down</span><span>&ensp;{!openchild ? `查看${recommentct == 1 ? "" : ` ${recommentct} 則`}` : "隱藏"}回覆</span></span></div>}
                {
                    openchild && child &&
                    <div>
                        {
                            child.map(m =>
                                <UserComment key={m.cid} comment={m} userinfo={userinfo} addComment={addComment} editComment={editComment}
                                    delComment={delComment} pcid={pcid} setCommentLike={setCommentLike} otherMsg={otherMsg} userpath={userpath}
                                    commentFocus={commentFocus} commentBlur={commentBlur}></UserComment>)
                        }
                    </div>

                }
            </div>
        )
    }
}