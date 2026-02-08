# Instalação e Uso do Wrapper AiCaas

## 📋 O que é o Wrapper?

O wrapper AiCaas permite que você use:

```bash
npx aicaas install
```

Em vez de referenciar o pacote original. Mantém toda a funcionalidade mas com branding AiCaas.

## 🎯 Duas Opções de Uso

### Opção 1: Publicar no NPM (Recomendado)

**Vantagens:**
- ✅ Qualquer pessoa pode usar `npx aicaas install`
- ✅ Instalação mais rápida
- ✅ Versão única e centralizada
- ✅ Mais profissional

**Como fazer:**
Veja o guia completo em: [wrapper/PUBLICACAO.md](wrapper/PUBLICACAO.md)

**Resumo:**
```bash
cd wrapper
npm install
npm login
npm publish
```

Depois disso, qualquer pessoa pode usar:
```bash
npx aicaas install
```

### Opção 2: Usar Localmente

**Vantagens:**
- ✅ Teste antes de publicar
- ✅ Uso privado
- ✅ Não precisa conta NPM

**Como fazer:**
```bash
cd wrapper
npm install
npm link

# Agora pode usar em qualquer lugar:
aicaas install
```

## 🚀 Começando

### Pré-requisitos

- Node.js 20+ instalado
- Git instalado
- Conta NPM (apenas para publicação)

### Teste Rápido Local

```bash
# 1. Entre no diretório wrapper
cd /Users/macbook-karla/BMAD-METHOD/wrapper

# 2. Instale dependências
npm install

# 3. Crie link global
npm link

# 4. Teste o comando
aicaas --help

# 5. Teste instalação
mkdir ~/test-project
cd ~/test-project
aicaas install
```

## 📁 Estrutura do Wrapper

```
wrapper/
├── package.json          # Configuração do pacote NPM
├── bin/
│   └── aicaas.js        # Script executável principal
├── README.md            # Documentação do wrapper
├── PUBLICACAO.md        # Guia de publicação
└── .gitignore          # Arquivos ignorados pelo git
```

## 🔧 Como Funciona

1. Usuário executa: `npx aicaas install`
2. Script `bin/aicaas.js` é executado
3. Mostra banner do AiCaas
4. Chama `bmad-method` como dependência
5. Toda funcionalidade original é mantida

## 📝 Personalização

### Alterar Banner

Edite o arquivo: `wrapper/bin/aicaas.js`

Procure pela função `printBanner()` e modifique o ASCII art.

### Alterar Comandos

O script aceita os mesmos comandos que bmad-method:
- `aicaas install` - Instalação padrão
- `aicaas --help` - Ajuda
- Qualquer outro comando do framework

### Atualizar Versão do Framework

```bash
cd wrapper
npm update bmad-method
npm version patch
```

Se publicado no NPM:
```bash
npm publish
```

## ⚠️ Notas Importantes

1. **Licença**: O wrapper usa MIT License e lista bmad-method como dependência
2. **Marca**: Não usa marca "BMad Method" - apenas referência técnica à dependência
3. **Funcionalidade**: 100% da funcionalidade original é mantida
4. **Updates**: Atualize a dependência bmad-method quando houver novas versões

## 🆘 Solução de Problemas

### Erro: "Cannot find module 'bmad-method'"

```bash
cd wrapper
npm install
```

### Erro: "Permission denied"

```bash
chmod +x wrapper/bin/aicaas.js
```

### Comando 'aicaas' não encontrado (após npm link)

```bash
cd wrapper
npm unlink
npm link
```

### Banner não aparece corretamente

Verifique se seu terminal suporta cores ANSI. Teste com:
```bash
aicaas --help
```

## 📚 Próximos Passos

1. **Testar localmente**: Use `npm link` para testar
2. **Revisar código**: Verifique se tudo funciona como esperado
3. **Publicar**: Siga o guia em `wrapper/PUBLICACAO.md`
4. **Atualizar documentação**: Atualize README.md com instruções

## 🔗 Links

- Repositório: https://github.com/CrokoMedia/AiCaas-
- Documentação PT-BR: [pt-BR/README.md](pt-BR/README.md)
- Guia de Publicação: [wrapper/PUBLICACAO.md](wrapper/PUBLICACAO.md)
