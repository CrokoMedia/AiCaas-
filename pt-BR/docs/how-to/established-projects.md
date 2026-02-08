---
title: "Projetos Estabelecidos"
description: Como usar o Método BMad em bases de código existentes
---

Use o Método BMad efetivamente ao trabalhar em projetos existentes e bases de código legadas, às vezes também chamados de projetos brownfield.

Este guia cobre o workflow essencial para onboarding em projetos existentes com o Método BMad.

:::note[Pré-requisitos]
- Método BMad instalado (`npx bmad-method install`)
- Uma base de código existente em que você quer trabalhar
- Acesso a um IDE com IA (Claude Code, Cursor ou Windsurf)
:::

## Passo 1: Limpar Artefatos de Planejamento Completos

Se você completou todos os épicos e histórias do PRD através do processo BMad, limpe esses arquivos. Arquive-os, delete-os ou confie no histórico de versão se necessário. Não mantenha esses arquivos em:

- `docs/`
- `_bmad-output/planning-artifacts/`
- `_bmad-output/implementation-artifacts/`

## Passo 2: Manter Documentação de Projeto de Qualidade

Sua pasta `docs/` deve conter documentação sucinta e bem organizada que represente com precisão seu projeto:

- Intenção e justificativa de negócio
- Regras de negócio
- Arquitetura
- Qualquer outra informação relevante do projeto

Para projetos complexos, considere usar o workflow `document-project`. Ele oferece variantes de runtime que escanearão todo o seu projeto e documentarão seu estado atual real.

## Passo 3: Obter Ajuda

Obtenha ajuda para saber o que fazer em seguida com base em suas necessidades únicas

Execute `bmad-help` para obter orientação quando não tiver certeza do que fazer em seguida.

### Escolhendo Sua Abordagem

Você tem duas opções primárias dependendo do escopo de mudanças:

| Escopo                               | Abordagem Recomendada                                                                                                          |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| **Pequenas atualizações ou adições** | Use `quick-flow-solo-dev` para criar uma especificação técnica e implementar a mudança. O método BMad completo de quatro fases é provavelmente exagero. |
| **Mudanças ou adições importantes**  | Comece com o método BMad, aplicando tanto ou tão pouco rigor quanto necessário.                                               |

### Durante a Criação do PRD

Ao criar um brief ou pular diretamente para o PRD, garanta que o agente:

- Encontre e analise sua documentação de projeto existente
- Leia o contexto adequado sobre seu sistema atual

Você pode guiar o agente explicitamente, mas o objetivo é garantir que o novo recurso se integre bem com seu sistema existente.

### Considerações de UX

Trabalho de UX é opcional. A decisão não depende de se seu projeto tem UX, mas de:

- Se você estará trabalhando em mudanças de UX
- Se novos designs ou padrões significativos de UX são necessários

Se suas mudanças se resumem a atualizações simples em telas existentes com as quais você está satisfeito, um processo completo de UX é desnecessário.

### Considerações de Arquitetura

Ao fazer arquitetura, garanta que o arquiteto:

- Use os arquivos documentados adequados
- Escaneie a base de código existente

Preste muita atenção aqui para prevenir reinvenção da roda ou tomar decisões que desalinham com sua arquitetura existente.

## Mais Informações

- **[Correções Rápidas](/docs/how-to/quick-fixes.md)** - Correções de bugs e mudanças ad-hoc
- **[FAQ de Projetos Estabelecidos](/docs/explanation/established-projects-faq.md)** - Perguntas comuns sobre trabalhar em projetos estabelecidos
