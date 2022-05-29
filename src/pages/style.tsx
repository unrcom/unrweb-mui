import { NextPage } from "next";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";

import { Layout } from "../components/Layout";

const Style: NextPage = () => {
  return (
    <Layout title="Style">
      <Grid container spacing={0} className="margin-top60">
        <Grid item xs={12} alignItems="center" className="padding20">
          {" "}
          <List>
            <ListItemButton
              component="a"
              href="https://qiita.com/unr/items/8026bb79216811b9debb"
            >
              <ListItemText primary={"エンジニアとは何か"} />
            </ListItemButton>
          </List>
          <List>
            <ListItemButton
              component="a"
              href="https://qiita.com/unr/items/8de632d48bfa72d3f149"
            >
              <ListItemText
                primary={
                  "React + Nextjs + TypeScript による Vercel CDN からの静的コンテンツ配信"
                }
              />
            </ListItemButton>
          </List>
          <List>
            <ListItemButton
              component="a"
              href="https://qiita.com/unr/items/c627a9b25628441e64f3"
            >
              <ListItemText
                primary={
                  "React による シングルページWebアプリケーション (SPA) の開発"
                }
              />
            </ListItemButton>
          </List>
          <List>
            <ListItemButton
              component="a"
              href="https://qiita.com/ishi32/private/29731c8414aa52ea2901"
            >
              <ListItemText
                primary={"Cross platform によるスマートフォンアプリの開発"}
              />
            </ListItemButton>
          </List>
          <List>
            <ListItemButton
              component="a"
              href="https://qiita.com/ishi32/private/aec7b9504ef987aeda22"
            >
              <ListItemText primary={"新入社員向け Webプログラミング研修"} />
            </ListItemButton>
          </List>
          <List>
            <ListItemButton
              component="a"
              href="https://qiita.com/ishi32/private/3ffbf05f8024ae8cedab"
            >
              <ListItemText
                primary={"Firebase Authentication を用いたユーザ認証"}
              />
            </ListItemButton>
          </List>
          <List>
            <ListItemButton
              component="a"
              href="https://qiita.com/unr/items/ccedd6aac4bfbb288e16"
            >
              <ListItemText
                primary={
                  "aws Lightsail Redmine インスタンス によるチケットサービス"
                }
              />
            </ListItemButton>
          </List>
          <List>
            <ListItemButton
              component="a"
              href="https://qiita.com/unr/items/0fa80d1bca9c46235e9f"
            >
              <ListItemText
                primary={
                  "aws Lightsail WordPress インスタンス による Webページの配信"
                }
              />
            </ListItemButton>
          </List>
          <List>
            <ListItemButton
              component="a"
              href="https://qiita.com/unr/items/56f38111d04d09c23983"
            >
              <ListItemText
                primary={"aws S3 + CloudFront による静的 Web ページの配信"}
              />
            </ListItemButton>
          </List>
          <List>
            <ListItemButton
              component="a"
              href="https://qiita.com/ishi32/private/1962478e9855375a4c4c"
            >
              <ListItemText
                primary={"DDoS に対する aws のベストプラクティス"}
              />
            </ListItemButton>
          </List>
          <List>
            <ListItemButton
              component="a"
              href="https://github.com/unrcom/devenv_mac_intelcpu"
            >
              <ListItemText
                primary={
                  "Mac (Intel chip) での開発に必要なツールのインストール"
                }
              />
            </ListItemButton>
          </List>
          <List>
            <ListItemButton
              component="a"
              href="https://github.com/unrcom/devenv_docker_react"
            >
              <ListItemText
                primary={
                  "Docker container を用いた React + Redux Toolkit + TypeScript による Webフロントエンド開発環境の構築"
                }
              />
            </ListItemButton>
          </List>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Style;
