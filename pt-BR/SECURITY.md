# Política de Segurança

## Versões Suportadas

Lançamos patches de segurança para as seguintes versões:

| Versão   | Suportada          |
| -------- | ------------------ |
| Mais recente | :white_check_mark: |
| < Mais recente | :x:           |

Recomendamos sempre usar a versão mais recente do Método BMad para garantir que você tenha as atualizações de segurança mais recentes.

## Reportando uma Vulnerabilidade

Levamos vulnerabilidades de segurança a sério. Se você descobrir um problema de segurança, por favor reporte de forma responsável.

### Como Reportar

**NÃO reporte vulnerabilidades de segurança através de issues públicas do GitHub.**

Em vez disso, por favor reporte através de um destes métodos:

1. **GitHub Security Advisories** (Preferido): Use [relatório de vulnerabilidade privada do GitHub](https://github.com/bmad-code-org/BMAD-METHOD/security/advisories/new) para enviar um relatório confidencial.

2. **Discord**: Contate um mantenedor diretamente via DM no nosso [servidor Discord](https://discord.gg/gk8jAdXWmj).

### O que Incluir

Por favor, inclua o máximo possível das seguintes informações:

- Tipo de vulnerabilidade (ex., injeção de prompt, path traversal, etc.)
- Caminhos completos do(s) arquivo(s) fonte relacionados à vulnerabilidade
- Instruções passo a passo para reproduzir o problema
- Prova de conceito ou código de exploit (se disponível)
- Avaliação de impacto da vulnerabilidade

### Cronograma de Resposta

- **Resposta Inicial**: Dentro de 48 horas após receber seu relatório
- **Atualização de Status**: Dentro de 7 dias com nossa avaliação
- **Meta de Resolução**: Problemas críticos dentro de 30 dias; outros problemas dentro de 90 dias

### O que Esperar

1. Confirmaremos o recebimento do seu relatório
2. Investigaremos e validaremos a vulnerabilidade
3. Trabalharemos em uma correção e coordenaremos o timing de divulgação com você
4. Daremos crédito a você no aviso de segurança (a menos que você prefira permanecer anônimo)

## Escopo de Segurança

### No Escopo

- Vulnerabilidades no código do framework central do Método BMad
- Problemas de segurança nas definições de agentes ou workflows que podem levar a comportamento não intencional
- Problemas de path traversal ou acesso ao sistema de arquivos
- Vulnerabilidades de injeção de prompt que contornam o comportamento pretendido do agente
- Vulnerabilidades na cadeia de suprimentos em dependências

### Fora do Escopo

- Problemas de segurança em agentes ou módulos personalizados criados por usuários
- Vulnerabilidades em provedores de IA de terceiros (Claude, GPT, etc.)
- Problemas que requerem acesso físico à máquina de um usuário
- Ataques de engenharia social
- Ataques de negação de serviço que não exploram uma vulnerabilidade específica

## Melhores Práticas de Segurança para Usuários

Ao usar o Método BMad:

1. **Revise Saídas de Agentes**: Sempre revise código gerado por IA antes de executá-lo
2. **Limite Acesso a Arquivos**: Configure seu IDE de IA para limitar o acesso ao sistema de arquivos quando possível
3. **Mantenha Atualizado**: Atualize regularmente para a versão mais recente
4. **Valide Dependências**: Revise quaisquer dependências adicionadas pelo código gerado
5. **Isolamento de Ambiente**: Considere executar desenvolvimento assistido por IA em ambientes isolados

## Agradecimentos

Apreciamos os esforços da comunidade de pesquisa em segurança para ajudar a manter o Método BMad seguro. Contribuidores que reportam problemas de segurança válidos serão reconhecidos em nossos avisos de segurança.

---

Obrigado por ajudar a manter o Método BMad e nossa comunidade seguros.
