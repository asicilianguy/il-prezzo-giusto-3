import ProductCard from "./ProductCard";
import ProductNotes from "./ProductNotes";

interface StoreSectionProps {
     title: string;
     products: {
          image: string;
          title: string;
          brand?: string;
          weight: string;
          price: string;
          saved: string;
          notes?: string;
          hasNotes?: boolean;
          defaultOpen?: boolean;
          addNotes?: boolean;
          hasTextAreaNotes?: boolean;
     }[];
}

export default function StoreSection({ title, products }: StoreSectionProps) {
     return (
          <section className="mb-6">
               <h6 className="text-lg font-medium text-black-1 mb-3 mt-6">{title}</h6>
               {products.map((product, index) => (
                    <div key={index}>
                         <ProductCard {...product} />
                         {product.hasTextAreaNotes && <ProductNotes />}
                    </div>
               ))}
          </section>
     );
}
