import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class GoogleBtn extends Component {
	render() {
		const { str, width, fontsize, onClick, click, color, type} = this.props;
		let style = { width: width, height: width, color: color }
		return click ? (
			<button className="whl_google-btn whl_google-btn-select" style={style} onClick={onClick}>
				<span className={`${type == "Outlined" ? "material-icons-outlined" : type == "Filled" ? "material-icons": ""}`} style={{ fontSize: fontsize }}>
					{str}
				</span>
			</button>
		) :
			<div className="whl_google-btn" style={style}>
				<span className={`${type == "Outlined" ? "material-icons-outlined" : type == "Filled" ? "material-icons": ""}`} style={{ fontSize: fontsize }}>
					{str}
				</span>
			</div>
	}

	static propTypes = {
		str: PropTypes.string,
		fontsize: PropTypes.string,
		click: PropTypes.bool,
		onClick: PropTypes.func,
		color: PropTypes.string,
		type: PropTypes.string,
		width: PropTypes.string,
	}

	static defaultProps = {
		click: true,
		onClick: () => { },
		color: "#000",
		type: "Outlined",
		width: "35px",
	}
}
