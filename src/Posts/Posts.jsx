import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import CSSModules from 'react-css-modules'
import styles from '../style/main.styl'

export class Posts extends Component {
	render() {
		const { title, posts, morelink, page, setPage } = this.props;

		return (
			<div className="posts bgc-gray">
				<div className="padding-8-16">
					<span>{title}</span>
				</div>
				<div className="hr0" />
				<div className="posts-wrapper">
					{posts == null ? <div className="padding-8-16">loading...</div>:
					posts.map(m =>
						<div key={m.OID} className="padding-8-16 dflex-c-b">
							<span>{m.Since}</span>
							<Link className="style-none oneline flex-1-1" to={m.link}>{m.Title}</Link>
						</div>
					)}
				</div>
				<div className={`padding-8-16 ${!!page ? "dflex-c-c" : "dflex-c-e"}`}>
					{!page && !!morelink && <Link className="style-none" to={morelink}>更多...</Link>}
					{!!page && (new Array(page[1])).fill(0).map((m, index) =>
						<div className={`pointer page ${index + 1 == page[0] ? "" : "color-blue"}`} onClick={e => setPage(index + 1)}>
							<span className="page-pd">{index + 1}</span>
						</div>)}
				</div>
			</div>
		)
	}

	static propTypes = {
		/** 標題*/
		title: PropTypes.string,
		/** null = 正在 loading*/
		posts: PropTypes.arrayOf(PropTypes.shape({ OID: PropTypes.number, Title: PropTypes.string, Since: PropTypes.string, link: PropTypes.string })),
		/** null 代表沒有更多，傳入更多頁面的路徑*/
		morelink: PropTypes.string,
		/** [1, 10] 總共 10 頁，目前在第 1 頁*/
		page: PropTypes.arrayOf(PropTypes.number),
		setPage: PropTypes.func,
	}

	static defaultProps = {
		title: "公告模組",
		posts: [],
		morelink: null,
		page: null,
		setPage: () => {},
	}
}

export default CSSModules(Posts, styles);

export class Post extends Component {
	render() {
		const { title, posts, morelink } = this.props;

		return (
			<div className="posts bgc-gray">
				<div className="padding-8-16">
					<span>{title}</span>
				</div>
				<div className="hr0" />
				<div className="posts-wrapper">
				</div>
			</div>
		)
	}
}