import { execSync } from "child_process";

function getChangedFiles(): string[] {
  // Usa GITHUB_BASE_REF para PRs, ou "origin/main" para pushes
  const base = process.env.GITHUB_BASE_REF ? `origin/${process.env.GITHUB_BASE_REF}` : "origin/main";
  const output = execSync(`git diff --name-only ${base}`).toString();
  return output.split("\n").filter(Boolean);
}

function resolveTests(files: string[]): string[] {
  const mapping = [
    { path: "cypress/e2e/coffee/", spec: "cypress/e2e/coffee/**/*.cy.ts" },
    { path: "cypress/e2e/saucedemo/", spec: "cypress/e2e/saucedemo/**/*.cy.ts" }
  ];

  const tests = new Set<string>();

  files.forEach((file) => {
    mapping.forEach((entry) => {
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
  console.log("cypress/e2e/**/*.cy.ts"); // Fallback: todos os testes
} else {
  console.log(testsToRun.join(","));
}