---
title: "Guia de Fragmentação de Documentos"
description: Divida arquivos markdown grandes em arquivos menores e organizados para melhor gerenciamento de contexto
---

Use a ferramenta `shard-doc` se você precisar dividir arquivos markdown grandes em arquivos menores e organizados para melhor gerenciamento de contexto.

Isso não é mais recomendado, e em breve com workflows atualizados e a maioria dos principais LLMs e ferramentas suportando subprocessos, isso será desnecessário.

## Quando Usar Isso

Use isso apenas se você notar que sua combinação de ferramenta/modelo escolhida está falhando ao carregar e ler todos os documentos como entrada quando necessário.

## O Que é Fragmentação de Documentos?

Fragmentação de documentos divide arquivos markdown grandes em arquivos menores e organizados baseados em cabeçalhos de nível 2 (`## Cabeçalho`).

### Arquitetura

```
Antes da Fragmentação:
docs/
└── PRD.md (arquivo grande de 50k tokens)

Depois da Fragmentação:
docs/
└── prd/
    ├── index.md                    # Índice com descrições
    ├── overview.md                 # Seção 1
    ├── user-requirements.md        # Seção 2
    ├── technical-requirements.md   # Seção 3
    └── ...                         # Seções adicionais
```

## Passos

### 1. Executar a Ferramenta Shard-Doc

```bash
/bmad:core:tools:shard-doc
```

### 2. Seguir o Processo Interativo

```
Agente: Qual documento você gostaria de fragmentar?
Usuário: docs/PRD.md

Agente: Destino padrão: docs/prd/
        Aceitar padrão? [y/n]
Usuário: y

Agente: Fragmentando PRD.md...
        ✓ Criados 12 arquivos de seção
        ✓ Gerado index.md
        ✓ Completo!
```

## Como a Descoberta de Workflow Funciona

Workflows BMad usam um **sistema de descoberta dupla**:

1. **Tentar documento completo primeiro** - Procurar por `nome-documento.md`
2. **Verificar versão fragmentada** - Procurar por `nome-documento/index.md`
3. **Regra de prioridade** - Documento completo tem precedência se ambos existirem - remova o documento completo se quiser que o fragmentado seja usado

## Suporte de Workflow

Todos os workflows BMM suportam ambos os formatos:

- Documentos completos
- Documentos fragmentados
- Detecção automática
- Transparente para o usuário
