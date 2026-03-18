# Digital Menu Board (Front-end)

Aplicação robusta e altamente customizável de **Menu Board Digital**, projetada para exibição em Smart TVs e Mini PCs. O sistema suporta orientações horizontal e vertical, temas dinâmicos via JSON e alternância inteligente de mídias promocionais.

## 🚀 Como Rodar

### Pré-requisitos
* Node.js (v18+)
* npm ou yarn

### Instalação e Execução
```bash
# Clone o repositório
git clone https://github.com/seu-usuario/menu-board.git

# Acesse a pasta
cd menu-board

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```
A aplicação estará disponível em `http://localhost:5173`.

## 🧪 Testes
```bash
# Executar testes unitários e de componentes
npm test
```

## 🧠 Decisões Arquiteturais

### ✅ Stack Técnica
-   **React + TypeScript**: Escolhido pela robustez na tipagem e facilidade de manutenção em larga escala.
-   **Vite**: Utilizado como build tool para garantir um Hot Module Replacement (HMR) extremamente rápido, essencial em ajustes visuais de layout.
-   **Styled Components**: Implementação de CSS-in-JS que facilita a injeção de temas dinâmicos (cores, fontes) recebidos via API.
-   [cite_start]**Ant Design**: Utilizado estrategicamente para componentes de UI complexos (Grids e Lists), acelerando o desenvolvimento da engine de layout.
-   [cite_start]**MSW (Mock Service Worker)**: Empregado para interceptar requisições de rede e simular uma API real, permitindo o desenvolvimento do frontend de forma isolada mas realista.

### ✅ Organização por Features
A estrutura segue o padrão de **Feature-Based Architecture**, isolando domínios de negócio:
-   `/src/features/menu`: Lógica de exibição de categorias e produtos.
-   `/src/features/media`: Gerenciamento de slides de fotos e vídeos promocionais.
-   `/src/core`: Contém a infraestrutura compartilhada, como o `LayoutEngine` e o `ThemeProvider`.

## 🗂️ Modelagem de Dados

O sistema é guiado por uma estrutura **JSON-Driven**, permitindo que o layout mude sem novo deploy:

-   **`TenantConfig`**: Define a identidade visual.
    -   `colors`: primary, secondary, background.
    -   `typography`: family, sizes.
    -   `layout`: 'grid' | 'list' | 'highlight'.
    -   `orientation`: 'horizontal' | 'vertical'.
-   **`MenuData`**: Estrutura hierárquica de `Categories` -> `Products`.
-   **`MediaSlide`**: Lista de assets com metadados de tempo de exibição (`duration`).

## 📈 Arquitetura de Backend (Proposta)

Como o projeto foca no Frontend, o backend seria estruturado da seguinte forma:
1.  **Node.js + NestJS**: Para uma API escalável e modular.
2.  **Multi-tenancy**: Identificação do restaurante via `X-Tenant-ID` no header ou subdomínio.
3.  **Persistência**: PostgreSQL para dados relacionais (menus/preços) e MongoDB para os JSONs flexíveis de configuração de layout.
4.  **Sincronização**: Uso de **WebSockets (Socket.io)** para notificar as TVs sobre atualizações de preço ou troca de layout em tempo real.

## 🎥 Escalabilidade e Suporte para 1.000+ Telas

Para suportar um volume massivo de dispositivos sem degradar a performance:
-   **Estratégia de Cache**: Implementação de **Redis** no backend para cachear o JSON de configuração de cada Tenant.
-   **Offline Fallback**: Uso de **Service Workers** para cachear imagens, vídeos e o último JSON de menu disponível, garantindo que a TV não fique preta caso a internet oscile.
-   **CDN (Content Delivery Network)**: Distribuição de mídias pesadas (vídeos 4K) via borda para reduzir latência.
-   **Atualização Otimizada**: Em vez de polling, as TVs aguardam um sinal via WebSocket para buscar novos dados, reduzindo drasticamente o overhead no servidor.

## 🧩 Trade-offs

-   **Ant Design**: A escolha trouxe velocidade, porém aumentou o tamanho inicial do bundle. [cite_start]Para produção, seria aplicado *tree-shaking* rigoroso.
-   **Styled Components vs Tailwind**: Optou-se por Styled Components pela facilidade de manipular variáveis de tema complexas vindas de um banco de dados, embora o Tailwind tenha performance de runtime superior.
