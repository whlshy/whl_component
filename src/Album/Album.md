### 一般相簿範例

```jsx
import { useState } from "react";
import LightBox from "../LightBox/LightBox";
import Photos from "../Photos/Photos";

const [component, setComponent] = useState(null);
const [imgs, setImgs] = useState([
  {
    src: "https://it108.wke.csie.ncnu.edu.tw/filestorage/00/00/17/88.png",
    count: 1,
    title: "「山東流亡學生與澎湖七一三事件70年特展」開幕式",
    date: "2019-12-14, 週六",
  },
  {
    src: "https://i.imgur.com/60iYdXl.jpg",
    count: 6,
    title: "WHL的相簿",
    date: "2019-12-14, 週六",
  },
  {
    src: "https://it108.wke.csie.ncnu.edu.tw/filestorage/00/00/17/8a.png",
    count: 1,
    title: "「山東流亡學生與澎湖七一三事件70年特展」開幕式",
    date: "2019-12-14, 週六",
  },
  {
    src: "https://it108.wke.csie.ncnu.edu.tw/filestorage/00/00/17/8b.png",
    count: 1,
    title: "「山東流亡學生與澎湖七一三事件70年特展」開幕式",
    date: "2019-12-14, 週六",
  },
  {
    src: "https://it108.wke.csie.ncnu.edu.tw/filestorage/00/00/17/88.png",
    count: 2,
    title: "「山東流亡學生與澎湖七一三事件70年特展」開幕式",
    date: "2019-12-14, 週六",
  },
  {
    src: "https://it108.wke.csie.ncnu.edu.tw/filestorage/00/00/17/89.png",
    count: 3,
    title: "「山東流亡學生與澎湖七一三事件70年特展」開幕式",
    date: "2019-12-14, 週六",
  },
  {
    src: "https://it108.wke.csie.ncnu.edu.tw/filestorage/00/00/17/8a.png",
    count: 1,
    title: "「山東流亡學生與澎湖七一三事件70年特展」開幕式",
    date: "2019-12-14, 週六",
  },
  {
    src: "https://it108.wke.csie.ncnu.edu.tw/filestorage/00/00/17/8b.png",
    count: 7,
    title: "「山東流亡學生與澎湖七一三事件70年特展」開幕式",
    date: "2019-12-14, 週六",
  },
]);

let photos = [
  { src: "https://i.imgur.com/60iYdXl.jpg" },
  { src: "https://i.imgur.com/N8vsABr.jpg" },
  { src: "https://i.imgur.com/wAXOwTG.jpg" },
  { src: "https://i.imgur.com/yLe9YgV.jpg" },
  { src: "https://i.imgur.com/u96UiZZ.jpg" },
  { src: "https://i.imgur.com/XYl896Q.jpg" },
];

<>
  {!!component && component}
  <Album
    isEdit={false}
    imgs={imgs}
    starindex={0}
    // LightBox={component}
    clickPhoto={(m, index) =>
      setComponent(
        <LightBox
          closeLightBox={() => setComponent(null)}
          component={
            <Photos
              photos={photos}
              title={m.title}
              closeBtn={() => setComponent(null)}
            />
          }
        />
      )
    }
  />
</>;
```

### 可拖拉式範例

```jsx
import { useState } from "react";
import LightBox from "../LightBox/LightBox";
import Photos from "../Photos/Photos";

const [component, setComponent] = useState(null);
const [imgs, setImgs] = useState([
  {
    src: "https://it108.wke.csie.ncnu.edu.tw/filestorage/00/00/17/88.png",
    count: 1,
    title: "「山東流亡學生與澎湖七一三事件70年特展」開幕式",
    date: "2019-12-14, 週六",
  },
  {
    src: "https://i.imgur.com/60iYdXl.jpg",
    count: 6,
    title: "WHL的相簿",
    date: "2019-12-14, 週六",
  },
  {
    src: "https://it108.wke.csie.ncnu.edu.tw/filestorage/00/00/17/8a.png",
    count: 1,
    title: "「山東流亡學生與澎湖七一三事件70年特展」開幕式",
    date: "2019-12-14, 週六",
  },
  {
    src: "https://it108.wke.csie.ncnu.edu.tw/filestorage/00/00/17/8b.png",
    count: 1,
    title: "「山東流亡學生與澎湖七一三事件70年特展」開幕式",
    date: "2019-12-14, 週六",
  },
  {
    src: "https://it108.wke.csie.ncnu.edu.tw/filestorage/00/00/17/88.png",
    count: 2,
    title: "「山東流亡學生與澎湖七一三事件70年特展」開幕式",
    date: "2019-12-14, 週六",
  },
  {
    src: "https://it108.wke.csie.ncnu.edu.tw/filestorage/00/00/17/89.png",
    count: 3,
    title: "「山東流亡學生與澎湖七一三事件70年特展」開幕式",
    date: "2019-12-14, 週六",
  },
  {
    src: "https://it108.wke.csie.ncnu.edu.tw/filestorage/00/00/17/8a.png",
    count: 1,
    title: "「山東流亡學生與澎湖七一三事件70年特展」開幕式",
    date: "2019-12-14, 週六",
  },
  {
    src: "https://it108.wke.csie.ncnu.edu.tw/filestorage/00/00/17/8b.png",
    count: 7,
    title: "「山東流亡學生與澎湖七一三事件70年特展」開幕式",
    date: "2019-12-14, 週六",
  },
]);

let photos = [
  { src: "https://i.imgur.com/60iYdXl.jpg" },
  { src: "https://i.imgur.com/N8vsABr.jpg" },
  { src: "https://i.imgur.com/wAXOwTG.jpg" },
  { src: "https://i.imgur.com/yLe9YgV.jpg" },
  { src: "https://i.imgur.com/u96UiZZ.jpg" },
  { src: "https://i.imgur.com/XYl896Q.jpg" },
];

<>
  {!!component && component}
  <Album
    imgs={imgs}
    // LightBox={component}
    clickPhoto={(m, index) =>
      setComponent(
        <LightBox
          closeLightBox={() => setComponent(null)}
          component={
            <Photos
              photos={photos}
              title={m.title}
              closeBtn={() => setComponent(null)}
            />
          }
        />
      )
    }
    draggable={true}
    showDes={false}
    onChange={(startIdx, endIdx, newimgs) => setImgs(newimgs)}
  />
</>;
```