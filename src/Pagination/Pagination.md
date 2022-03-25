### 無省略

```jsx
<div style={{ display: "flex", justifyContent: "space-around" }}>
  <Pagination total={10} defaultCurrent={1} />
</div>
```

### 有省略

```jsx
<div style={{ display: "flex", justifyContent: "space-around" }}>
  <Pagination
    total={13}
    withEllipsis={true}
    ellipsisRange={2}
    color={"rgb(25, 118, 210)"}
  />
</div>
```

### 固定長度

```jsx
<div style={{ display: "flex", justifyContent: "space-around" }}>
  <Pagination
    total={13}
    withEllipsis={true}
    ellipsisRange={2}
    color={"rgb(25, 118, 210)"}
    isFixed={true}
  />
</div>
```