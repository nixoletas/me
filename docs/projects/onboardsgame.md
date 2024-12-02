---
title: OnBoardsGame
description: Find your perfect board game to play with your friends!
---

import { CodeButton } from '../../src/components/CodeButton';
import { DemoButton } from '../../src/components/DemoButton'; 
import { Justify } from '../../src/components/Justify';

<CodeButton codeLink="https://github.com/nixoletas/intranet-govbr"/>
<DemoButton liveLink="https://nixoletas.github.io/intranet-govbr"/>

---

![govbr-screenc](\img\projects\onboardsgame.png)

# About the project
---
<Justify>
My friend had this database, actually a spreadsheet of boardgames and wanted to make a front-end

### Why Angular and not Joomla?
---
This project was developed slightly away from the Army's current adoption standard, which is Joomla. Although Joomla is a CMS with a certain maturity, it is not a simple tool to use and sometimes a simple page ends up becoming very complex.

#### Single-Page Application
Angular is a mature framework and allows the creation of Single-Page Application (SPA), and the main bottleneck of the old intranet was waiting millennia to navigate between routes. A framework that can deal with these routes effectively has greatly improved the user experience.

#### Angular CLI
The Angular CLI speeds up the developer's work, creating components, services and pipes in a very simple and fast way.

create new component
```
ng g c component-name
```

create new service

```
ng g s service-name
```

### How it was implemented
---
The main idea was to make a transition that would not diverge from the old intranet and would not leave users "lost" in the new interface. Taking advantage of the new learning and the Angular quickstart from the govbr-ds-quickstart-angular repository itself, I started developing this project. When I saw that there was an almost consolidated app, I decided to upload the new intranet.

The new interface currently works with two other servers, one for assets and one for creating articles, carousels, pop-ups, and other media. The model was well received and I was able to implement several other features such as: opening online tickets, travel book, birthday modal, temperature and humidity display. This project does not contain all the functionality of the project that is running at OM, if you want to know more, don't hesitate to get in touch on social media.
</Justify>