<template>
  <div>
    <!-- inicio navbar -->
    <nav class="nav navbar-expand-lg bg-dark navbar-dark">
      <div class="container">
        <a class="navbar-brand order-md-last">CRUD Vue.js </a>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Criar novo Perfil</router-link>
          </li>
        </ul>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/listar-perfil">Listar todos os Perfis</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <!-- fim navbar -->
    <div class="container">
      <router-view/>
    </div>
  </div>

</template>