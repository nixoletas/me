---
slug: algorithms
title: Algoritmos
authors: [nixoletas]
tags: [algoritmos, fundamentos de programação]
image: /img/nick-logo.png
description: Relembrando algoritmos
keywords: ["algoritmos", "fundamentos de programação"]
---

# Algoritmos

## Ordenação

---

### Bubble Sort (Ordenação por Bolha)

Prós ✅

1. **Fácil de implementar**:
   O algoritmo é direto e ideal para ensinar conceitos de ordenação.

2. **Ordenação in-place**:
   Requer apenas uma quantidade constante de memória adicional $O(1)$.

3. **Ordenação estável**:
   Mantém a ordem relativa de elementos iguais, o que é útil em certas aplicações.

4. **Otimização possível para melhor caso**:
   Com uma condição de saída antecipada (quando não ocorrem trocas), pode ter desempenho O(n) para dados quase ordenados.

Contras ❌

1. **Muito ineficiente para grandes conjuntos de dados**:
   Possui complexidade de tempo média e pior caso de **O(n²)**, tornando-o impraticável para listas grandes.

2. **Muitas trocas**:
   Realiza mais trocas do que o necessário comparado a algoritmos mais eficientes como insertion sort ou quicksort.

3. **Não adaptativo por padrão**:
   Sem otimização, sempre percorre todas as iterações mesmo se a lista ficar ordenada prematuramente.

4. **Raramente usado na prática**:
   Existem algoritmos com melhor desempenho como Merge Sort, Quick Sort e Tim Sort usados em aplicações reais.

:::info
Pior caso: O(n²) | Melhor caso: O(n)
:::
[Youtube - Bubble Sort por Michael Sambol](https://www.youtube.com/watch?v=xli_FI7CuzA)

```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

sorted_arr = bubble_sort([64, 34, 25, 12, 22, 11, 90])

print(sorted_arr)
```

### Insertion Sort (Ordenação por Inserção)

Prós ✅

1. **Simples e intuitivo**:
   O algoritmo é fácil de entender e implementar.

2. **Melhor desempenho no melhor caso**:
   Pode atingir complexidade de tempo O(n) para dados quase ordenados.

3. **Ordenação estável**:
   Mantém a ordem relativa de elementos iguais, o que é útil em certas aplicações.

Contras ❌

1. **Muito ineficiente para grandes conjuntos de dados**:
   Possui complexidade de tempo média e pior caso de **O(n²)**, tornando-o impraticável para listas grandes.

2. **Não adaptativo por padrão**:
   Sem otimização, sempre percorre todas as iterações mesmo se a lista ficar ordenada prematuramente.

3. **Raramente usado na prática**:
   Existem algoritmos com melhor desempenho como Merge Sort, Quick Sort e Tim Sort usados em aplicações reais.

:::info
Pior caso: O(n²) | Melhor caso: O(n)
:::

[Youtube - Insertion Sort por Michael Sambol](https://www.youtube.com/watch?v=JU767SDMDvA)

```python
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr

sorted_arr = insertion_sort([64, 34, 25, 12, 22, 11, 90])

print(sorted_arr)
```

### Merge Sort (Ordenação por Mesclagem)

Prós ✅

1. **Ordenação estável**:
   Mantém a ordem relativa de elementos iguais, o que é útil em certas aplicações.

2. **Melhor desempenho no melhor caso**:
   Pode atingir complexidade de tempo O(n) para dados quase ordenados.

3. **Não adaptativo por padrão**:
   Sem otimização, sempre percorre todas as iterações mesmo se a lista ficar ordenada prematuramente.

Contras ❌

1. **Não é ordenação in-place**:
   Requer memória adicional proporcional ao tamanho do array de entrada.

2. **Não adaptativo por padrão**:
   Sem otimização, sempre percorre todas as iterações mesmo se a lista ficar ordenada prematuramente.

:::info
Pior caso: O(n log n) | Melhor caso: O(n log n)
:::

[Youtube - Algoritmo Merge Sort por Michael Sambol](https://www.youtube.com/watch?v=4VqmGXwpLqc)

```python
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result

sorted_arr = merge_sort([64, 34, 25, 12, 22, 11, 90])

print(sorted_arr)
```

### Quick Sort (Ordenação Rápida)

Prós ✅

1. **Melhor desempenho no melhor caso**:
   Pode atingir complexidade de tempo O(n) para dados quase ordenados.

2. **Ordenação in-place**:
   Requer apenas uma quantidade constante de memória adicional $O(1)$.

3. **Não adaptativo por padrão**:
   Sem otimização, sempre percorre todas as iterações mesmo se a lista ficar ordenada prematuramente.

Contras ❌

1. **Não é estável por padrão**:
   Elementos iguais podem ser reordenados, o que não é útil em certas aplicações.

2. **Não adaptativo por padrão**:
   Sem otimização, sempre percorre todas as iterações mesmo se a lista ficar ordenada prematuramente.

:::info
Pior caso: O(n²) | Melhor caso: O(n log n)
:::

[Youtube - Algoritmo Quick Sort por Michael Sambol](https://www.youtube.com/watch?v=Hoixgm4-P4M)

```python
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)

sorted_arr = quick_sort([64, 34, 25, 12, 22, 11, 90])

print(sorted_arr)
```

## Busca

### Busca Linear

Prós ✅

1. **Simples e intuitivo**:
   O algoritmo é fácil de entender e implementar.

2. **Melhor desempenho no melhor caso**:
   Pode atingir complexidade de tempo O(n) para dados quase ordenados.

Contras ❌

1. **Muito ineficiente para grandes conjuntos de dados**:
   Possui complexidade de tempo média e pior caso de **O(n²)**, tornando-o impraticável para listas grandes.

2. **Não adaptativo por padrão**:
   Sem otimização, sempre percorre todas as iterações mesmo se a lista ficar ordenada prematuramente.

:::info
Pior caso: O(n) | Melhor caso: O(1)
:::

[Youtube - Algoritmo de Busca Linear por Michael Sambol](https://www.youtube.com/watch?v=246V51AWwZM)

```python
def linear_search(arr, target):
    for i, value in enumerate(arr):
        if value == target:
            return i
    return -1

target = 25

index = linear_search([64, 34, 25, 12, 22, 11, 90], target)

print(index)
```

### Busca Binária

Prós ✅

1. **Melhor desempenho no melhor caso**:
   Pode atingir complexidade de tempo O(n) para dados quase ordenados.

2. **Ordenação in-place**:
   Requer apenas uma quantidade constante de memória adicional $O(1)$.

Contras ❌

1. **Não é estável por padrão**:
   Elementos iguais podem ser reordenados, o que não é útil em certas aplicações.

2. **Não adaptativo por padrão**:
   Sem otimização, sempre percorre todas as iterações mesmo se a lista ficar ordenada prematuramente.

:::info
Pior caso: O(log n) | Melhor caso: O(1)
:::

[Youtube - Busca Binária por Michael Sambol](https://www.youtube.com/watch?v=fDKIpRe8GW4)

```python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1

target = 25

index = binary_search([64, 34, 25, 12, 22, 11, 90], target)

print(index)
```

### Recursão

Prós ✅

1. **Simples e intuitivo**:
   O algoritmo é fácil de entender e implementar.

2. **Melhor desempenho no melhor caso**:
   Pode atingir complexidade de tempo O(n) para dados quase ordenados.

Contras ❌

1. **Não é estável por padrão**:
   Elementos iguais podem ser reordenados, o que não é útil em certas aplicações.

2. **Não adaptativo por padrão**:
   Sem otimização, sempre percorre todas as iterações mesmo se a lista ficar ordenada prematuramente.

:::info
Pior caso: O(n) | Melhor caso: O(1)
:::

[Youtube - Recursão em 100 segundos por Fireship](https://www.youtube.com/watch?v=rf60MejMz3E)

```python
def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n - 1)

result = factorial(5)

print(result)
```

BFS (Busca em Largura)

DFS (Busca em Profundidade)

Dijkstra
