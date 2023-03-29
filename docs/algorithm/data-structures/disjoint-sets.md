---
slug: /disjoint-sets
title: Disjoint Sets
authors: Clover
keywords: ['algorithm']
---

## The Disjoint Sets Data Structure

[EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

创建 `.editorconfig`，示例内容如下

```C++ title='.editorconfig'
void make_set(int v) {
    parent[v] = v;
}

int find_set(int v) {
    if (v == parent[v])
        return v;
    return find_set(parent[v]);
}

void union_sets(int a, int b) {
    a = find_set(a);
    b = find_set(b);
    if (a != b)
        parent[b] = a;
}
```
## Design an efficient implementation.

Graph $G = (V, E)$ where V is Vertex and E is Edge , for $\forall v, u\in V $ that edge $(u, v) \in E$

Let $f\colon[a,b]\to\R$ be Riemann integrable. Let $F\colon[a,b]\to\R$ be
$F(x)=\int_{a}^{x} f(t)\,dt$. Then $F$ is continuous, and at all $x$ such that
$f$ is continuous at $x$, $F$ is differentiable at $x$ with $F'(x)=f(x)$.