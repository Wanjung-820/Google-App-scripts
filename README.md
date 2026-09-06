# money-tracker

## Money Tracker(index.html)

個人理財追蹤工具。單一 HTML 檔、純 JavaScript、零依賴、不需要後端。

**這個檔案裡沒有任何個人財務數字。** 收入、房租、存錢、分期、旅行規劃全部由你在
App 裡自己填,只存在你這台裝置的瀏覽器 localStorage,不會上傳到任何伺服器。
所以這個 repo 就算公開,也不會洩漏你的財務狀況。

### 功能

| 頁面 | 內容 |
|---|---|
| 日常 | 本月/今天還能花多少(扣掉該存的、固定支出、分期、已花的),快速記一筆 |
| 月曆 | 整月哪天花了多少、每週小計 |
| 資產 | 總資產、股票持股明細與配置分析、股息行事曆、Goal/Task 目標系統(有數字密碼鎖) |
| 時間軸 | 從當前真實月份往後 8 個月,依你填的分期與規劃自動推算現金流 |

### 上線方式(GitHub Pages)

1. repo 的 **Settings → General**,拉到最下面 **Danger Zone → Change visibility → 改成 Public**
   (免費方案的 GitHub Pages 只能部署 public repo)
2. **Settings → Pages**
3. Source 選 **Deploy from a branch**
4. Branch 選 `main`(或要部署的分支),資料夾 `/ (root)`,按 **Save**
5. 等 1–2 分鐘,網址是 `https://wanjung-820.github.io/money-tracker/`

### 手機加入主畫面(iPhone)

用 **Safari** 開網址 → 下方分享鈕 → 「加入主畫面」→ 命名 →「加入」。
之後從主畫面點開就是全螢幕、無網址列,跟 App 一樣。

### 資料保存

- 資料存在 localStorage,綁定「同一個網域 + 同一個瀏覽器 + 同一個開啟方式」。
- **iOS 上這幾個是分開的儲存空間,互不相通**:Safari 開網址、主畫面捷徑點開、
  從「檔案」App 開 HTML、其他 App 的內建瀏覽器。固定從主畫面圖示進來最保險。
- Safari 會清掉 7 天沒互動過的網站資料;主畫面的獨立 App 不受這個規則影響。
- 所以**請定期用「設定 → 備份與還原 → 分享 / 存到檔案」匯出一份**,存到
  iCloud 雲碟或傳給自己。資料不見時用同一頁的「還原」貼回來即可。
- 備份檔不含資產頁的密碼,還原後重設一組就好。
- 資產頁的數字密碼鎖只是遮擋隨手偷看,不是加密。

### 其他

`*.gs` 是 Google Apps Script 的雲端硬碟工具,與本 App 無關。
