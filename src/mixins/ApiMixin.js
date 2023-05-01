import api from "../services/api.js";
export default {
    data: () => ({
        dados: {},
    }),
    methods: {
        async getApiData(url) {
            const response = await api.get(url);
            this.dados = response.data;
        },
    },
}