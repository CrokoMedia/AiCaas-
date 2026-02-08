# Guia de Publicação do AiCaas

Este guia mostra como testar localmente e publicar o wrapper AiCaas no NPM.

## 🧪 Teste Local

### Opção 1: Usar npm link (Recomendado)

```bash
# No diretório wrapper/
cd /Users/macbook-karla/BMAD-METHOD/wrapper
npm install
npm link

# Agora você pode testar em qualquer lugar:
aicaas install

# Para desfazer o link:
npm unlink -g aicaas
```

### Opção 2: Testar com npx local

```bash
cd /Users/macbook-karla/BMAD-METHOD/wrapper
npm install

# Criar um projeto de teste
mkdir ~/test-aicaas
cd ~/test-aicaas

# Testar instalação local
npx /Users/macbook-karla/BMAD-METHOD/wrapper install
```

### Opção 3: Usar npm pack

```bash
cd /Users/macbook-karla/BMAD-METHOD/wrapper
npm pack

# Isso cria um arquivo: aicaas-1.0.0.tgz
# Você pode instalar em outro projeto com:
npm install /Users/macbook-karla/BMAD-METHOD/wrapper/aicaas-1.0.0.tgz
```

## 📦 Publicar no NPM

### Passo 1: Criar Conta no NPM

1. Acesse https://www.npmjs.com/signup
2. Crie sua conta (se ainda não tiver)
3. Verifique seu email

### Passo 2: Login via Terminal

```bash
npm login
```

Digite suas credenciais do NPM.

### Passo 3: Verificar se o Nome está Disponível

```bash
npm view aicaas
```

Se retornar erro "404", o nome está disponível! ✅

### Passo 4: Publicar

```bash
cd /Users/macbook-karla/BMAD-METHOD/wrapper
npm install
npm publish
```

### Passo 5: Verificar Publicação

```bash
npm view aicaas
```

Deve mostrar informações do seu pacote!

## 🚀 Após Publicação

Usuários poderão instalar com:

```bash
npx aicaas install
```

Ou instalar globalmente:

```bash
npm install -g aicaas
aicaas install
```

## 🔄 Atualizar Versão

Quando precisar atualizar:

```bash
cd /Users/macbook-karla/BMAD-METHOD/wrapper

# Atualizar versão patch (1.0.0 → 1.0.1)
npm version patch

# Atualizar versão minor (1.0.0 → 1.1.0)
npm version minor

# Atualizar versão major (1.0.0 → 2.0.0)
npm version major

# Publicar nova versão
npm publish
```

## 🛠️ Atualizar Dependência bmad-method

Quando houver nova versão do bmad-method:

```bash
cd /Users/macbook-karla/BMAD-METHOD/wrapper
npm update bmad-method
npm version patch
npm publish
```

## ⚠️ Importante

- **Nome único**: Certifique-se de que "aicaas" está disponível no NPM
- **Email verificado**: NPM requer email verificado para publicar
- **Licença**: Confirme que está usando MIT License
- **Descrição**: Mantenha descrição clara em package.json

## 📝 Checklist Pré-Publicação

- [ ] Testar instalação local
- [ ] Verificar se banner aparece corretamente
- [ ] Confirmar que chama bmad-method corretamente
- [ ] Atualizar version em package.json
- [ ] Revisar README.md
- [ ] Commit todas as mudanças
- [ ] Login no NPM
- [ ] Publicar

## 🔗 Links Úteis

- NPM Registry: https://www.npmjs.com/
- Documentação NPM: https://docs.npmjs.com/
- Gerenciar Pacotes: https://www.npmjs.com/settings/YOUR_USERNAME/packages
