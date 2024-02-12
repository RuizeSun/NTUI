<!-- 引入 NTUI -->
<!-- NTUI.css 導入 (head 標簽内) -->
<link rel="stylesheet" href="https://adyjek.xghost7.top/resources/ntui.css" />
<!-- NTUI.js 導入 (body 標簽内正文後位置) -->
<script>
	ntui_enableFloating = true; // NTUI 浮動字模塊啓用
</script>
<script src="https://adyjek.xghost7.top/resources/ntui.js"></script>
<!-- 標題及介紹部分 -->
<h1 align="center">
    NextTimeUI (NTUI) v1.0.0
</h1>
<h4 align="center">
    簡單易用， <br/>
    且開放程式碼。
</h4>
<h4 align="center">
    正體中文 | 
    <a href="#">English</a> | 
    <a href="#">しろうと</a> | 
    <a href="#">Русский язык</a> | 
    <a href="#">Deutsch</a> | 
    <a href="#">Français</a> 
</h4>
<h6 align="center"><i>* 只有正體中文，其他都沒有</i></h6>
<br/><br/>

NTUI 是 Fenyi Computing Studios 設計並開發的一款簡單易用的 CSS/JS UI，美觀、開放源代碼及易於使用的特性是其經常在工作室網站上出現。

> 開放程式碼是程式設計的重要精神之一，我們使用、參考、二次創作社區裡的作品。我們開放了諸多作品的程式碼，就例如 NTUI 和 NSearchAPI。

<br/>

<!-- 正文 -->

# 使用

使用 NTUI 有兩種方法：

1. 從 Github CDN 導入 NTUI：

```html
<!-- NTUI.css 導入 (head 標簽内) -->
<link rel="stylesheet" href="https://ruizesun.github.io/ntui/ntui.css" />
<!-- NTUI.js 導入 (body 標簽内正文後位置) -->
<script>
	ntui_enableFloating = false; // NTUI 浮動字模塊啓用
</script>
<script src="https://ruizesun.github.io/ntui/ntui.js"></script>
```

2. 從本地文件導入 NTUI：

```html
<!-- NTUI.css 導入 (head 標簽内) -->
<link rel="stylesheet" href="./resources/ntui.css" />
<!-- NTUI.js 導入 (body 標簽内正文後位置) -->
<script>
	ntui_enableFloating = false; // NTUI 浮動字模塊啓用
</script>
<script src="./resources/ntui.js"></script>
```

# 佈局

佈局功能能將一行内容分爲多排擺放，也可基於此基礎進行更多用途。
|Class 標簽|用途|限制|
|--|--|--|
|.ct|用於設定一個佈局框架(或稱“佈局盒子”)|僅 div 標簽|
|.ct-row|用於在佈局框架内設定一行内容(稱爲“佈局行”)|僅 div 標簽，需為 .ct 的子元素。|
|.ct-<1~12 數字>|用於在佈局行内設定小佈局盒子(數字為小佈局盒子之寬度)，在一個佈局行内的小佈局盒子寬度總和不超過 12 。超過 12 的不顯示。|僅 div 標簽，需為 .ct->.ct-row 的子元素。|

以下是佈局運用示例：

<div class="ct">
	<div class="ct-row">
		<div class="ct-6">第一個“小佈局盒子”</div>
		<div class="ct-6">第二個“小佈局盒子”</div>
	</div>
</div>

```html
<div class="ct">
	<div class="ct-row">
		<div class="ct-6">第一個“小佈局盒子”</div>
		<div class="ct-6">第二個“小佈局盒子”</div>
	</div>
</div>
```

在這裏，兩個小佈局盒子的 class 都爲 ct-6，即兩個盒子的寬度都爲 6÷12=50% ，50% 窗口寬度。當然，也可以嘗試不同組合，例如三個 ct-4 、一個 ct-6 與兩個 ct-3 ，只要想得到，沒有做不到。

# 屬性

NTUI 中有許多方便調整文字或元素屬性的的屬性 class。
|Class 標簽|用途|限制|
|--|--|--|
|.opacity-<100、75、50、25、0>|將不透明度分別設爲 100%、75%、50%、25%、0%|參見 opacity 屬性 CSS 限制。|
|.fsize-rem|根據網路瀏覽器的默認字體大小設定|參見 font-size 屬性 CSS 限制。|
|.fsize-small|字體大小設爲 12px。|參見 font-size 屬性 CSS 限制。|
|.fsize-xsmall|字體大小設爲 8px。|參見 font-size 屬性 CSS 限制。|
|.fsize-xlsmall|字體大小設爲 6px。|參見 font-size 屬性 CSS 限制。|
|.fsize-2xlsmall|字體大小設爲 4px。|參見 font-size 屬性 CSS 限制。|
|.fsize-large|字體大小設爲 24px。|參見 font-size 屬性 CSS 限制。|
|.fsize-larger|字體大小設爲 32px。|參見 font-size 屬性 CSS 限制。|
|.fsize-more-larger|字體大小設爲 48px。|參見 font-size 屬性 CSS 限制。|

# 模塊

## 導航欄

| Class 標簽          | 用途                   | 限制                                           |
| ------------------- | ---------------------- | ---------------------------------------------- |
| .navbar             | 導航欄框架             | 僅 div 標簽。                                  |
| .navbar -> ul       | 導航欄列表框架         | 僅 ul 標簽。需為 .navbar 的子元素。            |
| .navbar -> ul -> li | 導航欄列表元素         | 僅 li 標簽。需為 .navbar -> ul 的子元素。      |
| .navbar -> li -> a  | 導航欄列表框架下超鏈接 | 僅 a 標簽。需爲 .navbar -> ul -> li 的子元素。 |
| .navbar-logo        | 導航欄超鏈接重點顯示   | 僅 a 標簽。需爲 .navbar -> ul -> li 的子元素。 |

以下是示例：

<div class="navbar">
	<ul>
		<li>
			<a class="navbar-logo" href="#home">標題</a>
		</li>
		<li><a href="#news">公告</a></li>
		<li><a href="#studios">工作室</a></li>
	</ul>
</div>

```html
<div class="navbar">
	<ul>
		<li>
			<a class="navbar-logo" href="#home">標題</a>
		</li>
		<li><a href="#news">公告</a></li>
		<li><a href="#studios">工作室</a></li>
	</ul>
</div>
```

## 按鈕與鏈接

| Class 標簽 | 用途              | 限制                |
| ---------- | ----------------- | ------------------- |
| .link      | NTUI 超鏈接樣式。 | 僅 a 標簽。         |
| .btn       | NTUI 按鈕樣式。   | 僅 a、button 標簽。 |

本節無示例。

## 背景

| Class 標簽  | 用途       | 限制                 |
| ----------- | ---------- | -------------------- |
| .background | 背景樣式。 | 僅 img、video 標簽。 |

以下為背景樣式（影片）程式碼：

```html
<video class="background" id="background" autoplay muted loop>
	<source src="./resources/index_bgvideo.mp4" type="video/mp4" />
	Your browser doesn't support the video playing module. Please update your
	browser.
</video>
```

## 浮動字

| Class 標簽                   | 用途               | 限制                                               |
| ---------------------------- | ------------------ | -------------------------------------------------- |
| .floating-ct                 | 浮動字框架。       | 僅 div 標簽。                                      |
| .floating-ct -> _無標簽文字_ | 浮動字標題。       | 無標簽。                                           |
| .floating-subtitles-ct       | 浮動字子標題框架。 | 僅 div 標簽。需爲 .floating-ct 的子元素            |
| .floating-subtitle           | 浮動字子標題       | 僅 span 標簽。需爲 .floating-subtitles-ct 的子元素 |

> 使用前要對配置文件進行調整，啓用浮動字模塊。部分 Markdown 解釋器可能無法顯示，或需要進行設置調整。

以下爲示例：

<div class="floating-ct">
    你好，
    <div class="floating-subtitles-ct">
        <span class="floating-subtitle" floating-show>世界1。</span>
        <span class="floating-subtitle">世界2。</span>
        <span class="floating-subtitle">世界3。</span>
        <span class="floating-subtitle">世界4。</span>
    </div>
</div>

```html
<div class="floating-ct">
	你好，
	<div class="floating-subtitles-ct">
		<span class="floating-subtitle" floating-show>世界1。</span>
		<span class="floating-subtitle">世界2。</span>
		<span class="floating-subtitle">世界3。</span>
		<span class="floating-subtitle">世界4。</span>
	</div>
</div>
```
