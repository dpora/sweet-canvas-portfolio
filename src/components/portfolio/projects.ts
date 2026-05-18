import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  flavor: string;
  technique: string;
  gallery: string[];
}

export const projects: Project[] = [
  {
    id: "lemon-tart",
    title: "Citron Confit Tart",
    category: "Plated Dessert · 2024",
    image: p1,
    description:
      "A modern reimagining of the classic tarte au citron — built on a thin sablé Breton, layered with Amalfi lemon curd, and finished with torched Italian meringue kisses.",
    flavor: "Bright Amalfi lemon, brown butter, vanilla bean, toasted egg white.",
    technique: "Pâte sablée Breton · Cured lemon curd · Italian meringue piping.",
    gallery: [p1, p3, p4],
  },
  {
    id: "chocolate-entremet",
    title: "Noir Entremet",
    category: "Composed Dessert · 2024",
    image: p2,
    description:
      "Stacked 70% Valrhona chocolate spheres on a hazelnut financier base, glossed with a dark mirror glaze and finished with a disc of white chocolate and candied orange.",
    flavor: "Dark chocolate, toasted hazelnut, candied orange, sea salt.",
    technique: "Tempered chocolate · Mirror glaze · Silicone moulding.",
    gallery: [p2, p6, p1],
  },
  {
    id: "viennoiserie",
    title: "Beurre Croissant",
    category: "Viennoiserie · 2023",
    image: p3,
    description:
      "Seventy-two hour cold-fermented croissants laminated with cultured Normandy butter to produce an open, honeycomb crumb and a deeply caramelised exterior.",
    flavor: "Cultured butter, toasted wheat, honey, faint hazelnut.",
    technique: "Cold lamination · 72h ferment · Steam-injected bake.",
    gallery: [p3, p4, p1],
  },
  {
    id: "macarons",
    title: "Petits Macarons",
    category: "Confection · 2024",
    image: p4,
    description:
      "An understated palette of five seasonal macarons — Tahitian vanilla, rose-lychee, pistachio, salted caramel, and dark chocolate ganache.",
    flavor: "Almond meringue, ganache, jam, praliné.",
    technique: "Italian meringue method · 24h maturation.",
    gallery: [p4, p1, p5],
  },
  {
    id: "wedding-cake",
    title: "Atelier Wedding Cake",
    category: "Celebration · 2024",
    image: p5,
    description:
      "A three-tier ivory fondant cake with hand-shaped sugar peonies and silver dragée stems. Built on layers of vanilla génoise and elderflower buttercream.",
    flavor: "Vanilla génoise, elderflower buttercream, fresh berries.",
    technique: "Sugar floristry · Fondant sculpting · Internal armature.",
    gallery: [p5, p1, p4],
  },
  {
    id: "shortcake",
    title: "Fraise des Bois",
    category: "Plated Dessert · 2023",
    image: p6,
    description:
      "Deconstructed strawberry shortcake on warm vanilla sablé with a quenelle of crème fraîche and edible micro flowers, plated on heated slate.",
    flavor: "Wild strawberry, vanilla, crème fraîche, basil oil.",
    technique: "Sablé Breton · Quenelle · Cold plating contrast.",
    gallery: [p6, p1, p2],
  },
];
