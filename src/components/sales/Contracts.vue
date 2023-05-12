<template>
  <div>
    <h3>Contratos</h3>
    <div class="card mb-4">
      <div class="card-header">Filtrar contratos</div>
      <div class="card-body">
        <div class="row">
          <div class="col-6">
            <label class="form-label">ID Contrato:</label>
            <input
              type="text"
              class="form-control"
              v-model="formFilter.id_like"
            />
          </div>
          <div class="col-6">
            <label class="form-label">Data início:</label>
            <div class="input-group">
              <input
                type="date"
                class="form-control"
                v-model="formFilter.data_inicio_gte"
              />
              <input
                type="date"
                class="form-control"
                v-model="formFilter.data_inicio_lte"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <button type="button" class="btn btn-primary" @click="search()">
          Filtrar
        </button>
      </div>
    </div>
    <hr />
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
    formFilter: {
      id_like: "",
      data_inicio_gte: "",
      data_inicio_lte: "",
    },
  }),
  methods: {
    search() {
      const url = `/contratos?${this.params}`;
      this.getApiData(url, this.formFilter);
    },
  },
  created() {
    const url = `/contratos?${this.params}`;
    this.getApiData(url, this.$route.query);
  },
  beforeRouteUpdate(to) {
    const url = `/contratos?${this.params}`;
    this.getApiData(url, to.query);
  },
};
</script>
