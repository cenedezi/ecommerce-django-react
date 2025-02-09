<h1>Ecommerce - Django + React</h1>
<p>Este projeto é um sistema de e-commerce desenvolvido com Django no backend e React no frontend. O backend é responsável por criar e gerenciar os produtos, expondo uma API que o frontend consome em tempo real para exibir a lista de produtos.</p>

<h2>Tecnologias Usadas</h2>

<h3>Backend (Django):</h3>
<ul>
 <li>Django: Framework web em Python.</li>
 <li>Django REST Framework: Para criar a API RESTful que permite a comunicação entre o frontend e o backend.</li>
 <li>SQLite: Banco de dados para armazenar informações dos produtos (pode ser facilmente substituído por outros bancos como PostgreSQL, MySQL, etc.).</li>
</ul>

<h3>Frontend (React):</h3>
<ul>
  <li>React.js: Biblioteca JavaScript para construir interfaces de usuário interativas.</li>
  <li>fetch API: Utilizado para fazer requisições HTTP e consumir a API do Django.</li>
</ul>

<h4>Funcionalidades</h4>
<ul>
  <li><b>Cadastro de produtos:</b> O backend permite que novos produtos sejam cadastrados com informações como nome, descrição, preço e imagem.</li>
  <li><b>Consumo da API em tempo real:</b> O frontend consome a API do Django e exibe a lista de produtos em tempo real, atualizando a interface sempre que há novos dados no servidor.</li>
  <li><b>Adição de novos produtos:</b>b> Sempre que um novo produto é criado no Django, a API é atualizada automaticamente, e o frontend reflete essas mudanças sem a necessidade de atualizar a página.</li>
