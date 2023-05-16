<template>
  <h2>Vendas concluídas</h2>
  <br />
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Serviço</th>
        <th scope="col">Nome</th>
        <th scope="col">Data da contratação</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="data in dados" :key="data.id">
        <td>{{ data.servico.servico }}</td>
        <td>{{ data.nome }}</td>
        <td>{{ data.data_contratacao }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import ApiMixin from "@/mixins/ApiMixin";
export default {
  name: "SUCCESSSALES",
  mixins: [ApiMixin],
  data: () => ({
    params: "_expand=servico&",
  }),
  created() {
    this.getApiData(`/VendasConcluidas?${this.params}`);
  },
};
</script>