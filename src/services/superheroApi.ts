import { Superhero } from "@/types/superhero";

const API_KEY = "11f01a579d44c5255bc4fe1ec0fc3792"; 

const BASE_URL = `/api/${API_KEY}`;

class SuperheroApiService {
  private async fetchFromApi<T>(path: string): Promise<T | null> {
    try {
      const response = await fetch(`${BASE_URL}${path}`);
      
      if (!response.ok) {
        throw new Error(`API returned status ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.response === "error") {
        console.error("API Error:", data.error);
        return null;
      }
      
      return data as T;
    } catch (error) {
      console.error("Get superhero error:", error);
      return null;
    }
  }

  async getSuperheroById(id: string): Promise<Superhero | null> {
    return this.fetchFromApi<Superhero>(`/${id}`);
  }

  async searchSuperheroes(query: string): Promise<Superhero[] | null> {
    const data = await this.fetchFromApi<{ results: Superhero[] }>(`/search/${query}`);
    return data?.results || null;
  }

  // Busca vários heróis por ID
  async getSuperheroesByIds(ids: string[]): Promise<Superhero[] | null> {
    try {
      const heroPromises = ids.map(id => this.getSuperheroById(id));
      const heroes = await Promise.all(heroPromises);
      
      // Retorna apenas os heróis que foram encontrados (não-nulos)
      return heroes.filter(hero => hero !== null) as Superhero[];
    } catch (error) {
      console.error("Error fetching multiple superheroes:", error);
      return null;
    }
  }

  // Função para buscar os 20 primeiros heróis para a página inicial
  async getInitialSuperheroes(): Promise<Superhero[] | null> {

    const initialIds = Array.from({ length: 20 }, (_, i) => String(i + 1));
    const heroPromises = initialIds.map(id => this.getSuperheroById(id));
    
    const heroes = await Promise.all(heroPromises);
    
    // Filtra os heróis que foram carregados com sucesso
    return heroes.filter(hero => hero !== null) as Superhero[];
  }
}

export const superheroApiService = new SuperheroApiService();
