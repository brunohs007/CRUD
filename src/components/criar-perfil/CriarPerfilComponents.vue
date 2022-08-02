<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Criar Perfil</h3>
      </div>
      <div class="card-body">
        <form @submit.prevent="">

          <div class="form-group">
            <label class="font-weight-bold">Nome</label>
            <input type="text" class="form-control" placeholder="Digite seu nome">
          </div>

          <div class="form-group">
            <label class="font-weight-bold">Email</label>
            <input type="email" class="form-control" placeholder="Digite seu email">
          </div>

          <div class="form-group">
            <label class="font-weight-bold" for="inputPassword4">Senha</label>
            <input type="password" class="form-control" id="inputPassword4" placeholder="Senha">
          </div>

          <div class="form-group">
            <label class="font-weight-bold">Data de nascimento</label>
            <input type="date" class="form-control" placeholder="YYYY/MM/DD">
          </div>

          <div class="form-group">
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

    }
  }
}
</script>