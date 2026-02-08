---
title: Comandos
description: Como comandos BMAD são gerados e onde encontrá-los.
---

# Comandos

Comandos de barra BMAD são gerados pelo instalador para seu IDE e **refletem os módulos que você instalou**.
Isso significa que a lista autoritativa vive **no seu projeto**, não em uma página de docs estática.

## Como Descobrir Comandos (Recomendado)

- Digite `/bmad` no seu IDE e use autocompletar para navegar agentes/workflows.
- Execute `/bmad-help` para obter próximos passos guiados e recomendações conscientes de contexto.

## Onde Comandos São Gerados

O instalador escreve arquivos de comando no seu projeto (caminhos de exemplo para Claude Code):

- `.claude/commands/bmad/<module>/agents/`
- `.claude/commands/bmad/<module>/workflows/`

Essas pastas são a **lista de comandos canônica, específica do projeto**.

## Comandos Comuns

- `/bmad-help` - Ajuda interativa e orientação de próximo passo
- `/bmad:<module>:agents:<agent>` - Carregar um agente (ex. `/bmad:bmm:agents:dev`)
- `/bmad:<module>:workflows:<workflow>` - Executar um workflow (ex. `/bmad:bmm:workflows:create-prd`)

## Por Que Esta Página é Curta

BMAD é modular, então os comandos exatos variam por instalação.
Use o autocompletar do seu IDE ou as pastas de comando geradas acima para ver *tudo* disponível.
