import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  values = [
    {
      icon: 'fa-gem',
      title: 'Quality First',
      description: 'We focus on creating polished, reliable, and professional digital experiences that represent your brand at its best.'
    },
    {
      icon: 'fa-lightbulb',
      title: 'Creativity With Purpose',
      description: 'Every design and strategy has a purpose — to communicate better, attract attention, and support your business goals.'
    },
    {
      icon: 'fa-handshake',
      title: 'Transparency',
      description: 'Clear communication, practical solutions, and honest collaboration are at the heart of how we work.'
    },
    {
      icon: 'fa-users',
      title: 'Customer Focus',
      description: 'We understand your business before building solutions, ensuring every decision supports your customers and objectives.'
    },
    {
      icon: 'fa-arrow-trend-up',
      title: 'Growth Mindset',
      description: 'We look beyond the immediate project and build digital solutions designed to support your long-term growth.'
    },
    {
      icon: 'fa-rotate',
      title: 'Continuous Improvement',
      description: 'Digital growth never stops. We continuously learn, optimize, improve, and adapt to changing opportunities.'
    }
  ];

  expertise = [
    { icon: 'fa-code', name: 'Web Development' },
    { icon: 'fa-bullhorn', name: 'Digital Marketing' },
    { icon: 'fa-magnifying-glass-chart', name: 'SEO' },
    { icon: 'fa-hashtag', name: 'Social Media' },
    { icon: 'fa-rectangle-ad', name: 'Paid Advertising' },
    { icon: 'fa-user-plus', name: 'Lead Generation' },
    { icon: 'fa-gem', name: 'Branding' },
    { icon: 'fa-chart-line', name: 'Analytics' }
  ];

  audiences = [
    'Startups',
    'Small Businesses',
    'Local Businesses',
    'Professionals',
    'E-Commerce Brands',
    'Growing Companies'
  ];

  growthSteps = [
    {
      number: '01',
      icon: 'fa-shield-halved',
      title: 'Build Credibility',
      description: 'Create a professional digital identity people can trust.'
    },
    {
      number: '02',
      icon: 'fa-eye',
      title: 'Increase Visibility',
      description: 'Put your brand in front of the right audience.'
    },
    {
      number: '03',
      icon: 'fa-user-plus',
      title: 'Generate Leads',
      description: 'Turn attention and traffic into genuine opportunities.'
    },
    {
      number: '04',
      icon: 'fa-bullseye',
      title: 'Convert Customers',
      description: 'Create experiences designed to encourage action.'
    },
    {
      number: '05',
      icon: 'fa-arrow-trend-up',
      title: 'Grow Your Brand',
      description: 'Build a stronger and more recognizable business.'
    }
  ];

}