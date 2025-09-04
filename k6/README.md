# 🚀 Testes de Performance com K6

## 📋 Cenários Disponíveis

### SauceDemo Performance Test
- **Usuários simultâneos**: 10-20
- **Duração**: 2 minutos
- **Threshold**: 95% das requisições < 2s

### Coffee Cart Performance Test  
- **Usuários simultâneos**: 15-30
- **Duração**: 2 minutos
- **Threshold**: 95% das requisições < 1.5s

## 🔧 Como Executar

```bash
# Instalar k6
winget install k6

# Executar teste individual
cd k6
k6 run saucedemo-performance.ts
k6 run coffee-performance.ts

# Executar todos os testes
npm run test:all

# Teste de smoke (rápido)
npm run test:smoke
```

## 📊 Métricas Monitoradas

- **Response Time**: P95 < 2s (SauceDemo), P95 < 1.5s (Coffee)
- **Error Rate**: < 10% (SauceDemo), < 5% (Coffee)
- **Throughput**: Requisições por segundo
- **Concurrent Users**: Usuários simultâneos

## 🎯 Thresholds de Performance

- ✅ **Smoke Test**: 1 usuário por 30s
- ✅ **Load Test**: Rampa de 10-20 usuários
- ⚡ **Stress Test**: Até 100 usuários simultâneos