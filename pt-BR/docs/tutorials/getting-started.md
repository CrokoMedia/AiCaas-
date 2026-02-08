---
title: "Começando"
description: Instale o BMad e construa seu primeiro projeto
---

Construa software mais rápido usando workflows alimentados por IA com agentes especializados que te guiam através de planejamento, arquitetura e implementação.

## O Que Você Vai Aprender

- Instalar e inicializar o Método BMad para um novo projeto
- Escolher a trilha de planejamento certa para o tamanho do seu projeto
- Progredir através das fases de requisitos até código funcional
- Usar agentes e workflows de forma efetiva

:::note[Pré-requisitos]
- **Node.js 20+** — Necessário para o instalador
- **Git** — Recomendado para controle de versão
- **IDE com IA** — Claude Code, Cursor, Windsurf ou similar
- **Uma ideia de projeto** — Mesmo uma simples funciona para aprender
:::

:::tip[Caminho Rápido]
**Instalar** → `npx bmad-method install`
**Planejar** → PM cria PRD, Arquiteto cria arquitetura
**Construir** → SM gerencia sprints, DEV implementa histórias
**Chats novos** para cada workflow para evitar problemas de contexto.
:::

## Entendendo o BMad

BMad ajuda você a construir software através de workflows guiados com agentes de IA especializados. O processo segue quatro fases:

| Fase | Nome           | O Que Acontece                                  |
| ---- | -------------- | ----------------------------------------------- |
| 1    | Análise        | Brainstorming, pesquisa, brief de produto *(opcional)* |
| 2    | Planejamento   | Criar requisitos (PRD ou especificação técnica) |
| 3    | Solucionamento | Projetar arquitetura *(apenas Método BMad/Enterprise)* |
| 4    | Implementação  | Construir épico por épico, história por história |

**[Abra o Mapa de Workflow](/docs/reference/workflow-map.md)** para explorar fases, workflows e gerenciamento de contexto.

Baseado na complexidade do seu projeto, BMad oferece três trilhas de planejamento:

| Trilha          | Melhor Para                                            | Documentos Criados                    |
| --------------- | ------------------------------------------------------ | ------------------------------------- |
| **Quick Flow**  | Correções de bugs, recursos simples, escopo claro (1-15 histórias) | Apenas especificação técnica          |
| **Método BMad** | Produtos, plataformas, recursos complexos (10-50+ histórias) | PRD + Arquitetura + UX                |
| **Enterprise**  | Conformidade, sistemas multi-tenant (30+ histórias)    | PRD + Arquitetura + Segurança + DevOps |

:::note
Contagens de histórias são orientação, não definições. Escolha sua trilha baseado nas necessidades de planejamento, não em matemática de histórias.
:::

## Instalação

Abra um terminal no diretório do seu projeto e execute:

```bash
npx bmad-method install
```

Quando solicitado a selecionar módulos, escolha **Método BMad**.

O instalador cria duas pastas:
- `_bmad/` — agentes, workflows, tarefas e configuração
- `_bmad-output/` — vazia por enquanto, mas é aqui que seus artefatos serão salvos

Abra seu IDE de IA na pasta do projeto. Execute o workflow `help` (`/bmad-help`) para ver o que fazer em seguida — ele detecta o que você completou e recomenda o próximo passo.

:::note[Como Carregar Agentes e Executar Workflows]
Cada workflow tem um **comando de barra** que você executa no seu IDE (ex., `/bmad-bmm-create-prd`). Executar um comando de workflow carrega automaticamente o agente apropriado — você não precisa carregar agentes separadamente. Você também pode carregar um agente diretamente para conversa geral (ex., `/bmad-agent-bmm-pm` para o agente PM).
:::

:::caution[Chats Novos]
Sempre inicie um chat novo para cada workflow. Isso previne que limitações de contexto causem problemas.
:::

## Passo 1: Crie Seu Plano

Trabalhe através das fases 1-3. **Use chats novos para cada workflow.**

### Fase 1: Análise (Opcional)

Todos os workflows nesta fase são opcionais:
- **brainstorming** (`/bmad-brainstorming`) — Ideação guiada
- **research** (`/bmad-bmm-research`) — Pesquisa de mercado e técnica
- **create-product-brief** (`/bmad-bmm-create-product-brief`) — Documento base recomendado

### Fase 2: Planejamento (Obrigatório)

**Para trilhas Método BMad e Enterprise:**
1. Carregue o **agente PM** (`/bmad-agent-bmm-pm`) em um novo chat
2. Execute o workflow `prd` (`/bmad-bmm-create-prd`)
3. Saída: `PRD.md`

**Para trilha Quick Flow:**
- Use o workflow `quick-spec` (`/bmad-bmm-quick-spec`) em vez do PRD, depois pule para implementação

:::note[Design UX (Opcional)]
Se seu projeto tem uma interface de usuário, carregue o **agente UX-Designer** (`/bmad-agent-bmm-ux-designer`) e execute o workflow de design UX (`/bmad-bmm-create-ux-design`) após criar seu PRD.
:::

### Fase 3: Solucionamento (Método BMad/Enterprise)

**Criar Arquitetura**
1. Carregue o **agente Arquiteto** (`/bmad-agent-bmm-architect`) em um novo chat
2. Execute `create-architecture` (`/bmad-bmm-create-architecture`)
3. Saída: Documento de arquitetura com decisões técnicas

**Criar Épicos e Histórias**

:::tip[Melhoria V6]
Épicos e histórias agora são criados *depois* da arquitetura. Isso produz histórias de melhor qualidade porque decisões de arquitetura (banco de dados, padrões de API, stack tecnológica) afetam diretamente como o trabalho deve ser dividido.
:::

1. Carregue o **agente PM** (`/bmad-agent-bmm-pm`) em um novo chat
2. Execute `create-epics-and-stories` (`/bmad-bmm-create-epics-and-stories`)
3. O workflow usa tanto PRD quanto Arquitetura para criar histórias tecnicamente informadas

**Verificação de Prontidão para Implementação** *(Altamente Recomendado)*
1. Carregue o **agente Arquiteto** (`/bmad-agent-bmm-architect`) em um novo chat
2. Execute `check-implementation-readiness` (`/bmad-bmm-check-implementation-readiness`)
3. Valida coesão entre todos os documentos de planejamento

## Passo 2: Construa Seu Projeto

Uma vez que o planejamento esteja completo, mova para implementação. **Cada workflow deve ser executado em um chat novo.**

### Inicializar Planejamento de Sprint

Carregue o **agente SM** (`/bmad-agent-bmm-sm`) e execute `sprint-planning` (`/bmad-bmm-sprint-planning`). Isso cria `sprint-status.yaml` para rastrear todos os épicos e histórias.

### O Ciclo de Construção

Para cada história, repita este ciclo com chats novos:

| Passo | Agente | Workflow       | Comando                   | Propósito                             |
| ----- | ------ | -------------- | ------------------------- | ------------------------------------- |
| 1     | SM     | `create-story` | `/bmad-bmm-create-story`  | Criar arquivo de história do épico    |
| 2     | DEV    | `dev-story`    | `/bmad-bmm-dev-story`     | Implementar a história                |
| 3     | DEV    | `code-review`  | `/bmad-bmm-code-review`   | Validação de qualidade *(recomendado)* |

Após completar todas as histórias em um épico, carregue o **agente SM** (`/bmad-agent-bmm-sm`) e execute `retrospective` (`/bmad-bmm-retrospective`).

## O Que Você Alcançou

Você aprendeu a base de construir com BMad:

- Instalou o BMad e configurou para seu IDE
- Inicializou um projeto com sua trilha de planejamento escolhida
- Criou documentos de planejamento (PRD, Arquitetura, Épicos & Histórias)
- Entendeu o ciclo de construção para implementação

Seu projeto agora tem:

```
seu-projeto/
├── _bmad/                         # Configuração BMad
├── _bmad-output/
│   ├── PRD.md                     # Seu documento de requisitos
│   ├── architecture.md            # Decisões técnicas
│   ├── epics/                     # Arquivos de épicos e histórias
│   └── sprint-status.yaml         # Rastreamento de sprint
└── ...
```

## Referência Rápida

| Workflow                         | Comando                                    | Agente    | Propósito                                 |
| -------------------------------- | ------------------------------------------ | --------- | ----------------------------------------- |
| `help`                           | `/bmad-help`                               | Qualquer  | Obter orientação sobre o que fazer depois |
| `prd`                            | `/bmad-bmm-create-prd`                     | PM        | Criar Documento de Requisitos do Produto  |
| `create-architecture`            | `/bmad-bmm-create-architecture`            | Arquiteto | Criar documento de arquitetura            |
| `create-epics-and-stories`       | `/bmad-bmm-create-epics-and-stories`       | PM        | Dividir PRD em épicos                     |
| `check-implementation-readiness` | `/bmad-bmm-check-implementation-readiness` | Arquiteto | Validar coesão do planejamento            |
| `sprint-planning`                | `/bmad-bmm-sprint-planning`                | SM        | Inicializar rastreamento de sprint        |
| `create-story`                   | `/bmad-bmm-create-story`                   | SM        | Criar um arquivo de história              |
| `dev-story`                      | `/bmad-bmm-dev-story`                      | DEV       | Implementar uma história                  |
| `code-review`                    | `/bmad-bmm-code-review`                    | DEV       | Revisar código implementado               |

## Perguntas Comuns

**Sempre preciso de arquitetura?**
Apenas para trilhas Método BMad e Enterprise. Quick Flow pula da especificação técnica para implementação.

**Posso mudar meu plano depois?**
Sim. O agente SM tem um workflow `correct-course` (`/bmad-bmm-correct-course`) para lidar com mudanças de escopo.

**E se eu quiser fazer brainstorming primeiro?**
Carregue o agente Analyst (`/bmad-agent-bmm-analyst`) e execute `brainstorming` (`/bmad-brainstorming`) antes de começar seu PRD.

**Preciso seguir uma ordem estrita?**
Não estritamente. Uma vez que você aprenda o fluxo, pode executar workflows diretamente usando a Referência Rápida acima.

## Obtendo Ajuda

- **Durante workflows** — Agentes te guiam com perguntas e explicações
- **Comunidade** — [Discord](https://discord.gg/gk8jAdXWmj) (#bmad-method-help, #report-bugs-and-issues)
- **Travado?** — Execute `help` (`/bmad-help`) para ver o que fazer depois

## Principais Conclusões

:::tip[Lembre-se Destes]
- **Sempre use chats novos** — Inicie um novo chat para cada workflow
- **Trilha importa** — Quick Flow usa quick-spec; Method/Enterprise precisam de PRD e arquitetura
- **Use `help` (`/bmad-help`) quando travado** — Ele detecta seu progresso e sugere próximos passos
:::

Pronto para começar? Instale o BMad e deixe os agentes te guiarem através do seu primeiro projeto.
