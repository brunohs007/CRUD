import api from './api';

export default {
    async getPerfil() {
        try {
            const response = await api().get('/perfil');
            return response.data;
        } catch (error) {
            console.log(error)
        }
    },
    async getPerfilId(id) {
        try {
            const response = await api().get('/perfil/${id}');
            return response.data;
        } catch (error) {
            console.log(error)
        }
    },
    async criarPerfil(perfil) {
        try {
            const response = await api().post('/perfil', perfil);
            return response.data;
        } catch (error) {
            console.log(error)
        }
    },
    async atualizarPerfil(id) {
        try {
            const response = await api().put('/perfil/${id}');
            return response.data;
        } catch (error) {
            console.log(error)
        }
    },
    async deletarPerfil(id) {
        try {
            const response = await api().delete('/perfil/${id}');
            return response.data;
        } catch (error) {
            console.log(error)
        }
    },
};