import { Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, XAxis, YAxis } from "recharts";
import useUsers from "../../../hooks/useUsers";
import { TriangleBar, barchart, barchartColor, piechart, piechartcolor, renderCustomizedLabel } from "./chartInfo";

function AdminHome() {
    const [user] = useUsers()

    console.log(user);
    return (
        <div>
            <div className="gird grid-cols-1 lg:grid-cols-4">
                <div>
                    <h1>Revenue</h1>
                </div>
                <div className="flex">
                    <h1>Customers</h1>
                    <p className="text-xl">{user.length}</p>
                </div>
                <div>
                    <h1>Products</h1>
                </div>
                <div>
                    <h1>Orders</h1>
                </div>
            </div>

            <div className="flex ">
                <div>
                    <BarChart
                        width={500}
                        height={300}
                        data={barchart}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {barchart.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={barchartColor[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>

                <div>

                    <PieChart width={400} height={400}>
                        <Pie
                            data={piechart}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {piechart.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={piechartcolor[index % piechartcolor.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </div>
            </div>
        </div>
    )
}


export default AdminHome;