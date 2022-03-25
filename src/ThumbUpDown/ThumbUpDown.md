```jsx
const [userlike, setUserLike] = React.useState(2);
const [likect, setLike] = React.useState(0);
const [unlikect, setUnLike] = React.useState(0);

const setLikeUnLike = (like) => {
  if (like == 1) {
    if (userlike == 1) {
      setLike(likect - 1);
      setUserLike(2);
    } else if (userlike == 0) {
      setUnLike(unlikect - 1);
      setLike(likect + 1);
      setUserLike(1);
    } else if (userlike == 2) {
      setLike(likect + 1);
      setUserLike(1);
    }
  } else {
    if (userlike == 1) {
      setLike(likect - 1);
      setUnLike(unlikect + 1);
      setUserLike(0);
    } else if (userlike == 0) {
      setUnLike(unlikect - 1);
      setUserLike(2);
    } else if (userlike == 2) {
      setUnLike(unlikect + 1);
      setUserLike(0);
    }
  }
};

<ThumbUpDown
  userlike={userlike}
  likect={likect}
  unlikect={unlikect}
  clickLike={() => setLikeUnLike(1)}
  clickUnLike={() => setLikeUnLike(0)}
></ThumbUpDown>;
```
