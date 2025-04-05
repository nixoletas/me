---
title: Fut Evento
description: Create and manage soccer events with one click
---

import { CodeButton } from '../../src/components/CodeButton';
import { DemoButton } from '../../src/components/DemoButton';
import { Tag } from '../../src/components/Tag';
import { Justify } from '../../src/components/Justify';

<div style={{marginBottom: "1rem"}}>
<Tag docLink="https://react.dev/">React</Tag>
<Tag docLink="https://supabase.com/">Supabase</Tag>
</div>

<DemoButton liveLink="https://futevento.com.br/"/>

---

![futevento-screenc](\img\projects\futevento.png)
![futevento-screenc2](\img\projects\futevento2.png)
![futevento-screenc3](\img\projects\futevento3.png)
![futevento-screenc3](\img\projects\futevento4.png)

# About the project

---

<Justify>
# Welcome to Futevento ⚽

![image](https://github.com/user-attachments/assets/2b8b3c15-3d33-4ced-8ad4-e5cbac1733c2)

## Project info

**URL**: https://futevento.com.br

## How the project was born

With the problem of always having to send list after list on whatsApp groups with people having to copy the list, add their name and resend it, i came up with the idead of creating a list organizer but aiming towards the soccer theme.

The project was kickstarted using lovable, an AI code generator. Then i added a few features, google Maps API and Supabase Auth.

![image](https://github.com/user-attachments/assets/6f28d2f5-dad1-4aa1-b847-88689e63ef21)

## How it works

1. A user can create a list of events, add a location and a date. Then they can share the list with others via link.

2. When someone clicks on the link, they can see details about the event including the location on the map.

3. The user can add their name to the list and the list will be updated automatically.

4. The user can also see the list of people who are going to the event.

5. The creator of the list can see the list of people who are going and copy the list to clipboard, to paste on whatsApp.

## Setup

For this project to work, you need to create a .env.local file and add the following variables:

```env
VITE_GOOGLE_MAPS_API_KEY=isadjasiod...
project_id=sdapdoka...
VITE_SUPABASE_URL=https://xxxxxxxxx.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=dasdsapdka....
```

You'll need to create a Google Maps API key and activate the Google Maps API.
You can get the Google Maps API key [here](https://console.cloud.google.com/apis/api/maps_backend/overview?project=amgadiltkvpcjtrbfvhx)

You'll need to create a Supabase project and get the project id and publishable key. You can get the Supabase project id and publishable key [here](https://supabase.com/dashboard/project/amgadiltkvpcjtrbfvhx/settings/api)

## Run the project:

- Step 1: Clone the repository

```sh
git clone https://github.com/nixoletas/fut-evento.git
```

- Step 2: Install the dependencies

```sh
npm i
```

- Step 3: Start the development server

```sh
npm run dev
```

## Technologies used for this project

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Supabase
- Google Maps API
- Netlify
- Registro.br

</Justify>
