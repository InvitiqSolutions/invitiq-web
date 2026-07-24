import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule,CommonModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  showAll = false;

services = [
  {
    title: 'Website Development',
    description: 'Custom websites built for speed, performance, and business growth.',
    icon: 'fa-code'
  },
  {
    title: 'Business Websites',
    description: 'Professional websites that build trust and generate leads.',
    icon: 'fa-building'
  },
  {
    title: 'E-Commerce Stores',
    description: 'Powerful online stores with secure payment integration.',
    icon: 'fa-cart-shopping'
  },
  {
    title: 'Landing Pages',
    description: 'High-converting landing pages for marketing campaigns.',
    icon: 'fa-window-maximize'
  },
  {
    title: 'Portfolio Websites',
    description: 'Showcase your work with elegant portfolio websites.',
    icon: 'fa-briefcase'
  },
  {
    title: 'UI / UX Design',
    description: 'Modern, user-friendly interfaces designed for engagement.',
    icon: 'fa-pen-ruler'
  },

  {
    title: 'SEO Optimization',
    description: 'Improve search rankings and increase organic traffic.',
    icon: 'fa-magnifying-glass'
  },
  {
    title: 'Local SEO',
    description: 'Help customers nearby discover your business.',
    icon: 'fa-location-dot'
  },
  {
    title: 'Digital Marketing',
    description: 'Promote your business through targeted online campaigns.',
    icon: 'fa-bullhorn'
  },
  {
    title: 'Social Media Marketing',
    description: 'Grow your audience on Facebook, Instagram, and LinkedIn.',
    icon: 'fa-hashtag'
  },
  {
    title: 'Google Ads',
    description: 'Reach more customers with high-performing PPC campaigns.',
    icon: 'fa-chart-line'
  },
  {
    title: 'Meta Ads',
    description: 'Generate leads through Facebook and Instagram advertising.',
    icon: 'fa-rectangle-ad'
  },

  {
    title: 'Website Redesign',
    description: 'Transform outdated websites into modern experiences.',
    icon: 'fa-arrows-rotate'
  },
  {
    title: 'Website Maintenance',
    description: 'Regular updates, backups, and technical support.',
    icon: 'fa-screwdriver-wrench'
  },
  {
    title: 'Website Speed Optimization',
    description: 'Improve loading speed and Core Web Vitals.',
    icon: 'fa-bolt'
  },
  {
    title: 'Website Security',
    description: 'Protect your website against threats and attacks.',
    icon: 'fa-shield-halved'
  },
  {
    title: 'SSL Installation',
    description: 'Secure your website with HTTPS encryption.',
    icon: 'fa-lock'
  },
  {
    title: 'Hosting & Domain Setup',
    description: 'Complete hosting, email, and domain configuration.',
    icon: 'fa-server'
  },

  {
    title: 'Custom Web Applications',
    description: 'Tailor-made web solutions for your business needs.',
    icon: 'fa-laptop-code'
  },
  {
    title: 'API Integration',
    description: 'Connect your website with third-party platforms.',
    icon: 'fa-plug'
  },
  {
    title: 'Payment Gateway Integration',
    description: 'Accept online payments securely.',
    icon: 'fa-credit-card'
  },
  {
    title: 'Google Analytics',
    description: 'Track visitors and measure business growth.',
    icon: 'fa-chart-pie'
  },
  {
    title: 'Email Marketing',
    description: 'Reach customers with automated email campaigns.',
    icon: 'fa-envelope'
  },
  {
    title: 'Content Management',
    description: 'Manage your website content with ease.',
    icon: 'fa-file-lines'
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
}
