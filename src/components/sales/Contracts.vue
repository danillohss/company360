<template>
  <div>
    <h3>Contratos</h3>

    <router-link
      class="btn btn-primary"
      :to="{ name: 'contratos', query: { leadId_like: 1 } }"
      >Lead = 1</router-link
    >
    <router-link
      class="btn btn-primary"
      :to="`/home/vendas/contratos${this.teste}`"
      >Servico = 2</router-link
    >

    <table class="table table-hover table-striped">
      <thead>
        <tr>
          <th scope="col">ID Contrato</th>
          <th scope="col">Lead</th>
          <th scope="col">Serviço</th>
          <th scope="col">Data inicio</th>
          <th scope="col">Data fim</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in dados" :key="data.id">
          <td>{{ data.id }}</td>
          <td>{{ data.lead.nome }}</td>
          <td>{{ data.servico.servico }}</td>
          <td>{{ data.data_inicio }}</td>
          <td>{{ data.data_fim }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ApiMixin from "@/mixins/ApiMixin";
export default {
  name: "CONTRATOS",
  mixins: [ApiMixin],
  data: () => ({
    params: "_expand=lead&_expand=servico",
    teste: "?servicoId_like=2",
  }),
  created() {
    this.getApiData(`/contratos?${this.params}`);
  },
  beforeRouteUpdate(to) {
    const queryParams = new URLSearchParams(to.query);
    this.getApiData(`/contratos?${this.params}&${queryParams}`);
  },
};
</script>
