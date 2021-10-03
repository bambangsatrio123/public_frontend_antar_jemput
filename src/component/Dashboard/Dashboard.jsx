import { Row, Col, Card, Empty } from "antd";
import useUser from "../../hooks/useUser";
import "./Dashboard.css";

export default function Dashboard() {
  const [user] = useUser();
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
            <h4 style={{ fontWeight: "500" }}>Halo, {user.name}</h4>
            <h6>Anda login sebagai {user.role}</h6>
            <br />
            <p data-testid="textContent">Anda sedang tidak melakukan transaksi saat ini</p>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
