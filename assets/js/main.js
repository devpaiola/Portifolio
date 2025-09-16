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
  `Suporte e manutenção de aplicação corporativa, implantações de Firewall, Active Directory e Antivírus.
  Desenvolvimento de <strong>automações em Python, PowerShell, C# e VBA</strong> para otimizar processos internos,
  aumentar a produtividade e garantir a segurança da infraestrutura.`,
  "Assistente de Suporte Técnico",
  "WorkMonitor",
  "Out 2024 - Atual"
);

hoverChangeExperience(
  ".bughunter",
  `Atuação em testes de penetração em aplicações web, identificando falhas de segurança
  e reportando vulnerabilidades em programas públicos e privados.`,
  "Bug Hunter",
  "Programas de Bug Bounty",
  "2023 - Atual"
);

hoverChangeExperience(
  ".concilig",
  `Experiência em suporte e manutenção de sistemas corporativos,
  além de automação de rotinas administrativas.`,
  "Suporte Técnico",
  "Concilig",
  "2022 - 2024"
);
