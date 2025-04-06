---
title: Fut Evento
description: Crie e gerencie eventos de futebol com um clique
---

import { CodeButton } from '@site/src/components/CodeButton';
import { DemoButton } from '@site/src/components/DemoButton';
import { Tag } from '@site/src/components/Tag';
import { Justify } from '@site/src/components/Justify';

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

# Sobre o projeto

---

<Justify>
# Bem-vindo ao Futevento ⚽

![image](https://github.com/user-attachments/assets/2b8b3c15-3d33-4ced-8ad4-e5cbac1733c2)

## Informações do projeto

**URL**: https://futevento.com.br

## Como o projeto nasceu

Com o problema de sempre ter que enviar lista após lista em grupos do WhatsApp, com as pessoas tendo que copiar a lista, adicionar seus nomes e reenviá-la, tive a ideia de criar um organizador de listas com foco no tema futebol.

O projeto foi iniciado usando lovable, um gerador de código com IA. Depois adicionei algumas funcionalidades, API do Google Maps e Autenticação Supabase.

![image](https://github.com/user-attachments/assets/6f28d2f5-dad1-4aa1-b847-88689e63ef21)

## Como funciona

1. Um usuário pode criar uma lista de eventos, adicionar um local e uma data. Então eles podem compartilhar a lista com outras pessoas via link.

2. Quando alguém clica no link, pode ver detalhes sobre o evento, incluindo a localização no mapa.

3. O usuário pode adicionar seu nome à lista e a lista será atualizada automaticamente.

4. O usuário também pode ver a lista de pessoas que vão ao evento.

5. O criador da lista pode ver a lista de pessoas que vão e copiar a lista para a área de transferência, para colar no WhatsApp.

## Configuração

Para que este projeto funcione, você precisa criar um arquivo .env.local e adicionar as seguintes variáveis:

```env
VITE_GOOGLE_MAPS_API_KEY=isadjasiod...
project_id=sdapdoka...
VITE_SUPABASE_URL=https://xxxxxxxxx.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=dasdsapdka....
```

Você precisará criar uma chave de API do Google Maps e ativar a API do Google Maps.
Você pode obter a chave de API do Google Maps [aqui](https://console.cloud.google.com/apis/api/maps_backend/overview?project=amgadiltkvpcjtrbfvhx)

Você precisará criar um projeto Supabase e obter o ID do projeto e a chave publicável. Você pode obter o ID do projeto e a chave publicável do Supabase [aqui](https://supabase.com/dashboard/project/amgadiltkvpcjtrbfvhx/settings/api)

## Executar o projeto:

- Passo 1: Clone o repositório

```sh
git clone https://github.com/nixoletas/fut-evento.git
```

- Passo 2: Instale as dependências

```sh
npm i
```

- Passo 3: Inicie o servidor de desenvolvimento

```sh
npm run dev
```

## Tecnologias utilizadas neste projeto

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Supabase
- API do Google Maps
- Netlify
- Registro.br

</Justify>
