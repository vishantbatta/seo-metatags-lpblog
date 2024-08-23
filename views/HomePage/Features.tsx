import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import { media } from 'utils/media';

const FEATURES = [
  {
    "imageUrl": "/grid-icons/asset-1.svg",
    "title": "One-click setup",
    "description": "Get started in minutes with our easy integration process, including Google Tag Manager support."
  },
  {
    "imageUrl": "/grid-icons/asset-2.svg",
    "title": "Programmatic page support",
    "description": "Effortlessly manage meta tags for large volumes of dynamically generated pages."
  },
  {
    "imageUrl": "/grid-icons/asset-3.svg",
    "title": "Multiple meta tag sets",
    "description": "Create and test various meta tag combinations for better SEO performance on programmatic pages."
  },
  {
    "imageUrl": "/grid-icons/asset-4.svg",
    "title": "AI-powered generation",
    "description": "Generate or improve meta tags with a single click using our advanced AI technology."
  },
  {
    "imageUrl": "/grid-icons/asset-5.svg",
    "title": "A/B testing",
    "description": "Experiment with different meta tag variations to optimize your SEO strategy."
  },
  {
    "imageUrl": "/grid-icons/asset-6.svg",
    "title": "Real-time preview",
    "description": "Instantly visualize how your meta tags will appear in search results."
  },
  {
    "imageUrl": "/grid-icons/asset-7.svg",
    "title": "Bulk editing",
    "description": "Save time by making changes to multiple pages or sections simultaneously."
  },
  {
    "imageUrl": "/grid-icons/asset-8.svg",
    "title": "Version control",
    "description": "Keep track of changes and easily revert to previous versions if needed."
  },
  {
    "imageUrl": "/grid-icons/asset-9.svg",
    "title": "Performance analytics",
    "description": "Monitor the impact of your meta tag optimizations on your search rankings and traffic."
  },
];

export default function Features() {
  return (
    <Container>
      <CustomAutofitGrid>
        {FEATURES.map((singleFeature, idx) => (
          <BasicCard key={singleFeature.title} {...singleFeature} />
        ))}
      </CustomAutofitGrid>
    </Container>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
