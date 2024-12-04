---
title: GovBR Intranet
description: Battalion's intranet made with Angular and Strapi
---

import { CodeButton } from '../../src/components/CodeButton';
import { DemoButton } from '../../src/components/DemoButton'; 
import { Tag } from '../../src/components/Tag';
import { Justify } from '../../src/components/Justify';

<div style={{marginBottom: "1rem"}}>
<Tag docLink="https://angular.dev/">Angular</Tag>
<Tag docLink="https://strapi.io/">Strapi</Tag>
<Tag docLink="https://expressjs.com/">Express</Tag>
<Tag docLink="https://www.gov.br/ds/home">govbr-ds</Tag>
</div>

<CodeButton codeLink="https://github.com/nixoletas/intranet-govbr"/>
<DemoButton liveLink="https://nixoletas.github.io/intranet-govbr"/>

---

![govbr-screenc](\img\intranet-govbr.png)

# About the project
---
<Justify>
While i was in duty break, the government changed it's standard digital identity, so i just went to take a quick look at what was being done by the development team. The project was Open Source, available at Gitlab [govbr-ds-core](https://gitlab.com/govbr-ds/bibliotecas/javascript/govbr-ds-core) and the [documentation](https://www.gov.br/ds/home) was really good and clear.

I started developing from the [Angular](https://angular.dev) quickstart from their [repo](https://gitlab.com/govbr-ds/bibliotecas/javascript/govbr-ds-quickstart-angular) and it helped me develop my knowledge around that Framework.

After i had some sort of solid replacer for our Intranet that at the time was being run in Joomla, the IT team and i decided to run for a test, it did pretty good in performance and the users enjoyed it a lot!

Angular was the front-end and the Back-end was [Strapi](https://strapi.io/), a Headless yet Powerful CMS (pun intended).

This is a real project that is still up to this date and currently is being run with [docker](https://www.docker.com/) on a [Nginx](https://nginx.org/) server.

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