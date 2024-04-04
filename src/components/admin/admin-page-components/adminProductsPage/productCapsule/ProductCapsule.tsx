import productStyles from "../product.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

interface ProductMutationProps {
    amount: number;
    id: string;
  }

function ProductCapsule({product} : any) {
    const mutation = useMutation({
        mutationFn:  ({ amount, id }: ProductMutationProps) => {
          return  axios.patch("http://localhost:3000/products/changeOne", { amount, id });
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
              const id = product._id;
              mutation.mutate({  amount: product.amount - 1, id });
              product.amount--;
            }}
          />
          <input type="text" className={productStyles.productText} value={product.amount} />
          <FontAwesomeIcon
            icon={["fas", "plus-circle"]}
            onClick={ () => {
              const id = product._id;
              mutation.mutate({ amount: product.amount + 1, id: id });
              product.amount++;
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