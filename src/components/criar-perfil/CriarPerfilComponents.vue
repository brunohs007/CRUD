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
            <input type="text" class="form-control" placeholder="Digite seu nome" v-model="perfil.nome">
          </div>

          <div class="form-group">
            <label class="font-weight-bold">Email</label>
            <input type="email" class="form-control" placeholder="Digite seu email" v-model="perfil.email">
          </div>

          <div class="form-group">
            <label class="font-weight-bold" for="inputPassword4">Senha</label>
            <input type="password" class="form-control" id="inputPassword4" placeholder="Senha" v-model="perfil.senha">
          </div>

          <div class="form-group">
            <label class="font-weight-bold">Data de nascimento</label>
            <input type="date" class="form-control" placeholder="YYYY/MM/DD" v-model="perfil.data">
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
export default {
  components: {
   name: 'CriarPerfilComponents',
  },
  data() {
    return {
      perfil: {
        nome: '',
        email: '',
        senha: '',
        data: '',
      }
    };
  },
  methods: {
    EnviarFormulario() {

    }
  }
}
</script>