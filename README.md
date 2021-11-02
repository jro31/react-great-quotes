The second project based on *'Section 20: Building a Multi-Page SPA with React Router'* of Academind's *['React - The Complete Guide'](https://acad.link/reactjs)* course, this repo has commits of examples of:

* Adding the initial routing (all of which is also covered in individual commits of the [react-react-router-demo](https://github.com/jro31/react-react-router-demo) repo) - [Commit link](https://github.com/jro31/react-great-quotes/commit/576c2033ad746c95f4082b6c7fe31d9c8b17b1a2)
  * Adding the base routes with the `<BrowserRouter>` and `<Route>` components
  * Adding a `<Switch>` component to ensure that only one component is rendered at a time, with `exact` props to have paths that start the same way, without routing to the wrong page
  * Adding the `<Redirect>` component to redirect when the `/` path is accessed
  * Using the `useParams()` hook to extract the path params
  * Adding a nested route with a dynamic path
    * Not covered in the 'react-react-router-demo' repo, but pretty obvious
* Adding a `<Layout>` "wrapper" component, which wraps every other component in the app (in order to display a navbar on every page). This commit also adds the navbar (the `MainNavigation` component), which uses `<NavLink>` components to highlight the active link *in* the navbar - [Commit link](https://github.com/jro31/react-great-quotes/commit/fbad59c59901ea1bd02e04e4ea2e43285b495131)
* Adding a link to a dynamic URL using the `<Link>` component, and handling if the dynamic URL doesn't exist (for example, if the user manually enters an ID that doesn't exist) - [Commit link](https://github.com/jro31/react-great-quotes/commit/0653d648a94fc7e2e7046c1c3a2a8e88b119d4af)
* Adding a 'Not Found' page (a 404 page) and displaying it if the entered URL doesn't match any route - [Commit link](https://github.com/jro31/react-great-quotes/commit/c76629325b4a00371b3a4fa2c9a4d6f78575ba24)
* Adding 'programatic navigation' (re-routing the user automatically) using the `useHistory()` hook. The commit includes an explanation of the difference between the `useHistory()` `push` method, and the `useHistory()` `replace` method - [Commit link](https://github.com/jro31/react-great-quotes/commit/7cb4fbda03c674ddecaa7ab3b98c02d13ae1a22b)
* Using the `<Prompt>` component to warn users when they try to navigate away from a page, in this instance if they've started entering data into a form (but not submitted it yet) - [Commit link](https://github.com/jro31/react-great-quotes/commit/69903fb32ad4162d0778885beeb307ecdaa6e627)
* Using query parameters to `sort` the content of the page based on the URL - [Commit link](https://github.com/jro31/react-great-quotes/commit/574b2bc55ad7d10736bb80a3379c6f7d56fae623)
  * Uses the `useHistory()` and `useLocation()` hooks, and the `URLSearchParams()` javascript function
* Using nested routes and the `<Link>` component to add a 'Load comments' button which loads the comments, but which disappears once the comments are showing - [Commit link](https://github.com/jro31/react-great-quotes/commit/8aaebf6d9dd6c16b6aa083a01e97cd9cf38e8ddc)
* Using the `useRouteMatch()` hook (as well as `useLocation`) to dynamically generate nested routes, so that if the parent route ever changes, you don't have to change all of the nested routes - [Commit link](https://github.com/jro31/react-great-quotes/commit/ca4fe4fc7ac3be1810c9ff4865962cb83407445e)
* Using an object rather than a string as the argument for `history.push()` (where `const history = useHistory()`) in order to be more readable - [Commit link](https://github.com/jro31/react-great-quotes/commit/9b1b2087671ca53eadad4bea3c058c9fb73dcccc)
* Replacing the dummy data with sending and fetching quotes from a server - [Commit link](https://github.com/jro31/react-great-quotes/commit/72cd45891d0fc433741de4e0dc9496b8a0c429d4)
  * Everything in this commit has been covered in previous commits in this, or in other repos, so doesn't contain explanation comments
* Adding the comments feature, to complete the app - [Commit link](https://github.com/jro31/react-great-quotes/commit/b5bc098a0d051644156ca1c7818c5af2c2e37e69)
  * This commit also has nothing new, so look at previous commits for similar code with explanations
