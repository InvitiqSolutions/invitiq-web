import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-service',
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
  constructor() { }
services = [

  // =========================
  // CORE SERVICES
  // =========================

  {
    slug: 'website-development',
    title: 'Website Development',
    category: 'Web Development',
    icon: 'fa-code',
    description: 'Professional, modern, responsive, and high-performance websites designed to strengthen your digital presence, build trust, and turn visitors into customers.'
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    category: 'Digital Marketing',
    icon: 'fa-bullhorn',
    description: 'Result-driven digital marketing strategies designed to increase brand awareness, attract potential customers, generate leads, and grow your business online.'
  },
  {
    slug: 'search-engine-optimization',
    title: 'Search Engine Optimization',
    category: 'SEO',
    icon: 'fa-magnifying-glass',
    description: 'Improve your website visibility on search engines and attract organic traffic from customers actively searching for your products or services.'
  },
  {
    slug: 'social-media-marketing',
    title: 'Social Media Marketing',
    category: 'Social Media',
    icon: 'fa-hashtag',
    description: 'Strategic social media marketing designed to increase reach, build your audience, strengthen your brand, and generate enquiries.'
  },
  {
    slug: 'lead-generation',
    title: 'Lead Generation',
    category: 'Digital Marketing',
    icon: 'fa-user-plus',
    description: 'Targeted lead generation campaigns that connect your business with potential customers who are genuinely interested in your products or services.'
  },
  {
    slug: 'social-media-management',
    title: 'Social Media Management',
    category: 'Social Media',
    icon: 'fa-share-nodes',
    description: 'Complete social media management including content planning, posting, audience engagement, brand consistency, and performance monitoring.'
  },

  // =========================
  // WEBSITE DEVELOPMENT
  // =========================

  {
    slug: 'business-websites',
    title: 'Business Websites',
    category: 'Web Development',
    icon: 'fa-building',
    description: 'Professional business websites designed to showcase your company, establish credibility, generate enquiries, and convert visitors into customers.'
  },
  {
    slug: 'e-commerce-stores',
    title: 'E-Commerce Stores',
    category: 'Web Development',
    icon: 'fa-cart-shopping',
    description: 'Powerful online stores with product management, secure payments, order management, and a smooth shopping experience across all devices.'
  },
  {
    slug: 'custom-web-applications',
    title: 'Custom Web Applications',
    category: 'Web Development',
    icon: 'fa-laptop-code',
    description: 'Custom web applications designed around your business processes, customer requirements, workflows, and operational needs.'
  },
  {
    slug: 'landing-pages',
    title: 'Landing Pages',
    category: 'Web Development',
    icon: 'fa-window-maximize',
    description: 'Conversion-focused landing pages designed for advertising campaigns, product launches, promotions, and lead generation.'
  },
  {
    slug: 'portfolio-websites',
    title: 'Portfolio Websites',
    category: 'Web Development',
    icon: 'fa-briefcase',
    description: 'Beautiful portfolio websites for professionals, creators, freelancers, agencies, and businesses to showcase their work and expertise.'
  },
  {
    slug: 'website-redesign',
    title: 'Website Redesign',
    category: 'Web Development',
    icon: 'fa-arrows-rotate',
    description: 'Transform outdated websites into modern, responsive, fast, visually engaging, and conversion-focused digital experiences.'
  },

  // =========================
  // SEO
  // =========================

  {
    slug: 'local-seo',
    title: 'Local SEO',
    category: 'SEO',
    icon: 'fa-location-dot',
    description: 'Improve your local search presence and help nearby customers discover your business when searching for relevant products and services.'
  },
  {
    slug: 'on-page-seo',
    title: 'On-Page SEO',
    category: 'SEO',
    icon: 'fa-file-circle-check',
    description: 'Optimize website content, headings, metadata, internal links, images, and keywords to improve search engine visibility.'
  },
  {
    slug: 'technical-seo',
    title: 'Technical SEO',
    category: 'SEO',
    icon: 'fa-gears',
    description: 'Optimize website structure, indexing, performance, mobile compatibility, crawling, and technical factors that influence search rankings.'
  },
  {
    slug: 'google-business-profile-optimization',
    title: 'Google Business Profile Optimization',
    category: 'SEO',
    icon: 'fa-map-location-dot',
    description: 'Optimize your Google Business Profile to improve visibility in Google Search and Maps and attract more local customers.'
  },

  // =========================
  // ADVERTISING
  // =========================

  {
    slug: 'google-ads',
    title: 'Google Ads',
    category: 'Advertising',
    icon: 'fa-chart-line',
    description: 'Reach potential customers actively searching for your products and services through targeted and optimized Google advertising campaigns.'
  },
  {
    slug: 'meta-ads',
    title: 'Meta Ads',
    category: 'Advertising',
    icon: 'fa-rectangle-ad',
    description: 'Facebook and Instagram advertising campaigns designed to increase awareness, generate leads, drive traffic, and improve conversions.'
  },
  {
    slug: 'ppc-campaign-management',
    title: 'PPC Campaign Management',
    category: 'Advertising',
    icon: 'fa-arrow-pointer',
    description: 'End-to-end pay-per-click campaign management focused on reaching the right audience and maximizing your advertising investment.'
  },
  {
    slug: 'retargeting-campaigns',
    title: 'Retargeting Campaigns',
    category: 'Advertising',
    icon: 'fa-crosshairs',
    description: 'Reconnect with people who previously visited or interacted with your business and encourage them to return and convert.'
  },

  // =========================
  // CONTENT & BRANDING
  // =========================

  {
    slug: 'brand-development',
    title: 'Brand Development',
    category: 'Branding',
    icon: 'fa-gem',
    description: 'Build a strong and memorable brand identity that communicates your business values, personality, positioning, and vision.'
  },
  {
    slug: 'ui-ux-design',
    title: 'UI / UX Design',
    category: 'Branding',
    icon: 'fa-pen-ruler',
    description: 'Modern and intuitive interfaces designed to deliver attractive, simple, engaging, and conversion-friendly user experiences.'
  },
  {
    slug: 'social-media-content-creation',
    title: 'Social Media Content Creation',
    category: 'Social Media',
    icon: 'fa-photo-film',
    description: 'Creative posts, promotional content, campaign creatives, and branded visuals designed specifically for your social media presence.'
  },
  {
    slug: 'content-marketing',
    title: 'Content Marketing',
    category: 'Digital Marketing',
    icon: 'fa-file-pen',
    description: 'Strategic content designed to educate your audience, strengthen brand authority, improve visibility, and generate customer interest.'
  },
  {
    slug: 'email-marketing',
    title: 'Email Marketing',
    category: 'Digital Marketing',
    icon: 'fa-envelope',
    description: 'Targeted email campaigns that nurture leads, promote offers, reconnect with customers, and increase conversions.'
  },
  {
    slug: 'logo-design',
    title: 'Logo Design',
    category: 'Branding',
    icon: 'fa-pen-nib',
    description: 'Professional logo designs that create a distinctive, recognizable, and memorable visual identity for your business.'
  },
  {
    slug: 'graphic-design',
    title: 'Graphic Design',
    category: 'Branding',
    icon: 'fa-palette',
    description: 'Creative visual designs for social media, advertisements, marketing campaigns, promotions, and business branding.'
  },

  // =========================
  // INTEGRATIONS
  // =========================

  {
    slug: 'payment-gateway-integration',
    title: 'Payment Gateway Integration',
    category: 'Integration',
    icon: 'fa-credit-card',
    description: 'Integrate secure online payment solutions into your website or e-commerce store for smooth customer transactions.'
  },
  {
    slug: 'api-integration',
    title: 'API Integration',
    category: 'Integration',
    icon: 'fa-plug',
    description: 'Connect your website or web application with third-party platforms, services, payment systems, and business tools.'
  },
  {
    slug: 'content-management',
    title: 'Content Management',
    category: 'Web Development',
    icon: 'fa-file-lines',
    description: 'Implement easy-to-manage content systems that allow your business to update website content efficiently.'
  },

  // =========================
  // SUPPORT & MAINTENANCE
  // =========================

  {
    slug: 'website-maintenance',
    title: 'Website Maintenance',
    category: 'Support',
    icon: 'fa-screwdriver-wrench',
    description: 'Ongoing website maintenance including content updates, bug fixes, monitoring, backups, improvements, and technical assistance.'
  },
  {
    slug: 'website-speed-optimization',
    title: 'Website Speed Optimization',
    category: 'Support',
    icon: 'fa-bolt',
    description: 'Improve website loading speed, Core Web Vitals, performance, and user experience through technical optimization.'
  },
  {
    slug: 'website-security',
    title: 'Website Security',
    category: 'Support',
    icon: 'fa-shield-halved',
    description: 'Improve website security through updates, monitoring, backups, secure configurations, and security best practices.'
  },
  {
    slug: 'ssl-installation',
    title: 'SSL Installation',
    category: 'Support',
    icon: 'fa-lock',
    description: 'Secure your website with SSL and HTTPS configuration to protect visitor data and improve customer trust.'
  },
  {
    slug: 'hosting-domain-setup',
    title: 'Hosting & Domain Setup',
    category: 'Support',
    icon: 'fa-server',
    description: 'Complete assistance with domain registration, hosting configuration, DNS setup, SSL configuration, email, and website deployment.'
  },
  {
    slug: 'website-migration',
    title: 'Website Migration',
    category: 'Support',
    icon: 'fa-right-left',
    description: 'Move your website between hosting providers or platforms while minimizing downtime and protecting your existing content.'
  },

  // =========================
  // ANALYTICS
  // =========================

  {
    slug: 'google-analytics',
    title: 'Google Analytics',
    category: 'Analytics',
    icon: 'fa-chart-pie',
    description: 'Track website visitors, traffic sources, user behavior, conversions, and important metrics to understand your website performance.'
  },
  {
    slug: 'google-search-console-setup',
    title: 'Google Search Console Setup',
    category: 'Analytics',
    icon: 'fa-chart-simple',
    description: 'Configure and monitor Google Search Console to understand search performance, indexing, keywords, and technical SEO issues.'
  },
  {
    slug: 'conversion-tracking',
    title: 'Conversion Tracking',
    category: 'Analytics',
    icon: 'fa-bullseye',
    description: 'Track enquiries, calls, purchases, form submissions, and other important actions to measure your marketing performance.'
  }

];
}
