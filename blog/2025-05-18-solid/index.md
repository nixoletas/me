---
slug: solid-principles
title: S.O.L.I.D Principles
authors: [nixoletas]
tags: [solid, architecture]
image: /img/nick-logo.png
description: SOLID Principles   
keywords: ["solid", "architecture"]
---

## S.O.L.I.D Principles

S = Single Responsibility

O = Open/Closed

L = Liskov Substitution

I = Interface Segregation

D = Dependency Inversion

<!-- truncate -->

### Introduction

- [Filipe Deschamps' video explaining SOLID](https://www.youtube.com/watch?v=6SfrO3D4dHM)

- [Medium article by Ugonna Thelma](https://medium.com/backticks-tildes/the-s-o-l-i-d-principles-in-pictures-b34ce2f1e898)

To make it easy to follow, I'll use the term "Class" but note that it can apply to a Function, Method, or Module in this article.

---

### Single Responsibility

A class should have only one responsibility.

![Example of a class with single responsibility](/img/blog/single-responsibility.webp)

You can't be everything at once. You can't be a chef, gardener, painter, and driver all at the same time.

If a class has many responsibilities, it increases the possibility of bugs because making changes to one of its responsibilities may affect the others without you knowing.

The goal of this principle is to separate behaviors. **If bugs appear, they affect only one responsibility**.

---

### Open/Closed

A class should be closed for modifications but open for extensions.

![Example of a class open for extensions](/img/blog/open-closed.webp)

Changing a class's behavior **will affect all systems that use that class**. If you want a class to have more functions, it's better to assign an existing function to it rather than creating a new function inside it - in other words, close it for modifications and extend its behavior.

Illustration: Don't use the same hand to cut and paint, use one hand for cutting and another for painting.

This becomes a snowball effect because with each new requirement, it becomes more difficult to implement and manage everything, and that's when you end up getting all tangled up.

---

### Liskov Substitution

This was the hardest one to understand in my opinion.

![liskov](/img/blog/liskov.webp)

Basically, if we have a class and create a subclass using inheritance, the object or instance of that subclass should be able to replace the superclass without breaking the code.

Still confused? Let me explain!

A simple explanation: imagine you have a parent class called Bird:

```javascript
class Bird {
    void Fly(){
        System.out.println("I can fly");
    }
    void Peck(){
        System.out.println("I can peck");
    }
}

class Woodpecker extends Bird{
    @Override
    void Fly() {
        super.Fly();
    }
    @Override
    void Peck() {
        super.Peck();
    }
}
```

In this example, we can use the methods from the `Bird` class easily in the Woodpecker class. However, imagine creating a new `Penguin` class that cannot fly.

```javascript
class Penguin extends Bird{
    @Override
    void Peck() {
        super.Peck();
    }
    // Penguin cannot fly, therefore it doesn't implement Fly()
}
```

If you were using the `Fly()` method from your parent Bird class in the code and were to replace `Bird` with `Penguin`, an exception would occur because `Penguin` doesn't implement `Fly()`.

---

### Interface Segregation

Clients should not be forced to depend on methods they don't use

![wiggle-antena](/img/blog/wiggle-antena.webp)