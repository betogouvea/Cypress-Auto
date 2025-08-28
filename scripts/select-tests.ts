import { execSync } from "child_process";
import path from "path";

function getChangedFiles(): string[] {
  const base = process.env.GITHUB_BASE_REF
    ? `origin/${process.env.GITHUB_BASE_REF}`
    : "origin/main";

  try {
    const output = execSync(`git diff --name-only ${base}`).toString();
    return output.split("\n").filter(Boolean);
  } catch (error) {
    return [];
  }
}

function resolveTests(files: string[]): string[] {
  const tests: string[] = [];

  files.forEach((file) => {
    const normalized = path.normalize(file);
    
    if (normalized.includes('cypress/e2e/') && 
        (normalized.endsWith('.cy.ts') || normalized.endsWith('.cy.js'))) {
      tests.push(normalized);
    }
  });

  return tests;
}

// Execução principal - APENAS UMA SAÍDA!
const changedFiles = getChangedFiles();
const testsToRun = resolveTests(changedFiles);

if (testsToRun.length === 0) {
  // SE não há testes específicos, roda TODOS como fallback
  console.log("cypress/e2e/**/*.cy.ts");
} else {
  // SE há testes específicos, retorna a lista separada por vírgula
  console.log(testsToRun.join(","));
}