### Import component

```jsx static
import IconButton from '../IconButton';
```

### Icon button

```js
<IconButton icon="star" label="Rate this!" />
<IconButton icon="local_pizza" label="Order pizza!" />
<IconButton icon="train" label="Directions by train!" />
<IconButton icon="map" label="View map!" />
```

### Icon button as toggle

```js
<IconButton
  icon="favorite_border"
  onIcon="favorite"
/>
<IconButton
  onIcon="star"
  icon="star_border"
/>
```