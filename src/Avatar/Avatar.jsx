import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, Route } from 'react-router-dom'
import CSSModules from 'react-css-modules';
import styles from '../style/Avatar.styl'

export class Avatar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: '#000'
        }
    }

    static propTypes = {
        /** 圖像說明*/
        alt: PropTypes.string,
        /** 圖片位置*/
        src: PropTypes.string,
        /** 圖片寬度(預設40)，單位 px*/
        width: PropTypes.number,
        /** 頭像連結網址*/
        link: PropTypes.string,
    }

    static defaultProps = {
        alt: "None",
        src: "",
        width: 40,
        link: ""
    }

    componentDidMount() {
        const { alt } = this.props;
        this.setState({
            color: this.rdmRgbColor(alt)
        })
    }

    componentDidUpdate(prevProps, prevState) {
        const { alt } = this.props;
        if (prevProps.alt != alt) {
            this.setState({
                color: this.rdmRgbColor(alt)
            })
        }
    }

    rdmRgbColor(alt) {
        let arr = [];
        let altint = 0
        for (let i = 0; i < alt.length; i++) {
            altint += alt[i].charCodeAt()
        }
        let altintstr = altint.toString()
        let intct = 0
        for (let i = 0; i < altintstr.length; i++) {
            intct += altintstr[i].charCodeAt()
        }
        arr.push(Math.floor(('0.' + altint % 10 + altint) * 128 + 64));
        arr.push(Math.floor(('0.' + alt.length % 10 + alt.length) * 168 + 16));
        arr.push(Math.floor(('0.' + intct % 10 + intct) * 128 + 64));
        let [r, g, b] = arr;
        var color = `#${r.toString(16).length > 1 ? r.toString(16) : '0' + r.toString(16)}${g.toString(16).length > 1 ? g.toString(16) : '0' + g.toString(16)}${b.toString(16).length > 1 ? b.toString(16) : '0' + b.toString(16)}`;
        return color;
    }

    noLink = (e) => {
        if (this.props.link.length == 0)
            e.preventDefault()
    }

    render() {
        let { color } = this.state;
        let { alt, src, width, link, nick } = this.props;
        let fontSize = width / 1.6 + 'px';
        !nick && (nick = alt);

        return (
            <Link to={link} className="whl_avatar" title={nick} onClick={this.noLink}
                style={{ backgroundColor: color, width: width + 'px', height: width + 'px', fontSize }}>
                {src ?
                    <img title={nick} src={src} className="usericon_img"></img>
                    :
                    <span>{nick[0].toUpperCase()}</span>
                }
            </Link>

        )
    }
}

export default CSSModules(Avatar, styles);