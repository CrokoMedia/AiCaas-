---
title: Agentes
description: Agentes BMM padrão com seus gatilhos de menu e workflows primários
---

Esta página lista os agentes BMM (suite ágil) padrão que instalam com o Método BMAD, junto com seus gatilhos de menu e workflows primários.

Notas:
- Gatilhos são os códigos curtos de menu (ex., `CP`) e correspondências fuzzy mostradas em cada menu de agente.
- Comandos de barra são gerados separadamente. Veja `docs/reference/commands.md` para a lista de comandos de barra e onde são definidos.
- QA (Quinn) é o agente leve de automação de testes no BMM. O Test Architect (TEA) completo vive em seu próprio módulo.

| Agente                      | Gatilhos                           | Workflows primários                                                                                 |
| --------------------------- | ---------------------------------- | --------------------------------------------------------------------------------------------------- |
| Analista (Mary)             | `BP`, `RS`, `CB`, `DP`             | Brainstorm Project, Research, Create Brief, Document Project                                        |
| Gerente de Produto (John)   | `CP`, `VP`, `EP`, `CE`, `IR`, `CC` | Create/Validate/Edit PRD, Create Epics and Stories, Implementation Readiness, Correct Course        |
| Arquiteto (Winston)         | `CA`, `IR`                         | Create Architecture, Implementation Readiness                                                       |
| Scrum Master (Bob)          | `SP`, `CS`, `ER`, `CC`             | Sprint Planning, Create Story, Epic Retrospective, Correct Course                                   |
| Desenvolvedor (Amelia)      | `DS`, `CR`                         | Dev Story, Code Review                                                                              |
| Engenheiro QA (Quinn)       | `QA`                               | Automate (gerar testes para recursos existentes)                                                    |
| Quick Flow Solo Dev (Barry) | `QS`, `QD`, `CR`                   | Quick Spec, Quick Dev, Code Review                                                                  |
| UX Designer (Sally)         | `CU`                               | Create UX Design                                                                                    |
| Technical Writer (Paige)    | `DP`, `WD`, `US`, `MG`, `VD`, `EC` | Document Project, Write Document, Update Standards, Mermaid Generate, Validate Doc, Explain Concept |
