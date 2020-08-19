# FOREAT Frontend Development
Online marketplace for foods and drinks ordering. Presented by RPI

## Project: FOREAT Online Marketplace
- Referensi: https://www.ismaya.com/
- Referensi tambahan: https://lunchbox.progressionstudios.com/
- Navigation menu: Shop-> mengarah ke fishop.co.id
- Booking feature for members
- Payment system integration

## Libraries
- https://react-bootstrap.github.io/
- https://shopify.github.io/js-buy-sdk/
- https://www.npmjs.com/package/react-helmet
- https://www.npmjs.com/package/graphql
- https://www.npmjs.com/package/axios
- https://www.npmjs.com/package/image-thumbnail
- https://www.npmjs.com/package/react-owl-carousel

## Task(s)
- [x] Persiapan kerangka
- [ ] Analisa kebutuhan hosting/domain
- [ ] Analisa integrasi payment system
- [ ] Speed testing
- [ ] SEO testing

## Additional Tasks
- [x] Host frontend di Firebase Hosting
- [ ] Integrasi Twilio untuk Whatsapp Bot
- [ ] Django backend terkoneksi ke Shopify API for blogging


## Command(s)
npm run deploy

## Display
- https://mshoponline.web.app/
- https://mshoponline.firebaseapp.com/

## Ideas
- Brand-name Generator: https://businessnamegenerator.com/businessname/?bname=seafood+fish+meat
- React with Shopify all complete: https://www.youtube.com/watch?v=yWyCZbSysMs&t=1589s
- Great CSS framework: https://atomizecode.com/
- Change navbar height: https://bootstrapious.com/p/how-to-change-bootstrap-navbar-height
- Shopify Theme (Polaris) on React: https://www.youtube.com/watch?v=6hiGCw-dY9M
- Shopify Polaris: https://polaris.shopify.com/components/get-started
- Shopify paging: https://medium.com/@chris.geelhoed/how-to-paginate-results-with-shopifys-graphql-api-39435a5c9246
- Free pictures: https://www.freepik.com
- Logo on top of navbar (bootstrap): https://codepen.io/davidcochran/pen/Dihnl
- Mobile friendly tester: https://search.google.com/test/mobile-friendly
- Autohide soldout variants: https://shopify.dev/tutorials/customize-theme-hide-variants-that-are-sold-out#hide-sold-out-variants-sectioned-themes-specific
- Autohide out-of-stock: https://help.shopify.com/en/manual/products/inventory/hide-out-of-stock
- Shopify NPM GraphQL: https://www.npmjs.com/package/@shopify/react-graphql
- Shopify GraphQL installed as an app: https://fishop-indonesia.myshopify.com/admin/apps/5a3c93b0e9bc8d5abf63531fcd829b5d/
- Automatic layout adjusted, move element bellow on smaller screen: https://stackoverflow.com/questions/33260188/how-can-i-move-a-div-from-top-to-bottom-on-mobile-layouts
- Mail subscription: https://www.w3schools.com/nodejs/nodejs_email.asp
- Bootstrap flex: https://getbootstrap.com/docs/4.5/utilities/flex/
- React super-easy theme: https://www.youtube.com/watch?v=tNsveb6RRGA


## Progress
### Home page
- [x] Navigation Bar
- [x] Carousel
- [x] Eat & Drink
- [x] Registration member
- [x] Member benefits
- [ ] Events and Promo
- [ ] News or Blog post

### Preview
![screenshoot](foreat-system-architecture.pngs)

## Logs
- Jul 30, 2020 [Eat and Drink]: List all store represent by best capture image linked to store description page
- Jul 30, 2020 [Eat and Drink]: Set title for each images. Put on the center of the images
- Aug 1, 2020 [News ]: Listed down some news at the bottom of the homepage
- Aug 1, 2020 [Logo ]: Prepare some stuff in CSS to put the web's logo on top of navbar
- Aug 3, 2020 [Home ]: Remove all css custom, set all components to use react-boostrap [mobile friendly ]
- Aug 3, 2020 [Home ]: Get all images from trello
- Aug 3, 2020 [Shop ]: Set breadcrumbs after banner
- Aug 4, 2020 [Shop ]: Update package.json. Plan to move react-bootstap to original bootstap
- Aug 6, 2020 [App ]: Remove react-boostrap out of the module
- Aug 6, 2020 [App ]: Create Store.js as the template for each stores
- Aug 7, 2020 [About ]: Page created, set description and put brands' logo 
- Aug 10, 2020 [News ]: Update news list view. Set anchor text as a link to read full content of the news
- Aug 10, 2020 [Member ]: Basic layout created
- Aug 12, 2020 [Home ]: Set automatic elements alignment by boostrap col-md-{number up to 12}
- Aug 12, 2020 [Home ]: Remove react-boostrap elements from the module
- Aug 13, 2020 [Footer ]: Update title and description
- Aug 13, 2020 [App ]: Focusing on user-auth process