# Shuttle Resto

Search your favorite resto in a second 🍽️

## Features

- Search
- List of Restaurants
  - Restaurant Menus
- Profile

## Demo (WIP)

Demo can be found here [Video Demo]()
// adding link here

## Getting Started

### Installing

1. Clone the repo.
2. Install `$ yarn install` and `pod install`
3. Run iOS app with `$ yarn ios`
4. Run Android app with `$ yarn android`

### E2E Testing

run `$ yarn e2e-ios` and `$ yarn yarn e2e-android`

### Stack

- React Native
- UI Library: react-native-paper
- State Management: Redux with @rematch
- Responsive Design: react-native-size-matters
- Navigation: react-navigation 6
- Icons: react-native-vector-icons
- List: @shopify/flash-list
- Import path management: Module Resolver
- E2E: Detox

## Code Style Guide

### Shortcut import with Babel (Modul Resolver)

All babel configuration can found on `babel.config.js` and `tsconfig.js` file.

```javascript
// Don't
import {SomeComponents} from '../../common/components';

// Do
import {SomeComponents} from '@Components';
```

### Pattern and Project Structure

iam using **Domain Driven Design** in this app for project/folder structure, this can be apply for modular apps and this architecture can be optimised for large scale apps.

`/common` for all common/universal things that can be used everywhere in the project (eg. components)
`/feature` will consist every each of module/feature that we have on the app (eg. Restaurant)

#### Project Structure

`/common`
`/components` for generic/universal components will be in here, eg. Text
`/constants` for constants variable eg. Metrics
`/hooks` for custom hooks
`/navigations` all related to the react navigation and Routing
`/services` for API or remote call
`/stores` state management eg. Redux
`/types` for all types
`/utils` utility eg. String, Date, etc
`/features`
`/Home` this is the Search page or the entry point of the app
`/Profile` Profile page that will show profile data and setting menu
`/components` components that being used in Profile screen
`/screens` list of page or main screen
`/Restaurant` List of restaurant and detail of it (restaurant menus)
`/components` components that being used in Restaurant page and detail Restaurant Eg. Item and MenuItem
`/model` Rematch model for Restaurant state
`/screens` list of page or main screen of Restaurant
