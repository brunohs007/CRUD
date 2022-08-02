<template>
  <div id="app">
    <!-- inicio navbar -->
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <a class="navbar-brand order-md-last">CRUD Vue.js </a>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Criar novo Perfil</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/listar-perfil">Listar todos os Perfis</router-link>
          </li>
        </ul>
    </nav>
    <!-- fim navbar -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>
