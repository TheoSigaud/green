// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css : [
    '@/assets/css/nicepage.css',
    '@/assets/css/Page-2.css',
    '@/assets/css/style.css',
    '@/assets/css/bootstrap.min.css',
    '@/assets/css/font-awesome.css'
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
        }
      ],
      script: [
        {
          src: '@assets/js/jquery-2.1.0.min.js'
        },
        {
          src: '@assets/js/bootstrap.min.js'
        },
        {
          src: '@assets/js/popper.js'
        },
        {
          src: '@assets/js/scrollreveal.js'
        },
        {
          src: '@assets/js/waypoints.min.js'
        },
        {
          src: '@assets/js/jquery.counterup.min.js'
        },
        {
          src: '@assets/js/imgfix.min.js'
        },
        {
          src: '@assets/js/mixitup.js'
        },
        {
          src: '@assets/js/accordions.js'
        },
        {
          src: '@assets/js/custom.js'
        },
      ],
    }
  }
})
