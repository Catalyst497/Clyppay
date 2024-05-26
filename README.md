# React + Vite

## Figma
https://www.figma.com/file/f03I9S6djNLzEPQi3rfv0H/Clyp-Redesign?type=design&node-id=79%3A14257&mode=design&t=3PG0jw1AnlUwaGbE-1

## API
https://documenter.getpostman.com/view/34832393/2sA3JQ4KPe


##
- Adding link to <header>
- navlink to sidebar 
- using dummy data
- using tooltip
- mobile sidebar: using useWindowSize, hiding sidebar on modal, closjng automatically on mobile
- micro interactions: color, drop-shadow,bg

## Logic:
- dashboard route is protected.
- function to check for token.
- if not authenticated, popup login modal
- user logs in and api is called.
- returns a token whichbis stored in local storage.
- fetch user data with token


- if user clicks on sign up, login modal closed and signup modal opened
```jsx
openModal.login && <LoginModal />

```
