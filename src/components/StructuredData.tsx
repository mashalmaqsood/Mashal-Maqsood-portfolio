import { CONTACT_INFO, SITE_URL } from '@/constants';

export const StructuredData = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mashal Maqsood',
    jobTitle: 'Full Stack Developer',
    description:
      'Full Stack Developer skilled in React.js, Next.js, TypeScript, Node.js, and MongoDB. Building responsive, high-performance web applications.',
    url: SITE_URL,
    image: `${SITE_URL}/me.jpeg`,
    sameAs: [CONTACT_INFO.linkedin, CONTACT_INFO.github],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lahore',
      addressCountry: 'Pakistan',
    },
    email: CONTACT_INFO.email,
    telephone: CONTACT_INFO.phone,
    knowsAbout: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Node.js',
      'MongoDB',
      'FastAPI',
      'Express.js',
      'GraphQL',
      'REST APIs',
      'JavaScript',
      'Web Development',
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Software Developer',
      occupationLocation: {
        '@type': 'Country',
        name: 'Pakistan',
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};
