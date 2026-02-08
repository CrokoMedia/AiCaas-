---
title: "Correções Rápidas"
description: Como fazer correções rápidas e mudanças ad-hoc
---

Use o **agente DEV** diretamente para correções de bugs, refatorações ou pequenas mudanças direcionadas que não requerem o método BMad completo ou Quick Flow.

## Quando Usar Isso

- Correções de bugs simples
- Pequenas refatorações e mudanças que não precisam de ideação, planejamento ou mudanças arquiteturais extensivas
- Refatorações maiores ou melhorias com combinação de modo de planejamento e execução de ferramenta integrada, ou melhor ainda use quick flow
- Aprender sobre sua base de código

## Passos

### 1. Carregar um Agente

Para correções rápidas, você pode usar:

- **Agente DEV** - Para trabalho focado em implementação
- **Quick Flow Solo Dev** - Para mudanças um pouco maiores que ainda precisam de uma quick-spec para manter o agente alinhado ao planejamento e padrões

### 2. Descrever a Mudança

Simplesmente diga ao agente o que você precisa:

```
Corrigir o bug de validação de login que permite senhas vazias
```

ou

```
Refatorar o UserService para usar async/await em vez de callbacks
```

### 3. Deixar o Agente Trabalhar

O agente irá:

- Analisar o código relevante
- Propor uma solução
- Implementar a mudança
- Executar testes (se disponíveis)

### 4. Revisar e Fazer Commit

Revise as mudanças feitas e faça commit quando satisfeito.

## Aprendendo Sua Base de Código

Esta abordagem também é excelente para explorar código desconhecido:

```
Explique como o sistema de autenticação funciona nesta base de código
```

```
Mostre-me onde o tratamento de erros acontece na camada de API
```

LLMs são excelentes em interpretar e analisar código, seja gerado por IA ou não. Use o agente para:

- Aprender sobre seu projeto
- Entender como as coisas são construídas
- Explorar partes desconhecidas da base de código

## Quando Atualizar para Planejamento Formal

Considere usar Quick Flow ou método BMad completo quando:

- A mudança afeta múltiplos arquivos ou sistemas
- Você não tem certeza sobre o escopo
- A correção continua crescendo em complexidade
- Você precisa de documentação para a mudança
