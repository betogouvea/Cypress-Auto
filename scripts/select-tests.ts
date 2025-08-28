// scripts/select-tests.ts
import { execSync } from 'child_process';
import * as fs from 'fs';

function getChangedFiles() {
  const output = execSync('git diff --name-only origin/main...HEAD').toString();
  return output.split('\n').filter(Boolean);
}

function resolveTests(files) {
  const mapping = [
    { path: 'cypress/e2e/coffee/', spec: 'cypress/e2e/coffee/**/*.cy.ts' },
    { path: 'cypress/e2e/saucedemo/', spec: 'cypress/e2e/saucedemo/**/*.cy.ts' },
  ];

  const tests = new Set();

  files.forEach(file => {
    mapping.forEach(entry => {
      if (file.startsWith(entry.path)) {
        tests.add(entry.spec);
      }
    });
  });

  return [...tests];
}

const changedFiles = getChangedFiles();
const testsToRun = resolveTests(changedFiles);

if (testsToRun.length === 0) {
  console.log('Nenhum teste impactado → rodando smoke tests');
  console.log('cypress/e2e/**/*.cy.ts'); // fallback: roda todos
} else {
  console.log(testsToRun.join(','));
}