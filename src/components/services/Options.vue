<template>
  <h5>Opções</h5>
</template>

<script>
export default {
  name: "OPTIONS",
  props: ["id"],
  created() {
    console.log("Opções", this.id);
  },
};
</script>