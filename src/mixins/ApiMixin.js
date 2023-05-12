import api from "../services/api.js";
export default {
    data: () => ({
        dados: {},
    }),
    methods: {
        async getApiData(url, queryParams = {}) {

            Object.keys(queryParams).forEach((key) => {
                if (queryParams[key] == "") delete queryParams[key];
            });
            const urlQueryParams = new URLSearchParams(queryParams).toString();

            const fullUrl = urlQueryParams ? `${url}&${urlQueryParams}` : url;

            const response = await api.get(fullUrl);
            this.dados = response.data;
        },
    },
}