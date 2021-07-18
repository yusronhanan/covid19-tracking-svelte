<script context="module">
  import request from "../data/request.js";

  export async function preload() {
    try {
      //   throw new Error("this is bad");
      const usStats = await request.usStats();
      const historic = await request.historicUs();
      return { usStats, historic };
    } catch (error) {
      this.error(500, "There was an error in calling the API");
      return;
    }
  }
</script>

<script>
  import TableContainer from "../components/TableContainer.svelte";
  import CovidStat from "../components/CovidStat.svelte";
  import CovidChart from "../components/CovidChart.svelte";
  export let usStats;
  export let historic;
  console.log(historic);
  // console.log("usStats", usStats);
</script>

<svelte:head>
  <title>Covid US Tracking App</title>
</svelte:head>
<div class="section header">
  <div class="container">
    <h1>Covid-19 US Tracker</h1>
  </div>
</div>
<CovidStat {usStats} />
<CovidChart />
<TableContainer />

<style>
</style>
