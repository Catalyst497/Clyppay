# React + Vite

## Figma

https://www.figma.com/file/f03I9S6djNLzEPQi3rfv0H/Clyp-Redesign?type=design&node-id=79%3A14257&mode=design&t=3PG0jw1AnlUwaGbE-1

## API

https://documenter.getpostman.com/view/34832393/2sA3JQ4KPe

##

-   Adding link to <header>
-   navlink to sidebar
-   using dummy data
-   using tooltip
-   mobile sidebar: using useWindowSize, hiding sidebar on modal, closjng automatically on mobile
-   micro interactions: color, drop-shadow,bg
-   use formik and yup instead

## Logic:

-   dashboard route is protected.
-   function to check for token.
-   if not authenticated, popup login modal
-   user logs in and api is called.
-   returns a token whichbis stored in local storage.
-   fetch user data with token

-   if user clicks on sign up, login modal closed and signup modal opened

```jsx
openModal.login && <LoginModal />
```

## Auth:

package: react-auth-kit

-   Wrap with provider and pass options
-   On Submit:

```jsx
const signIn = useSignIn()

signIn({
    token: response.data.token,
    expiresIn: 3600,
    tokenType: "Bearer",
    authState: { email: values.email },
})
```

-   Private Route:

`import {RequireAuth} from "react-auth-kit"`

Wrap component

-   SIgnout

`useSingOut`

-   Sending requests:

```jsx
await axios.get("/api/", { withCredentials: true })
```

### Manual

```jsx
import jwt_decode from "jwt-decode"
const decoded = auth?.accessToken ? jwt_decode(auth.accessToken) : undefined

const roles = decoded?.userInfo?.roles || []
const result = roles.find (role => allowedRoles.includes (role)) ? <Outlet /> : auth?.accessToken ? <Navigate to "/login" /> : <Navigate to "/unauthorized" />
```

#### For Production

`npm i  @fvilers/disable-react-devtools`

```
import {disableReactDevTools}
if(process.env.NODE_ENV === 'production') {
    disableReactDevTools()
}
```

## Using syncfusion

```jsx
import {

} from "@syncfusion/..."
- Grid table
- Line Charts
- Calendars
- text editor
- kanban
- color picker
## TODOs:

[ ]
```
