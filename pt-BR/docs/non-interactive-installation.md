---
title: Instalação Não-Interativa
description: Instale o BMAD usando flags de linha de comando para pipelines CI/CD e deployments automatizados
---

# Instalação Não-Interativa

BMAD agora suporta instalação não-interativa através de flags de linha de comando. Isso é particularmente útil para:

- Deployments automatizados e pipelines CI/CD
- Instalações com script
- Instalações em lote em múltiplos projetos
- Instalações rápidas com configurações conhecidas

## Modos de Instalação

### 1. Totalmente Interativo (Padrão)

Execute sem nenhuma flag para usar os prompts interativos tradicionais:

```bash
npx bmad-method install
```

### 2. Totalmente Não-Interativo

Forneça todas as flags obrigatórias para pular todos os prompts:

```bash
npx bmad-method install \
  --directory /caminho/para/projeto \
  --modules bmm,bmb \
  --tools claude-code,cursor \
  --user-name "João Silva" \
  --communication-language Portuguese \
  --document-output-language Portuguese \
  --output-folder _bmad-output
```

### 3. Semi-Interativo (Fallback Gracioso)

Forneça algumas flags e deixe o BMAD solicitar o restante:

```bash
npx bmad-method install \
  --directory /caminho/para/projeto \
  --modules bmm
```

Neste caso, BMAD irá:
- Usar o diretório e módulos fornecidos
- Solicitar seleção de ferramenta
- Solicitar configuração central

### 4. Instalação Rápida com Padrões

Use a flag `-y` ou `--yes` para aceitar todos os padrões:

```bash
npx bmad-method install --yes
```

Isso irá:
- Instalar no diretório atual
- Pular prompts de conteúdo personalizado
- Usar valores padrão para toda configuração
- Usar ferramentas configuradas previamente (ou pular configuração de ferramenta se nenhuma existir)

### 5. Instalar Sem Ferramentas

Para pular completamente a configuração de ferramenta/IDE:

**Opção 1: Use --tools none**
```bash
npx bmad-method install --directory ~/meuapp --modules bmm --tools none
```

**Opção 2: Use flag --yes (se nenhuma ferramenta foi configurada previamente)**
```bash
npx bmad-method install --yes
```

**Opção 3: Omita --tools e selecione "None" no prompt interativo**
```bash
npx bmad-method install --directory ~/meuapp --modules bmm
# Então selecione "⚠ None - I am not installing any tools" quando solicitado
```

## Flags Disponíveis

### Opções de Instalação

| Flag | Descrição | Exemplo |
|------|-----------|---------|
| `--directory <caminho>` | Diretório de instalação | `--directory ~/projetos/meuapp` |
| `--modules <módulos>` | IDs de módulos separados por vírgula | `--modules bmm,bmb` |
| `--tools <ferramentas>` | IDs de ferramentas/IDE separados por vírgula (use "none" para pular) | `--tools claude-code,cursor` ou `--tools none` |
| `--custom-content <caminhos>` | Caminhos para módulos personalizados separados por vírgula | `--custom-content ~/meu-modulo,~/outro-modulo` |
| `--action <tipo>` | Ação para instalações existentes | `--action quick-update` |

### Configuração Central

| Flag | Descrição | Padrão |
|------|-----------|--------|
| `--user-name <nome>` | Nome para agentes usarem | Nome de usuário do sistema |
| `--communication-language <idioma>` | Idioma de comunicação do agente | English |
| `--document-output-language <idioma>` | Idioma de saída de documentos | English |
| `--output-folder <caminho>` | Caminho da pasta de saída | _bmad-output |

### Outras Opções

| Flag | Descrição |
|------|-----------|
| `-y, --yes` | Aceitar todos os padrões e pular prompts |
| `-d, --debug` | Habilitar saída de debug para geração de manifesto |

## Tipos de Ação

Ao trabalhar com instalações existentes, use a flag `--action`:

- `install` - Instalação nova (padrão para novos diretórios)
- `update` - Modificar instalação existente (alterar módulos/config)
- `quick-update` - Atualizar instalação sem alterar configuração
- `compile-agents` - Recompilar agentes apenas com customizações

Exemplo:

```bash
npx bmad-method install --action quick-update
```

## IDs de Módulos

IDs de módulos disponíveis para a flag `--modules`:

### Módulos Centrais
- `bmm` - BMad Method Master
- `bmb` - BMad Builder

### Módulos Externos
Verifique o [registro BMad](https://github.com/bmad-code-org) para módulos externos disponíveis.

## IDs de Ferramenta/IDE

IDs de ferramentas disponíveis para a flag `--tools`:

- `claude-code` - Claude Code CLI
- `cursor` - Cursor IDE
- `windsurf` - Windsurf IDE
- `vscode` - Visual Studio Code
- `jetbrains` - JetBrains IDEs
- E mais...

Execute o instalador interativo uma vez para ver todas as ferramentas disponíveis.

## Exemplos

### Instalação Básica

Instalar módulo BMM com Claude Code:

```bash
npx bmad-method install \
  --directory ~/projetos/meuapp \
  --modules bmm \
  --tools claude-code \
  --user-name "Equipe de Desenvolvimento"
```

### Instalação Sem Ferramentas

Instalar sem configurar ferramentas/IDEs:

```bash
npx bmad-method install \
  --directory ~/projetos/meuapp \
  --modules bmm \
  --tools none \
  --user-name "Equipe de Desenvolvimento"
```

### Instalação Completa com Múltiplos Módulos

```bash
npx bmad-method install \
  --directory ~/projetos/meuapp \
  --modules bmm,bmb \
  --tools claude-code,cursor \
  --user-name "João Silva" \
  --communication-language Portuguese \
  --document-output-language Portuguese \
  --output-folder _output
```

### Atualizar Instalação Existente

```bash
npx bmad-method install \
  --directory ~/projetos/meuapp \
  --action update \
  --modules bmm,bmb,modulo-personalizado
```

### Atualização Rápida (Preservar Configurações)

```bash
npx bmad-method install \
  --directory ~/projetos/meuapp \
  --action quick-update
```

### Instalação com Conteúdo Personalizado

```bash
npx bmad-method install \
  --directory ~/projetos/meuapp \
  --modules bmm \
  --custom-content ~/meu-modulo-personalizado,~/outro-modulo \
  --tools claude-code
```

### Instalação de Pipeline CI/CD

```bash
#!/bin/bash
# install-bmad.sh

npx bmad-method install \
  --directory "${GITHUB_WORKSPACE}" \
  --modules bmm \
  --tools claude-code \
  --user-name "Bot CI" \
  --communication-language Portuguese \
  --document-output-language Portuguese \
  --output-folder _bmad-output \
  --yes
```

## Instalações Específicas de Ambiente

### Ambiente de Desenvolvimento

```bash
npx bmad-method install \
  --directory . \
  --modules bmm,bmb \
  --tools claude-code,cursor \
  --user-name "${USER}"
```

### Ambiente de Produção

```bash
npx bmad-method install \
  --directory /opt/app \
  --modules bmm \
  --tools claude-code \
  --user-name "Equipe de Produção" \
  --output-folder /var/bmad-output
```

## Validação e Tratamento de Erros

BMAD valida todas as flags fornecidas:

- **Directory**: Deve ser um caminho válido com permissões de escrita
- **Modules**: Avisará sobre IDs de módulos inválidos (mas não falhará)
- **Tools**: Avisará sobre IDs de ferramentas inválidos (mas não falhará)
- **Custom Content**: Cada caminho deve conter um arquivo `module.yaml` válido
- **Action**: Deve ser um de: install, update, quick-update, compile-agents

Valores inválidos irão:
1. Mostrar um erro e sair (para opções críticas como directory)
2. Mostrar um aviso e pular (para itens opcionais como custom content)
3. Retornar para prompts interativos (para valores obrigatórios ausentes)

## Dicas e Melhores Práticas

1. **Use caminhos absolutos** para `--directory` para evitar ambiguidade
2. **Teste flags localmente** antes de usar em pipelines CI/CD
3. **Combine com `-y`** para instalações verdadeiramente desacompanhadas
4. **Verifique disponibilidade de módulos** executando o instalador interativo uma vez
5. **Use flag `--debug`** se encontrar problemas durante a instalação
6. **Pule configuração de ferramenta** com `--tools none` para ambientes de servidor/CI onde IDEs não são necessárias
7. **Flags parciais estão OK** - Omita flags e deixe o BMAD solicitar valores ausentes interativamente

## Solução de Problemas

### Instalação falha com "Invalid directory"

Verifique que:
- O caminho do diretório existe ou seu pai existe
- Você tem permissões de escrita
- O caminho é absoluto ou corretamente relativo ao diretório atual

### Módulo não encontrado

- Verifique se o ID do módulo está correto (verifique módulos disponíveis no modo interativo)
- Módulos externos podem precisar estar disponíveis no registro

### Caminho de conteúdo personalizado inválido

Certifique-se de que cada caminho de conteúdo personalizado:
- Aponte para um diretório
- Contenha um arquivo `module.yaml` na raiz
- Tenha um campo `code` no `module.yaml`

## Feedback e Problemas

Se você encontrar algum problema com instalação não-interativa:

1. Execute com flag `--debug` para saída detalhada
2. Tente o modo interativo para verificar o problema
3. Reporte problemas no GitHub: <https://github.com/bmad-code-org/BMAD-METHOD/issues>
