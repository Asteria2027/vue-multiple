<template>
  <div class="infoDisplayBar">
    <div id="infoDis" class="infoDis">
      <div style="height: 47px">
        <div class="infoDis_bar" id="infoDis_bar">
          <ul>
            <li data-id="infoDis_con_aboutWe"><a href="/getInfoDisclosure.do">组织信息</a></li>
            <li data-id="infoDis_con_filingInformation"><a href="/filingInformation.do">备案信息</a></li>
            <li data-id="infoDis_con_reviewInformation"><a href="/reviewInformation.do">审核信息</a></li>
            <li data-id="infoDis_con_operationData"><a href="/yybg_list.do">运营信息</a></li>
            <li data-id="infoDis_con_bankDepository"><a href="/riskManagement.do">风险管理信息</a></li>
            <li data-id="infoDis_con_news"><a href="/queryNoticesListPage.do">新闻公告</a></li>
            <li data-id="infoDis_con_confirmInfo"><a href="/confirmInfo.do">信批确认函</a></li>
            <li data-id="infoDis_con_riskTip" class="cur"><a href="/banner5Company.do">风险提示</a></li>
            <li data-id="infoDis_con_partners"><a href="/partner.do">合作机构</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    components: {

    }
  }
</script>

<style lang='less' scope>

.infoDisplayBar {
  .infoDis .infoDis_bar {
    height: 47px;
    background-color: #d3333b;
    z-index: 8;
  }
  .infoDis .infoDis_bar ul {
    width: 1080px;
    margin: 0 auto;
  }
  .infoDis .infoDis_bar ul li {
    float: left;
    width: 120px;
    line-height: 47px;
    color: #fff;
    font-size: 16px;
    text-align: center;
    cursor: pointer;
  }
  .infoDis .infoDis_bar ul li a {
    color: #fff;
    display: block;
    width: 100%;
  }
  .infoDis .infoDis_bar ul li.cur {
    background-color: #c8000b;
  }
}
 
</style>
