# Phase 2: 新增关键页面 - 详细设计方案

**执行时间：** Day 3-5  
**预计工时：** 6-8小时  
**目标：** 建立差异化服务页面

---

## 📋 任务清单

- [ ] 2.1 Factory Verification 页面
- [ ] 2.2 Supplier Match 页面  
- [ ] 2.3 Sample Program 页面
- [ ] 2.4 更新导航栏
- [ ] 2.5 本地测试
- [ ] 2.6 部署到Vercel

---

## 2.1 Factory Verification 页面

### 页面定位

> **"降低采购风险的专业验厂服务"**

这是你的**核心差异化服务**，体现：
- BYD制造背景
- 工程化验厂标准
- 不是普通的"supplier audit"

### 文件位置

`silkbridge/src/app/factory-verification/page.tsx`

### 页面结构

#### Section 1: Hero

```tsx
<section className="pt-32 pb-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700">
  <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
    <h1 className="text-4xl lg:text-5xl font-bold text-white">
      Factory Verification Service
    </h1>
    <p className="mt-6 text-xl text-white/80">
      Reduce sourcing risks through professional factory audits
    </p>
    <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto">
      Former BYD factory manager conducts on-site verification of EV charging 
      manufacturers. We check certifications, production capability, QC processes, 
      and export experience using OEM-level evaluation standards.
    </p>
  </div>
</section>
```

#### Section 2: What We Verify

```tsx
<section className="py-20 lg:py-28 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-12">
    <h2 className="text-3xl lg:text-4xl font-bold text-center">
      What We Verify
    </h2>
    <p className="mt-4 text-text-secondary text-center text-lg max-w-2xl mx-auto">
      Every verification follows the same standards I used at BYD for supplier evaluation.
    </p>

    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Certifications */}
      <div className="p-6 border border-border rounded-xl">
        <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center">
          <ShieldCheck className="text-orange-500" size={24} />
        </div>
        <h3 className="mt-4 text-xl font-semibold">Certifications</h3>
        <p className="mt-3 text-text-secondary">
          Verify UL2251, IEC 62196, CE, TUV, CCC certificates are real and current. 
          Check certificate numbers against official databases. Confirm factory name 
          matches certificate holder.
        </p>
      </div>

      {/* Production Lines */}
      <div className="p-6 border border-border rounded-xl">
        <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center">
          <Factory className="text-orange-500" size={24} />
        </div>
        <h3 className="mt-4 text-xl font-semibold">Production Lines</h3>
        <p className="mt-3 text-text-secondary">
          Inspect injection molding machines, cable assembly lines, testing equipment. 
          Verify production capacity matches claimed output. Check equipment maintenance 
          and calibration records.
        </p>
      </div>

      {/* QC Process */}
      <div className="p-6 border border-border rounded-xl">
        <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center">
          <ClipboardCheck className="text-orange-500" size={24} />
        </div>
        <h3 className="mt-4 text-xl font-semibold">QC Process</h3>
        <p className="mt-3 text-text-secondary">
          Review incoming inspection, in-process control, final testing procedures. 
          Check quality documentation and traceability systems. Verify testing equipment 
          for EV-specific safety tests.
        </p>
      </div>

      {/* OEM Capability */}
      <div className="p-6 border border-border rounded-xl">
        <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center">
          <Package className="text-orange-500" size={24} />
        </div>
        <h3 className="mt-4 text-xl font-semibold">OEM Capability</h3>
        <p className="mt-3 text-text-secondary">
          Assess custom tooling capability, packaging design, logo printing, private 
          labeling. Check MOQ flexibility and tooling cost structure. Review previous 
          OEM projects.
        </p>
      </div>

      {/* Export Experience */}
      <div className="p-6 border border-border rounded-xl">
        <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center">
          <Globe className="text-orange-500" size={24} />
        </div>
        <h3 className="mt-4 text-xl font-semibold">Export Experience</h3>
        <p className="mt-3 text-text-secondary">
          Verify international shipping experience, customs documentation capability, 
          overseas client references. Check English communication ability and 
          responsiveness.
        </p>
      </div>

      {/* Safety Compliance */}
      <div className="p-6 border border-border rounded-xl">
        <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center">
          <AlertTriangle className="text-orange-500" size={24} />
        </div>
        <h3 className="mt-4 text-xl font-semibold">Safety Compliance</h3>
        <p className="mt-3 text-text-secondary">
          Confirm understanding of EV safety standards (UL2251, IEC 62196). 
          Check high-voltage testing capability. Verify material compliance 
          (RoHS, REACH).
        </p>
      </div>
    </div>
  </div>
</section>
```

#### Section 3: Verification Process

```tsx
<section className="py-20 lg:py-28 bg-gray-50">
  <div className="max-w-5xl mx-auto px-6 lg:px-12">
    <h2 className="text-3xl lg:text-4xl font-bold text-center">
      Verification Process
    </h2>
    
    <div className="mt-16 space-y-8">
      {/* Step 1 */}
      <div className="flex gap-6">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg">
          1
        </div>
        <div>
          <h3 className="text-xl font-semibold">Submit Factory Information</h3>
          <p className="mt-2 text-text-secondary">
            Provide factory name, location, and products. Or let us recommend 
            verified suppliers based on your requirements.
          </p>
        </div>
      </div>

      {/* Step 2 */}
      <div className="flex gap-6">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg">
          2
        </div>
        <div>
          <h3 className="text-xl font-semibold">On-Site Visit</h3>
          <p className="mt-2 text-text-secondary">
            We conduct on-site factory visit within 3-5 business days. 
            Inspection takes 2-4 hours depending on factory size and complexity.
          </p>
        </div>
      </div>

      {/* Step 3 */}
      <div className="flex gap-6">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg">
          3
        </div>
        <div>
          <h3 className="text-xl font-semibold">Detailed Report</h3>
          <p className="mt-2 text-text-secondary">
            Receive comprehensive verification report with photos, findings, 
            and risk assessment. Report includes production line photos, 
            certificate verification, and capability evaluation.
          </p>
        </div>
      </div>

      {/* Step 4 */}
      <div className="flex gap-6">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg">
          4
        </div>
        <div>
          <h3 className="text-xl font-semibold">Recommendation</h3>
          <p className="mt-2 text-text-secondary">
            Clear recommendation: <strong>Proceed</strong> (low risk), 
            <strong>Proceed with Caution</strong> (medium risk with mitigation steps), 
            or <strong>Avoid</strong> (high risk).
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
```

#### Section 4: Service Options

```tsx
<section className="py-20 lg:py-28 bg-white">
  <div className="max-w-6xl mx-auto px-6 lg:px-12">
    <h2 className="text-3xl lg:text-4xl font-bold text-center">
      Service Options
    </h2>
    
    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Basic Check */}
      <div className="p-8 border-2 border-border rounded-2xl">
        <div className="text-sm font-semibold text-orange-500 uppercase tracking-wide">
          Basic Check
        </div>
        <div className="mt-2 text-4xl font-bold">Free</div>
        <p className="mt-4 text-text-secondary">
          Certificate verification and basic capability review
        </p>
        
        <ul className="mt-8 space-y-4">
          <li className="flex items-start gap-3">
            <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
            <span>Certificate authenticity check</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
            <span>Production capability review</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
            <span>Basic recommendation</span>
          </li>
        </ul>
        
        <Link 
          href="/quote?service=basic-verification"
          className="mt-8 block w-full text-center bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request Basic Check
        </Link>
      </div>

      {/* Full Audit */}
      <div className="p-8 border-2 border-orange-500 rounded-2xl relative">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
          Recommended
        </div>
        
        <div className="text-sm font-semibold text-orange-500 uppercase tracking-wide">
          Full Audit
        </div>
        <div className="mt-2 text-4xl font-bold">Contact for Quote</div>
        <p className="mt-4 text-text-secondary">
          On-site visit with detailed verification report
        </p>
        
        <ul className="mt-8 space-y-4">
          <li className="flex items-start gap-3">
            <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
            <span>On-site factory visit (2-4 hours)</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
            <span>Production line inspection</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
            <span>QC process review</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
            <span>Detailed photo report (20-30 photos)</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
            <span>Risk assessment and recommendation</span>
          </li>
        </ul>
        
        <Link 
          href="/quote?service=full-verification"
          className="mt-8 block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Request Full Audit
        </Link>
      </div>
    </div>
  </div>
</section>
```

#### Section 5: Why This Matters

```tsx
<section className="py-20 lg:py-28 bg-gray-50">
  <div className="max-w-4xl mx-auto px-6 lg:px-12">
    <h2 className="text-3xl lg:text-4xl font-bold text-center">
      Why Factory Verification Matters
    </h2>
    
    <div className="mt-12 space-y-8">
      <div className="p-6 bg-white border border-border rounded-xl">
        <h3 className="text-xl font-semibold text-red-600">
          Common Problems Without Verification
        </h3>
        <ul className="mt-4 space-y-3 text-text-secondary">
          <li className="flex items-start gap-3">
            <X className="text-red-500 flex-shrink-0 mt-1" size={20} />
            <span>Fake certifications (UL/CE certificates that don't exist)</span>
          </li>
          <li className="flex items-start gap-3">
            <X className="text-red-500 flex-shrink-0 mt-1" size={20} />
            <span>Quality inconsistency between samples and bulk orders</span>
          </li>
          <li className="flex items-start gap-3">
            <X className="text-red-500 flex-shrink-0 mt-1" size={20} />
            <span>Production capacity misrepresentation</span>
          </li>
          <li className="flex items-start gap-3">
            <X className="text-red-500 flex-shrink-0 mt-1" size={20} />
            <span>Safety compliance issues discovered after shipment</span>
          </li>
        </ul>
      </div>

      <div className="p-6 bg-white border border-border rounded-xl">
        <h3 className="text-xl font-semibold text-green-600">
          Benefits of Professional Verification
        </h3>
        <ul className="mt-4 space-y-3 text-text-secondary">
          <li className="flex items-start gap-3">
            <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
            <span>Avoid suppliers with fake certifications</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
            <span>Confirm production capability before large orders</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
            <span>Reduce quality inconsistency risks</span>
          </li>
          <li className="flex items-start gap-3">
            <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
            <span>Make informed sourcing decisions with data</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
```

---

## 2.2 Supplier Match 页面

### 页面定位

> **"专业采购流程，不是产品搜索"**

### 文件位置

`silkbridge/src/app/supplier-match/page.tsx`

### 核心设计原则

- ❌ 不是产品目录搜索
- ✅ 是结构化采购流程
- ❌ 不用"Browse"/"Search"
- ✅ 用"Request Match"/"Submit Requirements"

### 关键Section: 结构化询盘表单

```tsx
<form className="mt-12 max-w-3xl mx-auto space-y-6">
  {/* Product Type */}
  <div>
    <label className="block text-sm font-semibold mb-2">
      Product Type <span className="text-red-500">*</span>
    </label>
    <select className="w-full px-4 py-3 border border-border rounded-lg">
      <option>Select product type</option>
      <option>EV Charging Cable</option>
      <option>EV Charging Adapter</option>
      <option>Portable EV Charger</option>
      <option>EV Connector</option>
      <option>Charging Accessories</option>
      <option>Other (please specify)</option>
    </select>
  </div>

  {/* Target Market */}
  <div>
    <label className="block text-sm font-semibold mb-2">
      Target Market <span className="text-red-500">*</span>
    </label>
    <select className="w-full px-4 py-3 border border-border rounded-lg">
      <option>Select target market</option>
      <option>North America (US/Canada)</option>
      <option>Europe</option>
      <option>Australia/New Zealand</option>
      <option>Asia</option>
      <option>Other</option>
    </select>
  </div>

  {/* Expected Quantity */}
  <div>
    <label className="block text-sm font-semibold mb-2">
      Expected Order Quantity <span className="text-red-500">*</span>
    </label>
    <select className="w-full px-4 py-3 border border-border rounded-lg">
      <option>Select quantity range</option>
      <option>Sample only (1-10 units)</option>
      <option>100-500 units</option>
      <option>500-1,000 units</option>
      <option>1,000-5,000 units</option>
      <option>5,000+ units</option>
    </select>
  </div>

  {/* Certifications Required */}
  <div>
    <label className="block text-sm font-semibold mb-2">
      Certifications Required
    </label>
    <div className="space-y-2">
      <label className="flex items-center gap-2">
        <input type="checkbox" />
        <span>UL (North America)</span>
      </label>
      <label className="flex items-center gap-2">
        <input type="checkbox" />
        <span>CE (Europe)</span>
      </label>
      <label className="flex items-center gap-2">
        <input type="checkbox" />
        <span>TUV (Germany)</span>
      </label>
      <label className="flex items-center gap-2">
        <input type="checkbox" />
        <span>CCC (China domestic)</span>
      </label>
      <label className="flex items-center gap-2">
        <input type="checkbox" />
        <span>Not sure / Need guidance</span>
      </label>
    </div>
  </div>

  {/* OEM Needed */}
  <div>
    <label className="block text-sm font-semibold mb-2">
      OEM / Private Label Needed?
    </label>
    <div className="space-y-2">
      <label className="flex items-center gap-2">
        <input type="radio" name="oem" />
        <span>Yes, need custom branding</span>
      </label>
      <label className="flex items-center gap-2">
        <input type="radio" name="oem" />
        <span>No, standard products OK</span>
      </label>
      <label className="flex items-center gap-2">
        <input type="radio" name="oem" />
        <span>Maybe, need to discuss</span>
      </label>
    </div>
  </div>

  {/* Timeline */}
  <div>
    <label className="block text-sm font-semibold mb-2">
      Timeline
    </label>
    <select className="w-full px-4 py-3 border border-border rounded-lg">
      <option>Select timeline</option>
      <option>Urgent (1-2 weeks)</option>
      <option>Normal (1 month)</option>
      <option>Flexible (2-3 months)</option>
    </select>
  </div>

  {/* Additional Requirements */}
  <div>
    <label className="block text-sm font-semibold mb-2">
      Additional Requirements
    </label>
    <textarea 
      rows={4}
      className="w-full px-4 py-3 border border-border rounded-lg"
      placeholder="Any specific requirements, technical specifications, or questions..."
    />
  </div>

  {/* Submit */}
  <button 
    type="submit"
    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
  >
    Submit Sourcing Request
  </button>
</form>
```

---

## 2.3 Sample Program 页面

### 页面定位

> **"低风险产品评估，不是零售购物"**

### 核心原则

**明确说明：**
- ✅ This is for product evaluation
- ✅ B2B sample coordination
- ❌ NOT retail fulfillment
- ❌ NOT dropshipping

### 关键Section: Important Notes

```tsx
<section className="py-20 bg-yellow-50 border-y border-yellow-200">
  <div className="max-w-4xl mx-auto px-6 lg:px-12">
    <div className="flex gap-4">
      <AlertCircle className="text-yellow-600 flex-shrink-0" size={24} />
      <div>
        <h3 className="text-xl font-semibold text-yellow-900">
          Important Notes
        </h3>
        <ul className="mt-4 space-y-3 text-yellow-900/80">
          <li>
            <strong>Sample costs:</strong> Buyers typically pay for samples and 
            international shipping. Sample costs are often refundable with bulk orders 
            (MOQ varies by supplier).
          </li>
          <li>
            <strong>Certifications:</strong> We verify that samples match certified 
            products. Request test reports if you need documentation for regulatory approval.
          </li>
          <li>
            <strong>Lead time:</strong> Stock samples ship in 3-7 days. Custom/OEM 
            samples take 2-3 weeks. International shipping typically takes 5-10 business 
            days via DHL/FedEx.
          </li>
          <li>
            <strong>This is NOT dropshipping:</strong> Sample program is for product 
            evaluation before bulk orders, not for retail fulfillment or one-piece 
            dropshipping to end customers.
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
```

---

## ✅ Phase 2 完成标准

1. ✅ Factory Verification页面上线
2. ✅ Supplier Match页面上线
3. ✅ Sample Program页面上线
4. ✅ 导航栏包含新页面链接
5. ✅ 所有表单功能正常
6. ✅ 响应式设计测试通过
7. ✅ 部署到Vercel成功

---

**下一步：** Phase 3 - Blog内容体系（参考 `03-BLOG-STRATEGY.md`）
