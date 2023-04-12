// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css : [
    '@/assets/css/nicepage.css',
    '@/assets/css/Page-2.css',
    '@/assets/css/style.css',
  ],
  modules: [
    'nuxt-purgecss',
    ['@nuxtjs/robots', { configPath: "~/robots.config" }],
    '@nuxt/image-edge',
  ],
  image: {
    // The screen sizes predefined by `@nuxt/image`:
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536
    },
  },

  app: {
    head: {
      title: 'Green concession',
      htmlAttrs: {
        lang: 'fr'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Trouvez la voiture de vos rêves ! Découvrez notre large sélection de véhicules neufs et d\'occasion, ainsi que nos offres de financement avantageuses. Faites confiance à notre équipe de professionnels pour vous accompagner dans votre recherche et profitez d\'un service de qualité. Visitez notre site dès maintenant pour en savoir plus' }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
        }
      ],
      script: [
        {
          src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',
          integrity: 'sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo',
          crossorigin: 'anonymous',
        },
        {
          src: 'https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js',
          integrity: 'sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1',
          crossorigin: 'anonymous',
        },
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js',
          integrity: 'sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM',
          crossorigin: 'anonymous',
        },
      ],
    }
  }
})
