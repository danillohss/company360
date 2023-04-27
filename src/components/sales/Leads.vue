<template>
  <div>
    <h3>Leads</h3>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">ID:</th>
          <th scope="col">Nome:</th>
          <th scope="col">Telefone:</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in leads" :key="data.id">
          <td>{{ data.id }}</td>
          <td>{{ data.nome }}</td>
          <td>{{ data.telefone }}</td>
          <td>
            <router-link to="/home/vendas/leads" class="btn btn-sm btn-primary"
              ><i class="bi bi-pencil-square"></i
            ></router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import api from "../../services/api.js";
export default {
  // eslint-disable-next-line
  name: "Leads",
  data: () => ({
    leads: [],
  }),
  methods: {
    async getApiData() {
      const response = await api.get("/leads");
      this.leads = response.data;
      console.log("cheguei");
      console.log(this.leads);
    },
  },
  created() {
    this.getApiData();
  },
};
</script>