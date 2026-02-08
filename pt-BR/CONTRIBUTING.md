# Contribuindo para o BMad

Obrigado por considerar contribuir! Acreditamos em **Amplificação Humana, Não Substituição** — extraindo o melhor pensamento tanto de humanos quanto de IA através de colaboração guiada.

💬 **Discord**: [Junte-se à nossa comunidade](https://discord.gg/gk8jAdXWmj) para discussões em tempo real, perguntas e colaboração.

---

## Nossa Filosofia

BMad fortalece a colaboração humano-IA através de agentes especializados e workflows guiados. Toda contribuição deve responder: **"Isso torna humanos e IA melhores juntos?"**

**✅ O que aceitamos:**
- Padrões e workflows de colaboração aprimorados
- Personas de agentes e prompts melhorados
- Módulos específicos de domínio aproveitando o BMad Core
- Melhor planejamento e continuidade de contexto

**❌ O que não se encaixa:**
- Soluções puramente automatizadas que marginalizam humanos
- Complexidade que cria barreiras à adoção
- Recursos que fragmentam a base do BMad Core

---

## Relatando Problemas

**TODOS os relatórios de bugs e solicitações de recursos DEVEM passar pelos GitHub Issues.**

### Antes de Criar uma Issue

1. **Pesquise issues existentes** — Use a busca de issues do GitHub para verificar se seu bug ou recurso já foi reportado
2. **Pesquise issues fechadas** — Seu problema pode ter sido corrigido ou abordado anteriormente
3. **Verifique discussões** — Algumas conversas acontecem nas [Discussões do GitHub](https://github.com/bmad-code-org/BMAD-METHOD/discussions)

### Relatórios de Bugs

Após pesquisar, se o bug não foi reportado, use o [template de relatório de bug](https://github.com/bmad-code-org/BMAD-METHOD/issues/new?template=bug_report.md) e inclua:

- Descrição clara do problema
- Passos para reproduzir
- Comportamento esperado vs real
- Seu ambiente (modelo, IDE, versão do BMad)
- Screenshots ou mensagens de erro se aplicável

### Solicitações de Recursos

Após pesquisar, use o [template de solicitação de recurso](https://github.com/bmad-code-org/BMAD-METHOD/issues/new?template=feature_request.md) e explique:

- O que é o recurso
- Por que beneficiaria a comunidade BMad
- Como fortalece a colaboração humano-IA

**Para módulos comunitários**, revise [TRADEMARK.md](TRADEMARK.md) para convenções de nomenclatura apropriadas (ex., "Meu Módulo (Módulo Comunitário BMad)").

---

## Antes de Começar o Trabalho

⚠️ **Obrigatório antes de enviar PRs:**

| Tipo de Trabalho  | Requisito                                        |
| ----------------- | ------------------------------------------------ |
| Correção de bug   | Uma issue aberta (crie uma se não existir)       |
| Recurso           | Uma issue de solicitação de recurso aberta       |
| Mudanças grandes  | Discussão via issue primeiro                     |

**Por quê?** Isso evita esforço desperdiçado em trabalho que pode não se alinhar com a direção do projeto.

---

## Diretrizes de Pull Request

### Branch Alvo

Envie PRs para a branch `main`.

### Tamanho do PR

- **Ideal**: 200-400 linhas de mudanças de código
- **Máximo**: 800 linhas (excluindo arquivos gerados)
- **Um recurso/correção por PR**

Se sua mudança exceder 800 linhas, divida em PRs menores que podem ser revisados independentemente.

### Novo em Pull Requests?

1. **Fork** o repositório
2. **Clone** seu fork: `git clone https://github.com/SEU-USUARIO/bmad-method.git`
3. **Crie um branch**: `git checkout -b fix/descricao` ou `git checkout -b feature/descricao`
4. **Faça mudanças** — mantenha-as focadas
5. **Commit**: `git commit -m "fix: corrigir erro de digitação no README"`
6. **Push**: `git push origin fix/descricao`
7. **Abra PR** do seu fork no GitHub

### Template de Descrição de PR

```markdown
## O quê
[1-2 frases descrevendo O QUE mudou]

## Por quê
[1-2 frases explicando POR QUE esta mudança é necessária]
Corrige #[número da issue]

## Como
- [2-3 marcadores listando COMO você implementou]
-

## Testes
[1-2 frases sobre como você testou isso]
```

**Mantenha abaixo de 200 palavras.**

### Mensagens de Commit

Use commits convencionais:

- `feat:` Novo recurso
- `fix:` Correção de bug
- `docs:` Apenas documentação
- `refactor:` Mudança de código (sem bug/recurso)
- `test:` Adicionando testes
- `chore:` Mudanças de build/ferramentas

Mantenha mensagens abaixo de 72 caracteres. Cada commit = uma mudança lógica.

---

## O que Torna um Bom PR?

| ✅ Faça                        | ❌ Não Faça                     |
| ------------------------------ | ------------------------------- |
| Mude uma coisa por PR          | Misture mudanças não relacionadas |
| Título e descrição claros      | Explicação vaga ou ausente      |
| Referencie issues relacionadas | Reformate arquivos inteiros     |
| Commits pequenos e focados     | Copie todo o seu projeto        |
| Trabalhe em um branch          | Trabalhe diretamente no `main`  |

---

## Diretrizes de Prompts e Agentes

- Mantenha agentes de dev enxutos — foque no contexto de código, não em documentação
- Agentes web/planejamento podem ser maiores com tarefas complexas
- Tudo é linguagem natural (markdown) — sem código no framework central
- Use módulos BMad para recursos específicos de domínio
- Valide schemas YAML: `npm run validate:schemas`

---

## Precisa de Ajuda?

- 💬 **Discord**: [Junte-se à comunidade](https://discord.gg/gk8jAdXWmj)
- 🐛 **Bugs**: Use o [template de relatório de bug](https://github.com/bmad-code-org/BMAD-METHOD/issues/new?template=bug_report.md)
- 💡 **Recursos**: Use o [template de solicitação de recurso](https://github.com/bmad-code-org/BMAD-METHOD/issues/new?template=feature_request.md)

---

## Código de Conduta

Ao participar, você concorda em seguir nosso [Código de Conduta](.github/CODE_OF_CONDUCT.md).

## Licença

Ao contribuir, suas contribuições são licenciadas sob a mesma Licença MIT. Veja [CONTRIBUTORS.md](CONTRIBUTORS.md) para atribuição de contribuidores.
