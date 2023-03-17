// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css : [
    '@/assets/css/nicepage.css',
    '@/assets/css/Page-2.css',
  ],
  modules: [
    'nuxt-purgecss',
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
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Trouvez la voiture de vos rêves ! Découvrez notre large sélection de véhicules neufs et d\'occasion, ainsi que nos offres de financement avantageuses. Faites confiance à notre équipe de professionnels pour vous accompagner dans votre recherche et profitez d\'un service de qualité. Visitez notre site dès maintenant pour en savoir plus' }
      ],
    }
  }
})
