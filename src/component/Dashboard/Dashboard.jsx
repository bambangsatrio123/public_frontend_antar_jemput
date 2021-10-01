import { Row, Col, Card, Empty } from "antd";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div
      data-testid="dashboardContainer"
      className="container"
      style={{
        textAlign: "center",
      }}
    >
      <Card data-testid="checkCard">
        <Row data-testid="checkRow">
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={false} />
            <h4>Halo, Customer !</h4>
            <p data-testid="text-content">Anda sedang tidak melakukan transaksi saat ini</p>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
