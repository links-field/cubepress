import{_ as s,c as r,z as t,E as c,R as e,a as o,o as i,G as n}from"./chunks/framework.27a1c15b.js";const d="/toolbar.png",l="/menubar.png",h="/advancedsearch.png",p="/searchkeywords.png",u="/searchiccid.png",m="/3cards.png",w=JSON.parse('{"title":"📶 SIMs","description":"","frontmatter":{},"headers":[],"relativePath":"guide/checksim.md","lastUpdated":1691744872000}'),g={name:"guide/checksim.md"},b=e('<h1 id="📶-sims" tabindex="-1">📶 SIMs <a class="header-anchor" href="#📶-sims" aria-label="Permalink to &quot;📶 SIMs&quot;">​</a></h1><p>You may check the basic information of the SIMs from SIM menu in the sidebar, and we offer enriched features above and beyond.</p><h2 id="table-toolbar-⚙️" tabindex="-1">Table Toolbar ⚙️ <a class="header-anchor" href="#table-toolbar-⚙️" aria-label="Permalink to &quot;Table Toolbar ⚙️&quot;">​</a></h2><blockquote><p>Configuration of the table</p></blockquote><p><img src="'+d+'" alt="toolbar"></p><ul><li><strong>Height Setting</strong> for table rows: <em>default, medium or compact.</em></li><li><strong>Column Setting</strong> to check only the columns you&#39;d like to see</li><li><strong>Refresh Table Data</strong> clear all the filters and pull the latest data</li><li><strong>Global Search Bar</strong> to search by ICCID/IMEI/MSISDN</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Quickly find the SIM by entering <strong>partial ending digits</strong> in global search bar. Searching will happen in order of <code>ICCID</code>, <code>IMEI</code> then <code>MSISDN</code> and return all the matched results.</p><p>E.g.: <code>023801</code>=&gt;</p><ul><li>record 1: ICCID <code>89013113804763023801</code>,</li><li>record 2: ICCID <code>89013113804763079976</code>, IMEI <code>230A8X023801</code></li></ul><p>You could also search for <strong>multiple SIMs</strong> at one time by seperating the number with &#39;,&#39;</p><p>E.g.: <code>023801, 8802</code> =&gt;</p><ul><li>record 1: ICCID <code>89013113804763023801</code></li><li>record 2: ICCID <code>89013113804763948802</code></li></ul></div><hr><h2 id="table-menu-bar-⚡️" tabindex="-1">Table Menu Bar ⚡️ <a class="header-anchor" href="#table-menu-bar-⚡️" aria-label="Permalink to &quot;Table Menu Bar ⚡️&quot;">​</a></h2><blockquote><p>Actions present in menu bar allow users to perform quick bulk actions on selected SIMs (1 or more).</p></blockquote><p><img src="'+l+'" alt="menubar"></p><ul><li><p>↓ ：Export the selected SIMs or all SIMs into excel file</p><ul><li>Selected SIMs: checked SIMs from current page and other pages</li><li>All SIMs: all the SIMs in the current table of all pages</li></ul></li><li><p>Edit tags</p></li><li><p>Edit notes</p></li><li><p>Send SMS to the selected SIM</p></li><li><p>Edit device name</p></li><li><p>Transfer SIMs</p></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Edit tags or notes in bulk will <strong>override</strong> the existing tags/notes.</p></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p><strong>Transfer SIMs</strong> For more information on how to transfer SIMs between organisations, please check: <a href="/sim/transfer.html">Transfer SIM How-to</a></p></div>',14),f={id:"advanced-sim-search",tabindex:"-1"},I=o("Advanced SIM Search "),S=o(),M=t("a",{class:"header-anchor",href:"#advanced-sim-search","aria-label":'Permalink to "Advanced SIM Search <Badge type="danger" text="NEW"/>"'},"​",-1),_=e('<p><img src="'+h+'" alt="advancedsearch"></p><p><strong>Advanced Search</strong> offers a streamlined and efficient way to locate the SIMs you need, reducing the time and effort required. You can use a combination of filters, with default logical relationship of <strong>AND</strong> (<code>&amp;&amp;</code>), to query the SIMs you need.</p><p>Click the search bar and select from the list of supported keywords and select/input the value for each condition.</p><p><img src="'+p+'" alt="searchkeywords"></p><p>Please be noted that there are 4 types of operators to define the condition:</p><table><thead><tr><th>Operator</th><th>Definition</th><th>Example</th><th>Result</th></tr></thead><tbody><tr><td>=</td><td>exact match</td><td>ICCID <code>=</code> <code>892023832048402010001</code></td><td>found the SIM that has exact ICCID of xxxx001</td></tr><tr><td>in</td><td>or, match any of the value</td><td>Status <code>in</code> ( <code>pre-activated</code>, <code>active</code> )</td><td>found a list of SIMs that are either in pre-activated or active status</td></tr><tr><td>&gt;=, &lt;=, between</td><td>number range</td><td>Usage between (<code>1</code>, <code>100</code>)</td><td>found a list of SIMs that has a current cyclic usage of between 1 - 100MB, inclusive of both values.</td></tr><tr><td>~</td><td>like, fuzzy search</td><td>Device name <code>~</code> <code>Fleet</code></td><td>found SIMs with device name <code>fleet abc</code>, <code>fleet US</code>, <code>US Fleet 183B</code></td></tr></tbody></table><div class="warning custom-block"><p class="custom-block-title">NOTICE</p><p>But do note that: combining two conflicting search conditions, could result in <code>no data</code> found.</p><p>For example: <code>ICCID</code> <code>=</code> <code>8910304824984911130</code> <code>IMSI</code> <code>=</code> <code>1038</code></p><p>There will be no SIM that could match these two conditions at the same time.</p></div><h2 id="sim-list-🔢" tabindex="-1">SIM List 🔢 <a class="header-anchor" href="#sim-list-🔢" aria-label="Permalink to &quot;SIM List 🔢&quot;">​</a></h2><p>Data columns of the SIM List are:</p><table><thead><tr><th>Columns</th><th>Description</th><th>Remarks</th></tr></thead><tbody><tr><td><strong>Tags</strong></td><td>Customizable tags for SIMs.Tags can be used to filter and group SIMs.</td><td>Max. 5 tags per SIM and max. 10 characters per tag</td></tr><tr><td><strong>Name</strong></td><td>Device name for SIMs.</td><td>Max. 40 characters</td></tr><tr><td><strong>ICCID</strong></td><td>The unique <strong>I</strong>ntegrated <strong>C</strong>ircuit <strong>C</strong>ard <strong>Id</strong>entification Number of the SIM by global standards.</td><td></td></tr><tr><td><strong>MSISDN</strong></td><td><strong>M</strong>obile <strong>S</strong>tation <strong>I</strong>ntegrated <strong>S</strong>ervices <strong>D</strong>igital <strong>N</strong>etwork is a unique number that can be useful in calls or sms service.</td><td></td></tr><tr><td><strong>Status</strong></td><td>It indicates the current life cycle stage of the SIM.</td><td>refer to <a href="/guide/simstatus.html">SIM status</a> for more details.</td></tr><tr><td><strong>Cycle Usage</strong></td><td>Data usage of the current service cycle</td><td>day, month or year</td></tr><tr><td><strong>Limit</strong></td><td>Data limit of the current service cycle</td><td>day, month or year</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You can also quick search a SIM by simply <strong>entering its ending digits</strong> in the ICCID or MSISDN column search bar.</p><p><strong>Multi-search mode</strong> is supported here too.</p><p><img src="'+u+'" alt="search imei"></p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Hit <code>Refresh</code> icon button 🔄 in the tool bar to clear all the column <strong>search, sorting and searching</strong> citeria.</p></div><h2 id="sim-collpasible-detail-🔽" tabindex="-1">SIM Collpasible Detail 🔽 <a class="header-anchor" href="#sim-collpasible-detail-🔽" aria-label="Permalink to &quot;SIM Collpasible Detail 🔽&quot;">​</a></h2><p>You may press ▶ to expand more SIM detail. There are 3 cards:</p><ul><li><strong>Basic</strong></li><li><strong>Connection</strong></li><li><strong>Service</strong></li></ul><p><img src="'+m+'" alt="3cards"></p><h3 id="basic-info-card" tabindex="-1">Basic Info Card <a class="header-anchor" href="#basic-info-card" aria-label="Permalink to &quot;Basic Info Card&quot;">​</a></h3><p>Basic information of a SIM.</p><div class="info custom-block"><p class="custom-block-title">Go to</p><p><a href="./simbasic.html">SIM - Basic</a></p></div><h3 id="connection-card" tabindex="-1">Connection Card <a class="header-anchor" href="#connection-card" aria-label="Permalink to &quot;Connection Card&quot;">​</a></h3><p>In connection section, you can see a consolidated information of SIM&#39;s most current status of connection, the last connected time and place, and we even offer diagnositics in the event of disconnection.</p><div class="info custom-block"><p class="custom-block-title">Go to</p><p><a href="./simconnection.html">SIM - Connection</a></p></div><h3 id="service-card" tabindex="-1">Service Card <a class="header-anchor" href="#service-card" aria-label="Permalink to &quot;Service Card&quot;">​</a></h3><p>Services available with the SIM.</p><div class="info custom-block"><p class="custom-block-title">Go to</p><p><a href="./simservice.html">SIM - Service</a></p></div>',25);function v(k,C,y,T,x,D){const a=n("Badge");return i(),r("div",null,[b,t("h2",f,[I,c(a,{type:"danger",text:"NEW"}),S,M]),_])}const N=s(g,[["render",v]]);export{w as __pageData,N as default};
