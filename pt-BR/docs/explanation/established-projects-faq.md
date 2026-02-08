---
title: "FAQ de Projetos Estabelecidos"
description: Perguntas comuns sobre usar o Método BMad em projetos estabelecidos
---

Respostas rápidas para perguntas comuns sobre trabalhar em projetos estabelecidos com o Método BMad (BMM).

## Perguntas

- [Tenho que executar document-project primeiro?](#tenho-que-executar-document-project-primeiro)
- [E se eu esquecer de executar document-project?](#e-se-eu-esquecer-de-executar-document-project)
- [Posso usar Quick Flow para projetos estabelecidos?](#posso-usar-quick-flow-para-projetos-estabelecidos)
- [E se meu código existente não segue melhores práticas?](#e-se-meu-codigo-existente-nao-segue-melhores-praticas)

### Tenho que executar document-project primeiro?

Altamente recomendado, especialmente se:

- Não há documentação existente
- Documentação está desatualizada
- Agentes de IA precisam de contexto sobre código existente

Você pode pular se tiver documentação abrangente e atualizada incluindo `docs/index.md` ou usar outras ferramentas ou técnicas para ajudar na descoberta para o agente construir em cima de um sistema existente.

### E se eu esquecer de executar document-project?

Não se preocupe - você pode fazer isso a qualquer momento. Você pode até fazer durante ou depois de um projeto para ajudar a manter docs atualizados.

### Posso usar Quick Flow para projetos estabelecidos?

Sim! Quick Flow funciona muito bem para projetos estabelecidos. Ele irá:

- Auto-detectar sua stack existente
- Analisar padrões de código existentes
- Detectar convenções e pedir confirmação
- Gerar especificação técnica rica em contexto que respeita código existente

Perfeito para correções de bugs e pequenos recursos em bases de código existentes.

### E se meu código existente não segue melhores práticas?

Quick Flow detecta suas convenções e pergunta: "Devo seguir essas convenções existentes?" Você decide:

- **Sim** → Manter consistência com base de código atual
- **Não** → Estabelecer novos padrões (documente por quê na especificação técnica)

BMM respeita sua escolha — não forçará modernização, mas a oferecerá.

**Tem uma pergunta não respondida aqui?** Por favor [abra uma issue](https://github.com/bmad-code-org/BMAD-METHOD/issues) ou pergunte no [Discord](https://discord.gg/gk8jAdXWmj) para que possamos adicioná-la!
