---
title: "Por Que Solucionamento Importa"
description: Entendendo por que a fase de solucionamento é crítica para projetos multi-épico
---

Fase 3 (Solucionamento) traduz **o que** construir (do Planejamento) em **como** construir (design técnico). Esta fase previne conflitos de agentes em projetos multi-épico documentando decisões arquiteturais antes da implementação começar.

## O Problema Sem Solucionamento

```
Agente 1 implementa Épico 1 usando API REST
Agente 2 implementa Épico 2 usando GraphQL
Resultado: Design de API inconsistente, pesadelo de integração
```

Quando múltiplos agentes implementam diferentes partes de um sistema sem orientação arquitetural compartilhada, eles fazem decisões técnicas independentes que podem conflitar.

## A Solução Com Solucionamento

```
workflow de arquitetura decide: "Use GraphQL para todas as APIs"
Todos os agentes seguem decisões de arquitetura
Resultado: Implementação consistente, sem conflitos
```

Ao documentar decisões técnicas explicitamente, todos os agentes implementam consistentemente e integração se torna direta.

## Solucionamento vs Planejamento

| Aspecto   | Planejamento (Fase 2)   | Solucionamento (Fase 3)               |
| --------- | ----------------------- | ------------------------------------- |
| Pergunta  | O quê e Por quê?        | Como? Depois Quais unidades de trabalho? |
| Saída     | FRs/NFRs (Requisitos)   | Arquitetura + Épicos/Histórias        |
| Agente    | PM                      | Arquiteto → PM                        |
| Audiência | Stakeholders            | Desenvolvedores                       |
| Documento | PRD (FRs/NFRs)          | Arquitetura + Arquivos de Épicos      |
| Nível     | Lógica de negócio       | Design técnico + Divisão de trabalho  |

## Princípio Chave

**Torne decisões técnicas explícitas e documentadas** para que todos os agentes implementem consistentemente.

Isso previne:
- Conflitos de estilo de API (REST vs GraphQL)
- Inconsistências de design de banco de dados
- Desacordos de gerenciamento de estado
- Incompatibilidades de convenção de nomenclatura
- Variações de abordagem de segurança

## Quando Solucionamento é Obrigatório

| Trilha | Solucionamento Obrigatório? |
|--------|----------------------------|
| Quick Flow | Não - pule inteiramente |
| Método BMad Simples | Opcional |
| Método BMad Complexo | Sim |
| Enterprise | Sim |

:::tip[Regra Geral]
Se você tem múltiplos épicos que poderiam ser implementados por diferentes agentes, você precisa de solucionamento.
:::

## O Custo de Pular

Pular solucionamento em projetos complexos leva a:

- **Problemas de integração** descobertos no meio do sprint
- **Retrabalho** devido a implementações conflitantes
- **Tempo de desenvolvimento mais longo** no geral
- **Dívida técnica** de padrões inconsistentes

:::caution[Multiplicador de Custo]
Pegar problemas de alinhamento no solucionamento é 10× mais rápido que descobri-los durante implementação.
:::
