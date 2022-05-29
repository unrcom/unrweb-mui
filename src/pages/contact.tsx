import { NextPage } from "next";
import { Layout } from "../components/Layout";
import Image from "next/image";

const Contact: NextPage = () => {
  return (
    <Layout title="Contact">
      <div className="card-1">
        <div className="mt-4">
          <p className="text-xs">メールでのお問い合わせ</p>
          <p className="mt-2">info@unremoted.com</p>
          <p className="mt-5 text-xs">Facebook メッセンジャー</p>
          <p className="mt-2">https://m.me/unremoted</p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
