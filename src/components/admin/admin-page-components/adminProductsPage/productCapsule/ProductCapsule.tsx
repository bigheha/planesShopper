import productStyles from "../product.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

interface ProductMutationProps {
    amount: number;
    id: string;
  }

function ProductCapsule({product} : any) {
    console.log(product);

    const mutation = useMutation({
        mutationFn: ({ amount, id }: ProductMutationProps) => {
          return axios.patch("http://localhost:3000/products", { amount, id });
        },
      });

    return (
        <div className={productStyles.container}>
        <span className={productStyles.productText}>{product.title}</span>
        <span className={productStyles.productText}>{product.type}</span>
        <div>
          <FontAwesomeIcon
            icon={["fas", "minus-circle"]}
            onClick={() => {
              const newAmount = product.amount--;
              const id = product.id;
              mutation.mutate({ amount: newAmount, id });
            }}
          />
          <input type="text" className={productStyles.productText} value={product.amount} />
          <FontAwesomeIcon
            icon={["fas", "plus-circle"]}
            onClick={() => {
              const newAmount = product.amount++;
              const id = product.id;
              mutation.mutate({ amount: newAmount, id });
            }}
          />
        </div>
        <div>
          <FontAwesomeIcon icon={["fas", "pencil-alt"]} />
          <FontAwesomeIcon icon={["fas", "trash-alt"]} />
        </div>
      </div>
    )
}

export default ProductCapsule;