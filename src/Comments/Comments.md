```jsx
let commentlist = [
  {
    cid: 0,
    vid: 228,
    mid: 1,
    username: "WHL",
    usersrc: "",
    des: "松輯好師！",
    since: new Date(),
    like: 666,
    unlike: 0,
    userlike: 1,
    recomment: 1,
    child: [
      {
        cid: 1,
        vid: 228,
        mid: 2,
        username: "Sung",
        sersrc: "",
        des: "<a class='tag_name' contenteditable='false' href='/u/0'>&nbsp;@WHL&nbsp;</a>&nbsp;哈哈，本來就是。",
        since: new Date(),
        like: 1,
        unlike: 555,
        userlike: 0,
      },
    ],
  },
];
let userinfo = { mid: 1, name: "WHL", src: "" };
<Comments commentlist={commentlist} userinfo={userinfo}></Comments>;
```
