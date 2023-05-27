import{_ as e,c as t,o as a,R as s}from"./chunks/framework.27a1c15b.js";const i="/states.png",o="/statustransition.png",r="/toggleswitch.png",d="/pause.gif",S=JSON.parse('{"title":"SIM Status","description":"","frontmatter":{},"headers":[],"relativePath":"guide/simstatus.md","lastUpdated":1685161690000}'),n={name:"guide/simstatus.md"},c=s('<h1 id="sim-status" tabindex="-1">SIM Status <a class="header-anchor" href="#sim-status" aria-label="Permalink to &quot;SIM Status&quot;">​</a></h1><p>This chapter describes SIM life cycle stages.</p><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p><img src="'+i+'" alt="all states"></p><table><thead><tr><th>Status</th><th>Description</th><th>Billing</th></tr></thead><tbody><tr><td><code>Pre-activated</code></td><td>SIM is in test.active stage</td><td><code>not started</code></td></tr><tr><td><code>Active</code></td><td>SIM is fully activated and in use</td><td><code>started</code></td></tr><tr><td><code>Paused</code></td><td>SIM service is temporarily suspended</td><td><code>suspended</code></td></tr><tr><td><code>Expired</code></td><td>SIM service is expired but can be renewed</td><td><code>stopped</code></td></tr><tr><td><code>Terminated</code></td><td>SIM service is terminated and can NOT be renewed</td><td><code>ended</code></td></tr></tbody></table><h2 id="sim-status-transition" tabindex="-1">SIM Status Transition <a class="header-anchor" href="#sim-status-transition" aria-label="Permalink to &quot;SIM Status Transition&quot;">​</a></h2><p><img src="'+o+'" alt="status transition"></p><h2 id="pre-activated" tabindex="-1">Pre-activated <a class="header-anchor" href="#pre-activated" aria-label="Permalink to &quot;Pre-activated&quot;">​</a></h2><ul><li><p>When SIMs are <strong>shipped</strong>, by default they are set to be in <strong>pre-activated period/state</strong>.</p></li><li><p>SIMs that come with a complementary <strong>Test Package</strong>, (100KB or more, depending on the terms of the service contract), could use the test package service during pre-activated period.</p></li><li><p>Pre-activation period is typically set to be <strong>0~6</strong> months (depending on the terms of the service contract and it could be extended in some cases).</p></li><li><p>At the <strong>expiry</strong> of the pre-activation period, or after the test package quota is <strong>used up</strong>, <strong>whichever occurs earlier</strong>, SIMs will automatically go into <strong>&quot;activated(active)&quot;</strong> state, when the <strong>billing starts</strong>.</p></li></ul><h2 id="active" tabindex="-1">Active <a class="header-anchor" href="#active" aria-label="Permalink to &quot;Active&quot;">​</a></h2><blockquote><p>or <code>Activated</code></p></blockquote><p>Once SIMs are in activated state, the billing starts. Services are provided according to the <strong>bundle</strong> assigned to the SIMs.</p><p>If the bundle comes with a <strong>service warranty/validity period</strong>, the service will automatically <strong>expire</strong> at the end of the period should there be no renewal.</p><h2 id="paused" tabindex="-1">Paused <a class="header-anchor" href="#paused" aria-label="Permalink to &quot;Paused&quot;">​</a></h2><p>In activated state, when you forsee a period of inactivity of the SIMs, you could suspend the service until the need to use them rises again. The SIMs will then be placed in <code>paused</code> state when the billing temporarily halts.</p><div class="info custom-block"><p class="custom-block-title">More Info</p><p><a href="./../sim/pausesim.html">Pause a SIM - Deep Dive</a></p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Toggle between <code>paused</code> and <code>active</code> on the SIM List by using toggle switch. <img src="'+r+'" alt="toggleswitch"><img src="'+d+'" alt="pause gif"></p><p>The operations are done in real-time and effect is immediate.</p></div><h2 id="expired" tabindex="-1">Expired <a class="header-anchor" href="#expired" aria-label="Permalink to &quot;Expired&quot;">​</a></h2><p>When service reaches the end of validity period, the SIMs are <code>expired</code> and the services are stopped. <strong>A typical grace period of 1-6 months applies.</strong></p><p>Before grace period expires, if there is a <strong>renewal</strong>, SIM will be back to activated/ pre-activated state.</p><h2 id="terminated" tabindex="-1">Terminated <a class="header-anchor" href="#terminated" aria-label="Permalink to &quot;Terminated&quot;">​</a></h2><p>At the end of the grace period, SIMs will go into <code>terminated</code> state. More often than not this state is <strong>irreversible</strong> where the services cannot be reinstated.</p>',22),l=[c];function p(h,u,g,m,v,b){return a(),t("div",null,l)}const _=e(n,[["render",p]]);export{S as __pageData,_ as default};
