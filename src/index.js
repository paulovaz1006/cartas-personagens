
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./components/mago.js";
import { Arqueiro } from "./components/arqueiro.js"
import { ArqueiroMago } from "./components/arqueiro-mago.js";

const arqueiroBruno = new Arqueiro('Bruno', 7, 8)
const magoAntonio = new Mago('Antonio', 4,'fogo', 4, 3)
const magaJulia = new Mago('Julia', 4,'gelo', 4, 3)
const arqueiroMago = new ArqueiroMago('Chico', 7, 10, 'ar', 4, 10)


const personagens = [magoAntonio, magaJulia, arqueiroBruno, arqueiroMago]
new PersonagemView(personagens).render()