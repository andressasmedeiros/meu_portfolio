export default [
    {
        titulo: "Playwright E2E Tests",
        resumo: "Playwright, Node.js, TypeScript",
        descricao: [
            {
                titulo: "Descrição do Projeto:",
                texto: `Projeto de automação de testes end-to-end utilizando Playwright para validar fluxos essenciais de uma aplicação web, com foco em login e acesso à página de produtos.`
            },
            {
                titulo: "Problema que Resolve:",
                texto: `Garante a qualidade das funcionalidades críticas da aplicação, como autenticação e navegação, evitando falhas manuais e aumentando a confiabilidade do sistema.`
            },
            {
                titulo: "Tecnologias Utilizadas:",
                texto: `• Playwright para automação de testes
                        • Node.js como ambiente de execução
            '           • TypeScript para tipagem e organização do código`
            },
            {
                titulo: "Funcionalidades Principais:",
                texto: `• Teste de login com credenciais válidas
                        • Teste de login com credenciais inválidas
                        • Validação de mensagens de erro
                        • Acesso automatizado à página de produtos
                        • Estrutura para validação dos nomes dos produtos`
            },
            {
                titulo: "Estrutura do Projeto:",
                texto: `• tests/login.spec.ts
                        • tests/products.spec.ts
                        • playwright.config.ts`
            },
            {
                titulo: "Como Executar:",
                texto: `• Instalar dependências com npm install
                        • Instalar browsers com npx playwright install
                        • Executar testes com npx playwright test`
            },
            {
                titulo: "Próximos Passos:",
                texto: `• Validar nomes dos produtos
                        • Testar ordenação de produtos
                        • Implementar Page Object Model (POM)
                        • Adicionar testes de carrinho`
            },
            {
                titulo: "Aprendizado:",
                texto: `• Automação de testes end-to-end com Playwright
                        • Organização de testes com TypeScript
                        • Validação de fluxos de autenticação
                        • Estruturação de testes para escalabilidade`
            }
        ],
        imagem: require("@/assets/img/thumb-playwright.png"),
        video: require("@/assets/videos/video_playwright.mp4"),
        repositorio: "https://github.com/andressasmedeiros/playwright_test_login"
    },
    {
        titulo: "Agent01 - Trello Task Manager",
        resumo: "Python, Trello API, Gemini LLM",
        descricao: [
            {
                titulo: "Descrição do Projeto:",
                texto: `Agente inteligente integrado ao Trello que automatiza o gerenciamento de tarefas utilizando um modelo de linguagem (LLM). O sistema interage com o usuário para criar, listar e atualizar tarefas em um board específico.`
            },
            {
                titulo: "Problema que Resolve:",
                texto: `Reduz a necessidade de gerenciamento manual de tarefas, automatizando a organização do dia a dia e aumentando a produtividade através de comandos em linguagem natural.`
            },
            {
                titulo: "Tecnologias Utilizadas:",
                texto: `• Python 3
                    • Trello API (py-trello)
                    • Google ADK (Agent Development Kit)
                    • Gemini (LLM)
                    • dotenv para variáveis de ambiente`
            },
            {
                titulo: "Funcionalidades Principais:",
                texto: `• Criação automática de tarefas no Trello
                    • Listagem de tarefas (todas ou por status)
                    • Alteração de status (A Fazer, Em Andamento, Concluído)
                    • Organização baseada na data e hora atual
                    • Interação via linguagem natural com o usuário`
            },
            {
                titulo: "Estrutura do Projeto:",
                texto: `• agent01/agent.py
                    • agent01/requirements.txt
                    • agent01/.env-exemplo
                    • agent01/.gitignore
                    • Estrutura de pastas com separação de configuração e lógica`
            },
            {
                titulo: "Como Executar:",
                texto: `• Clonar o repositório
                    • Criar ambiente virtual (python -m venv venv)
                    • Ativar ambiente
                    • Instalar dependências (pip install -r agent01/requirements.txt)
                    • Configurar .env com credenciais do Trello
                    • Executar o agente`
            },
            {
                titulo: "Próximos Passos:",
                texto: `• Implementar remoção de tarefas
                    • Melhorar parsing de comandos do usuário
                    • Reduzir chamadas ao LLM (otimização de quota)
                    • Implementar cache de respostas
                    • Criar interface web ou CLI`
            },
            {
                titulo: "Aprendizado:",
                texto: `• Integração de APIs externas (Trello)
                    • Uso de LLM para automação de tarefas
                    • Manipulação de variáveis de ambiente
                    • Estruturação de agentes inteligentes
                    • Tratamento de erros e limites de API (rate limit)`
            }
        ],
        imagem: require("@/assets/img/agentai.png"),
        video: require("@/assets/videos/agentTrello.mp4"),
        repositorio: "https://github.com/andressasmedeiros/AgentAI-DIO"
    },
    {
        titulo: "Farma Transportes",
        resumo: "React Native, Expo, TypeScript",
        descricao: [
            {
                titulo: "Descrição do Projeto:",
                texto: `Farma Transportes é um aplicativo desenvolvido para otimizar o processo de troca de mercadorias entre filiais, permitindo que essas operações sejam feitas sem a necessidade de contato direto com os motoristas, economizando tempo e trazendo mais agilidade ao processo.`
            },
            {
                titulo: "Problema que Resolve:",
                texto: `Facilita a logística interna entre filiais ao eliminar o contato direto com motoristas, automatizando a movimentação de produtos e aumentando a eficiência operacional.`
            },
            {
                titulo: "Tecnologias Utilizadas:",
                texto: `• React Native com Expo
                • TypeScript para código tipado e seguro`
            },
            {
                titulo: "Funcionalidades Principais:",
                texto: `• Cadastro e movimentação de mercadorias entre filiais
                • Gerenciamento de estoque e usuários
                • Acesso ao mapa e câmera dentro do aplicativo
                • Acompanhamento das entregas pelos motoristas
                • Filtragem de produtos por filial
                • Geração de relatórios em PDF
                Compartilhamento dos relatórios por WhatsApp, e-mail, etc.`
            },
            {
                titulo: "Melhorias Futuras:",
                texto: `• Implementar troca de motoristas durante entregas.
                • Mais flexibilidade no fluxo logístico.`
            },
            {
                titulo: "Melhorias Já Aplicadas:",
                texto: `• Filtro de produtos por filial para cadastro de movimentações.
                • Geração de relatórios PDF com botão direto na interface.`
            },
            {
                titulo: "Aprendizado:",
                texto: `• Utilização prática do React Native com Expo
                • Tipagem e organização do código com TypeScript
                • Integração de funcionalidades nativas como câmera e geolocalização
                • Geração e compartilhamento de arquivos PDF
                • Gerenciamento de estado e rotas entre telas no app`
            }
        ],
        imagem: require("@/assets/img/thumb-video.png"),
        video: require("@/assets/videos/video.mp4"),
        repositorio: "https://github.com/andressasmedeiros/app_farmacia_reactnative"
    },
    {
        titulo: "Site Gerenciamento Farmácia - Backend",
        resumo: "Node.js, Express, TypeScript, TypeORM, JWT, Swagger",
        descricao: [
            {
                titulo: "Descrição do Projeto:",
                texto: `API backend para gerenciamento completo de uma farmácia, incluindo cadastro e controle de usuários, produtos, movimentações e permissões. Desenvolvida com Node.js e TypeScript, utiliza Express para rotas, TypeORM para conexão com banco de dados relacional e JWT para autenticação segura.`
            },
            {
                titulo: "Objetivo:",
                texto: `Construir uma API robusta e segura que permita operações CRUD, autenticação via JWT, controle de acesso baseado em permissões e rastreamento de movimentações de produtos entre filiais.`
            },
            {
                titulo: "Tecnologias Utilizadas:",
                texto: `• Node.js para runtime do servidor
                • TypeScript para tipagem estática e maior segurança no código
                • Express para criação das rotas e controle de requisições
                • TypeORM para ORM e manipulação do banco PostgreSQL
                • JWT para autenticação e autorização de usuários
                • Swagger para documentação automática da API`
            },
            {
                titulo: "Funcionalidades Principais:",
                texto: `• Cadastro e gerenciamento de usuários com perfis distintos (administrador, motorista, filial)
                • Controle de produtos e estoque por filial
                • Movimentação de produtos entre filiais com status (pendente, em andamento, entregue, finalizado)
                • Autenticação segura via JWT com middleware de proteção das rotas
                • Documentação interativa da API via Swagger UI`
            },
            {
                titulo: "Melhorias Futuras:",
                texto: `• Implementar testes automatizados unitários e de integração
                • Adicionar suporte para upload de imagens de produtos
                • Criar notificações em tempo real para movimentações
                • Otimizar permissões para papéis dinâmicos
                • Containerizar a aplicação com Docker para facilitar deploy`
            },
            {
                titulo: "Aprendizado:",
                texto: `• Design e estruturação de APIs RESTful com Node.js e Express
                • Autenticação e autorização com JWT e middlewares personalizados
                • Uso de TypeORM para mapeamento objeto-relacional e manipulação eficiente do banco
                • Documentação da API com Swagger e integração no fluxo de desenvolvimento
                • Boas práticas em TypeScript para escalabilidade e manutenção`
            }
        ],
        imagem: require("@/assets/img/thumb_backend.png"),
        video: require("@/assets/videos/backend.mp4"),
        repositorio: "https://github.com/andressasmedeiros/gerenciamento_farmacia/tree/main/api"
    },
    {
        titulo: "Projeto Monitoramento de Horta",
        resumo: "Java, SpringBoot, HTML, CSS, Javascript, C++",
        descricao: [
            {
                titulo: "Descrição do Projeto:",
                texto: `Este projeto foi desenvolvido como parte de uma atividade extensionista da UNINTER, no curso de Análise e Desenvolvimento de Sistemas.
Apesar de ter surgido como um trabalho acadêmico, foi um prazer enorme desenvolver essa solução, unindo IoT, backend e frontend para criar um sistema funcional e prático para monitoramento de hortas.`
            },
            {
                titulo: "Objetivo:",
                texto: `O objetivo principal é automatizar o monitoramento de uma horta doméstica, fornecendo informações em tempo real sobre:

                🌡️ Temperatura do ar
                💧 Umidade do ar
                🌱 Umidade do solo
                ☀️ Intensidade de luz ambiente
                🚿 Indicação se a planta precisa ou não ser regada
                🌧️ Indica se está chovendo
                💻 Interação com pesquisa no google dentro da plataforma, para pesquisar dúvidas e curiosidades sem sair da tela
                🛜 Conexão entre o protótipo via Wifi
                🖥️ Tela OLED no arduíno para interação local, mostrando todos os dados
                A ideia é tornar o cuidado com hortas mais fácil, eficiente e acessível, ajudando na produção sustentável de alimentos em casa.`
            },
            {
                titulo: "Tecnologias Utilizadas:",
                texto: `• HTML, CSS e Javascript no front
                • Java com SpringBoot no backend
                • Arduino/ESP32 com C++ no hardware`
            },
            {
                titulo: "Funcionalidades Principais:",
                texto: `• Coleta e envio de dados do Arduino para a API
                • Exibição dos dados em tempo real no site
                • Identificação automática da necessidade de rega
                • Status visual de conexão com o dispositivo
                • Exibição de curiosidades sobre hortas`
            },
            {
                titulo: "Aprendizado:",
                texto: `• Maior dificuldade: integrar corretamente todos os componentes do Arduino (sensores, tela OLED, comunicação via Wi-Fi) para funcionarem em conjunto, sem conflitos de código ou falhas na leitura dos dados.

                Aprendizados:
                • Foi meu primeiro contato com IoT, Arduino e sensores, o que me permitiu conhecer melhor esse universo da eletrônica aplicada à programação.
                • Aprendi a estruturar a comunicação entre hardware e software usando uma API REST, criando um ecossistema funcional entre o dispositivo físico e a aplicação web.
                • Desenvolvi habilidades para depurar problemas de hardware e código simultaneamente, algo muito diferente do desenvolvimento apenas de software.`
            }
        ],
        imagem: require("@/assets/img/horta.png"),
        repositorio: "https://github.com/andressasmedeiros/horta_IoT"
    }
];
