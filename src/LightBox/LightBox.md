```jsx
import { useState } from "react";
const [isLightBox, setLightBox] = useState(false);
<>
  {isLightBox && (
    <LightBox
      closeLightBox={(e) => setLightBox(false)}
      component={<h1>這是燈箱</h1>}
    />
  )}
  <button
    // style={{ cursor: "pointer", border: "1px solid #000" }}
    onClick={(e) => setLightBox(true)}
  >
    點我打開燈箱(燈箱在最上面)
  </button>
</>;
```
