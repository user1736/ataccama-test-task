# Recursive Table App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

To run project use:

```
npm i
npm start
```

## Data Structure

Since sample data looks pretty organised and already contains keys, I decided to normalise it within the application. However I didn't find a quick way to describe kids/records structure with [normalizr](https://github.com/paularmstrong/normalizr) schemas, so I implemented my own normalise function, with following assumptions:

1. Each entity item contains `data` and `kids` keys;
1. Within `data` key might be a various number of key/value pairs (but at least one should represent id);
1. Every provided id is unique within the same entity type (anyway, it could be easily modified to use combined ids);
1. `kids` key might have a various number of key/value pairs, where:
  * _key_ is a child entity name;
  * _value_ is an object with `record` key, which contains actual child entities;
1. Available schemas are:
  * patients - root entity;
  * relatives - child entity, hides under `has_relatives` key in `kids`;
  * phones - child entity, hides under `has_phone` key in `kids`;

## Data Layer

To make data layer I picked Redux (mainly, because it's the tech you're using) and isolate all data connections within two container components `RootTable` and `ChildTable`.
Here are some notes, about the implementation:
* Since there were no strict specifications on item deleting, I did it the easiest way - by just removing link from the parent element;
* Dealing with deep object structures in JS might be quite painful (checkout this pyramid of doom in rootReducer :)), however I decided not to involve heavy artillery ([ImmutableJS](https://facebook.github.io/immutable-js/)), because there's only one reducer;

## Styles

Considering project size is quite small and design isn't primary task focus, I decided to go on with css, without any extra preprocessors. However, to ensure css extensibility, I picked BEM methodology.

Things I keep in mind but omit for development speed:
1. add css modules;
1. add css linting tool (like [CSSComb](http://csscomb.com/));
1. add proper styles, according to design (fonts, paddings, button icons, text alignment, etc);
1. add proper reset.css;

## Code Quality

I used lint scheme shipped with `create-react-app` and formatted all the code using [prettier](https://prettier.io/).
Unfortunately, there are no actual tests now, since good test coverage requires a lot of time. Let me know if it's a critical task criteria.

## Licence

This application is [WTFPL Licensed](http://www.wtfpl.net/).
