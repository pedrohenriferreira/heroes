## Devlog 

### Dia 1 – Setup do projeto
- Criação do projeto com Vite + React + TypeScript.
- Organização da estrutura de pastas: `components`, `pages`, `services`, `hooks`, `types`, etc.
- Implementação inicial dos componentes de UI: `Card`, `SearchBar`, `Header`.
- Criação do serviço `superheroApi.ts` para consumir a SuperHero API.

### Dia 2 – Integração com a API e Funcionalidades
- Criação da função serverless `api/superhero.ts` com Node.js para contornar CORS.
- Configuração e adaptação do consumo da API para usar o proxy.
- Implementação do hook `useFavorites` com persistência no localStorage.
- Filtro de busca por nome com debounce.
- Página de detalhes de herói com informações completas.
  
### Dia 3 – Melhorias e Deploy
- Refatorações e ajustes na responsividade.
- Reorganização da estrutura para o deploy correto no Vercel.
- Resolução de bugs
- Sucesso no Deploy
