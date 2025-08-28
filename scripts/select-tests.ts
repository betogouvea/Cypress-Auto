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
    console.error("Erro ao executar git diff:", error);
    return [];
  }
}

function resolveTests(files: string[]): string[] {
  const tests: string[] = [];

  files.forEach((file) => {
    const normalized = path.normalize(file);
    
    // Verifica se é um arquivo de teste Cypress
    if (normalized.includes('cypress/e2e/') && 
        (normalized.endsWith('.cy.ts') || normalized.endsWith('.cy.js'))) {
      tests.push(normalized);
    }
  });

  return tests;
}

const changedFiles = getChangedFiles();
console.log("Arquivos modificados:", changedFiles);

const testsToRun = resolveTests(changedFiles);
console.log("Testes a executar:", testsToRun);

if (testsToRun.length === 0) {
  console.log("Nenhum teste impactado pelas alterações.");
  // Não use process.exit(0) aqui - deixe o workflow continuar
  console.log("cypress/e2e/**/*.cy.ts"); // Fallback para todos os testes
} else {
  console.log(testsToRun.join(","));
}