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
          // src="https://basefile.akamaized.net/devtemplate-base-shop/64ad62e3973a9/topSecond.png"
          alt="トップ画像1"
          css={css`
            position: fixed;
            top: 0;
            left: 0;
            z-index: 1;
            width: 100%;
            height: 100%;
            object-fit: cover;
          `}
        />
        <img
          src="https://basefile.akamaized.net/devtemplate-base-shop/64ad61e2c7e74/mahito_hazama_logo23.png"
          alt=""
          css={css`
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            display: block;
            margin: auto;
            width: 500px;
            z-index: 2;
          `}
        />
        <div
          css={css`
            position: relative;
            z-index: 10000;
            margin: 100vh auto 0;
            width: 80%;
            height: 500px;
            background-color: #fff;
            opacity: 0.5;
          `}
        >
          {BaseTag("LogoTag")}
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
      </div>
    </>
  );
}
