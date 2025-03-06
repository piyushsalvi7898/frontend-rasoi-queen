import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../components/css/companies.css"; // Ensure correct path


// Import all product posters
import company1 from "../assets/images/companies/company1.jpg";
import company2 from "../assets/images/companies/company2.jpg";
import company3 from "../assets/images/companies/company3.jpg";
import company4 from "../assets/images/companies/company4.jpg";
import company5 from "../assets/images/companies/company5.jpg";
import company6 from "../assets/images/companies/company6.jpg";
import company7 from "../assets/images/companies/company7.jpg";
import company8 from "../assets/images/companies/company8.jpg";
import company9 from "../assets/images/companies/company9.jpg";
import company10 from "../assets/images/companies/company10.jpg";
import company11 from "../assets/images/companies/company11.jpg";
import company12 from "../assets/images/companies/company12.jpg";
import company13 from "../assets/images/companies/company13.jpg";
import company14 from "../assets/images/companies/company14.jpg";
import company15 from "../assets/images/companies/company15.jpg";
import company16 from "../assets/images/companies/company16.jpg";
import company17 from "../assets/images/companies/company17.jpg";
import company18 from "../assets/images/companies/company18.jpg";
import company19 from "../assets/images/companies/company19.jpg";
import company20 from "../assets/images/companies/company20.jpg";
import company21 from "../assets/images/companies/company21.jpg";
import company22 from "../assets/images/companies/company22.jpg";
import company23 from "../assets/images/companies/company23.jpg";
import company24 from "../assets/images/companies/company24.jpg";
import company25 from "../assets/images/companies/company25.jpg";
import company26 from "../assets/images/companies/company26.jpg";
import company27 from "../assets/images/companies/company27.jpg";
import company28 from "../assets/images/companies/company28.jpg";
import company29 from "../assets/images/companies/company29.jpg";
import company30 from "../assets/images/companies/company30.jpg";
import company31 from "../assets/images/companies/company31.jpg";
import company32 from "../assets/images/companies/company32.jpg";
import company33 from "../assets/images/companies/company33.jpg";


const companyPosters = [
    { id: 1, name: "Company 1", image: company1 },
    { id: 2, name: "Company 2", image: company2 },
    { id: 3, name: "Company 3", image: company3 },
    { id: 4, name: "Company 4", image: company4 },
    { id: 5, name: "Company 5", image: company5 },
    { id: 6, name: "Company 6", image: company6 },
    { id: 7, name: "Company 7", image: company7 },
    { id: 8, name: "Company 8", image: company8 },
    { id: 9, name: "Company 9", image: company9 },
    { id: 10, name: "Company 10", image: company10 },
    { id: 11, name: "Company 11", image: company11 },
    { id: 12, name: "Company 12", image: company12 },
    { id: 13, name: "Company 13", image: company13 },
    { id: 14, name: "Company 14", image: company14 },
    { id: 15, name: "Company 15", image: company15 },
    { id: 16, name: "Company 16", image: company16 },
    { id: 17, name: "Company 17", image: company17 },
    { id: 18, name: "Company 18", image: company18 },
    { id: 19, name: "Company 19", image: company19 },
    { id: 20, name: "Company 20", image: company20 },
    { id: 21, name: "Company 21", image: company21 },
    { id: 22, name: "Company 22", image: company22 },
    { id: 23, name: "Company 23", image: company23 },
    { id: 24, name: "Company 24", image: company24 },
    { id: 25, name: "Company 25", image: company25 },
    { id: 26, name: "Company 26", image: company26 },
    { id: 27, name: "Company 27", image: company27 },
    { id: 28, name: "Company 28", image: company28 },
    { id: 29, name: "Company 29", image: company29 },
    { id: 30, name: "Company 30", image: company30 },
    { id: 31, name: "Company 31", image: company31 },
    { id: 32, name: "Company 32", image: company32 },
    { id: 33, name: "Company 33", image: company33 }
];

const Companies = () => {
    return (


        <Container className="py-5 image-gallery-container">
            <h2 className="text-center gallery-title">Our Image Gallery</h2>
            <Row className="justify-content-center">
                {companyPosters.map((company) => (
                    <Col key={company.id} md={4} sm={6} xs={12} className="mb-4">
                        <Card className="image-card">
                            <Card.Img variant="top" src={company.image} className="image" />
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>


    );
};

export default Companies;
