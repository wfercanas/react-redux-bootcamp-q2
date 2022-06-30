import { QuantityInput } from ".";

export default {
  title: "Components / Inputs",
  components: QuantityInput,
};

export const Quantity = (args) => {
  return <QuantityInput {...args} />;
};
