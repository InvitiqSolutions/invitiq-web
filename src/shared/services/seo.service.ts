import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

export interface SeoData {

  title: string;

  description: string;

  image?: string;

  url?: string;

  keywords?: string;

}

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  private title = inject(Title);

  private meta = inject(Meta);

  private document = inject(DOCUMENT);

  updateSeo(data: SeoData): void {

    const pageUrl =
      data.url ??
      window.location.href;

    const image =
      data.image ??
      'https://invitiq.com/assets/images/og-image.jpg';

    this.title.setTitle(data.title);

    this.meta.updateTag({
      name: 'description',
      content: data.description
    });

    this.meta.updateTag({
      name: 'keywords',
      content: data.keywords ?? ''
    });

    /* Open Graph */

    this.meta.updateTag({
      property: 'og:title',
      content: data.title
    });

    this.meta.updateTag({
      property: 'og:description',
      content: data.description
    });

    this.meta.updateTag({
      property: 'og:image',
      content: image
    });

    this.meta.updateTag({
      property: 'og:url',
      content: pageUrl
    });

    this.meta.updateTag({
      property: 'og:type',
      content: 'website'
    });

    this.meta.updateTag({
      property: 'og:site_name',
      content: 'Invitiq'
    });

    /* Twitter */

    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image'
    });

    this.meta.updateTag({
      name: 'twitter:title',
      content: data.title
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content: data.description
    });

    this.meta.updateTag({
      name: 'twitter:image',
      content: image
    });

    this.setCanonical(pageUrl);

  }

  private setCanonical(url: string): void {

    let link: HTMLLinkElement | null =
      this.document.querySelector("link[rel='canonical']");

    if (!link) {

      link = this.document.createElement('link');

      link.setAttribute('rel', 'canonical');

      this.document.head.appendChild(link);

    }

    link.setAttribute('href', url);

  }

}