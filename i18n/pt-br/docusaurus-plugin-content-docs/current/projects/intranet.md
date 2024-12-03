---
title: Intranet GovBR
description: Intranet do batalhão feita com Angular e Strapi
---

import { CodeButton } from '../../../../../src/components/CodeButton';
import { DemoButton } from '../../../../../src/components/DemoButton'; 
import { Tag } from '../../../../../src/components/Tag';
import { Justify } from '../../../../../src/components/Justify';

<div style={{marginBottom: "1rem"}}>
<Tag docLink="https://angular.dev/">Angular</Tag>
<Tag docLink="https://strapi.io/">Strapi</Tag>
<Tag docLink="https://expressjs.com/">Express</Tag>
</div>

<CodeButton codeLink="https://github.com/nixoletas/intranet-govbr"/>
<DemoButton liveLink="https://nixoletas.github.io/intranet-govbr"/>

---

![govbr-screenc](\img\intranet-govbr.png)

# Sobre o projeto
---
<Justify>
Enquanto estava em um intervalo de serviço, o governo alterou o seu padrão de identidade digital, então fui dar uma olhada rápida no que estava sendo feito pela equipe de desenvolvimento. O projeto era Open Source, disponível no Gitlab [govbr-ds-core](https://gitlab.com/govbr-ds/bibliotecas/javascript/govbr-ds-core) e a [documentação](https://www.gov.br/ds/home) estava muito boa e clara.

Comecei a desenvolver a partir do [quickstart do Angular](https://angular.dev) do repositório deles [govbr-ds-quickstart-angular](https://gitlab.com/govbr-ds/bibliotecas/javascript/govbr-ds-quickstart-angular), o que me ajudou a desenvolver meus conhecimentos sobre esse Framework.

Depois de ter uma versão consolidada para substituir nossa Intranet, que na época estava sendo executada no Joomla, a equipe de TI e eu decidimos fazer um teste. O desempenho foi ótimo e os usuários gostaram muito!

Angular foi usado no front-end e o Back-end foi feito com [Strapi](https://strapi.io/), um CMS headless, mas poderoso (trocadilho intencional).

Este é um projeto real que ainda está ativo até hoje e atualmente está rodando com [docker](https://www.docker.com/) em um servidor [Nginx](https://nginx.org/).

### Por que Angular e não Joomla?
---
Este projeto foi desenvolvido um pouco fora do padrão atual adotado pelo Exército, que é o Joomla. Embora o Joomla seja um CMS com certa maturidade, ele não é uma ferramenta simples de usar e, às vezes, uma página simples acaba se tornando muito complexa.

#### Aplicação de Página Única (SPA)
Angular é um framework maduro que permite a criação de Single-Page Applications (SPA), e o maior gargalo da antiga intranet era a demora milenar para navegar entre as rotas. Um framework que consegue lidar com essas rotas de maneira eficiente melhorou bastante a experiência do usuário.

#### Angular CLI
O Angular CLI agiliza o trabalho do desenvolvedor, criando componentes, serviços e pipes de maneira muito simples e rápida.

criar novo componente
ng g c nome-do-componente

Copiar código

criar novo serviço
ng g s nome-do-serviço

kotlin
Copiar código

### Como foi implementado
---
A ideia principal era fazer uma transição que não divergisse da antiga intranet e não deixasse os usuários "perdidos" na nova interface. Aproveitando o novo aprendizado e o quickstart do Angular do repositório govbr-ds-quickstart-angular, comecei a desenvolver este projeto. Quando vi que havia um app quase consolidado, decidi subir a nova intranet.

A nova interface atualmente funciona com dois outros servidores, um para os assets e outro para criar artigos, carrosséis, pop-ups e outras mídias. O modelo foi bem recebido e pude implementar várias outras funcionalidades, como: abertura de chamados online, livro de viagens, modal de aniversários, exibição de temperatura e umidade. Este projeto não contém toda a funcionalidade do projeto que está rodando na OM, se você quiser saber mais, não hesite em entrar em contato nas redes sociais.

</Justify>