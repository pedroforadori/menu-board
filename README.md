# Digital Menu Board (Front-end)

Aplicação de demonstração de **Menu Board Digital** para exibição em TVs (16:9 / 9:16), com layout configurável, tema dinâmico e alternância automática de mídia.

## 🚀 Como rodar

```bash
npm install
npm run dev
```

A aplicação será exibida em `http://localhost:5173` por padrão.

## 🧪 Testes

```bash
npm test
```

## 🧠 Decisões arquiteturais

### ✅ Arquitetura
- **React + TypeScript**: tipagem segura e escalabilidade.
- **Vite**: dev server rápido e build otimizado.
- **Styled Components**: tema dinâmico + CSS-in-JS para facilitar customização.
- **Ant Design**: componentes prontos para layout (cards, grid, list).
- **MSW (Mock Service Worker)**: simula API para facilitar desenvolvimento de frontend isolado.

### ✅ Organização de pastas
- `/src/features` – funcionalidades por domínio (menu, mídia, etc.)
- `/src/core` – infraestrutura compartilhada (tema, layout engine)
- `/src/mocks` – dados e endpoints simulados (MSW)
- `/src/services` – abstração de chamadas HTTP
- `/src/types.ts` – modelagem de dados (tenant, menu, produtos)

## 🗂️ Modelagem de dados

- **TenantConfig**: configurações de tema (cores, tipografia, background), layout e mídia.
- **MenuData**: categorias e produtos.
- **MediaSlide**: imagens/vídeos promocionais com tempo de exibição.

## 📈 Como escalar

- **Cache na borda / CDN**: servir JSON de configuração e assets estáticos.
- **Cache no cliente**: uso de HTTP caching (ETag, Cache-Control) + SWR/React Query.
- **Multi-tenant**: cada tenant entrega seu JSON de configuração + menu.
- **Sincronização de telas**: WebSocket para invalidar cache e forçar refresh de configuração.

## 🎥 Suporte para 1.000 telas

- Manter backend stateless + auto-scaling
- Usar cache de configuração (Redis, cache no edge)
- Enviar updates via pub/sub (WebSocket / SSE) para reduzir polling

## 🧩 Trade-offs

- Usei **Ant Design** para aceleração da UI (trade-off: bundle size maior).
- O layout e tema são definidos por JSON para facilitar configurações dinâmicas.
- A aplicação é pensada para ser **PWA-friendly**, mas não inclui offline completo ainda.
