<template>
  <div>
    <h3>Contratos</h3>
    <table class="table table-hover table-striped">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Lead</th>
          <th scope="col">Serviço</th>
          <th scope="col">Data inicio</th>
          <th scope="col">Data fim</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in dados" :key="data.id">
          <td>{{ data.id }}</td>
          <td>{{ data.leadId }}</td>
          <td>{{ data.servicoId }}</td>
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
  created() {
    this.getApiData("/contratos");
  },
};
</script>
