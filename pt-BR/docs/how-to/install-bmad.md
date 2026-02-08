---
title: "Como Instalar o BMad"
description: Guia passo a passo para instalar o BMad no seu projeto
---

Use o comando `npx bmad-method install` para configurar o BMad no seu projeto com sua escolha de módulos e ferramentas de IA.

Se você quiser usar um instalador não interativo e fornecer todas as opções de instalação na linha de comando, [este guia](/docs/non-interactive-installation.md).

## Quando Usar Isso

- Iniciando um novo projeto com BMad
- Adicionando BMad a uma base de código existente
- Atualizar a instalação BMad existente

:::note[Pré-requisitos]
- **Node.js** 20+ (necessário para o instalador)
- **Git** (recomendado)
- **Ferramenta de IA** (Claude Code, Cursor, Windsurf ou similar)
:::

## Passos

### 1. Execute o Instalador

```bash
npx bmad-method install
```

### 2. Escolha o Local de Instalação

O instalador perguntará onde instalar os arquivos BMad:

- Diretório atual (recomendado para novos projetos se você criou o diretório e executou de dentro do diretório)
- Caminho personalizado

### 3. Selecione Suas Ferramentas de IA

Escolha quais ferramentas de IA você usa:

- Claude Code
- Cursor
- Windsurf
- Outras

Cada ferramenta tem sua própria forma de integrar comandos. O instalador cria pequenos arquivos de prompt para ativar workflows e agentes — ele apenas os coloca onde sua ferramenta espera encontrá-los.

### 4. Escolha Módulos

O instalador mostra módulos disponíveis. Selecione os que você precisar — a maioria dos usuários só quer o **Método BMad** (o módulo de desenvolvimento de software).

### 5. Siga os Prompts

O instalador te guia pelo resto — conteúdo personalizado, configurações, etc.

## O Que Você Obtém

```
seu-projeto/
├── _bmad/
│   ├── bmm/            # Seus módulos selecionados
│   │   └── config.yaml # Configurações do módulo (se você precisar alterá-las)
│   ├── core/           # Módulo central obrigatório
│   └── ...
├── _bmad-output/       # Artefatos gerados
└── .claude/            # Comandos Claude Code (se usando Claude Code)
```

## Verificar Instalação

Execute o workflow `help` (`/bmad-help` na maioria das plataformas) para verificar se tudo funciona e ver o que fazer em seguida.

**Mais recente da branch main:**
```bash
npx github:bmad-code-org/BMAD-METHOD install
```

Use estes se você quiser os recursos mais novos antes de serem oficialmente lançados. As coisas podem quebrar.

## Solução de Problemas

**Instalador lança um erro** — Copie e cole a saída no seu assistente de IA e deixe-o descobrir.

**Instalador funcionou mas algo não funciona depois** — Sua IA precisa de contexto BMad para ajudar. Veja [Como Obter Respostas Sobre BMad](/docs/how-to/get-answers-about-bmad.md) para como apontar sua IA para as fontes certas.
