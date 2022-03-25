```jsx
import React from "react";
let tags = [
  {
    CID: 1,
    CName: "搜尋演算法",
  },
  {
    CID: 2,
    CName: "測試一",
  },
  {
    CID: 3,
    CName: "測試二",
  },
];
const [opentags, setOpenTags] = React.useState(false);
const [nowtag, setCID] = React.useState(1);

<LocalTag
  tags={tags}
  opentags={opentags}
  localname="testtag"
  nowtag={nowtag}
  setCID={(cid) => setCID(cid)}
  setOpenTags={(tf) => setOpenTags(tf)}
></LocalTag>;
```
