---
title: "Guia de Estilo de Documentação"
description: Convenções de documentação específicas do projeto baseadas no estilo Google e estrutura Diataxis
---

Este projeto adere ao [Guia de Estilo de Documentação do Google Developer](https://developers.google.com/style) e usa [Diataxis](https://diataxis.fr/) para estruturar conteúdo. Apenas convenções específicas do projeto seguem.

## Regras Específicas do Projeto

| Regra                               | Especificação                                  |
| ----------------------------------- | ---------------------------------------------- |
| Sem regras horizontais (`---`)      | Fragmenta fluxo de leitura                     |
| Sem cabeçalhos `####`               | Use texto em negrito ou admoestações           |
| Sem seções "Related" ou "Next:"     | Barra lateral cuida da navegação               |
| Sem listas profundamente aninhadas  | Divida em seções                               |
| Sem blocos de código para não-código | Use admoestações para exemplos de diálogo     |
| Sem parágrafos em negrito para callouts | Use admoestações                          |
| 1-2 admoestações por seção max      | Tutoriais permitem 3-4 por seção principal     |
| Células de tabela / itens de lista  | 1-2 frases max                                 |
| Orçamento de cabeçalho              | 8-12 `##` por doc; 2-3 `###` por seção         |

## Admoestações (Sintaxe Starlight)

```md
:::tip[Título]
Atalhos, melhores práticas
:::

:::note[Título]
Contexto, definições, exemplos, pré-requisitos
:::

:::caution[Título]
Ressalvas, problemas potenciais
:::

:::danger[Título]
Apenas avisos críticos — perda de dados, problemas de segurança
:::
```

### Usos Padrão

| Admoestação              | Use Para                      |
| ------------------------ | ----------------------------- |
| `:::note[Prerequisites]` | Dependências antes de começar |
| `:::tip[Quick Path]`     | Resumo TL;DR no topo do documento |
| `:::caution[Important]`  | Ressalvas críticas            |
| `:::note[Example]`       | Exemplos de comando/resposta  |

[... continua com o resto das estruturas de documentação ...]

## Comandos de Validação

Antes de submeter mudanças de documentação:

```bash
npm run docs:fix-links            # Pré-visualizar correções de formato de link
npm run docs:fix-links -- --write # Aplicar correções
npm run docs:validate-links       # Verificar se links existem
npm run docs:build                # Verificar sem erros de build
```
