---
slug: solid-principles
title: Princípios S.O.L.I.D
authors: [nixoletas]
tags: [solid, architecture]
image: /img/nick-logo.png
description: Princípios SOLID   
keywords: ["solid", "architecture"]
---

## Princípios S.O.L.I.D

S = Single Responsibility

O = Open/Closed

L = Liskov Substitution

I = Interface Segregation

D = Dependency Inversion

<!-- truncate -->

### Introdução

- [Vídeo do Filipe Deschamps explicando SOLID](https://www.youtube.com/watch?v=6SfrO3D4dHM)

- [Artigo do Medium de Ugonna Thelma](https://medium.com/backticks-tildes/the-s-o-l-i-d-principles-in-pictures-b34ce2f1e898)

Para deixar fácil de seguir, vou usar o termo “Class” mas note que pode se aplicar a uma Function, Method ou Module neste artigo.

---

### Single Responsibility
`responsabilidade única`

Uma classe deve ter apenas uma responsabilidade.

![Exemplo de classe com responsabilidade única](/img/blog/single-responsibility.webp)

Você não pode ser tudo ao mesmo tempo. Não pode ser um chefe de cozinha, um jardineiro, pintor e motorista.

Se uma classe tem muitas responsabilidades, aumenta a possibilidade de bugs porque fazer alterações em uma de suas responsabilidades, pode afetar as outras sem você saber.

O objetivo desse princípio é separar comportamentos. **Se bugs aparecerem, afetam apenas uma responsabilidade**.

---

### Open/Closed
`aberto/fechado`

Uma classe deve ser fechada para modificações, mas aberta para extensões.

![Exemplo de classe aberta para extensões](/img/blog/open-closed.webp)

Mudar o comportamento de uma classe **afetará todos os sistemas que usam essa classe**. Se você quer que uma classe tenha mais funções, o ideal é atrbuir uma função já existente à ela, não criar uma nova função dentro dela, ou seja, fechar ela pra modificações e extender o seu comportamento.

Ilustração: Não use a mesma mão para cortar e pintar, use uma mão para cortar e outra para pintar.

---

### Liskov Substitution

Esse foi o mais difícil de entender na minha opinião.

![liskov](/img/blog/liskov.webp)

Basicamente, se temos uma classe e criamos uma subclasse utilizando herança, o objeto ou instância dessa subclasse deve conseguir substituir a superclasse sem quebrar o código. 

Entendi foi nada. Calma!

Uma explicação simples, imagine que você tenha uma classe mãe chamada ave:

```javascript
class Ave {
    void Voar(){
        System.out.println("Eu posso voar");
    }
    void Bicar(){
        System.out.println("Eu posso bicar");
    }
}

class PicaPau extends Ave{
    @Override
    void Voar() {
        super.Voar();
    }
    @Override
    void Bicar() {
        super.Bicar();
    }
}
```

Nesse exemplo podemos usar os métodos da classe `Ave` tranquilamente na classe PicaPau, porém imagine criar uma nova classe `Pinguim` que não pode voar. 

```javascript
class Pinguim extends Ave{
    @Override
    void Bicar() {
        super.Bicar();
    }
    // Pinguim não pode voar portanto não implementa Voar()
}
```

Se você estivesse usando o método `Voar()` da sua classe mãe Ave no código e fosse substituir `Ave` por `Pinguim` ocorreria uma exceção pois `Pinguim` não implementa `Voar()`

---

### Interface Segregation

`Segregação de interface`

Clientes não devem ser forçados a depender de métodos que eles não usam

![wiggle-antena](/img/blog/wiggle-antena.webp)

Quando uma Classe é obrigada a executar ações que não são úteis, isso é um desperdício e pode produzir bugs inesperados se a Classe não tiver a capacidade de executar essas ações.

Uma Classe deve executar apenas as ações necessárias para cumprir seu papel. Qualquer outra ação deve ser completamente removida ou movida para outro lugar se puder ser usada por outra Classe no futuro.

**Objetivo**

Este princípio visa dividir um conjunto de ações em conjuntos menores para que uma Classe execute APENAS o conjunto de ações que ela requer.

---

### Dependency Inversion
`Inversão de dependência`

Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações.

Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações.

![Dependency Inversion](/img/blog/dependency-inversion.webp)

Primeiramente, vamos definir os termos usados aqui de forma mais simples

- **Módulos de alto nível**: Classe que executam uma ação com uma ferramenta.
- **Módulos de baixo nível**: A ferramenta necessária para executar a ação.

- **Abstração**: Representa uma interface que conecta as duas classes.

- **Detalhes**: Como as ferramentas funcionam.

Este princípio diz que uma Classe não deve ser fundida com a ferramenta que ela usa para executar uma ação. Em vez disso, ela deve ser fundida à interface que permitirá que a ferramenta se conecte à Classe.

Também diz que tanto a Classe quanto a interface não devem saber como a ferramenta funciona. No entanto, a ferramenta precisa atender à especificação da interface.

**Objetivo**

Este princípio visa reduzir a dependência de uma Classe de alto nível na Classe de baixo nível introduzindo uma interface.
