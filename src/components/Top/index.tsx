/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import BaseTag from "@src/helpers/baseTag";
import { resetCss } from "@src/helpers/renderToStaticMarkup/resetCss";

export default function Top() {
  return (
    <>
      <Global
        styles={css`
          ${resetCss}
        `}
      />
      <div>
        <img
          src="https://basefile.akamaized.net/devtemplate-base-shop/64ad55cb6d4bf/topFirst.png"
          alt="トップ画像1"
        />
        {BaseTag("LogoTag")}
        <h1
          css={css`
            color: green;
          `}
        >
          ようこそ！XX商店へ
        </h1>
        <ul>
          <li>
            <a href={BaseTag("ContactPageURL") as string}>お問い合わせ</a>
          </li>
          <li>
            <a href={BaseTag("PrivacyPageURL") as string}>
              プライバシーポリシー
            </a>
          </li>
          <li>
            <a href={BaseTag("LawPageURL") as string}>特定商取引法</a>
          </li>
        </ul>
        {BaseTag("BASEMenuTag")}

        <div>
          <h3>商品ページに必ず付与する内容</h3>
          {BaseTag("ItemAttentionTag")}
          {BaseTag("IllegalReportTag")}
        </div>
      </div>
    </>
  );
}
