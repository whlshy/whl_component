import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/ThumbUpDown.styl'

export class ThumbUpDown extends Component {
    static propTypes = {
        /** 0: 不喜歡, 1: 喜歡, 2: 沒表達*/
        userlike: PropTypes.number,
        /** 按喜歡數*/
        likect: PropTypes.number,
        /** 按不喜歡數*/
        unlikect: PropTypes.number,
        /** 喜歡的說明*/
        liketitle: PropTypes.string,
        /** 不喜歡的說明*/
        unliketitle: PropTypes.string,
        /** 按了喜歡的事件*/
        clickLike: PropTypes.func,
        /** 按了不喜歡的事件*/
        clickUnLike: PropTypes.func,
    }

    static defaultProps = {
        userlike: 2,
        likect: 0,
        unlikect: 0,
        liketitle: "覺得實用",
        unliketitle: "覺得不實用",
        clickLike: (e) => {},
        clickUnLike: (e) => {},
    }

    render() {
        const { userlike, likect, unlikect, liketitle, unliketitle, clickLike, clickUnLike } = this.props;

        return (
            <div className="whl_thumbupdown">
                <div className="like_unlike right16" title={liketitle} onClick={clickLike}>
                    {userlike == 1 ?
                        <span className="material-icons">
                            thumb_up
                        </span>
                        :
                        <span className="material-icons-outlined">
                            thumb_up
                        </span>}
                    {likect ? likect : 0}
                </div>
                <div className="like_unlike" title={unliketitle} onClick={clickUnLike}>
                    {userlike == 0 ?
                        <span className="material-icons">
                            thumb_down
                        </span>
                        :
                        <span className="material-icons-outlined">
                            thumb_down
                        </span>}
                    {unlikect ? unlikect : 0}
                </div>
            </div>

        )
    }
}

export default CSSModules(ThumbUpDown, styles)