<template>
  <h5>Indicador</h5>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: "INDICATOR",
  props: ["id"],
  created() {
    console.log("Indicadores", this.id);
  },
};
</script>