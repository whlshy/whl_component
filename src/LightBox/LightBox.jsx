import React from 'react';
import PropTypes from 'prop-types';

const LightBox = (props) => {
	const { component, closeLightBox, bgColor } = props;

	return (
		<div className="whl_lightbox_wrapper">
			<div className="whl_lightbox_cover" style={{backgroundColor: bgColor}} onClick={closeLightBox} />
			{!!component && component}
		</div>
	);
}

LightBox.propTypes = {
	/** LightBox 內的 Component*/
	component: PropTypes.node,
	/** 關閉 LightBox*/
	closeLightBox: PropTypes.func,
	/** 燈箱背景顏色*/
	bgColor: PropTypes.string,
}

LightBox.defaultProps = {
	component: null,
	closeLightBox: () => {},
	bgColor: "rgba(0, 0, 0, .3)"
}

export default LightBox;