---
title: "Guia Rápido BMGD"
description: Referência rápida para BMad Game Dev Studio
draft: true
---

![BMGD Logo](bmgd-logo.png)

# Guia Rápido BMGD

BMad Game Dev Studio (BMGD) estende BMM com capacidades específicas de jogos. Desenvolvido por veteranos da indústria de jogos, guia você através de pesquisa de produto, design técnico, design narrativo e um ciclo completo de produção orientado a épicos.

## Em Construção

A documentação está em pesada construção alcançando a nova versão beta. Teremos documentação completa o mais rápido possível. Por enquanto, por favor pergunte na seção BMGD do Discord se tiver qualquer dúvida.

![BMGD Workflow](workflow.jpg)

## Início Rápido

**Install → Game Brief → GDD → (Narrative) → Architecture → Build**

BMGD é um módulo opcional instalado via Método BMAD: `npx bmad-method install`

Veja [Referência How-To](#referencia-how-to) para comandos.

## Fases de Desenvolvimento

| Fase | Nome | Atividades Chave |
|------|------|------------------|
| 1 | **Pré-produção** | Brainstorm Game, Game Brief, pesquisa de mercado |
| 2 | **Design** | Criação de GDD, Design Narrativo (para jogos orientados a história) |
| 3 | **Técnico** | Arquitetura de Jogo (engine, sistemas, padrões) |
| 4 | **Produção** | Planejamento de sprint, desenvolvimento de história, revisão de código, testes |

## Agentes BMGD

| Agente | Propósito |
|--------|-----------|
| Game Designer | Mecânicas de jogo, balanceamento, psicologia do jogador |
| Game Developer | Implementação com padrões específicos de engine |
| Game Architect | Seleção de engine, design de sistemas, estrutura técnica |
| Game Scrum Master | Planejamento de sprint e gerenciamento de épicos |
| Game QA | Playtesting, testes específicos de engine, profiling de desempenho |
| Game Solo Dev | Desenvolvimento full-stack de jogos para projetos solo |

## Documentos Chave

| Documento | Propósito |
|-----------|-----------|
| **Game Brief** | Visão, posicionamento de mercado, fundamentos |
| **GDD** | Loop central, mecânicas, progressão, direção de arte/áudio |
| **Design Narrativo** | Estrutura de história, personagens, construção de mundo, diálogo |
| **Arquitetura** | Engine, sistemas, padrões, estrutura de projeto |

## Templates de Tipo de Jogo

BMGD inclui 24 templates de tipo de jogo que auto-configuram seções GDD:

Action, Adventure, Puzzle, RPG, Strategy, Simulation, Sports, Racing, Fighting, Horror, Platformer, Shooter e mais.

Cada template fornece seções GDD específicas de gênero, padrões de mecânicas, considerações de teste e armadilhas comuns a evitar.

## Explicação: BMGD vs BMM

### Quando Usar Cada Um

| Use BMGD para | Use BMM para |
|---------------|--------------|
| Jogos de vídeo | Aplicações web |
| Experiências interativas | APIs e serviços |
| Prototipagem de jogos | Apps mobile (não-jogos) |
| Game jams | Projetos de software geral |

### Mapeamento de Fases

| Fase BMM | Fase BMGD | Diferença Chave |
|----------|-----------|-----------------|
| Análise | Pré-produção | Conceitos de jogo, Game Brief em vez de Product Brief |
| Planejamento | Design | GDD em vez de PRD; Design Narrativo opcional |
| Solucionamento | Técnico | Foco em seleção de engine, padrões específicos de jogo |
| Implementação | Produção | Game QA substitui TEA; testes específicos de engine |

### Diferenças de Documentos

| BMM | BMGD | Notas |
|-----|------|-------|
| Product Brief | Game Brief | Captura visão, mercado, fundamentos |
| PRD | GDD | Inclui mecânicas, balanceamento, experiência do jogador |
| N/A | Design Narrativo | História, personagens, mundo (jogos orientados a história) |
| Arquitetura | Arquitetura | Versão BMGD inclui padrões e considerações específicos de engine |

### Diferenças de Testes

**BMM (TEA):** Testes focados em web com Playwright, Cypress, testes de API, E2E para apps web.

**BMGD (Game QA):** Frameworks específicos de engine (Unity, Unreal, Godot), testes de gameplay, profiling de desempenho, planejamento de playtest, validação de balanceamento.

## Referência How-To

| Preciso... | Ação |
|------------|------|
| Instalar BMGD | Execute `npx bmad-method install` e selecione BMGD durante instalação de módulo |
| Começar um novo jogo | Execute `/bmad-gds-brainstorm-game`, depois `/bmad:gds:create-game-brief` |
| Projetar meu jogo | Execute `/bmad-gds-create-gdd`; adicione `/bmad:gds:narrative` se for pesado em história |
| Planejar arquitetura | Execute `/bmad-gds-game-architecture` com Game Architect |
| Construir meu jogo | Use workflows de produção da Fase 4 - Execute `/bmad-help` para ver o que vem depois |
| Testar uma ideia rapidamente | Use [Quick-Flow](quick-flow-workflows.md) para prototipagem rápida |

## Leitura Adicional

- [Guia de Tipos de Jogos](game-types.md)
- [Guia Quick-Flow](quick-flow-workflows.md)
