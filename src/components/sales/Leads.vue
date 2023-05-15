<template>
  <div>
    <h3>Leads</h3>
    <table class="table table-hover table-striped">
      <thead>
        <tr>
          <th scope="col">ID:</th>
          <th scope="col">Nome:</th>
          <th scope="col">Telefone:</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in dados" :key="data.id">
          <td>{{ data.id }}</td>
          <td>{{ data.nome }}</td>
          <td>{{ data.telefone }}</td>
          <td>
            <router-link
              :to="{
                name: 'lead',
                params: { id: data.id, outroParametro: `teste_${data.id}` },
              }"
              class="btn btn-sm btn-primary"
              ><i class="bi bi-pencil-square"></i
            ></router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ApiMixin from "@/mixins/ApiMixin";
export default {
  name: "LEADS",
  mixins: [ApiMixin],
  created() {
    this.getApiData("/leads");
  },
};
</script>
