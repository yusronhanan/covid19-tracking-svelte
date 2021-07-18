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

function historicUs(historicData) {
    return parseHistoric(historicData);
}
function parseHistoric(historicData) {
    return [
        {
            label: 'Cases',
            key: 'positive',
            color: 'rbg(100, 0, 200)',
        },
        {
            label: 'Recovered',
            key: 'recovered',
            color: 'rgb(100, 100, 200)',
        },
        {
            label: 'Total Tested',
            key: 'totalTestResults',
            color: 'rgb(10, 30, 100)',
        },
        {
            label: 'Hospitalized',
            key: 'hospitalizedCurrently',
            color: 'rgb(20, 100, 230)',
        },
        {
            label: 'Deaths',
            key: 'death',
            color: 'rgb(255, 99, 132)',
        },
    ].reduce((prev, next) => {
        if (historicData.filter((d) => d[next.key] !== null).length > 4) {
            prev.push(parseChart(historicData, next.key, next.label, next.color));
        }

        return prev;
    }, []);
}
function parseChart(historicData, key, label, color) {
    const chartData = historicData.map(data => {
        return {
            x: moment(data.date, 'YYYYMMDD'),
            y: data[key] || 0,
        }
    })
    return {
        label,
        data: chartData,
        fill: false,
        borderColor: color,
    }
}
export default {
    usStats,
    stateStats,
    historicUs,
};