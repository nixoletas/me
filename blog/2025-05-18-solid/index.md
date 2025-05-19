---
slug: solid-principles
title: Princípios SOLID
authors: [nixoletas]
tags: [solid, architecture]
image: /img/nick-logo.png
description: Princípios SOLID   
keywords: ["solid", "architecture"]
---

## Princípios SOLID

S = Single Responsibility

O = Open/Closed

L = Liskov Substitution

I = Interface Segregation

D = Dependency Inversion

<!-- truncate -->

### Links

- [Vídeo do Filipe Deschamps explicando SOLID](https://www.youtube.com/watch?v=6SfrO3D4dHM)

- [Artigo do Medium de Ugonna Thelma](https://medium.com/backticks-tildes/the-s-o-l-i-d-principles-in-pictures-b34ce2f1e898)

Para deixar fácil de seguir, vou usar o termo “Class” mas note que pode se aplicar a uma Function, Method ou Module neste artigo.

---

### Single Responsibility

Uma classe deve ter apenas uma responsabilidade.

![Exemplo de classe com responsabilidade única](/img/blog/single-responsibility.webp)

Você não pode ser tudo ao mesmo tempo. Não pode ser um chefe de cozinha, um jardineiro, pintor e motorista.

Se uma classe tem muitas responsabilidades, aumenta a possibilidade de bugs porque fazer alterações em uma de suas responsabilidades, pode afetar as outras sem você saber.

O objetivo desse princípio é separar comportamentos. **Se bugs aparecerem, afetam apenas uma responsabilidade**.

---

### Open/Closed

Uma classe deve ser fechada para modificações, mas aberta para extensões.

![Exemplo de classe aberta para extensões](/img/blog/open-closed.webp)

Mudar o comportamento de uma classe **afetará todos os sistemas que usam essa classe**. Se você quer que uma classe tenha mais funções, o ideal é atrbuir uma função já existente à ela, não criar uma nova função dentro dela, ou seja, fechar ela pra modificações e extender o seu comportamento.

Ilustração: Não use a mesma mão para cortar e pintar, use uma mão para cortar e outra para pintar.

---