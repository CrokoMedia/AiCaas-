# AiCaas Wrapper

Este diretório contém o wrapper de instalação do AiCaas que permite usar:

```bash
npx aicaas install
```

## 📦 Estrutura

- `package.json` - Configuração do pacote NPM
- `bin/aicaas.js` - Script executável que funciona como wrapper

## 🚀 Como Funciona

O wrapper AiCaas:

1. Mostra branding AiCaas no terminal
2. Chama o `bmad-method` original como dependência
3. Mantém toda funcionalidade do framework original
4. Permite instalação com comando personalizado

## 📝 Para Desenvolvedores

### Testar Localmente

```bash
cd wrapper
npm link
aicaas install
```

### Publicar no NPM

```bash
cd wrapper
npm login
npm publish
```

Após publicação, usuários poderão instalar com:

```bash
npx aicaas install
```

## 🔧 Manutenção

Para atualizar a versão do bmad-method:

```bash
cd wrapper
npm update bmad-method
```

## ⚖️ Licença

MIT - Veja [LICENSE](../LICENSE) para detalhes.

O AiCaas utiliza o framework bmad-method (MIT License) como dependência.
