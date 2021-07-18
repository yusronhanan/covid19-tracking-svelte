<!-- <script context="module"> ==> the call is performed before creating the component. -->
<script context="module">
  export function preload(page) {
    console.log(page);
    return { state: page.params["state"] };
  }
</script>

<script>
  import CovidStat from "../components/CovidStat.svelte";
  import CovidChart from "../components/CovidChart.svelte";
  export let state;
</script>

<h1>
  {state}
</h1>

<CovidStat />
<CovidChart />
