---
title: "Prevenindo Conflitos de Agentes"
description: Como arquitetura previne conflitos quando múltiplos agentes implementam um sistema
---

Quando múltiplos agentes de IA implementam diferentes partes de um sistema, eles podem fazer decisões técnicas conflitantes. Documentação de arquitetura previne isso estabelecendo padrões compartilhados.

## Tipos Comuns de Conflito

### Conflitos de Estilo de API

Sem arquitetura:
- Agente A usa REST com `/users/{id}`
- Agente B usa mutações GraphQL
- Resultado: Padrões de API inconsistentes, consumidores confusos

Com arquitetura:
- ADR especifica: "Use GraphQL para toda comunicação cliente-servidor"
- Todos os agentes seguem o mesmo padrão

### Conflitos de Design de Banco de Dados

Sem arquitetura:
- Agente A usa nomes de coluna snake_case
- Agente B usa nomes de coluna camelCase
- Resultado: Schema inconsistente, queries confusas

Com arquitetura:
- Documento de padrões especifica convenções de nomenclatura
- Todos os agentes seguem os mesmos padrões

### Conflitos de Gerenciamento de Estado

Sem arquitetura:
- Agente A usa Redux para estado global
- Agente B usa React Context
- Resultado: Múltiplas abordagens de gerenciamento de estado, complexidade

Com arquitetura:
- ADR especifica abordagem de gerenciamento de estado
- Todos os agentes implementam consistentemente

## Como Arquitetura Previne Conflitos

### 1. Decisões Explícitas via ADRs

Cada escolha tecnológica significativa é documentada com:
- Contexto (por que essa decisão importa)
- Opções consideradas (que alternativas existem)
- Decisão (o que escolhemos)
- Justificativa (por que escolhemos)
- Consequências (trade-offs aceitos)

### 2. Orientação Específica para FR/NFR

Arquitetura mapeia cada requisito funcional para abordagem técnica:
- FR-001: Gerenciamento de Usuário → Mutações GraphQL
- FR-002: App Mobile → Queries otimizadas

### 3. Padrões e Convenções

Documentação explícita de:
- Estrutura de diretórios
- Convenções de nomenclatura
- Organização de código
- Padrões de teste

## Arquitetura como Contexto Compartilhado

Pense em arquitetura como o contexto compartilhado que todos os agentes leem antes de implementar:

```
PRD: "O que construir"
     ↓
Arquitetura: "Como construir"
     ↓
Agente A lê arquitetura → implementa Épico 1
Agente B lê arquitetura → implementa Épico 2
Agente C lê arquitetura → implementa Épico 3
     ↓
Resultado: Implementação consistente
```

## Tópicos Chave de ADR

Decisões comuns que previnem conflitos:

| Tópico              | Exemplo de Decisão                           |
| ------------------- | -------------------------------------------- |
| Estilo de API       | GraphQL vs REST vs gRPC                      |
| Banco de Dados      | PostgreSQL vs MongoDB                        |
| Auth                | JWT vs Sessions                              |
| Gerenc. de Estado   | Redux vs Context vs Zustand                  |
| Estilização         | CSS Modules vs Tailwind vs Styled Components |
| Testes              | Jest + Playwright vs Vitest + Cypress        |

## Anti-Padrões a Evitar

:::caution[Erros Comuns]
- **Decisões Implícitas** — "Descobriremos o estilo de API conforme formos" leva à inconsistência
- **Super-Documentação** — Documentar cada escolha menor causa paralisia de análise
- **Arquitetura Obsoleta** — Documentos escritos uma vez e nunca atualizados fazem agentes seguirem padrões desatualizados
:::

:::tip[Abordagem Correta]
- Documente decisões que cruzam limites de épicos
- Foque em áreas propensas a conflito
- Atualize arquitetura conforme aprende
- Use `correct-course` para mudanças significativas
:::
