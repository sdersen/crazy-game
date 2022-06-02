
<img src= 'https://media.giphy.com/media/xT8qBhrlNooHBYR9f2/giphy.gif'>


# The Amazing Planetarium

This is a school project created in react-three-fiber. You can experience our solar system and it's planets in 3D. Click on each planet to read about the planet. You can also se how the real orbits of the planets looks like by pressing the button. Have fun!

# Installation

Clone the project and run `npm install` and then `npm start`. Or visit [The Amazing Planetarium](https://amazing-planetarium.netlify.app/)

# Changelog

<details>
<summary>View entire changelog</summary>
<br>

-   [#1 - React set-up, created canvas, spher and stary skies.](https://github.com/sdersen/crazy-game/pull/1)
-   [#2 - Added textures and Roboto-fonts.](https://github.com/sdersen/crazy-game/pull/2)
-   [#3 - Orbit for planet.](https://github.com/sdersen/crazy-game/pull/1)
-   [#4 - Sun as light and planet rotation on Y-axis.](https://github.com/sdersen/crazy-game/pull/4)
-   [#5 - Orbit on Jupiter and name changes.](https://github.com/sdersen/crazy-game/pull/5)
-   [#6 - Venus and it's orbiot](https://github.com/sdersen/crazy-game/pull/6)
-   [#7 - Neptune and it's orbit](https://github.com/sdersen/crazy-game/pull/7)
-   [#8 - Earth and it's orbit](https://github.com/sdersen/crazy-game/pull/8)
-   [#9 - Mercury and it's orbit](https://github.com/sdersen/crazy-game/pull/9)
-   [#10 - Mars and it's orbit](https://github.com/sdersen/crazy-game/pull/10)
-   [#11 - Uranus and it's orbit](https://github.com/sdersen/crazy-game/pull/11)
-   [#12 - Saturn and it's ring and Orbit](https://github.com/sdersen/crazy-game/pull/12)
-   [#13 - New structure including routes ](https://github.com/sdersen/crazy-game/pull/13)
-   [#14 - Change of Router and fetch for singlePlanet](https://github.com/sdersen/crazy-game/pull/14)
-   [#15 - Completion singlePlanet info and Intro-info](https://github.com/sdersen/crazy-game/pull/15)
-   [#16 - Audio w play/pause function](https://github.com/sdersen/crazy-game/pull/16)
-   [#18 - Real orbit logic](https://github.com/sdersen/crazy-game/pull/18)
-   [#19 - Removed unused code and comments](https://github.com/sdersen/crazy-game/pull/19)
-   [#20 - Toggle on trueOrbit onClick](https://github.com/sdersen/crazy-game/pull/20)
-   [#21 - Toogle play/paus btn](https://github.com/sdersen/crazy-game/pull/21)
-   [#22 - State on introText in localstorage](https://github.com/sdersen/crazy-game/pull/22)
-   [#23 - Animation and pace of orbit](https://github.com/sdersen/crazy-game/pull/23)
-   [#24 - New orbit-btn and fix on introtext](https://github.com/sdersen/crazy-game/pull/24)
-   [#25 - removed individual mass and created mass-component](https://github.com/sdersen/crazy-game/pull/25)
-   [#26 - Sizes adjusted to be user friendly](https://github.com/sdersen/crazy-game/pull/26)
-   [#27 - removed unused elements, added, favicon, updated readme](https://github.com/sdersen/crazy-game/pull/27)
-   [#28 - Fetch for orbit in separete file](https://github.com/sdersen/crazy-game/pull/28)
-   [#29 - Added orbit logic](https://github.com/sdersen/crazy-game/pull/29)
-   [#30 - Update Jupiter.js](https://github.com/sdersen/crazy-game/pull/30)
-   [#31 - Final fixes](https://github.com/sdersen/crazy-game/pull/31)
</details>

# Code Review by Chris & Simon

1. `components/SinglePlanet/singelPlanet.js`: [minor] Spelling misstake on component.
2. `components/Button/buttonTwo.js`: [minor] There is no buttonOne? Could maybe have a more descriptive name or just ‘button’.
3. `assets/images/earth.jpeg`: [minor] The image might be a tad too large (~4,5mb).
4. `general`: When visiting a planet, it would be nice with some sort of back/‘return-to-solar-system’-button.
5. `general`: The mute function does not work after you visit a planet.
6. `general`: Planet orbits are the wrong way around. The planet farthest from the sun orbits the sun faster than the one closest to it and so on.
7. `general`: Instead of adding/using styles in JS, try to use CSS styles and toggle them with JS.
8. `GIF`: The GIF in the readme is broken :(
9. `general`: [minor] Add .DS_store to gitignore.
10. Cool idea and well executed! Good job 👍🏼


# Testers

Tested by the following people:

1. Emma Hansson
2. Albin Andersson
3. Jennifer Andersson
4. Johanna Jönsson

Tested by the following muggles (non-coders):

1. Axel Ahlman
2. Saga Molin
3. Carl Malmer
4. Anna Malmer
