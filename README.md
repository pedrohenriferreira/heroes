# Hero Hub Finder 🦸‍♂️

Uma aplicação moderna para descobrir e explorar o universo dos super-heróis! Desenvolvida como parte do processo seletivo da **Yooper** para vaga de estágio em desenvolvimento.

## 🚀 Demonstração

**URL de Exibição**: https://heroes-v2.vercel.app/

## 📋 Sobre o Projeto

O Hero Hub Finder é uma Single Page Application (SPA) que permite aos usuários:

- 🔍 **Buscar** super-heróis por nome
- 📊 **Visualizar** estatísticas detalhadas de poder
- ⭐ **Favoritar** até 5 heróis (dados persistidos localmente)
- 🎯 **Filtrar** e **ordenar** resultados por diferentes critérios
- 📱 **Interface responsiva** com design inspirado em quadrinhos

## ✨ Funcionalidades Implementadas

### Requisitos Obrigatórios ✅
- [x] SPA desenvolvida em React
- [x] Interface sem bibliotecas de UI externas 
- [x] Integração com [Superhero API](https://superheroapi.com/)
- [x] Listagem dos primeiros 20 heróis
- [x] Sistema de busca por nome
- [x] Ordenação por nome e estatísticas
- [x] Sistema de favoritos (limite de 5)
- [x] Filtro para mostrar apenas favoritos
- [x] Página de detalhes do herói
- [x] Dados completos do personagem
- [x] Deploy público funcionando

### Funcionalidades Bônus ⭐
- [x] **Persistência de favoritos** 
- [x] **Layout totalmente responsivo**
- [x] **ES6+** 
- [x] **TypeScript** 
- [x] **Design System** 
- [x] **Estados de loading** 
- [x] **Tratamento de erros** 
- [x] **Acessibilidade** 

## 🛠️ Tecnologias Utilizadas

- **React 18** - Framework principal
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Estilização utilitária
- **shadcn-ui** - Componentes base (totalmente customizados)
- **React Router** - Roteamento da SPA
- **Lucide React** - Ícones
- **React Query** - Gerenciamento de estado


## 📁 Estrutura do Projeto

```
api/
├── superhero.ts            # Proxy serverless
src/
├── components/
│   ├── ui/                 # Componentes base (shadcn-ui customizados)
│   └── layout/            # Componentes de layout
├── pages/
│   ├── Home.tsx           # Página principal com listagem
│   ├── HeroDetail.tsx     # Página de detalhes do herói
│   └── NotFound.tsx       # Página 404
├── services/
│   └── superheroApi.ts    # Integração com a API
├── hooks/
│   └── useFavorites.ts    # Hook para gerenciar favoritos
├── types/
│   └── superhero.ts       # Tipagens TypeScript
└── assets/                # Imagens e recursos estáticos
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação e Execução

```bash
# 1. Clone o repositório
git clone <https://github.com/pedrohenriferreira/heroes>

# 2. Entre no diretório
cd heroes

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev

# 5. Acesse http://localhost:8080
```

### Scripts Disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Gera build de produção
npm run preview  # Visualiza o build de produção
```

## 🔧 Configuração da API

A aplicação utiliza a [Superhero API](https://superheroapi.com/). Para funcionar localmente:

1. Acesse https://superheroapi.com/
2. Registre-se para obter um access token
3. Substitua "process.env.API_KEY" pelo token em `src/api/superhero.ts`:

```typescript
const API_KEY = SUA_KEY_AQUI;
```

## 🧪 Testes

A aplicação inclui:

- **Tipagem TypeScript** - verificação estática de tipos
- **ESLint** - qualidade e padrões de código
- **Tratamento de erros** - fallbacks para falhas de API
- **Estados de loading** - feedback visual durante carregamento

## 📱 Responsividade

funciona perfeitamente em:

- 📱 **Mobile** (320px+)
- 📱 **Tablet** (768px+)
- 💻 **Desktop** (1024px+)
- 🖥️ **Large Desktop** (1440px+)

## 🔍 Funcionalidades Detalhadas

### Sistema de Busca
- Busca por nome do herói
- Resultados em tempo real
- Histórico de buscas mantido

### Sistema de Favoritos
- Máximo de 5 heróis favoritos
- Persistência no localStorage
- Indicadores visuais
- Filtro para mostrar apenas favoritos

### Ordenação e Filtros
- Ordenação por nome (A-Z, Z-A)
- Ordenação por estatísticas (inteligência, força, velocidade)
- Filtros combinados
- Estado persistido durante a sessão

### Página de Detalhes
- Informações completas do herói
- Estatísticas visuais com progress bars
- Biografia, aparência, trabalho e conexões
- Sistema de favoritos integrado

### Resposta técnica
*"Como você lidaria com o limite de 5 favoritos se estivesse usando Redux ou Zustand?"*

Se eu estivesse usando Redux, controlaria os favoritos por meio de um slice no estado global. Criaria um reducer que verifica o número atual de favoritos antes de permitir a adição de um novo. Se o limite de 5 já tiver sido atingido, impediria a adição e poderia exibir uma notificação para o usuário.

```ts
const initialState = {
  favorites: [],
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      if (state.favorites.length >= 5) {
        alert("Limite de favoritos atingido");
        return state;
      }
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case 'REMOVE_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.filter(
          (hero) => hero.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
export default favoritesReducer;
```
Dessa forma, o controle do limite fica centralizado na camada de estado, mantendo a UI limpa e o comportamento previsível.

---

