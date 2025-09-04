# 📊 Relatório de Testes de Performance

## 🎯 Resumo Executivo

Este documento apresenta os resultados dos testes de performance realizados com K6 nos cenários SauceDemo e Coffee Cart.

## 🔧 Configuração dos Testes

### Smoke Tests (Performance Baseline)
- **SauceDemo**: 1-20 usuários, 2 minutos
- **Coffee Cart**: 1-30 usuários, 2 minutos

### Load Tests (Carga Normal)
- **SauceDemo**: 50-150 usuários, 14 minutos
- **Coffee Cart**: 75-200 usuários, 14 minutos

### Stress Test (Carga Extrema)
- **Ambos**: 100-500 usuários, 9 minutos

## 📈 Resultados Obtidos

### ✅ Smoke Tests
| Métrica | SauceDemo | Coffee Cart |
|---------|-----------|-------------|
| Iterações | 1.281 | 3.509 |
| Throughput | 21.3 req/s | 116.7 req/s |
| P95 Response Time | 32.4ms | 21.38ms |
| Status | ✅ Aprovado | ✅ Aprovado |

### ✅ Load Tests
| Métrica | SauceDemo (50 users) |
|---------|---------------------|
| Iterações | 5.759 |
| Throughput | 95.2 req/s |
| P95 Response Time | 29ms |
| Status | ✅ Aprovado |

### 🔥 Stress Test (500 usuários)
| Métrica | Resultado |
|---------|-----------|
| Iterações | 108.861 |
| Throughput | 190.9 req/s |
| P95 Response Time | 37.95ms |
| Survival Rate | 19% |
| Status | ⚠️ Limite identificado |

## 🎯 Conclusões

### Capacidade Recomendada
- **Operação Normal**: 50-100 usuários simultâneos
- **Pico de Carga**: 150-200 usuários simultâneos
- **Limite Máximo**: 500 usuários (com degradação)

### Thresholds Atendidos
- ✅ Response Time < 2s (SauceDemo)
- ✅ Response Time < 1.5s (Coffee Cart)
- ✅ Error Rate < 15% (carga normal)
- ✅ Throughput > 50 req/s

## 🚀 Comandos para Execução

```bash
# Testes de smoke
cd k6
.\k6-v0.47.0-windows-amd64\k6.exe run saucedemo-performance.ts
.\k6-v0.47.0-windows-amd64\k6.exe run coffee-performance.ts

# Testes de carga
.\k6-v0.47.0-windows-amd64\k6.exe run load-test-saucedemo.ts
.\k6-v0.47.0-windows-amd64\k6.exe run load-test-coffee.ts

# Teste de stress
.\k6-v0.47.0-windows-amd64\k6.exe run stress-test.ts
```

---
**Data**: $(Get-Date -Format "dd/MM/yyyy")  
**Ferramenta**: K6 v0.47.0  
**Ambiente**: Windows 11