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

// Cores para output (console simples, sem dependências extras)
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  cyan: '\x1b[36m',
  yellow: '\x1b[33m'
};

function printBanner() {
  console.log('');
  console.log(`${colors.bright}${colors.cyan}╔═══════════════════════════════════════════════════════╗${colors.reset}`);
  console.log(`${colors.bright}${colors.cyan}║                                                       ║${colors.reset}`);
  console.log(`${colors.bright}${colors.cyan}║                      AiCaas 🇧🇷                       ║${colors.reset}`);
  console.log(`${colors.bright}${colors.cyan}║                                                       ║${colors.reset}`);
  console.log(`${colors.bright}${colors.cyan}║     Framework de Desenvolvimento Ágil com IA          ║${colors.reset}`);
  console.log(`${colors.bright}${colors.cyan}║        Documentação 100% em Português Brasileiro      ║${colors.reset}`);
  console.log(`${colors.bright}${colors.cyan}║                                                       ║${colors.reset}`);
  console.log(`${colors.bright}${colors.cyan}╚═══════════════════════════════════════════════════════╝${colors.reset}`);
  console.log('');
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
      stdio: 'inherit',
      shell: true
    });

    npx.on('exit', (code) => {
      process.exit(code || 0);
    });

    return;
  }

  // Executar bmad-method diretamente
  const bmad = spawn('node', [bmadPath, ...args], {
    stdio: 'inherit',
    shell: false
  });

  bmad.on('exit', (code) => {
    process.exit(code || 0);
  });
}

// Processar argumentos da linha de comando
const args = process.argv.slice(2);

// Mostrar banner para comando install
if (args.length === 0 || args[0] === 'install') {
  printBanner();
  console.log(`${colors.green}Iniciando instalação do AiCaas...${colors.reset}\n`);
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
