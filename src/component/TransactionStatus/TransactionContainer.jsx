import { Button, Card, Typography } from "antd";
import { useState } from "react";
import ModalRating from "./TransactionRating";
import "./TransactionsContainer.css";

export default function TransactionContainer() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="content">
      <Typography.Title>Transaksi saat ini</Typography.Title>
      <Card className="box">
        <table className="table">
          <tr>
            <td>Waktu Request</td>
            <td>:</td>
            <td>09 September 2021 | 10:00 WIB</td>
          </tr>
          <tr>
            <td>Jenis Transaksi</td>
            <td>:</td>
            <td>Setoran Pinjaman</td>
          </tr>
          <tr>
            <td>Nominal Transaksi</td>
            <td>:</td>
            <td>Rp. 10.000.000</td>
          </tr>
          <tr>
            <td>Alamat Anda</td>
            <td>:</td>
            <td>Jl. Kubu Anyar No.10</td>
          </tr>
          <tr>
            <td>Agen BRILink</td>
            <td>:</td>
            <td>Asep The World</td>
          </tr>
          <tr>
            <td>Alamat Agen</td>
            <td>:</td>
            <td>Jl. Kubu Anyar No.20</td>
          </tr>
          <tr>
            <td>Status</td>
            <td>:</td>
            <td>Selesai pada 09 September 2021 | 10.20 WIB</td>
          </tr>
        </table>
        <div className="btn-container">
          <Button
            className="btn-rating"
            type="primary"
            onClick={() => setVisible(true)}
            // style={{ backgroundColor: '#ffd700', borderColor: '#ffd700' }}
          >
            Beri Rating
          </Button>
        </div>
      </Card>
      <ModalRating visible={visible} onCancel={() => setVisible(false)} />
    </div>
  );
}
