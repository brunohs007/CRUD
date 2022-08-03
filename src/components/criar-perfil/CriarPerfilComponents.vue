<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Criar Perfil</h3>
      </div>
      <div class="card-body">
        <form @submit.prevent="EnviarFormulario()">

          <div class="form-group">
            <label class="font-weight-bold">Nome</label>
            <input type="text" id="nome" name="nome" class="form-control" placeholder="Digite seu nome" v-model="perfil.nome" :class="{'is-invalid': isSubitted && $v.perfil.nome.$error }">
          </div>
          <div v-if="isSubitted && !$v.perfil.nome.required" class="invalid-feedback">
              Campo Nome é necessario!
          </div>

          <div class="form-group">
            <label class="font-weight-bold">Email</label>
            <input type="email" id="email" name="email" class="form-control" placeholder="Digite seu email" v-model="perfil.email">
          </div>
          <div v-if="isSubitted && !$v.perfil.email.required" class="invalid-feedback">
            Campo Email é necessario!
          </div>

          <div class="form-group">
            <label class="font-weight-bold" for="inputPassword4">Senha</label>
            <input type="password" name="senha" class="form-control" id="inputPassword4" placeholder="Senha" v-model="perfil.senha">
          </div>
          <div v-if="isSubitted && !$v.perfil.senha.required" class="invalid-feedback">
            Campo Senha é necessario!
          </div>

          <div class="form-group">
            <label class="font-weight-bold">Data de nascimento</label>
            <input type="date" id="data" name="data" class="form-control" placeholder="YYYY/MM/DD" v-model="perfil.data">
          </div>
          <div v-if="isSubitted && !$v.perfil.data.required" class="invalid-feedback">
            Campo Data é necessario!
          </div>

          <div class="form-group" style="margin-top: 15px">
            <button type="submit" class=" btn btn-primary">Entrar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

import { required, email } from 'vuelidate/lib/validators';

export default {
   name: 'CriarPerfilComponents',
  data() {
    return {
      perfil: {
        nome: '',
        email: '',
        senha: '',
        data: '',
      },
      isSubitted: false,
    };
  },
  validations: {
    perfil: {
      nome: {required},
      email: {required},
      senha: {required},
      data: {required},
    }
  },
  methods: {
    EnviarFormulario() {

    },
  },
};
</script>