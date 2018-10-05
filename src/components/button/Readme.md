# Basic button

```jsx
<Button>Push Me</Button>
```

Button with onClick:

```jsx
<Button onClick={() => setState({ loaded: !state.loaded })}>
  {state.loaded ? 'Loaded' : 'Push me'}
</Button>
```