import { NextPage } from "next";
import { Layout } from "../components/Layout";

const Mission: NextPage = () => {
  return (
    <Layout title="TimeLine">
      <div className="m-12">
        <div>2022年 4月</div>
        <ul className="m-4">
          <li>
            - 自社プロジェクト sirokuro の検討を開始して全経営資源を投入する
          </li>
          <li>
            - WordPress を用いた当社のウェブページを React + Nextjs に変更 (aws
            Route53 + Vercel CDN による)
          </li>
        </ul>
        <div>2022年 3月</div>
        <div className="m-4">
          自社プロジェクト emsa (emergency messaging service anonymous)
          の検討を開始
        </div>
        <div>2021年12月</div>
        <div className="m-4">
          シングルページアプリケーション (SPA) を体験できるサイト{" "}
          <a
            href="https://demoru.net/"
            rel="noreferrer"
            target="_blank"
            className="underline"
          >
            demoru.net
          </a>{" "}
          オープン
        </div>
        <div>2021年 5月 〜 </div>
        <div className="m-4">
          React を用いたシングルページWebアプリケーション (SPA)
          の開発方式の検討を開始
        </div>
        <div>2021年 4月 〜 12月</div>
        <div className="m-4">
          プログラミング学習を希望される新中学生のお子様とのプログラミング教室を実施
          (３時間の授業を月２回)
          <ul className="m-4">
            <li>- Scratch によるプログラミング体験</li>
            <li>- Python によるオブジェクト指向プログラミング体験</li>
            <li>- React による Webプログラミング体験</li>
          </ul>
        </div>
        <div>2021年 4月</div>
        <div className="m-4">
          4月13日に弊社を設立し WordPress を用いた当社のウェブページをスタート
          (aws Lightsail + Route53 による)
        </div>
      </div>
    </Layout>
  );
};

export default Mission;
