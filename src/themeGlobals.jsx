import { injectGlobal } from 'styled-components';

injectGlobal`
  html,
  body{
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0; 
  }

  #rsg-root {
    min-height: 100%;
    display: grid;
    grid-template-areas: 'header header header' 'main main main' 'footer footer footer';
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 100%;
    grid-row-gap: 2rem;
  }

  [role="main"] {
    width: calc(100% - 4rem);
    margin-right: auto;
    margin-left: auto;
  }
`