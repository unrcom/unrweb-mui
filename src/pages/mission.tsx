import { NextPage } from "next";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Layout } from "../components/Layout";

const Mission: NextPage = () => {
  return (
    <Layout title="Mission">
      <Grid container spacing={0} className="margin-top60">
        <Grid item xs={12} alignItems="center" className="padding20">
          <Typography className="text-2xl">
            あなたの IT 担当としてビジネスに貢献できる身近な存在になること
          </Typography>
        </Grid>
        <Grid item xs={12} alignItems="center" className="padding20">
          <Typography>
            弊社の社名「アンリモート合同会社」は、「アンリモート」=
            「身近であること」という意味合いで名付けました。
          </Typography>
        </Grid>
        <Grid item xs={12} alignItems="center" className="padding20">
          <Typography>
            今まで培ってきた様々な技術と経験を活かして、システムの提供とデジタル人材育成のお手伝いを通じた社会貢献をしたいと考えております。
          </Typography>
        </Grid>
        <Grid item xs={12} alignItems="center" className="padding20">
          <Typography>
            弊社の強みは「システムやデジタルコンテンツ」(以下「成果物」とする)
            の提案や提供にとどまらず、
            成果物を自力で発展し続けられる人材の育成に注力する点にあります。はじめはご経験がないところでの手探り状態から、徐々に素晴らしい成果物を生み出されるようになるまでを裏方として支援することを目指しています。
          </Typography>
        </Grid>
        <Grid item xs={12} alignItems="center" className="padding20">
          <Typography>
            プログラミングやコンテンツ制作は、ほんのちょっとしたご興味やきっかけがあれば、その方らしい成果物を生み出すことができます。私どももともに学び成長する存在になれるよう、日々の課題解決に邁進する所存です。
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Mission;
