<template>
  <div class="site-nav">
    <div class="heard">
      <div class="heard_top">
        <div class="heard_bop_inner">
          <div class="heard_top_left">
              <div class="heard_top_icon">客服热线：<span class="fw">400-867-9888</span>（工作时间：09:00-18:00）</div>
              <div class="qq_group fl">
                <a target="_blank" href="http://shang.qq.com/wpa/qunwpa?idkey=53df0d98cfb9f6d868c1c31f0ebac6a64691b82746e26df4c628426557f62662">
                  <img src="./qq_group3.png"> 加入QQ群
                </a>
              </div>
              <div class="heard_top_appicon">
                <img src="./new_donw_app.png">
                <a title="下载手机客户端" href="/bannerApp.do" target="_blank" class="item_a">手机APP</a>
                <div class="app_downewm" style="display: none;">
                  <img src="./donw_app_ewm.jpg">
                  <p class="first">下载手机APP</p><p class="second">[联金所]</p>
                </div>
              </div>
              <div class="clear"></div>
          </div>
          <div class="heard_top_right">
            <ul>
              <li class="heard_top_li heard_li_cg">
                <a class="changeLink" href="https://bank.uf-club.com/">进入普通版</a>
              </li>
              <li class="heard_top_li"><a title="帮助中心" href="/yybg_list.do?id=fees" target="_blank">资费说明</a></li>
              <li class="heard_top_li"><a title="帮助中心" href="/helpCentreInit.do" target="_blank">帮助中心 </a></li>
              <li class="heard_top_li" id="heard_top_li_huodong"><a title="最新活动" href="/latestEventInit.do">最新活动</a></li>
              <li class="heard_top_lia"><a href="/regInitZhuce.do" title="注册">注册</a></li>
              <li class="heard_top_li" id="heard_top_li_login"><a href="/login.do" id="user_loginjdl">登录</a></li>
            </ul>
          </div>
          <div class="clear"></div>
        </div>
      </div>
      <div class="heard_bottom">
        <div class="heard_bottom_inner">
          <h1 class="heard_logo">
            <img class="logoTip_cg" src="./logoTip_cg.jpg">
            <a href="/">
              <img class="heard_logo_img" src="./logo_a_02.png" alt="联金所,网贷借贷信息中介平台,p2p平台,p2p投资理财">
            </a>
          </h1>
          <div class="heard_nav">
            <ul>
              <li class="heard_nav_myaccount">
                <a href='/#/memberCentre' title="会员中心" class="huiyanzx">
                  <img class="heard_nav_slid_img" src="./heard_top_account.png" data-src="heard_top_account2.png" data-src2="heard_top_account.png" alt="">会员中心
                </a>
              </li>
              <li id="bbsImage"><a title="联金论坛" href="http://bbs.uf-club.com/portal.php?n=jh">联金论坛</a></li>
              <li class="myinvest"><a title="信息披露" id="aboutImage" href="InfoDisplay.html" class="invest" target="_blank">信息披露<img class="myinvest_img" src="./heard_top_xiala.png" alt=""></a>
                <div class="headtipbox" style="display:none;">
                  <div class="head_ximulist">
                    <a href="/getInfoDisclosure.do" class="a_mind"><b>组织信息</b><label></label></a>
                    <a href="/filingInformation.do" class="a_mind"><b>备案信息</b><label></label></a>
                    <a href="/reviewInformation.do" class="a_mind"><b>审核信息</b><label></label></a>
                    <a href="/yybg_list.do" class="a_mind"><b>运营信息</b><label></label></a>
                    <a href="/riskManagement.do" class="a_mind"><b>风险管理信息</b><label></label></a>
                    <a href="/queryNoticesListPage.do" class="yy_mind"><b>新闻公告</b><label></label></a>
                    <a href="/confirmInfo.do"><b></b>信批确认函</a>
                    <a href="banner5Company.do"><b></b>风险提示</a>
                    <a href="/partner.do"><b></b>合作机构</a>
                  </div>
                </div>
              </li>
              <li><a title="新手指引" id="guideImage" href="/guideForNewbie.do">新手指引</a></li>
              <li class="myinvest">
                <a href="/#/myTender" id="investImage" class="invest">
                  我要投标
                  <img class="myinvest_img" src="./heard_top_xiala.png" alt="">
                </a>
                <div class="headtipbox" style="display:none;">
                  <div class="head_ximulist">
                    <a href="/ltlIndex.do" class="a_mind"><b>企业专区</b><label></label>(<span id="avaibleLtl">0</span>)</a>
                    <a href="/carLoanIndex.do" class="a_mind"><b>个人专区</b><label></label>(<span id="avaibleCd">3</span>)</a>
                    <a href="/borrowIndex.do" class="a_mind"><b>散标专区</b><label></label>(<span id="avaibleLjtc">0</span>)</a>
                    <a href="/borrowDebtIndex.do"><b></b>转让专区</a>
                    <a href="/newHandIndex.do"><b></b>新手专享</a>
                  </div>
                </div>
              </li>
              <li><a class="first_index" href="/#/home" style="color: rgb(255, 86, 82);">首页</a></li>
              <div class="clear"></div>
            </ul>
          </div>
          <div class="clear"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang='less' scope>
.site-nav {
  .heard {
    position: relative;
    z-index: 1000;
  }
  .heard_top {
    width: 100%;
    margin: 0 auto;
    height: 36px;
    font-size: 12px;
    background-color: #f6f6f6;
    min-width: 1080px;
  }
  .heard_bop_inner {
    width: 1080px;
    height: 36px;
    margin: 0 auto;
    color: #666666;
  }
  .heard_top_left {
    height: 36px;
    line-height: 36px;
    float: left;
    position: relative;
  }
  .heard_top_icon {
    float: left;
  }
  .heard_top_icon .fw {
    font-weight: 400;
  }
  .heard_top_icon {
    float: left;
  }
  .heard_top .qq_group {
    float: left;
    padding-left: 10px;
    position: relative;
  }
  .heard_top .qq_group a {
    display: block;
    margin: 7px 0 0 0;
    height: 20px;
    line-height: 20px;
    padding: 0 5px 0 22px;
    border-radius: 2px;
    background: #f6f6f6;
    color: #666;
  }
  .heard_top_appicon {
    padding: 0px 6px;
    height: 36px;
    line-height: 36px;
    position: relative;
    float: right;
    color: #484848;
    text-align: center;
    border-left: 1px solid #f8f8f8;
    border-right: 1px solid #f8f8f8;
    cursor: pointer;
    transition: all linear 0.2s;
    z-index: 1000;
  }
  .heard_top_appicon img {
    vertical-align: middle;
    margin-top: -3px;
  }
  .app_downewm {
    width: 111px;
    padding-top: 9px;
    padding-bottom: 10px;
    color: #999999;
    background-color: #ffffff;
    position: absolute;
    left: -14px;
    top: 36px;
    border-left: 1px solid #eeeeee;
    border-right: 1px solid #eeeeee;
    border-bottom: 1px solid #eeeeee;
    display: none;
    border-radius: 8px;
    z-index: 9999;
    box-shadow:0px 4px 4px #e0e0e0;
  }
  .app_downewm p {
    line-height: 20px;
  }
  .app_downewm p.second {
    color: #ff5358;
  }
  .clear {
    clear: both;
  }
  .heard_top_right {
    height: 36px;
    float: right;
  }
  .heard_top_li {
    float: right;
    padding: 0 15px;
    height: 36px;
    line-height: 36px;
    position: relative;
  }
  .heard_top_li .changeLink {
    color: #fff;
    background: #ff5256;
    display: block;
    padding: 0 10px;
    height: 36px;
    line-height: 36px;
  }
  #heard_top_li_huodong {
    height: 12px;
    margin: 12px 0 0 15px;
    line-height: 12px;
  }
  .heard_top_lia {
    float: right;
    height: 36px;
    line-height: 36px;
    padding-left: 15px;
  }
  #heard_top_li_login {
    height: 12px;
    margin: 13px 0 0 15px;
    line-height: 12px;
  }
  .heard_bottom {
    width: 100%;
    margin: 0 auto;
    height: 89px;
    background-color: #fff;
    min-width: 1080px;
    border-bottom: 1px solid #e5e5e5;
  }
  .heard_bottom_inner {
    width: 1080px;
    margin: 0 auto;
    height: 90px;
  }
  .heard_logo {
    float: left;
    width: 380px;
    padding-top: 9px;
    height: 81px;
    position: relative;
  }
  .heard_logo .logoTip_cg {
    position: absolute;
    right: 0px;
    top: 5px;
  }
  .heard_nav {
    float: right;
    width: 700px;
    color: #484848;
    height: 90px;
  }
  .heard_nav ul {
    margin-top: 26px;
  }
  .heard_nav ul li {
    float: right;
    padding: 0 15px;
    position: relative;
    height: 40px;
    line-height: 40px;
  }
  .heard_nav ul li a {
    font-size: 16px;
  }
  .heard_nav ul .myinvest {
    background-color: #FFF;
  }
  .heard_nav ul .myinvest .invest {
    display: block;
    width: 100px;
    text-align: center;
    position: relative;
    z-index: 5555;
    border: 1px solid #fff;
    padding-right: 17px;
  }
  .myinvest_img {
    margin-left: 9px;
    position: absolute;
    top: 18px;
    right: 18px;
  }
  .heard_nav ul li .head_ximulist {
    position: absolute;
    left: 0;
    top: 40px;
    font-size: 14px;
    color: #666;
    width: 117px;
    z-index: 100;
    background-color: #FFF;
    border: 1px solid #eee;
    border-top: 0;
    box-shadow: 0 0 1px #eaeaea;
  }
  .heard_nav ul li .head_ximulist a {
    border-bottom: 1px solid #eee;
    text-align: left;
  }
  .head_ximulist a b {
    font-family: "microsoft yahei";
    font-size: 14px;
    font-weight: 400;
    margin-left: 17px;
  }
  .head_ximulist a label {
    font-family: "microsoft yahei";
    color: #999;
    font-size: 14px;
    margin-right: 3px;
  }
  .heard_nav ul li .head_ximulist {
    position: absolute;
    left: 0;
    top: 40px;
    font-size: 14px;
    color: #666;
    width: 117px;
    z-index: 100;
    background-color: #FFF;
    border: 1px solid #eee;
    border-top: 0;
    box-shadow: 0 0 1px #eaeaea;
  }
  .heard_nav ul li .head_ximulist a {
    border-bottom: 1px solid #eee;
    text-align: left;
  }
  .head_ximulist a span {
    color: #e25353;
  }
}
</style>
