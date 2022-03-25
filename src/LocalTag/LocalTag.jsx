import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/LocalTag.styl'

export class LocalTag extends Component {
    constructor(props) {
        super(props);
        let localtags = [] // JSON.parse(localStorage.getItem(localname)) ||
        this.state = {
            localtags: localtags
        };
    }

    static propTypes = {
        /** 標籤陣列*/
        tags: PropTypes.array,
        /** 目前所在標籤 CID*/
        nowtag: PropTypes.number,
        /** localstorage 名稱*/
        localname: PropTypes.string,
        /** localstorage 名稱*/
        addname: PropTypes.string,
        /** 標籤打開狀態(是否顯示標籤)*/
        opentags: PropTypes.bool,
        /** React.createRef()*/
        tagref: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })]),
        /** 切換標籤 CID*/
        setCID: PropTypes.func,
        /** 切換是否打開標籤列表*/
        setOpenTags: PropTypes.func,
        /** 按下新增分類事件*/
        clickAdd: PropTypes.func,
        /** 顯示 add 按鈕*/
        show_add_btn: PropTypes.bool,
    }

    static defaultProps = {
        tags: [{ CID: 1, CName: "標籤一" }],
        nowtag: 1,
        localname: "localtag",
        addname: "新增分類",
        tagref: null,
        opentags: true,
        setCID: (cid) => cid,
        setOpenTags: (tf) => tf,
        clickAdd: () => { },
        show_add_btn: true,
    }

    componentDidMount() {
        const { nowtag, setCID, localname } = this.props;
        this.updateTags();
        let localtags = JSON.parse(localStorage.getItem(localname)) || []
        if ((nowtag == null || nowtag == 0) && localtags.length > 0) {
            setCID(localtags[0].cid)
        }
    }

    componentDidUpdate = (prevProps, prevState) => {
        let { nowtag, setCID, tags, localname } = this.props;
        let localtags = JSON.parse(localStorage.getItem(localname)) || []
        if ((nowtag == null || nowtag == 0) && localtags.length > 0) {
            setCID(localtags[0].cid)
        }
        if (nowtag != null && nowtag != 0 && localtags.filter(f => f.cid == nowtag).length == 0 && tags.filter(f => f.CID == nowtag).length > 0) {
            let { CName, CID } = tags.filter(f => f.CID == nowtag)[0]
            this.addItem(CName, CID)
        }
        if ((tags != null && tags.length >= localtags.length) || tags != null) {
            localtags.map(m => {
                if (tags.filter(f => f.CID == m.cid).length == 0) {
                    this.delItem(m.cid)
                }
                if (tags.filter(f => f.CID == m.cid && f.CName != m.tagname).length > 0) {
                    this.updateItems()
                }
            })
        }
        if (tags != null && prevProps.tags != null && prevProps.tags.length != 0 && tags.length == 0) {
            localStorage.setItem(localname, JSON.stringify([]))
            this.updateTags()
        }
    }

    updateTags = () => {
        const { localname } = this.props;
        let localtags = JSON.parse(localStorage.getItem(localname)) || []
        this.setState({
            localtags: localtags
        })
    }

    updateItems = () => {
        const { tags, localname } = this.props;
        let localtags = JSON.parse(localStorage.getItem(localname)) || []
        localtags.map((m, index) => {
            if (tags.filter(f => f.CID == m.cid).length > 0) {
                localtags[index].tagname = tags.filter(f => f.CID == m.cid)[0].CName
            }

        })
        localStorage.setItem(localname, JSON.stringify(localtags))
        this.updateTags()
    }

    addItem = (tagname, cid) => {
        const { localname } = this.props;
        let localtags = JSON.parse(localStorage.getItem(localname)) || []
        if (localtags.filter(f => f.cid == cid).length == 0)
            localtags.push({ tagname, cid })
        localStorage.setItem(localname, JSON.stringify(localtags))
        const { setOpenTags } = this.props;
        setOpenTags(false)
        this.updateTags()
    }

    delItem = (cid) => {
        const { localname } = this.props;
        let localtags = JSON.parse(localStorage.getItem(localname)) || []
        localtags = localtags.filter(f => f.cid != cid)
        localStorage.setItem(localname, JSON.stringify(localtags))
        const { setCID } = this.props;
        if (localtags.length == 0) setCID(null)
        else setCID(localtags[0].cid)
        this.updateTags()
    }

    render() {
        let { tags, nowtag, setCID, opentags, setOpenTags, tagref, clickAdd, addname, show_add_btn } = this.props
        const { localtags } = this.state;
        !!tags || (tags = []);

        return (
            <div className="collectiontag">
                <div ref={tagref}>
                    <div className="storagetab">
                        <div className="flex tab">
                            {
                                localtags.map(m =>
                                    <div key={m.cid} title={m.tagname} className={`ltags${m.cid == nowtag ? " tabselect" : ""}`}>
                                        <div className="ltagcover" onClick={e => setCID(m.cid)}></div>
                                        <span className="oneline">{m.tagname}</span>
                                        <div className="relative pointer align-items" onClick={(e) => this.delItem(m.cid)}>
                                            <span className="material-icons-outlined close">close</span>
                                        </div>
                                    </div>)
                            }
                        </div>
                        <div className="flex align-items">
                            {localtags.length > 0 &&
                                <div className="updown pointer" onClick={e => setOpenTags(!opentags)}>
                                    {/* <img src={ !opentags ? arrow_down : arrow_up }></img> */}
                                    <span className="material-icons-outlined">
                                        {opentags ? "arrow_drop_up" : "arrow_drop_down"}
                                    </span>
                                </div>}
                            {
                                show_add_btn &&
                                <div className="ctags pointer align-items" onClick={e => clickAdd()}>
                                    <span className="material-icons-outlined add">add</span><span>{addname}</span>
                                </div>
                            }
                        </div>
                    </div>
                    {
                        (!!opentags || localtags.length == 0) &&
                        <div className="flex alltags">
                            {tags.map(m =>
                                <div key={m.CID} className={`ctags pointer${m.CID == nowtag ? " cselect" : ""}`}
                                    onClick={e => (setCID(m.CID), this.addItem(m.CName, m.CID))} title={m.CName}>
                                    {m.CName}
                                </div>
                            )}
                        </div>
                    }
                </div>

            </div>
        );
    }
}
export default CSSModules(LocalTag, styles)