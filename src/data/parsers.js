import format from './format'
import moment from 'moment'
function usStats(data) {
    const [usStatRaw] = data;
    return parseStats(usStatRaw);
}

function parseStats(statRaw) {
    return {
        cases: format.number(statRaw.positive),
        deaths: format.number(statRaw.death),
        recovered: format.number(statRaw.recovered),
        ventilators: format.number(statRaw.onVentilatorCurrently),
        hospitalized: format.number(statRaw.hospitalized),
        icu: format.number(statRaw.inIcuCurrently),
        tested: format.number(statRaw.totalTestResults),
        updated: moment(statRaw.lastModified).format('LLLL'),
    }
}

function stateStats(state, data) {
    const stateRawData = data.find((d) => d.state === state);

    return parseStats(stateRawData);
}
export default {
    usStats,
    stateStats,
};