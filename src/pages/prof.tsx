import { NextPage } from "next";
import { Layout } from "../components/Layout";
import Image from "next/image";

const Prof: NextPage = () => {
  return (
    <Layout title="Profile">
      <div className="card-1">
        <div className="image-1">
          <Image
            className="image-maru"
            src="/unremote.png"
            width={64}
            height={64}
            alt="Avatar"
          />
        </div>
        <div className="mt-4">
          <p className="text-xs">会社名</p>
          <p className="mt-2">アンリモート合同会社</p>
          <p className="mt-3 text-xs">ドメイン</p>
          <p className="mt-2">unremoted.com</p>
          <p className="mt-3 text-xs">設立</p>
          <p className="mt-2">２０２１年４月</p>
          <p className="mt-3 text-xs">住所</p>
          <p className="mt-2">東京都新宿区新宿 5-11-30-308</p>
          <p className="mt-3 text-xs">郵便番号</p>
          <p className="mt-2">１６０−００２２</p>
          <p className="mt-3 text-xs">決済金融機関</p>
          <p className="mt-2">東京三協信用金庫　新宿支店</p>
        </div>
      </div>
    </Layout>
  );
};

export default Prof;
