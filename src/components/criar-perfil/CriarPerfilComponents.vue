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
            <input type="text" id="nome" name="nome" class="form-control" placeholder="Digite seu nome" v-model="state.nome">
          </div>

          <div class="form-group">
            <label class="font-weight-bold">Email</label>
            <input type="email" class="form-control" placeholder="Digite seu email" v-model="state.email">
          </div>

          <div class="form-group">
            <label class="font-weight-bold" for="inputPassword4">Senha</label>
            <input type="password" class="form-control" id="inputPassword4" placeholder="Senha" v-model="state.senha">
          </div>

          <div class="form-group">
            <label class="font-weight-bold">Data de nascimento</label>
            <input type="date" class="form-control" placeholder="YYYY/MM/DD" v-model="state.data">
          </div>

          <div class="form-group" style="margin-top: 15px">
            <button class=" btn btn-primary">
              <font-awesome-icon :icon="['fas', 'user-plus']" /> Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

import useVuelidate from '@vuelidate/core'
import { required, email, minLength, sameAs} from '@vuelidate/validators'
import { reactive, computed } from 'vue'

export default {
  setup () {
    const state = reactive({
      nome: '',
      email: '',
      senha: '',
      data: '',
    })

    const rules = computed(() => {
      return {
        nome: {required},
        email: {required, email},
        senha: {required, minLength: minLength(6)},
        data: {required},
      }
    })
    const v$ = useVuelidate(rules, state)
    return { state, v$ }
  },
  methods: {
    EnviarFormulario() {
      this.v$.$validate()
      if (!this.v$.$error){
        alert('Formulario enviado com sucesso!')
      }else {
        alert('Falha no envio do formulario!')
      }
    },
  },
}
</script>