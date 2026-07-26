import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './service-detail.component.html',
  styleUrl: './service-detail.component.css'
})
export class ServiceDetailComponent implements OnInit {

  selectedService: any;


  serviceDetails = [

    // =====================================================
    // WEBSITE DEVELOPMENT
    // =====================================================

    {
      slug: 'website-development',

      title: 'Website Development',
      category: 'Web Development',
      icon: 'fa-code',

      heroTitle: 'Websites Built to Impress. Designed to Grow.',
      heroDescription:
        'We create modern, responsive, high-performance websites that strengthen your brand, build customer trust, and turn visitors into opportunities.',

      overview: [
        {
          icon: 'fa-lightbulb',
          title: 'Strategic'
        },
        {
          icon: 'fa-wand-magic-sparkles',
          title: 'Custom Designed'
        },
        {
          icon: 'fa-mobile-screen',
          title: 'Fully Responsive'
        },
        {
          icon: 'fa-chart-line',
          title: 'Growth Focused'
        }
      ],

      whyTitle: 'Your Website Is More Than Just an Online Presence.',

      whyDescription:
        'Your website is often the first interaction customers have with your business. We make sure that first impression communicates professionalism, credibility, and value.',

      whyPoints: [
        'Build trust and credibility',
        'Create a strong digital presence',
        'Reach customers across all devices',
        'Generate enquiries and leads',
        'Showcase your products and services',
        'Support long-term business growth'
      ],

      featuresTitle: 'Everything Your Website Needs to Perform.',

      features: [
        {
          icon: 'fa-pen-ruler',
          title: 'UI / UX Design',
          description:
            'Modern interfaces designed around your brand and customer experience.'
        },
        {
          icon: 'fa-code',
          title: 'Custom Development',
          description:
            'Clean and scalable development tailored to your business requirements.'
        },
        {
          icon: 'fa-mobile-screen-button',
          title: 'Responsive Design',
          description:
            'A seamless experience across mobile phones, tablets, laptops, and desktops.'
        },
        {
          icon: 'fa-bolt',
          title: 'Performance',
          description:
            'Optimized websites built for fast loading and smooth user experiences.'
        },
        {
          icon: 'fa-magnifying-glass',
          title: 'SEO Friendly',
          description:
            'Search-friendly structure and technical foundations to support organic visibility.'
        },
        {
          icon: 'fa-shield-halved',
          title: 'Security',
          description:
            'Secure development practices and configurations to help protect your website.'
        }
      ],

      process: [
        {
          number: '01',
          title: 'Discover',
          description:
            'We understand your business, audience, competitors, requirements, and goals.'
        },
        {
          number: '02',
          title: 'Plan',
          description:
            'We define the website structure, content flow, functionality, and user journey.'
        },
        {
          number: '03',
          title: 'Design',
          description:
            'We create an attractive visual experience aligned with your brand identity.'
        },
        {
          number: '04',
          title: 'Develop',
          description:
            'We transform the approved design into a fast and responsive website.'
        },
        {
          number: '05',
          title: 'Test',
          description:
            'We test responsiveness, functionality, performance, links, forms, and usability.'
        },
        {
          number: '06',
          title: 'Launch & Support',
          description:
            'We deploy your website and provide ongoing assistance when required.'
        }
      ],

      benefits: [
        {
          icon: 'fa-eye',
          title: 'Strong Online Presence',
          description:
            'Create a professional digital presence that represents your business effectively.'
        },
        {
          icon: 'fa-handshake',
          title: 'Build Customer Trust',
          description:
            'Professional design helps customers feel more confident about your business.'
        },
        {
          icon: 'fa-user-plus',
          title: 'Generate More Leads',
          description:
            'Strategic calls-to-action help convert website visitors into enquiries.'
        },
        {
          icon: 'fa-chart-line',
          title: 'Support Business Growth',
          description:
            'Your website becomes a digital platform that supports your marketing and growth.'
        }
      ],

      technologies: [
        'Angular',
        'React',
        '.NET',
        'Node.js',
        'WordPress',
        'Shopify'
      ],

      faqs: [
        {
          question: 'How long does it take to build a website?',
          answer:
            'The timeline depends on the size, design, content, and functionality of the website. After understanding your requirements, we provide a clear project timeline.'
        },
        {
          question: 'Will my website work on mobile devices?',
          answer:
            'Yes. We build responsive websites designed to work smoothly across mobiles, tablets, laptops, and desktop screens.'
        },
        {
          question: 'Will the website be SEO friendly?',
          answer:
            'Yes. We follow SEO-friendly development practices including responsive design, page structure, performance optimization, metadata support, and clean URLs.'
        },
        {
          question: 'Can you redesign my existing website?',
          answer:
            'Yes. We can redesign and modernize existing websites while improving their usability, appearance, responsiveness, and performance.'
        },
        {
          question: 'Do you provide website maintenance?',
          answer:
            'Yes. Website maintenance and ongoing technical support can be provided based on your business requirements.'
        }
      ]
    },


    // =====================================================
    // DIGITAL MARKETING
    // =====================================================

    {
      slug: 'digital-marketing',

      title: 'Digital Marketing',
      category: 'Digital Marketing',
      icon: 'fa-bullhorn',

      heroTitle: 'Reach the Right People. Turn Attention Into Growth.',

      heroDescription:
        'We create data-driven digital marketing strategies that increase visibility, attract potential customers, generate leads, and help your business grow online.',

      overview: [
        {
          icon: 'fa-crosshairs',
          title: 'Targeted'
        },
        {
          icon: 'fa-chart-line',
          title: 'Performance Driven'
        },
        {
          icon: 'fa-users',
          title: 'Audience Focused'
        },
        {
          icon: 'fa-arrow-trend-up',
          title: 'Growth Focused'
        }
      ],

      whyTitle: 'Being Online Is Not Enough. Your Business Needs to Be Seen.',

      whyDescription:
        'Your customers spend significant time online researching, comparing, and discovering businesses. Digital marketing helps you reach them at the right moment with the right message.',

      whyPoints: [
        'Increase brand visibility',
        'Reach your target audience',
        'Generate qualified leads',
        'Drive website traffic',
        'Build customer relationships',
        'Measure and improve marketing performance'
      ],

      featuresTitle: 'A Complete Strategy for Digital Growth.',

      features: [
        {
          icon: 'fa-magnifying-glass',
          title: 'SEO',
          description:
            'Improve organic search visibility and attract customers searching for your services.'
        },
        {
          icon: 'fa-hashtag',
          title: 'Social Media Marketing',
          description:
            'Build your presence and engage potential customers across social platforms.'
        },
        {
          icon: 'fa-rectangle-ad',
          title: 'Paid Advertising',
          description:
            'Reach targeted audiences through performance-focused advertising campaigns.'
        },
        {
          icon: 'fa-user-plus',
          title: 'Lead Generation',
          description:
            'Create campaigns designed specifically to attract potential customers.'
        },
        {
          icon: 'fa-file-pen',
          title: 'Content Marketing',
          description:
            'Create useful content that attracts audiences and strengthens your authority.'
        },
        {
          icon: 'fa-chart-pie',
          title: 'Analytics',
          description:
            'Measure campaign performance and use data to improve future marketing decisions.'
        }
      ],

      process: [
        {
          number: '01',
          title: 'Understand',
          description:
            'We understand your business, customers, competitors, goals, and current digital presence.'
        },
        {
          number: '02',
          title: 'Research',
          description:
            'We research your audience, market opportunities, competitors, and suitable channels.'
        },
        {
          number: '03',
          title: 'Strategize',
          description:
            'We create a marketing strategy aligned with your business objectives.'
        },
        {
          number: '04',
          title: 'Execute',
          description:
            'We launch campaigns and distribute content across selected digital channels.'
        },
        {
          number: '05',
          title: 'Measure',
          description:
            'We track important metrics, conversions, engagement, traffic, and campaign performance.'
        },
        {
          number: '06',
          title: 'Optimize',
          description:
            'We continuously improve campaigns using performance data and insights.'
        }
      ],

      benefits: [
        {
          icon: 'fa-eye',
          title: 'More Visibility',
          description:
            'Put your brand in front of more potential customers.'
        },
        {
          icon: 'fa-users',
          title: 'Better Audience Reach',
          description:
            'Reach audiences based on their interests, searches, demographics, and intent.'
        },
        {
          icon: 'fa-user-plus',
          title: 'More Opportunities',
          description:
            'Turn digital traffic and engagement into potential business enquiries.'
        },
        {
          icon: 'fa-chart-line',
          title: 'Scalable Growth',
          description:
            'Build marketing systems that can grow alongside your business.'
        }
      ],

      technologies: [
        'Google Ads',
        'Meta Ads',
        'Google Analytics',
        'Search Console',
        'Instagram',
        'Facebook',
        'LinkedIn'
      ],

      faqs: [
        {
          question: 'Which digital marketing channels should my business use?',
          answer:
            'The right channels depend on your audience, industry, goals, competition, and budget. We identify the channels that best match your business objectives.'
        },
        {
          question: 'How long does digital marketing take to show results?',
          answer:
            'Results vary by channel. Paid advertising can generate traffic quickly, while SEO and organic marketing generally require consistent long-term effort.'
        },
        {
          question: 'Can digital marketing generate leads?',
          answer:
            'Yes. Campaigns can be specifically designed around lead generation using targeted advertising, landing pages, content, search marketing, and conversion tracking.'
        },
        {
          question: 'Do you provide monthly marketing support?',
          answer:
            'Yes. Digital marketing is most effective when campaigns are continuously monitored, measured, and optimized.'
        }
      ]
    },


    // =====================================================
    // SEARCH ENGINE OPTIMIZATION
    // =====================================================

    {
      slug: 'search-engine-optimization',

      title: 'Search Engine Optimization',
      category: 'SEO',
      icon: 'fa-magnifying-glass',

      heroTitle: 'Get Found by People Already Looking for You.',

      heroDescription:
        'We improve your website visibility on search engines so potential customers can discover your business when they search for the products and services you provide.',

      overview: [
        {
          icon: 'fa-magnifying-glass',
          title: 'Search Focused'
        },
        {
          icon: 'fa-chart-line',
          title: 'Organic Growth'
        },
        {
          icon: 'fa-gears',
          title: 'Technically Optimized'
        },
        {
          icon: 'fa-ranking-star',
          title: 'Visibility Focused'
        }
      ],

      whyTitle: 'A Great Website Has Little Value If Nobody Can Find It.',

      whyDescription:
        'Search engines connect people with businesses every day. SEO helps your website appear when potential customers are actively searching for information, products, or services related to your business.',

      whyPoints: [
        'Increase search visibility',
        'Attract organic website traffic',
        'Reach high-intent customers',
        'Build long-term online authority',
        'Improve website experience',
        'Reduce dependence on paid traffic'
      ],

      featuresTitle: 'SEO Built Around Visibility, Relevance and Growth.',

      features: [
        {
          icon: 'fa-magnifying-glass-chart',
          title: 'Keyword Research',
          description:
            'Identify relevant searches and opportunities related to your business.'
        },
        {
          icon: 'fa-file-circle-check',
          title: 'On-Page SEO',
          description:
            'Optimize page content, titles, headings, metadata, images, and internal links.'
        },
        {
          icon: 'fa-gears',
          title: 'Technical SEO',
          description:
            'Improve crawling, indexing, performance, mobile usability, and technical structure.'
        },
        {
          icon: 'fa-location-dot',
          title: 'Local SEO',
          description:
            'Improve local visibility for customers searching for businesses in your area.'
        },
        {
          icon: 'fa-link',
          title: 'Authority Building',
          description:
            'Strengthen your website credibility and authority through sustainable SEO practices.'
        },
        {
          icon: 'fa-chart-simple',
          title: 'SEO Monitoring',
          description:
            'Monitor rankings, search visibility, website traffic, and optimization opportunities.'
        }
      ],

      process: [
        {
          number: '01',
          title: 'Audit',
          description:
            'Analyze your website structure, content, performance, indexing, and existing SEO.'
        },
        {
          number: '02',
          title: 'Research',
          description:
            'Research keywords, competitors, customer searches, and ranking opportunities.'
        },
        {
          number: '03',
          title: 'Strategy',
          description:
            'Develop an SEO roadmap based on your goals and search opportunities.'
        },
        {
          number: '04',
          title: 'Optimize',
          description:
            'Improve technical elements, content, pages, metadata, and website structure.'
        },
        {
          number: '05',
          title: 'Monitor',
          description:
            'Track search performance, rankings, traffic, indexing, and website health.'
        },
        {
          number: '06',
          title: 'Improve',
          description:
            'Continuously refine the SEO strategy based on performance and new opportunities.'
        }
      ],

      benefits: [
        {
          icon: 'fa-ranking-star',
          title: 'Better Visibility',
          description:
            'Improve your chances of appearing when potential customers search online.'
        },
        {
          icon: 'fa-users',
          title: 'Relevant Traffic',
          description:
            'Attract visitors who are already interested in what your business provides.'
        },
        {
          icon: 'fa-handshake',
          title: 'Greater Credibility',
          description:
            'A strong search presence can increase customer confidence and brand authority.'
        },
        {
          icon: 'fa-arrow-trend-up',
          title: 'Long-Term Growth',
          description:
            'Build an organic acquisition channel that can continue delivering value over time.'
        }
      ],

      technologies: [
        'Google Search Console',
        'Google Analytics',
        'Google Business Profile',
        'PageSpeed Insights'
      ],

      faqs: [
        {
          question: 'How long does SEO take?',
          answer:
            'SEO is a long-term strategy. The timeline depends on your website, competition, industry, existing authority, and the keywords you want to target.'
        },
        {
          question: 'Can you guarantee first position on Google?',
          answer:
            'No legitimate SEO provider can guarantee a specific Google ranking. We focus on sustainable optimization practices designed to improve visibility and organic performance.'
        },
        {
          question: 'Do you provide local SEO?',
          answer:
            'Yes. Local SEO can help businesses improve visibility for location-based searches and Google Maps results.'
        },
        {
          question: 'Do I need SEO after my website is launched?',
          answer:
            'A website provides your digital foundation, while ongoing SEO helps improve its visibility as search competition, content, and search behavior change.'
        }
      ]
    },


    // =====================================================
    // SOCIAL MEDIA MARKETING
    // =====================================================

    {
      slug: 'social-media-marketing',

      title: 'Social Media Marketing',
      category: 'Social Media',
      icon: 'fa-hashtag',

      heroTitle: 'Build Attention. Create Connection. Grow Your Brand.',

      heroDescription:
        'We help businesses build meaningful social media presence through strategic content, campaigns, audience engagement, and consistent brand communication.',

      overview: [
        {
          icon: 'fa-users',
          title: 'Audience Focused'
        },
        {
          icon: 'fa-heart',
          title: 'Engagement Driven'
        },
        {
          icon: 'fa-wand-magic-sparkles',
          title: 'Creative'
        },
        {
          icon: 'fa-chart-line',
          title: 'Growth Focused'
        }
      ],

      whyTitle: 'Your Customers Are on Social Media. Your Brand Should Be Too.',

      whyDescription:
        'Social platforms give businesses an opportunity to build awareness, communicate directly with audiences, showcase their personality, and create lasting customer relationships.',

      whyPoints: [
        'Build brand awareness',
        'Reach new audiences',
        'Engage with customers',
        'Showcase products and services',
        'Drive website traffic',
        'Generate business enquiries'
      ],

      featuresTitle: 'Everything You Need for a Strong Social Presence.',

      features: [
        {
          icon: 'fa-calendar-days',
          title: 'Content Strategy',
          description:
            'Plan content around your brand, audience, objectives, and campaigns.'
        },
        {
          icon: 'fa-photo-film',
          title: 'Content Creation',
          description:
            'Create attractive branded content designed for social platforms.'
        },
        {
          icon: 'fa-share-nodes',
          title: 'Publishing',
          description:
            'Maintain consistent publishing across relevant social media channels.'
        },
        {
          icon: 'fa-comments',
          title: 'Audience Engagement',
          description:
            'Build stronger relationships through meaningful audience interaction.'
        },
        {
          icon: 'fa-bullhorn',
          title: 'Campaigns',
          description:
            'Create social campaigns around promotions, launches, awareness, and growth.'
        },
        {
          icon: 'fa-chart-pie',
          title: 'Performance Analysis',
          description:
            'Track reach, engagement, audience growth, and content performance.'
        }
      ],

      process: [
        {
          number: '01',
          title: 'Research',
          description:
            'Understand your business, competitors, audience, and current social presence.'
        },
        {
          number: '02',
          title: 'Plan',
          description:
            'Develop your social strategy, content themes, and publishing plan.'
        },
        {
          number: '03',
          title: 'Create',
          description:
            'Produce engaging content aligned with your brand identity.'
        },
        {
          number: '04',
          title: 'Publish',
          description:
            'Publish content consistently across selected platforms.'
        },
        {
          number: '05',
          title: 'Engage',
          description:
            'Encourage interaction and build stronger audience relationships.'
        },
        {
          number: '06',
          title: 'Analyze',
          description:
            'Review performance and improve future content and campaigns.'
        }
      ],

      benefits: [
        {
          icon: 'fa-eye',
          title: 'Brand Awareness',
          description:
            'Increase the number of people who discover and recognize your brand.'
        },
        {
          icon: 'fa-users',
          title: 'Community Growth',
          description:
            'Build an audience interested in your business and content.'
        },
        {
          icon: 'fa-heart',
          title: 'Customer Connection',
          description:
            'Create stronger relationships through regular communication and engagement.'
        },
        {
          icon: 'fa-chart-line',
          title: 'Business Growth',
          description:
            'Use your social presence to support traffic, enquiries, campaigns, and sales.'
        }
      ],

      technologies: [
        'Instagram',
        'Facebook',
        'LinkedIn',
        'YouTube'
      ],

      faqs: [
        {
          question: 'Which social media platforms should my business use?',
          answer:
            'The best platforms depend on your target audience, industry, content type, and business objectives. We focus on platforms that are most relevant to your customers.'
        },
        {
          question: 'How often should we post?',
          answer:
            'Posting frequency depends on the platform and strategy. Consistency and content quality are generally more important than simply publishing a high volume of posts.'
        },
        {
          question: 'Do you create social media content?',
          answer:
            'Yes. Social media services can include content planning, branded creatives, captions, publishing, and campaign content.'
        }
      ]
    },


    // =====================================================
    // LEAD GENERATION
    // =====================================================

    {
      slug: 'lead-generation',

      title: 'Lead Generation',
      category: 'Digital Marketing',
      icon: 'fa-user-plus',

      heroTitle: 'Turn Online Attention Into Real Business Opportunities.',

      heroDescription:
        'We create targeted lead generation strategies designed to connect your business with potential customers who are genuinely interested in your products or services.',

      overview: [
        {
          icon: 'fa-crosshairs',
          title: 'Targeted'
        },
        {
          icon: 'fa-users',
          title: 'Customer Focused'
        },
        {
          icon: 'fa-filter',
          title: 'Quality Driven'
        },
        {
          icon: 'fa-chart-line',
          title: 'Growth Focused'
        }
      ],

      whyTitle: 'More Traffic Is Good. More Potential Customers Is Better.',

      whyDescription:
        'Lead generation focuses your marketing efforts on attracting people who are more likely to become customers, helping your business create a consistent pipeline of opportunities.',

      whyPoints: [
        'Reach potential customers',
        'Generate business enquiries',
        'Build a sales pipeline',
        'Improve campaign targeting',
        'Measure conversion performance',
        'Create scalable customer acquisition'
      ],

      featuresTitle: 'A Complete Lead Generation System.',

      features: [
        {
          icon: 'fa-users-viewfinder',
          title: 'Audience Targeting',
          description:
            'Identify and reach audiences most likely to need your services.'
        },
        {
          icon: 'fa-rectangle-ad',
          title: 'Lead Campaigns',
          description:
            'Create targeted advertising campaigns designed around lead generation.'
        },
        {
          icon: 'fa-window-maximize',
          title: 'Landing Pages',
          description:
            'Build conversion-focused pages that encourage visitors to take action.'
        },
        {
          icon: 'fa-file-signature',
          title: 'Lead Forms',
          description:
            'Create simple and effective enquiry forms that capture useful lead information.'
        },
        {
          icon: 'fa-bullseye',
          title: 'Conversion Tracking',
          description:
            'Measure which campaigns and channels are generating business opportunities.'
        },
        {
          icon: 'fa-chart-line',
          title: 'Optimization',
          description:
            'Improve targeting, messaging, pages, and campaigns using performance data.'
        }
      ],

      process: [
        {
          number: '01',
          title: 'Understand',
          description:
            'Understand your ideal customers, services, market, and business goals.'
        },
        {
          number: '02',
          title: 'Target',
          description:
            'Identify audiences and channels with strong potential.'
        },
        {
          number: '03',
          title: 'Build',
          description:
            'Create campaigns, landing pages, offers, and lead capture systems.'
        },
        {
          number: '04',
          title: 'Launch',
          description:
            'Launch campaigns across selected digital channels.'
        },
        {
          number: '05',
          title: 'Track',
          description:
            'Measure enquiries, conversion rates, sources, and campaign performance.'
        },
        {
          number: '06',
          title: 'Optimize',
          description:
            'Continuously improve campaigns to generate better opportunities.'
        }
      ],

      benefits: [
        {
          icon: 'fa-user-plus',
          title: 'More Enquiries',
          description:
            'Create more opportunities for your sales team or business.'
        },
        {
          icon: 'fa-crosshairs',
          title: 'Better Targeting',
          description:
            'Focus marketing efforts on audiences with stronger customer potential.'
        },
        {
          icon: 'fa-chart-simple',
          title: 'Measurable Results',
          description:
            'Understand where leads come from and how campaigns perform.'
        },
        {
          icon: 'fa-arrow-trend-up',
          title: 'Scalable Growth',
          description:
            'Develop repeatable systems for acquiring potential customers.'
        }
      ],

      technologies: [
        'Google Ads',
        'Meta Ads',
        'Landing Pages',
        'Google Analytics',
        'Conversion Tracking'
      ],

      faqs: [
        {
          question: 'What is considered a lead?',
          answer:
            'A lead is a potential customer who has shown interest in your business, such as by submitting an enquiry, requesting information, calling, or completing another meaningful action.'
        },
        {
          question: 'Which platforms can be used for lead generation?',
          answer:
            'Depending on your business, leads can come from Google Ads, Meta platforms, SEO, social media, landing pages, email marketing, and other digital channels.'
        },
        {
          question: 'Can you guarantee a specific number of leads?',
          answer:
            'Lead volume depends on factors such as market demand, competition, targeting, budget, offer, and conversion performance. We focus on building and optimizing campaigns around measurable results.'
        }
      ]
    },

    // =====================================================
// SOCIAL MEDIA MANAGEMENT
// =====================================================

{
  slug: 'social-media-management',
  title: 'Social Media Management',
  category: 'Social Media',
  icon: 'fa-share-nodes',

  heroTitle: 'Stay Consistent. Stay Relevant. Stay Connected.',
  heroDescription:
    'We manage your social media presence with strategic planning, consistent publishing, engaging content, and performance monitoring that keeps your brand active and connected with your audience.',

  overview: [
    { icon: 'fa-calendar-check', title: 'Consistent' },
    { icon: 'fa-wand-magic-sparkles', title: 'Creative' },
    { icon: 'fa-users', title: 'Audience Focused' },
    { icon: 'fa-chart-line', title: 'Growth Focused' }
  ],

  whyTitle: 'Your Social Presence Represents Your Brand Every Day.',
  whyDescription:
    'Consistent social media management helps your business stay visible, communicate professionally, build customer relationships, and maintain a recognizable brand presence.',

  whyPoints: [
    'Maintain consistent brand presence',
    'Save time managing social platforms',
    'Engage with your audience',
    'Build brand recognition',
    'Keep content organized and relevant',
    'Monitor social performance'
  ],

  featuresTitle: 'Complete Social Media Management for Your Brand.',

  features: [
    {
      icon: 'fa-calendar-days',
      title: 'Content Planning',
      description: 'Plan relevant content around your brand, audience, campaigns, and business objectives.'
    },
    {
      icon: 'fa-photo-film',
      title: 'Content Creation',
      description: 'Create professional branded posts and social media creatives.'
    },
    {
      icon: 'fa-clock',
      title: 'Content Scheduling',
      description: 'Plan and publish content consistently across selected social platforms.'
    },
    {
      icon: 'fa-comments',
      title: 'Audience Engagement',
      description: 'Support meaningful communication and engagement with your audience.'
    },
    {
      icon: 'fa-fingerprint',
      title: 'Brand Consistency',
      description: 'Maintain consistent visual identity, messaging, and brand personality.'
    },
    {
      icon: 'fa-chart-pie',
      title: 'Performance Monitoring',
      description: 'Track content performance, reach, engagement, and audience growth.'
    }
  ],

  process: [
    { number: '01', title: 'Audit', description: 'Review your existing social presence and competitors.' },
    { number: '02', title: 'Strategize', description: 'Define your audience, platforms, content direction, and objectives.' },
    { number: '03', title: 'Plan', description: 'Create a structured social media content calendar.' },
    { number: '04', title: 'Create', description: 'Produce branded content and engaging social creatives.' },
    { number: '05', title: 'Publish', description: 'Schedule and publish content consistently.' },
    { number: '06', title: 'Analyze', description: 'Measure performance and continuously improve the strategy.' }
  ],

  benefits: [
    { icon: 'fa-eye', title: 'Consistent Visibility', description: 'Keep your business visible and active across social platforms.' },
    { icon: 'fa-gem', title: 'Stronger Brand', description: 'Build a consistent and recognizable social identity.' },
    { icon: 'fa-users', title: 'Audience Connection', description: 'Build stronger relationships with customers and followers.' },
    { icon: 'fa-clock', title: 'Save Time', description: 'Let us manage your social presence while you focus on your business.' }
  ],

  technologies: ['Instagram', 'Facebook', 'LinkedIn', 'YouTube'],

  faqs: [
    {
      question: 'What does social media management include?',
      answer: 'It can include strategy, content planning, creative development, scheduling, publishing, engagement, and performance monitoring.'
    },
    {
      question: 'Which social platforms can you manage?',
      answer: 'Platform selection depends on your business and audience. Common platforms include Instagram, Facebook, LinkedIn, and YouTube.'
    },
    {
      question: 'Will you create the posts?',
      answer: 'Yes. Content creation can include branded graphics, captions, promotional posts, and other content based on your strategy.'
    }
  ]
},

// =====================================================
// BUSINESS WEBSITES
// =====================================================

{
  slug: 'business-websites',
  title: 'Business Websites',
  category: 'Web Development',
  icon: 'fa-building',

  heroTitle: 'Give Your Business the Digital Presence It Deserves.',
  heroDescription:
    'We create professional business websites that communicate your value, establish credibility, showcase your services, and convert visitors into enquiries.',

  overview: [
    { icon: 'fa-building', title: 'Professional' },
    { icon: 'fa-mobile-screen', title: 'Responsive' },
    { icon: 'fa-handshake', title: 'Trust Focused' },
    { icon: 'fa-chart-line', title: 'Growth Ready' }
  ],

  whyTitle: 'Your Website Is Often Your Customer’s First Impression.',
  whyDescription:
    'A professional business website gives potential customers a place to understand your company, evaluate your services, build confidence, and contact you.',

  whyPoints: [
    'Establish business credibility',
    'Showcase your services',
    'Generate customer enquiries',
    'Build trust with potential customers',
    'Be accessible around the clock',
    'Support your marketing activities'
  ],

  featuresTitle: 'Everything Your Business Website Needs.',

  features: [
    { icon: 'fa-palette', title: 'Professional Design', description: 'A modern design aligned with your business identity.' },
    { icon: 'fa-mobile-screen', title: 'Responsive Layout', description: 'Optimized experiences across mobile, tablet, and desktop.' },
    { icon: 'fa-file-lines', title: 'Service Pages', description: 'Clearly communicate your services and business value.' },
    { icon: 'fa-address-card', title: 'Contact Integration', description: 'Make it simple for potential customers to reach your business.' },
    { icon: 'fa-magnifying-glass', title: 'SEO Foundation', description: 'Search-friendly structure to support online visibility.' },
    { icon: 'fa-gauge-high', title: 'Performance', description: 'Fast and optimized pages for a better visitor experience.' }
  ],

  process: [
    { number: '01', title: 'Discover', description: 'Understand your business, audience, services, and objectives.' },
    { number: '02', title: 'Structure', description: 'Plan pages, navigation, content, and customer journeys.' },
    { number: '03', title: 'Design', description: 'Create a professional visual experience for your brand.' },
    { number: '04', title: 'Develop', description: 'Build a responsive and high-performing website.' },
    { number: '05', title: 'Test', description: 'Test functionality, responsiveness, forms, and performance.' },
    { number: '06', title: 'Launch', description: 'Deploy your business website and provide required support.' }
  ],

  benefits: [
    { icon: 'fa-handshake', title: 'More Trust', description: 'Create a professional presence customers can trust.' },
    { icon: 'fa-eye', title: 'More Visibility', description: 'Give customers another way to discover your business.' },
    { icon: 'fa-user-plus', title: 'More Enquiries', description: 'Guide visitors toward contacting your business.' },
    { icon: 'fa-chart-line', title: 'Growth Platform', description: 'Create a foundation for future digital marketing.' }
  ],

  technologies: ['Angular', 'React', '.NET', 'WordPress'],

  faqs: [
    {
      question: 'What pages should a business website have?',
      answer: 'Common pages include Home, About, Services, Contact, FAQs, and service-specific pages. The exact structure depends on your business.'
    },
    {
      question: 'Will the website work on mobile?',
      answer: 'Yes. Business websites are designed to work across mobile phones, tablets, laptops, and desktops.'
    },
    {
      question: 'Can customers contact us through the website?',
      answer: 'Yes. We can integrate enquiry forms, phone links, email links, social profiles, and other contact options.'
    }
  ]
},

// =====================================================
// E-COMMERCE STORES
// =====================================================

{
  slug: 'e-commerce-stores',
  title: 'E-Commerce Stores',
  category: 'Web Development',
  icon: 'fa-cart-shopping',

  heroTitle: 'Turn Your Products Into an Online Shopping Experience.',
  heroDescription:
    'We build modern e-commerce stores designed to showcase products beautifully, simplify purchasing, accept secure payments, and help your business sell online.',

  overview: [
    { icon: 'fa-cart-shopping', title: 'Sales Focused' },
    { icon: 'fa-credit-card', title: 'Secure Payments' },
    { icon: 'fa-mobile-screen', title: 'Mobile Friendly' },
    { icon: 'fa-chart-line', title: 'Scalable' }
  ],

  whyTitle: 'Your Customers Should Be Able to Buy Whenever They Are Ready.',
  whyDescription:
    'An e-commerce store allows your business to reach customers beyond physical locations and provides a convenient shopping experience available around the clock.',

  whyPoints: [
    'Sell products online 24/7',
    'Reach customers beyond your location',
    'Accept secure online payments',
    'Manage products and orders',
    'Create convenient shopping experiences',
    'Support scalable online sales'
  ],

  featuresTitle: 'Everything You Need to Start Selling Online.',

  features: [
    { icon: 'fa-box-open', title: 'Product Management', description: 'Organize products, categories, pricing, images, and information.' },
    { icon: 'fa-cart-shopping', title: 'Shopping Cart', description: 'Provide customers with a simple and convenient purchasing journey.' },
    { icon: 'fa-credit-card', title: 'Payment Integration', description: 'Integrate suitable secure online payment solutions.' },
    { icon: 'fa-truck', title: 'Order Management', description: 'Manage customer purchases and order information efficiently.' },
    { icon: 'fa-mobile-screen', title: 'Responsive Store', description: 'Deliver smooth shopping experiences across different devices.' },
    { icon: 'fa-chart-line', title: 'Sales Analytics', description: 'Understand store activity and important e-commerce performance data.' }
  ],

  process: [
    { number: '01', title: 'Discover', description: 'Understand your products, customers, operations, and requirements.' },
    { number: '02', title: 'Plan', description: 'Plan store structure, categories, checkout, payments, and functionality.' },
    { number: '03', title: 'Design', description: 'Create an attractive and conversion-friendly shopping experience.' },
    { number: '04', title: 'Develop', description: 'Build the store and integrate required e-commerce functionality.' },
    { number: '05', title: 'Test', description: 'Test products, checkout, payments, responsiveness, and user journeys.' },
    { number: '06', title: 'Launch', description: 'Deploy your online store and prepare it for customers.' }
  ],

  benefits: [
    { icon: 'fa-globe', title: 'Wider Reach', description: 'Sell beyond the limitations of a physical location.' },
    { icon: 'fa-clock', title: '24/7 Sales', description: 'Allow customers to shop whenever it is convenient.' },
    { icon: 'fa-bag-shopping', title: 'Better Shopping', description: 'Create an easy and professional buying experience.' },
    { icon: 'fa-chart-line', title: 'Scalable Sales', description: 'Build a platform capable of growing with your business.' }
  ],

  technologies: ['Shopify', 'WooCommerce', 'Custom Development', 'Payment Gateways'],

  faqs: [
    {
      question: 'Can you integrate online payments?',
      answer: 'Yes. Suitable payment gateways can be integrated based on your platform, business requirements, and supported providers.'
    },
    {
      question: 'Can I manage products myself?',
      answer: 'Yes. Depending on the solution, your store can provide an administration system for managing products, prices, inventory, and orders.'
    },
    {
      question: 'Will the store work on mobile?',
      answer: 'Yes. The store will be designed for responsive shopping across mobile, tablet, and desktop devices.'
    }
  ]
},

// =====================================================
// CUSTOM WEB APPLICATIONS
// =====================================================

{
  slug: 'custom-web-applications',
  title: 'Custom Web Applications',
  category: 'Web Development',
  icon: 'fa-laptop-code',

  heroTitle: 'Software Built Around the Way Your Business Works.',
  heroDescription:
    'We develop custom web applications designed around your workflows, customers, processes, and business requirements.',

  overview: [
    { icon: 'fa-code', title: 'Custom Built' },
    { icon: 'fa-gears', title: 'Process Focused' },
    { icon: 'fa-layer-group', title: 'Scalable' },
    { icon: 'fa-shield-halved', title: 'Reliable' }
  ],

  whyTitle: 'Your Business Should Not Have to Fit Into Generic Software.',
  whyDescription:
    'Custom web applications allow technology to match your actual processes instead of forcing your business to work around the limitations of off-the-shelf software.',

  whyPoints: [
    'Automate business processes',
    'Create custom workflows',
    'Improve operational efficiency',
    'Integrate existing systems',
    'Build customer-facing platforms',
    'Scale functionality as your business grows'
  ],

  featuresTitle: 'Custom Technology Designed for Your Requirements.',

  features: [
    { icon: 'fa-pen-ruler', title: 'UI / UX', description: 'Interfaces designed around real users and workflows.' },
    { icon: 'fa-code', title: 'Custom Development', description: 'Functionality developed specifically around your requirements.' },
    { icon: 'fa-database', title: 'Database Solutions', description: 'Structured data management designed for your application.' },
    { icon: 'fa-plug', title: 'API Integration', description: 'Connect external systems and services where required.' },
    { icon: 'fa-shield-halved', title: 'Security', description: 'Apply appropriate security practices throughout development.' },
    { icon: 'fa-layer-group', title: 'Scalable Architecture', description: 'Build a foundation capable of supporting future growth.' }
  ],

  process: [
    { number: '01', title: 'Analyze', description: 'Understand the problem, workflows, users, and requirements.' },
    { number: '02', title: 'Architect', description: 'Plan the technical architecture, data, modules, and integrations.' },
    { number: '03', title: 'Design', description: 'Design intuitive interfaces and user journeys.' },
    { number: '04', title: 'Develop', description: 'Build the application using suitable technologies.' },
    { number: '05', title: 'Test', description: 'Test functionality, workflows, integrations, and usability.' },
    { number: '06', title: 'Deploy', description: 'Deploy the application and support its ongoing evolution.' }
  ],

  benefits: [
    { icon: 'fa-gears', title: 'Better Efficiency', description: 'Digitize and streamline business workflows.' },
    { icon: 'fa-puzzle-piece', title: 'Exact Fit', description: 'Build functionality around your actual requirements.' },
    { icon: 'fa-layer-group', title: 'Scalable', description: 'Expand your application as requirements grow.' },
    { icon: 'fa-chart-line', title: 'Business Value', description: 'Use technology to improve operations and customer experiences.' }
  ],

  technologies: ['Angular', 'React', '.NET', 'Node.js', 'SQL'],

  faqs: [
    {
      question: 'What is a custom web application?',
      answer: 'It is browser-based software developed specifically around the workflows, users, and requirements of a particular business.'
    },
    {
      question: 'Can you integrate our existing systems?',
      answer: 'Where suitable APIs or integration methods are available, existing platforms and third-party services can be connected.'
    },
    {
      question: 'Can the application grow later?',
      answer: 'Yes. We can design the architecture with future features, integrations, users, and business growth in mind.'
    }
  ]
},

// =====================================================
// LANDING PAGES
// =====================================================

{
  slug: 'landing-pages',
  title: 'Landing Pages',
  category: 'Web Development',
  icon: 'fa-window-maximize',

  heroTitle: 'One Page. One Goal. More Conversions.',
  heroDescription:
    'We create focused landing pages that turn campaign traffic into enquiries, sign-ups, bookings, or other valuable customer actions.',

  overview: [
    { icon: 'fa-bullseye', title: 'Conversion Focused' },
    { icon: 'fa-bolt', title: 'Fast' },
    { icon: 'fa-mobile-screen', title: 'Responsive' },
    { icon: 'fa-chart-line', title: 'Campaign Ready' }
  ],

  whyTitle: 'Advertising Gets the Click. Your Landing Page Must Win the Customer.',
  whyDescription:
    'A focused landing page removes unnecessary distractions and guides visitors toward one clear action aligned with your marketing campaign.',

  whyPoints: [
    'Improve campaign conversions',
    'Create focused customer journeys',
    'Generate enquiries and leads',
    'Support paid advertising',
    'Communicate offers clearly',
    'Measure campaign performance'
  ],

  featuresTitle: 'Landing Pages Designed to Convert.',

  features: [
    { icon: 'fa-heading', title: 'Strong Messaging', description: 'Clear headlines and content aligned with visitor intent.' },
    { icon: 'fa-palette', title: 'Conversion Design', description: 'Layouts designed to guide attention toward important actions.' },
    { icon: 'fa-bullseye', title: 'Strong CTA', description: 'Clear calls-to-action that encourage visitors to take the next step.' },
    { icon: 'fa-file-signature', title: 'Lead Forms', description: 'Simple forms designed to capture relevant customer information.' },
    { icon: 'fa-mobile-screen', title: 'Responsive', description: 'Optimized experiences across mobile and desktop.' },
    { icon: 'fa-chart-simple', title: 'Tracking Ready', description: 'Support for measuring important visitor actions and conversions.' }
  ],

  process: [
    { number: '01', title: 'Goal', description: 'Define the primary campaign objective and conversion action.' },
    { number: '02', title: 'Research', description: 'Understand the audience, offer, traffic source, and messaging.' },
    { number: '03', title: 'Structure', description: 'Plan content hierarchy and conversion journey.' },
    { number: '04', title: 'Design', description: 'Create an attractive conversion-focused layout.' },
    { number: '05', title: 'Develop', description: 'Build a responsive and performance-focused landing page.' },
    { number: '06', title: 'Track', description: 'Configure relevant conversion measurement where required.' }
  ],

  benefits: [
    { icon: 'fa-bullseye', title: 'Focused Journey', description: 'Guide visitors toward one important action.' },
    { icon: 'fa-user-plus', title: 'More Leads', description: 'Turn campaign traffic into potential customers.' },
    { icon: 'fa-chart-simple', title: 'Measurable', description: 'Measure campaign actions and conversions.' },
    { icon: 'fa-rectangle-ad', title: 'Better Campaigns', description: 'Give paid advertising a dedicated destination.' }
  ],

  technologies: ['Angular', 'HTML', 'CSS', 'Google Analytics', 'Conversion Tracking'],

  faqs: [
    {
      question: 'Why use a landing page instead of my homepage?',
      answer: 'A landing page focuses on one campaign, audience, offer, and action, while a homepage usually serves many different purposes.'
    },
    {
      question: 'Can you connect the page to advertising campaigns?',
      answer: 'Yes. Landing pages can be created specifically for Google Ads, Meta Ads, and other marketing campaigns.'
    },
    {
      question: 'Can you track form submissions?',
      answer: 'Yes. Appropriate analytics and conversion tracking can be configured where required.'
    }
  ]
},

// =====================================================
// PORTFOLIO WEBSITES
// =====================================================

{
  slug: 'portfolio-websites',
  title: 'Portfolio Websites',
  category: 'Web Development',
  icon: 'fa-briefcase',

  heroTitle: 'Show Your Best Work. Make a Lasting Impression.',
  heroDescription:
    'We create elegant portfolio websites that help professionals, creators, freelancers, and businesses showcase their work, expertise, and achievements.',

  overview: [
    { icon: 'fa-wand-magic-sparkles', title: 'Creative' },
    { icon: 'fa-images', title: 'Visual' },
    { icon: 'fa-mobile-screen', title: 'Responsive' },
    { icon: 'fa-user-tie', title: 'Professional' }
  ],

  whyTitle: 'Great Work Deserves a Great Presentation.',
  whyDescription:
    'A professional portfolio gives potential customers, employers, and partners an easy way to understand your expertise and see the quality of your work.',

  whyPoints: [
    'Showcase your best work',
    'Build professional credibility',
    'Create a personal or business brand',
    'Highlight skills and achievements',
    'Make your work easy to discover',
    'Generate enquiries and opportunities'
  ],

  featuresTitle: 'A Portfolio Designed Around Your Work.',

  features: [
    { icon: 'fa-images', title: 'Project Showcase', description: 'Present projects with attractive visual layouts.' },
    { icon: 'fa-user', title: 'About Section', description: 'Tell visitors who you are and what you do.' },
    { icon: 'fa-briefcase', title: 'Experience', description: 'Highlight relevant experience, capabilities, and achievements.' },
    { icon: 'fa-mobile-screen', title: 'Responsive Design', description: 'Showcase your work beautifully across devices.' },
    { icon: 'fa-envelope', title: 'Contact Options', description: 'Make it easy for visitors to contact you.' },
    { icon: 'fa-share-nodes', title: 'Social Integration', description: 'Connect your portfolio with relevant social profiles.' }
  ],

  process: [
    { number: '01', title: 'Discover', description: 'Understand your work, audience, style, and objectives.' },
    { number: '02', title: 'Organize', description: 'Select and structure projects, achievements, and content.' },
    { number: '03', title: 'Design', description: 'Create a visual style that represents your identity.' },
    { number: '04', title: 'Develop', description: 'Build the responsive portfolio experience.' },
    { number: '05', title: 'Refine', description: 'Polish content, interactions, and presentation.' },
    { number: '06', title: 'Launch', description: 'Publish your portfolio for the world to see.' }
  ],

  benefits: [
    { icon: 'fa-eye', title: 'Better Visibility', description: 'Make your work accessible to potential opportunities.' },
    { icon: 'fa-star', title: 'Professional Image', description: 'Present yourself or your business professionally.' },
    { icon: 'fa-briefcase', title: 'Show Your Expertise', description: 'Demonstrate capabilities through real work.' },
    { icon: 'fa-envelope', title: 'More Opportunities', description: 'Make it easier for people to contact and work with you.' }
  ],

  technologies: ['Angular', 'React', 'WordPress', 'Responsive Design'],

  faqs: [
    {
      question: 'Who needs a portfolio website?',
      answer: 'Portfolio websites are useful for freelancers, designers, developers, photographers, creators, consultants, agencies, and other professionals.'
    },
    {
      question: 'Can I showcase multiple projects?',
      answer: 'Yes. Projects can be organized into categories, case studies, galleries, or individual project pages.'
    },
    {
      question: 'Can you link my social profiles?',
      answer: 'Yes. Relevant professional and social profiles can be integrated into the website.'
    }
  ]
},

// =====================================================
// WEBSITE REDESIGN
// =====================================================

{
  slug: 'website-redesign',
  title: 'Website Redesign',
  category: 'Web Development',
  icon: 'fa-arrows-rotate',

  heroTitle: 'Your Business Has Evolved. Your Website Should Too.',
  heroDescription:
    'We transform outdated websites into modern, responsive, engaging, and performance-focused digital experiences.',

  overview: [
    { icon: 'fa-wand-magic-sparkles', title: 'Modern' },
    { icon: 'fa-mobile-screen', title: 'Responsive' },
    { icon: 'fa-bolt', title: 'Faster' },
    { icon: 'fa-chart-line', title: 'Growth Focused' }
  ],

  whyTitle: 'An Outdated Website Can Make a Great Business Look Outdated.',
  whyDescription:
    'Website redesign helps improve visual quality, usability, responsiveness, performance, messaging, and the overall impression customers have of your business.',

  whyPoints: [
    'Modernize your digital presence',
    'Improve mobile experience',
    'Improve website usability',
    'Strengthen brand presentation',
    'Improve website performance',
    'Create better conversion journeys'
  ],

  featuresTitle: 'Transform Your Existing Website.',

  features: [
    { icon: 'fa-magnifying-glass', title: 'Website Review', description: 'Identify weaknesses and opportunities in your existing website.' },
    { icon: 'fa-palette', title: 'Visual Redesign', description: 'Create a cleaner and more modern visual experience.' },
    { icon: 'fa-sitemap', title: 'Better Structure', description: 'Improve navigation, page hierarchy, and customer journeys.' },
    { icon: 'fa-mobile-screen', title: 'Mobile Optimization', description: 'Create a better experience across different screen sizes.' },
    { icon: 'fa-bolt', title: 'Performance', description: 'Improve relevant frontend and technical performance areas.' },
    { icon: 'fa-bullseye', title: 'Conversion Focus', description: 'Make important customer actions clearer and easier.' }
  ],

  process: [
    { number: '01', title: 'Audit', description: 'Review the existing website, content, design, and performance.' },
    { number: '02', title: 'Strategy', description: 'Define redesign priorities and business objectives.' },
    { number: '03', title: 'Restructure', description: 'Improve navigation, pages, messaging, and customer journeys.' },
    { number: '04', title: 'Redesign', description: 'Create the new visual experience.' },
    { number: '05', title: 'Develop', description: 'Implement the approved redesign.' },
    { number: '06', title: 'Launch', description: 'Test and launch the improved website.' }
  ],

  benefits: [
    { icon: 'fa-star', title: 'Modern Brand', description: 'Give customers a stronger first impression.' },
    { icon: 'fa-mobile-screen', title: 'Better Experience', description: 'Improve usability across devices.' },
    { icon: 'fa-bolt', title: 'Better Performance', description: 'Improve speed and technical quality where possible.' },
    { icon: 'fa-user-plus', title: 'Better Conversions', description: 'Create clearer journeys toward customer actions.' }
  ],

  technologies: ['Angular', 'React', 'WordPress', 'UI / UX'],

  faqs: [
    {
      question: 'Do I need a redesign or a completely new website?',
      answer: 'That depends on your existing technology, structure, content, performance, and business requirements. We can review the current website before recommending the right approach.'
    },
    {
      question: 'Can existing content be retained?',
      answer: 'Yes. Useful existing content can often be retained, improved, reorganized, or migrated into the redesigned website.'
    },
    {
      question: 'Will the redesigned website be mobile friendly?',
      answer: 'Yes. Responsive behavior is an important part of the redesign process.'
    }
  ]
},

// =====================================================
// LOCAL SEO
// =====================================================

{
  slug: 'local-seo',
  title: 'Local SEO',
  category: 'SEO',
  icon: 'fa-location-dot',

  heroTitle: 'Be Found by Customers Right Around the Corner.',
  heroDescription:
    'We improve your local search presence so nearby customers can discover your business when searching for the products and services you provide.',

  overview: [
    { icon: 'fa-location-dot', title: 'Local Focused' },
    { icon: 'fa-map-location-dot', title: 'Maps Visibility' },
    { icon: 'fa-users', title: 'Customer Focused' },
    { icon: 'fa-chart-line', title: 'Organic Growth' }
  ],

  whyTitle: 'Nearby Customers Are Searching. Make Sure They Can Find You.',
  whyDescription:
    'Local SEO helps businesses improve their visibility for location-based searches and connect with customers looking for nearby services.',

  whyPoints: [
    'Improve local search visibility',
    'Reach nearby customers',
    'Strengthen Google Business presence',
    'Improve Maps visibility',
    'Increase local website traffic',
    'Generate local enquiries'
  ],

  featuresTitle: 'Build a Stronger Local Search Presence.',

  features: [
    { icon: 'fa-map-location-dot', title: 'Google Business Profile', description: 'Optimize important business information and profile elements.' },
    { icon: 'fa-key', title: 'Local Keywords', description: 'Research searches relevant to your services and target locations.' },
    { icon: 'fa-file-circle-check', title: 'Local On-Page SEO', description: 'Optimize relevant website pages for local search intent.' },
    { icon: 'fa-address-card', title: 'Business Information', description: 'Improve consistency of important business information.' },
    { icon: 'fa-star', title: 'Reputation Support', description: 'Support strategies that strengthen your local online reputation.' },
    { icon: 'fa-chart-simple', title: 'Performance Tracking', description: 'Monitor relevant local search performance and opportunities.' }
  ],

  process: [
    { number: '01', title: 'Audit', description: 'Review your existing local search presence.' },
    { number: '02', title: 'Research', description: 'Identify local keywords, competitors, and opportunities.' },
    { number: '03', title: 'Optimize', description: 'Improve website and Google Business Profile information.' },
    { number: '04', title: 'Strengthen', description: 'Improve relevant local signals and business information.' },
    { number: '05', title: 'Monitor', description: 'Track visibility, traffic, and local search performance.' },
    { number: '06', title: 'Improve', description: 'Continue optimizing based on opportunities and results.' }
  ],

  benefits: [
    { icon: 'fa-location-dot', title: 'Local Visibility', description: 'Improve discovery for relevant local searches.' },
    { icon: 'fa-users', title: 'Nearby Customers', description: 'Reach customers located around your business.' },
    { icon: 'fa-phone', title: 'More Enquiries', description: 'Create more opportunities for calls and enquiries.' },
    { icon: 'fa-store', title: 'Stronger Presence', description: 'Build a more professional local digital presence.' }
  ],

  technologies: ['Google Business Profile', 'Google Search', 'Google Maps', 'Search Console'],

  faqs: [
    {
      question: 'Who should use local SEO?',
      answer: 'Local SEO is especially useful for businesses serving customers in specific cities, regions, or physical service areas.'
    },
    {
      question: 'Does local SEO help Google Maps visibility?',
      answer: 'Local optimization can support visibility in relevant local and Maps searches, although rankings depend on multiple factors controlled by search engines.'
    },
    {
      question: 'Do I need a website for local SEO?',
      answer: 'A Google Business Profile can provide local visibility, but a well-optimized website can significantly strengthen your overall local search presence.'
    }
  ]
},

// =====================================================
// ON-PAGE SEO
// =====================================================

{
  slug: 'on-page-seo',
  title: 'On-Page SEO',
  category: 'SEO',
  icon: 'fa-file-circle-check',

  heroTitle: 'Make Every Page Easier to Find and Better to Understand.',
  heroDescription:
    'We optimize your website pages, content, headings, metadata, images, and internal structure to improve relevance for search engines and usability for visitors.',

  overview: [
    { icon: 'fa-file-lines', title: 'Content Focused' },
    { icon: 'fa-key', title: 'Keyword Driven' },
    { icon: 'fa-sitemap', title: 'Structured' },
    { icon: 'fa-magnifying-glass', title: 'Search Friendly' }
  ],

  whyTitle: 'Every Important Page Should Clearly Communicate What It Is About.',
  whyDescription:
    'On-page SEO improves the content and structure search engines use to understand individual pages while also creating clearer experiences for visitors.',

  whyPoints: [
    'Improve page relevance',
    'Optimize titles and metadata',
    'Improve content structure',
    'Strengthen internal linking',
    'Optimize important keywords',
    'Improve search visibility'
  ],

  featuresTitle: 'Optimize Every Important Element of Your Pages.',

  features: [
    { icon: 'fa-key', title: 'Keyword Mapping', description: 'Align relevant keywords with appropriate website pages.' },
    { icon: 'fa-heading', title: 'Heading Optimization', description: 'Improve heading structure and page hierarchy.' },
    { icon: 'fa-file-lines', title: 'Content Optimization', description: 'Improve content relevance, clarity, and search alignment.' },
    { icon: 'fa-tags', title: 'Metadata', description: 'Optimize titles and descriptions for important pages.' },
    { icon: 'fa-link', title: 'Internal Linking', description: 'Improve connections between relevant website content.' },
    { icon: 'fa-image', title: 'Image Optimization', description: 'Improve relevant image attributes and page performance considerations.' }
  ],

  process: [
    { number: '01', title: 'Audit', description: 'Review existing pages and optimization opportunities.' },
    { number: '02', title: 'Research', description: 'Identify relevant keywords and search intent.' },
    { number: '03', title: 'Map', description: 'Assign appropriate search themes to pages.' },
    { number: '04', title: 'Optimize', description: 'Improve content, metadata, headings, links, and page elements.' },
    { number: '05', title: 'Review', description: 'Check page quality and implementation.' },
    { number: '06', title: 'Monitor', description: 'Observe search performance and identify future improvements.' }
  ],

  benefits: [
    { icon: 'fa-magnifying-glass', title: 'Better Relevance', description: 'Help search engines understand your pages.' },
    { icon: 'fa-eye', title: 'Better Visibility', description: 'Strengthen pages for relevant searches.' },
    { icon: 'fa-users', title: 'Better Experience', description: 'Create clearer and more organized content.' },
    { icon: 'fa-link', title: 'Better Structure', description: 'Improve connections between website pages.' }
  ],

  technologies: ['Google Search Console', 'Google Analytics', 'SEO Research Tools'],

  faqs: [
    {
      question: 'What is on-page SEO?',
      answer: 'On-page SEO involves optimizing individual website pages, including their content, headings, metadata, images, links, and other relevant elements.'
    },
    {
      question: 'Do you rewrite website content?',
      answer: 'Content can be improved or restructured where needed to better serve visitors and align with relevant search intent.'
    },
    {
      question: 'Is on-page SEO enough by itself?',
      answer: 'It is an important part of SEO, but technical health, authority, competition, content quality, and other factors also influence organic performance.'
    }
  ]
},

// =====================================================
// TECHNICAL SEO
// =====================================================

{
  slug: 'technical-seo',
  title: 'Technical SEO',
  category: 'SEO',
  icon: 'fa-gears',

  heroTitle: 'Build a Strong Technical Foundation for Better Search Visibility.',
  heroDescription:
    'We identify and improve technical website issues that can affect crawling, indexing, performance, mobile usability, and search engine visibility.',

  overview: [
    { icon: 'fa-gears', title: 'Technical' },
    { icon: 'fa-bolt', title: 'Performance' },
    { icon: 'fa-sitemap', title: 'Structured' },
    { icon: 'fa-robot', title: 'Crawl Friendly' }
  ],

  whyTitle: 'Great Content Still Needs a Strong Technical Foundation.',
  whyDescription:
    'Technical problems can make it harder for search engines to crawl, understand, and index your website correctly. Technical SEO helps remove those barriers.',

  whyPoints: [
    'Improve crawlability',
    'Identify indexing problems',
    'Improve website performance',
    'Improve mobile usability',
    'Strengthen website architecture',
    'Identify technical SEO issues'
  ],

  featuresTitle: 'Technical Optimization Behind the Scenes.',

  features: [
    { icon: 'fa-robot', title: 'Crawl Analysis', description: 'Identify issues affecting search engine access to important pages.' },
    { icon: 'fa-list-check', title: 'Indexing Review', description: 'Review how important website pages are represented in search indexes.' },
    { icon: 'fa-gauge-high', title: 'Performance', description: 'Identify technical opportunities related to loading and user experience.' },
    { icon: 'fa-mobile-screen', title: 'Mobile Review', description: 'Check important mobile usability considerations.' },
    { icon: 'fa-sitemap', title: 'Site Architecture', description: 'Review structure, navigation, URLs, and internal organization.' },
    { icon: 'fa-file-code', title: 'Technical Elements', description: 'Review relevant technical search configurations and implementation.' }
  ],

  process: [
    { number: '01', title: 'Crawl', description: 'Analyze the website from a technical search perspective.' },
    { number: '02', title: 'Diagnose', description: 'Identify technical issues and prioritize their impact.' },
    { number: '03', title: 'Plan', description: 'Create a structured technical improvement plan.' },
    { number: '04', title: 'Fix', description: 'Implement or support relevant technical improvements.' },
    { number: '05', title: 'Validate', description: 'Verify implemented changes and configurations.' },
    { number: '06', title: 'Monitor', description: 'Continue monitoring website health and new issues.' }
  ],

  benefits: [
    { icon: 'fa-robot', title: 'Better Crawlability', description: 'Make important content easier for search engines to access.' },
    { icon: 'fa-bolt', title: 'Better Performance', description: 'Improve relevant technical performance areas.' },
    { icon: 'fa-sitemap', title: 'Better Structure', description: 'Create a clearer website architecture.' },
    { icon: 'fa-magnifying-glass', title: 'SEO Foundation', description: 'Strengthen the technical base supporting organic search.' }
  ],

  technologies: ['Google Search Console', 'PageSpeed Insights', 'Lighthouse', 'Technical Crawlers'],

  faqs: [
    {
      question: 'What does a technical SEO audit check?',
      answer: 'It can review crawling, indexing, website architecture, URLs, mobile usability, performance, internal linking, and other technical search considerations.'
    },
    {
      question: 'Is technical SEO only for large websites?',
      answer: 'No. Websites of different sizes can experience technical issues that affect search visibility.'
    },
    {
      question: 'Do developers need to implement the fixes?',
      answer: 'Some improvements can be made through website settings, while others may require frontend, backend, server, or platform changes.'
    }
  ]
},

// =====================================================
// GOOGLE BUSINESS PROFILE OPTIMIZATION
// =====================================================

{
  slug: 'google-business-profile-optimization',
  title: 'Google Business Profile Optimization',
  category: 'SEO',
  icon: 'fa-map-location-dot',

  heroTitle: 'Stand Out When Local Customers Search for Your Business.',
  heroDescription:
    'We optimize your Google Business Profile to present accurate information, strengthen your local presence, and help customers discover and engage with your business.',

  overview: [
    { icon: 'fa-google', title: 'Google Focused' },
    { icon: 'fa-map-location-dot', title: 'Local Visibility' },
    { icon: 'fa-store', title: 'Business Ready' },
    { icon: 'fa-users', title: 'Customer Focused' }
  ],

  whyTitle: 'Your Google Business Profile Can Be a Customer’s First Contact With You.',
  whyDescription:
    'An accurate and complete business profile helps potential customers quickly understand who you are, what you offer, where you operate, and how to contact you.',

  whyPoints: [
    'Improve business information',
    'Strengthen local presence',
    'Improve customer discovery',
    'Showcase services and images',
    'Support Google Maps visibility',
    'Make contacting your business easier'
  ],

  featuresTitle: 'Optimize Your Google Business Presence.',

  features: [
    { icon: 'fa-address-card', title: 'Profile Information', description: 'Review and optimize important business information.' },
    { icon: 'fa-list', title: 'Categories', description: 'Configure relevant business categories where appropriate.' },
    { icon: 'fa-image', title: 'Visual Content', description: 'Improve presentation through relevant business photos and visuals.' },
    { icon: 'fa-box', title: 'Products & Services', description: 'Present relevant services or products when supported.' },
    { icon: 'fa-star', title: 'Review Strategy', description: 'Support healthy practices for managing customer reviews.' },
    { icon: 'fa-chart-simple', title: 'Profile Monitoring', description: 'Monitor important profile activity and optimization opportunities.' }
  ],

  process: [
    { number: '01', title: 'Review', description: 'Review your current Google Business presence.' },
    { number: '02', title: 'Correct', description: 'Improve inaccurate or incomplete business information.' },
    { number: '03', title: 'Optimize', description: 'Improve categories, services, descriptions, and relevant profile elements.' },
    { number: '04', title: 'Enhance', description: 'Strengthen the profile with useful content and visuals.' },
    { number: '05', title: 'Monitor', description: 'Review activity and profile health.' },
    { number: '06', title: 'Improve', description: 'Continue improving the profile as your business evolves.' }
  ],

  benefits: [
    { icon: 'fa-map-location-dot', title: 'Local Presence', description: 'Create a stronger presence in local Google experiences.' },
    { icon: 'fa-eye', title: 'Better Discovery', description: 'Help potential customers discover useful business information.' },
    { icon: 'fa-handshake', title: 'More Trust', description: 'Present accurate and professional business information.' },
    { icon: 'fa-phone', title: 'More Actions', description: 'Make calling, visiting, or contacting your business easier.' }
  ],

  technologies: ['Google Business Profile', 'Google Maps', 'Google Search'],

  faqs: [
    {
      question: 'Is Google Business Profile free?',
      answer: 'Google provides Business Profiles without a subscription fee, although eligibility and features are governed by Google.'
    },
    {
      question: 'Can optimization guarantee higher Maps rankings?',
      answer: 'No. Google determines local rankings using multiple factors. Optimization focuses on creating an accurate, complete, and useful business presence.'
    },
    {
      question: 'Can you optimize an existing profile?',
      answer: 'Yes. Existing profiles can be reviewed and improved based on available information and relevant opportunities.'
    }
  ]
},

// =====================================================
// GOOGLE ADS
// =====================================================

{
  slug: 'google-ads',
  title: 'Google Ads',
  category: 'Advertising',
  icon: 'fa-chart-line',

  heroTitle: 'Reach Customers at the Moment They Are Searching.',
  heroDescription:
    'We create and manage targeted Google Ads campaigns designed to connect your business with people actively searching for relevant products and services.',

  overview: [
    { icon: 'fa-crosshairs', title: 'Targeted' },
    { icon: 'fa-magnifying-glass', title: 'High Intent' },
    { icon: 'fa-chart-simple', title: 'Measurable' },
    { icon: 'fa-bullseye', title: 'Conversion Focused' }
  ],

  whyTitle: 'Reach Potential Customers When Their Intent Is High.',
  whyDescription:
    'Google Ads allows businesses to appear for relevant searches and direct interested users toward pages designed around specific products, services, or offers.',

  whyPoints: [
    'Reach high-intent searches',
    'Drive targeted website traffic',
    'Generate enquiries',
    'Control campaign budgets',
    'Measure important actions',
    'Optimize campaigns using data'
  ],

  featuresTitle: 'Performance-Focused Google Advertising.',

  features: [
    { icon: 'fa-key', title: 'Keyword Research', description: 'Identify relevant commercial search opportunities.' },
    { icon: 'fa-bullhorn', title: 'Campaign Setup', description: 'Structure campaigns around services, goals, and audiences.' },
    { icon: 'fa-pen', title: 'Ad Creation', description: 'Create clear advertising messages aligned with search intent.' },
    { icon: 'fa-users-viewfinder', title: 'Targeting', description: 'Configure appropriate targeting based on campaign objectives.' },
    { icon: 'fa-bullseye', title: 'Conversion Tracking', description: 'Measure important customer actions where tracking is available.' },
    { icon: 'fa-chart-line', title: 'Optimization', description: 'Continuously improve campaigns based on performance data.' }
  ],

  process: [
    { number: '01', title: 'Research', description: 'Understand your market, services, competition, and search demand.' },
    { number: '02', title: 'Plan', description: 'Define campaign goals, targeting, keywords, and budget strategy.' },
    { number: '03', title: 'Build', description: 'Create campaign structure, ads, and relevant destinations.' },
    { number: '04', title: 'Launch', description: 'Launch campaigns with appropriate tracking.' },
    { number: '05', title: 'Analyze', description: 'Monitor clicks, conversions, search terms, and other relevant metrics.' },
    { number: '06', title: 'Optimize', description: 'Improve targeting, bids, ads, keywords, and landing experiences.' }
  ],

  benefits: [
    { icon: 'fa-magnifying-glass', title: 'High Intent', description: 'Reach people actively searching for relevant solutions.' },
    { icon: 'fa-bolt', title: 'Fast Visibility', description: 'Paid campaigns can begin generating visibility once active.' },
    { icon: 'fa-chart-simple', title: 'Measurable', description: 'Measure important campaign interactions and outcomes.' },
    { icon: 'fa-sliders', title: 'Flexible', description: 'Adjust campaigns, targeting, and budgets as needed.' }
  ],

  technologies: ['Google Ads', 'Google Analytics', 'Google Tag Manager', 'Conversion Tracking'],

  faqs: [
    {
      question: 'How much should I spend on Google Ads?',
      answer: 'The appropriate budget depends on your industry, competition, location, search demand, goals, and expected customer value.'
    },
    {
      question: 'Do Google Ads guarantee leads?',
      answer: 'No. Campaign performance depends on targeting, competition, offer, website experience, budget, demand, and many other factors.'
    },
    {
      question: 'Can you track enquiries from ads?',
      answer: 'Where technically possible, conversion tracking can measure actions such as forms, calls, purchases, or other important events.'
    }
  ]
},

// =====================================================
// META ADS
// =====================================================

{
  slug: 'meta-ads',
  title: 'Meta Ads',
  category: 'Advertising',
  icon: 'fa-rectangle-ad',

  heroTitle: 'Put Your Brand in Front of the People Who Matter.',
  heroDescription:
    'We create Facebook and Instagram advertising campaigns designed to build awareness, reach targeted audiences, generate leads, and drive meaningful customer actions.',

  overview: [
    { icon: 'fa-users-viewfinder', title: 'Audience Targeted' },
    { icon: 'fa-photo-film', title: 'Creative' },
    { icon: 'fa-user-plus', title: 'Lead Focused' },
    { icon: 'fa-chart-line', title: 'Optimized' }
  ],

  whyTitle: 'Your Customers Spend Time on Social Media Every Day.',
  whyDescription:
    'Meta advertising gives businesses powerful ways to reach audiences through Facebook and Instagram using engaging creative, targeting options, and measurable campaigns.',

  whyPoints: [
    'Reach targeted audiences',
    'Build brand awareness',
    'Generate potential leads',
    'Promote products and offers',
    'Retarget interested audiences',
    'Measure campaign performance'
  ],

  featuresTitle: 'Meta Campaigns Designed Around Your Goals.',

  features: [
    { icon: 'fa-users-viewfinder', title: 'Audience Strategy', description: 'Define audiences aligned with your campaign goals.' },
    { icon: 'fa-photo-film', title: 'Ad Creatives', description: 'Develop engaging advertising concepts and visual content.' },
    { icon: 'fa-pen', title: 'Ad Copy', description: 'Create clear messaging designed around the campaign objective.' },
    { icon: 'fa-user-plus', title: 'Lead Campaigns', description: 'Build campaigns focused on generating potential customer enquiries.' },
    { icon: 'fa-crosshairs', title: 'Retargeting', description: 'Reconnect with relevant audiences who previously interacted with your business.' },
    { icon: 'fa-chart-simple', title: 'Optimization', description: 'Review campaign data and improve performance over time.' }
  ],

  process: [
    { number: '01', title: 'Research', description: 'Understand your audience, offer, competitors, and objectives.' },
    { number: '02', title: 'Strategize', description: 'Plan targeting, campaign structure, creative, and budget.' },
    { number: '03', title: 'Create', description: 'Develop campaign visuals, copy, and destinations.' },
    { number: '04', title: 'Launch', description: 'Launch Facebook and Instagram campaigns.' },
    { number: '05', title: 'Measure', description: 'Monitor relevant campaign and conversion metrics.' },
    { number: '06', title: 'Optimize', description: 'Improve targeting, creative, messaging, and campaign allocation.' }
  ],

  benefits: [
    { icon: 'fa-users', title: 'Audience Reach', description: 'Reach relevant audiences across Facebook and Instagram.' },
    { icon: 'fa-eye', title: 'Brand Awareness', description: 'Introduce your business to more potential customers.' },
    { icon: 'fa-user-plus', title: 'Lead Opportunities', description: 'Create campaigns designed around customer enquiries.' },
    { icon: 'fa-chart-simple', title: 'Measurable', description: 'Understand how advertising campaigns are performing.' }
  ],

  technologies: ['Meta Ads Manager', 'Facebook', 'Instagram', 'Meta Pixel'],

  faqs: [
    {
      question: 'Are Meta Ads suitable for every business?',
      answer: 'Suitability depends on your audience, offer, industry, objectives, budget, and whether your customers actively use Meta platforms.'
    },
    {
      question: 'Can Meta Ads generate leads?',
      answer: 'Yes. Meta supports several campaign approaches that can be used for lead generation.'
    },
    {
      question: 'Do you create the advertisements?',
      answer: 'Campaign services can include advertising strategy, copy, creative direction, setup, and optimization depending on the engagement.'
    }
  ]
},

// =====================================================
// PPC CAMPAIGN MANAGEMENT
// =====================================================

{
  slug: 'ppc-campaign-management',
  title: 'PPC Campaign Management',
  category: 'Advertising',
  icon: 'fa-arrow-pointer',

  heroTitle: 'Make Every Advertising Click Work Harder.',
  heroDescription:
    'We manage pay-per-click campaigns with structured targeting, measurement, analysis, and ongoing optimization focused on your business objectives.',

  overview: [
    { icon: 'fa-crosshairs', title: 'Targeted' },
    { icon: 'fa-chart-simple', title: 'Measured' },
    { icon: 'fa-sliders', title: 'Optimized' },
    { icon: 'fa-bullseye', title: 'Goal Focused' }
  ],

  whyTitle: 'Paid Advertising Needs More Than Just a Budget.',
  whyDescription:
    'Effective PPC management requires ongoing analysis and optimization to ensure your campaigns remain aligned with audiences, competition, costs, and business objectives.',

  whyPoints: [
    'Improve campaign structure',
    'Control advertising spend',
    'Reach relevant audiences',
    'Track campaign outcomes',
    'Identify wasted spend',
    'Continuously optimize performance'
  ],

  featuresTitle: 'End-to-End PPC Campaign Management.',

  features: [
    { icon: 'fa-magnifying-glass-chart', title: 'Campaign Research', description: 'Research audiences, keywords, competition, and opportunities.' },
    { icon: 'fa-diagram-project', title: 'Campaign Structure', description: 'Organize campaigns around clear objectives.' },
    { icon: 'fa-users-viewfinder', title: 'Targeting', description: 'Configure relevant audience and search targeting.' },
    { icon: 'fa-bullseye', title: 'Conversion Tracking', description: 'Measure important customer actions where possible.' },
    { icon: 'fa-chart-line', title: 'Optimization', description: 'Continuously improve campaign elements using data.' },
    { icon: 'fa-file-lines', title: 'Performance Review', description: 'Review important results and opportunities.' }
  ],

  process: [
    { number: '01', title: 'Audit', description: 'Review existing campaigns or advertising opportunities.' },
    { number: '02', title: 'Plan', description: 'Define goals, audiences, channels, and campaign structure.' },
    { number: '03', title: 'Build', description: 'Configure campaigns, advertisements, targeting, and tracking.' },
    { number: '04', title: 'Launch', description: 'Launch campaigns with controlled settings and budgets.' },
    { number: '05', title: 'Analyze', description: 'Review performance and identify opportunities.' },
    { number: '06', title: 'Optimize', description: 'Continuously improve campaigns based on results.' }
  ],

  benefits: [
    { icon: 'fa-crosshairs', title: 'Better Targeting', description: 'Focus advertising on more relevant audiences.' },
    { icon: 'fa-wallet', title: 'Budget Control', description: 'Manage advertising budgets more strategically.' },
    { icon: 'fa-chart-simple', title: 'Clear Measurement', description: 'Understand relevant campaign outcomes.' },
    { icon: 'fa-arrow-trend-up', title: 'Continuous Improvement', description: 'Use data to refine campaigns over time.' }
  ],

  technologies: ['Google Ads', 'Meta Ads', 'Google Analytics', 'Conversion Tracking'],

  faqs: [
    {
      question: 'What does PPC mean?',
      answer: 'PPC means pay-per-click, a digital advertising model where advertisers can pay when users click their advertisements.'
    },
    {
      question: 'Do you manage the advertising budget?',
      answer: 'We can help plan and manage campaigns, while advertising spend is typically paid directly to the advertising platform by the client.'
    },
    {
      question: 'How often should campaigns be optimized?',
      answer: 'Campaigns should be reviewed regularly, with the appropriate frequency depending on spend, traffic, conversion volume, and campaign maturity.'
    }
  ]
},

// =====================================================
// RETARGETING CAMPAIGNS
// =====================================================

{
  slug: 'retargeting-campaigns',
  title: 'Retargeting Campaigns',
  category: 'Advertising',
  icon: 'fa-crosshairs',

  heroTitle: 'Bring Interested Customers Back to Your Business.',
  heroDescription:
    'We create retargeting campaigns designed to reconnect with relevant audiences who previously interacted with your website or digital presence.',

  overview: [
    { icon: 'fa-rotate', title: 'Reconnect' },
    { icon: 'fa-users-viewfinder', title: 'Audience Focused' },
    { icon: 'fa-bullseye', title: 'Conversion Focused' },
    { icon: 'fa-chart-line', title: 'Optimized' }
  ],

  whyTitle: 'Not Every Interested Visitor Converts the First Time.',
  whyDescription:
    'Retargeting gives businesses another opportunity to stay visible to eligible audiences who previously showed interest but did not complete an important action.',

  whyPoints: [
    'Reconnect with previous visitors',
    'Stay visible after initial interest',
    'Support conversion campaigns',
    'Promote relevant offers',
    'Create segmented audiences',
    'Improve campaign strategy'
  ],

  featuresTitle: 'Reconnect With Audiences That Already Know You.',

  features: [
    { icon: 'fa-users', title: 'Audience Segmentation', description: 'Create relevant groups based on available audience interactions.' },
    { icon: 'fa-photo-film', title: 'Retargeting Creative', description: 'Develop messaging for returning audiences.' },
    { icon: 'fa-tags', title: 'Offer Strategy', description: 'Present appropriate offers or reminders where suitable.' },
    { icon: 'fa-route', title: 'Customer Journey', description: 'Align campaigns with different stages of customer interest.' },
    { icon: 'fa-bullseye', title: 'Conversion Tracking', description: 'Measure important campaign actions where available.' },
    { icon: 'fa-chart-line', title: 'Optimization', description: 'Refine audiences and campaigns based on performance.' }
  ],

  process: [
    { number: '01', title: 'Analyze', description: 'Understand existing traffic and customer journeys.' },
    { number: '02', title: 'Segment', description: 'Define useful retargeting audiences.' },
    { number: '03', title: 'Create', description: 'Develop relevant advertising messages and creative.' },
    { number: '04', title: 'Launch', description: 'Launch retargeting campaigns on suitable platforms.' },
    { number: '05', title: 'Measure', description: 'Monitor engagement and relevant conversion metrics.' },
    { number: '06', title: 'Optimize', description: 'Improve audience strategy and campaign performance.' }
  ],

  benefits: [
    { icon: 'fa-rotate', title: 'Reconnect', description: 'Reach eligible audiences who previously showed interest.' },
    { icon: 'fa-eye', title: 'Stay Visible', description: 'Keep your brand present during the consideration journey.' },
    { icon: 'fa-bullseye', title: 'Conversion Support', description: 'Encourage interested audiences to return.' },
    { icon: 'fa-chart-line', title: 'Campaign Value', description: 'Create additional value from existing marketing traffic.' }
  ],

  technologies: ['Google Ads', 'Meta Ads', 'Meta Pixel', 'Google Analytics'],

  faqs: [
    {
      question: 'What is retargeting?',
      answer: 'Retargeting is an advertising approach used to reach eligible audiences who previously interacted with your website, app, or digital content.'
    },
    {
      question: 'Can every website visitor be retargeted?',
      answer: 'No. Retargeting depends on platform policies, consent requirements, privacy settings, tracking availability, and audience eligibility.'
    },
    {
      question: 'Which platforms support retargeting?',
      answer: 'Platforms such as Google and Meta provide audience and remarketing capabilities subject to their current policies and requirements.'
    }
  ]
},

// =====================================================
// BRAND DEVELOPMENT
// =====================================================

{
  slug: 'brand-development',
  title: 'Brand Development',
  category: 'Branding',
  icon: 'fa-gem',

  heroTitle: 'Build a Brand People Recognize, Remember and Trust.',
  heroDescription:
    'We help businesses create a clear and consistent brand identity that communicates who they are, what they stand for, and why customers should choose them.',

  overview: [
    { icon: 'fa-gem', title: 'Distinctive' },
    { icon: 'fa-fingerprint', title: 'Consistent' },
    { icon: 'fa-heart', title: 'Memorable' },
    { icon: 'fa-bullseye', title: 'Strategic' }
  ],

  whyTitle: 'A Brand Is More Than a Logo.',
  whyDescription:
    'Your brand combines identity, messaging, personality, positioning, and customer perception. Strong branding creates consistency and helps businesses become easier to recognize and remember.',

  whyPoints: [
    'Create a recognizable identity',
    'Build customer trust',
    'Communicate business values',
    'Create visual consistency',
    'Differentiate your business',
    'Support long-term marketing'
  ],

  featuresTitle: 'Build Every Part of Your Brand With Purpose.',

  features: [
    { icon: 'fa-compass', title: 'Brand Direction', description: 'Define the strategic direction and personality of your brand.' },
    { icon: 'fa-bullseye', title: 'Positioning', description: 'Clarify how your business should be presented in the market.' },
    { icon: 'fa-pen-nib', title: 'Visual Identity', description: 'Develop visual elements that consistently represent your brand.' },
    { icon: 'fa-message', title: 'Brand Messaging', description: 'Create clearer communication around your business and value.' },
    { icon: 'fa-palette', title: 'Design System', description: 'Establish consistent visual styles across brand materials.' },
    { icon: 'fa-book-open', title: 'Brand Guidelines', description: 'Document important brand rules for consistent future use.' }
  ],

  process: [
    { number: '01', title: 'Discover', description: 'Understand your business, audience, competitors, and vision.' },
    { number: '02', title: 'Define', description: 'Clarify positioning, values, personality, and direction.' },
    { number: '03', title: 'Explore', description: 'Develop creative directions for the brand.' },
    { number: '04', title: 'Design', description: 'Create visual and communication elements.' },
    { number: '05', title: 'Refine', description: 'Improve and finalize the selected brand direction.' },
    { number: '06', title: 'Apply', description: 'Extend the brand consistently across relevant touchpoints.' }
  ],

  benefits: [
    { icon: 'fa-eye', title: 'Recognition', description: 'Create an identity customers can recognize.' },
    { icon: 'fa-handshake', title: 'Trust', description: 'Present your business consistently and professionally.' },
    { icon: 'fa-gem', title: 'Differentiation', description: 'Stand apart from competitors with a distinctive identity.' },
    { icon: 'fa-bullhorn', title: 'Better Marketing', description: 'Give future marketing a consistent brand foundation.' }
  ],

  technologies: ['Brand Strategy', 'Visual Identity', 'Brand Guidelines', 'Creative Design'],

  faqs: [
    {
      question: 'What is included in brand development?',
      answer: 'The exact scope varies, but it can include positioning, identity, visual direction, messaging, logo development, colors, typography, and brand guidelines.'
    },
    {
      question: 'Is branding only for new businesses?',
      answer: 'No. Existing businesses can also refresh or reposition their brand as their market, audience, or business evolves.'
    },
    {
      question: 'Can you redesign an existing brand?',
      answer: 'Yes. Existing identities can be reviewed and refreshed while retaining useful brand recognition where appropriate.'
    }
  ]
},

// =====================================================
// UI / UX DESIGN
// =====================================================

{
  slug: 'ui-ux-design',
  title: 'UI / UX Design',
  category: 'Branding',
  icon: 'fa-pen-ruler',

  heroTitle: 'Beautiful to Look At. Effortless to Use.',
  heroDescription:
    'We design modern digital interfaces that combine visual quality with clear navigation, intuitive interactions, and user-focused experiences.',

  overview: [
    { icon: 'fa-palette', title: 'Beautiful' },
    { icon: 'fa-users', title: 'User Focused' },
    { icon: 'fa-route', title: 'Intuitive' },
    { icon: 'fa-mobile-screen', title: 'Responsive' }
  ],

  whyTitle: 'Good Design Is Not Just About How It Looks.',
  whyDescription:
    'Effective UI/UX design helps users understand what to do, find what they need, and complete important actions with less friction.',

  whyPoints: [
    'Improve user experience',
    'Create intuitive navigation',
    'Strengthen visual quality',
    'Improve customer journeys',
    'Reduce unnecessary friction',
    'Create consistent interfaces'
  ],

  featuresTitle: 'Design Experiences Users Enjoy Using.',

  features: [
    { icon: 'fa-users', title: 'User Experience', description: 'Plan experiences around user needs and business objectives.' },
    { icon: 'fa-sitemap', title: 'Information Architecture', description: 'Organize content and functionality clearly.' },
    { icon: 'fa-pencil', title: 'Wireframes', description: 'Plan page structures and interactions before visual design.' },
    { icon: 'fa-palette', title: 'UI Design', description: 'Create polished visual interfaces aligned with your brand.' },
    { icon: 'fa-mobile-screen', title: 'Responsive Design', description: 'Design experiences across different screen sizes.' },
    { icon: 'fa-object-group', title: 'Design Systems', description: 'Create reusable interface patterns for greater consistency.' }
  ],

  process: [
    { number: '01', title: 'Understand', description: 'Understand users, business goals, requirements, and constraints.' },
    { number: '02', title: 'Structure', description: 'Plan information hierarchy and user journeys.' },
    { number: '03', title: 'Wireframe', description: 'Create initial layouts and interaction structures.' },
    { number: '04', title: 'Design', description: 'Develop the visual interface and responsive states.' },
    { number: '05', title: 'Review', description: 'Review usability, consistency, and business alignment.' },
    { number: '06', title: 'Handoff', description: 'Prepare designs and specifications for implementation.' }
  ],

  benefits: [
    { icon: 'fa-face-smile', title: 'Better Experience', description: 'Make digital products easier and more enjoyable to use.' },
    { icon: 'fa-bullseye', title: 'Clearer Actions', description: 'Guide users toward important tasks and conversions.' },
    { icon: 'fa-gem', title: 'Professional Design', description: 'Create polished experiences aligned with your brand.' },
    { icon: 'fa-layer-group', title: 'Consistency', description: 'Create reusable patterns across your digital product.' }
  ],

  technologies: ['Figma', 'Wireframing', 'Prototyping', 'Responsive Design'],

  faqs: [
    {
      question: 'What is the difference between UI and UX?',
      answer: 'UX focuses on how the experience works and feels, while UI focuses more directly on the visual and interactive interface users see.'
    },
    {
      question: 'Do you design before development?',
      answer: 'For projects that benefit from dedicated design, wireframes and interface designs can be created before development begins.'
    },
    {
      question: 'Can you redesign an existing interface?',
      answer: 'Yes. Existing websites and applications can be reviewed and redesigned to improve usability and visual quality.'
    }
  ]
},

// =====================================================
// SOCIAL MEDIA CONTENT CREATION
// =====================================================

{
  slug: 'social-media-content-creation',
  title: 'Social Media Content Creation',
  category: 'Social Media',
  icon: 'fa-photo-film',

  heroTitle: 'Content That Looks Like Your Brand and Speaks to Your Audience.',
  heroDescription:
    'We create branded social media content designed to communicate your message clearly, strengthen your identity, and keep your audience engaged.',

  overview: [
    { icon: 'fa-wand-magic-sparkles', title: 'Creative' },
    { icon: 'fa-fingerprint', title: 'On Brand' },
    { icon: 'fa-users', title: 'Audience Focused' },
    { icon: 'fa-calendar-days', title: 'Consistent' }
  ],

  whyTitle: 'Your Content Shapes How People See Your Brand.',
  whyDescription:
    'Consistent, recognizable, and useful content helps businesses communicate professionally and gives audiences a reason to continue engaging with the brand.',

  whyPoints: [
    'Create consistent branded content',
    'Improve social media presentation',
    'Communicate offers clearly',
    'Support campaigns and promotions',
    'Build brand recognition',
    'Maintain audience engagement'
  ],

  featuresTitle: 'Creative Content Built Around Your Brand.',

  features: [
    { icon: 'fa-image', title: 'Social Posts', description: 'Branded visual posts designed for relevant platforms.' },
    { icon: 'fa-bullhorn', title: 'Promotional Creatives', description: 'Content for offers, campaigns, launches, and announcements.' },
    { icon: 'fa-pen', title: 'Captions', description: 'Clear social copy aligned with your brand and objectives.' },
    { icon: 'fa-layer-group', title: 'Content Themes', description: 'Develop repeatable content themes for greater consistency.' },
    { icon: 'fa-fingerprint', title: 'Brand Consistency', description: 'Maintain recognizable visual and communication styles.' },
    { icon: 'fa-calendar-days', title: 'Content Planning', description: 'Organize content around campaigns and publishing schedules.' }
  ],

  process: [
    { number: '01', title: 'Understand', description: 'Understand your brand, audience, services, and goals.' },
    { number: '02', title: 'Plan', description: 'Define content themes and communication priorities.' },
    { number: '03', title: 'Concept', description: 'Develop creative ideas for posts and campaigns.' },
    { number: '04', title: 'Create', description: 'Design visual content and supporting copy.' },
    { number: '05', title: 'Review', description: 'Review brand consistency and messaging.' },
    { number: '06', title: 'Deliver', description: 'Prepare approved content for publishing.' }
  ],

  benefits: [
    { icon: 'fa-eye', title: 'Better Presence', description: 'Create a stronger visual social presence.' },
    { icon: 'fa-fingerprint', title: 'Brand Consistency', description: 'Make your content more recognizable.' },
    { icon: 'fa-users', title: 'Engagement', description: 'Give audiences relevant content to interact with.' },
    { icon: 'fa-bullhorn', title: 'Campaign Support', description: 'Support promotions and marketing activities with creative content.' }
  ],

  technologies: ['Instagram', 'Facebook', 'LinkedIn', 'Creative Design'],

  faqs: [
    {
      question: 'What types of social content do you create?',
      answer: 'Content can include branded posts, promotional creatives, campaign content, informational posts, captions, and other platform-appropriate assets.'
    },
    {
      question: 'Will the designs match my brand?',
      answer: 'Yes. Existing brand colors, typography, visual style, and messaging can be incorporated into the content.'
    },
    {
      question: 'Can you also manage posting?',
      answer: 'Yes. Social media management can be provided separately when you need planning, scheduling, publishing, and ongoing management.'
    }
  ]
},

// =====================================================
// CONTENT MARKETING
// =====================================================

{
  slug: 'content-marketing',
  title: 'Content Marketing',
  category: 'Digital Marketing',
  icon: 'fa-file-pen',

  heroTitle: 'Create Content People Find Useful and Brands Benefit From.',
  heroDescription:
    'We develop strategic content designed to educate audiences, strengthen brand authority, support search visibility, and move potential customers closer to your business.',

  overview: [
    { icon: 'fa-lightbulb', title: 'Strategic' },
    { icon: 'fa-file-lines', title: 'Valuable' },
    { icon: 'fa-magnifying-glass', title: 'Discoverable' },
    { icon: 'fa-chart-line', title: 'Growth Focused' }
  ],

  whyTitle: 'Useful Content Gives Customers a Reason to Discover and Trust You.',
  whyDescription:
    'Content marketing helps businesses answer customer questions, demonstrate expertise, support SEO, and build relationships before a customer is ready to buy.',

  whyPoints: [
    'Build brand authority',
    'Support organic search',
    'Educate potential customers',
    'Create long-term marketing assets',
    'Support social media campaigns',
    'Strengthen customer trust'
  ],

  featuresTitle: 'Content With a Clear Business Purpose.',

  features: [
    { icon: 'fa-compass', title: 'Content Strategy', description: 'Define content themes aligned with audience and business goals.' },
    { icon: 'fa-magnifying-glass', title: 'Topic Research', description: 'Identify useful topics and customer questions.' },
    { icon: 'fa-blog', title: 'Blog Content', description: 'Develop useful articles around relevant subjects.' },
    { icon: 'fa-file-lines', title: 'Website Content', description: 'Create clear content for important website pages.' },
    { icon: 'fa-share-nodes', title: 'Content Distribution', description: 'Plan how content can support multiple digital channels.' },
    { icon: 'fa-chart-simple', title: 'Performance Review', description: 'Review content performance and future opportunities.' }
  ],

  process: [
    { number: '01', title: 'Research', description: 'Understand audiences, competitors, topics, and search opportunities.' },
    { number: '02', title: 'Strategize', description: 'Define content goals, themes, formats, and priorities.' },
    { number: '03', title: 'Plan', description: 'Create a structured content plan.' },
    { number: '04', title: 'Create', description: 'Produce useful content aligned with the strategy.' },
    { number: '05', title: 'Publish', description: 'Publish and distribute content through appropriate channels.' },
    { number: '06', title: 'Improve', description: 'Review performance and refine future content.' }
  ],

  benefits: [
    { icon: 'fa-award', title: 'Authority', description: 'Demonstrate expertise through useful content.' },
    { icon: 'fa-magnifying-glass', title: 'Search Support', description: 'Create content capable of supporting organic discovery.' },
    { icon: 'fa-handshake', title: 'Trust', description: 'Help customers understand your expertise before contacting you.' },
    { icon: 'fa-recycle', title: 'Long-Term Value', description: 'Create marketing assets that can continue providing value.' }
  ],

  technologies: ['SEO Research', 'Website Content', 'Blogs', 'Analytics'],

  faqs: [
    {
      question: 'What types of content can you create?',
      answer: 'Content can include website copy, blogs, educational articles, social content, campaign content, and other formats based on your strategy.'
    },
    {
      question: 'Does content marketing help SEO?',
      answer: 'High-quality relevant content can support SEO by addressing useful search topics and strengthening the depth and relevance of a website.'
    },
    {
      question: 'How often should content be published?',
      answer: 'The appropriate frequency depends on available resources, audience needs, competition, strategy, and the quality of content you can consistently maintain.'
    }
  ]
},

// =====================================================
// EMAIL MARKETING
// =====================================================

{
  slug: 'email-marketing',
  title: 'Email Marketing',
  category: 'Digital Marketing',
  icon: 'fa-envelope',

  heroTitle: 'Turn Your Inbox Into a Customer Relationship Channel.',
  heroDescription:
    'We create targeted email campaigns that help businesses nurture leads, communicate offers, reconnect with customers, and maintain meaningful relationships.',

  overview: [
    { icon: 'fa-envelope', title: 'Direct' },
    { icon: 'fa-users', title: 'Audience Focused' },
    { icon: 'fa-gears', title: 'Automated' },
    { icon: 'fa-chart-simple', title: 'Measurable' }
  ],

  whyTitle: 'Stay Connected With People Who Already Know Your Business.',
  whyDescription:
    'Email marketing gives businesses a direct communication channel for nurturing customer relationships, sharing useful information, and promoting relevant products or services.',

  whyPoints: [
    'Nurture potential customers',
    'Reconnect with existing customers',
    'Promote products and offers',
    'Automate customer communication',
    'Build long-term relationships',
    'Measure campaign engagement'
  ],

  featuresTitle: 'Email Campaigns Built Around Customer Relationships.',

  features: [
    { icon: 'fa-users', title: 'Audience Segmentation', description: 'Organize audiences for more relevant communication.' },
    { icon: 'fa-envelope-open-text', title: 'Campaign Creation', description: 'Create targeted email campaigns around business goals.' },
    { icon: 'fa-pen', title: 'Email Copy', description: 'Develop clear and engaging email messaging.' },
    { icon: 'fa-palette', title: 'Email Design', description: 'Create professional branded email layouts.' },
    { icon: 'fa-gears', title: 'Automation', description: 'Configure suitable automated email journeys where supported.' },
    { icon: 'fa-chart-simple', title: 'Analytics', description: 'Review relevant email engagement and campaign performance.' }
  ],

  process: [
    { number: '01', title: 'Understand', description: 'Understand your audience, goals, and existing email activity.' },
    { number: '02', title: 'Segment', description: 'Organize audiences where relevant and permitted.' },
    { number: '03', title: 'Plan', description: 'Create campaign themes, offers, and communication schedules.' },
    { number: '04', title: 'Create', description: 'Develop email copy, design, and calls-to-action.' },
    { number: '05', title: 'Send', description: 'Launch campaigns through the selected email platform.' },
    { number: '06', title: 'Analyze', description: 'Review engagement and improve future campaigns.' }
  ],

  benefits: [
    { icon: 'fa-comments', title: 'Direct Communication', description: 'Reach opted-in audiences through their inbox.' },
    { icon: 'fa-heart', title: 'Customer Relationships', description: 'Stay connected beyond individual purchases or enquiries.' },
    { icon: 'fa-gears', title: 'Automation', description: 'Automate suitable communication journeys.' },
    { icon: 'fa-chart-simple', title: 'Measurement', description: 'Understand relevant campaign engagement.' }
  ],

  technologies: ['Email Marketing Platforms', 'Automation', 'Analytics', 'CRM Integration'],

  faqs: [
    {
      question: 'Can you send marketing emails to any email list?',
      answer: 'Email marketing should follow applicable consent, privacy, anti-spam, and platform requirements. Appropriate permission and lawful use of contact data are important.'
    },
    {
      question: 'Can emails be automated?',
      answer: 'Yes. Supported platforms can automate suitable journeys such as welcome messages, follow-ups, or other lifecycle communications.'
    },
    {
      question: 'Can you design branded emails?',
      answer: 'Yes. Email templates can be designed to reflect your brand identity while considering compatibility with email clients.'
    }
  ]
},

// =====================================================
// LOGO DESIGN
// =====================================================

{
  slug: 'logo-design',
  title: 'Logo Design',
  category: 'Branding',
  icon: 'fa-pen-nib',

  heroTitle: 'Create a Mark Your Customers Remember.',
  heroDescription:
    'We design distinctive professional logos that visually represent your business and provide a strong foundation for your brand identity.',

  overview: [
    { icon: 'fa-pen-nib', title: 'Original' },
    { icon: 'fa-gem', title: 'Distinctive' },
    { icon: 'fa-expand', title: 'Versatile' },
    { icon: 'fa-fingerprint', title: 'On Brand' }
  ],

  whyTitle: 'Your Logo Is One of the Most Recognizable Parts of Your Brand.',
  whyDescription:
    'A well-designed logo helps create recognition and provides a consistent visual symbol that can represent your business across digital and physical touchpoints.',

  whyPoints: [
    'Create brand recognition',
    'Build a professional identity',
    'Differentiate your business',
    'Create visual consistency',
    'Support marketing materials',
    'Establish a brand foundation'
  ],

  featuresTitle: 'A Logo Designed With Purpose.',

  features: [
    { icon: 'fa-lightbulb', title: 'Concept Development', description: 'Explore visual ideas based on your business and brand direction.' },
    { icon: 'fa-pen-nib', title: 'Logo Design', description: 'Develop a distinctive visual mark for your business.' },
    { icon: 'fa-font', title: 'Typography', description: 'Select typography that complements the identity.' },
    { icon: 'fa-palette', title: 'Color Direction', description: 'Develop a suitable color direction for the brand.' },
    { icon: 'fa-expand', title: 'Versatility', description: 'Consider how the logo works across different contexts.' },
    { icon: 'fa-file-export', title: 'Final Assets', description: 'Prepare appropriate final logo assets based on the project scope.' }
  ],

  process: [
    { number: '01', title: 'Discover', description: 'Understand your business, audience, personality, and competitors.' },
    { number: '02', title: 'Research', description: 'Explore relevant market and visual directions.' },
    { number: '03', title: 'Concept', description: 'Develop initial logo concepts.' },
    { number: '04', title: 'Refine', description: 'Improve the selected direction based on feedback.' },
    { number: '05', title: 'Finalize', description: 'Finalize typography, color, and logo details.' },
    { number: '06', title: 'Deliver', description: 'Prepare final approved assets.' }
  ],

  benefits: [
    { icon: 'fa-eye', title: 'Recognition', description: 'Create a recognizable symbol for your business.' },
    { icon: 'fa-user-tie', title: 'Professional Image', description: 'Present your business more professionally.' },
    { icon: 'fa-gem', title: 'Distinctive Identity', description: 'Build a visual identity unique to your brand.' },
    { icon: 'fa-layer-group', title: 'Consistency', description: 'Create a foundation for consistent branding.' }
  ],

  technologies: ['Logo Design', 'Vector Design', 'Typography', 'Brand Identity'],

  faqs: [
    {
      question: 'What information do you need before designing a logo?',
      answer: 'Understanding your business, audience, competitors, brand personality, preferences, and intended logo usage helps guide the design process.'
    },
    {
      question: 'Will the logo work on social media and websites?',
      answer: 'The design should consider different digital contexts and sizes so the identity remains practical and recognizable.'
    },
    {
      question: 'Can you redesign an existing logo?',
      answer: 'Yes. Existing logos can be refreshed or redesigned depending on your branding objectives.'
    }
  ]
},

// =====================================================
// GRAPHIC DESIGN
// =====================================================

{
  slug: 'graphic-design',
  title: 'Graphic Design',
  category: 'Branding',
  icon: 'fa-palette',

  heroTitle: 'Creative Design That Makes Your Brand Impossible to Ignore.',
  heroDescription:
    'We create professional visual assets for digital marketing, social media, advertising, promotions, and business communication.',

  overview: [
    { icon: 'fa-palette', title: 'Creative' },
    { icon: 'fa-fingerprint', title: 'On Brand' },
    { icon: 'fa-bullhorn', title: 'Marketing Ready' },
    { icon: 'fa-wand-magic-sparkles', title: 'Professional' }
  ],

  whyTitle: 'Strong Visual Communication Makes Your Message Easier to Notice.',
  whyDescription:
    'Professional graphic design helps businesses communicate clearly, maintain visual consistency, and create stronger impressions across marketing channels.',

  whyPoints: [
    'Improve visual communication',
    'Strengthen brand consistency',
    'Support marketing campaigns',
    'Create professional promotional materials',
    'Improve social media presentation',
    'Make important messages stand out'
  ],

  featuresTitle: 'Creative Design for Every Digital Touchpoint.',

  features: [
    { icon: 'fa-photo-film', title: 'Social Creatives', description: 'Branded graphics for social media communication.' },
    { icon: 'fa-rectangle-ad', title: 'Ad Creatives', description: 'Visual assets designed for advertising campaigns.' },
    { icon: 'fa-bullhorn', title: 'Promotional Designs', description: 'Creative assets for offers, launches, and promotions.' },
    { icon: 'fa-file-image', title: 'Marketing Materials', description: 'Visual materials supporting business communication.' },
    { icon: 'fa-layer-group', title: 'Brand Templates', description: 'Reusable templates for greater visual consistency.' },
    { icon: 'fa-wand-magic-sparkles', title: 'Creative Direction', description: 'Develop visual concepts around campaigns and messages.' }
  ],

  process: [
    { number: '01', title: 'Brief', description: 'Understand the objective, audience, format, and message.' },
    { number: '02', title: 'Concept', description: 'Develop suitable visual directions.' },
    { number: '03', title: 'Design', description: 'Create the visual asset.' },
    { number: '04', title: 'Review', description: 'Review content, branding, and visual quality.' },
    { number: '05', title: 'Refine', description: 'Apply agreed revisions.' },
    { number: '06', title: 'Deliver', description: 'Prepare approved assets for their intended use.' }
  ],

  benefits: [
    { icon: 'fa-eye', title: 'Attention', description: 'Create visuals designed to stand out.' },
    { icon: 'fa-fingerprint', title: 'Consistency', description: 'Maintain a recognizable brand appearance.' },
    { icon: 'fa-bullhorn', title: 'Better Marketing', description: 'Support campaigns with professional creative assets.' },
    { icon: 'fa-user-tie', title: 'Professional Image', description: 'Improve the visual quality of business communication.' }
  ],

  technologies: ['Digital Design', 'Social Media Creatives', 'Marketing Design', 'Brand Assets'],

  faqs: [
    {
      question: 'What graphic design services do you provide?',
      answer: 'Depending on the project, services can include social creatives, advertisements, promotional graphics, marketing materials, and branded templates.'
    },
    {
      question: 'Can you follow our existing brand guidelines?',
      answer: 'Yes. Existing colors, fonts, logos, visual rules, and other brand guidelines can be followed.'
    },
    {
      question: 'Can you create recurring social designs?',
      answer: 'Yes. Ongoing creative support can be provided as part of content creation or social media services.'
    }
  ]
},

// =====================================================
// PAYMENT GATEWAY INTEGRATION
// =====================================================

{
  slug: 'payment-gateway-integration',
  title: 'Payment Gateway Integration',
  category: 'Integration',
  icon: 'fa-credit-card',

  heroTitle: 'Make Online Payments Simple, Smooth and Secure.',
  heroDescription:
    'We integrate suitable payment gateways into websites and web applications so customers can complete online transactions through a streamlined payment experience.',

  overview: [
    { icon: 'fa-credit-card', title: 'Convenient' },
    { icon: 'fa-shield-halved', title: 'Secure' },
    { icon: 'fa-plug', title: 'Integrated' },
    { icon: 'fa-mobile-screen', title: 'Responsive' }
  ],

  whyTitle: 'A Smooth Checkout Experience Matters When Customers Are Ready to Pay.',
  whyDescription:
    'Payment gateway integration connects your website or application with supported payment providers and helps create a reliable transaction flow.',

  whyPoints: [
    'Accept online payments',
    'Create smoother checkout experiences',
    'Connect supported payment providers',
    'Handle transaction responses',
    'Support relevant payment methods',
    'Improve purchase convenience'
  ],

  featuresTitle: 'Payment Integration Built Around Your Platform.',

  features: [
    { icon: 'fa-plug', title: 'Gateway Integration', description: 'Connect your application with supported payment provider APIs or SDKs.' },
    { icon: 'fa-cart-shopping', title: 'Checkout Flow', description: 'Create a clear customer payment journey.' },
    { icon: 'fa-shield-halved', title: 'Secure Practices', description: 'Follow provider guidance and appropriate security practices.' },
    { icon: 'fa-circle-check', title: 'Payment Status', description: 'Handle relevant transaction success, failure, and status responses.' },
    { icon: 'fa-receipt', title: 'Order Integration', description: 'Connect payment outcomes with relevant order or transaction workflows.' },
    { icon: 'fa-flask', title: 'Testing', description: 'Test supported payment scenarios before production launch.' }
  ],

  process: [
    { number: '01', title: 'Assess', description: 'Understand your platform, business, payment needs, and provider.' },
    { number: '02', title: 'Configure', description: 'Prepare required provider and application configuration.' },
    { number: '03', title: 'Integrate', description: 'Implement the supported payment integration.' },
    { number: '04', title: 'Connect', description: 'Connect payment outcomes with application workflows.' },
    { number: '05', title: 'Test', description: 'Test relevant transaction scenarios in supported environments.' },
    { number: '06', title: 'Launch', description: 'Move the validated integration into production.' }
  ],

  benefits: [
    { icon: 'fa-credit-card', title: 'Online Payments', description: 'Allow customers to pay digitally.' },
    { icon: 'fa-face-smile', title: 'Convenience', description: 'Create a smoother customer checkout experience.' },
    { icon: 'fa-plug', title: 'Integrated Workflow', description: 'Connect transactions with relevant application processes.' },
    { icon: 'fa-chart-line', title: 'Online Sales Support', description: 'Enable digital purchasing experiences.' }
  ],

  technologies: ['Payment APIs', 'Payment SDKs', 'Webhooks', 'Secure Checkout'],

  faqs: [
    {
      question: 'Which payment gateways can you integrate?',
      answer: 'The available options depend on your country, business, platform, currency requirements, and providers that support your use case.'
    },
    {
      question: 'Do you store customers’ card information?',
      answer: 'Integrations should minimize direct handling of sensitive payment data and follow the payment provider’s recommended secure flows and applicable compliance requirements.'
    },
    {
      question: 'Can payments be connected to order management?',
      answer: 'Yes. Payment results can be integrated with relevant application workflows when supported by the provider and system architecture.'
    }
  ]
},

// =====================================================
// API INTEGRATION
// =====================================================

{
  slug: 'api-integration',
  title: 'API Integration',
  category: 'Integration',
  icon: 'fa-plug',

  heroTitle: 'Connect Your Systems. Automate the Flow of Information.',
  heroDescription:
    'We integrate websites and web applications with supported third-party APIs to connect services, synchronize data, and automate business workflows.',

  overview: [
    { icon: 'fa-plug', title: 'Connected' },
    { icon: 'fa-gears', title: 'Automated' },
    { icon: 'fa-arrows-rotate', title: 'Synchronized' },
    { icon: 'fa-code', title: 'Custom' }
  ],

  whyTitle: 'Your Business Tools Work Better When They Work Together.',
  whyDescription:
    'API integrations allow compatible systems to exchange information and trigger actions without requiring users to repeatedly move data between separate platforms.',

  whyPoints: [
    'Connect third-party platforms',
    'Automate data exchange',
    'Reduce repetitive manual work',
    'Synchronize compatible systems',
    'Add external functionality',
    'Improve business workflows'
  ],

  featuresTitle: 'Reliable Integrations Between Your Digital Systems.',

  features: [
    { icon: 'fa-code', title: 'REST API Integration', description: 'Integrate supported REST-based services and endpoints.' },
    { icon: 'fa-key', title: 'Authentication', description: 'Implement supported authentication and authorization flows.' },
    { icon: 'fa-arrows-rotate', title: 'Data Synchronization', description: 'Exchange and synchronize relevant information between systems.' },
    { icon: 'fa-bell', title: 'Webhook Integration', description: 'Handle supported event-driven notifications and updates.' },
    { icon: 'fa-triangle-exclamation', title: 'Error Handling', description: 'Handle integration errors and relevant failure scenarios.' },
    { icon: 'fa-flask', title: 'Testing', description: 'Test integration flows and expected responses.' }
  ],

  process: [
    { number: '01', title: 'Analyze', description: 'Understand systems, data, APIs, and integration requirements.' },
    { number: '02', title: 'Design', description: 'Plan integration architecture and data flows.' },
    { number: '03', title: 'Authenticate', description: 'Configure supported authentication mechanisms.' },
    { number: '04', title: 'Integrate', description: 'Implement communication between the systems.' },
    { number: '05', title: 'Test', description: 'Validate data, responses, errors, and workflows.' },
    { number: '06', title: 'Deploy', description: 'Release the integration and monitor relevant behavior.' }
  ],

  benefits: [
    { icon: 'fa-gears', title: 'Automation', description: 'Reduce repetitive manual processes.' },
    { icon: 'fa-arrows-rotate', title: 'Connected Data', description: 'Improve information flow between compatible systems.' },
    { icon: 'fa-clock', title: 'Save Time', description: 'Reduce unnecessary manual data movement.' },
    { icon: 'fa-puzzle-piece', title: 'More Capability', description: 'Extend applications using supported external services.' }
  ],

  technologies: ['REST APIs', 'JSON', 'OAuth', 'Webhooks'],

  faqs: [
    {
      question: 'What is an API integration?',
      answer: 'API integration connects compatible software systems so they can exchange data or perform supported actions programmatically.'
    },
    {
      question: 'Can any platform be integrated?',
      answer: 'Integration depends on whether the external platform provides a suitable API or another supported integration mechanism.'
    },
    {
      question: 'Can APIs automate business processes?',
      answer: 'Yes. APIs can support automation when the connected platforms expose the required capabilities.'
    }
  ]
},

// =====================================================
// CONTENT MANAGEMENT
// =====================================================

{
  slug: 'content-management',
  title: 'Content Management',
  category: 'Web Development',
  icon: 'fa-file-lines',

  heroTitle: 'Keep Your Website Content Fresh Without the Technical Headache.',
  heroDescription:
    'We build and configure content management solutions that make it easier for businesses to update and organize website content.',

  overview: [
    { icon: 'fa-pen-to-square', title: 'Editable' },
    { icon: 'fa-folder-tree', title: 'Organized' },
    { icon: 'fa-user', title: 'User Friendly' },
    { icon: 'fa-arrows-rotate', title: 'Flexible' }
  ],

  whyTitle: 'Your Website Should Evolve With Your Business.',
  whyDescription:
    'A suitable content management solution allows authorized users to keep important website information current without requiring code changes for every routine update.',

  whyPoints: [
    'Update website content',
    'Manage pages and information',
    'Organize digital content',
    'Reduce dependency for routine edits',
    'Keep information current',
    'Support growing websites'
  ],

  featuresTitle: 'Simpler Ways to Manage Your Website.',

  features: [
    { icon: 'fa-pen-to-square', title: 'Content Editing', description: 'Provide suitable interfaces for updating website content.' },
    { icon: 'fa-folder-tree', title: 'Content Organization', description: 'Structure content into manageable sections and categories.' },
    { icon: 'fa-image', title: 'Media Management', description: 'Manage relevant website images and media assets.' },
    { icon: 'fa-users-gear', title: 'User Access', description: 'Support appropriate content administration roles where required.' },
    { icon: 'fa-file-lines', title: 'Page Management', description: 'Create or update supported website pages and sections.' },
    { icon: 'fa-gears', title: 'Custom Functionality', description: 'Configure content workflows around project requirements.' }
  ],

  process: [
    { number: '01', title: 'Understand', description: 'Identify the content your team needs to manage.' },
    { number: '02', title: 'Structure', description: 'Design appropriate content models and organization.' },
    { number: '03', title: 'Configure', description: 'Set up the selected CMS or custom management solution.' },
    { number: '04', title: 'Integrate', description: 'Connect managed content with the website.' },
    { number: '05', title: 'Test', description: 'Validate content editing and publishing workflows.' },
    { number: '06', title: 'Handover', description: 'Provide the completed management workflow and required guidance.' }
  ],

  benefits: [
    { icon: 'fa-pen-to-square', title: 'Easy Updates', description: 'Make routine content changes more manageable.' },
    { icon: 'fa-clock', title: 'Save Time', description: 'Reduce development effort for simple content updates.' },
    { icon: 'fa-arrows-rotate', title: 'Stay Current', description: 'Keep important website information updated.' },
    { icon: 'fa-layer-group', title: 'Organized Content', description: 'Manage growing website information more effectively.' }
  ],

  technologies: ['WordPress', 'Headless CMS', 'Custom CMS', 'Content APIs'],

  faqs: [
    {
      question: 'What is a CMS?',
      answer: 'A content management system provides tools for authorized users to create, edit, organize, and publish supported website content.'
    },
    {
      question: 'Can you build a custom CMS?',
      answer: 'Yes. When standard platforms do not fit the requirements, custom content management functionality can be developed.'
    },
    {
      question: 'Can I update the website without coding?',
      answer: 'For content configured through the CMS, routine updates can generally be performed without directly editing application code.'
    }
  ]
},

// =====================================================
// WEBSITE MAINTENANCE
// =====================================================

{
  slug: 'website-maintenance',
  title: 'Website Maintenance',
  category: 'Support',
  icon: 'fa-screwdriver-wrench',

  heroTitle: 'Keep Your Website Updated, Reliable and Ready for Business.',
  heroDescription:
    'We provide ongoing website maintenance to help keep your digital presence current, functional, monitored, and supported.',

  overview: [
    { icon: 'fa-screwdriver-wrench', title: 'Maintained' },
    { icon: 'fa-arrows-rotate', title: 'Updated' },
    { icon: 'fa-shield-halved', title: 'Monitored' },
    { icon: 'fa-headset', title: 'Supported' }
  ],

  whyTitle: 'Launching a Website Is the Beginning, Not the End.',
  whyDescription:
    'Websites require ongoing attention as content changes, software evolves, dependencies update, and new technical issues can appear over time.',

  whyPoints: [
    'Keep content updated',
    'Fix website issues',
    'Apply relevant updates',
    'Monitor website health',
    'Maintain backups where configured',
    'Receive ongoing technical support'
  ],

  featuresTitle: 'Ongoing Care for Your Website.',

  features: [
    { icon: 'fa-pen-to-square', title: 'Content Updates', description: 'Make agreed routine updates to website content.' },
    { icon: 'fa-bug', title: 'Bug Fixes', description: 'Investigate and resolve supported website issues.' },
    { icon: 'fa-arrows-rotate', title: 'Updates', description: 'Apply relevant platform or dependency updates where appropriate.' },
    { icon: 'fa-database', title: 'Backups', description: 'Support suitable website backup processes where configured.' },
    { icon: 'fa-eye', title: 'Monitoring', description: 'Monitor relevant website health and availability indicators.' },
    { icon: 'fa-headset', title: 'Technical Support', description: 'Provide assistance for supported website requirements.' }
  ],

  process: [
    { number: '01', title: 'Review', description: 'Understand the website and maintenance requirements.' },
    { number: '02', title: 'Plan', description: 'Define appropriate maintenance activities.' },
    { number: '03', title: 'Monitor', description: 'Review relevant website health indicators.' },
    { number: '04', title: 'Maintain', description: 'Perform agreed updates and maintenance tasks.' },
    { number: '05', title: 'Resolve', description: 'Address supported issues when identified.' },
    { number: '06', title: 'Improve', description: 'Identify useful ongoing improvements.' }
  ],

  benefits: [
    { icon: 'fa-circle-check', title: 'Reliability', description: 'Keep your website better maintained over time.' },
    { icon: 'fa-arrows-rotate', title: 'Stay Updated', description: 'Keep supported software and content current.' },
    { icon: 'fa-headset', title: 'Support', description: 'Have technical help available for agreed requirements.' },
    { icon: 'fa-clock', title: 'Save Time', description: 'Spend less time handling routine website maintenance yourself.' }
  ],

  technologies: ['Website Monitoring', 'Backups', 'CMS Updates', 'Technical Support'],

  faqs: [
    {
      question: 'Does every website need maintenance?',
      answer: 'Most active websites benefit from some level of maintenance because content, software, dependencies, hosting environments, and business requirements change over time.'
    },
    {
      question: 'Can you maintain a website built by someone else?',
      answer: 'Potentially yes. We first need to review the website technology, codebase, access, hosting, and current condition.'
    },
    {
      question: 'Can maintenance include content changes?',
      answer: 'Yes. Routine content updates can be included depending on the agreed maintenance scope.'
    }
  ]
},

// =====================================================
// WEBSITE SPEED OPTIMIZATION
// =====================================================

{
  slug: 'website-speed-optimization',
  title: 'Website Speed Optimization',
  category: 'Support',
  icon: 'fa-bolt',

  heroTitle: 'Faster Websites. Smoother Experiences.',
  heroDescription:
    'We identify performance bottlenecks and optimize relevant website assets, code, loading behavior, and configurations to improve user experience.',

  overview: [
    { icon: 'fa-bolt', title: 'Faster' },
    { icon: 'fa-gauge-high', title: 'Optimized' },
    { icon: 'fa-mobile-screen', title: 'Mobile Focused' },
    { icon: 'fa-face-smile', title: 'User Focused' }
  ],

  whyTitle: 'Every Extra Second Can Affect the User Experience.',
  whyDescription:
    'Website performance influences how quickly visitors can interact with your content and can also affect important technical quality signals.',

  whyPoints: [
    'Improve loading performance',
    'Improve user experience',
    'Optimize website assets',
    'Reduce unnecessary requests',
    'Improve relevant Core Web Vitals',
    'Support technical SEO'
  ],

  featuresTitle: 'Performance Optimization From Frontend to Delivery.',

  features: [
    { icon: 'fa-image', title: 'Image Optimization', description: 'Reduce unnecessary image weight and improve delivery where appropriate.' },
    { icon: 'fa-file-code', title: 'Asset Optimization', description: 'Optimize relevant scripts, styles, and frontend resources.' },
    { icon: 'fa-box', title: 'Caching', description: 'Configure suitable caching strategies where supported.' },
    { icon: 'fa-server', title: 'Delivery Review', description: 'Review relevant hosting and delivery considerations.' },
    { icon: 'fa-mobile-screen', title: 'Mobile Performance', description: 'Identify performance issues affecting mobile experiences.' },
    { icon: 'fa-gauge-high', title: 'Performance Testing', description: 'Measure relevant performance metrics before and after improvements.' }
  ],

  process: [
    { number: '01', title: 'Measure', description: 'Establish current website performance.' },
    { number: '02', title: 'Diagnose', description: 'Identify major performance bottlenecks.' },
    { number: '03', title: 'Prioritize', description: 'Focus on improvements with meaningful potential impact.' },
    { number: '04', title: 'Optimize', description: 'Implement appropriate performance improvements.' },
    { number: '05', title: 'Test', description: 'Measure the website after optimization.' },
    { number: '06', title: 'Monitor', description: 'Continue monitoring performance as the website evolves.' }
  ],

  benefits: [
    { icon: 'fa-bolt', title: 'Faster Experience', description: 'Reduce unnecessary loading delays.' },
    { icon: 'fa-face-smile', title: 'Better Usability', description: 'Help visitors interact with pages sooner.' },
    { icon: 'fa-mobile-screen', title: 'Better Mobile Experience', description: 'Improve performance for mobile visitors.' },
    { icon: 'fa-magnifying-glass', title: 'SEO Support', description: 'Strengthen technical quality related to performance.' }
  ],

  technologies: ['PageSpeed Insights', 'Lighthouse', 'Core Web Vitals', 'Browser DevTools'],

  faqs: [
    {
      question: 'Can you guarantee a 100 PageSpeed score?',
      answer: 'No. Scores depend on the website, third-party scripts, hosting, functionality, testing conditions, and many other factors. Optimization should focus on meaningful user experience improvements rather than a guaranteed score.'
    },
    {
      question: 'Will optimization change the website design?',
      answer: 'Most performance improvements aim to preserve the intended design, although some recommendations may involve changing heavy assets or inefficient functionality.'
    },
    {
      question: 'Does website speed affect SEO?',
      answer: 'Performance and page experience can contribute to overall website quality, while search rankings depend on many different factors.'
    }
  ]
},

// =====================================================
// WEBSITE SECURITY
// =====================================================

{
  slug: 'website-security',
  title: 'Website Security',
  category: 'Support',
  icon: 'fa-shield-halved',

  heroTitle: 'Build a Stronger Security Foundation for Your Website.',
  heroDescription:
    'We help improve website security through secure configuration, updates, HTTPS, backups, access controls, and practical security measures appropriate to your platform.',

  overview: [
    { icon: 'fa-shield-halved', title: 'Protected' },
    { icon: 'fa-lock', title: 'Secure' },
    { icon: 'fa-eye', title: 'Monitored' },
    { icon: 'fa-arrows-rotate', title: 'Maintained' }
  ],

  whyTitle: 'Security Should Be Part of Your Website From the Beginning.',
  whyDescription:
    'Websites face evolving risks. While no system can be guaranteed completely secure, good security practices can reduce avoidable exposure and improve resilience.',

  whyPoints: [
    'Improve secure configurations',
    'Keep supported software updated',
    'Use HTTPS',
    'Strengthen access controls',
    'Maintain suitable backups',
    'Reduce common security risks'
  ],

  featuresTitle: 'Practical Security Measures for Your Website.',

  features: [
    { icon: 'fa-lock', title: 'HTTPS Configuration', description: 'Support secure HTTPS configuration using appropriate certificates.' },
    { icon: 'fa-user-shield', title: 'Access Security', description: 'Improve relevant account and access-control practices.' },
    { icon: 'fa-arrows-rotate', title: 'Software Updates', description: 'Keep supported software and dependencies current where appropriate.' },
    { icon: 'fa-database', title: 'Backups', description: 'Support suitable backup strategies for recovery scenarios.' },
    { icon: 'fa-eye', title: 'Monitoring', description: 'Monitor relevant website and hosting security indicators where supported.' },
    { icon: 'fa-shield-halved', title: 'Security Review', description: 'Review common website security configuration concerns.' }
  ],

  process: [
    { number: '01', title: 'Review', description: 'Review the website, platform, hosting, and existing security controls.' },
    { number: '02', title: 'Identify', description: 'Identify relevant configuration weaknesses and risks.' },
    { number: '03', title: 'Prioritize', description: 'Prioritize improvements based on practical impact.' },
    { number: '04', title: 'Harden', description: 'Apply suitable security improvements.' },
    { number: '05', title: 'Verify', description: 'Verify important configurations after changes.' },
    { number: '06', title: 'Maintain', description: 'Continue applying appropriate maintenance and monitoring.' }
  ],

  benefits: [
    { icon: 'fa-shield-halved', title: 'Reduced Risk', description: 'Reduce exposure to common avoidable security issues.' },
    { icon: 'fa-lock', title: 'Secure Connection', description: 'Protect data in transit with properly configured HTTPS.' },
    { icon: 'fa-database', title: 'Recovery Readiness', description: 'Maintain suitable backups for relevant recovery scenarios.' },
    { icon: 'fa-handshake', title: 'Customer Confidence', description: 'Support a more professional and secure digital experience.' }
  ],

  technologies: ['HTTPS', 'SSL/TLS', 'Backups', 'Security Updates'],

  faqs: [
    {
      question: 'Can you guarantee my website will never be hacked?',
      answer: 'No. No responsible provider can guarantee that a website will never be compromised. Security focuses on reducing risk through appropriate controls, maintenance, monitoring, and secure practices.'
    },
    {
      question: 'Does HTTPS make a website completely secure?',
      answer: 'No. HTTPS protects data in transit between the browser and server, but overall security also depends on application code, hosting, access controls, software updates, and other factors.'
    },
    {
      question: 'How often should website security be reviewed?',
      answer: 'Security should be treated as an ongoing process, particularly when software, dependencies, infrastructure, or website functionality changes.'
    }
  ]
},

// =====================================================
// SSL INSTALLATION
// =====================================================

{
  slug: 'ssl-installation',
  title: 'SSL Installation',
  category: 'Support',
  icon: 'fa-lock',

  heroTitle: 'Secure Your Website With HTTPS.',
  heroDescription:
    'We configure supported SSL/TLS certificates and HTTPS so browser connections to your website can be encrypted appropriately.',

  overview: [
    { icon: 'fa-lock', title: 'Encrypted' },
    { icon: 'fa-shield-halved', title: 'Secure Connection' },
    { icon: 'fa-globe', title: 'HTTPS' },
    { icon: 'fa-check', title: 'Configured' }
  ],

  whyTitle: 'Modern Websites Should Use HTTPS.',
  whyDescription:
    'HTTPS encrypts data transmitted between supported browsers and your web server and is a standard security requirement for modern websites.',

  whyPoints: [
    'Enable HTTPS',
    'Encrypt data in transit',
    'Avoid common insecure-site browser warnings',
    'Support customer confidence',
    'Support modern web standards',
    'Configure secure redirects'
  ],

  featuresTitle: 'Proper HTTPS Configuration for Your Website.',

  features: [
    { icon: 'fa-certificate', title: 'Certificate Setup', description: 'Configure an appropriate supported certificate.' },
    { icon: 'fa-lock', title: 'HTTPS', description: 'Enable encrypted browser-to-server connections.' },
    { icon: 'fa-right-left', title: 'HTTPS Redirect', description: 'Configure appropriate HTTP-to-HTTPS redirects.' },
    { icon: 'fa-link', title: 'URL Review', description: 'Review relevant website references for HTTPS compatibility.' },
    { icon: 'fa-triangle-exclamation', title: 'Mixed Content Review', description: 'Identify common mixed-content issues where applicable.' },
    { icon: 'fa-circle-check', title: 'Verification', description: 'Verify the certificate and HTTPS behavior after setup.' }
  ],

  process: [
    { number: '01', title: 'Review', description: 'Review domain, hosting, and certificate requirements.' },
    { number: '02', title: 'Prepare', description: 'Prepare required domain and hosting configuration.' },
    { number: '03', title: 'Install', description: 'Install or configure the supported certificate.' },
    { number: '04', title: 'Redirect', description: 'Configure appropriate HTTPS redirection.' },
    { number: '05', title: 'Check', description: 'Review common HTTPS and mixed-content issues.' },
    { number: '06', title: 'Verify', description: 'Verify secure website access.' }
  ],

  benefits: [
    { icon: 'fa-lock', title: 'Encryption', description: 'Encrypt supported browser-to-server communication.' },
    { icon: 'fa-shield-halved', title: 'Security Foundation', description: 'Add an important layer to website security.' },
    { icon: 'fa-handshake', title: 'Visitor Confidence', description: 'Provide the expected secure connection experience.' },
    { icon: 'fa-globe', title: 'Modern Standard', description: 'Use HTTPS as expected by modern browsers and websites.' }
  ],

  technologies: ['SSL/TLS', 'HTTPS', 'DNS', 'Web Servers'],

  faqs: [
    {
      question: 'What is SSL?',
      answer: 'The term SSL is commonly used for certificates enabling HTTPS, although modern secure connections use TLS protocols.'
    },
    {
      question: 'Does SSL protect the entire website from attacks?',
      answer: 'No. HTTPS protects data in transit. Application security, server security, authentication, updates, and other controls are still required.'
    },
    {
      question: 'Do certificates need renewal?',
      answer: 'Yes. Certificates have validity periods, although many hosting platforms can automate certificate renewal.'
    }
  ]
},

// =====================================================
// HOSTING & DOMAIN SETUP
// =====================================================

{
  slug: 'hosting-domain-setup',
  title: 'Hosting & Domain Setup',
  category: 'Support',
  icon: 'fa-server',

  heroTitle: 'Get Your Website Online With the Right Foundation.',
  heroDescription:
    'We help configure domains, hosting, DNS, HTTPS, email-related records, and website deployment so your digital presence is correctly connected and accessible.',

  overview: [
    { icon: 'fa-globe', title: 'Domain Ready' },
    { icon: 'fa-server', title: 'Hosted' },
    { icon: 'fa-network-wired', title: 'DNS Configured' },
    { icon: 'fa-lock', title: 'HTTPS Ready' }
  ],

  whyTitle: 'Reliable Hosting and Correct Configuration Keep Your Website Accessible.',
  whyDescription:
    'Domains, DNS, hosting, certificates, and deployments all need to work together correctly for visitors to reach your website reliably.',

  whyPoints: [
    'Configure your domain',
    'Set up website hosting',
    'Configure DNS records',
    'Connect domain and website',
    'Configure HTTPS',
    'Support website deployment'
  ],

  featuresTitle: 'Everything Needed to Connect Your Website to the Web.',

  features: [
    { icon: 'fa-globe', title: 'Domain Configuration', description: 'Configure relevant domain settings and connections.' },
    { icon: 'fa-server', title: 'Hosting Setup', description: 'Configure a suitable hosting environment.' },
    { icon: 'fa-network-wired', title: 'DNS Setup', description: 'Configure required DNS records.' },
    { icon: 'fa-lock', title: 'HTTPS Setup', description: 'Configure supported SSL/TLS certificates.' },
    { icon: 'fa-envelope', title: 'Email DNS', description: 'Configure relevant email-related DNS records where required.' },
    { icon: 'fa-cloud-arrow-up', title: 'Deployment', description: 'Deploy your website to the configured hosting environment.' }
  ],

  process: [
    { number: '01', title: 'Assess', description: 'Understand website, domain, hosting, and email requirements.' },
    { number: '02', title: 'Prepare', description: 'Prepare accounts and required configuration.' },
    { number: '03', title: 'Configure', description: 'Configure hosting and domain settings.' },
    { number: '04', title: 'Connect', description: 'Connect DNS records with required services.' },
    { number: '05', title: 'Deploy', description: 'Deploy the website.' },
    { number: '06', title: 'Verify', description: 'Verify domain, HTTPS, and website accessibility.' }
  ],

  benefits: [
    { icon: 'fa-globe', title: 'Online Presence', description: 'Connect your website to your domain.' },
    { icon: 'fa-server', title: 'Proper Hosting', description: 'Configure an environment appropriate for your website.' },
    { icon: 'fa-lock', title: 'HTTPS', description: 'Support secure website connections.' },
    { icon: 'fa-headset', title: 'Technical Help', description: 'Avoid dealing with unfamiliar hosting and DNS configuration alone.' }
  ],

  technologies: ['DNS', 'Web Hosting', 'SSL/TLS', 'Domain Configuration'],

  faqs: [
    {
      question: 'Do you provide the domain and hosting?',
      answer: 'We can assist with selection and setup. Ownership and billing arrangements should be established clearly so the business retains appropriate control of its accounts and assets.'
    },
    {
      question: 'Can you connect a domain I already own?',
      answer: 'Yes. Existing domains can generally be connected by configuring the required DNS records.'
    },
    {
      question: 'Can you configure business email DNS records?',
      answer: 'Yes. Relevant DNS records can be configured when you use a supported email provider.'
    }
  ]
},

// =====================================================
// WEBSITE MIGRATION
// =====================================================

{
  slug: 'website-migration',
  title: 'Website Migration',
  category: 'Support',
  icon: 'fa-right-left',

  heroTitle: 'Move Your Website Without Leaving Your Business Behind.',
  heroDescription:
    'We help migrate websites between supported hosting providers, servers, domains, or platforms while working to preserve important content and minimize disruption.',

  overview: [
    { icon: 'fa-right-left', title: 'Planned' },
    { icon: 'fa-database', title: 'Data Focused' },
    { icon: 'fa-clock', title: 'Downtime Aware' },
    { icon: 'fa-circle-check', title: 'Verified' }
  ],

  whyTitle: 'Website Migration Requires More Than Moving Files.',
  whyDescription:
    'A migration can involve application files, databases, domains, DNS, certificates, redirects, email-related settings, and platform-specific configuration.',

  whyPoints: [
    'Move between hosting providers',
    'Migrate website files and databases',
    'Configure domains and DNS',
    'Preserve important URLs where possible',
    'Reduce avoidable downtime',
    'Verify the website after migration'
  ],

  featuresTitle: 'A Structured Website Migration Process.',

  features: [
    { icon: 'fa-magnifying-glass', title: 'Pre-Migration Review', description: 'Review the existing website and destination environment.' },
    { icon: 'fa-database', title: 'Backup', description: 'Prepare appropriate backups before migration where possible.' },
    { icon: 'fa-file-export', title: 'Website Transfer', description: 'Transfer relevant website files and data.' },
    { icon: 'fa-network-wired', title: 'DNS Configuration', description: 'Update required domain and DNS settings.' },
    { icon: 'fa-link', title: 'URL Review', description: 'Review relevant URLs and redirects when structure changes.' },
    { icon: 'fa-flask', title: 'Post-Migration Testing', description: 'Test important functionality after migration.' }
  ],

  process: [
    { number: '01', title: 'Audit', description: 'Review the existing website and migration requirements.' },
    { number: '02', title: 'Plan', description: 'Plan migration steps, risks, backups, and timing.' },
    { number: '03', title: 'Backup', description: 'Prepare relevant backups before major changes.' },
    { number: '04', title: 'Migrate', description: 'Transfer website data and configure the destination.' },
    { number: '05', title: 'Switch', description: 'Update relevant domain and DNS configuration.' },
    { number: '06', title: 'Verify', description: 'Test the migrated website and important functionality.' }
  ],

  benefits: [
    { icon: 'fa-right-left', title: 'Smooth Transition', description: 'Follow a structured migration process.' },
    { icon: 'fa-database', title: 'Data Protection', description: 'Use appropriate backup and migration practices.' },
    { icon: 'fa-clock', title: 'Downtime Planning', description: 'Plan changes to reduce avoidable disruption.' },
    { icon: 'fa-circle-check', title: 'Post-Migration Checks', description: 'Verify important website behavior after migration.' }
  ],

  technologies: ['Web Hosting', 'DNS', 'Databases', 'Website Platforms'],

  faqs: [
    {
      question: 'Will there be downtime during migration?',
      answer: 'Downtime depends on the website, hosting, DNS changes, migration method, and platform. The migration can be planned to reduce avoidable disruption.'
    },
    {
      question: 'Will SEO rankings be affected?',
      answer: 'Migration can affect search performance if URLs, content, availability, redirects, or technical configurations change. Careful planning can reduce avoidable SEO problems, but rankings cannot be guaranteed.'
    },
    {
      question: 'Can you migrate the database too?',
      answer: 'Yes, when the website uses a database and the source and destination environments provide the required access and compatibility.'
    }
  ]
},

// =====================================================
// GOOGLE ANALYTICS
// =====================================================

{
  slug: 'google-analytics',
  title: 'Google Analytics',
  category: 'Analytics',
  icon: 'fa-chart-pie',

  heroTitle: 'Turn Website Activity Into Useful Business Insights.',
  heroDescription:
    'We configure Google Analytics to help you understand website traffic, acquisition channels, visitor behavior, and important customer actions.',

  overview: [
    { icon: 'fa-chart-pie', title: 'Data Driven' },
    { icon: 'fa-users', title: 'Visitor Insights' },
    { icon: 'fa-route', title: 'Journey Focused' },
    { icon: 'fa-bullseye', title: 'Goal Focused' }
  ],

  whyTitle: 'If You Cannot Measure It, It Is Harder to Improve It.',
  whyDescription:
    'Analytics provides useful information about how visitors reach and interact with your website, helping businesses make more informed digital decisions.',

  whyPoints: [
    'Understand website traffic',
    'Identify acquisition channels',
    'Analyze visitor behavior',
    'Measure important events',
    'Understand popular content',
    'Support marketing decisions'
  ],

  featuresTitle: 'Understand What Is Happening on Your Website.',

  features: [
    { icon: 'fa-gears', title: 'Analytics Setup', description: 'Configure Google Analytics for your website.' },
    { icon: 'fa-users', title: 'Traffic Analysis', description: 'Understand website visitor and session activity.' },
    { icon: 'fa-share-nodes', title: 'Acquisition', description: 'Understand how users arrive at your website.' },
    { icon: 'fa-arrow-pointer', title: 'Event Tracking', description: 'Configure relevant measurable interactions where required.' },
    { icon: 'fa-bullseye', title: 'Conversion Events', description: 'Track important business actions where technically possible.' },
    { icon: 'fa-chart-line', title: 'Performance Insights', description: 'Use collected data to identify useful trends and opportunities.' }
  ],

  process: [
    { number: '01', title: 'Understand', description: 'Define the website and business actions worth measuring.' },
    { number: '02', title: 'Configure', description: 'Set up the appropriate Analytics property and configuration.' },
    { number: '03', title: 'Implement', description: 'Add required tracking to the website.' },
    { number: '04', title: 'Track', description: 'Configure relevant events and conversions.' },
    { number: '05', title: 'Verify', description: 'Validate that expected tracking is working.' },
    { number: '06', title: 'Analyze', description: 'Use collected data to understand website performance.' }
  ],

  benefits: [
    { icon: 'fa-chart-pie', title: 'Better Insights', description: 'Understand how visitors interact with your website.' },
    { icon: 'fa-share-nodes', title: 'Channel Visibility', description: 'Understand important traffic acquisition sources.' },
    { icon: 'fa-bullseye', title: 'Conversion Insights', description: 'Measure important website actions where configured.' },
    { icon: 'fa-lightbulb', title: 'Better Decisions', description: 'Use data to support marketing and website improvements.' }
  ],

  technologies: ['Google Analytics 4', 'Google Tag Manager', 'Event Tracking'],

  faqs: [
    {
      question: 'What can Google Analytics track?',
      answer: 'Depending on configuration and consent requirements, it can provide information about website traffic, acquisition, engagement, events, and configured conversion actions.'
    },
    {
      question: 'Can Analytics identify individual visitors?',
      answer: 'Analytics is designed around measurement data and should be configured in accordance with applicable privacy requirements and Google policies rather than being treated as a tool for personally identifying anonymous visitors.'
    },
    {
      question: 'Can you track form submissions?',
      answer: 'Yes, when the website and form behavior allow suitable event or conversion tracking to be configured.'
    }
  ]
},

// =====================================================
// GOOGLE SEARCH CONSOLE SETUP
// =====================================================

{
  slug: 'google-search-console-setup',
  title: 'Google Search Console Setup',
  category: 'Analytics',
  icon: 'fa-chart-simple',

  heroTitle: 'Understand How Google Sees Your Website.',
  heroDescription:
    'We configure Google Search Console so you can monitor search performance, indexing, crawling information, and important website issues reported by Google.',

  overview: [
    { icon: 'fa-google', title: 'Google Data' },
    { icon: 'fa-magnifying-glass', title: 'Search Insights' },
    { icon: 'fa-list-check', title: 'Index Monitoring' },
    { icon: 'fa-chart-line', title: 'Performance' }
  ],

  whyTitle: 'Search Console Gives You a Direct View Into Your Google Search Presence.',
  whyDescription:
    'Google Search Console provides valuable information about search queries, impressions, clicks, indexing, crawling, and technical issues detected for your website.',

  whyPoints: [
    'Monitor Google search performance',
    'Understand search queries',
    'Monitor indexing',
    'Submit supported sitemaps',
    'Identify reported website issues',
    'Support SEO analysis'
  ],

  featuresTitle: 'Set Up the Foundation for Search Monitoring.',

  features: [
    { icon: 'fa-circle-check', title: 'Property Setup', description: 'Configure an appropriate Search Console property.' },
    { icon: 'fa-key', title: 'Verification', description: 'Complete supported ownership verification.' },
    { icon: 'fa-sitemap', title: 'Sitemap Submission', description: 'Submit appropriate XML sitemaps where available.' },
    { icon: 'fa-chart-line', title: 'Performance Review', description: 'Review search impressions, clicks, and query data.' },
    { icon: 'fa-list-check', title: 'Index Monitoring', description: 'Review reported indexing information.' },
    { icon: 'fa-triangle-exclamation', title: 'Issue Review', description: 'Review relevant technical issues reported by Google.' }
  ],

  process: [
    { number: '01', title: 'Create', description: 'Create or access the appropriate Search Console property.' },
    { number: '02', title: 'Verify', description: 'Verify ownership using a supported method.' },
    { number: '03', title: 'Configure', description: 'Review important property settings.' },
    { number: '04', title: 'Submit', description: 'Submit relevant sitemap information where appropriate.' },
    { number: '05', title: 'Review', description: 'Review performance and indexing information.' },
    { number: '06', title: 'Monitor', description: 'Continue monitoring search health and opportunities.' }
  ],

  benefits: [
    { icon: 'fa-magnifying-glass', title: 'Search Insights', description: 'Understand how your website appears in Google Search.' },
    { icon: 'fa-key', title: 'Query Data', description: 'See search queries associated with your website.' },
    { icon: 'fa-list-check', title: 'Index Visibility', description: 'Review important indexing information.' },
    { icon: 'fa-triangle-exclamation', title: 'Issue Awareness', description: 'Identify relevant problems reported by Google.' }
  ],

  technologies: ['Google Search Console', 'XML Sitemaps', 'Google Search'],

  faqs: [
    {
      question: 'Is Google Search Console free?',
      answer: 'Yes. Google provides Search Console as a service for website owners and administrators.'
    },
    {
      question: 'Is Search Console the same as Google Analytics?',
      answer: 'No. Search Console focuses primarily on Google Search performance and technical search information, while Analytics focuses more broadly on website traffic and user interactions.'
    },
    {
      question: 'Does submitting a sitemap guarantee indexing?',
      answer: 'No. A sitemap helps search engines discover URLs, but Google ultimately decides which pages to crawl and index.'
    }
  ]
},

// =====================================================
// CONVERSION TRACKING
// =====================================================

{
  slug: 'conversion-tracking',
  title: 'Conversion Tracking',
  category: 'Analytics',
  icon: 'fa-bullseye',

  heroTitle: 'Know Which Marketing Actions Actually Drive Results.',
  heroDescription:
    'We configure conversion tracking to measure important customer actions such as enquiries, purchases, calls, sign-ups, and other meaningful website events.',

  overview: [
    { icon: 'fa-bullseye', title: 'Goal Focused' },
    { icon: 'fa-chart-simple', title: 'Measurable' },
    { icon: 'fa-route', title: 'Journey Aware' },
    { icon: 'fa-lightbulb', title: 'Insight Driven' }
  ],

  whyTitle: 'Clicks and Traffic Matter Less If You Cannot Measure What Happens Next.',
  whyDescription:
    'Conversion tracking connects marketing activity with meaningful customer actions, giving businesses better information for evaluating campaigns and improving digital experiences.',

  whyPoints: [
    'Track form submissions',
    'Measure purchases',
    'Track important calls or clicks where supported',
    'Measure campaign outcomes',
    'Understand customer actions',
    'Support marketing optimization'
  ],

  featuresTitle: 'Measure the Actions That Matter to Your Business.',

  features: [
    { icon: 'fa-file-signature', title: 'Form Tracking', description: 'Measure relevant successful enquiry actions.' },
    { icon: 'fa-cart-shopping', title: 'Purchase Tracking', description: 'Measure supported e-commerce transaction events.' },
    { icon: 'fa-phone', title: 'Contact Actions', description: 'Track relevant contact interactions where technically supported.' },
    { icon: 'fa-arrow-pointer', title: 'Event Tracking', description: 'Measure selected meaningful website interactions.' },
    { icon: 'fa-rectangle-ad', title: 'Advertising Conversions', description: 'Connect supported conversion actions with advertising platforms.' },
    { icon: 'fa-flask', title: 'Tracking Validation', description: 'Test and verify configured conversion events.' }
  ],

  process: [
    { number: '01', title: 'Define', description: 'Identify the business actions that should count as conversions.' },
    { number: '02', title: 'Map', description: 'Map each conversion to the relevant website interaction.' },
    { number: '03', title: 'Configure', description: 'Configure suitable tracking tools and events.' },
    { number: '04', title: 'Implement', description: 'Implement the required website tracking.' },
    { number: '05', title: 'Test', description: 'Validate expected conversion behavior.' },
    { number: '06', title: 'Analyze', description: 'Use conversion data to support campaign decisions.' }
  ],

  benefits: [
    { icon: 'fa-bullseye', title: 'Know What Converts', description: 'Understand which measurable actions generate business value.' },
    { icon: 'fa-chart-simple', title: 'Better Measurement', description: 'Move beyond traffic and clicks alone.' },
    { icon: 'fa-rectangle-ad', title: 'Better Campaign Decisions', description: 'Use conversion information when evaluating advertising.' },
    { icon: 'fa-lightbulb', title: 'Useful Insights', description: 'Identify customer journeys and optimization opportunities.' }
  ],

  technologies: ['Google Analytics 4', 'Google Tag Manager', 'Google Ads', 'Meta Pixel'],

  faqs: [
    {
      question: 'What should count as a conversion?',
      answer: 'A conversion should represent an action valuable to your business, such as a qualified enquiry, purchase, booking, sign-up, or another meaningful customer action.'
    },
    {
      question: 'Can you track every customer action?',
      answer: 'Not always. Tracking depends on website architecture, platform capabilities, browser restrictions, consent, privacy requirements, and available integrations.'
    },
    {
      question: 'Why is conversion tracking important for advertising?',
      answer: 'It helps businesses evaluate whether advertising is contributing to meaningful customer actions rather than looking only at clicks or traffic.'
    }
  ]
}

    
  ];


  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}


  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

      const slug = params.get('slug');

      this.selectedService = this.serviceDetails.find(
        service => service.slug === slug
      );

      if (!this.selectedService) {
        this.router.navigate(['/services']);
      }

    });

  }

}