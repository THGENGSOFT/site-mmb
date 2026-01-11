# Portal Corporativo | MMB Representações

![Status](https://img.shields.io/badge/Status-Production-green) ![Version](https://img.shields.io/badge/Version-2.1.0-blue) ![Stack](https://img.shields.io/badge/Stack-HTML%20%7C%20Tailwind%20%7C%20Firebase-orange)

> **Descrição:** Aplicação web progressiva destinada à gestão comercial e distribuição de materiais estratégicos para parceiros da MMB Representações Comerciais Ltda.

---

## 📋 Índice
1. [Visão Geral e Arquitetura](#1-visão-geral-e-arquitetura)
2. [Estrutura de Diretórios](#2-estrutura-de-diretórios)
3. [Tecnologias Utilizadas](#3-tecnologias-utilizadas)
4. [Instalação e Execução Local](#4-instalação-e-execução-local)
5. [Segurança e Autenticação](#5-segurança-e-autenticação)
6. [Pipeline de Deploy (CI/CD)](#6-pipeline-de-deploy-cicd)
7. [Procedimentos Operacionais (SOP)](#7-procedimentos-operacionais-sop)
8. [Contatos e Credenciais](#8-contatos-e-credenciais)

---

## 1. Visão Geral e Arquitetura

O sistema opera em uma arquitetura **Serverless/Static Web App**, dividida em dois ambientes lógicos:

1.  **Landing Page Pública (`index.html`):** Focada em conversão, SEO e apresentação institucional.
2.  **Área Restrita (SPA-like):** Ambiente protegido para download de tabelas de preço, catálogos e acesso a ferramentas internas.

A lógica de negócios é descentralizada, utilizando o **Google Firebase** como Backend-as-a-Service (BaaS) para autenticação e o **Netlify** para distribuição de conteúdo (CDN).

---

## 2. Estrutura de Diretórios

O projeto segue o padrão de separação de responsabilidades (SoC), onde a raiz contém as rotas e a pasta `assets` contém os recursos.

```text
/ (Raiz do Projeto)
│
├── index.html              # Landing Page (Pública)
├── acesso-restrito.html    # Gateway de Login e Dashboard
│
├── [EMPRESAS]              # Páginas das Representadas (Rotas Protegidas)
│   ├── terraplast.html
│   ├── pollymer.html
│   ├── jm.html
│   ├── lgsteel.html
│   ├── polifix.html
│   ├── endurance.html
│   ├── prbombas.html
│   └── documentos.html     # Gestão Estratégica
│
└── assets/                 # Recursos Estáticos
    ├── css/
    │   └── style.css       # Estilização global e overrides do Tailwind
    ├── img/
    │   └── logo.png        # Identidade Visual
    ├── js/
    │   ├── firebase-config.js  # Singleton de Configuração do Auth
    │   └── script.js           # Scripts de UI da Home
    │
    └── representadas/      # Data Store (Arquivos Físicos)
        ├── terraplast/     # PDFs e Excel da Terraplast
        ├── pollymer/       # PDFs e Excel da Pollymer
        └── ...             # Demais pastas por empresa

3. Tecnologias Utilizadas

    Frontend: HTML5 Semântico, JavaScript (ES6 Modules).

    CSS Framework: Tailwind CSS (via CDN) + FontAwesome 6.

    Autenticação: Google Firebase Authentication v10.

    Hospedagem: Netlify (Automated Deploy).

    Controle de Versão: Git & GitHub.

4. Instalação e Execução Local

Devido ao uso de Módulos ES6 (import/export), o projeto não roda abrindo o arquivo diretamente (file://). É necessário um servidor HTTP local.
Pré-requisitos

    Git instalado.

    Python 3 (nativo no Linux/Mac) ou extensão "Live Server" no VS Code.

Passo a Passo (Linux/Mac)

    Clonar o repositório:
    Bash

git clone [https://github.com/THGENGSOFT/site-mmb.git](https://github.com/THGENGSOFT/site-mmb.git)
cd site-mmb

Iniciar Servidor Local:
Bash

    python3 -m http.server

    Acessar: Abra o navegador em http://localhost:8000.

5. Segurança e Autenticação

A segurança é gerenciada no frontend através do arquivo assets/js/firebase-config.js.

    Proteção de Rota: Todas as páginas internas possuem um "Guard" que verifica:
    JavaScript

    onAuthStateChanged(auth, (user) => {
        if (!user) window.location.href = 'acesso-restrito.html';
    });

    Centralização: As chaves de API estão centralizadas em um único arquivo, facilitando a rotação de credenciais se necessário.

    Bloqueio de Cadastro: A interface de criação de conta (createUser) foi removida do código de produção para evitar registros não autorizados.

6. Pipeline de Deploy (CI/CD)

O projeto utiliza Integração Contínua. Qualquer alteração enviada para o branch main no GitHub dispara automaticamente uma atualização no Netlify.

Fluxo de Trabalho:

    Edite os arquivos localmente.

    Comite as alterações:
    Bash

git add .
git commit -m "Descrição da atualização (ex: Nova tabela JM)"

Envie para a nuvem:
Bash

    git push origin main

    Status: O site é atualizado em aproximadamente 15 segundos.

7. Procedimentos Operacionais (SOP)
7.1. Atualização de Tabelas de Preço

    Salve o arquivo Excel/PDF na pasta: assets/representadas/[empresa]/.

        Dica: Evite espaços e acentos no nome do arquivo (ex: use tabela_jan26.xlsx).

    Abra o arquivo HTML da empresa (ex: jm.html).

    Localize o link de download e atualize o href:
    HTML

    <a href="assets/representadas/jm/tabela_jan26.xlsx">...</a>

    Faça o git push.

7.2. Adicionar Nova Representada

    Duplique o arquivo terraplast.html e renomeie para a nova empresa.

    Atualize Título, CNPJ, Ícones e Links.

    Adicione o novo card no grid do acesso-restrito.html.

7.3. Gerenciar Usuários

    O gerenciamento de usuários (adicionar/remover acesso) é feito exclusivamente pelo Console do Firebase. (thgcst75@gmail.com)

    Acesse: Authentication > Users > Add User.

8. Contatos e Credenciais

    Repositório: GitHub - site-mmb (thg.engsoft@gmail.com)

    Produção: Netlify App (thg.engsoft@gmail.com)

    Responsável Técnico: Thiago Fagundes

    Suporte: comercial@mmbrepresentacoes.com.br

© 2026 MMB Representações Comerciais Ltda. Todos os direitos reservados.
