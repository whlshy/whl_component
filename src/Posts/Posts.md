```jsx
import React from "react";
let posts = [
	{ OID: 2, Since: '2021-12-22', Title: 'WKE Judge 施工中...', link: "/" },
	{ OID: 1, Since: '2021-12-21', Title: '【恭賀】en108 企畫書開始動工！', link: "/" },
	{ OID: 0, Since: '2021-12-18', Title: '上線時間公告', link: "/" }
];
const [page, setPage] = React.useState([1, 10]);

<Posts
	posts={posts}
	page={page}
	setPage={p => setPage([p, page[1]])}
/>
```
