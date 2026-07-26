import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) { }

  showAll = false;

services = [
  {
    slug: 'website-development',
    title: 'Website Development',
    description: 'High-performance websites built to grow your business.',
    icon: 'fa-code'
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Result-driven strategies to grow your business online.',
    icon: 'fa-bullhorn'
  },
  {
    slug: 'search-engine-optimization',
    title: 'Search Engine Optimization',
    description: 'Improve search rankings and attract organic traffic.',
    icon: 'fa-magnifying-glass'
  },
  {
    slug: 'social-media-marketing',
    title: 'Social Media Marketing',
    description: 'Grow your audience and strengthen your social presence.',
    icon: 'fa-hashtag'
  },
  {
    slug: 'lead-generation',
    title: 'Lead Generation',
    description: 'Connect your business with potential customers.',
    icon: 'fa-user-plus'
  },
  {
    slug: 'social-media-management',
    title: 'Social Media Management',
    description: 'Complete management of your social media presence.',
    icon: 'fa-share-nodes'
  },
  {
    slug: 'business-websites',
    title: 'Business Websites',
    description: 'Professional websites that build trust and generate leads.',
    icon: 'fa-building'
  },
  {
    slug: 'e-commerce-stores',
    title: 'E-Commerce Stores',
    description: 'Powerful online stores with secure payment integration.',
    icon: 'fa-cart-shopping'
  },
  {
    slug: 'custom-web-applications',
    title: 'Custom Web Applications',
    description: 'Tailor-made web applications for your business needs.',
    icon: 'fa-laptop-code'
  },
  {
    slug: 'landing-pages',
    title: 'Landing Pages',
    description: 'High-converting landing pages for marketing campaigns.',
    icon: 'fa-window-maximize'
  },
  {
    slug: 'portfolio-websites',
    title: 'Portfolio Websites',
    description: 'Showcase your work with an elegant online portfolio.',
    icon: 'fa-briefcase'
  },
  {
    slug: 'website-redesign',
    title: 'Website Redesign',
    description: 'Transform outdated websites into modern experiences.',
    icon: 'fa-arrows-rotate'
  },
  {
    slug: 'local-seo',
    title: 'Local SEO',
    description: 'Help nearby customers discover your business.',
    icon: 'fa-location-dot'
  },
  {
    slug: 'on-page-seo',
    title: 'On-Page SEO',
    description: 'Optimize your website content for better rankings.',
    icon: 'fa-file-circle-check'
  },
  {
    slug: 'technical-seo',
    title: 'Technical SEO',
    description: 'Improve technical performance and search visibility.',
    icon: 'fa-gears'
  },
  {
    slug: 'google-business-profile-optimization',
    title: 'Google Business Profile Optimization',
    description: 'Improve your visibility on Google Search and Maps.',
    icon: 'fa-map-location-dot'
  },
  {
    slug: 'google-ads',
    title: 'Google Ads',
    description: 'Reach customers actively searching for your services.',
    icon: 'fa-chart-line'
  },
  {
    slug: 'meta-ads',
    title: 'Meta Ads',
    description: 'Generate leads through Facebook and Instagram ads.',
    icon: 'fa-rectangle-ad'
  },
  {
    slug: 'ppc-campaign-management',
    title: 'PPC Campaign Management',
    description: 'Manage paid campaigns for better advertising returns.',
    icon: 'fa-arrow-pointer'
  },
  {
    slug: 'retargeting-campaigns',
    title: 'Retargeting Campaigns',
    description: 'Reconnect with visitors and turn them into customers.',
    icon: 'fa-crosshairs'
  },
  {
    slug: 'brand-development',
    title: 'Brand Development',
    description: 'Build a strong and memorable business identity.',
    icon: 'fa-gem'
  },
  {
    slug: 'ui-ux-design',
    title: 'UI / UX Design',
    description: 'Modern interfaces designed for better user experiences.',
    icon: 'fa-pen-ruler'
  },
  {
    slug: 'social-media-content-creation',
    title: 'Social Media Content Creation',
    description: 'Creative branded content for your social platforms.',
    icon: 'fa-photo-film'
  },
  {
    slug: 'content-marketing',
    title: 'Content Marketing',
    description: 'Strategic content that attracts and engages customers.',
    icon: 'fa-file-pen'
  },
  {
    slug: 'email-marketing',
    title: 'Email Marketing',
    description: 'Reach and nurture customers with targeted email campaigns.',
    icon: 'fa-envelope'
  },
  {
    slug: 'logo-design',
    title: 'Logo Design',
    description: 'Create a distinctive identity for your brand.',
    icon: 'fa-pen-nib'
  },
  {
    slug: 'graphic-design',
    title: 'Graphic Design',
    description: 'Creative visuals for marketing and brand communication.',
    icon: 'fa-palette'
  },
  {
    slug: 'payment-gateway-integration',
    title: 'Payment Gateway Integration',
    description: 'Accept secure online payments through your website.',
    icon: 'fa-credit-card'
  },
  {
    slug: 'api-integration',
    title: 'API Integration',
    description: 'Connect your website with third-party services.',
    icon: 'fa-plug'
  },
  {
    slug: 'content-management',
    title: 'Content Management',
    description: 'Manage and update your website content with ease.',
    icon: 'fa-file-lines'
  },
  {
    slug: 'website-maintenance',
    title: 'Website Maintenance',
    description: 'Regular updates, backups, fixes, and technical support.',
    icon: 'fa-screwdriver-wrench'
  },
  {
    slug: 'website-speed-optimization',
    title: 'Website Speed Optimization',
    description: 'Improve loading speed and Core Web Vitals.',
    icon: 'fa-bolt'
  },
  {
    slug: 'website-security',
    title: 'Website Security',
    description: 'Protect your website against security threats.',
    icon: 'fa-shield-halved'
  },
  {
    slug: 'ssl-installation',
    title: 'SSL Installation',
    description: 'Secure your website with HTTPS encryption.',
    icon: 'fa-lock'
  },
  {
    slug: 'hosting-domain-setup',
    title: 'Hosting & Domain Setup',
    description: 'Complete domain, hosting, DNS, and email configuration.',
    icon: 'fa-server'
  },
  {
    slug: 'website-migration',
    title: 'Website Migration',
    description: 'Move your website safely between platforms or hosting.',
    icon: 'fa-right-left'
  },
  {
    slug: 'google-analytics',
    title: 'Google Analytics',
    description: 'Track visitors and understand your website performance.',
    icon: 'fa-chart-pie'
  },
  {
    slug: 'google-search-console',
    title: 'Google Search Console Setup',
    description: 'Monitor search visibility, indexing, and performance.',
    icon: 'fa-chart-simple'
  },
  {
    slug: 'conversion-tracking',
    title: 'Conversion Tracking',
    description: 'Measure leads, enquiries, sales, and customer actions.',
    icon: 'fa-bullseye'
  }
];

faqs = [
  {
    question: 'How much does a website cost?',
    answer: 'The cost depends on your requirements, features, and project complexity. We offer affordable solutions for startups, small businesses, and enterprises. Contact us for a free quotation.'
  },
  {
    question: 'How long does it take to build a website?',
    answer: 'Most business websites are completed within 1–3 weeks. Larger or custom projects may take additional time depending on the features required.'
  },
  {
    question: 'Will my website work on mobile devices?',
    answer: 'Yes. Every website we build is fully responsive and optimized for desktops, tablets, and smartphones.'
  },
  {
    question: 'Do you provide SEO services?',
    answer: 'Absolutely. We build SEO-friendly websites and also provide complete SEO services to improve your search engine rankings.'
  },
  {
    question: 'Can you redesign my existing website?',
    answer: 'Yes. We can modernize your existing website with a fresh design, improved performance, and better user experience.'
  },
  {
    question: 'Do you provide website maintenance?',
    answer: 'Yes. We offer ongoing maintenance, security updates, backups, bug fixes, and technical support after your website is launched.'
  },
  {
    question: 'Can you build an e-commerce website?',
    answer: 'Yes. We develop secure and scalable online stores with payment gateway integration, product management, and order tracking.'
  },
  {
    question: 'Will I be able to update my website myself?',
    answer: 'Yes. If required, we build websites with easy-to-use content management systems so you can update text, images, and other content without technical knowledge.'
  }
];




  goToContact() {
    this.router.navigate(['/contact']);
  }
}
