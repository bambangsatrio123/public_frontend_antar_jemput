import { Input, Card, Select, Form, Button } from "antd";
import { Row, Col } from "antd";
import "../../App.css";

export default function TransactionNew() {
  const { Option, OptGroup } = Select;
  return (
    <div className="container">
      <Card>
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 18,
          }}
          layout="horizontal"
        >
          <Form.Item label="Jenis Transaksi">
            <Select defaultValue="Pilih Jenis Transaksi">
              <OptGroup label="Laku Pandai">
                <Option value="cash">Cash-in & Out</Option>
                <Option value="report">Report</Option>
                <Option value="setoran">Setoran Uang</Option>
                <Option value="tarikTunai">Tarik Tunai</Option>
                <Option value="isiUlangpulsa">Isi Ulang Pulsa</Option>
                <Option value="belanjaMerchant">Belanja Merchant</Option>
              </OptGroup>
              <OptGroup label="Tunai">
                <Option value="setoranPinjaman">Setoran Pinjaman</Option>
                <Option value="setoranSimpanan">Setoran Simpanan</Option>
              </OptGroup>
              <OptGroup label="Mini Atm Bri">
                <Option value="registrasiMobile">Registrasi Mobile</Option>
                <Option value="registrasiInternet">Registrasi Internet</Option>
                <Option value="informasiRekening">Informasi Rekening</Option>
                <Option value="transferPembayaran">Transfer Pembayaran</Option>
                <Option value="isiUlang">Isi Ulang Pulsa</Option>
                <Option value="setorPasti">Setor Pasti</Option>
              </OptGroup>
            </Select>
          </Form.Item>

          <Form.Item label="Nominal Transaksi">
            <Input type="number" placeholder="Rp" data-testid="input-number"></Input>
          </Form.Item>

          <Form.Item label="Alamat Saat Ini">
            <Row justify="space-between">
              <Col xs={24} sm={24} md={7} lg={7} xl={7} style={{ paddingBottom: 24 }}>
                <Select defaultValue="-Provinsi-">
                  -Provinsi-
                  <Select.Option value="A">A</Select.Option>
                  <Select.Option value="B">B</Select.Option>
                  <Select.Option value="C">C</Select.Option>
                  <Select.Option value="D">D</Select.Option>
                </Select>
              </Col>
              <Col xs={24} sm={24} md={7} lg={7} xl={7} style={{ paddingBottom: 24 }}>
                <Select defaultValue="-Kota Kabupaten-">
                  -Kota Kabupaten-
                  <Select.Option value="A">A</Select.Option>
                  <Select.Option value="B">B</Select.Option>
                  <Select.Option value="C">C</Select.Option>
                  <Select.Option value="D">D</Select.Option>
                </Select>
              </Col>
              <Col xs={24} sm={24} md={7} lg={7} xl={7} style={{ paddingBottom: 24 }}>
                <Select defaultValue="-Kecamatan-">
                  -Kecamatan-
                  <Select.Option value="A">A</Select.Option>
                  <Select.Option value="B">B</Select.Option>
                  <Select.Option value="C">C</Select.Option>
                  <Select.Option value="D">D</Select.Option>
                </Select>
              </Col>
            </Row>

            <Input type="text" placeholder="Alamat Lengkap"></Input>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 10, span: 20 }}>
            <Button type="primary" htmlType="submit">
              Cari Agen
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
