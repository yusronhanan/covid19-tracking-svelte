<script>
  import TableContainer from "../components/TableContainer.svelte";
  import CovidStat from "../components/CovidStat.svelte";
  import CovidChart from "../components/CovidChart.svelte";
</script>

<svelte:head>
  <title>Covid US Tracking App</title>
</svelte:head>
<div class="section header">
  <div class="container">
    <h1>Covid-19 US Tracker</h1>
  </div>
</div>
<TableContainer />
<CovidStat />
<CovidChart />

<style>
</style>
