import imgLemonBasil from '@/assets/lemon_basil.jpg';
import imgLemonBasil2 from '@/assets/lemon_basil_2.jpg';

import imgTake5 from '@/assets/take5.jpg';
import imgTake5_2 from '@/assets/take5_2.jpg';

import imgPbjChoc from '@/assets/pbj_choc.jpg';
import imgPbjChoc2 from '@/assets/pbj_choc_2.jpg';

import imgChocolates from '@/assets/chocolates.jpg';
import imgStarchMold from '@/assets/starch_mold.mov';
import imgBottle from '@/assets/bottle.jpg';

import imgPoodleTruffles from '@/assets/poodle_truffles.jpg';

import imgHazelnutTruffle from '@/assets/hazelnut_truffle.jpg';
import imgHazelnutDessert from '@/assets/hazelnut_dessert.jpg';

import imgEarlGreyCookie from '@/assets/earl_grey_cookie.jpg';
import imgEarlGreyCookie2 from '@/assets/earl_grey_cookie_2.jpg';
import imgEarlGreyCookie3 from '@/assets/earl_grey_cookie_3.jpg';
import imgEarlGreyCookie4 from '@/assets/earl_grey_cookie_4.jpg';

import imgBiscotti from '@/assets/biscotti.jpg';
import imgBiscotti2 from '@/assets/biscotti_2.jpg';

import imgButtermilkCake from '@/assets/buttermilk_cake.jpg';

import imgSmoresDessert from '@/assets/smores_dessert.jpg';
import imgSmoresDessert2 from '@/assets/smores_dessert_2.jpg';
import imgSmoresDessert3 from '@/assets/smores_dessert_3.jpg';
import imgSmoresDessert4 from '@/assets/smores_dessert_4.jpg';
import imgSmoresDessert5 from '@/assets/smores_dessert_5.jpg';
import imgSmoresDessert6 from '@/assets/smores_dessert_6.jpg';
import imgRose from '@/assets/rose.jpg';

import imgStrawbMatcha from '@/assets/strawb_matcha.jpg';
import imgStrawbMatcha2 from '@/assets/strawb_matcha_2.jpg';

import imgCarrotCake from '@/assets/carrot_cake.jpg';

import imgGrapefruitIpp from '@/assets/grapefruit_ipp.jpg';

import imgVintageCake from '@/assets/vintage_cake.jpg';
import imgVintageCake2 from '@/assets/vintage_cake_2.jpg';

import imgFlowerCake from '@/assets/flower_cake.jpg';
import imgFlowerCake2 from '@/assets/flower_cake_2.jpg';

import imgLemonPoppy from '@/assets/lemon_poppy.jpg';

import imgRolls from '@/assets/rolls.jpg';

import imgBaguette from '@/assets/baugette.jpg';

import imgJewelBar from '@/assets/jewel_bar.jpg';

export interface Project {  
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  flavor?: string;
  technique?: string;
  gallery: string[];
}

export const projects: Project[] = [
  {
    id: 'lemon-blueberry-basil-cake',
    title: 'Lemon Blueberry Basil Cake',
    category: 'Cakes',
    image: imgLemonBasil,
    description: 'Entrement. Lemon mousse, basil cremeux, wild blueberry compote, citrus chiffon, raspberry jam, sugar cookie, cocoa butter spray.',
    gallery: [imgLemonBasil2]
  },
  {
    id: 'take-5-entrement',
    title: '“Take 5” Entrement',
    category: 'Cakes',
    image: imgTake5,
    description: 'Peanut Butter mousse, chocolate flourless cake, toasted peanuts, caramel cremeux, gianduja pretzel crunch, chocolate cookie.',
    flavor: 'Bright Amalfi lemon, brown butter, vanilla bean, toasted egg white.',
    technique: 'glazing',
    gallery: [imgTake5_2]
  },
  {
    id: 'pbj-chocolate',
    title: 'PBJ Chocolate',
    category: 'Chocolate and Confections',
    image: imgPbjChoc,
    description: 'Peanut Butter gianduja, raspberry jelly, dark chocolate.',
    flavor: '',
    technique: 'Chocolate tempering and dipping',
    gallery: [imgPbjChoc2]
  },
  {
    id: 'assorted-chocolates',
    title: 'Assorted Chocolates',
    category: 'Chocolate and Confections',
    image: imgChocolates,
    description: 'JFB’s (almond, cherry, dark chocolate), raspberry caramels, liquor cordials, passion vanillas.',
    technique: 'Chocolate tempering and dipping',
    gallery: []
  },
  {
    id: 'poodle-truffles',
    title: 'Poodle Truffles',
    category: 'Chocolate and Confections',
    image: imgPoodleTruffles,
    description: 'Dark chocolate coffee truffles rolled in tight “poodle” curls.',
    technique: 'Chocolate tempering and rolling, chocolate curls',
    gallery: []
  },
  {
    id: 'honey-hazelnut-truffles',
    title: 'Honey Hazelnut Truffles',
    category: 'Chocolate and Confections',
    image: imgHazelnutTruffle,
    description: 'Milk chocolate, hazelnut praline, buckwheat honey, dipped in dark chocolate topped with toasted hazelnut.',
    technique: 'Chocolate tempering and dipping',
    gallery: []
  },
  {
    id: 'earl-grey-pinwheel-cookies',
    title: 'Earl Grey Pinwheel Cookies',
    category: 'Cookies',
    image: imgEarlGreyCookie,
    description: 'Buttery Earl Grey cookie with colorful spirals including freeze dried blueberry powder, premium earl grey tea leaves, and orange zest cookie.',
    gallery: [imgEarlGreyCookie2, imgEarlGreyCookie3, imgEarlGreyCookie4]
  },
  {
    id: 'almond-biscotti',
    title: 'Almond Biscotti',
    category: 'Cookies',
    image: imgBiscotti,
    description: 'Traditional twice baked almond biscotti dipped in dark chocolate.',
    gallery: [imgBiscotti2]
  },
  {
    id: 'chocolate-buttermilk-cake',
    title: 'Chocolate Buttermilk Cake',
    category: 'Cakes',
    image: imgButtermilkCake,
    description: 'Six layered chocolate cake with chocolate buttercream and dark chocolate ganache filling. Glazed with ganache and decorated with crispy pearls.',
    gallery: []
  },
  {
    id: 'smores-dessert',
    title: 'S’mores Dessert',
    category: 'Plated dessert',
    image: imgSmoresDessert,
    description: 'Chocolate truffle lava beignet, smoked milk chocolate Bailey\'s cremeux, graham sable sticks, graham cracker ice cream, torched vanilla marshmallow meringue rose, white chocolate flame decor.',
    gallery: [imgSmoresDessert2, imgSmoresDessert3, imgSmoresDessert4, imgSmoresDessert5, imgSmoresDessert6]
  },
  {
    id: 'strawberry-matcha-cake',
    title: 'Strawberry Matcha Cake',
    category: 'Cakes',
    image: imgStrawbMatcha,
    description: 'Premium grade matcha, strawberry compote filling, stabilized strawberry whipped cream.',
    gallery: [imgStrawbMatcha2]
  },
  {
    id: 'carrot-cake',
    title: 'Carrot Cake',
    category: 'Cakes',
    image: imgCarrotCake,
    description: 'Cinnamon carrot cake with walnuts, cream cheese frosting, dark chocolate drizzle, marzipan carrot decor.',
    gallery: []
  },
  {
    id: 'blood-orange-ginger-flower',
    title: 'Blood Orange Ginger Flower',
    category: 'Individual Dessert',
    image: imgGrapefruitIpp,
    description: 'Honey ginger cake, ginger cremeux, blood orange mousse, blood orange pearls, white chocolate flower, red chocolate spray.',
    gallery: []
  },
  {
    id: 'vintage-style-cake',
    title: 'Vintage style cake',
    category: 'Cakes',
    image: imgVintageCake,
    description: 'Vanilla cake, lemon curd filling, piped vanilla buttercream.',
    gallery: [imgVintageCake2]
  },
  {
    id: 'floral-birthday-cake',
    title: 'Floral birthday cake',
    category: 'Cakes',
    image: imgFlowerCake,
    description: 'Delicate vanilla cake, chocolate ganache filling, piped vanilla buttercream floral arrangement.',
    gallery: [imgFlowerCake2]
  },
  {
    id: 'lemon-poppyseed-pound-cake',
    title: 'Lemon poppyseed Pound Cake',
    category: 'Cakes',
    image: imgLemonPoppy,
    description: 'Bright lemon poppy seed pound cake, sweet glaze, candied lemon slices, blue cornflowers.',
    gallery: []
  },
  {
    id: 'brioche-rolls',
    title: 'Brioche rolls',
    category: 'Breads',
    image: imgRolls,
    description: 'Buttery brioche rolls.',
    gallery: []
  },
  {
    id: 'baguette',
    title: 'Baguette',
    category: 'Breads',
    image: imgBaguette,
    description: 'Poolish baguette with 5% rye flour.',
    gallery: []
  },
  {
    id: 'jewel-bar',
    title: 'Jewel Bar',
    category: 'Chocolates and Confections',
    image: imgJewelBar,
    description: 'Hand tempered 70% dark chocolate studded with candied orange peel, dried cherry, freeze dried raspberry, candied violet petals, dried blueberries, crispy pearls.',
    gallery: []
  }
];
