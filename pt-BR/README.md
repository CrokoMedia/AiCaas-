![Método BMad](../banner-bmad-method.png)

[![Versão](https://img.shields.io/npm/v/bmad-method?color=blue&label=version)](https://www.npmjs.com/package/bmad-method)
[![Licença: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](../LICENSE)
[![Versão Node.js](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen)](https://nodejs.org)
[![Discord](https://img.shields.io/badge/Discord-Junte--se%20%C3%A0%20Comunidade-7289da?logo=discord&logoColor=white)](https://discord.gg/gk8jAdXWmj)

**Breakthrough Method of Agile AI Driven Development (Método Revolucionário de Desenvolvimento Ágil Orientado por IA)** — Um framework de desenvolvimento ágil orientado por IA com 21 agentes especializados, mais de 50 workflows guiados e inteligência adaptativa à escala que se ajusta desde correções de bugs até sistemas empresariais.

**100% gratuito e código aberto.** Sem paywalls. Sem conteúdo bloqueado. Sem Discord fechado. Acreditamos em capacitar todos, não apenas aqueles que podem pagar.

## Por que BMad?

Ferramentas de IA tradicionais pensam por você, produzindo resultados medianos. Os agentes BMad e o workflow facilitado agem como colaboradores especializados que o guiam através de um processo estruturado para extrair seu melhor pensamento em parceria com a IA.

- **Ajuda Inteligente por IA**: Novidade do beta - a ajuda assistida por IA irá guiá-lo do início ao fim - basta pedir `/bmad-help` depois de instalar o BMad no seu projeto
- **Adaptação à Escala e Domínio**: Ajusta automaticamente a profundidade de planejamento e necessidades com base na complexidade, domínio e tipo do projeto - um App Mobile de Namoro SaaS tem necessidades de planejamento diferentes de um sistema médico de diagnóstico, o BMad se adapta e o ajuda ao longo do caminho
- **Workflows Estruturados**: Fundamentados em melhores práticas ágeis em análise, planejamento, arquitetura e implementação
- **Agentes Especializados**: Mais de 12 especialistas de domínio (PM, Arquiteto, Desenvolvedor, UX, Scrum Master e mais)
- **Modo Festa**: Traga múltiplas personas de agentes em uma sessão para planejar, solucionar problemas ou discutir seu projeto colaborativamente, múltiplas perspectivas com máxima diversão
- **Ciclo de Vida Completo**: Do brainstorming ao deployment, BMad está com você em cada etapa do caminho

## Início Rápido

**Pré-requisitos**: [Node.js](https://nodejs.org) v20+

```bash
npx aicaas install
```

Siga os prompts do instalador e então abra seu IDE de IA (Claude Code, Cursor, Windsurf, etc.) na pasta do projeto.

**Instalação Não-Interativa**: Para pipelines CI/CD ou deployments automatizados, use flags de linha de comando:

```bash
npx aicaas install --directory /caminho/para/projeto --modules bmm --tools claude-code --yes
```

Veja o [Guia de Instalação Não-Interativa](docs/non-interactive-installation.md) para todas as opções disponíveis.

> **Não tem certeza do que fazer?** Execute `/bmad-help` — ele diz exatamente o que vem a seguir e o que é opcional. Você também pode fazer perguntas como:

 - `/bmad-help Como devo construir um aplicativo web para meu Negócio de Camisetas que pode escalar para milhões?`
 - `/bmad-help Acabei de terminar a arquitetura, não tenho certeza do que fazer em seguida`

E o incrível é que o BMad Help evolui dependendo de quais módulos você instala também!
 - `/bmad-help Estou interessado em realmente explorar maneiras criativas de demonstrar o BMad no trabalho, o que você recomenda para ajudar a planejar uma ótima apresentação de slides e narrativa convincente?`, e se você tem o Creative Intelligence Suite instalado, ele oferecerá conselhos diferentes ou complementares do que se você tiver apenas o Módulo BMad Method instalado!

Os workflows abaixo mostram o caminho mais rápido para código funcional. Você também pode carregar agentes diretamente para um processo mais estruturado, planejamento extensivo ou para aprender sobre práticas de desenvolvimento ágil — os agentes o guiam com menus, explicações e elicitação em cada etapa.

### Caminho Simples (Quick Flow)

Correções de bugs, recursos pequenos, escopo claro — 3 comandos - 1 Agente Opcional:

1. `/quick-spec` — analisa sua base de código e produz uma especificação técnica com histórias
2. `/dev-story` — implementa cada história
3. `/code-review` — valida a qualidade

### Caminho de Planejamento Completo (Método BMad)

Produtos, plataformas, recursos complexos — planejamento estruturado e depois construção:

1. `/product-brief` — define problema, usuários e escopo MVP
2. `/create-prd` — requisitos completos com personas, métricas e riscos
3. `/create-architecture` — decisões técnicas e design de sistema
4. `/create-epics-and-stories` — divide o trabalho em histórias priorizadas
5. `/sprint-planning` — inicializa rastreamento de sprint
6. **Repita por história:** `/create-story` → `/dev-story` → `/code-review`

Cada etapa diz o que vem a seguir. Fases opcionais (brainstorming, pesquisa, design UX) estão disponíveis quando você precisar — pergunte `/bmad-help` a qualquer momento. Para um passo a passo detalhado, veja o [Tutorial de Início](http://docs.bmad-method.org/tutorials/getting-started/).

## Módulos

O Método BMad se estende com módulos oficiais para domínios especializados. Os módulos estão disponíveis durante a instalação e podem ser adicionados ao seu projeto a qualquer momento. Após o período beta V6, estes também estarão disponíveis como Plugins e Skills Granulares.

| Módulo                                    | GitHub                                                                                                                            | NPM                                                                                                | Propósito                                                                  |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| **Método BMad (BMM)**                     | [bmad-code-org/BMAD-METHOD](https://github.com/bmad-code-org/BMAD-METHOD)                                                         | [bmad-method](https://www.npmjs.com/package/bmad-method)                                           | Framework central com mais de 34 workflows em 4 fases de desenvolvimento  |
| **BMad Builder (BMB)**                    | [bmad-code-org/bmad-builder](https://github.com/bmad-code-org/bmad-builder)                                                       | [bmad-builder](https://www.npmjs.com/package/bmad-builder)                                         | Crie agentes BMad personalizados, workflows e módulos específicos de domínio |
| **Test Architect (TEA)** 🆕               | [bmad-code-org/tea](https://github.com/bmad-code-org/bmad-method-test-architecture-enterprise)                                    | [tea](https://www.npmjs.com/package/bmad-method-test-architecture-enterprise)                      | Estratégia de teste baseada em risco, automação e gates de release (8 workflows) |
| **Game Dev Studio (BMGD)**                | [bmad-code-org/bmad-module-game-dev-studio](https://github.com/bmad-code-org/bmad-module-game-dev-studio)                         | [bmad-game-dev-studio](https://www.npmjs.com/package/bmad-game-dev-studio)                         | Workflows de desenvolvimento de jogos para Unity, Unreal e Godot          |
| **Creative Intelligence Suite (CIS)**     | [bmad-code-org/bmad-module-creative-intelligence-suite](https://github.com/bmad-code-org/bmad-module-creative-intelligence-suite) | [bmad-creative-intelligence-suite](https://www.npmjs.com/package/bmad-creative-intelligence-suite) | Inovação, brainstorming, design thinking e resolução de problemas         |

* Mais módulos estão chegando nas próximas 2 semanas do BMad Official, e um marketplace comunitário para o instalador também virá com o lançamento final do V6!

## Agentes de Teste

BMad fornece duas opções de teste para atender às suas necessidades:

### Quinn (QA) - Integrado

**Automação de teste rápida para cobertura rápida**

- ✅ **Sempre disponível** no módulo BMM (sem instalação separada)
- ✅ **Simples**: Um workflow (`QA` - Automate)
- ✅ **Amigável para iniciantes**: Padrões de framework de teste padrão
- ✅ **Rápido**: Gere testes e entregue

**Use Quinn para:** Projetos pequenos, cobertura rápida, padrões padrão

### Test Architect (TEA) - Módulo Opcional

**Estratégia de teste e engenharia de qualidade de nível empresarial**

- 🆕 **Módulo standalone** (instale separadamente)
- 🏗️ **Abrangente**: 8 workflows cobrindo o ciclo de vida completo de testes
- 🎯 **Avançado**: Planejamento baseado em risco, quality gates, avaliação NFR
- 📚 **Orientado por conhecimento**: 34 padrões de teste e melhores práticas
- 📖 [Documentação do Test Architect](https://bmad-code-org.github.io/bmad-method-test-architecture-enterprise/)

**Use TEA para:** Projetos empresariais, estratégia de teste, conformidade, gates de release

---

## Documentação

**[Documentação BMad](http://docs.bmad-method.org)** — Tutoriais, guias práticos, conceitos e referência
**[Documentação do Test Architect](https://bmad-code-org.github.io/bmad-method-test-architecture-enterprise/)** — Documentação do módulo standalone TEA

- [Tutorial de Início](http://docs.bmad-method.org/tutorials/getting-started/)
- [Atualizando de Versões Anteriores](http://docs.bmad-method.org/how-to/upgrade-to-v6/)
- [Guia de Migração do Test Architect](https://bmad-code-org.github.io/bmad-method-test-architecture-enterprise/migration/) — Atualizando do TEA incorporado no BMM

### Para Usuários v4

- **[Documentação v4](https://github.com/bmad-code-org/BMAD-METHOD/tree/V4/docs)**
- Se você precisa instalar o V4, pode fazer isso com `npx bmad-method@4.44.3 install` - similar para qualquer versão anterior.

## Comunidade

- [Discord](https://discord.gg/gk8jAdXWmj) — Obtenha ajuda, compartilhe ideias, colabore
- [Inscreva-se no YouTube](https://www.youtube.com/@BMadCode) — Tutoriais, master class e podcast (lançamento em fevereiro de 2025)
- [GitHub Issues](https://github.com/bmad-code-org/BMAD-METHOD/issues) — Relatórios de bugs e solicitações de recursos
- [Discussões](https://github.com/bmad-code-org/BMAD-METHOD/discussions) — Conversas da comunidade

## Apoie o BMad

BMad é gratuito para todos — e sempre será. Se você gostaria de apoiar o desenvolvimento:

- ⭐ Por favor, clique no ícone de estrela do projeto perto do topo direito desta página
- ☕ [Compre-me um Café](https://buymeacoffee.com/bmad) — Abasteça o desenvolvimento
- 🏢 Patrocínio corporativo — DM no Discord
- 🎤 Palestras e Mídia — Disponível para conferências, podcasts, entrevistas (BM no Discord)

## Contribuindo

Contribuições são bem-vindas! Veja [CONTRIBUTING.md](CONTRIBUTING.md) para diretrizes.

## Licença

Licença MIT — veja [LICENSE](../LICENSE) para detalhes.

---

**BMad** e **BMAD-METHOD** são marcas registradas da BMad Code, LLC. Veja [TRADEMARK.md](TRADEMARK.md) para detalhes.

[![Contribuidores](https://contrib.rocks/image?repo=bmad-code-org/BMAD-METHOD)](https://github.com/bmad-code-org/BMAD-METHOD/graphs/contributors)

Veja [CONTRIBUTORS.md](CONTRIBUTORS.md) para informações sobre contribuidores.
