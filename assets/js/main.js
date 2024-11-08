import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeExperience(
  ".workmonitor",
  `O usuário realiza testes de segurança em sistemas e aplicações para identificar vulnerabilidades e garantir que sejam corrigidas antes de serem exploradas. Utiliza técnicas automáticas e manuais em pentests, focando em falhas como SQL injection e XSS, e reporta detalhes técnicos com provas de conceito (PoCs) para o time de desenvolvimento. Colabora em programas de bug bounty, unindo incentivos financeiros com a melhoria de segurança, mantendo sempre uma comunicação ética e responsabilidade no trabalho..`,
  "Assistênte de Suporte Técnico",
  "WorkMonitor",
  "Out 2024 - O momento"
);

hoverChangeExperience(
  ".bughunter",
  `O usuário realiza testes de segurança em sistemas e aplicações para identificar vulnerabilidades e garantir que sejam corrigidas antes de serem exploradas. Utiliza técnicas automáticas e manuais em pentests, focando em falhas como SQL injection e XSS, e reporta detalhes técnicos com provas de conceito (PoCs) para o time de desenvolvimento. Colabora em programas de bug bounty, unindo incentivos financeiros com a melhoria de segurança, mantendo sempre uma comunicação ética e responsabilidade no trabalho.`,
  "Bug Bount",
  "Bug Crownd",
  "Dez 2023 - O momento"
);

hoverChangeExperience(
  ".concilig",
  `Responsável pela implementação do usuário em nosso perfil 'SOl Agora' gerenciando tickets e chamados.`,
  "Op. teleatendimento",
  "Concilig",
  "Jul 2024 - Out 2024"
);
