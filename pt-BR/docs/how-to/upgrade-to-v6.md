---
title: "Como Atualizar para v6"
description: Migrar do BMad v4 para v6
---

Use o instalador BMad para atualizar da v4 para v6, que inclui detecção automática de instalações legadas e assistência de migração.

## Quando Usar Isso

- Você tem BMad v4 instalado (pasta `.bmad-method`)
- Você quer migrar para a nova arquitetura v6
- Você tem artefatos de planejamento existentes para preservar

:::note[Pré-requisitos]
- Node.js 20+
- Instalação BMad v4 existente
:::

## Passos

### 1. Executar o Instalador

Siga as [Instruções do Instalador](/docs/how-to/install-bmad.md).

### 2. Lidar com Instalação Legada

Quando v4 for detectada, você pode:

- Permitir que o instalador faça backup e remova `.bmad-method`
- Sair e lidar com a limpeza manualmente

Se você nomeou sua pasta bmad method com outro nome - você precisará remover a pasta manualmente.

### 3. Limpar Comandos da IDE

Remover manualmente comandos legados v4 da IDE - por exemplo, se você tem claude, procure por quaisquer pastas aninhadas que começam com bmad e remova-as:

- `.claude/commands/BMad/agents`
- `.claude/commands/BMad/tasks`

### 4. Migrar Artefatos de Planejamento

**Se você tem documentos de planejamento (Brief/PRD/UX/Arquitetura):**

Mova-os para `_bmad-output/planning-artifacts/` com nomes descritivos:

- Inclua `PRD` no nome do arquivo para documentos PRD
- Inclua `brief`, `architecture` ou `ux-design` adequadamente
- Documentos fragmentados podem estar em subpastas nomeadas

**Se você está no meio do planejamento:** Considere recomeçar com workflows v6. Use seus documentos existentes como entradas—os novos workflows de descoberta progressiva com busca web e modo de planejamento IDE produzem melhores resultados.

### 5. Migrar Desenvolvimento em Andamento

Se você tem histórias criadas ou implementadas:

1. Complete a instalação v6
2. Coloque `epics.md` ou `epics/epic*.md` em `_bmad-output/planning-artifacts/`
3. Execute o workflow `sprint-planning` do Scrum Master
4. Diga ao SM quais épicos/histórias já estão completos

## O Que Você Obtém

**Estrutura unificada v6:**

```
seu-projeto/
└── _bmad/               # Pasta única de instalação
    ├── _config/         # Suas customizações
    │   └── agents/      # Arquivos de customização de agentes
    ├── core/            # Framework central universal
    ├── bmm/             # Módulo Método BMad
    ├── bmb/             # BMad Builder
    └── cis/             # Creative Intelligence Suite
├── _bmad-output/        # Pasta de saída (era pasta doc na v4)
```

## Migração de Módulos

| Módulo v4                     | Status v6                                  |
| ----------------------------- | ------------------------------------------ |
| `.bmad-2d-phaser-game-dev`    | Integrado no Módulo BMGD                   |
| `.bmad-2d-unity-game-dev`     | Integrado no Módulo BMGD                   |
| `.bmad-godot-game-dev`        | Integrado no Módulo BMGD                   |
| `.bmad-infrastructure-devops` | Descontinuado — novo agente DevOps em breve |
| `.bmad-creative-writing`      | Não adaptado — novo módulo v6 em breve     |

## Mudanças Principais

| Conceito      | v4                                      | v6                                     |
| ------------- | --------------------------------------- | -------------------------------------- |
| **Core**      | `_bmad-core` era na verdade BMad Method | `_bmad/core/` é framework universal    |
| **Method**    | `_bmad-method`                          | `_bmad/bmm/`                           |
| **Config**    | Arquivos modificados diretamente        | `config.yaml` por módulo               |
| **Documents** | Fragmentado ou não fragmentado obrigatório | Totalmente flexível, auto-escaneado  |
