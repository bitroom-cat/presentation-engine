import React from "react";
import { SlideProps } from "@/engine/types";

export const Slide10OrmCode: React.FC<SlideProps> = ({ slideIndex, totalSlides }) => {
  return (
    <div className="w-full h-full bg-mono-paper px-12 pt-9 pb-7 justify-between flex flex-col">
<div className="flex items-end justify-between border-b border-mono-line pb-3.5">
<div>
<div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-mono-copper font-semibold mb-1">Project 03 · Core Implementation (Appendix A)</div>
<h2 className="text-[26px] font-extrabold tracking-tight text-mono-ink leading-tight">Site-Aware ORM &amp; Permission Enforcement in Django</h2>
</div>
<span className="font-mono text-[11px] text-mono-muted">models.py &amp; admin.py</span>
</div>
<div className="flex-1 grid grid-cols-12 gap-6 py-4 items-stretch">
{/* Left (58% -> 7 cols): Deep Graphite Syntax-Highlighted Appendix A Code */}
<div className="col-span-7 bg-mono-graphite rounded-[6px] border border-mono-graphiteLine p-5 flex flex-col justify-between">
<div className="flex items-center justify-between pb-2.5 mb-2 border-b border-mono-graphiteLine font-mono text-[11px] text-[#9FAEA9]">
<span>site_isolation_rbac.py</span>
<span className="text-mono-copper">Django 5 · ORM + ModelAdmin</span>
</div>
<pre className="font-mono text-[11.8px] leading-[1.52] text-[#E6E8EC] overflow-hidden flex-1 flex flex-col justify-center"><code><span className="text-[#C65D3B]">from</span> django.contrib <span className="text-[#C65D3B]">import</span> admin
<span className="text-[#C65D3B]">from</span> django.db <span className="text-[#C65D3B]">import</span> models

<span className="text-[#C65D3B]">class</span> <span className="text-[#D4A65A]">SiteQuerySet</span>(models.QuerySet):
    <span className="text-[#C65D3B]">def</span> <span className="text-[#79B4A3]">for_site</span>(self, site_identifier):
        <span className="text-[#C65D3B]">return</span> self.filter(site_identifier=site_identifier)

<span className="text-[#C65D3B]">class</span> <span className="text-[#D4A65A]">SiteManager</span>(models.Manager):
    <span className="text-[#C65D3B]">def</span> <span className="text-[#79B4A3]">get_queryset</span>(self):
        <span className="text-[#C65D3B]">return</span> SiteQuerySet(self.model, using=self._db)

<span className="text-[#C65D3B]">class</span> <span className="text-[#D4A65A]">SiteAwareModel</span>(models.Model):
    site_identifier = models.CharField(max_length=<span className="text-[#9CB3CC]">50</span>, db_index=<span className="text-[#9CB3CC]">True</span>)
    objects = SiteManager()
    <span className="text-[#C65D3B]">class</span> <span className="text-[#D4A65A]">Meta</span>:
        abstract = <span className="text-[#9CB3CC]">True</span>

<span className="text-[#C65D3B]">class</span> <span className="text-[#D4A65A]">SiteScopedAdmin</span>(admin.ModelAdmin):
    <span className="text-[#C65D3B]">def</span> <span className="text-[#79B4A3]">get_queryset</span>(self, request):
        qs = super().get_queryset(request)
        <span className="text-[#C65D3B]">if</span> request.user.is_superuser: <span className="text-[#C65D3B]">return</span> qs
        <span className="text-[#C65D3B]">return</span> qs.filter(site_identifier=request.user.profile.site_identifier)

    <span className="text-[#C65D3B]">def</span> <span className="text-[#79B4A3]">has_module_permission</span>(self, request):
        <span className="text-[#C65D3B]">return</span> request.user.is_superuser <span className="text-[#C65D3B]">or</span> request.user.has_perm(self.opts.app_label)

    <span className="text-[#C65D3B]">def</span> <span className="text-[#79B4A3]">has_change_permission</span>(self, request, obj=<span className="text-[#9CB3CC]">None</span>):
        <span className="text-[#C65D3B]">if</span> request.user.is_superuser: <span className="text-[#C65D3B]">return</span> <span className="text-[#9CB3CC]">True</span>
        <span className="text-[#C65D3B]">if</span> obj <span className="text-[#C65D3B]">is None</span>: <span className="text-[#C65D3B]">return</span> super().has_change_permission(request, obj)
        <span className="text-[#C65D3B]">return</span> obj.site_identifier == request.user.profile.site_identifier</code></pre>
</div>
{/* Right (42% -> 5 cols): 3 Architectural Callout Cards */}
<div className="col-span-5 flex flex-col justify-between gap-4">
<div className="bg-mono-card border border-mono-line border-l-[3px] border-l-mono-pine rounded-r-[6px] p-5 flex-1 flex flex-col justify-center">
<div className="font-mono text-[10.5px] font-bold uppercase tracking-wider text-mono-pine mb-1.5">01 · Database-Layer Enforcement</div>
<p className="text-[13px] text-mono-muted leading-relaxed">
                  Inheriting from abstract <span className="font-mono text-mono-ink text-[12px]">SiteAwareModel</span> guarantees every table carries a B-tree indexed <span className="font-mono text-mono-ink text-[12px]">site_identifier</span>. Isolation lives in the schema and ORM—never solely in frontend UI hiding.
                </p>
</div>
<div className="bg-mono-card border border-mono-line border-l-[3px] border-l-mono-indigo rounded-r-[6px] p-5 flex-1 flex flex-col justify-center">
<div className="font-mono text-[10.5px] font-bold uppercase tracking-wider text-mono-indigo mb-1.5">02 · Automatic Query Interception</div>
<p className="text-[13px] text-mono-muted leading-relaxed">
<span className="font-mono text-mono-ink text-[12px]">SiteManager</span> and overridden <span className="font-mono text-mono-ink text-[12px]">get_queryset()</span> filter rows for every non-superuser before any data reaches views, serializers, or templates.
                </p>
</div>
<div className="bg-mono-card border border-mono-line border-l-[3px] border-l-mono-copper rounded-r-[6px] p-5 flex-1 flex flex-col justify-center">
<div className="font-mono text-[10.5px] font-bold uppercase tracking-wider text-mono-copper mb-1.5">03 · Closing Django’s Default Gap</div>
<p className="text-[13px] text-mono-muted leading-relaxed">
                  Default Django admin exposes registered apps to staff users. Overriding <span className="font-mono text-mono-ink text-[12px]">has_module_permission</span> and object-level <span className="font-mono text-mono-ink text-[12px]">has_change_permission</span> stops both module leakage and direct URL tampering.
                </p>
</div>
</div>
</div>
<div className="flex items-center justify-between pt-2.5 border-t border-mono-line font-mono text-[10.5px] text-mono-muted">
<span>CSEE-713P · Satyam Sharma (23010603066)</span>
<span>Project 03 · Django ORM &amp; ModelAdmin Guards</span>
</div>

    </div>
  );
};
