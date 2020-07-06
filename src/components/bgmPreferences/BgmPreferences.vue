<template>
  <div class="setting-mask">
    <div class="setting">
      <div class="setting-col">
        <div class="setting-left">
          <h3>显示设置</h3>
          <div class="setting-display setting-box">
            <ul>
              <li>
                <label for="newOnly">只显示新番<span class="check on"></span></label><input type="checkbox"
                                                                                       id="newOnly">
              </li>
              <li>
                <label for="newOnly">只显示新番<span class="check"></span></label><input type="checkbox"
                                                                                    id="newOnly">
              </li>
              <li>
                <label for="dayDivide">转到次日</label>
                <div class="number-selector">
                  <a href="#" class="number-control-btn left-arrow">减小</a>
                  <input type="number" id="dayDivide" readonly="readonly" value="24">
                  <a href="#" class="number-control-btn right-arrow disabled">增大</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="setting-right">
          <h3>站点过滤</h3>
          <a href="javascript:;" class="check-all">全选</a>
          <div class="setting-sites setting-box">
            <ul>
              <li>
                <label for="siteAcfun">A站<span class="check"></span></label><input type="checkbox"
                                                                                   name="siteAcfun">
              </li>
              <li>
                <label for="siteBili">B站<span class="check on"></span></label><input type="checkbox"
                                                                                     name="siteBili">
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button class="setting-confirm">确定</button>
      <button class="setting-reset">重置</button>
    </div>
  </div>
</template>

<script>
export default {
name: "BgmPreferences"
}
</script>

<style scoped>

</style>