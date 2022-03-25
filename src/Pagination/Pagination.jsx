import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types'
import GoogleBtn from '../GoogleBtn/GoogleBtn';

function Pagination(props) {
	const { total, onChange, defaultCurrent, color, withEllipsis, ellipsisRange, isFixed } = props;
	const [current, setCurrent] = useState(defaultCurrent);

	useEffect(() => {
		onChange({ current, });
	}, [current]);

	useEffect(() => {
		current != defaultCurrent && setCurrent(defaultCurrent);
	}, [defaultCurrent]);

	const handleClickNext = () => {
		current < total && setCurrent(current + 1)
	};

	const handleClickPrev = () => {
		current > 1 && setCurrent(current - 1)
	};

	const checkEllipsis = (index) => {
		let range = ellipsisRange + 1;
		if (!withEllipsis || index == 1 || index == total || current - range < index &&
			current + range > index // || !!isFixed && checkLength(index)
		)
			return getPaginationItem(index);
		else if (current - range == index || current + range == index)
			return getPaginationEllipsis(index);
		else if (current - range > index || current + range < index)
			return <Fragment key={index} />
		else
			return <Fragment key={index} />
	}

	const checkLength = (index) => {
		let maxLength = (ellipsisRange + 2) * 2 + 1;
		let originRange = ellipsisRange + 1;
		let range = ellipsisRange * 2;
		let lack = current - ellipsisRange - 2 <= 0 ? Math.abs(current - (ellipsisRange + 2)) + 1 : Math.abs(current + ellipsisRange + 2 - total);
		if (total < maxLength || index == 1 || index == total || current - originRange < index && current + originRange > index) // 以下情況無條件給予按鈕
			return getPaginationItem(index);
		if (current + ellipsisRange + 2 >= total || current - ellipsisRange - 2 <= 0) { // current 在左右兩邊的情況
			if (current + ellipsisRange + lack >= index && current - ellipsisRange - lack <= index) // current 左右補齊
				return getPaginationItem(index);
			if (current - ellipsisRange - 2 <= 0) { // 左邊
				if (index == total - 1)
					return getPaginationEllipsis(index);
				if (index < current)
					return getPaginationItem(index);
			}
			else if (current + ellipsisRange + 2 >= total) { // 右邊
				if (index == 2)
					return getPaginationEllipsis(index);
				if (index > current)
					return getPaginationItem(index);
			}
			return <Fragment key={index} />;
		}
		else { // current 在中間的情況
			if (index == 2 || index == total - 1)
				return getPaginationEllipsis(index);
			else if (current - originRange < index && current + originRange > index)
				return getPaginationItem(index);
			else
				return <Fragment key={index} />
		}
	}

	const getPaginationItem = (index) => {
		return (<PaginationItem
			key={index}
			color={color}
			isCurrent={current == index}
			index={index}
			onClick={e => setCurrent(index)}
		/>);
	}

	const getPaginationEllipsis = (index) => {
		return <div key={index} className="ellipsisStyle">...</div>
	}

	return (
		<div className="whl_pagination">
			<GoogleBtn
				str="navigate_before"
				onClick={handleClickPrev}
				click={current !== 1}
				color={current !== 1 ? "#000" : "#00000042"}
			/>
			{
				Array(total).fill().map((m, index) =>
					!isFixed || !withEllipsis ? checkEllipsis(index + 1) : checkLength(index + 1)
				)
			}
			<GoogleBtn
				str="navigate_next"
				onClick={handleClickNext}
				click={current !== total}
				color={current !== total ? "#000" : "#00000042"}
			/>
		</div>
	);
}

Pagination.propTypes = {
	/** 總頁數 (從 1 開始)*/
	total: PropTypes.number.isRequired,
	/** 起始頁面 (第幾頁)*/
	defaultCurrent: PropTypes.number,
	/** 按鈕顏色*/
	color: PropTypes.string,
	/** 當前頁數更動時 ({ current, }) => {}*/
	onChange: PropTypes.func,
	/** 是否省略*/
	withEllipsis: PropTypes.bool,
	/** 左右兩邊超過 n 格時省略*/
	ellipsisRange: PropTypes.number,
	/** 是否固定長度，會自動填補長度。 (省略開啟才能使用)*/
	isFixed: PropTypes.bool,
}

Pagination.defaultProps = {
	total: 0,
	defaultCurrent: 1,
	color: 'rgb(254, 107, 139)',
	onChange: ({ current, }) => { },
	withEllipsis: false,
	ellipsisRange: 2,
	isFixed: false,
}

export default Pagination;

export const PaginationItem = (props) => {
	const { color, isCurrent, index, onClick } = props;
	const [currentItemStyle, setCurrentItemStyle] = useState({
		background: color,
		color: "#fff",
	});
	const [isHover, setHover] = useState(false);

	return (
		<div className={`buttonStyle`}
			style={isCurrent ? currentItemStyle : {}}
			onClick={onClick}
		>
			{index}
		</div>
	);
}