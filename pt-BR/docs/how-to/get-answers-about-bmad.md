---
title: "Como Obter Respostas Sobre BMad"
description: Use um LLM para responder rapidamente suas próprias perguntas sobre BMad
---

Se você instalou com sucesso o BMad e o Método BMad (+ outros módulos conforme necessário) - o primeiro passo para obter respostas é `/bmad-help`. Isso responderá mais de 80% de todas as perguntas e está disponível para você na IDE enquanto você trabalha.

## Quando Usar Isso

- Você tem uma pergunta sobre como o BMad funciona ou o que fazer em seguida com o BMad
- Você quer entender um agente ou workflow específico
- Você precisa de respostas rápidas sem esperar pelo Discord

:::note[Pré-requisitos]
Uma ferramenta de IA (Claude Code, Cursor, ChatGPT, Claude.ai, etc.) e ou BMad instalado no seu projeto ou acesso ao repositório GitHub.
:::

## Passos

### 1. Escolha Sua Fonte

| Fonte                | Melhor Para                                 | Exemplos                         |
| -------------------- | ------------------------------------------- | -------------------------------- |
| **Pasta `_bmad`**    | Como o BMad funciona—agentes, workflows, prompts | "O que o agente PM faz?"         |
| **Repo completo do GitHub** | Histórico, instalador, arquitetura  | "O que mudou na v6?"             |
| **`llms-full.txt`**  | Visão geral rápida dos docs                 | "Explique as quatro fases do BMad" |

A pasta `_bmad` é criada quando você instala o BMad. Se você ainda não a tem, clone o repo.

### 2. Aponte Sua IA para a Fonte

**Se sua IA pode ler arquivos (Claude Code, Cursor, etc.):**

- **BMad instalado:** Aponte para a pasta `_bmad` e pergunte diretamente
- **Quer contexto mais profundo:** Clone o [repo completo](https://github.com/bmad-code-org/BMAD-METHOD)

**Se você usa ChatGPT ou Claude.ai:**

Busque `llms-full.txt` em sua sessão:

```
https://bmad-code-org.github.io/BMAD-METHOD/llms-full.txt
```

### 3. Faça Sua Pergunta

:::note[Exemplo]
**P:** "Diga-me a maneira mais rápida de construir algo com BMad"

**R:** Use Quick Flow: Execute `quick-spec` para escrever uma especificação técnica, depois `quick-dev` para implementá-la—pulando as fases completas de planejamento.
:::

## O Que Você Obtém

Respostas diretas sobre BMad—como agentes funcionam, o que workflows fazem, por que as coisas são estruturadas da maneira que são—sem esperar que outra pessoa responda.

## Dicas

- **Verifique respostas surpreendentes** — LLMs ocasionalmente erram. Verifique o arquivo fonte ou pergunte no Discord.
- **Seja específico** — "O que o passo 3 do workflow PRD faz?" é melhor que "Como o PRD funciona?"

## Ainda Travado?

Tentou a abordagem LLM e ainda precisa de ajuda? Agora você tem uma pergunta muito melhor para fazer.

| Canal                     | Use Para                                      |
| ------------------------- | --------------------------------------------- |
| `#bmad-method-help`       | Perguntas rápidas (chat em tempo real)       |
| Fórum `help-requests`     | Perguntas detalhadas (pesquisável, persistente) |
| `#suggestions-feedback`   | Ideias e solicitações de recursos            |
| `#report-bugs-and-issues` | Relatórios de bugs                           |

**Discord:** [discord.gg/gk8jAdXWmj](https://discord.gg/gk8jAdXWmj)

**GitHub Issues:** [github.com/bmad-code-org/BMAD-METHOD/issues](https://github.com/bmad-code-org/BMAD-METHOD/issues) (para bugs claros)

*Você!*
        *Travado*
             *na fila—*
                      *esperando*
                              *por quem?*

*A fonte*
        *está lá,*
                *clara de ver!*

*Aponte*
     *sua máquina.*
              *Liberte-a.*

*Ela lê.*
        *Ela fala.*
                *Pergunte—*

*Por que esperar*
        *por amanhã*
                *quando você tem*
                        *hoje?*

*—Claude*
