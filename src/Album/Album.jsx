import React, { useEffect, useState, useRef, Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from '../style/Album.styl'
import GoogleBtn from '../GoogleBtn/GoogleBtn'

function Album(props) {
	const { imgs, minWidth, photoMargin, clickPhoto, LightBox, bgColor, draggable, showDes,
		onChange, coverComponent, isEdit, starindex, setStar, imgDel } = props;

	const [width, setWidth] = useState(0);
	const [count, setCount] = useState(0);
	const outsideWrapper = useRef(null);
	const [startIdx, setStartIdx] = useState(null);
	const [endIdx, setEndIdx] = useState(null);

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		handleResize()
		// console.log('start', startIdx, 'end', endIdx)
		return () => {
			window.removeEventListener('resize', handleResize);
		}
	})

	const handleResize = () => {
		let margin = photoMargin;
		let outsideWidth = outsideWrapper.current.getBoundingClientRect().width;
		let count = parseInt((outsideWidth + margin) / (minWidth + margin));
		let width = count != 0 ? ((outsideWidth - margin * (count - 1)) / count) : outsideWidth;
		setCount(count);
		setWidth(width);
	}

	const onDragStart = (index) => {
		setStartIdx(index);
	}

	const onDragEnter = (index) => {
		// console.log('onDragEnter', index)
		setEndIdx(index);
	}

	const onDragLeave = (index) => {
		// console.log('onDragLeave', index)
		index == endIdx && setEndIdx(null);
	}

	const onDragEnd = (index) => {
		if (startIdx != null && endIdx != null) {
			let newimgs = [];
			for (let i = 0; i < imgs.length; i++) {
				if(starindex == changeImg(i)){
					setStar(i)
				}
				newimgs[i] = imgs[changeImg(i)];
			}
			!onChange && console.log('onChange', startIdx, endIdx, newimgs)
			onChange(startIdx, endIdx, newimgs)
		}
		setStartIdx(null);
		setEndIdx(null);
	}

	const changeImg = (index) => {
		let changeIdx = index;
		if (index == endIdx)
			changeIdx = startIdx;
		else if (endIdx < startIdx && index <= startIdx && endIdx < index)
			changeIdx -= 1;
		else if (endIdx > startIdx && index >= startIdx && endIdx > index)
			changeIdx += 1;
		return changeIdx;
	}

	return (
		<div className=''>
			{!!LightBox && LightBox}
			<div className="whl_img_wrap" ref={outsideWrapper}>
				{!!imgs &&
					imgs.map((m, index) =>
						<Image
							key={index}
							width={width}
							count={count}
							photoMargin={photoMargin}
							data={draggable && startIdx != null && endIdx != null ? imgs[changeImg(index)] : m}
							imgs_length={imgs.length}
							index={index}
							bgColor={bgColor}
							clickPhoto={clickPhoto}
							showDes={showDes}
							draggable={draggable}
							onDragStart={onDragStart}
							onDragEnd={onDragEnd}
							onDragEnter={onDragEnter}
							onDragLeave={onDragLeave}
							coverComponent={coverComponent}
							isEdit={isEdit}
							starindex={starindex}
							setStar={setStar}
							imgDel={imgDel}
						/>
					)
				}
			</div>
		</div>
	);
}

Album.propTypes = {
	/** 相簿陣列，包含代表圖片與圖片張數。[ { src: "https://i.imgur.com/60iYdXl.jpg", count: 1, title: "標題", des: "說明", date: "2019-12-14, 週六" } ]*/
	imgs: PropTypes.array,
	/** 單位 px，圖片的最小寬度*/
	minWidth: PropTypes.number,
	/** 單位 px，圖片與圖片之間的間隔*/
	photoMargin: PropTypes.number,
	/** 點擊相簿的事件，會給單個陣列內的 imgs 物件與位置(從 0 開始)*/
	clickPhoto: PropTypes.func,
	/** 圖片沒滿版的底色，預設是黑色*/
	bgColor: PropTypes.string,
	/** 可額外加入自定義 component*/
	coverComponent: PropTypes.node,
	/** */
	isEdit: PropTypes.bool,
	/** */
	starindex: PropTypes.number,
	/** */
	setStar: PropTypes.func,
	/** */
	imgDel: PropTypes.func,
}

Album.defaultProps = {
	imgs: [],
	minWidth: 250,
	photoMargin: 5,
	clickPhoto: (img, index) => { console.log({ img, index }) },
	bgColor: "#000",
	draggable: false,
	showDes: true,
	isEdit: false,
	coverComponent: null,
	starindex: 0,
	setStar: (index) => { console.log('setStar', index) },
	imgDel: (index) => { console.log('imgDel', index) }
}

export default Album;

export function Image(props) {
	const { width, count, photoMargin, data, imgs_length, index, bgColor, clickPhoto, showDes,
		draggable, onDragStart, onDragEnd, onDragEnter, onDragLeave, coverComponent, isEdit, starindex, setStar, imgDel } = props;
	const [imgWH, setImgWH] = useState({ width: null, height: null }); // image width and height
	const [onHover, setHover] = useState(false);

	const onImgLoad = (e) => {
		let img = e.target;
		setImgWH({ width: img.offsetHeight, height: img.offsetWidth });
	}

	const cancelDefault = (e) => {
		e.preventDefault()
		e.stopPropagation()
		return false
	}
	return (
		<div
			className="whl_relative whl_album"
			style={{
				width: `${width}px`, height: `${width}px`, marginRight: (index + 1) % count == 0 ? "0px" : `${photoMargin}px`,
				marginBottom: Math.ceil(imgs_length / count) - 1 != parseInt(index / count) ? `${photoMargin}px` : "0px", overflow: "hidden",
				display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: bgColor,
			}}
			draggable={draggable}
			onDragStart={e => draggable && onDragStart(index)}
			onDragEnd={e => draggable && onDragEnd(index)}
		>
			<img src={data.src} alt={data.alt} className="pointer" onLoad={onImgLoad}
				style={{
					maxWidth: imgWH.width > imgWH.height ? `100%` : `auto`,
					maxHeight: imgWH.width < imgWH.height ? `100%` : `auto`,
					// marginRight: (index + 1) % count == 0 ? "0px" : `${photoMargin}px`,
					// marginBottom: Math.ceil(imgs.length / count) - 1 != parseInt(index / count) ? `${photoMargin}px` : "0px"
				}}
			/>
			{showDes &&
				<div className={`whl_img_des_wrapper ${!!onHover ? "whl_img_des_wrapper_hover" : ""}`}
				// style={{ top: `5%`, right: `calc(5% + ${(index + 1) % count == 0 ? "0px" : `${photoMargin}px`})` }}
				>
					<div >
						<div className="whl_img_des_date"><span className="oneline">{data.date}</span></div>
						<div className="whl_img_des_title">
							<span className="">{data.title}</span>
						</div>
					</div>
					<div className="whl_img_des_count"><b className="oneline">Images: {`${data.count || 1}`}</b></div>
				</div>
			}
			{!!onHover &&
				<div className="whl_hover_wrapper"
					style={{
						right: (index + 1) % count == 0 ? "0px" : `${0}px`,
						bottom: Math.ceil(imgs_length / count) - 1 != parseInt(index / count) ? `${0}px` : "0px",
						backgroundColor: "rgba(0, 0, 0, .1)",
						zIndex: "0"
					}}
				/>
			}
			<div className="whl_img_cover" onMouseOver={e => setHover(true)} onMouseLeave={e => setHover(false)}
				onClick={(e) => clickPhoto(data, index)}
				style={{
					right: (index + 1) % count == 0 ? "0px" : `${0}px`,
					bottom: Math.ceil(imgs_length / count) - 1 != parseInt(index / count) ? `${0}px` : "0px"
				}}
				onDragEnter={e => onDragEnter(index)}
				onDragLeave={e => onDragLeave(index)}
				onDragOver={e => draggable && cancelDefault(e)}
			/>
			{isEdit &&
				<div className='whl_img_edit_container'>

					<span className={`material-icons-outlined whl_img_edit_star ${starindex == index && 'whl_img_edit_star_active'}`}
						onClick={e => setStar(index)}>
						star
					</span>

					<span className="material-icons-outlined whl_img_edit_del" onClick={e => imgDel(index)}>
						close
					</span>

					{/* <GoogleBtn str='star'></GoogleBtn>
			<GoogleBtn str='close'></GoogleBtn> */}
				</div>
			}

		</div>
	);
}