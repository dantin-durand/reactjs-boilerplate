# ReactJS boilerplate

It's a boilerplate for ReactJS projects.
This project contains:

- [React-Router-Dom](https://v5.reactrouter.com/web/guides/quick-start) - router
- [Redux/ReduxToolkit](https://redux-toolkit.js.org/introduction/getting-started) - store
- [TailwindCSS](https://tailwindcss.com/docs/installation) - styling
- [Framer-motion](https://www.framer.com/docs/) - animations
- React-hook-form - form
- PWA - service worker

This boilerplate it's my vision for a stability and performance of ReactJS projects.

## Installation

1. Clone the repository: `git clone git@github.com:dantin-durand/reactjs-boilerplate.git`

2. Remove the `.git` folder: `rm -rf .git`

3. install the dependencies: `yarn`

4. start the project: `yarn start`

---

Execute all steps in one command:

```
git clone git@github.com:dantin-durand/reactjs-boilerplate.git && rm -rf .git && yarn && yarn start
```

## Structure

```

├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── atoms/
│   │   ├── molecules/
│   │   └── organims/
│   │
│   ├── core/
│   │   └── store.js
│   │
│   ├── features/
│   │
│   ├── router/
│   │
│   └── themes/
│
├── tailwind.config.js
└── package.json

```

## Credits

Developed by [@dantin-durand](https://github.com/dantin-durand)
