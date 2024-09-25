import { create} from 'zustand';
import api from '../services/api';
import { Planos, Usuario } from '../interfaces/interface';

interface TypeUserStore {
  usuario: Usuario | null;
  
  buscar: (id: string) => Promise<void>;
  adicionarPlano:(data:Planos)=>Promise<void>,
  atualizarPlano:(id:number,data:Planos)=>Promise<void>,
  terminarSessao:()=>void,
  buscarTodosPlanos:()=>void,
  apagarPlano:(id:number)=>void,
  buscarTempo:(id:string)=>void
}

const userStore = create<TypeUserStore>((set) => ({
  usuario: null, 
  buscar: async (id: string) => {
    try {
      const user = await api.get(`/funcionarios/${id}`).then((response) => response.data);
      set({ usuario: user });
    } catch (error) {
      console.error("Erro ao buscar usuário:", error);
      set({ usuario: null }); 
    }
  },
  adicionarPlano:async(data:Planos)=>{
    try {
      await api.post("/planos",data)
      .then((response)=>console.log(response.data))
    } catch (error) {
      console.log("erro ao adicionar plano")
    }
  },
  atualizarPlano:async(id:number,data:Planos)=>{
    try {
      await api.put(`/planos/${id}`,data)
      .then((response)=>console.log(response.data))
    } catch (error) {
      console.log("erro ao adicionar plano")
    }
  },
  apagarPlano:async(id:number)=>{
    try {
      await api.delete(`/planos/${id}`)
      .then(()=>alert("Plano apagado"))
    } catch (error) {
      alert("Erro ao apagar o plano")
    }
  },
  terminarSessao:()=>{
    localStorage.removeItem("token")
    window.location.reload()
  },
  buscarTodosPlanos:async ()=>{
   const categorias= await api.get("/categorias")
    .then((response)=>response.data)
    return categorias
  },
  buscarTempo:async(id:string)=>{
    const tempo=await api.get(`/tempo/${id}`)
    .then((response)=>response.data)
    return tempo
  }
}));

export default userStore;
