<script>
  export let usStats;
</script>

<div class="section">
  <div class="container">
    <div class="columns">
      <h2 class="is-3 column">Cases: {usStats.cases}</h2>
      <h2 class="is-3 column">Deaths: {usStats.deaths}</h2>
      <h2 class="is-3 column">Recovered: {usStats.recovered}</h2>
      <h2 class="is-3 column">Updated: {usStats.updated}</h2>
    </div>
  </div>

  <div class="container">
    <div class="columns">
      <h2 class="is-3 column">Tested: {usStats.tested}</h2>
      <h2 class="is-3 column">Hospitalized: {usStats.hospitalized}</h2>
      <h2 class="is-3 column">Total ICU: {usStats.icu}</h2>
      <h2 class="is-3 column">Total Ventilator: {usStats.ventilators}</h2>
    </div>
  </div>
</div>

<style>
  .columns {
    border: 1px solid black;
  }
</style>
