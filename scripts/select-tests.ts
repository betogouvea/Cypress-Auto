import { execSync } from "child_process";
import path from "path";

function getChangedFiles(): string[] {
  const base = process.env.GITHUB_BASE_REF
    ? `origin/${process.env.GITHUB_BASE_REF}` // PR
    : "origin/main"; // push direto

  const output = execSync(`git diff --name-only ${base}`).toString();
  return output.split("\n").filter(Boolean);
}

function resolveTests(files: string[]): string[] {
  const tests: string[] = [];

  files.forEach((file) => {
    // Normaliza path para evitar problemas com barra
    const normalized = path.normalize(file);

    // Apenas arquivos .cy.ts dentro dos diretórios de teste
    if (
      (normalized.startsWith("cypress/e2e/coffee/") ||
       normalized.startsWith("cypress/e2e/saucedemo/")) &&
      normalized.endsWith(".cy.ts")
    ) {
      tests.push(normalized);
    }
  });

  return tests;
}

const changedFiles = getChangedFiles();
const testsToRun = resolveTests(changedFiles);

if (testsToRun.length === 0) {
  console.log("Nenhum teste modificado, workflow encerrado.");
  process.exit(0); // Evita rodar todos os testes
} else {
  // Cypress aceita múltiplos arquivos separados por vírgula
  console.log(testsToRun.join(","));
}
