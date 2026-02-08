#!/usr/bin/env node

/**
 * AiCaas - Framework de desenvolvimento ágil orientado por IA
 * Wrapper para bmad-method com branding AiCaas
 *
 * Este script permite usar: npx aicaas install
 *
 * @author CrokoMedia
 * @license MIT
 */

const { spawn } = require('child_process');
const path = require('path');
const { Transform } = require('stream');

// Cores para output (console simples, sem dependências extras)
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  cyan: '\x1b[36m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m'
};

function printAiCaasBanner() {
  console.log('');
  console.log(`${colors.bright}${colors.cyan}    ╔═══════════════════════════════════════════════════════╗${colors.reset}`);
  console.log(`${colors.bright}${colors.cyan}    ║                                                       ║${colors.reset}`);
  console.log(`${colors.bright}${colors.cyan}    ║                   █████╗ ██╗ ██████╗ █████╗  █████╗   ║${colors.reset}`);
  console.log(`${colors.bright}${colors.cyan}    ║                  ██╔══██╗██║██╔════╝██╔══██╗██╔══██╗  ║${colors.reset}`);
  console.log(`${colors.bright}${colors.cyan}    ║                  ███████║██║██║     ███████║███████║  ║${colors.reset}`);
  console.log(`${colors.bright}${colors.cyan}    ║                  ██╔══██║██║██║     ██╔══██║██╔══██║  ║${colors.reset}`);
  console.log(`${colors.bright}${colors.cyan}    ║                  ██║  ██║██║╚██████╗██║  ██║██║  ██║  ║${colors.reset}`);
  console.log(`${colors.bright}${colors.cyan}    ║                  ╚═╝  ╚═╝╚═╝ ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝  ║${colors.reset}`);
  console.log(`${colors.bright}${colors.cyan}    ║                                                  🇧🇷   ║${colors.reset}`);
  console.log(`${colors.bright}${colors.cyan}    ║          Framework de Desenvolvimento Ágil com IA     ║${colors.reset}`);
  console.log(`${colors.bright}${colors.cyan}    ║                      v1.0.0                           ║${colors.reset}`);
  console.log(`${colors.bright}${colors.cyan}    ║                                                       ║${colors.reset}`);
  console.log(`${colors.bright}${colors.cyan}    ╚═══════════════════════════════════════════════════════╝${colors.reset}`);
  console.log('');
  console.log(`${colors.bright}${colors.cyan}    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}`);
  console.log('');
  console.log(`    ${colors.bright}🎉 Bem-vindo ao AiCaas!${colors.reset}`);
  console.log('');
  console.log(`    ${colors.green}✓${colors.reset} Documentação 100% em Português Brasileiro`);
  console.log(`    ${colors.green}✓${colors.reset} 50+ workflows cobrindo todo o ciclo de desenvolvimento`);
  console.log(`    ${colors.green}✓${colors.reset} 100% gratuito e open source`);
  console.log(`    ${colors.green}✓${colors.reset} Sem paywalls. Sem conteúdo bloqueado.`);
  console.log('');
  console.log(`    ${colors.bright}📚 Documentação:${colors.reset} ${colors.cyan}https://github.com/CrokoMedia/AiCaas-${colors.reset}`);
  console.log(`    ${colors.bright}💡 GitHub:${colors.reset} ${colors.cyan}https://github.com/CrokoMedia/AiCaas-${colors.reset}`);
  console.log('');
  console.log(`${colors.bright}${colors.cyan}    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}`);
  console.log('');
}

function printBanner() {
  printAiCaasBanner();
}

function printHelp() {
  printBanner();
  console.log(`${colors.bright}Uso:${colors.reset}`);
  console.log(`  npx aicaas install           Instalar AiCaas no projeto`);
  console.log(`  npx aicaas <comando> [args]  Executar comando do framework`);
  console.log('');
  console.log(`${colors.bright}Exemplos:${colors.reset}`);
  console.log(`  npx aicaas install           ${colors.green}# Instalação interativa${colors.reset}`);
  console.log(`  npx aicaas --help            ${colors.green}# Mostrar esta ajuda${colors.reset}`);
  console.log('');
  console.log(`${colors.bright}Documentação:${colors.reset}`);
  console.log(`  ${colors.cyan}https://github.com/CrokoMedia/AiCaas-${colors.reset}`);
  console.log('');
}

function createBannerFilter() {
  let inBmadBanner = false;
  let bannerLines = 0;
  let buffer = '';

  return new Transform({
    transform(chunk, encoding, callback) {
      buffer += chunk.toString();
      const lines = buffer.split('\n');
      buffer = lines.pop() || '';

      for (let line of lines) {
        // Detectar início do banner BMad (procura por "BMAD" ou ASCII art característico)
        if (line.includes('██████╗') || line.includes('Build More') || line.includes('BETA IS HERE')) {
          inBmadBanner = true;
          bannerLines = 0;
          continue;
        }

        // Contar linhas do banner
        if (inBmadBanner) {
          bannerLines++;
          // Banner BMad tem ~25 linhas, pular todas
          if (bannerLines > 30 || line.trim() === '') {
            inBmadBanner = false;
          }
          continue;
        }

        // Passar linhas que não são do banner
        this.push(line + '\n');
      }

      callback();
    },
    flush(callback) {
      if (buffer) {
        this.push(buffer);
      }
      callback();
    }
  });
}

function runBmadMethod(args) {
  // Encontrar o executável do bmad-method
  let bmadPath;

  try {
    // Tentar encontrar no node_modules local
    bmadPath = require.resolve('bmad-method/tools/bmad-npx-wrapper.js');
  } catch (error) {
    // Fallback: usar npx para executar bmad-method
    console.log(`${colors.yellow}Instalando dependências...${colors.reset}\n`);

    const npxArgs = ['bmad-method', ...args];
    const npx = spawn('npx', npxArgs, {
      stdio: 'pipe',
      shell: true
    });

    const filter = createBannerFilter();
    npx.stdout.pipe(filter).pipe(process.stdout);
    npx.stderr.pipe(process.stderr);

    npx.on('exit', (code) => {
      process.exit(code || 0);
    });

    return;
  }

  // Executar bmad-method diretamente com pipes para filtrar output
  const bmad = spawn('node', [bmadPath, ...args], {
    stdio: 'pipe',
    shell: false
  });

  const filter = createBannerFilter();
  bmad.stdout.pipe(filter).pipe(process.stdout);
  bmad.stderr.pipe(process.stderr);

  bmad.on('exit', (code) => {
    process.exit(code || 0);
  });
}

// Processar argumentos da linha de comando
const args = process.argv.slice(2);

// Mostrar banner para comando install
if (args.length === 0 || args[0] === 'install') {
  printBanner();
}

// Mostrar ajuda
if (args.includes('--help') || args.includes('-h')) {
  printHelp();
  process.exit(0);
}

// Se não há argumentos, usar 'install' como padrão
if (args.length === 0) {
  args.push('install');
}

// Executar bmad-method com os argumentos fornecidos
runBmadMethod(args);
