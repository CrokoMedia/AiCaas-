---
title: "Revisão Adversarial"
description: Técnica de raciocínio forçado que previne revisões preguiçosas do tipo "parece bom"
---

Force análise mais profunda exigindo que problemas sejam encontrados.

## O Que é Revisão Adversarial?

Uma técnica de revisão onde o revisor *deve* encontrar problemas. Não é permitido "parece bom". O revisor adota uma postura cínica - assume que problemas existem e os encontra.

Isso não é sobre ser negativo. É sobre forçar análise genuína em vez de uma olhada superficial que carimba de borracha o que foi submetido.

**A regra central:** Você deve encontrar problemas. Zero achados dispara uma parada - re-analise ou explique por quê.

## Por Que Funciona

Revisões normais sofrem de viés de confirmação. Você folheia o trabalho, nada salta aos olhos, você aprova. O mandato "encontre problemas" quebra esse padrão:

- **Força minuciosidade** - Não pode aprovar até ter olhado com atenção suficiente para encontrar problemas
- **Pega coisas faltando** - "O que não está aqui?" se torna uma pergunta natural
- **Melhora qualidade do sinal** - Achados são específicos e acionáveis, não preocupações vagas
- **Assimetria de informação** - Execute revisões com contexto fresco (sem acesso ao raciocínio original) para que você avalie o artefato, não a intenção

## Onde é Usado

Revisão adversarial aparece ao longo dos workflows BMAD - revisão de código, verificações de prontidão de implementação, validação de spec e outros. Às vezes é um passo obrigatório, às vezes opcional (como elicitação avançada ou modo festa). O padrão se adapta a qualquer artefato que precise de escrutínio.

## Filtragem Humana Obrigatória

Porque a IA é *instruída* a encontrar problemas, ela encontrará problemas - mesmo quando não existem. Espere falsos positivos: preciosismos vestidos como problemas, mal-entendidos de intenção ou preocupações alucinadas.

**Você decide o que é real.** Revise cada achado, descarte o ruído, corrija o que importa.

## Exemplo

Em vez de:

> "A implementação de autenticação parece razoável. Aprovado."

Uma revisão adversarial produz:

> 1. **ALTO** - `login.ts:47` - Sem limitação de taxa em tentativas falhadas
> 2. **ALTO** - Token de sessão armazenado no localStorage (vulnerável a XSS)
> 3. **MÉDIO** - Validação de senha acontece apenas no lado do cliente
> 4. **MÉDIO** - Sem log de auditoria para tentativas de login falhadas
> 5. **BAIXO** - Número mágico `3600` deveria ser `SESSION_TIMEOUT_SECONDS`

A primeira revisão poderia perder uma vulnerabilidade de segurança. A segunda pegou quatro.

## Iteração e Retornos Decrescentes

Depois de abordar achados, considere executá-la novamente. Uma segunda passada geralmente pega mais. Uma terceira nem sempre é inútil também. Mas cada passada leva tempo, e eventualmente você atinge retornos decrescentes - apenas preciosismos e achados falsos.

:::tip[Melhores Revisões]
Assuma que problemas existem. Procure o que está faltando, não apenas o que está errado.
:::
