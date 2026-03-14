function scrollToServices() {
    document.getElementById("services").scrollIntoView({
        behavior: "smooth"
    });
}

// Navigation functions
function goToSignup() {
    window.location.href = 'signup.html';
}

function goToLogin() {
    window.location.href = 'login.html';
}

// Retailer functions
function showSuppliers() {
    alert('🔍 Find Verified Suppliers\n\nAccess our database of 500+ verified suppliers across India:\n\n• Electronics: 120 suppliers\n• Textiles: 85 suppliers\n• Food & Beverages: 95 suppliers\n• Hardware: 78 suppliers\n• Clothing: 122 suppliers\n\nAll suppliers are verified with:\n✓ Business registration\n✓ GST compliance\n✓ Quality certifications\n✓ Customer reviews\n\nSign up to view detailed supplier profiles and contact information!');
}

function showPricing() {
    alert('💰 Bulk Pricing Insights\n\nCurrent market trends and pricing data:\n\n📊 Electronics:\n• Mobile phones: 15-25% below retail\n• Laptops: 10-20% below retail\n• Accessories: 30-40% below retail\n\n👔 Textiles:\n• Cotton fabrics: 20-30% below retail\n• Ready-made garments: 25-35% below retail\n• Traditional wear: 15-25% below retail\n\n🍎 Food & Beverages:\n• Packaged goods: 10-15% below retail\n• Fresh produce: 20-30% below retail\n• Beverages: 15-25% below retail\n\n💡 Tip: Larger orders typically get better pricing!');
}

function showAIAssistant() {
    alert('🤖 AI Assistant Features\n\nOur Watson-powered AI assistant helps you with:\n\n📋 Product Sourcing:\n• "Find suppliers for organic cotton t-shirts"\n• "Compare prices for Samsung smartphones"\n• "Show trending products in Delhi"\n\n📦 Order Management:\n• "Track my order #12345"\n• "When will my shipment arrive?"\n• "Request return for damaged items"\n\n💬 Business Insights:\n• "What are the current market trends?"\n• "How to improve my profit margins?"\n• "Best payment terms for bulk orders"\n\n🎯 Try asking anything in the chat widget!');
}

function contactSupplier(supplierName) {
    alert(`📞 Contact ${supplierName}\n\nTo contact this supplier, please:\n\n1️⃣ Sign up for a free account\n2️⃣ Complete your business verification\n3️⃣ Send direct message through our platform\n\n📧 Alternative contact methods:\n• Email: info@${supplierName.toLowerCase().replace(/\s+/g, '')}.com\n• Phone: +91-98XXX-XXXXX\n• WhatsApp: Business messaging available\n\n🔒 Platform benefits:\n✓ Verified supplier guarantee\n✓ Secure payment processing\n✓ Dispute resolution support\n✓ Order tracking\n\nSign up now to connect with ${supplierName}!`);
}

// Wholesaler functions
function showMarketReach() {
    alert('🌍 Expand Market Reach\n\nConnect with retailers across India:\n\n📍 Major Markets Covered:\n• Delhi NCR: 2,500+ active retailers\n• Mumbai: 1,800+ active retailers\n• Bangalore: 1,200+ active retailers\n• Chennai: 950+ active retailers\n• Kolkata: 800+ active retailers\n• Hyderabad: 750+ active retailers\n\n📈 Growth Opportunities:\n• Tier-2 cities: 3,200+ emerging retailers\n• Online sellers: 1,500+ e-commerce businesses\n• Export markets: 200+ international buyers\n\n🎯 Targeted Matching:\nOur AI matches you with retailers based on:\n✓ Product categories\n✓ Order volume requirements\n✓ Payment terms\n✓ Location preferences\n\nSign up to reach thousands of potential buyers!');
}

function showDigitalPresence() {
    alert('🌐 Digital Presence Benefits\n\nShowcase your business to thousands of retailers:\n\n📱 Digital Catalog Features:\n• Upload unlimited product photos\n• Detailed specifications & pricing\n• Bulk order pricing tiers\n• Stock availability status\n• Minimum order quantities\n\n📊 Business Profile:\n• Company information & history\n• Certifications & compliance\n• Customer reviews & ratings\n• Response time statistics\n• Payment terms & methods\n\n🎯 Marketing Tools:\n• Featured supplier listings\n• Promotional banners\n• New product notifications\n• Seasonal campaign support\n\n📈 Analytics Dashboard:\n• Profile views & inquiries\n• Conversion rates\n• Popular products\n• Geographic reach\n\nUpgrade your digital presence today!');
}

function showSmartCommunication() {
    alert('💬 Smart Communication\n\nAI-powered features to streamline your business:\n\n🤖 Automated Responses:\n• Instant price quotes\n• Stock availability updates\n• Order status notifications\n• Shipping information\n• Payment confirmations\n\n⚡ Quick Actions:\n• "Send bulk pricing"\n• "Check product availability"\n• "Schedule delivery"\n• "Process return request"\n\n📞 Multi-channel Support:\n• In-app messaging\n• Email notifications\n• SMS alerts\n• WhatsApp business integration\n\n🎯 Smart Features:\n• Auto-translate for regional languages\n• Voice message transcription\n• Document sharing capabilities\n• E-signature for orders\n\nSave 80% of communication time with AI automation!');
}

function showInventoryManagement() {
    alert('📦 Inventory Management\n\nComplete stock control system:\n\n📊 Real-time Tracking:\n• Current stock levels: 15,000+ items\n• Low stock alerts: Automatic notifications\n• Expiry tracking: FIFO management\n• Warehouse mapping: Location tracking\n\n🔄 Automated Reordering:\n• Smart reorder points: AI-predicted\n• Supplier integration: Direct ordering\n• Bulk discounts: Auto-applied\n• Delivery scheduling: Optimized routes\n\n📈 Analytics:\n• Turnover rate: 4.2x per year\n• Stock accuracy: 99.8%\n• Storage optimization: 25% space saved\n• Cost reduction: 18% lower holding costs\n\n🎯 Benefits:\n✓ Never run out of popular items\n✓ Reduce dead stock by 40%\n✓ Improve cash flow management\n✓ Streamline warehouse operations\n\nUpgrade to Pro for advanced features!');
}

function showOrderProcessing() {
    alert('📋 Order Processing\n\nStreamlined fulfillment workflow:\n\n📝 Order Management:\n• Active orders: 234 today\n• Processing time: 2.3 hours average\n• Accuracy rate: 99.5%\n• Daily capacity: 500+ orders\n\n📦 Fulfillment Features:\n• Pick-and-pack optimization\n• Barcode scanning integration\n• Quality control checkpoints\n• Automated shipping labels\n\n🚚 Shipping Integration:\n• 15+ courier partners\n• Real-time tracking\n• Cost comparison: Save 22%\n• Delivery optimization: Route planning\n\n📊 Performance Metrics:\n• On-time delivery: 96.8%\n• Customer satisfaction: 4.7/5\n• Return rate: 2.1%\n• Processing errors: <0.5%\n\n⚡ Automation Benefits:\n✓ 60% faster processing\n✓ 80% reduction in errors\n✓ 24/7 order monitoring\n✓ Seamless customer updates\n\nStart processing orders efficiently today!');
}

function showPricingStrategy() {
    alert('💰 Pricing Strategy\n\nDynamic pricing optimization:\n\n📊 Market Intelligence:\n• Competitor pricing: Real-time monitoring\n• Demand trends: AI-powered analysis\n• Seasonal adjustments: Automated\n• Regional variations: Location-based\n\n💡 Pricing Models:\n• Cost-plus: 15-25% margin\n• Value-based: Premium pricing\n• Competitive: Market-aligned\n• Dynamic: Real-time adjustment\n\n🎯 Bulk Discounts:\n• Tier 1 (10-50 units): 5% discount\n• Tier 2 (51-200 units): 12% discount\n• Tier 3 (201-500 units): 20% discount\n• Tier 4 (500+ units): 28% discount\n\n📈 Performance Impact:\n• Revenue increase: 18%\n• Profit margin: Improved by 4.2%\n• Customer retention: +25%\n• Market share: +12%\n\n🤖 AI Features:\n✓ Price optimization suggestions\n✓ Demand forecasting\n✓ Competitor analysis\n✓ Automated discount rules\n\nMaximize your profitability with smart pricing!');
}

function showCustomerManagement() {
    alert('👥 Customer Management\n\nComplete retailer relationship system:\n\n📊 Customer Database:\n• Active retailers: 1,250+\n• New signups: 45/week average\n• Retention rate: 92.3%\n• Satisfaction score: 4.6/5\n\n🤝 Relationship Features:\n• Communication history: Complete logs\n• Purchase patterns: AI analysis\n• Credit management: Risk assessment\n• Personalized service: Custom offerings\n\n📈 Segmentation:\n• High-value: Top 10% customers\n• Growing: 20% month-over-month\n• Regular: Steady purchasing\n• New: Recent signups\n\n🎯 Engagement Tools:\n• Email campaigns: Targeted messaging\n• Promotional offers: Personalized deals\n• Loyalty program: Multi-tier rewards\n• Feedback collection: Continuous improvement\n\n💬 Communication:\n✓ Multi-channel support\n✓ Automated follow-ups\n✓ Personalized recommendations\n✓ Quick response time\n\nBuild stronger retailer relationships today!');
}

function showLogisticsIntegration() {
    alert('🚚 Logistics Integration\n\nComprehensive shipping solutions:\n\n📦 Shipping Partners:\n• National carriers: 8 partners\n• Regional delivery: 12 partners\n• Express shipping: 3-5 partners\n• International: 5 partners\n\n⚡ Delivery Options:\n• Standard: 3-5 business days\n• Express: 1-2 business days\n• Same-day: Major cities only\n• Scheduled: Customer-chosen date\n\n💰 Cost Optimization:\n• Rate comparison: Save 25%\n• Bulk shipping: Additional 15% off\n• Route optimization: 18% fuel savings\n• Consolidation: 30% cost reduction\n\n📊 Tracking Features:\n• Real-time GPS tracking\n• Delivery notifications\n• Proof of delivery\n• Exception handling\n\n🎯 Performance Metrics:\n• On-time delivery: 97.2%\n• Damage rate: 0.8%\n• Customer satisfaction: 4.8/5\n• Cost per shipment: Reduced by 22%\n\n🔧 Integration Benefits:\n✓ Automated label generation\n✓ Multi-carrier comparison\n✓ Insurance management\n✓ Returns processing\n\nOptimize your shipping operations now!');
}

// Enhanced Service Functions with more detailed information
function showServiceDetail(serviceName) {
    const serviceDetails = {
        'Supplier Discovery': '🔍 Supplier Discovery\n\nAdvanced supplier matching platform:\n\n📊 Database Statistics:\n• Total suppliers: 2,500+ verified\n• New suppliers: 50+ added weekly\n• Categories covered: 25+ industries\n• Geographic reach: All 28 states\n\n🎯 Matching Algorithm:\n• AI-powered compatibility scoring\n• 85% match accuracy rate\n• Real-time availability checking\n• Price competitiveness analysis\n\n✅ Verification Process:\n• Business registration: GST verification\n• Financial stability: Credit check\n• Quality standards: ISO certification\n• Customer reviews: 4.0+ rating required\n\n📈 Success Metrics:\n• Average time to find supplier: 2.3 days\n• Successful partnerships: 94%\n• Cost savings: 18-25%\n• Quality improvement: 32% better\n\n🚀 Premium Features:\n✓ Advanced filtering\n✓ Direct messaging\n✓ Sample requests\n✓ Contract templates\n✓ Dispute resolution\n\nFind your perfect supplier in minutes, not months!',
        
        'Business Onboarding Guidance': '📋 Business Onboarding Guidance\n\nComplete setup assistance for new businesses:\n\n📝 Documentation Support:\n• GST Registration: 3-5 day processing\n• Trade License: Local permits\n• FSSAI License: Food businesses\n• Import Export Code: International trade\n\n💼 Platform Setup:\n• Profile creation: 30-minute setup\n• Product catalog: Upload 1000+ items\n• Pricing strategy: AI recommendations\n• Payment integration: 5+ gateways\n\n🎯 Training Programs:\n• Video tutorials: 50+ hours content\n• Live webinars: Weekly sessions\n• One-on-one coaching: Premium feature\n• Best practices: Industry-specific guides\n\n📊 Onboarding Timeline:\n• Day 1: Account creation\n• Day 2: Documentation upload\n• Day 3: Profile verification\n• Day 4: Product listing\n• Day 5: Go live!\n\n🏆 Success Stories:\n✓ 5000+ businesses onboarded\n✓ 93% first-month success rate\n✓ Average revenue: ₹2.5L in month 1\n✓ Growth rate: 45% in 6 months\n\nLaunch your business with expert guidance!\n\n📞 Dedicated support: 1800-RETAIL-HELP',
        
        'Logistics Information': '📦 Logistics Information\n\nEnd-to-end supply chain solutions:\n\n🚚 Shipping Network:\n• Partner companies: 50+ verified\n• Service areas: 20,000+ pin codes\n• Delivery types: 8 different options\n• Coverage: 98% of India\n\n💰 Pricing Structure:\n• Standard shipping: ₹50-200\n• Express delivery: ₹150-500\n• Same-day: ₹300-800\n• Bulk orders: 20-40% discount\n\n⏱️ Delivery Timeframes:\n• Metro cities: 1-2 days\n• Tier-2 cities: 2-4 days\n• Rural areas: 4-7 days\n• Remote locations: 7-10 days\n\n📊 Technology Features:\n• Real-time tracking: GPS enabled\n• Route optimization: AI planning\n• Temperature control: For sensitive items\n• Insurance coverage: Up to ₹10L\n\n🎯 Specialized Services:\n✓ Cold chain logistics\n✓ Fragile handling\n✓ Bulk transportation\n✓ International shipping\n✓ Warehousing solutions\n✓ Returns management\n\n📈 Performance Metrics:\n• On-time delivery: 96.5%\n• Damage rate: <1%\n• Customer satisfaction: 4.7/5\n• Cost efficiency: 25% savings\n\nOptimize your logistics with smart solutions!\n\n🚀 Get started: Free shipping on first 5 orders!',
        
        'Market Insights': '📊 Market Insights\n\nData-driven business intelligence:\n\n📈 Market Analytics:\n• Real-time pricing: 5000+ products tracked\n• Demand forecasting: 30-day predictions\n• Trend analysis: Seasonal patterns\n• Competition monitoring: 1000+ competitors\n\n🎯 Industry Reports:\n• Electronics: 15% YoY growth\n• Textiles: 8% YoY growth\n• Food & Beverage: 12% YoY growth\n• Hardware: 10% YoY growth\n\n📍 Regional Insights:\n• North India: Fastest growing market\n• South India: Highest average order value\n• East India: Emerging opportunities\n• West India: Most competitive pricing\n\n💡 Consumer Behavior:\n• Peak buying: 10AM-2PM\n• Popular categories: Electronics > Clothing > Food\n• Payment preferences: UPI (45%), COD (30%), Cards (25%)\n• Return rates: 2.3% average\n\n🤖 AI-Powered Features:\n✓ Price optimization suggestions\n✓ Inventory recommendations\n✓ Sales forecasting\n✓ Market entry strategies\n✓ Competitor analysis\n✓ Customer segmentation\n\n📊 Data Sources:\n• 1M+ transactions analyzed\n• 50K+ businesses tracked\n• Real-time market feeds\n• Government statistics\n• Consumer surveys\n\nMake data-driven decisions for growth!\n\n🎯 Success story: 40% revenue increase for clients using insights',
        
        'AI Business Assistant': '🤖 AI Business Assistant\n\nYour 24/7 intelligent business partner:\n\n💬 Conversational AI:\n• Languages: Hindi, English, Tamil, Telugu, Bengali\n• Response time: <2 seconds\n• Accuracy rate: 94%\n• Learning capability: Improves with usage\n\n🎯 Business Functions:\n• Order Management: Track, modify, cancel orders\n• Inventory Help: Stock alerts, reordering\n• Pricing Assistant: Optimize your prices\n• Supplier Matching: Find best partners\n• Customer Service: Handle inquiries\n• Financial Analysis: Profit insights\n\n📊 Analytics Dashboard:\n• Sales performance: Real-time metrics\n• Profit margins: Category-wise analysis\n• Growth tracking: Month-over-month trends\n• Customer insights: Behavior patterns\n• Inventory health: Stock optimization\n• Market trends: Industry updates\n\n🔧 Integration Capabilities:\n• ERP Systems: SAP, Tally, Zoho\n• Accounting: QuickBooks, Tally\n• E-commerce: Shopify, Amazon, Flipkart\n• Payment Gateways: All major providers\n• Shipping: All logistics partners\n\n⚡ Automation Benefits:\n✓ 70% time savings on routine tasks\n✓ 85% reduction in manual errors\n✓ 24/7 availability\n✓ Consistent customer experience\n✓ Data-driven decisions\n✓ Scalable operations\n\n🎯 Advanced Features:\n• Voice commands: "Show my sales for today"\n• Image recognition: Product identification\n• Predictive analytics: Forecast future trends\n• Natural language processing: Human-like conversations\n• Sentiment analysis: Customer feedback insights\n\n📈 Business Impact:\n• Productivity increase: 3x\n• Customer satisfaction: +40%\n• Operational efficiency: +60%\n• Cost reduction: 35%\n\nTransform your business with AI power!\n\n🚀 Try free for 30 days | No credit card required'
    };
    
    alert(serviceDetails[serviceName] || 'Service details coming soon!');
}

// mobile navigation toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    const expanded = navLinks.classList.toggle('active');
    mobileMenu.setAttribute('aria-expanded', expanded);
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections and cards
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const cards = document.querySelectorAll('.card');
    const services = document.querySelectorAll('.services-list li');
    const suppliers = document.querySelectorAll('.supplier-card');
    
    [...sections, ...cards, ...services, ...suppliers].forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 37, 64, 0.98)';
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(10, 37, 64, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});