<script context="module">
  import request from "../data/request.js";
  export let usStats;

  export async function preload() {
    try {
      usStats = await request.usStats();
      return usStats;
    } catch (error) {}
  }
</script>

<script>
  import TableContainer from "../components/TableContainer.svelte";
  import CovidStat from "../components/CovidStat.svelte";
  import CovidChart from "../components/CovidChart.svelte";

  console.log("usStats", usStats);
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
<CovidStat {usStats} />
<CovidChart />

<style>
</style>
