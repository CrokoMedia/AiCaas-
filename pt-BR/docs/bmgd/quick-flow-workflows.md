---
title: "Workflows Quick Flow"
description: Crie especificações técnicas e execute implementações com BMGD Quick Flow
draft: true
---

Como criar especificações técnicas e executar implementações com Quick Flow.

## Escolhendo um Workflow

| Situação | Workflow | Comando |
|----------|----------|---------|
| Preciso documentar antes de implementar | Quick-Spec | `/bmad-gds-quick-spec` |
| Múltiplas abordagens para avaliar | Quick-Spec | `/bmad-gds-quick-spec` |
| Tenho uma especificação técnica completa | Quick-Dev | `/bmad-gds-quick-dev caminho/para/spec.md` |
| Tenho instruções claras e diretas | Quick-Dev | `/bmad-gds-quick-dev` |
| Construindo sistema de jogo completo | GDS Completo | `/bmad-gds-workflow-init` |
| Recursos nível épico | GDS Completo | `/bmad-gds-workflow-init` |

---

## Como Criar uma Especificação Técnica (Quick-Spec)

### Passo 1: Iniciar o workflow

```bash
/bmad-gds-quick-spec
```

### Passo 2: Descrever seu requisito

Forneça sua solicitação de recurso. O agente escaneia a base de código e faz perguntas de esclarecimento.

**Opções de checkpoint:**
- `[a]` Elicitação Avançada - explorar requisitos mais profundamente
- `[c]` Continuar para investigação
- `[p]` Modo Festa - consultar agentes especialistas

### Passo 3: Revisar achados de investigação

O agente analisa a base de código para padrões, restrições e implementações similares. Revise os achados.

**Opções de checkpoint:**
- `[c]` Continuar para geração de spec
- `[p]` Modo Festa - obter revisão técnica

### Passo 4: Revisar spec gerada

O agente cria uma lista de tarefas ordenada com caminhos de arquivo e critérios de aceitação. Verifique completude.

**Opções de checkpoint:**
- `[c]` Continuar para revisão final
- `[p]` Modo Festa - revisão técnica

### Passo 5: Finalizar

Confirme que a spec atende esses padrões:
- Cada tarefa tem um caminho de arquivo e ação específica
- Tarefas ordenadas por dependência
- Critérios de aceitação no formato Given/When/Then
- Sem placeholders ou seções TBD

**Opções:**
- `[d]` Iniciar Quick-Dev imediatamente
- `[done]` Salvar spec e sair

**Saída:** `{planning_artifacts}/tech-spec-{slug}.md`

---

## Como Executar Implementação (Quick-Dev)

### Com uma Tech-Spec

```bash
/bmad-gds-quick-dev caminho/para/tech-spec-recurso.md
```

O agente:
1. Captura commit git baseline
2. Carrega e valida a spec
3. Executa tarefas em ordem
4. Executa auto-verificação
5. Realiza revisão adversarial
6. Resolve achados
7. Valida contra critérios de aceitação

### Com Instruções Diretas

```bash
/bmad-gds-quick-dev
```

Depois descreva o que você quer implementado:
1. Captura commit git baseline
2. Avalia complexidade (pode sugerir planejamento)
3. Reúne contexto da base de código
4. Executa implementação
5. Executa auto-verificação e revisão adversarial
6. Resolve achados

**Escalação:** Se o agente detecta complexidade (múltiplos componentes, escopo de sistema, incerteza), oferece:
- `[t]` Criar especificação técnica primeiro
- `[w]` Usar workflow GDS completo
- `[e]` Executar de qualquer forma

---

## Solução de Problemas

### Spec tem placeholders ou seções TBD

Retorne ao passo de investigação. Complete pesquisa faltante, inline todos os achados, re-execute revisão.

### Workflow perdeu contexto no meio do passo

Verifique frontmatter para `stepsCompleted`. Retome do último passo completo.

### Agente sugeriu planejamento mas você quer executar

Você pode sobrescrever com `[e]`, mas documente suas suposições. Heurísticas de escalação existem porque planejamento economiza tempo em tarefas complexas.

### Testes falhando após implementação

Retorne ao passo resolve-findings. Revise falhas, corrija problemas, garanta que expectativas de teste estão corretas, re-execute suite completa.

### Precisa de ajuda

```bash
/bmad-help
```

---

## Referência

### Localizações de Arquivos

| Arquivo | Localização |
|---------|-------------|
| Trabalho em andamento | `{implementation_artifacts}/tech-spec-wip.md` |
| Specs completas | `{planning_artifacts}/tech-spec-{slug}.md` |
| Specs arquivadas | `{implementation_artifacts}/tech-spec-{slug}-archived-{date}.md` |
| Arquivos de workflow | `_bmad/gds/workflows/gds-quick-flow/` |

### Critérios de Validação

**Auto-verificação (antes de revisão adversarial):**
- Todas as tarefas/instruções completadas
- Testes escritos e passando
- Segue padrões existentes
- Sem bugs óbvios
- Critérios de aceitação atendidos
- Código é legível

**Revisão adversarial:**
- Correção
- Segurança
- Desempenho
- Manutenibilidade
- Cobertura de testes
- Tratamento de erros
