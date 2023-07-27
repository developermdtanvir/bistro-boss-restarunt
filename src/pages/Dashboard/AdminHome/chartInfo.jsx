
export const barchartColor = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


export const barchart = [
    {
        name: 'Dessert  ',
        uv: 36,
        pv: 36,
        amt: 30,
    },
    {
        name: 'Pizza',
        uv: 27,
        pv: 20,
        amt: 18,
    },
    {
        name: 'Salad',
        uv: 18,
        pv: 18,
        amt: 15,
    },
    {
        name: 'Soup',
        uv: 9,
        pv: 9,
        amt: 8,
    }
];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
};

export const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};


// piechart 

export const piechart = [
    { name: 'Dessert', value: 400 },
    { name: 'Pizza', value: 300 },
    { name: 'Salad', value: 300 },
    { name: 'Soup', value: 200 },
];

export const piechartcolor = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;

export const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};
