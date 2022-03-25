```jsx
import { useState } from "react";

let photos = [
  { src: "https://i.imgur.com/60iYdXl.jpg" },
  { src: "https://i.imgur.com/N8vsABr.jpg" },
  { src: "https://i.imgur.com/wAXOwTG.jpg" },
  { src: "https://i.imgur.com/yLe9YgV.jpg" },
  { src: "https://i.imgur.com/u96UiZZ.jpg" },
  { src: "https://i.imgur.com/XYl896Q.jpg" },
];

<div style={{display: "flex", justifyContent: "center"}}>
  <Photos
    photos={photos}
    title={"WHL的相簿"}
    closeBtn={() => {}}
  />
</div>;
```
