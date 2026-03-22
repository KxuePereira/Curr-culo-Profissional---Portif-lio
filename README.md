# Meu Portfólio 

Este é o meu portfólio pessoal e profissional, desenvolvido com foco na simulação do ambiente de SO (*Arquitetura Kinetic Engine*), estética cyberpunk avançada, glassmorphism e animações baseadas em Intersection Observer.

## 🚀 Tecnologias Integradas
- **HTML5 Semântico:** Estruturação avançada e acessibilidade.
- **Vanilla JavaScript:** Funcionalidades de interface como detecção visuais, animações sob demanda, tudo sem uso (desnecessário) de frameworks pesados.
- **Tailwind CSS (Via CDN):** Para a prototipação rápida de utilitários como `flex`, `grid`, variáveis personalizadas de Dark Mode, opacidade, layouts responsivos, e suporte tipográfico.
- **CSS3 Animations/Keyframes:** Scanlines globais, overlays paralax, animações de brilhos e botões com transições profundas.

## 📁 Arquitetura do Projeto

O código foi dividido visando modularidade e alta performance na renderização da página:
```text
/
├── index.html            # Estrutura e marcação principal da página.
├── css/
│   └── style.css         # Lógica pura de CSS para grid overlays, scanline, background radial e regras nativas do Glassmorphism.
├── js/
│   ├── tailwind-config.js# Regras customizadas do Tailwind, tokens de design e variáveis (primárias, secundárias, background).
│   └── main.js           # Orquestração do Intersection Observer e acionamentos visuais do DOM.
└── README.md             # Esta documentação do projeto!
```

## 🛠️ Como rodar o projeto localmente
Como o projeto é inteiramente *client-side*, basta clonar este repositório e abrir o arquivo `index.html` em qualquer navegador moderno.

```bash
git clone https://github.com/SEU_USUARIO/meu-portfolio.git
cd meu-portfolio
```
Dê um duplo-clique no arquivo `index.html` ou use uma extensão de servidor local no VS Code (como o **Live Server**) para melhor experiência com recarregamento em tempo real.
