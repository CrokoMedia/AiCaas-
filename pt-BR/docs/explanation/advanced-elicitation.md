---
title: "Elicitação Avançada"
description: Empurre o LLM a repensar seu trabalho usando métodos de raciocínio estruturados
---

Faça o LLM reconsiderar o que acabou de gerar. Você escolhe um método de raciocínio, ele aplica esse método à sua própria saída, você decide se mantém as melhorias.

Dezenas de métodos estão integrados - coisas como Primeiros Princípios, Time Vermelho vs Time Azul, Análise Pré-mortem, Questionamento Socrático e mais.

## Quando Usar

- Depois que um workflow gera conteúdo e você quer alternativas
- Quando a saída parece ok mas você suspeita que há mais profundidade
- Para testar sob estresse suposições ou encontrar fraquezas
- Para conteúdo de alto risco onde repensar ajuda

Workflows oferecem elicitação avançada em pontos de decisão - depois que o LLM gerou algo, você será perguntado se quer executá-la.

## Como Funciona

1. LLM sugere 5 métodos relevantes para seu conteúdo
2. Você escolhe um (ou embaralha para diferentes opções)
3. Método é aplicado, melhorias mostradas
4. Aceitar ou descartar, repetir ou continuar
