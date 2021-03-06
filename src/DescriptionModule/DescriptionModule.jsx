import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import '../style/DescriptionModule.styl'

export default class DescriptionModule extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nowimg: null,
            index: 0,
            isslideshow: false,
            isplay: false,
        }
        this.autoplay = null;
    }

    componentDidMount = async () => {
        const { img } = this.props;
        const { index } = this.state;
        if (typeof img == "object" && img.length > 1) {
            this.setState({ nowimg: img[index], isslideshow: true, isplay: true })
        } else {
            this.setState({ nowimg: img[0] })
        }
    }

    componentDidUpdate = async (prevProps, prevState) => {
        const { sec } = this.props;
        const { isplay, isslideshow } = this.state;
        if (isslideshow) {
            if (prevState.isplay != isplay && !!isplay) {
                this.autoplay = setInterval(this.changeImg, 1000 * sec);
            } else if (prevState.isplay != isplay && !isplay) {
                clearInterval(this.autoplay);
            }
        }
    }

    componentWillUnmount() {
        clearInterval(this.autoplay);
    }

    changeImg = async (index = this.state.index + 1) => {
        const { img } = this.props;
        if (index >= img.length) {
            index = 0;
        } else if (index < 0) {
            index = img.length - 1;
        }
        this.setState({
            nowimg: img[index], index: index,
        })
    }

    render() {
        const { title, content, margin, backgroundColor, color, reverse, img, isStyle } = this.props;
        const { nowimg, isslideshow, index } = this.state;

        return (
            <div className="whl_description_module" style={isStyle ? { padding: margin } : {}}>
                <div className="description_module_wrapper" style={isStyle ? { backgroundColor, color, flexDirection: !reverse ? "row" : "row-reverse" } : {}}>
                    <div className="des_text">
                        <img src={!!nowimg && (typeof nowimg == "object") ? nowimg.src : nowimg}
                            title={!!nowimg && nowimg.alt ? nowimg.alt : ""} alt={!!nowimg && nowimg.alt ? nowimg.alt : ""}></img>
                        <div className="textabsolute">
                            <div>
                                <h2>{!!nowimg && nowimg.title ? nowimg.title : title}</h2>
                                <p>{!!nowimg && nowimg.content ? nowimg.content : content}</p>
                            </div>

                        </div>
                    </div>
                    <div className="slideshow" onMouseOver={e => this.setState({ isplay: false })} onMouseOut={e => this.setState({ isplay: true })}>
                        <img src={!!nowimg && (typeof nowimg == "object") ? nowimg.src : nowimg}
                            title={!!nowimg && nowimg.alt ? nowimg.alt : ""} alt={!!nowimg && nowimg.alt ? nowimg.alt : ""}></img>
                        {isslideshow &&
                            <Fragment>
                                <span className="material-icons-outlined left_arrow arrow" onClick={e => this.changeImg(index - 1)}>navigate_before</span>
                                <span className="material-icons-outlined right_arrow arrow" onClick={e => this.changeImg(index + 1)}>navigate_next</span>
                                <div className="page_wrapper">
                                    {
                                        img.map((m, i) =>
                                            <div key={i} className={`page_index ${i == index ? "page_select" : ""}`} onClick={e => this.changeImg(i)}></div>
                                        )
                                    }
                                </div>
                            </Fragment>
                        }
                    </div>
                </div>
            </div>
        )
    }

    static propTypes = {
        /** ??????*/
        title: PropTypes.string,
        /** ??????*/
        content: PropTypes.node,
        /** ????????????????????? [{src: "path", title: "Title", content: "Content"}]???????????????????????? title ??? content ?????????????????? title, content*/
        img: PropTypes.array.isRequired,
        /** margin*/
        margin: PropTypes.string,
        /** ????????????*/
        backgroundColor: PropTypes.string,
        /** ????????????*/
        color: PropTypes.string,
        /** ???????????????false ???????????????true ????????????*/
        reverse: PropTypes.bool,
        /** ?????????????????????????????????*/
        sec: PropTypes.number,
        /** ?????????????????? style*/
        isStyle: PropTypes.bool,
    }

    static defaultProps = {
        title: "??????",
        content: "??????",
        margin: "0px",
        backgroundColor: "#0d274d",
        color: "#fff",
        reverse: false,
        sec: 5,
        isStyle: true,
    }
}
