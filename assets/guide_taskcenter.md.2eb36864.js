import{_ as o}from"./chunks/taskcenter.d2ab479e.js";import{_ as d,c as r,z as e,E as s,a as t,R as i,o as c,G as n}from"./chunks/framework.55a7f079.js";const I=JSON.parse('{"title":"Task Center","description":"","frontmatter":{},"headers":[],"relativePath":"guide/taskcenter.md","lastUpdated":1682503135000}'),l={name:"guide/taskcenter.md"},p={id:"task-center",tabindex:"-1"},h=t("Task Center "),u=t(),k=e("a",{class:"header-anchor",href:"#task-center","aria-label":'Permalink to "Task Center <Badge type="tip" text=">1.3"/>"'},"​",-1),_=i('<h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>Cube v1.3 has introduced the task center. Its responsiblities include</p><ul><li><code>Batch Operations</code></li></ul><blockquote><p>such as Transfer SIM, send SMS, and edit notes in bulk</p></blockquote><ul><li><code>Large data export</code></li></ul><blockquote><p>such as SIM export, CDR export</p></blockquote><p>that usually require some time to complete. Users can continue to use CUBE while the task is being processed in the task center.</p><h2 id="feature-set" tabindex="-1">Feature Set <a class="header-anchor" href="#feature-set" aria-label="Permalink to &quot;Feature Set&quot;">​</a></h2><p><img src="'+o+'" alt="task"></p><h3 id="list" tabindex="-1">List <a class="header-anchor" href="#list" aria-label="Permalink to &quot;List&quot;">​</a></h3><p>Task center will present a list of rencent tasks (within 7 days), listed in descending order of creation time. <code>Status</code> shows whether that task is completed, processing or having issues. You could download the report from the link too.</p><h3 id="detail" tabindex="-1">Detail <a class="header-anchor" href="#detail" aria-label="Permalink to &quot;Detail&quot;">​</a></h3><p>By clicking on the task type, the task detail will be presented from the right.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>Tasks will only be kept for 7 days.</li><li>Tasks are not to be managed. They can&#39;t be deleted.</li></ul></div><h2 id="task-center-support" tabindex="-1">Task Center Support <a class="header-anchor" href="#task-center-support" aria-label="Permalink to &quot;Task Center Support&quot;">​</a></h2><table><thead><tr><th>Operations</th><th>Access</th><th>Status</th><th>Page Link</th></tr></thead><tbody><tr><td><code>SIM export</code></td><td>from &#39;SIM&#39;</td><td><code>supported</code></td><td><a href="/cubepress/sim/transfer.html">detail</a></td></tr><tr><td><code>Transfer SIM</code></td><td>from &#39;SIM&#39;</td><td><code>supported</code></td><td></td></tr><tr><td><code>CDR export</code></td><td>from &#39;CDRs&#39;</td><td><code>supported</code></td><td></td></tr><tr><td><code>Edit Tags and notes</code></td><td>from &#39;SIM&#39;</td><td><code>developing</code></td><td></td></tr><tr><td><code>Upload IMEI</code></td><td>from &#39;SIM&#39;</td><td><code>developing</code></td><td></td></tr></tbody></table>',16);function m(b,f,S,T,g,v){const a=n("Badge");return c(),r("div",null,[e("h1",p,[h,s(a,{type:"tip",text:">1.3"}),u,k]),_])}const C=d(l,[["render",m]]);export{I as __pageData,C as default};
