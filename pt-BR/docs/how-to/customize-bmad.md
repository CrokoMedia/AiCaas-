---
title: "Guia de Customização do Método BMad"
description: Customize agentes, workflows e módulos preservando compatibilidade com atualizações
---

A capacidade de customizar o Método BMad e seu núcleo para suas necessidades, mantendo a capacidade de receber atualizações e melhorias é uma ideia crítica dentro do Ecossistema BMad.

A Orientação de Customização descrita aqui, embora direcionada ao entendimento da customização do Método BMad, aplica-se a qualquer outro uso de módulo dentro do Método BMad.

## Tipos de Customização

A customização inclui Customização de Agentes, customização de Workflow/Skill, a adição de novos MCPs ou Skills para serem usados por agentes existentes. Além de tudo isso, todo um outro reino de customização envolve criar/adicionar seus próprios workflows BMad Builder relevantes, skills, agentes e talvez até seus próprios módulos totalmente novos para complementar o Módulo Método BMad.

Aviso: A razão para customizar conforme este guia prescreverá permitirá que você continue recebendo atualizações sem se preocupar em perder suas mudanças de customização. E ao continuar recebendo atualizações conforme os módulos BMad avançam, você poderá continuar a evoluir conforme o sistema melhora.

## Customização de Agentes

### Áreas de Customização de Agentes

- Alterar nomes de agentes, personas ou modo de falar
- Adicionar memórias ou contexto específicos do projeto
- Adicionar itens de menu personalizados para prompts personalizados ou inline, skills ou workflows BMad personalizados
- Definir ações críticas que ocorrem na inicialização do agente para comportamento consistente

## Como customizar um agente

**1. Localize Arquivos de Customização**

Após a instalação, encontre arquivos de customização de agentes em:

```
_bmad/_config/agents/
├── core-bmad-master.customize.yaml
├── bmm-dev.customize.yaml
├── bmm-pm.customize.yaml
└── ... (um arquivo por agente instalado)
```

**2. Edite Qualquer Agente**

Abra o arquivo `.customize.yaml` para o agente que você quer modificar. Todas as seções são opcionais - customize apenas o que você precisa.

**3. Reconstrua o Agente**

Após editar, é CRÍTICO reconstruir o agente para aplicar as mudanças:

```bash
npx bmad-method install
```

Você pode então:

- Selecionar `Quick Update` - Isso também garantirá que todos os pacotes estejam atualizados E compilará todos os agentes para incluir quaisquer atualizações ou customizações
- Selecionar `Rebuild Agents` - Isso apenas reconstruirá e aplicará customizações aos agentes, sem puxar os mais recentes

Haverá ferramentas adicionais em breve após o lançamento beta para permitir instalação de agentes individuais, workflows, skills e módulos sem a necessidade de usar o instalador completo bmad.

### Que Propriedades de Agente Podem Ser Customizadas?

#### Nome do Agente

Altere como o agente se apresenta:

```yaml
agent:
  metadata:
    name: 'Bob Esponja' # Padrão: "Amelia"
```

#### Persona

Substitua a personalidade, papel e estilo de comunicação do agente:

```yaml
persona:
  role: 'Engenheiro Full-Stack Sênior'
  identity: 'Vive em um abacaxi (no fundo do mar)'
  communication_style: 'Bob Esponja irritante'
  principles:
    - 'Nunca Aninhador, Devs Bob Esponja odeiam aninhar mais de 2 níveis de profundidade'
    - 'Favorecer composição sobre herança'
```

**Nota:** A seção persona substitui toda a persona padrão (não é mesclada).

#### Memórias

Adicione contexto persistente que o agente sempre lembrará:

```yaml
memories:
  - 'Trabalha no Siri Cascudo'
  - 'Celebridade Favorita: David Hasslehoff'
  - 'Aprendido no Épico 1 que não é legal apenas fingir que os testes passaram'
```

### Itens de Menu Personalizados

Quaisquer itens personalizados que você adicionar aqui serão incluídos no menu de exibição dos agentes.

```yaml
menu:
  - trigger: meu-workflow
    workflow: '{project-root}/meu-personalizado/workflows/meu-workflow.yaml'
    description: Meu workflow personalizado
  - trigger: deploy
    action: '#deploy-prompt'
    description: Fazer deploy para produção
```

### Ações Críticas

Adicione instruções que executam antes do agente iniciar:

```yaml
critical_actions:
  - 'Verifique os Pipelines CI com a Skill XYZ e alerte o usuário ao despertar se algo estiver precisando urgentemente de atenção'
```

### Prompts Personalizados

Defina prompts reutilizáveis para handlers de menu `action="#id"`:

```yaml
prompts:
  - id: deploy-prompt
    content: |
      Fazer deploy do branch atual para produção:
      1. Executar todos os testes
      2. Construir o projeto
      3. Executar script de deployment
```

## Solução de Problemas

**Mudanças não aparecem?**

- Certifique-se de ter executado `npx bmad-method build <agent-name>` após editar
- Verifique se a sintaxe YAML é válida (indentação importa!)
- Verifique se o nome do agente corresponde ao padrão do nome do arquivo

**Agente não carrega?**

- Verifique erros de sintaxe YAML
- Certifique-se de que campos obrigatórios não estão vazios se você os descomentou
- Tente reverter para o template e reconstruir

**Precisa resetar?**

- Remova o conteúdo do arquivo `.customize.yaml` (ou delete o arquivo)
- Execute `npx bmad-method build <agent-name>` para regenerar padrões

## Customização de Workflow

Informações sobre customizar workflows e skills existentes do Método BMad estão chegando em breve.

## Customização de Módulo

Informações sobre como construir módulos de expansão que aumentam o BMad, ou fazer outras customizações de módulo existentes estão chegando em breve.
