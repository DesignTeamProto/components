### Import component

```jsx static
import Button from '../Button';
```

### Button

```jsx
<Button>Primary</Button>
<Button buttonStyle="btn-secondary">Secondary</Button>
<Button buttonStyle="btn-success">Success</Button>
<Button buttonStyle="btn-warning">Warning</Button>
<Button buttonStyle="btn-danger">Danger</Button>
<Button buttonStyle="btn-info">Info</Button>
<Button buttonStyle="btn-light">Light</Button>
<Button buttonStyle="btn-dark">Dark</Button>
<Button buttonStyle="btn-link">Link</Button>
```

Button with onClick:

```jsx
<Button onClick={() => setState({ loaded: !state.loaded })}>
  {state.loaded ? 'Pushed!' : 'Push me!'}
</Button>
```
