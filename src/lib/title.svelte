<script>
  export let title = "Ninja Gaming";
</script>

<div class="title">
  <img src="/strategycoach logo.svg" alt="site logo">
  <h1>{title}</h1>
</div>

<style>
  .title{
    display: flex;
  }

  .title img{
    display: inline-block;
    filter: invert(88%) sepia(18%) saturate(886%) hue-rotate(199deg) brightness(100%) contrast(90%);
    max-width: 60px;
  }

  .title h1{
    margin-left: 10px;
  }
</style>