### Import component

```jsx static
import Button from '../Button';
```

### Text buttons

```js
<Button>Default</Button>
<Button color="primary">Primary</Button>
<Button color="secondary">Secondary</Button>
<Button disabled>Disabled</Button>
<Button href="#button">Link</Button>
```

### Contained buttons

```js
<Button variant="contained">Default</Button>
<Button variant="contained" color="primary">Primary</Button>
<Button variant="contained" color="secondary">Secondary</Button>
<Button variant="contained" disabled>Disabled</Button>
<Button variant="contained" href="#button">Link</Button>
```

### Outlined buttons

```js
<Button variant="outlined">Default</Button>
<Button variant="outlined" color="primary">Primary</Button>
<Button variant="outlined" color="secondary">Secondary</Button>
<Button variant="outlined" disabled>Disabled</Button>
<Button variant="outlined" href="#button">Link</Button>
```

### Floating action buttons

```js
<Button variant="fab" color="primary" aria-label="Letter A">A</Button>
<Button variant="fab" color="secondary" aria-label="Letter B">B</Button>
<Button variant="extendedFab" aria-label="Directions">Directions</Button>
<Button variant="fab" disabled aria-label="Letter D">D</Button>
```

### Mini Floating action buttons

```js
<Button variant="fab" mini="true" color="primary" aria-label="Letter A">A</Button>
<Button variant="fab" mini="true" color="secondary" aria-label="Letter B">B</Button>
<Button variant="fab" mini="true" disabled aria-label="Letter C">C</Button>
```

### Sizes

```js
<Button variant="contained" color="primary" size="small">Small</Button>
<Button variant="contained" color="primary" size="medium">Medium</Button>
<Button variant="contained" color="primary" size="large">Large</Button>
```

### Clickhandler

```js
<Button variant="contained" onClick={() => setState({ loaded: !state.loaded })}>
  {state.loaded ? 'Pushed!' : 'Push me!'}
</Button>
```