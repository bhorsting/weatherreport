declare module KNMIPluimData {

    export interface Title {
        text: string;
    }

    export interface Credits {
        text: string;
        href: string;
    }

    export interface Subtitle {
        text: string;
    }

    export interface YAxis {
        min: number;
        max: number;
        tickInterval: number;
        title: Title;
        opposite?: boolean;
    }

    export interface Labels {
        align: string;
        padding: number;
        step: number;
    }

    export interface DateTimeLabelFormats {
        day: string;
    }

    export interface XAxis {
        type: string;
        tickInterval: number;
        alternateGridColor: string;
        showFirstLabel: boolean;
        startOnTick: boolean;
        showLastLabel: boolean;
        labels: Labels;
        dateTimeLabelFormats: DateTimeLabelFormats;
    }

    export interface Chart {
        borderColor: string;
        borderWidth: number;
        type: string;
        marginLeft: number;
        marginRight: number;
    }

    export interface Tooltip {
        crosshairs: boolean;
        shared: boolean;
        valueDecimals: number;
        valueSuffix: string;
    }

    export interface SeriesOptions {
        visible: boolean;
    }

    export interface PlotOptions {
        series: SeriesOptions;
    }

    export interface ChartOptions {
        plotOptions: PlotOptions;
    }

    export interface Exporting {
        filename: string;
        sourceWidth: number;
        sourceHeight: number;
        scale: number;
        chartOptions: ChartOptions;
    }

    export interface ItemStyle {
        fontWeight: string;
        fontSize: string;
    }

    export interface Legend {
        enabled: boolean;
        itemStyle: ItemStyle;
    }

    export interface DataLabels {
        enabled: boolean;
        format: string;
        borderRadius: number;
        backgroundColor: string;
        borderWidth: number;
        borderColor: string;
        y: number;
    }

    export interface TooltipOptions {
        headerFormat: string;
        pointFormat: string;
    }

    export interface Series {
        name: string;
        animation: boolean;
        type: string;
        legendName: string;
        legendColumnIndex: number;
        showInLegend: boolean;
        dataLabels: DataLabels;
        tooltip: TooltipOptions;
        data: any[];
        zIndex: number;
        lineWidth: number;
        lineColor: string;
        color: string;
        enableMouseTracking?: boolean;
        fillColor: string;
    }

    export interface KNMIPluim {
        title: Title;
        credits: Credits;
        subtitle: Subtitle;
        yAxis: YAxis[];
        xAxis: XAxis;
        chart: Chart;
        tooltip: Tooltip;
        exporting: Exporting;
        legend: Legend;
        series: Series[];
    }

}
