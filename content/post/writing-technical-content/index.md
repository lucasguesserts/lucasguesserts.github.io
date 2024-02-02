---
title: Solving Knapsack problem using BRKGA and irace
summary: A tutorial on knapsack problem, Biased Random-Key Genetic Algorithm (BRKGA) and irace
date: 2024-02-02
math: true
image:
  placement: 1
tags:
  - combinatorial optimization
  - genetic algorithm
  - linear programming
---

This tutorial introduces the Knapsack problem, present models to solve it, and compares them. It goes in depth on the Biased Random-Key Genetic Algorithm (BRKGA) and the optimization of its parameters using irace.

For more information about any topic discussed here, please refer to the [References And Links section](#references-and-links) at the end.

## The Knapsack Problem

The knapsack problem is a combinatorial optimization problem where the goal is to maximize the value in a knapsack with limited capacity by placing valuable items into it.

### Mathematical Formulation

Let:

1. $I$ be a set of items;
2. $w_i \in \Z^*_+$ be the weight of item $i \in I$;
3. $p_i \in \Z^*_+$ be the profit of item $i \in I$;
4. $c \in \Z^*_+$ be the capacity of the knapsack;
5. $x_i$ be a binary variable that indicates if item $i \in I$ is in the knapsack;

(Notice that one specified the values of $w_i$, $p_i, c$ to be integers for simplicity, but the problem can be generalized to real numbers.)

The knapsack problem can be formulated as an integer linear programming problem as follows:

$$
\begin{align*}
    \max & \sum_{i \in I} p_i x_i \\
    \text{subject to} & \sum_{i \in I} w_i x_i \leq c \\
    & x_i \in \{0, 1\} \quad \forall i \in I
\end{align*}
$$

To avoid trivial cases, all instances to be tested will satisfy:

1. the total weight of all items exceeds the capacity of the knapsack: $c < \displaystyle\sum\limits_{i \in I} w_i$;
2. all items fits, alone, into the knapsack: $\forall i \in I \left(w_i \leq c\right)$.

## Instances Generation

Here we are going to use the instance generator from [Jorik Jooken, Pieter Leyman, Patrick De Causmaecker](#instances). We are not going into the details of how the instances are generated, but the authors claim that they are hard instances for the 0-1 knapsack problem. For more information, see the section 4 of the authors' paper.

The instance generator expects 7 parameters:

1. $n \in \mathbb{Z}^*_+$: number of items;
2. $c \in \mathbb{Z}^*_+$: capacity of the knapsack;
3. $g \in \mathbb{Z}^*_+$: number of different groups of items;
4. $f \in \mathbb{R}^*_+, 0 < f \leq 1$: the fraction (at least approximately) of items that belong to the last group;
5. $\varepsilon \in \mathbb{R}^*_+, 0 < \varepsilon \leq 1$: minimum fraction of the knapsack capacity/weight assigned to the items;
6. $s \in \mathbb{Z}^*_+$: perturbation (noise) in the profits/weights of the items;
7. $seed \in \mathbb{Z}$: seed for the random number generator;

We are going to generate 10 instances with the following parameters:

{{< table path="instances.csv" header="true" caption="Table 1: Parameters for generating instances" >}}

## Models

### Greedy

### Integer Linear Programming

### BRKGA

### External Models

## Run the models and display quality of the solutions

## Explain irace

Are there other tools that do the same thing?

## Optimize BRKGA with irace

## Conclusion

## References and Links

### Knapsack Problem

1. [1990 - Knapsack problems: algorithms and computer implementations - Silvano Martello, Paolo Toth](https://dl.acm.org/doi/book/10.5555/98124);
2. [2004 - Knapsack Problems - Hans Kellerer , Ulrich Pferschy , David Pisinger](https://link.springer.com/book/10.1007/978-3-540-24777-7);

### Instances

1. [2022 - A new class of hard problem instances for the 0–1 knapsack problem - Jorik Jooken, Pieter Leyman, Patrick De Causmaecker](https://doi.org/10.1016/j.ejor.2021.12.009);
2. [My fork of the Instance Generator](https://github.com/lucasguesserts/knapsackProblemInstances);
3. [Instance Generator](https://github.com/JorikJooken/knapsackProblemInstances);

### Linear Programming

1. Linear Programming - Vasek Chvátal;
2. Introduction to Linear Optimization - Bertsimas and Tsitsiklis;
3. Integer and Combinatorial Optimization - Laurence A. Wolsey, George L. Nemhauser;

### irace

1. [irace website](https://mlopez-ibanez.github.io/irace/);
2. [irace github](https://github.com/MLopez-Ibanez/irace);
3. [irace R package page](https://www.rdocumentation.org/packages/irace/versions/3.5);
