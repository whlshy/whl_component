import React, { useEffect, useState, Fragment } from "react";
import PropTypes from "prop-types";

const Photos = (props) => {
	const { closeBtn, photos, defaultIndex, title } = props;
	const [index, setIndex] = useState(0);
	const [isHover, setHover] = useState(false);
	const { src, alt } = photos[index] || { src: null, alt: null }

	useEffect(() => {
		setIndex(defaultIndex || 0)
	}, [defaultIndex]);

	useEffect(() => {
		window.addEventListener('keydown', handleKeydown);
		return () => {
			window.removeEventListener('keydown', handleKeydown);
		}
	});

	const handleKeydown = (e) => {
		// console.log(e.keyCode)
		if (e.keyCode === 27) { // 按下 Esc
			closeBtn && closeBtn()
		} else if (e.keyCode == 39) { // ->
			changeImg(index + 1)
		} else if (e.keyCode == 37) {
			changeImg(index - 1)
		}
	}

	const changeImg = (index) => {
		index < 0 && setIndex(photos.length - 1);
		index >= photos.length && setIndex(0);
		(index >= 0 && index < photos.length) && setIndex(index);
	}

	return (
		<>
			<div className="whl_photos">
				<div className="slideshow" onMouseEnter={e => setHover(true)} onMouseLeave={e => setHover(false)}>
					<img src={src} alt={alt} onContextMenu={e => e.preventDefault()} />
					{isHover &&
						<Fragment>
							{index != 0 && <span className="material-icons-outlined left_arrow arrow" onClick={e => changeImg(index - 1)}>navigate_before</span>}
							{index != photos.length - 1 && <span className="material-icons-outlined right_arrow arrow" onClick={e => changeImg(index + 1)}>navigate_next</span>}
							<div className="page_wrapper">
								{
									photos.map((m, i) =>
										<div key={i} className={`page_index ${i == index ? "page_select" : ""}`} onClick={e => changeImg(i)}></div>
									)
								}
							</div>
						</Fragment>
					}
				</div>
				<div className="whl_abs_title">{title}</div>
				{closeBtn &&
					<span className="material-icons-outlined whl_close_btn" onClick={e => closeBtn()}>close</span>
				}
			</div>
		</>
	);
}
Photos.propTypes = {
	/** 相簿標題*/
	title: PropTypes.string,
	/** 圖片陣列，[{ src: "https://i.imgur.com/60iYdXl.jpg" }]*/
	photos: PropTypes.array,
	/** 關閉按鈕，如果沒有給的話按鈕不會出現*/
	closeBtn: PropTypes.func,
	/** 預設在第幾張照片*/
	defaultIndex: PropTypes.number,
}
Photos.defaultProps = {
	title: "",
	photos: [],
	closeBtn: null,
	defaultIndex: 0,
}

export default Photos;