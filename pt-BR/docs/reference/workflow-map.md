---
title: "Mapa de Workflow"
description: Referência visual para fases e saídas de workflow do Método BMad
---

O Método BMad (BMM) é um módulo no Ecossistema BMad, direcionado a seguir as melhores práticas de engenharia de contexto e planejamento. Agentes de IA funcionam melhor com contexto claro e estruturado. O sistema BMM constrói esse contexto progressivamente através de 4 fases distintas - cada fase, e múltiplos workflows opcionalmente dentro de cada fase, produzem documentos que informam a próxima, para que agentes sempre saibam o que construir e por quê.

A justificativa e conceitos vêm de metodologias ágeis que têm sido usadas ao longo da indústria com grande sucesso como um framework mental.

Se a qualquer momento você não tiver certeza do que fazer, o comando `/bmad-help` ajudará você a manter-se no caminho ou saber o que fazer em seguida. Você sempre pode referir-se a isso para referência também - mas /bmad-help é totalmente interativo e muito mais rápido se você já instalou o BMadMethod. Adicionalmente, se você está usando módulos diferentes que estenderam o Método BMad ou adicionaram outros módulos complementares não extensão - o /bmad-help evolui para saber tudo que está disponível para dar o melhor conselho no momento.

Nota final importante: Cada workflow abaixo pode ser executado diretamente com sua ferramenta de escolha via comando de barra ou carregando um agente primeiro e usando a entrada do menu dos agentes.

<iframe src="/workflow-map-diagram.html" width="100%" height="100%" frameborder="0" style="border-radius: 8px; border: 1px solid #334155; min-height: 900px;"></iframe>

*[Diagrama interativo - passe o mouse sobre saídas para ver fluxos de artefatos]*

## Fase 1: Análise (Opcional)

Explore o espaço do problema e valide ideias antes de comprometer-se com planejamento.

| Workflow               | Propósito                                                                         | Produz                    |
| ---------------------- | --------------------------------------------------------------------------------- | ------------------------- |
| `brainstorm`           | Fazer brainstorm de ideias de projeto com facilitação guiada de um coach de brainstorming | `brainstorming-report.md` |
| `research`             | Validar suposições de mercado, técnicas ou de domínio                            | Achados de pesquisa       |
| `create-product-brief` | Capturar visão estratégica                                                        | `product-brief.md`        |

## Fase 2: Planejamento

Defina o que construir e para quem.

| Workflow           | Propósito                               | Produz       |
| ------------------ | --------------------------------------- | ------------ |
| `create-prd`       | Definir requisitos (FRs/NFRs)           | `PRD.md`     |
| `create-ux-design` | Projetar experiência do usuário (quando UX importa) | `ux-spec.md` |

## Fase 3: Solucionamento

Decida como construir e divida o trabalho em histórias.

| Workflow                         | Propósito                                    | Produz                     |
| -------------------------------- | -------------------------------------------- | -------------------------- |
| `create-architecture`            | Tornar decisões técnicas explícitas          | `architecture.md` com ADRs |
| `create-epics-and-stories`       | Dividir requisitos em trabalho implementável | Arquivos de épicos com histórias |
| `check-implementation-readiness` | Verificação de gate antes da implementação   | Decisão PASS/CONCERNS/FAIL |

## Fase 4: Implementação

Construa, uma história por vez.

| Workflow          | Propósito                                | Produz                        |
| ----------------- | ---------------------------------------- | ----------------------------- |
| `sprint-planning` | Inicializar rastreamento (uma vez por projeto) | `sprint-status.yaml`          |
| `create-story`    | Preparar próxima história para implementação | `story-[slug].md`             |
| `dev-story`       | Implementar a história                   | Código funcionando + testes   |
| `automate` (QA)   | Gerar testes para recursos existentes    | Suite de testes               |
| `code-review`     | Validar qualidade de implementação       | Aprovado ou mudanças solicitadas |
| `correct-course`  | Lidar com mudanças significativas mid-sprint | Plano atualizado ou re-roteamento |
| `retrospective`   | Revisar após conclusão de épico          | Lições aprendidas             |

**Quinn (Agente QA):** Agente QA integrado para automação de testes. Gatilho com `QA` ou `bmad-bmm-qa-automate`. Gera testes API e E2E padrão usando o framework de teste do seu projeto. Amigável para iniciantes, sem configuração necessária. Para estratégia de teste avançada, instale o módulo [Test Architect (TEA)](https://bmad-code-org.github.io/bmad-method-test-architecture-enterprise/).

## Quick Flow (Trilha Paralela)

Pule fases 1-3 para trabalho pequeno e bem compreendido.

| Workflow     | Propósito                                  | Produz                                             |
| ------------ | ------------------------------------------ | -------------------------------------------------- |
| `quick-spec` | Definir uma mudança ad-hoc                 | `tech-spec.md` (arquivo de história para mudanças pequenas) |
| `quick-dev`  | Implementar de spec ou instruções diretas  | Código funcionando + testes                        |

## Gerenciamento de Contexto

Cada documento se torna contexto para a próxima fase. O PRD diz ao arquiteto quais restrições importam. A arquitetura diz ao agente dev quais padrões seguir. Arquivos de história dão contexto focado e completo para implementação. Sem essa estrutura, agentes fazem decisões inconsistentes.

Para projetos estabelecidos, `document-project` cria ou atualiza `project-context.md` - o que existe na base de código e as regras que todos os workflows de implementação devem observar. Execute logo antes da Fase 4, e novamente quando algo significativo mudar - estrutura, arquitetura ou essas regras. Você também pode editar `project-context.md` manualmente.

Todos os workflows de implementação carregam `project-context.md` se existir. Contexto adicional por workflow:

| Workflow       | Também Carrega               |
| -------------- | ---------------------------- |
| `create-story` | épicos, PRD, arquitetura, UX |
| `dev-story`    | arquivo de história          |
| `code-review`  | arquitetura, arquivo de história |
| `quick-spec`   | docs de planejamento (se existir) |
| `quick-dev`    | tech-spec                    |
