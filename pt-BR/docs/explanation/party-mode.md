---
title: "Modo Festa"
description: Colaboração multi-agente - tenha todos os seus agentes de IA em uma conversa
---

Tenha todos os seus agentes de IA em uma conversa.

## O Que é Modo Festa?

Execute `party-mode` e você tem toda sua equipe de IA em uma sala - PM, Arquiteto, Dev, UX Designer, quem você precisar. BMad Master orquestra, escolhendo agentes relevantes por mensagem. Agentes respondem no personagem, concordam, discordam e constroem em cima das ideias uns dos outros.

A conversa continua pelo tempo que você quiser. Faça perguntas de acompanhamento, empurre de volta nas respostas, redirecione a discussão - é um vai e vem real com seus agentes até você terminar.

**Bom para:**

- Grandes decisões com trade-offs
- Sessões de brainstorming
- Post-mortems quando as coisas dão errado
- Retrospectivas de sprint e planejamento

## Exemplos

### Chamando Atenção para Arquitetura Ruim

**Você:** "Ok equipe, nosso último sprint foi um desastre. O serviço de autenticação caiu três vezes. Quem ferrou isso?"

**Arquiteto:** "O design era sólido - autenticação distribuída com fallbacks apropriados. Se a implementação desviou da spec..."

**Dev:** "Eu segui o doc de arquitetura exatamente. A spec não levou em conta condições de corrida de invalidação de sessão concorrente."

**PM:** "Vocês dois perderam o problema maior - não validamos requisitos de gerenciamento de sessão no PRD. Isso é comigo por não ter pegado."

**TEA:** "E eu deveria ter pegado isso em testes de integração. Os cenários de teste não cobriam invalidação concorrente."

### Brainstorming Criativo

**Você:** "Como fazemos o onboarding parecer mágico em vez de chato?"

**UX Designer:** "Comece com divulgação progressiva - revele recursos conforme usuários precisam deles, não todos de uma vez em um tutorial."

**Storyteller:** "E se onboarding fosse uma história? Cada passo revela a jornada de um personagem - o usuário É o herói."

**Game Designer:** "Construindo nisso - e se a primeira 'quest' fosse na verdade resolver um problema real do usuário? Eles aprendem fazendo algo valioso."

### Decisão Técnica

**Você:** "Monolito ou microservices para MVP?"

**Arquiteto:** "Comece monolito. Microservices adicionam complexidade que você não precisa com 1000 usuários."

**PM:** "Concordo. Tempo até o mercado importa mais que escalabilidade teórica."

**Dev:** "Monolito com limites de módulo claros. Podemos extrair serviços depois se necessário."

:::tip[Melhores Decisões]
Melhores decisões através de perspectivas diversas. Bem-vindo ao modo festa.
:::
