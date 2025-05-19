---
slug: data-structure
title: Estrutura de dados
authors: [nixoletas]
tags: [estrutura de dados, fundamentos de programação]
image: /img/nick-logo.png
description: Relembrando estrutura de dados
keywords: ["estrutura de dados", "fundamentos de programação"]
---

## O que são dados?

<!-- truncate -->

Os dados (e seus diversos tipos) são os blocos básicos da programação. Eles representam uma unidade ou um elemento de informação que pode ser acessado através de um identificador - por exemplo, uma variável.

<!-- truncate -->

A maior parte das linguagens de programação trabalha com variações baseadas nos quatro tipos primitivos abaixo:

---

- **INT** ou número inteiro: valores numéricos inteiros (positivos ou negativos);
- **FLOAT** ou o chamado “ponto flutuante”: valores numéricos com casas após a vírgula (positivos ou negativos);
- **BOOLEAN** ou booleanos: representado apenas por dois valores, “verdadeiro” e “falso”. Também chamados de operadores lógicos;
- **TEXT** ou cadeias de caracteres: sequências ou cadeias de caracteres, utilizados para manipular textos e/ou outros tipos de dados não numéricos ou booleanos, como hashes de criptografia.

O JavaScript, por exemplo, tem como tipos primitivos embutidos na estrutura básica da linguagem: number, string, boolean e symbol (de “nome simbólico”, usado entre outras coisas para criar propriedades únicas em objetos). Já o C# (C-Sharp) trabalha com uma quantidade maior de tipos primitivos, de acordo com o espaço de memória que será ocupado pela variável: Boolean, Byte, SByte, Int16, UInt16, Int32, UInt32, Int64, UInt64, IntPtr, UIntPtr, Char, Double e Single. O C, por sua vez, não tem um tipo próprio de dado booleano; false é representado pelo número 0 e qualquer outro algarismo representa true. Outras linguagens podem trabalhar com outras variações.

## Características das estruturas de dados

Cada estrutura de dados tem um conjunto de métodos próprios para realizar operações como:

- ⬆️ Inserir ou excluir elementos;
- 🔎 Buscar e localizar elementos;
- 🔄 Ordenar (classificar) elementos de acordo com alguma ordem especificada.

## Tipos de estruturas de dados:

- 📦 Array
- 📦 Linked List
- 📦 Stack
- 📦 Queue
- 📦 Tree
- 📦 Graph
- 📦 Hash Table
- 📦 Heap
- 📦 Trie

### Array

O array é uma estrutura de dados linear que armazena uma coleção de elementos em uma única variável. Os elementos são armazenados sequencialmente, um ao lado do outro, e podem ser acessados através de um índice. Eles não mudam de posição, mas podem ser removidos ou adicionados. São do mesmo tipo de dado.

```javascript
const array = [1, 2, 3, 4, 5];

array[0]; // 1
array[1]; // 2
array[2]; // 3

array.push(6); // [1, 2, 3, 4, 5, 6]
array.pop(); // [1, 2, 3, 4, 5]
array.shift(); // [2, 3, 4, 5]
array.unshift(1); // [1, 2, 3, 4, 5]
```

### Linked List

A linked list é uma estrutura de dados linear que armazena uma coleção de elementos em uma única variável.

```javascript
const linkedList = [1, 2, 3, 4, 5];

linkedList[0]; // 1
linkedList[1]; // 2
linkedList[2]; // 3

linkedList.push(6); // [1, 2, 3, 4, 5, 6]
linkedList.pop(); // [1, 2, 3, 4, 5]
linkedList.shift(); // [2, 3, 4, 5]
linkedList.unshift(1); // [1, 2, 3, 4, 5]
```

### Stack

A stack é uma estrutura de dados linear que armazena uma coleção de elementos em uma única variável.

```javascript
const stack = [1, 2, 3, 4, 5];

stack[0]; // 1
stack[1]; // 2
stack[2]; // 3

stack.push(6); // [1, 2, 3, 4, 5, 6]
stack.pop(); // [1, 2, 3, 4, 5]
stack.shift(); // [2, 3, 4, 5]
stack.unshift(1); // [1, 2, 3, 4, 5]
```

### Queue

A queue é uma estrutura de dados linear que armazena uma coleção de elementos em uma única variável.

```javascript
const queue = [1, 2, 3, 4, 5];

queue[0]; // 1
queue[1]; // 2
queue[2]; // 3

queue.push(6); // [1, 2, 3, 4, 5, 6]
queue.pop(); // [1, 2, 3, 4, 5]
queue.shift(); // [2, 3, 4, 5]
queue.unshift(1); // [1, 2, 3, 4, 5]
```

### Árvore (Tree)

Uma árvore é uma estrutura de dados hierárquica não-linear que consiste em nós conectados por arestas. Cada árvore tem:

- Um nó raiz (root)
- Nós pais e filhos
- Nós folha que não tem filhos

![tree](\img\blog\tree.png)

```python
class TreeNode:
    def __init__(self, valor):
        self.valor = valor
        self.filhos = []
        
    def adicionar_filho(self, filho):
        self.filhos.append(filho)

# Exemplo de uso
raiz = TreeNode("A")
filho1 = TreeNode("B")
filho2 = TreeNode("C")
raiz.adicionar_filho(filho1)
raiz.adicionar_filho(filho2)
filho1.adicionar_filho(TreeNode("D"))
filho1.adicionar_filho(TreeNode("E"))
```

#### Casos de uso

- Representação de hierarquias (sistema de arquivos)
- Árvores de decisão em IA
- Árvores de expressão em compiladores
- Organização de dados (árvores binárias de busca)

#### Complexidade

Acesso: O(log n) para árvores balanceadas, O(n) no pior caso
Inserção: O(log n) para árvores balanceadas, O(n) no pior caso
Busca: O(log n) para árvores balanceadas, O(n) no pior caso
Deleção: O(log n) para árvores balanceadas, O(n) no pior caso

### Graph


### Hash Table


### Heap


### Trie

