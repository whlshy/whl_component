import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/VideoItem.styl'

export class VideoItem extends Component {
    static propTypes = {
        /** 影片流水號*/
        oid: PropTypes.number,
        /** youtube 的 video id*/
        videoid: PropTypes.string,
        /** 影片標題*/
        title: PropTypes.string,
        /** 頻道標題*/
        channeltitle: PropTypes.string,
        /** default, history, small*/
        mode: PropTypes.string,
        /** 觀看次數*/
        nclick: PropTypes.number,
        /** 時間，用在 mode="history"*/
        since: PropTypes.string,
        /** 按下影片連結 (oid) => {}*/
        linkToVideo: PropTypes.func,
        /** 按下頻道連結 (oid) => {}*/
        linkToChannel: PropTypes.func,
    }
    static defaultProps = {
        oid: 4282,
        videoid: "m3jtcV9yMDk",
        title: "【Python 與 C 的 LeetCode 六月挑戰】第八天 (Power of Two)",
        channeltitle: "Feis Studio",
        mode: "default",
        nclick: 0,
        since: "2021-06-08T12:01:26.850Z",
        linkToVideo: (oid) => { console.log('linkToVideo') },
        linkToChannel: (oid) => { console.log('linkToChannel') },
    }

    linkToVideo = () => {
        const { uri } = this.props;
        console.log(this.props)
        this.props.history.push(uri)
    }

    render() {
        let { oid, videoid, title, channeltitle, nclick, since, mode, linkToVideo, linkToChannel } = this.props;
        !!title || (title = "")
        if(mode != "history" && mode != "small")
            mode = "default";
        return (
            <div className="videoitem">
                <div className={ `${mode == "small" ? `edu-ytimg` : mode != "history" ? "edu-ytbigimg" : ""} pointer relative` }>
                    { mode != "small" &&
                        <div className="edu-cover" onClick={ (e) => linkToVideo(oid) }></div> }
                    <div className={ mode == "history" ? "edu-historyvideo" : "" }>
                        <div onClick={ (e) => linkToVideo(oid) } className={ `${mode != "small" ? `relative` : `edu-ytimg pointer`}` }>
                            <img width={ mode != "small" ? `300px` : `210px` } className={ `${mode != "history" ? "" : "edu-historyimg"}` }
                                src={ `https://i.ytimg.com/vi/${videoid}/mqdefault.jpg` }></img>
                            { mode != "history" &&
                                <span className="twoline yttitle" title={ title }>{ title }</span> }
                            { mode == "small" &&
                                <span className="oneline ytviewct yttitle">觀看次數：{ nclick }</span> }
                        </div>
                        { mode != "small" &&
                            <div>
                                { mode == "history" &&
                                    <div>
                                        <span className="twoline edu-historytitle" title={ title }>{ title }</span>
                                    </div> }
                                <div className="channellink">
                                    <div onClick={ (e) => linkToChannel(oid) } className="relative">
                                        <span className="oneline ytviewct yttitle" style={ { fontSize: "14px" } } title={ channeltitle }>{ channeltitle }</span>
                                    </div>
                                    <div onClick={ e => this.linkToVideo() }></div>
                                </div>
                                {
                                    mode == "history" ?
                                        <div>
                                            <span>上次觀看時間：{ since.substr(2, 14).replaceAll('-', '/').replaceAll('T', '-') }</span>
                                        </div> :
                                        <div className="inline-block ytviewbottom">
                                            <span className="oneline ytviewct" style={ { fontSize: "14px" } }>觀看次數：{ nclick }</span>
                                        </div>
                                }
                            </div> }
                    </div>
                </div>
            </div>
        );
    }
}

export default CSSModules(VideoItem, styles);