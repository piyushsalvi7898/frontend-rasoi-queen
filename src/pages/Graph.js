import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "../components/css/graph.css";
import { Line, Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { FaUsers, FaShoppingCart, FaDollarSign, FaChartLine } from "react-icons/fa";

// Register chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

const Graph = () => {
    const stats = [
        { title: "Total Orders", value: 350, icon: <FaShoppingCart />, change: "+40%" },
        { title: "Today's Customers", value: 1800, icon: <FaUsers />, change: "+5%" },
        { title: "Revenue", value: "$50K", icon: <FaDollarSign />, change: "+8%" },
        { title: "New Followers", value: "+120", icon: <FaChartLine />, change: "Just updated" },
    ];

    return (
        <Container fluid className="py-3 graph-container"> {/* Unique class added */}
            <h3 className="dashboard-title text-center">Rasoi Queen Dashboard</h3>



            {/* Stats Cards */}
            <Row className="gx-2 gy-2">
                {stats.map((item, index) => (
                    <Col md={3} sm={6} key={index}>
                        <Card className="p-2 shadow-sm text-center border-0 stats-card">
                            <div className="text-primary ">{item.icon}</div>
                            <h6 className="mt-1">{item.title}</h6>
                            <h5 className="fw-bold">{item.value}</h5>
                            <span className="text-success fw-semibold">{item.change}</span>
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* Charts */}
            <Row className="mt-3 gx-2 gy-2">
                <Col md={6}>
                    <Card className="p-2 shadow-sm border-0 chart-card">
                        <h6>Daily Sales</h6>
                        <p className="text-success small">(+20%) increase today</p>
                        <div className="chart-container">
                            <Bar
                                data={{
                                    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
                                    datasets: [{ label: "Sales", data: [300, 500, 400, 600, 800], backgroundColor: "#4F46E5" }],
                                }}
                                options={{ responsive: true, maintainAspectRatio: false }}
                            />
                        </div>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="p-2 shadow-sm border-0 chart-card">
                        <h6>Campaign Performance</h6>
                        <p className="small">Sent 3 days ago</p>
                        <div className="chart-container">
                            <Line
                                data={{
                                    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
                                    datasets: [{ label: "Performance", data: [50, 70, 90, 110], borderColor: "#E11D48" }],
                                }}
                                options={{ responsive: true, maintainAspectRatio: false }}
                            />
                        </div>
                    </Card>
                </Col>
            </Row>

            {/* Tasks & Orders */}
            <Row className="mt-3 gx-3 gy-3">
                <Col md={6}>
                    <Card className="p-3 shadow-sm border-0 dashboard-card">
                        <h2 className="text-primary"> Completed Tasks</h2>
                        <p className="text-muted small">Last updated: Just now</p>
                        <ul className="task-list">
                            <li><strong>📦 New Spices Packaging:</strong> $10,000</li>
                            <li><strong>🔄 Improve Order System:</strong> $5,000</li>
                            <li><strong>🎨 Website UI Update:</strong> $2,500</li>
                            <li><strong>📈 Market Expansion:</strong> $15,000</li>
                        </ul>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="p-3 shadow-sm border-0 dashboard-card">
                        <h2 className="text-success"> Orders Overview</h2>
                        <p className="text-muted small"> 30% increase this month</p>
                        <ul className="order-list">
                            <li><strong>💰 $3,500 Bulk Orders</strong> - 22 DEC</li>
                            <li><strong>🛒 Retail Order #1823123</strong> - 21 DEC</li>
                            <li><strong>💳 Supplier Payment Processed</strong> - 21 DEC</li>
                        </ul>
                    </Card>
                </Col>
            </Row>

        </Container>
    );
};

export default Graph;
