interface Brand {
  name: string;
  path: string;
}

export const generateWebsiteStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Reviews Smart TVs",
  "url": "https://melhor-reviews.lovable.app",
  "description": "Análises completas e honestas de Smart TVs. Reviews detalhados de Hisense, Philco, Britânia, Toshiba, AOC e mais marcas.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://melhor-reviews.lovable.app/busca?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
});

export const generateOrganizationStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Reviews Smart TVs",
  "url": "https://melhor-reviews.lovable.app",
  "logo": "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&q=80",
  "description": "Portal especializado em análises de Smart TVs com reviews honestos e completos",
  "sameAs": []
});

export const generateBrandListStructuredData = (brands: Brand[]) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Marcas de TV Analisadas",
  "description": "Lista completa de marcas de Smart TVs com análises detalhadas",
  "itemListElement": brands.map((brand, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "Brand",
      "name": brand.name,
      "url": `https://melhor-reviews.lovable.app${brand.path}`
    }
  }))
});

export const generateFAQStructuredData = (questions: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": questions.map(q => ({
    "@type": "Question",
    "name": q.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": q.answer
    }
  }))
});

export const generateBreadcrumbStructuredData = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});
