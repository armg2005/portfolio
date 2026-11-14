# Diretrizes do Projeto — Portfólio Alisson Guimarães

## 1. Perfil Consolidado (Dados Reais — Nunca usar Lorem Ipsum)
- **Nome:** Alisson Ricady Morais Guimarães
- **Idade / Localização:** 20 anos | Salinas / Padre Carvalho - MG
- **Título Principal:** Desenvolvedor Backend & Full Stack | Sistemas de Informação
- **Resumo:** Estudante do 5º período de Bacharelado em Sistemas de Informação no IFNMG (previsão de conclusão: Dez. 2027). Experiência prática na Empresa Júnior SIFSOFT Junior com arquitetura multitenant, monolito modular, versionamento de APIs em C#/.NET e bancos relacionais (PostgreSQL/MySQL), além de desenvolvimento de APIs REST seguras com Java (Spring Boot, Spring Security, JWT) e ecossistema TypeScript/Node.js (NestJS, Prisma ORM).
- **Contatos:**
  - WhatsApp / Telefone: (38) 99866-1610
  - E-mail Acadêmico: armg@aluno.ifnmg.edu.br
  - E-mail Pessoal: alisson.ricady.mg@gmail.com
  - GitHub: https://github.com/armg2005
  - LinkedIn: https://linkedin.com/in/alisson-guimarães

## 2. Formação e Experiência
- **Formação:** Bacharelado em Sistemas de Informação — Instituto Federal do Norte de Minas Gerais (IFNMG - Campus Salinas) | Mar. 2024 – Dez. 2027 (5º período).
- **Experiência 1 — SIFSOFT Junior | Assessor de Projetos (Dez. 2025 – Atual):**
  - Empresa Júnior do curso de Sistemas de Informação (IFNMG).
  - Responsável pelo versionamento de APIs, mantendo histórico de releases e compatibilidade entre versões.
  - Participação na modelagem do banco de dados relacional do **Norte ERP** (PostgreSQL) com arquitetura **multitenant**.
  - Desenvolvimento e manutenção de CRUDs e regras de negócio para sistemas internos em **C# e .NET** com arquitetura de **monolito modular**, além de contato pontual com **Node.js**.
  - Colaboração em equipe ágil (Scrum/Kanban) com versionamento via Git e GitHub.
- **Experiência 2 — SIFSOFT Junior | Trainee — Rotação por Setores (Out. 2025 – Dez. 2025):**
  - Atuação no setor financeiro, extraindo e estruturando dados de documentos PDF em planilhas, automatizando rotinas de atualização e construindo dashboards analíticos no **Power BI**.

## 3. Projetos Principais (Com Destaques Visuais Dinâmicos)
1. **Norte ERP (SIFSOFT Junior)**
   - **Categoria:** Arquitetura Corporativa & Banco de Dados
   - **Descrição:** Sistema empresarial desenvolvido sob arquitetura de monolito modular e isolamento multitenant em PostgreSQL. Atuação direta na modelagem relacional, versionamento de releases da API e implementação de módulos CRUD.
   - **Stack:** C#, .NET, PostgreSQL, Multitenant, Monolito Modular, Git/GitHub.
   - **Visual Dinâmico no Card:** Mini-diagrama animado de nós mostrando isolamento de tenants conectados a uma API versionada (`v1` / `v2`).
2. **API de Cadastro e Autenticação de Usuários**
   - **Categoria:** Segurança & Backend Java
   - **Descrição:** API REST stateless em Java 21 com Spring Boot. Implementa filtro customizado no Spring Security para validação de tokens JWT (Auth0 `java-jwt`) a cada requisição, controle de rotas públicas/protegidas, criptografia de senhas com BCrypt e versionamento de schema via migrations com Flyway.
   - **Stack:** Java 21, Spring Boot, Spring Security, JWT, Spring Data JPA, PostgreSQL, Flyway, Lombok.
   - **Repo:** https://github.com/armg2005/Sprin_security
   - **Visual Dinâmico no Card:** Simulação interativa/animada de fluxo HTTP `POST /auth/login` -> `Bearer JWT` -> `200 OK`.
3. **API de Agendamento de Horários**
   - **Categoria:** Regras de Negócio & Arquitetura em Camadas
   - **Descrição:** API REST em Java 21 com Spring Boot para gestão de horários entre clientes e profissionais. Mapeamento relacional JPA (`ManyToOne`), validação de negócio que impede conflitos de disponibilidade na janela solicitada, consultas por data e separação limpa em camadas (`controller`, `service`, `repository`, `entity`) com DTOs.
   - **Stack:** Java 21, Spring Boot, Spring Data JPA, H2 Database, Lombok.
   - **Repo:** https://github.com/armg2005/agendador-horarios
   - **Visual Dinâmico no Card:** Grade visual animada de slots de horário detectando e bloqueando conflitos automaticamente.
4. **Sistemas e APIs Web Full Stack (Acadêmicos & Pessoais)**
   - **Categoria:** Desenvolvimento Web & Integrações
   - **Descrição:** Conjunto de APIs RESTful e aplicações web desenvolvidas na graduação e em estudos práticos, aplicando tipagem estática, ORMs modernos e automação.
   - **Stack:** TypeScript, JavaScript, Node.js, NestJS, Prisma ORM, PHP, Doctrine ORM, Python (FastAPI/Flask), MySQL, PostgreSQL.
   - **Repo:** https://github.com/armg2005

## 4. Habilidades Técnicas Categorizadas
- **Linguagens:** Java, C#, TypeScript, JavaScript, PHP, Python, SQL
- **Backend & Frameworks:** Spring Boot, Spring Security, Spring Data JPA, Hibernate, .NET, Node.js, NestJS, Prisma ORM, Doctrine ORM, FastAPI, Flask, JWT, Lombok
- **Banco de Dados:** PostgreSQL, MySQL, H2 Database, Modelagem Relacional, Migrations (Flyway)
- **Arquitetura & Engenharia:** API REST, Monolito Modular, Multitenant, POO, SOLID, Padrões de Projeto, Testes Automatizados
- **Ferramentas & Metodologias:** Git, GitHub, Maven, IntelliJ IDEA, VS Code, Eclipse, Power BI, Excel, Jira, Scrum, Kanban, Spec-Driven Development

## 5. Stack Técnica e Estética Visual (Estilo Linear / Vercel / Stripe)
- **Tecnologias:** React, TypeScript, Vite, Tailwind CSS v4 (já configurado em `vite.config.ts` e `src/index.css` — não quebrar), Lucide React (`lucide-react`), Three.js (`three`, `@types/three`).
- **Design System:**
  - Fundo escuro profundo (`#09090b` / `zinc-950`) com grade sutil de pontos/linhas ao fundo, glassmorphism (`bg-zinc-900/60 backdrop-blur-md border-white/10`) e acentos luminosos em Ciano (`#06b6d4`) e Índigo (`#6366f1`).
  - **Imagens Dinâmicas & 3D:**
    1. `HeroScene3D.tsx`: Cena 3D interativa usando `three` puro via `useRef` (sem React Three Fiber para evitar conflito com React 19), renderizando uma rede geométrica 3D (icosaedro wireframe + partículas/nós brilhantes) que gira e responde suavemente ao mouse.
    2. `TiltCard3D.tsx`: Wrapper interativo com inclinação 3D (`perspective(1000px)`, `rotateX`, `rotateY`) e efeito spotlight radial (`radial-gradient`) seguindo o cursor sobre o card.
    3. **Foto de Perfil (`public/images/profile.jpg`):** Exibida dentro do `TiltCard3D` no Hero com anel luminoso animado, badge flutuante `"Disponível para Estágio / Dev Jr"` e fallback automático elegante exibindo as iniciais `"AG"` caso `profile.jpg` ainda não tenha sido colocado na pasta.
    4. **Currículo PDF (`public/documents/curriculo.pdf`):** Botão de download direto no Hero e na seção de Contato.

## 6. Arquitetura de Pastas
```text
portfolio/
├── public/
│   ├── images/
│   │   └── profile.jpg
│   └── documents/
│       └── curriculo.pdf
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroScene3D.tsx
│   │   ├── TiltCard3D.tsx
│   │   ├── ProjectVisual.tsx   <-- Miniaturas visuais animadas/interativas de cada projeto
│   │   ├── ProjectCard.tsx
│   │   └── SkillCard.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   └── Contact.tsx
│   ├── data/
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   └── experiences.ts
│   ├── types/
│   │   └── portfolio.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css


### Passo 2: Comandos para enviar no Chat do Copilot (Modo `Agent`)

Abra o chat do Copilot no VS Code (`Ctrl + Alt + I`), selecione o modo **Agent** no canto inferior esquerdo e envie **um prompt por vez** na ordem abaixo:

#### Prompt 1 — Estrutura, Fontes e Dados Reais
```text
Seguindo .github/copilot-instructions.md, execute apenas a Etapa 1:
1. Limpe os arquivos padrão desnecessários do Vite (como App.css) e configure o index.html com título "Alisson Guimarães | Desenvolvedor Backend & Full Stack", idioma pt-BR e as fontes Inter e JetBrains Mono do Google Fonts.
2. Adicione animações CSS sutis e suporte à grade de fundo escura em src/index.css (mantendo @import "tailwindcss"; intacto).
3. Crie as pastas public/images, public/documents, src/types, src/data, src/components e src/sections.
4. Crie src/types/portfolio.ts e preencha src/data/projects.ts, src/data/skills.ts e src/data/experiences.ts com todos os meus dados reais.
Pare após criar esses arquivos e aguarde minha confirmação.

Agora execute apenas a Etapa 2:
Crie os componentes visuais dinâmicos e a estrutura superior da página:
1. src/components/TiltCard3D.tsx (efeito 3D tilt com perspectiva + spotlight radial que segue o cursor).
2. src/components/HeroScene3D.tsx (cena 3D leve e interativa com Three.js puro via useRef, renderizando uma rede geométrica de nós brilhantes em ciano/índigo que reage ao mouse, com cleanup correto no unmount).
3. src/components/Header.tsx (navbar fixa com glassmorphism, links âncora e menu mobile) e src/components/Footer.tsx.
4. src/sections/Hero.tsx integrando a cena 3D ao fundo/lateral, minha foto de perfil (public/images/profile.jpg) dentro de uma moldura 3D interativa com fallback para as iniciais "AG", badges de stack (Java, C#/.NET, TypeScript), botão para ver projetos e botão de download do currículo (public/documents/curriculo.pdf).
Pare após criar esses arquivos para eu testar no navegador.

Agora execute apenas a Etapa 3:
1. Crie src/components/ProjectVisual.tsx contendo ilustrações dinâmicas e animadas em código para cada projeto (diagrama multitenant animado para o Norte ERP, fluxo de token JWT/Spring Security animado para a API de Autenticação, grade interativa de bloqueio de conflitos para o Agendador de Horários e arquitetura REST para os sistemas Web).
2. Crie src/components/ProjectCard.tsx (usando TiltCard3D + ProjectVisual + badges de stack + link do GitHub) e src/sections/Projects.tsx.
3. Crie src/sections/Experience.tsx (timeline da SIFSOFT Junior), src/components/SkillCard.tsx + src/sections/Skills.tsx (layout Bento Grid moderno), src/sections/About.tsx e src/sections/Contact.tsx (com botão para copiar e-mail, WhatsApp, GitHub e LinkedIn).
4. Conecte todas as seções em src/App.tsx e verifique se não há erros de TypeScript.