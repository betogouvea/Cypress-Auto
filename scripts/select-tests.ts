import { execSync } from 'child_process';

function getChangedFiles() {
  const base = process.env.GITHUB_BASE_REF || 'origin/main';
  const output = execSync(`git diff --name-only ${base}`).toString();
  return output.split('\n').filter(Boolean);
}

function resolveTests(files: string[]) {
  const mapping = [
    { path: 'cypress/e2e/coffee/', spec: 'cypress/e2e/coffee/**/*.cy.ts' },
    { path: 'cypress/e2e/saucedemo/', spec: 'cypress/e2e/saucedemo/**/*.cy.ts' },
  ];

  const tests = new Set<string>();

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
  console.error('Nenhum teste impactado → rodando fallback (todos os testes).');
  console.log('cypress/e2e/**/*.cy.ts'); // fallback
} else {
  console.log(testsToRun.join(','));
}
